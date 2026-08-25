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
  Layers,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BOOK_GENRES, DIFFICULTY_LEVELS } from '../../data/bookQuotes';
import { BOOKS_DATABASE } from '../../data/booksDatabase';
import { quoteQueue } from '../../utils/quoteQueue';
import { sounds } from '../../utils/sound';

export default function WordScrambleGame({ 
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
  const [selectedDifficulty, setSelectedDifficulty] = useState(initialDifficulty || 'all');
  const [currentQuote, setCurrentQuote] = useState(initialQuote);

  const [phase, setPhase] = useState('study'); // Always start in study mode
  const [timeLeft, setTimeLeft] = useState(15);
  const [totalStudyTime, setTotalStudyTime] = useState(15);

  const [originalTokens, setOriginalTokens] = useState([]); // array of original words
  const [scrambledPool, setScrambledPool] = useState([]); // array of { id, word, isUsed }
  const [userSequence, setUserSequence] = useState([]); // array of { id, word }
  const [diffAnalysis, setDiffAnalysis] = useState([]); // array of { placedWord, expectedWord, isCorrect, index }
  const [correctCount, setCorrectCount] = useState(0);
  const [score, setScore] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  const timerRef = useRef(null);

  const cleanWord = (w) => (w ? w.toLocaleLowerCase('tr').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’]/g, "").trim() : '');

  const startRound = (quote) => {
    const rawTokens = quote.quote.trim().split(/\s+/);
    setOriginalTokens(rawTokens);

    const pool = rawTokens.map((w, i) => ({
      id: `${w}_${i}_${Math.random()}`,
      word: w,
      isUsed: false,
    })).sort(() => 0.5 - Math.random());

    setScrambledPool(pool);
    setUserSequence([]);
    setDiffAnalysis([]);
    setCorrectCount(0);
    setCurrentQuote(quote);

    const diffDurations = {
      easy: 10,
      medium: 15,
      hard: 20,
      legendary: 30,
    };
    const duration = diffDurations[quote.difficulty] || 10;
    setTotalStudyTime(duration);
    setTimeLeft(duration);
    setPhase('study');

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          sounds.playLevelUp();
          setPhase('scramble');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    setSelectedGenre(initialGenre || 'all');
    setSelectedBookId(initialBookId || null);
    setSelectedDifficulty(initialDifficulty || 'all');
    if (initialQuote) {
      startRound(initialQuote);
    } else {
      startNewGame();
    }
  }, [initialQuote, initialBookId, initialGenre, initialDifficulty]);

  const handlePickWord = (item) => {
    if (item.isUsed) return;
    sounds.playTone(500 + userSequence.length * 35, 'triangle', 0.12, 0.12);

    setScrambledPool(prev => prev.map(p => p.id === item.id ? { ...p, isUsed: true } : p));
    setUserSequence(prev => [...prev, item]);
  };

  const handleRemoveWord = (item) => {
    sounds.playClick();
    setUserSequence(prev => prev.filter(u => u.id !== item.id));
    setScrambledPool(prev => prev.map(p => p.id === item.id ? { ...p, isUsed: false } : p));
  };

  const resultTimestampRef = useRef(0);

  const handleCheckSequence = () => {
    if (userSequence.length !== originalTokens.length) return;
    sounds.playClick();

    let matches = 0;
    const diff = userSequence.map((item, idx) => {
      const origWord = originalTokens[idx] || '';
      const isExact = item.word === origWord;
      if (isExact) matches++;
      return {
        placedWord: item.word,
        expectedWord: origWord,
        isCorrect: isExact,
        index: idx,
      };
    });

    const acc = Math.round((matches / originalTokens.length) * 100);
    const calculatedScore = Math.max(0, matches * 100);

    setCorrectCount(matches);
    setDiffAnalysis(diff);
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
      gameId: 'wordScramble',
      score: calculatedScore,
      accuracy: acc,
      wordsCount: originalTokens.length
    });
  };

  const startNewGame = () => {
    const quote = quoteQueue.getNextQuote(
      selectedGenre || initialGenre || 'all', 
      selectedDifficulty || initialDifficulty || 'all', 
      [], 
      selectedBookId !== undefined ? selectedBookId : initialBookId
    );
    startRound(quote);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (phase === 'study') {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (timerRef.current) clearInterval(timerRef.current);
          sounds.playLevelUp();
          setPhase('scramble');
        }
      } else if (phase === 'scramble') {
        if (e.key === 'Enter' && userSequence.length === originalTokens.length) {
          e.preventDefault();
          handleCheckSequence();
        }
      } else if (phase === 'result') {
        if (e.key === 'Enter' && Date.now() - resultTimestampRef.current > 600) {
          e.preventDefault();
          startNewGame();
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [phase, userSequence, originalTokens, currentQuote]);

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
            <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 bg-[#588157]/10 border border-[#588157]/40 rounded-xl text-[#476C46] font-bold text-xs sm:text-sm whitespace-nowrap shrink-0">
              <Timer className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin text-[#476C46] shrink-0" />
              <span>{timeLeft}s Ezber</span>
            </div>
          )}

          <div className="flex items-center gap-1 px-2.5 sm:px-3.5 py-1 bg-[#FAF6EE] border border-[#D6CEBE] rounded-xl text-[#1C1917] font-bold text-xs sm:text-sm whitespace-nowrap shrink-0 shadow-xs">
            <Trophy className="w-3.5 h-3.5 text-[#B44A22] shrink-0" />
            <span>Skor: {score}</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#588157]/10 border border-[#588157]/30 text-[#476C46] text-xs font-bold uppercase tracking-wider mb-2">
          <Layers className="w-3.5 h-3.5 stroke-[2.2]" />
          <span>Dokunmatik Kelime Dizme (Scramble)</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
          {phase === 'selection' && 'Tür ve Seviye Seçin'}
          {phase === 'study' && 'Kelimelerin Sırasını Aklınızda Tutun'}
          {phase === 'scramble' && 'Kelimelere Dokunarak Cümleyi Yeniden Kurun'}
          {phase === 'result' && 'Dizilim Değerlendirmesi'}
        </h2>
      </div>

      {/* 1. SELECTION */}
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
                      ? 'bg-[#588157]/15 border-[#588157] text-[#2D5A27] font-bold shadow-xs'
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
              2. Zorluk
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DIFFICULTY_LEVELS.map(d => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDifficulty(d.id)}
                  className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                    selectedDifficulty === d.id
                      ? 'bg-[#588157]/10 border-[#588157] text-[#1C1917]'
                      : 'bg-white border-[#D6CEBE] text-[#44403C] hover:text-[#1C1917]'
                  }`}
                >
                  <span className="text-sm font-serif font-bold text-[#1C1917] block">{d.name}</span>
                  <span className="text-xs text-[#57534E] font-medium">{d.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={startNewGame}
            className="w-full py-4 rounded-2xl btn-terracotta font-bold text-base shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>Kelime Dizme Egzersizini Başlat</span>
          </button>
        </div>
      )}

      {/* 2. STUDY */}
      {phase === 'study' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full bg-[#E5DFD3] h-2 rounded-full mb-6 overflow-hidden border border-[#D8CEBD]">
            <div
              className="bg-gradient-to-r from-[#588157] to-[#C85A32] h-full transition-all duration-1000 ease-linear"
              style={{ width: `${(timeLeft / totalStudyTime) * 100}%` }}
            />
          </div>

          <div className="w-full p-6 sm:p-8 rounded-3xl bg-white border border-[#D6CEBE] shadow-md mb-8">
            <div className="flex items-center justify-between text-xs text-[#57534E] mb-4 pb-3 border-b border-[#D6CEBE]">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#476C46]" />
                <span className="font-bold text-[#476C46] font-serif text-sm">{currentQuote.book}</span>
                <span>—</span>
                <span className="text-[#1C1917] font-semibold">{currentQuote.author}</span>
              </div>
            </div>

            <p className="text-lg sm:text-2xl font-serif font-medium text-[#1C1917] leading-relaxed text-center italic my-6 px-1 quote-text font-quote">
              "{currentQuote.quote}"
            </p>

            <div className="mt-4 pt-3 border-t border-[#D6CEBE] flex items-center justify-between text-xs text-[#476C46] px-1 font-semibold">
              <span>💡 Kelimelerin dizilim sırasını aklınızda tutun.</span>
              <span className="hidden sm:inline text-[#57534E] font-mono bg-[#FAF6EE] border border-[#D6CEBE] px-2 py-0.5 rounded">Enter ↵</span>
            </div>
          </div>

          <button
            onClick={() => {
              if (timerRef.current) clearInterval(timerRef.current);
              sounds.playLevelUp();
              setPhase('scramble');
            }}
            className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#588157] hover:bg-[#476C46] text-white font-bold shadow-md transition cursor-pointer"
          >
            <Check className="w-5 h-5" />
            <span>Hazırım, Dizmeye Başla! (Enter ↵)</span>
          </button>
        </div>
      )}

      {/* 3. SCRAMBLE */}
      {phase === 'scramble' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="text-xs text-[#57534E] mb-3 flex items-center justify-between w-full font-semibold">
            <span className="font-serif text-[#B44A22] font-bold">{currentQuote.book} — {currentQuote.author}</span>
            <span>{userSequence.length} / {originalTokens.length} kelime</span>
          </div>

          {/* User's assembled sequence box */}
          <div className="w-full min-h-[100px] max-h-40 sm:max-h-48 overflow-y-auto p-3 sm:p-4 rounded-3xl bg-white border-2 border-[#D6CEBE] shadow-xs mb-4 sm:mb-6 flex flex-wrap gap-1.5 sm:gap-2 items-center justify-center">
            {userSequence.length === 0 ? (
              <span className="text-xs text-[#78716C] italic font-serif">Aşağıdaki kelimelere sırasıyla dokunarak cümleyi oluşturun...</span>
            ) : (
              userSequence.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleRemoveWord(item)}
                  className="px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-[#588157]/15 border border-[#588157]/50 text-[#2D5A27] font-serif text-sm sm:text-base font-bold flex items-center gap-1 shadow-xs hover:bg-rose-50 hover:border-rose-400 hover:text-rose-800 transition cursor-pointer"
                  title="Geri almak için tıkla"
                >
                  <span>{item.word}</span>
                  <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-70" />
                </button>
              ))
            )}
          </div>

          {/* Scrambled Pool of Chips */}
          <div className="w-full flex flex-wrap gap-2 sm:gap-2.5 justify-center mb-6 sm:mb-8">
            {scrambledPool.map((item) => (
              <button
                key={item.id}
                disabled={item.isUsed}
                onClick={() => handlePickWord(item)}
                className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl font-serif text-sm sm:text-base font-semibold transition ${
                  item.isUsed
                    ? 'bg-[#F0EAE1] text-[#A8A29E] border border-[#E5DFD3] cursor-not-allowed opacity-40'
                    : 'bg-white hover:bg-[#FAF6EE] text-[#1C1917] border border-[#D6CEBE] hover:border-[#588157] shadow-xs hover:scale-105 cursor-pointer font-bold'
                }`}
              >
                {item.word}
              </button>
            ))}
          </div>

          {/* Check Button */}
          <button
            onClick={handleCheckSequence}
            disabled={userSequence.length !== originalTokens.length}
            className="flex items-center gap-2 px-10 py-3.5 rounded-2xl btn-terracotta disabled:opacity-40 font-bold shadow-md transition cursor-pointer"
          >
            <Sparkles className="w-5 h-5 fill-white" />
            <span>Cümleyi Doğrula (Enter ↵)</span>
          </button>
        </div>
      )}

      {/* 4. RESULT */}
      {phase === 'result' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          {/* Metrics Grid */}
          <div className="w-full grid grid-cols-3 gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] text-center shadow-xs">
              <div className="text-xs text-[#57534E] dark:text-[#A8A196] font-medium mb-1">Dizilim Doğruluğu</div>
              <div className={`text-2xl sm:text-3xl font-serif font-extrabold ${accuracy >= 80 ? 'text-emerald-700 dark:text-emerald-400' : accuracy >= 50 ? 'text-amber-700 dark:text-amber-400' : 'text-rose-600 dark:text-rose-400'}`}>
                %{accuracy}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] text-center shadow-xs">
              <div className="text-xs text-[#57534E] dark:text-[#A8A196] font-medium mb-1">Doğru Sıralama</div>
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#B44A22] dark:text-[#E07048]">
                {correctCount} / {originalTokens.length}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] text-center shadow-xs">
              <div className="text-xs text-[#57534E] dark:text-[#A8A196] font-medium mb-1">Kazanılan Puan</div>
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#476C46] dark:text-[#62B889]">
                {score}
              </div>
            </div>
          </div>

          {/* Word Comparison Panel */}
          <div className="w-full p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] shadow-md mb-6">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#57534E] dark:text-[#A8A196] mb-4">
              <span className="text-[#1C1917] dark:text-[#F5EFE4]">Sıralama & Doğruluk Karşılaştırması</span>
              <div className="flex items-center gap-2.5 text-[11px] font-bold normal-case">
                <span className="text-emerald-700 dark:text-emerald-400">● Doğru Konum</span>
                <span className="text-rose-600 dark:text-rose-400">● Hatalı Konum</span>
              </div>
            </div>

            {/* User Assembled Words with status */}
            <div className="mb-4">
              <span className="text-xs text-[#57534E] dark:text-[#A8A196] font-medium block mb-2">Sizin Oluşturduğunuz Dizilim:</span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 text-sm sm:text-base font-serif leading-relaxed p-3.5 rounded-2xl bg-[#FAF6EE] dark:bg-[#24201C] border border-[#D6CEBE] dark:border-[#38322B] max-h-48 sm:max-h-60 overflow-y-auto">
                {diffAnalysis.map((item, idx) => (
                  <span
                    key={idx}
                    className={`px-2.5 py-1 rounded-xl font-semibold border flex items-center gap-1.5 ${
                      item.isCorrect
                        ? 'bg-emerald-50 text-emerald-950 border-emerald-400 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-700/80 shadow-xs'
                        : 'bg-rose-50 text-rose-950 border-rose-400 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-700/80'
                    }`}
                  >
                    <span>{item.placedWord}</span>
                    {!item.isCorrect && (
                      <span className="text-[10px] bg-rose-100 text-rose-800 dark:bg-rose-900/80 dark:text-rose-200 px-1.5 py-0.5 rounded font-sans font-bold" title={`Olması gereken: ${item.expectedWord}`}>
                        ({item.expectedWord})
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Original Literary Quote */}
            <div className="pt-4 border-t border-[#D6CEBE] dark:border-[#38322B] text-xs">
              <span className="text-[#57534E] dark:text-[#A8A196] font-medium block mb-1">
                Orijinal Eser: <strong className="text-[#B44A22] dark:text-[#E07048] font-serif">{currentQuote.book}</strong> ({currentQuote.author})
              </span>
              <p className="text-[#1C1917] dark:text-[#F5EFE4] italic font-serif text-sm sm:text-base quote-text leading-relaxed font-quote">
                "{currentQuote.quote}"
              </p>

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
                  <div className="pt-3 mt-3 border-t border-[#D6CEBE]/60">
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
              onClick={startNewGame}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl btn-terracotta font-bold transition shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-white" />
              <span>Sıradaki Yeni Cümle (Enter ↵)</span>
            </button>

            <button
              onClick={() => startRound(currentQuote)}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-[#FAF6EE] border border-[#D6CEBE] text-[#1C1917] font-semibold text-sm transition cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Tekrar Dene</span>
            </button>

            <button
              onClick={() => setPhase('selection')}
              className="px-5 py-3 rounded-2xl bg-white hover:bg-[#FAF6EE] border border-[#D6CEBE] text-[#57534E] font-semibold text-sm transition cursor-pointer shadow-xs"
            >
              Tür / Seviye Değiştir
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
