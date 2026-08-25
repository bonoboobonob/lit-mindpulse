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
  Lightbulb, 
  Feather, 
  Eye, 
  Keyboard
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BOOK_GENRES, DIFFICULTY_LEVELS } from '../../data/bookQuotes';
import { BOOKS_DATABASE } from '../../data/booksDatabase';
import { quoteQueue } from '../../utils/quoteQueue';
import { sounds } from '../../utils/sound';

export default function FullTypingGame({ 
  onGameOver, 
  onBack, 
  onSelectBook,
  highScore = 0, 
  initialQuote = null, 
  initialGenre = 'all',
  initialBookId = null,
  initialDifficulty = 'all'
}) {
  const [selectedGenre, setSelectedGenre] = useState(initialGenre || 'all');
  const [selectedBookId, setSelectedBookId] = useState(initialBookId || null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(initialDifficulty || (initialBookId ? 'all' : 'medium'));
  const [currentQuote, setCurrentQuote] = useState(initialQuote);

  const shouldAutoStart = Boolean(initialQuote || initialBookId || initialGenre !== 'all' || (initialDifficulty && initialDifficulty !== 'all'));
  const [phase, setPhase] = useState(shouldAutoStart ? 'study' : 'selection'); // 'selection' | 'study' | 'typing' | 'result'
  const [timeLeft, setTimeLeft] = useState(20);
  const [totalStudyTime, setTotalStudyTime] = useState(20);
  const [typedText, setTypedText] = useState('');
  const [hintsUsed, setHintsUsed] = useState(0);
  const [peekUsed, setPeekUsed] = useState(false);
  const [isPeeking, setIsPeeking] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [timeSpentTyping, setTimeSpentTyping] = useState(0);

  // Result metrics
  const [accuracy, setAccuracy] = useState(0);
  const [score, setScore] = useState(0);
  const [diffAnalysis, setDiffAnalysis] = useState([]);
  const [wpm, setWpm] = useState(0);

  const timerRef = useRef(null);
  const inputRef = useRef(null);

  // Start study phase with non-repeating smart quote
  const startStudyPhase = (quoteToUse = null) => {
    sounds.playClick();
    if (timerRef.current) clearInterval(timerRef.current);

    let quote = quoteToUse;
    if (!quote) {
      quote = quoteQueue.getNextQuote(selectedGenre, selectedDifficulty, [], selectedBookId);
    }

    setCurrentQuote(quote);
    const diffDurations = {
      easy: 10,
      medium: 15,
      hard: 20,
      legendary: 30,
    };
    const duration = diffDurations[quote.difficulty] || 15;

    setTotalStudyTime(duration);
    setTimeLeft(duration);
    setTypedText('');
    setHintsUsed(0);
    setPeekUsed(false);
    setIsPeeking(false);
    setPhase('study');

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          startTypingPhase();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (initialQuote) {
      startStudyPhase(initialQuote);
    } else if (initialBookId || initialGenre !== 'all' || (initialDifficulty && initialDifficulty !== 'all')) {
      startStudyPhase();
    }
  }, [initialQuote, initialBookId, initialGenre, initialDifficulty]);

  // Transition to typing phase
  const startTypingPhase = () => {
    sounds.playLevelUp();
    if (timerRef.current) clearInterval(timerRef.current);
    setPhase('typing');
    setStartTime(Date.now());
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 150);
  };

  // Hint: reveals the next word
  const handleUseHint = () => {
    if (!currentQuote) return;
    sounds.playClick();
    const originalWords = currentQuote.quote.trim().split(/\s+/);
    const userWords = typedText.trim().split(/\s+/).filter(Boolean);
    const nextWordIndex = userWords.length;

    if (nextWordIndex < originalWords.length) {
      const nextWord = originalWords[nextWordIndex];
      const newText = typedText.trim() ? `${typedText.trim()} ${nextWord}` : nextWord;
      setTypedText(newText + ' ');
      setHintsUsed(h => h + 1);
    }
  };

  // Peek original sentence for 1.2 seconds with penalty
  const handlePeek = () => {
    if (isPeeking) return;
    sounds.playTone(480, 'sine', 0.2, 0.1);
    setIsPeeking(true);
    setPeekUsed(true);
    setTimeout(() => {
      setIsPeeking(false);
    }, 1200);
  };

  const resultTimestampRef = useRef(0);

  // Normalize string for comparison
  const normalize = (str) => {
    return str
      .toLocaleLowerCase('tr')
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’]/g, "")
      .trim();
  };

  // Submit and calculate accuracy / diff
  const handleSubmitTyping = () => {
    if (!currentQuote) return;
    sounds.playClick();
    if (timerRef.current) clearInterval(timerRef.current);

    const typingDuration = Math.max(1, (Date.now() - (startTime || Date.now())) / 1000);
    setTimeSpentTyping(typingDuration);

    const originalWords = currentQuote.quote.trim().split(/\s+/);
    const userWords = typedText.trim().split(/\s+/).filter(Boolean);

    let matchCount = 0;
    const diff = [];

    originalWords.forEach((origWord, idx) => {
      const userWord = userWords[idx];
      const normOrig = normalize(origWord);
      const normUser = userWord ? normalize(userWord) : '';

      if (normUser === normOrig) {
        matchCount++;
        diff.push({ word: origWord, userWord: userWord, status: 'correct' });
      } else if (userWord) {
        diff.push({ word: origWord, userWord: userWord, status: 'incorrect' });
      } else {
        diff.push({ word: origWord, userWord: null, status: 'missing' });
      }
    });

    if (userWords.length > originalWords.length) {
      for (let i = originalWords.length; i < userWords.length; i++) {
        diff.push({ word: '', userWord: userWords[i], status: 'extra' });
      }
    }

    const calculatedAccuracy = Math.round((matchCount / originalWords.length) * 100);
    const calculatedWpm = Math.round((userWords.length / (typingDuration / 60))) || 0;

    const diffMultiplier = currentQuote.difficulty === 'legendary' ? 4 : currentQuote.difficulty === 'hard' ? 3 : currentQuote.difficulty === 'medium' ? 2 : 1;
    let calculatedScore = Math.round((calculatedAccuracy * 10 * diffMultiplier) - (hintsUsed * 30) - (peekUsed ? 50 : 0));
    calculatedScore = Math.max(0, calculatedScore);

    setAccuracy(calculatedAccuracy);
    setWpm(calculatedWpm);
    setScore(calculatedScore);
    setDiffAnalysis(diff);
    
    resultTimestampRef.current = Date.now();
    setPhase('result');

    if (calculatedAccuracy >= 85) {
      sounds.playVictory();
      confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 } });
    } else {
      sounds.playError();
    }

    onGameOver({
      gameId: 'fullTyping',
      score: calculatedScore,
      accuracy: calculatedAccuracy,
      wordsCount: originalWords.length
    });
  };

  // Keyboard shortcut listener for Enter / Space navigation across phases
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (phase === 'study') {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          startTypingPhase();
        }
      } else if (phase === 'result') {
        if (e.key === 'Enter' && Date.now() - resultTimestampRef.current > 600) {
          e.preventDefault();
          startStudyPhase();
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [phase, currentQuote]);

  // Handle Textarea Enter Key
  const handleTextareaKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitTyping();
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto px-2 sm:px-4 py-2 flex flex-col items-center">
      {/* Top Navigation Bar */}
      <div className="w-full flex items-center justify-between mb-4 gap-2">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#FAF6EE] border border-[#D6CEBE] text-[#44403C] hover:text-[#1C1917] text-xs sm:text-sm font-semibold transition cursor-pointer shrink-0 shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span><span className="hidden sm:inline">Kütüphaneye </span>Dön</span>
        </button>

        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {phase === 'study' && (
            <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 bg-[#C85A32]/10 border border-[#C85A32]/40 rounded-xl text-[#B44A22] font-bold text-xs sm:text-sm whitespace-nowrap shrink-0">
              <Timer className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin text-[#B44A22] shrink-0" />
              <span>{timeLeft}s Ezber</span>
            </div>
          )}

          {phase === 'typing' && (
            <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 bg-[#8C5E3C]/10 border border-[#8C5E3C]/40 rounded-xl text-[#8C5E3C] font-bold text-xs sm:text-sm whitespace-nowrap shrink-0">
              <Keyboard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8C5E3C] shrink-0" />
              <span>Yazma Modu</span>
            </div>
          )}

          <div className="flex items-center gap-1 px-2.5 sm:px-3.5 py-1 bg-[#FAF6EE] border border-[#D6CEBE] rounded-xl text-[#1C1917] font-bold text-xs sm:text-sm whitespace-nowrap shrink-0 shadow-xs">
            <Trophy className="w-3.5 h-3.5 text-[#B44A22] shrink-0" />
            <span>Skor: {score}</span>
          </div>
        </div>
      </div>

      {/* Header Badge & Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/30 text-[#B44A22] text-xs font-bold uppercase tracking-wider mb-2">
          <Feather className="w-3.5 h-3.5 stroke-[2.4]" />
          <span>Edebi Hafıza & Tam Yazma</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
          {phase === 'selection' && 'Bir Edebi Tür & Seviye Seçin'}
          {phase === 'study' && 'Cümleyi Ruhunuza Kazıyarak Ezberleyin'}
          {phase === 'typing' && 'Hatırladığınız Cümleyi Yazın ve Enter\'a Basın'}
          {phase === 'result' && 'Hafıza Doğruluk & Yazım Analizi'}
        </h2>
      </div>

      {/* 1. SELECTION PHASE */}
      {phase === 'selection' && (
        <div className="w-full max-w-2xl space-y-6 animate-in fade-in duration-200">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#B44A22] mb-2.5">
              1. Edebi Kategori Seçin
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-56 sm:max-h-72 overflow-y-auto p-2 border border-[#D6CEBE] rounded-2xl bg-white shadow-xs">
              {BOOK_GENRES.map((genre) => (
                <button
                  key={genre.id}
                  onClick={() => setSelectedGenre(genre.id)}
                  className={`p-3 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                    selectedGenre === genre.id
                      ? 'bg-[#C85A32]/10 border-[#C85A32] text-[#B44A22] shadow-xs'
                      : 'bg-[#FAF6EE] border-[#D6CEBE] text-[#44403C] hover:text-[#1C1917] hover:border-[#C85A32]/60'
                  }`}
                >
                  <span className="text-xs font-serif font-bold truncate">{genre.name}</span>
                  <span className="text-[10px] text-[#78716C] mt-1 line-clamp-1 font-medium">{genre.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#B44A22] mb-2.5">
              2. Zorluk Seviyesi
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DIFFICULTY_LEVELS.map((diff) => (
                <button
                  key={diff.id}
                  onClick={() => setSelectedDifficulty(diff.id)}
                  className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                    selectedDifficulty === diff.id
                      ? 'bg-[#C85A32]/10 border-[#C85A32] text-[#1C1917] shadow-xs'
                      : 'bg-white border-[#D6CEBE] text-[#44403C] hover:text-[#1C1917] hover:border-[#C85A32]/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-serif font-bold text-[#1C1917]">{diff.name}</span>
                  </div>
                  <p className="text-xs text-[#57534E] font-medium">{diff.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => startStudyPhase()}
            className="w-full py-4 rounded-2xl btn-terracotta font-bold text-base shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>Alıntıyı Getir & Ezberi Başlat</span>
          </button>
        </div>
      )}

      {/* 2. STUDY PHASE */}
      {phase === 'study' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full bg-[#E5DFD3] h-2 rounded-full mb-6 overflow-hidden border border-[#D8CEBD]">
            <div
              className="bg-gradient-to-r from-[#C85A32] via-[#D4633B] to-[#9A3412] h-full transition-all duration-1000 ease-linear"
              style={{ width: `${(timeLeft / totalStudyTime) * 100}%` }}
            />
          </div>

          <div className="w-full relative p-6 sm:p-8 rounded-3xl bg-white border border-[#D6CEBE] shadow-md mb-8">
            <div className="flex items-center justify-between text-xs text-[#57534E] mb-4 pb-3 border-b border-[#D6CEBE]">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#B44A22]" />
                <span className="font-bold text-[#B44A22] font-serif text-sm">{currentQuote.book}</span>
                <span>—</span>
                <span className="text-[#1C1917] font-semibold">{currentQuote.author}</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#FAF6EE] text-[#B44A22] border border-[#D6CEBE] text-[11px] font-bold">
                {currentQuote.quote.trim().split(/\s+/).length} Kelime
              </span>
            </div>

            <p className="text-lg sm:text-2xl font-serif font-medium text-[#1C1917] leading-relaxed text-center italic my-6 px-1 quote-text font-quote">
              "{currentQuote.quote}"
            </p>

            <div className="mt-4 pt-3 border-t border-[#D6CEBE] flex items-center justify-between text-xs text-[#B44A22] px-1 font-semibold">
              <span>💡 Anahtar kavramları zihninizde sabitleyin.</span>
              <span className="hidden sm:inline text-[#57534E] font-mono bg-[#FAF6EE] border border-[#D6CEBE] px-2 py-0.5 rounded">Enter ↵</span>
            </div>
          </div>

          <button
            onClick={startTypingPhase}
            className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#588157] hover:bg-[#476C46] text-white font-bold text-sm sm:text-base shadow-md transition cursor-pointer"
          >
            <Check className="w-5 h-5" />
            <span>Ezberledim, Yazmaya Geç! (Enter ↵)</span>
          </button>
        </div>
      )}

      {/* 3. TYPING PHASE */}
      {phase === 'typing' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#D6CEBE] mb-4 text-xs shadow-xs">
            <div className="flex items-center gap-2 truncate">
              <BookOpen className="w-4 h-4 text-[#B44A22] shrink-0" />
              <strong className="text-[#B44A22] font-serif truncate">{currentQuote.book}</strong>
              <span className="text-[#78716C]">•</span>
              <span className="text-[#1C1917] font-semibold truncate">{currentQuote.author}</span>
            </div>

            <span className="text-[#57534E] font-bold shrink-0">
              {currentQuote.quote.trim().split(/\s+/).length} Kelime
            </span>
          </div>

          {isPeeking && (
            <div className="w-full p-4 rounded-2xl bg-[#FAF6EE] border-2 border-[#C85A32] text-[#B44A22] text-center font-serif text-base italic mb-4 animate-in fade-in font-quote">
              "{currentQuote.quote}"
            </div>
          )}

          <div className="w-full relative mb-4">
            <textarea
              ref={inputRef}
              rows={4}
              value={typedText}
              onChange={(e) => setTypedText(e.target.value)}
              onKeyDown={handleTextareaKeyDown}
              placeholder="Ezberlediğiniz edebi alıntıyı buraya tam olarak yazın... (Enter tuşu ile doğrula)"
              className="w-full p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#D6CEBE] focus:border-[#C85A32] text-[#1C1917] placeholder-[#78716C] text-base sm:text-lg font-serif leading-relaxed resize-none focus:outline-none shadow-sm transition-all"
            />

            <div className="absolute bottom-3 right-4 text-xs text-[#57534E] flex items-center gap-2 font-medium">
              <span className="hidden sm:inline bg-[#FAF6EE] border border-[#D6CEBE] px-2 py-0.5 rounded text-[10px] text-[#44403C]">Enter = Kontrol Et</span>
              <span>{typedText.trim() ? typedText.trim().split(/\s+/).length : 0} / {currentQuote.quote.trim().split(/\s+/).length} kelime</span>
            </div>
          </div>

          <div className="w-full flex items-center justify-between gap-2 mb-6">
            <div className="flex items-center gap-2">
              <button
                onClick={handleUseHint}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#FAF6EE] border border-[#D6CEBE] text-[#B44A22] text-xs font-bold transition cursor-pointer shadow-xs"
                title="Sıradaki kelimeyi ekler (-30 Puan)"
              >
                <Lightbulb className="w-4 h-4" />
                <span>Kelime İpucu ({hintsUsed})</span>
              </button>

              <button
                onClick={handlePeek}
                disabled={isPeeking}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#FAF6EE] border border-[#D6CEBE] text-[#44403C] text-xs font-bold transition cursor-pointer shadow-xs"
                title="1 saniyeliğine gösterir (-50 Puan)"
              >
                <Eye className="w-4 h-4 text-[#8C5E3C]" />
                <span>Göz Ucuyla Bak</span>
              </button>
            </div>

            <button
              onClick={() => setTypedText('')}
              className="text-xs text-[#57534E] hover:text-[#1C1917] font-semibold transition cursor-pointer"
            >
              Temizle
            </button>
          </div>

          <button
            onClick={handleSubmitTyping}
            disabled={!typedText.trim()}
            className="flex items-center gap-2 px-10 py-3.5 rounded-2xl btn-terracotta disabled:opacity-40 font-bold text-base shadow-md transition cursor-pointer"
          >
            <Sparkles className="w-5 h-5 fill-white" />
            <span>Doğrula ve Analizi Gör (Enter ↵)</span>
          </button>
        </div>
      )}

      {/* 4. RESULT PHASE */}
      {phase === 'result' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full grid grid-cols-3 gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-white border border-[#D6CEBE] text-center shadow-xs">
              <div className="text-xs text-[#57534E] font-medium mb-1">Doğruluk</div>
              <div className={`text-2xl sm:text-3xl font-serif font-extrabold ${accuracy >= 80 ? 'text-emerald-700' : accuracy >= 50 ? 'text-amber-700' : 'text-rose-700'}`}>
                %{accuracy}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#D6CEBE] text-center shadow-xs">
              <div className="text-xs text-[#57534E] font-medium mb-1">Yazma Hızı</div>
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#B44A22]">
                {wpm} <span className="text-xs font-normal text-[#57534E]">WPM</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#D6CEBE] text-center shadow-xs">
              <div className="text-xs text-[#57534E] font-medium mb-1">Kazanılan Puan</div>
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#8C5E3C]">
                {score}
              </div>
            </div>
          </div>

          <div className="w-full p-5 sm:p-6 rounded-3xl bg-white border border-[#D6CEBE] shadow-md mb-6">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#57534E] mb-4">
              <span>Kelime Karşılaştırması</span>
              <div className="flex items-center gap-2.5 text-[11px] font-bold normal-case">
                <span className="text-emerald-800">● Doğru</span>
                <span className="text-rose-800">● Hatalı</span>
                <span className="text-amber-800">● Eksik</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 text-sm sm:text-base font-serif leading-relaxed mb-6 max-h-48 sm:max-h-64 overflow-y-auto p-3.5 rounded-2xl bg-[#FAF6EE] border border-[#D6CEBE]">
              {diffAnalysis.map((item, idx) => {
                if (item.status === 'correct') {
                  return (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-400 font-semibold shadow-xs">
                      {item.word}
                    </span>
                  );
                } else if (item.status === 'incorrect') {
                  return (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-900 border border-rose-400 font-semibold flex items-center gap-1">
                      <span className="line-through opacity-70 text-xs">{item.userWord}</span>
                      <span>{item.word}</span>
                    </span>
                  );
                } else if (item.status === 'missing') {
                  return (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-400 font-semibold border-dashed">
                      {item.word}
                    </span>
                  );
                } else {
                  return (
                    <span key={idx} className="px-2 py-1 rounded-lg bg-stone-200 text-stone-700 line-through text-xs font-medium">
                      {item.userWord}
                    </span>
                  );
                }
              })}
            </div>

            <div className="space-y-3 pt-4 border-t border-[#D6CEBE] text-xs">
              <div>
                <span className="text-[#57534E] font-medium block mb-0.5">Orijinal Eser: <strong className="text-[#B44A22]">{currentQuote.book}</strong> ({currentQuote.author})</span>
                <p className="text-[#1C1917] italic font-serif text-sm sm:text-base quote-text leading-relaxed font-quote">
                  "{currentQuote.quote}"
                </p>
              </div>

              {/* Direct Link to Book Detail & Passages */}
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
                  <div className="pt-3 border-t border-[#D6CEBE]/60">
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
                      className="w-full flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-[#FAF6EE] hover:bg-[#F2ECE0] border border-[#D6CEBE] hover:border-[#C85A32] transition group cursor-pointer text-left shadow-2xs"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-11 rounded-lg bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#D6CEBE] flex items-center justify-center text-white shrink-0 shadow-xs">
                          <BookOpen className="w-4 h-4 text-[#FAF6EE]" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#C85A32]">Eser İncelemesi & Pasajlar</span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-white border border-[#D6CEBE] text-[#57534E] font-medium">
                              {matchedBook.passages?.length || 0} Pasaj
                            </span>
                          </div>
                          <h4 className="font-serif font-bold text-sm text-[#1C1917] group-hover:text-[#B44A22] transition truncate">
                            {matchedBook.title}
                          </h4>
                          <p className="text-[11px] text-[#57534E] truncate">
                            {matchedBook.author} • {matchedBook.year || ''}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-xs font-bold text-[#B44A22] group-hover:translate-x-0.5 transition shrink-0 pl-2">
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
              onClick={() => startStudyPhase()}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl btn-terracotta font-bold transition shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-white" />
              <span>Sıradaki Yeni Cümle (Enter ↵)</span>
            </button>

            <button
              onClick={() => startStudyPhase(currentQuote)}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-[#FAF6EE] border border-[#D6CEBE] text-[#1C1917] font-semibold text-sm transition cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Tekrar Dene</span>
            </button>

            <button
              onClick={() => setPhase('selection')}
              className="px-5 py-3 rounded-2xl bg-white hover:bg-[#FAF6EE] border border-[#D6CEBE] text-[#57534E] font-semibold text-sm transition cursor-pointer shadow-xs"
            >
              Tür / Zorluk Değiştir
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
