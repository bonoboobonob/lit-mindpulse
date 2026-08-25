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
  Feather,
  Puzzle,
  Lightbulb
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BOOK_GENRES, DIFFICULTY_LEVELS } from '../../data/bookQuotes';
import { BOOKS_DATABASE } from '../../data/booksDatabase';
import { quoteQueue } from '../../utils/quoteQueue';
import { sounds } from '../../utils/sound';

const STOPWORDS = ['ve', 'veya', 'bir', 'bu', 'şu', 'o', 'de', 'da', 'ile', 'için', 'ne', 'ise', 'ki', 'gibi', 'kadar', 'en', 'daha', 'çok', 'ama', 'fakat', 'ancak'];

export default function ClozeRecallGame({ 
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
  const [phase, setPhase] = useState(shouldAutoStart ? 'study' : 'selection'); // 'selection' | 'study' | 'testing' | 'result'
  const [timeLeft, setTimeLeft] = useState(15);
  const [totalStudyTime, setTotalStudyTime] = useState(15);
  
  // Cloze data
  const [clozeTokens, setClozeTokens] = useState([]); // array of { word, cleanTarget, prefix, suffix, isBlank, blankIndex }
  const [userInputs, setUserInputs] = useState({}); // { [blankIndex]: string }
  const [hintsRevealed, setHintsRevealed] = useState({}); // { [blankIndex]: boolean }
  const [score, setScore] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  const timerRef = useRef(null);
  const inputRefs = useRef([]);

  // Clean word helper
  const cleanWord = (w) => w.toLocaleLowerCase('tr').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’]/g, "").trim();

  // Parse raw word to separate punctuation
  const parseToken = (rawWord) => {
    const match = rawWord.match(/^([.,\/#!$%\^&\*;:{}=\-_`~()?"'’]*)(.*?)([.,\/#!$%\^&\*;:{}=\-_`~()?"'’]*)$/);
    if (!match) return { prefix: '', core: rawWord, suffix: '' };
    return {
      prefix: match[1] || '',
      core: match[2] || rawWord,
      suffix: match[3] || '',
    };
  };

  // Generate cloze blanks from quote
  const setupClozeQuote = (quote) => {
    const rawWords = quote.quote.trim().split(/\s+/);
    
    // Target blank counts per difficulty (Standardized & Balanced)
    const TARGET_BLANKS = {
      easy: 1,
      medium: 2,
      hard: 3,
      legendary: 4,
    };
    const desiredBlanks = TARGET_BLANKS[quote.difficulty] || 2;

    // Pick candidate words (core length >= 3 and not in stopwords)
    const eligibleIndices = [];
    rawWords.forEach((w, idx) => {
      const parsed = parseToken(w);
      const clean = cleanWord(parsed.core);
      if (clean.length >= 3 && !STOPWORDS.includes(clean)) {
        eligibleIndices.push(idx);
      }
    });

    // If not enough eligible words, allow any word of length >= 2
    if (eligibleIndices.length < desiredBlanks) {
      rawWords.forEach((w, idx) => {
        if (!eligibleIndices.includes(idx)) {
          const parsed = parseToken(w);
          const clean = cleanWord(parsed.core);
          if (clean.length >= 2) eligibleIndices.push(idx);
        }
      });
    }

    // Select evenly spaced indices from eligible candidates for balanced distribution
    const actualBlankCount = Math.min(desiredBlanks, eligibleIndices.length);
    const selectedBlankIndices = new Set();
    
    if (eligibleIndices.length <= actualBlankCount) {
      eligibleIndices.forEach(idx => selectedBlankIndices.add(idx));
    } else {
      const step = eligibleIndices.length / actualBlankCount;
      for (let i = 0; i < actualBlankCount; i++) {
        const candidateIndex = Math.floor(i * step + Math.min(step - 1, Math.floor(Math.random() * step)));
        selectedBlankIndices.add(eligibleIndices[Math.min(candidateIndex, eligibleIndices.length - 1)]);
      }
    }

    let bIndex = 0;
    const tokens = rawWords.map((w, idx) => {
      const parsed = parseToken(w);
      const isBlank = selectedBlankIndices.has(idx);
      const tokenObj = {
        fullWord: w,
        coreWord: parsed.core,
        prefix: parsed.prefix,
        suffix: parsed.suffix,
        cleanTarget: cleanWord(parsed.core),
        isBlank: isBlank,
        blankIndex: isBlank ? bIndex : null,
      };
      if (isBlank) bIndex++;
      return tokenObj;
    });

    setClozeTokens(tokens);
    setUserInputs({});
    setHintsRevealed({});

    const diffDurations = {
      easy: 10,
      medium: 15,
      hard: 20,
      legendary: 30,
    };
    const duration = diffDurations[quote.difficulty] || 15;
    setTotalStudyTime(duration);
    setTimeLeft(duration);
    setCurrentQuote(quote);
    setPhase('study');

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          startTestingPhase();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (initialQuote) {
      setupClozeQuote(initialQuote);
    } else if (initialBookId || initialGenre !== 'all' || (initialDifficulty && initialDifficulty !== 'all')) {
      startNewRound();
    }
  }, [initialQuote, initialBookId, initialGenre, initialDifficulty]);

  const startTestingPhase = () => {
    sounds.playLevelUp();
    if (timerRef.current) clearInterval(timerRef.current);
    setPhase('testing');
    setTimeout(() => {
      if (inputRefs.current[0]) inputRefs.current[0].focus();
    }, 150);
  };

  const handleInputChange = (blankIdx, value) => {
    setUserInputs(prev => ({ ...prev, [blankIdx]: value }));
  };

  const handleKeyDown = (e, currentBlankIdx) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const totalBlanks = clozeTokens.filter(t => t.isBlank).length;
      if (currentBlankIdx + 1 < totalBlanks) {
        if (inputRefs.current[currentBlankIdx + 1]) {
          inputRefs.current[currentBlankIdx + 1].focus();
        }
      } else {
        handleSubmit();
      }
    }
  };

  const resultTimestampRef = useRef(0);

  const handleSubmit = () => {
    sounds.playClick();
    const blanks = clozeTokens.filter(t => t.isBlank);
    let correctCount = 0;

    blanks.forEach(b => {
      const userVal = cleanWord(userInputs[b.blankIndex] || '');
      if (userVal === b.cleanTarget) {
        correctCount++;
      }
    });

    const acc = Math.round((correctCount / blanks.length) * 100);
    const hintsCount = Object.keys(hintsRevealed).length;
    const calculatedScore = Math.max(0, (correctCount * 100) - (hintsCount * 25));

    setAccuracy(acc);
    setScore(calculatedScore);
    resultTimestampRef.current = Date.now();
    setPhase('result');

    if (acc >= 75) {
      sounds.playVictory();
      confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
    } else {
      sounds.playError();
    }

    onGameOver({
      gameId: 'clozeRecall',
      score: calculatedScore,
      accuracy: acc,
      wordsCount: clozeTokens.length
    });
  };

  const startNewRound = () => {
    const quote = quoteQueue.getNextQuote(selectedGenre, selectedDifficulty, [], selectedBookId);
    setupClozeQuote(quote);
  };

  // Keyboard navigation across phases
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (phase === 'study') {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          startTestingPhase();
        }
      } else if (phase === 'result') {
        if (e.key === 'Enter' && Date.now() - resultTimestampRef.current > 600) {
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

  return (
    <div className="w-full max-w-3xl mx-auto px-2 sm:px-4 py-2 flex flex-col items-center">
      {/* Top Navigation */}
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
            <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 bg-[#8C5E3C]/10 border border-[#8C5E3C]/40 rounded-xl text-[#8C5E3C] font-bold text-xs sm:text-sm whitespace-nowrap shrink-0">
              <Timer className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin text-[#8C5E3C] shrink-0" />
              <span>{timeLeft}s Ezber</span>
            </div>
          )}

          <div className="flex items-center gap-1 px-2.5 sm:px-3.5 py-1 bg-[#FAF6EE] border border-[#D6CEBE] rounded-xl text-[#1C1917] font-bold text-xs sm:text-sm whitespace-nowrap shrink-0 shadow-xs">
            <Trophy className="w-3.5 h-3.5 text-[#B44A22] shrink-0" />
            <span>Skor: {score}</span>
          </div>
        </div>
      </div>

      {/* Mode Badge & Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8C5E3C]/10 border border-[#8C5E3C]/30 text-[#8C5E3C] text-xs font-bold uppercase tracking-wider mb-2">
          <Puzzle className="w-3.5 h-3.5 stroke-[2.2]" />
          <span>Edebi Boşluk Doldurma (Cloze Test)</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
          {phase === 'selection' && 'Bir Edebi Tür & Seviye Belirleyin'}
          {phase === 'study' && 'Öne Çıkan Kelimeleri Hafızanıza Kazıyın'}
          {phase === 'testing' && 'Gizlenen Kelimeleri Yazın (Enter ile Geç)'}
          {phase === 'result' && 'Boşluk Doldurma Değerlendirmesi'}
        </h2>
      </div>

      {/* 1. SELECTION PHASE */}
      {phase === 'selection' && (
        <div className="w-full max-w-2xl space-y-6 animate-in fade-in duration-200">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#B44A22] mb-2.5">
              1. Edebi Kategori
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-56 sm:max-h-72 overflow-y-auto p-2 border border-[#D6CEBE] rounded-2xl bg-white shadow-xs">
              {BOOK_GENRES.map(g => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGenre(g.id)}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    selectedGenre === g.id
                      ? 'bg-[#8C5E3C]/15 border-[#8C5E3C] text-[#8C5E3C] font-bold shadow-xs'
                      : 'bg-[#FAF6EE] border-[#D6CEBE] text-[#44403C] hover:text-[#1C1917]'
                  }`}
                >
                  <span className="text-xs font-serif font-bold block">{g.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#B44A22] mb-2.5">
              2. Zorluk Seviyesi
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DIFFICULTY_LEVELS.map(d => {
                const blankLabels = {
                  easy: '10s Ezber • 1 Boşluk',
                  medium: '15s Ezber • 2 Boşluk',
                  hard: '20s Ezber • 3 Boşluk',
                  legendary: '30s Ezber • 4 Boşluk',
                };
                return (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDifficulty(d.id)}
                    className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                      selectedDifficulty === d.id
                        ? 'bg-[#8C5E3C]/10 border-[#8C5E3C] text-[#1C1917]'
                        : 'bg-white border-[#D6CEBE] text-[#44403C] hover:text-[#1C1917]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-serif font-bold text-[#1C1917]">{d.name}</span>
                      <span className="text-[11px] font-bold text-[#8C5E3C] bg-[#FAF6EE] border border-[#D6CEBE] px-2 py-0.5 rounded-full">
                        {blankLabels[d.id]}
                      </span>
                    </div>
                    <span className="text-xs text-[#57534E] font-medium">{d.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={startNewRound}
            className="w-full py-4 rounded-2xl btn-terracotta font-bold text-base shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>Boşluk Doldurma Egzersizini Başlat</span>
          </button>
        </div>
      )}

      {/* 2. STUDY PHASE */}
      {phase === 'study' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full bg-[#E5DFD3] h-2 rounded-full mb-6 overflow-hidden border border-[#D8CEBD]">
            <div
              className="bg-gradient-to-r from-[#8C5E3C] to-[#C85A32] h-full transition-all duration-1000 ease-linear"
              style={{ width: `${(timeLeft / totalStudyTime) * 100}%` }}
            />
          </div>

          <div className="w-full p-6 sm:p-8 rounded-3xl bg-white border border-[#D6CEBE] shadow-md mb-8">
            <div className="flex items-center justify-between text-xs text-[#57534E] mb-4 pb-3 border-b border-[#D6CEBE]">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#8C5E3C]" />
                <span className="font-bold text-[#8C5E3C] font-serif text-sm">{currentQuote.book}</span>
                <span>—</span>
                <span className="text-[#1C1917] font-semibold">{currentQuote.author}</span>
              </div>
            </div>

            <p className="text-lg sm:text-2xl font-serif font-medium text-[#1C1917] leading-relaxed text-center italic my-6 px-1 quote-text font-quote">
              {clozeTokens.map((t, idx) => {
                if (t.isBlank) {
                  return (
                    <span key={idx} className="inline-block mx-1 my-0.5">
                      {t.prefix}
                      <span className="px-2.5 py-0.5 rounded-lg bg-[#C85A32]/15 text-[#9A3412] border border-[#C85A32]/40 not-italic font-bold font-serif shadow-xs">
                        {t.coreWord}
                      </span>
                      {t.suffix}
                    </span>
                  );
                }
                return <span key={idx} className="mx-1">{t.fullWord}</span>;
              })}
            </p>

            <div className="mt-4 pt-3 border-t border-[#D6CEBE] flex items-center justify-between text-xs text-[#8C5E3C] px-1 font-semibold">
              <span>💡 Vurgulanan kelimeleri aklınızda tutun.</span>
              <span className="hidden sm:inline text-[#57534E] font-mono bg-[#FAF6EE] border border-[#D6CEBE] px-2 py-0.5 rounded">Enter ↵</span>
            </div>
          </div>

          <button
            onClick={startTestingPhase}
            className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#588157] hover:bg-[#476C46] text-white font-bold text-sm sm:text-base shadow-md transition cursor-pointer"
          >
            <Check className="w-5 h-5" />
            <span>Ezberledim, Boşlukları Doldur! (Enter ↵)</span>
          </button>
        </div>
      )}

      {/* 3. TESTING PHASE */}
      {phase === 'testing' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full p-6 sm:p-8 rounded-3xl bg-white border border-[#D6CEBE] shadow-md mb-6">
            <div className="text-xs text-[#57534E] mb-4 pb-3 border-b border-[#D6CEBE] flex items-center justify-between font-medium">
              <span className="font-serif text-[#8C5E3C] font-bold">{currentQuote.book} ({currentQuote.author})</span>
              <span className="text-[#57534E] font-bold">{clozeTokens.filter(t => t.isBlank).length} Boşluk</span>
            </div>

            <div className="text-base sm:text-xl font-serif font-medium text-[#1C1917] leading-loose text-center my-4 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2.5 quote-text">
              {clozeTokens.map((t, idx) => {
                if (!t.isBlank) {
                  return <span key={idx} className="mx-0.5">{t.fullWord}</span>;
                }
                const bIdx = t.blankIndex;
                return (
                  <span key={idx} className="inline-flex items-center mx-0.5">
                    {t.prefix}
                    <input
                      ref={el => inputRefs.current[bIdx] = el}
                      type="text"
                      value={userInputs[bIdx] || ''}
                      onChange={(e) => handleInputChange(bIdx, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, bIdx)}
                      placeholder={`(${bIdx + 1})`}
                      className="w-24 sm:w-32 px-2 py-1 text-center font-serif text-sm sm:text-base bg-[#FAF6EE] border-2 border-[#8C5E3C] rounded-xl text-[#9A3412] placeholder-[#78716C] focus:outline-none focus:border-[#C85A32] shadow-inner font-bold"
                    />
                    {t.suffix}
                  </span>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-10 py-3.5 rounded-2xl btn-terracotta font-bold text-base shadow-md transition cursor-pointer"
          >
            <Sparkles className="w-5 h-5 fill-white" />
            <span>Kontrol Et & Sonucu Gör (Enter ↵)</span>
          </button>
        </div>
      )}

      {/* 4. RESULT PHASE */}
      {phase === 'result' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full grid grid-cols-2 gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-white border border-[#D6CEBE] text-center shadow-xs">
              <div className="text-xs text-[#57534E] font-medium mb-1">Boşluk Doğruluğu</div>
              <div className={`text-3xl font-extrabold font-serif ${accuracy >= 70 ? 'text-emerald-700' : 'text-amber-700'}`}>
                %{accuracy}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#D6CEBE] text-center shadow-xs">
              <div className="text-xs text-[#57534E] font-medium mb-1">Kazanılan Puan</div>
              <div className="text-3xl font-extrabold font-serif text-[#8C5E3C]">
                {score}
              </div>
            </div>
          </div>

          <div className="w-full p-6 rounded-3xl bg-white border border-[#D6CEBE] shadow-md mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#57534E] mb-3">Boşluk Analizi</h4>
            <div className="space-y-2.5">
              {clozeTokens.filter(t => t.isBlank).map((b, i) => {
                const userVal = cleanWord(userInputs[b.blankIndex] || '');
                const isCorrect = userVal === b.cleanTarget;

                return (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border text-sm font-serif ${
                      isCorrect
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow-xs'
                        : 'bg-rose-50 border-rose-400 text-rose-950'
                    }`}
                  >
                    <div>
                      <span className="font-sans text-xs text-[#57534E] block mb-0.5 font-medium">Boşluk #{i + 1}:</span>
                      <strong className="text-base text-[#1C1917]">{b.coreWord}</strong>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-[#57534E] block mb-0.5 font-medium">Sizin cevabınız:</span>
                      <span className="font-bold">{userInputs[b.blankIndex] || '(Boş bırakıldı)'}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Original Literary Quote & Direct Link to Book Detail */}
            <div className="space-y-3 pt-4 mt-4 border-t border-[#D6CEBE] text-xs">
              <div>
                <span className="text-[#57534E] font-medium block mb-0.5">Orijinal Eser: <strong className="text-[#B44A22]">{currentQuote.book}</strong> ({currentQuote.author})</span>
                <p className="text-[#1C1917] italic font-serif text-sm sm:text-base quote-text leading-relaxed font-quote">
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

          <div className="flex items-center gap-3">
            <button
              onClick={startNewRound}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl btn-terracotta font-bold transition shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-white" />
              <span>Sıradaki Yeni Cümle (Enter ↵)</span>
            </button>
            <button
              onClick={() => setPhase('selection')}
              className="px-5 py-3 rounded-2xl bg-white hover:bg-[#FAF6EE] border border-[#D6CEBE] text-[#57534E] font-semibold text-sm cursor-pointer shadow-xs"
            >
              Tür Değiştir
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
