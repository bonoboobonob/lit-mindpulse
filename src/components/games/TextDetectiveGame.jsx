import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  Play, 
  RotateCcw, 
  Trophy, 
  ArrowLeft, 
  ArrowRight,
  Check, 
  Timer, 
  Sparkles, 
  Search, 
  ShieldAlert, 
  Heart, 
  HelpCircle,
  Eye,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BOOK_GENRES, DIFFICULTY_LEVELS } from '../../data/bookQuotes';
import { BOOKS_DATABASE } from '../../data/booksDatabase';
import { quoteQueue } from '../../utils/quoteQueue';
import { sounds } from '../../utils/sound';
import { generateDetectiveTokens } from '../../utils/textDetectiveHelper';

export default function TextDetectiveGame({
  onGameOver,
  onBack,
  onSelectBook,
  highScore = 0,
  initialQuote = null,
  initialGenre = 'all',
  initialDifficulty = 'all',
  initialBookId = null
}) {
  const [phase, setPhase] = useState('study'); // Always start in study phase
  const [selectedGenre, setSelectedGenre] = useState(initialGenre || 'all');
  const [selectedDifficulty, setSelectedDifficulty] = useState(initialDifficulty || 'all');
  const [selectedBookId, setSelectedBookId] = useState(initialBookId || null);
  const [currentQuote, setCurrentQuote] = useState(initialQuote);
  
  // Detective game states
  const [tokens, setTokens] = useState([]);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(15);
  const [totalStudyTime, setTotalStudyTime] = useState(15);
  const [score, setScore] = useState(0);
  const [intrudersFoundCount, setIntrudersFoundCount] = useState(0);
  const [totalIntruders, setTotalIntruders] = useState(2);
  const [wrongTaps, setWrongTaps] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const hintsUsedRef = useRef(0);
  
  const timerRef = useRef(null);

  // Setup round
  const setupDetectiveQuote = (quote) => {
    if (!quote) return;
    setCurrentQuote(quote);

    // Difficulty determines intruder count & study time
    let intruderCount = 2;
    let sTime = 15;

    const diff = selectedDifficulty !== 'all' ? selectedDifficulty : quote.difficulty || 'medium';
    if (diff === 'easy') {
      intruderCount = 1;
      sTime = 12;
    } else if (diff === 'medium') {
      intruderCount = 2;
      sTime = 15;
    } else if (diff === 'hard') {
      intruderCount = 3;
      sTime = 20;
    } else if (diff === 'legendary') {
      intruderCount = 4;
      sTime = 25;
    }

    const generated = generateDetectiveTokens(quote.quote, intruderCount);
    const actualIntruders = generated.filter(t => t.isIntruder).length;

    setTokens(generated);
    setTotalIntruders(actualIntruders);
    setIntrudersFoundCount(0);
    setLives(3);
    setWrongTaps(0);
    setHintsUsed(0);
    hintsUsedRef.current = 0;
    setTimeLeft(sTime);
    setTotalStudyTime(sTime);
    setPhase('study');

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          startDetectivePhase();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const startNewRound = (specificQuote = null) => {
    sounds.playClick();
    if (timerRef.current) clearInterval(timerRef.current);

    let quote = specificQuote;
    if (!quote) {
      quote = quoteQueue.getNextQuote(
        selectedGenre || initialGenre || 'all',
        selectedDifficulty || initialDifficulty || 'all',
        [],
        selectedBookId !== undefined ? selectedBookId : initialBookId
      );
    }
    if (quote) {
      setupDetectiveQuote(quote);
    }
  };

  useEffect(() => {
    setSelectedGenre(initialGenre || 'all');
    setSelectedBookId(initialBookId || null);
    setSelectedDifficulty(initialDifficulty || 'all');
    if (initialQuote) {
      setupDetectiveQuote(initialQuote);
    } else {
      startNewRound();
    }
  }, [initialQuote, initialBookId, initialGenre, initialDifficulty]);

  // Transition to Detective Phase
  const startDetectivePhase = () => {
    sounds.playLevelUp();
    if (timerRef.current) clearInterval(timerRef.current);
    setPhase('detective');
  };

  // Handle word click during detective phase
  const handleWordClick = (token) => {
    if (phase !== 'detective' || token.isFound || token.isWronglyTapped) return;

    if (token.isIntruder) {
      // Correct suspect found!
      sounds.playSuccess();
      sounds.triggerHaptic('medium');

      const updated = tokens.map(t => t.id === token.id ? { ...t, isFound: true } : t);
      setTokens(updated);

      const newFoundCount = intrudersFoundCount + 1;
      setIntrudersFoundCount(newFoundCount);

      // Check if all intruders found
      if (newFoundCount >= totalIntruders) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
        finishRound(updated, lives, wrongTaps, hintsUsedRef.current);
      }
    } else {
      // Wrong word clicked!
      sounds.playError();
      sounds.triggerHaptic('error');

      const newWrongTaps = wrongTaps + 1;
      setWrongTaps(newWrongTaps);

      const updated = tokens.map(t => t.id === token.id ? { ...t, isWronglyTapped: true } : t);
      setTokens(updated);

      const newLives = lives - 1;
      setLives(newLives);

      if (newLives <= 0) {
        // Out of lives -> reveal all and finish
        const revealed = updated.map(t => t.isIntruder ? { ...t, isFound: true } : t);
        setTokens(revealed);
        setTimeout(() => {
          finishRound(revealed, 0, newWrongTaps, hintsUsedRef.current);
        }, 1000);
      }
    }
  };

  // Give a hint
  const handleUseHint = () => {
    if (hintsUsedRef.current >= totalIntruders) return;
    const unfoundIntruder = tokens.find(t => t.isIntruder && !t.isFound);
    if (!unfoundIntruder) return;

    sounds.playClick();
    sounds.triggerHaptic('light');
    hintsUsedRef.current += 1;
    setHintsUsed(hintsUsedRef.current);

    handleWordClick(unfoundIntruder);
  };

  // Calculate score and wrap up
  const finishRound = (finalTokens, finalLives, totalWrong, hints = hintsUsedRef.current) => {
    const found = finalTokens.filter(t => t.isIntruder && t.isFound).length;
    const baseScore = found * 100;
    const livesBonus = finalLives * 50;
    const hintPenalty = hints * 40;
    const finalScore = Math.max(20, baseScore + livesBonus - hintPenalty);

    setScore(finalScore);
    setPhase('result');

    const accuracy = totalIntruders > 0 ? Math.round((found / totalIntruders) * 100) : 100;

    if (onGameOver) {
      onGameOver({
        gameId: 'textDetective',
        score: finalScore,
        accuracy,
        wordsCount: currentQuote?.quote.trim().split(/\s+/).length || 0,
      });
    }
  };

  // Keyboard shortcut (Enter to advance)
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (e.key === 'Enter') {
        if (phase === 'study') {
          e.preventDefault();
          startDetectivePhase();
        } else if (phase === 'result') {
          e.preventDefault();
          startNewRound();
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [phase, currentQuote]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const accuracy = totalIntruders > 0 ? Math.round((intrudersFoundCount / totalIntruders) * 100) : 100;

  return (
    <div className="w-full max-w-3xl mx-auto px-2 sm:px-4 py-2 flex flex-col items-center">
      {/* Top Navigation */}
      <div className="w-full flex items-center justify-between mb-4 gap-2">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#1E1B18] hover:bg-[#FAF6EE] dark:hover:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] text-[#44403C] dark:text-[#EDE8DF] hover:text-[#1C1917] dark:hover:text-[#F5EFE4] text-xs sm:text-sm font-semibold transition cursor-pointer shrink-0 shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span><span className="hidden sm:inline">Kütüphaneye </span>Dön</span>
        </button>

        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {phase === 'study' && (
            <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 bg-[#8C5E3C]/10 dark:bg-[#D4AF37]/20 border border-[#8C5E3C]/40 dark:border-[#D4AF37]/40 rounded-xl text-[#8C5E3C] dark:text-[#D4AF37] font-bold text-xs sm:text-sm whitespace-nowrap shrink-0">
              <Timer className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin text-[#8C5E3C] dark:text-[#D4AF37] shrink-0" />
              <span>{timeLeft}s Ezber</span>
            </div>
          )}

          {phase === 'detective' && (
            <div className="flex items-center gap-1 px-2.5 sm:px-3 py-1 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 rounded-xl text-rose-700 dark:text-rose-300 font-bold text-xs shrink-0 shadow-xs">
              {[...Array(3)].map((_, i) => (
                <Heart
                  key={i}
                  className={`w-3.5 h-3.5 ${i < lives ? 'fill-rose-500 text-rose-500' : 'text-stone-300 dark:text-stone-700'}`}
                />
              ))}
            </div>
          )}

          <div className="flex items-center gap-1 px-2.5 sm:px-3.5 py-1 bg-[#FAF6EE] dark:bg-[#24201C] border border-[#D6CEBE] dark:border-[#38322B] rounded-xl text-[#1C1917] dark:text-[#F5EFE4] font-bold text-xs sm:text-sm whitespace-nowrap shrink-0 shadow-xs">
            <Trophy className="w-3.5 h-3.5 text-[#B44A22] dark:text-[#E07048] shrink-0" />
            <span>Skor: {score}</span>
          </div>
        </div>
      </div>

      {/* Mode Badge & Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#E07048]/15 border border-[#C85A32]/30 dark:border-[#E07048]/40 text-[#B44A22] dark:text-[#E07048] text-xs font-bold uppercase tracking-wider mb-2">
          <Search className="w-3.5 h-3.5 stroke-[2.4]" />
          <span>Edebi Metin Dedektifi</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4]">
          {phase === 'selection' && 'Bir Edebi Kategori ve Seviye Seçin'}
          {phase === 'study' && 'Orijinal Metni Dikkatle Zihninize Kazıyın'}
          {phase === 'detective' && 'Metne Sızan Sahte / Değiştirilmiş Kelimeleri Bulun!'}
          {phase === 'result' && 'Edebi Dedektiflik Raporu'}
        </h2>
      </div>

      {/* 1. SELECTION PHASE */}
      {phase === 'selection' && (
        <div className="w-full max-w-2xl space-y-6 animate-in fade-in duration-200">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#B44A22] dark:text-[#E07048] mb-2.5">
              1. Edebi Kategori Seçin
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-56 sm:max-h-72 overflow-y-auto p-2 border border-[#D6CEBE] dark:border-[#38322B] rounded-2xl bg-white dark:bg-[#1C1917] shadow-xs">
              {BOOK_GENRES.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGenre(g.id)}
                  className={`p-3 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                    selectedGenre === g.id
                      ? 'bg-[#C85A32]/10 dark:bg-[#E07048]/20 border-[#C85A32] dark:border-[#E07048] text-[#B44A22] dark:text-[#E07048] shadow-xs'
                      : 'bg-[#FAF6EE] dark:bg-[#24201C] border-[#D6CEBE] dark:border-[#38322B] text-[#44403C] dark:text-[#EDE8DF] hover:text-[#1C1917] dark:hover:text-[#F5EFE4]'
                  }`}
                >
                  <span className="text-xs font-serif font-bold truncate">{g.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#B44A22] dark:text-[#E07048] mb-2.5">
              2. Zorluk Seviyesi
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DIFFICULTY_LEVELS.map((d) => {
                const intruderLabels = {
                  easy: '1 Sahte Kelime • 12s Ezber',
                  medium: '2 Sahte Kelime • 15s Ezber',
                  hard: '3 Sahte Kelime • 20s Ezber',
                  legendary: '4 Sahte Kelime • 25s Ezber',
                };
                return (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDifficulty(d.id)}
                    className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                      selectedDifficulty === d.id
                        ? 'bg-[#C85A32]/10 dark:bg-[#E07048]/20 border-[#C85A32] dark:border-[#E07048] text-[#1C1917] dark:text-[#F5EFE4] shadow-xs'
                        : 'bg-white dark:bg-[#24201C] border-[#D6CEBE] dark:border-[#38322B] text-[#44403C] dark:text-[#EDE8DF] hover:text-[#1C1917] dark:hover:text-[#F5EFE4]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4]">{d.name}</span>
                      <span className="text-[11px] font-bold text-[#B44A22] dark:text-[#E07048] bg-[#FAF6EE] dark:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] px-2 py-0.5 rounded-full">
                        {intruderLabels[d.id]}
                      </span>
                    </div>
                    <p className="text-xs text-[#57534E] dark:text-[#A8A196] font-medium">{d.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => startNewRound()}
            className="w-full py-4 rounded-2xl btn-terracotta font-bold text-base shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>Alıntıyı İncele & Dedektifliği Başlat</span>
          </button>
        </div>
      )}

      {/* 2. STUDY PHASE */}
      {phase === 'study' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          {/* Quick Preferences Bar */}
          <div className="w-full flex items-center justify-between gap-2 mb-3 p-2 rounded-2xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] shadow-xs text-xs">
            <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
              <button
                onClick={() => setPhase('selection')}
                className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#FAF6EE] dark:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] text-[#57534E] dark:text-[#A8A196] hover:text-[#1C1917] dark:hover:text-[#F5EFE4] hover:border-[#C85A32] font-semibold transition cursor-pointer shrink-0"
              >
                <span>Tür: <strong className="text-[#B44A22] dark:text-[#E07048]">{BOOK_GENRES.find(g => g.id === selectedGenre)?.name || 'Tüm Türler'}</strong></span>
              </button>

              <div className="flex items-center gap-1 shrink-0">
                {['easy', 'medium', 'hard', 'legendary'].map((d) => (
                  <button
                    key={d}
                    onClick={() => {
                      setSelectedDifficulty(d);
                      const q = quoteQueue.getNextQuote(selectedGenre, d, [], selectedBookId);
                      if (q) setupDetectiveQuote(q);
                    }}
                    className={`px-2 py-0.5 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                      selectedDifficulty === d
                        ? 'bg-[#C85A32] text-white shadow-xs'
                        : 'bg-[#FAF6EE] dark:bg-[#282420] text-[#78716C] dark:text-[#A8A196] hover:text-[#1C1917] dark:hover:text-[#F5EFE4]'
                    }`}
                  >
                    {d === 'easy' ? '1 Sahte' : d === 'medium' ? '2 Sahte' : d === 'hard' ? '3 Sahte' : '4 Sahte'}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => startNewRound()}
              className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#FAF6EE] dark:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] text-[#B44A22] dark:text-[#E07048] font-bold text-xs hover:bg-[#F2ECE1] transition cursor-pointer shrink-0"
              title="Başka bir alıntıya geç"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sonraki Alıntı</span>
            </button>
          </div>

          <div className="w-full bg-[#E5DFD3] dark:bg-[#282420] h-2 rounded-full mb-6 overflow-hidden border border-[#D8CEBD] dark:border-[#38322B]">
            <div
              className="bg-gradient-to-r from-[#C85A32] via-[#D4633B] to-[#9A3412] h-full transition-all duration-1000 ease-linear"
              style={{ width: `${(timeLeft / totalStudyTime) * 100}%` }}
            />
          </div>

          <div className="w-full relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] shadow-md mb-8">
            <div className="flex items-center justify-between text-xs text-[#57534E] dark:text-[#A8A196] mb-4 pb-3 border-b border-[#D6CEBE] dark:border-[#38322B]">
              <button
                onClick={() => {
                  const targetBookId = currentQuote.bookId || BOOKS_DATABASE.find(b => 
                    b.title.toLowerCase() === currentQuote.book?.toLowerCase() ||
                    (currentQuote.book && b.title.toLowerCase().includes(currentQuote.book.toLowerCase()))
                  )?.id;
                  if (onSelectBook && targetBookId) {
                    onSelectBook(targetBookId, { quote: currentQuote });
                  }
                }}
                className="flex items-center gap-2 text-left hover:opacity-80 transition cursor-pointer"
                title="Kitabı İncele (Egzersiz duraklatılır)"
              >
                <BookOpen className="w-4 h-4 text-[#B44A22] dark:text-[#E07048]" />
                <span className="font-bold text-[#B44A22] dark:text-[#E07048] font-serif text-sm underline decoration-dotted underline-offset-2">{currentQuote.book}</span>
                <span>—</span>
                <span className="text-[#1C1917] dark:text-[#F5EFE4] font-semibold">{currentQuote.author}</span>
              </button>
              <span className="px-2.5 py-0.5 rounded-full bg-[#FAF6EE] dark:bg-[#282420] text-[#B44A22] dark:text-[#E07048] border border-[#D6CEBE] dark:border-[#38322B] text-[11px] font-bold">
                {totalIntruders} Sahte Kelime Sızacak
              </span>
            </div>

            <p className="text-lg sm:text-2xl font-serif font-medium text-[#1C1917] dark:text-[#F5EFE4] leading-relaxed text-center italic my-6 px-1 quote-text font-quote">
              "{currentQuote.quote}"
            </p>

            <div className="mt-4 pt-3 border-t border-[#D6CEBE] dark:border-[#38322B] flex items-center justify-between text-xs text-[#B44A22] dark:text-[#E07048] px-1 font-semibold">
              <span>💡 Yazarın kullandığı kelime tercihlerine ve nüanslara dikkat edin.</span>
              <span className="hidden sm:inline text-[#57534E] dark:text-[#A8A196] font-mono bg-[#FAF6EE] dark:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] px-2 py-0.5 rounded">Enter ↵</span>
            </div>
          </div>

          <button
            onClick={startDetectivePhase}
            className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#588157] hover:bg-[#476C46] text-white font-bold text-sm sm:text-base shadow-md transition cursor-pointer"
          >
            <Check className="w-5 h-5" />
            <span>Ezberledim, Dedektife Geç! (Enter ↵)</span>
          </button>
        </div>
      )}

      {/* 3. DETECTIVE PHASE */}
      {phase === 'detective' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] mb-4 text-xs shadow-xs">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#B44A22] dark:text-[#E07048] shrink-0" />
              <span className="text-[#57534E] dark:text-[#A8A196] font-medium">Hedef:</span>
              <strong className="text-[#B44A22] dark:text-[#E07048] font-bold">{intrudersFoundCount} / {totalIntruders} Sahte Kelime Bulundu</strong>
            </div>

            <button
              onClick={handleUseHint}
              disabled={hintsUsed >= totalIntruders}
              className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-[#FAF6EE] dark:bg-[#282420] text-[#B44A22] dark:text-[#E07048] border border-[#D6CEBE] dark:border-[#38322B] font-bold hover:bg-[#F2ECE1] disabled:opacity-40 transition cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>İpucu ({totalIntruders - hintsUsed})</span>
            </button>
          </div>

          <div className="w-full p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1C1917] border-2 border-[#D6CEBE] dark:border-[#38322B] shadow-md mb-6">
            <div className="text-xs text-[#57534E] dark:text-[#A8A196] mb-4 pb-3 border-b border-[#D6CEBE] dark:border-[#38322B] flex items-center justify-between font-medium">
              <button
                onClick={() => {
                  const targetBookId = currentQuote.bookId || BOOKS_DATABASE.find(b => 
                    b.title.toLowerCase() === currentQuote.book?.toLowerCase() ||
                    (currentQuote.book && b.title.toLowerCase().includes(currentQuote.book.toLowerCase()))
                  )?.id;
                  if (onSelectBook && targetBookId) {
                    onSelectBook(targetBookId, { quote: currentQuote });
                  }
                }}
                className="font-serif text-[#B44A22] dark:text-[#E07048] font-bold underline decoration-dotted underline-offset-2 hover:opacity-80 transition cursor-pointer text-left"
                title="Kitabı İncele (Egzersiz duraklatılır)"
              >
                {currentQuote.book} ({currentQuote.author})
              </button>
              <span className="text-[#78716C] dark:text-[#A8A196]">Şüpheli kelimelerin üzerine dokunun</span>
            </div>

            {/* Interactive Sentence Words */}
            <div className="text-base sm:text-xl font-serif font-medium leading-loose text-center my-4 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2">
              {tokens.map((token) => {
                if (token.isFound && token.isIntruder) {
                  // Successfully restored original word
                  return (
                    <span key={token.id} className="inline-flex items-center">
                      {token.prefix}
                      <span className="px-2.5 py-0.5 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-400 dark:bg-emerald-950/70 dark:text-emerald-200 dark:border-emerald-700/80 font-bold font-serif shadow-xs animate-in zoom-in-95 duration-200">
                        {token.core}
                      </span>
                      {token.suffix}
                    </span>
                  );
                }

                if (token.isWronglyTapped) {
                  // User mistakenly tapped an authentic word
                  return (
                    <span key={token.id} className="inline-flex items-center">
                      {token.prefix}
                      <span className="px-2 py-0.5 rounded-lg bg-rose-50 text-rose-800 border border-rose-300 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800 line-through opacity-70">
                        {token.core}
                      </span>
                      {token.suffix}
                    </span>
                  );
                }

                const displayedText = token.isIntruder ? token.impostorWord : token.core;

                return (
                  <span key={token.id} className="inline-flex items-center">
                    {token.prefix}
                    <button
                      type="button"
                      onClick={() => handleWordClick(token)}
                      className="px-1.5 py-0.5 rounded-lg hover:bg-[#C85A32]/10 dark:hover:bg-[#E07048]/20 hover:text-[#B44A22] dark:hover:text-[#E07048] hover:border-[#C85A32]/40 transition cursor-pointer border border-transparent font-serif"
                    >
                      {displayedText}
                    </button>
                    {token.suffix}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="text-xs text-[#78716C] dark:text-[#A8A196] text-center font-medium">
            💡 Metne sızan <strong className="text-[#B44A22] dark:text-[#E07048]">{totalIntruders - intrudersFoundCount} sahte kelime</strong> kaldı. Hatalı tahmin canınızı azaltır.
          </div>
        </div>
      )}

      {/* 4. RESULT PHASE */}
      {phase === 'result' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full grid grid-cols-3 gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] text-center shadow-xs">
              <div className="text-xs text-[#57534E] dark:text-[#A8A196] font-medium mb-1">Tespit Başarısı</div>
              <div className={`text-2xl sm:text-3xl font-serif font-extrabold ${accuracy >= 80 ? 'text-emerald-700 dark:text-emerald-400' : accuracy >= 50 ? 'text-amber-700 dark:text-amber-400' : 'text-rose-600 dark:text-rose-400'}`}>
                %{accuracy}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] text-center shadow-xs">
              <div className="text-xs text-[#57534E] dark:text-[#A8A196] font-medium mb-1">Bulunan Sahteler</div>
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#B44A22] dark:text-[#E07048]">
                {intrudersFoundCount} / {totalIntruders}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] text-center shadow-xs">
              <div className="text-xs text-[#57534E] dark:text-[#A8A196] font-medium mb-1">Kazanılan Puan</div>
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#476C46] dark:text-[#62B889]">
                {score}
              </div>
            </div>
          </div>

          <div className="w-full p-6 rounded-3xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] shadow-md mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] dark:text-[#F5EFE4] mb-3">
              Sahte Kelimeler ve Orijinal Edebi Karşılıkları
            </h4>

            <div className="space-y-2.5 mb-6">
              {tokens.filter(t => t.isIntruder).map((token, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-[#D6CEBE] dark:border-[#38322B] bg-[#FAF6EE] dark:bg-[#24201C] text-sm font-serif"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#57534E] dark:text-[#A8A196] font-sans font-medium">#{i + 1} Sahte:</span>
                    <span className="line-through text-rose-700 dark:text-rose-400 font-bold">{token.impostorWord}</span>
                  </div>

                  <div className="flex items-center gap-1 text-emerald-800 dark:text-emerald-300 font-bold">
                    <span className="text-xs text-[#57534E] dark:text-[#A8A196] font-sans font-medium">Doğrusu:</span>
                    <span className="px-2 py-0.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700">
                      {token.core}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Original Literary Quote & Direct Link to Book Detail */}
            <div className="space-y-3 pt-4 border-t border-[#D6CEBE] dark:border-[#38322B] text-xs">
              <div>
                <span className="text-[#57534E] dark:text-[#A8A196] font-medium block mb-0.5">
                  Orijinal Eser: <strong className="text-[#B44A22] dark:text-[#E07048]">{currentQuote.book}</strong> ({currentQuote.author})
                </span>
                <p className="text-[#1C1917] dark:text-[#F5EFE4] italic font-serif text-sm sm:text-base quote-text leading-relaxed font-quote">
                  "{currentQuote.quote}"
                </p>
              </div>

              {(() => {
                const matchedBook = currentQuote.bookId 
                  ? BOOKS_DATABASE.find(b => b.id === currentQuote.bookId)
                  : BOOKS_DATABASE.find(b => 
                      b.title.toLowerCase() === currentQuote.book?.toLowerCase() ||
                      b.passages?.some(p => p.id === currentQuote.id || p.quote === currentQuote.quote) ||
                      b.title.toLowerCase().includes(currentQuote.book?.toLowerCase() || '') ||
                      (currentQuote.book && currentQuote.book.toLowerCase().includes(b.title.toLowerCase()))
                    );

                if (!matchedBook) return null;

                return (
                  <div className="pt-3 border-t border-[#D6CEBE]/60 dark:border-[#38322B]/60">
                    <button
                      onClick={() => {
                        sounds.playClick();
                        if (onSelectBook) {
                          onSelectBook(matchedBook.id, {
                            quote: currentQuote,
                            genre: selectedGenre,
                            difficulty: selectedDifficulty,
                            bookId: selectedBookId
                          });
                        }
                      }}
                      className="w-full flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-[#FAF6EE] dark:bg-[#24201C] hover:bg-[#F2ECE0] dark:hover:bg-[#2E2822] border border-[#D6CEBE] dark:border-[#38322B] hover:border-[#C85A32] dark:hover:border-[#E07048] transition group cursor-pointer text-left shadow-2xs"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-11 rounded-lg bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#D6CEBE] dark:border-[#38322B] flex items-center justify-center text-white shrink-0 shadow-xs">
                          <BookOpen className="w-4 h-4 text-[#FAF6EE]" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#C85A32] dark:text-[#E07048]">Eser İncelemesi & Pasajlar</span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] text-[#57534E] dark:text-[#A8A196] font-medium">
                              {matchedBook.passages?.length || 0} Pasaj
                            </span>
                          </div>
                          <h4 className="font-serif font-bold text-sm text-[#1C1917] dark:text-[#F5EFE4] group-hover:text-[#B44A22] dark:group-hover:text-[#E07048] transition truncate">
                            {matchedBook.title}
                          </h4>
                          <p className="text-[11px] text-[#57534E] dark:text-[#A8A196] truncate">
                            {matchedBook.author} • {matchedBook.year || ''}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-xs font-bold text-[#B44A22] dark:text-[#E07048] group-hover:translate-x-0.5 transition shrink-0 pl-2">
                        <span className="hidden sm:inline">Esere Git</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </button>
                  </div>
                );
              })()}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => startNewRound()}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl btn-terracotta font-bold transition shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-white" />
              <span>Sıradaki Yeni Cümle (Enter ↵)</span>
            </button>

            <button
              onClick={() => startNewRound(currentQuote)}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white dark:bg-[#1E1B18] hover:bg-[#FAF6EE] dark:hover:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] text-[#1C1917] dark:text-[#F5EFE4] font-semibold text-sm transition cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Tekrar Dene</span>
            </button>

            <button
              onClick={() => setPhase('selection')}
              className="px-5 py-3 rounded-2xl bg-white dark:bg-[#1E1B18] hover:bg-[#FAF6EE] dark:hover:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] text-[#57534E] dark:text-[#A8A196] hover:text-[#1C1917] dark:hover:text-[#F5EFE4] font-semibold text-sm transition cursor-pointer shadow-xs"
            >
              Tür / Zorluk Değiştir
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
