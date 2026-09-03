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
  Type, 
  Eye, 
  Keyboard
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BOOK_GENRES, DIFFICULTY_LEVELS } from '../../data/bookQuotes';
import { BOOKS_DATABASE } from '../../data/booksDatabase';
import { quoteQueue } from '../../utils/quoteQueue';
import { sounds } from '../../utils/sound';

function cleanWord(word) {
  return (word || '').toLocaleLowerCase('tr').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’«»“”‘’—–…]/g, '').trim();
}

export default function FirstLetterGame({
  onGameOver,
  onBack,
  onSelectBook,
  highScore = 0,
  initialQuote = null,
  initialGenre = 'all',
  initialDifficulty = 'all',
  initialBookId = null
}) {
  const [phase, setPhase] = useState(initialQuote ? 'study' : 'selection');
  const [selectedGenre, setSelectedGenre] = useState(initialGenre || 'all');
  const [selectedDifficulty, setSelectedDifficulty] = useState(initialDifficulty && initialDifficulty !== 'all' ? initialDifficulty : 'medium');
  const [selectedBookId, setSelectedBookId] = useState(initialBookId || null);
  const [currentQuote, setCurrentQuote] = useState(initialQuote);

  const [words, setWords] = useState([]);
  const [typedWords, setTypedWords] = useState([]);
  const [currentWordInput, setCurrentWordInput] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const [timeLeft, setTimeLeft] = useState(15);
  const [totalStudyTime, setTotalStudyTime] = useState(15);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [isPeeking, setIsPeeking] = useState(false);
  const [score, setScore] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [startTime, setStartTime] = useState(null);

  const timerRef = useRef(null);
  const inputRef = useRef(null);

  const setupQuote = (quote) => {
    if (!quote) return;
    setCurrentQuote(quote);

    const rawWords = quote.quote.trim().split(/\s+/);
    const parsed = rawWords.map((w, idx) => {
      const match = w.match(/^([^a-zA-ZçğıöşüÇĞİÖŞÜ0-9]*)(.*?)([^a-zA-ZçğıöşüÇĞİÖŞÜ0-9]*)$/);
      const prefix = match ? match[1] : '';
      const core = match ? match[2] : w;
      const suffix = match ? match[3] : '';
      const firstLetter = core.charAt(0);
      const remainingLength = Math.max(1, core.length - 1);
      const dashes = '_'.repeat(remainingLength);

      return {
        id: idx,
        full: w,
        core,
        prefix,
        suffix,
        firstLetter,
        dashes,
        clean: cleanWord(core),
      };
    });

    setWords(parsed);
    setTypedWords(new Array(parsed.length).fill(''));
    setCurrentWordIndex(0);
    setCurrentWordInput('');
    setHintsUsed(0);

    const wordCount = rawWords.length;
    const sTime = Math.max(10, Math.min(30, Math.round(wordCount * 1.4)));
    setTimeLeft(sTime);
    setTotalStudyTime(sTime);
    setPhase('study');

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          startRecallingPhase();
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
      setupQuote(quote);
    }
  };

  useEffect(() => {
    setSelectedGenre(initialGenre || 'all');
    setSelectedBookId(initialBookId || null);
    setSelectedDifficulty(initialDifficulty && initialDifficulty !== 'all' ? initialDifficulty : 'medium');
    if (initialQuote) {
      setupQuote(initialQuote);
    } else {
      setPhase('selection');
    }
  }, [initialQuote, initialBookId, initialGenre, initialDifficulty]);

  const startRecallingPhase = () => {
    sounds.playLevelUp();
    if (timerRef.current) clearInterval(timerRef.current);
    setPhase('recalling');
    setStartTime(Date.now());
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 150);
  };

  // Handle word input submission (Space or Enter advances to next word)
  const handleInputChange = (e) => {
    const val = e.target.value;

    if (val.endsWith(' ') || val.endsWith('\n')) {
      commitCurrentWord(val.trim());
      return;
    }

    setCurrentWordInput(val);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      commitCurrentWord(currentWordInput.trim());
    } else if (e.key === 'Backspace' && currentWordInput === '' && currentWordIndex > 0) {
      // Go back to previous word
      const prevIdx = currentWordIndex - 1;
      setCurrentWordIndex(prevIdx);
      setCurrentWordInput(typedWords[prevIdx] || '');
    }
  };

  const commitCurrentWord = (wordText) => {
    if (!wordText && currentWordIndex < words.length - 1) {
      // Empty advance
      const nextIdx = currentWordIndex + 1;
      setCurrentWordIndex(nextIdx);
      setCurrentWordInput('');
      return;
    }

    sounds.playType();
    const updated = [...typedWords];
    updated[currentWordIndex] = wordText;
    setTypedWords(updated);

    if (currentWordIndex >= words.length - 1) {
      // Finished all words!
      handleSubmitAll(updated);
    } else {
      const nextIdx = currentWordIndex + 1;
      setCurrentWordIndex(nextIdx);
      setCurrentWordInput('');
    }
  };

  const handleUseHint = () => {
    if (currentWordIndex >= words.length) return;
    sounds.playClick();
    const targetWord = words[currentWordIndex].core;
    setHintsUsed(h => h + 1);
    commitCurrentWord(targetWord);
  };

  const handlePeek = () => {
    if (isPeeking) return;
    sounds.playTone(480, 'sine', 0.2, 0.1);
    setIsPeeking(true);
    setTimeout(() => setIsPeeking(false), 1200);
  };

  const handleSubmitAll = (finalTyped = typedWords) => {
    let correctCount = 0;
    words.forEach((w, idx) => {
      const user = cleanWord(finalTyped[idx] || '');
      if (user === w.clean || cleanWord(w.firstLetter + user) === w.clean) correctCount++;
    });

    const acc = Math.round((correctCount / words.length) * 100);
    const baseScore = correctCount * 50;
    const penalty = hintsUsed * 20;
    const finalScore = Math.max(10, baseScore - penalty + (acc >= 90 ? 100 : 0));

    setAccuracy(acc);
    setScore(finalScore);
    setPhase('result');

    if (acc >= 75) {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    }

    if (onGameOver) {
      onGameOver({
        gameId: 'firstLetter',
        score: finalScore,
        accuracy: acc,
        wordsCount: words.length,
      });
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (e.key === 'Enter') {
        if (phase === 'study') {
          e.preventDefault();
          startRecallingPhase();
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
            <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 bg-emerald-600/10 dark:bg-emerald-500/20 border border-emerald-600/30 dark:border-emerald-500/40 rounded-xl text-emerald-700 dark:text-emerald-300 font-bold text-xs sm:text-sm whitespace-nowrap shrink-0">
              <Timer className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{timeLeft}s Ezber</span>
            </div>
          )}

          {phase === 'recalling' && (
            <div className="flex items-center gap-1 px-2.5 sm:px-3 py-1 bg-[#FAF6EE] dark:bg-[#24201C] border border-[#D6CEBE] dark:border-[#38322B] rounded-xl text-emerald-700 dark:text-emerald-400 font-bold text-xs shrink-0 shadow-xs">
              <Type className="w-3.5 h-3.5" />
              <span>{currentWordIndex + 1} / {words.length} Kelime</span>
            </div>
          )}

          <div className="flex items-center gap-1 px-2.5 sm:px-3.5 py-1 bg-[#FAF6EE] dark:bg-[#24201C] border border-[#D6CEBE] dark:border-[#38322B] rounded-xl text-[#1C1917] dark:text-[#F5EFE4] font-bold text-xs sm:text-sm whitespace-nowrap shrink-0 shadow-xs">
            <Trophy className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Skor: {score}</span>
          </div>
        </div>
      </div>

      {/* Mode Badge & Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-600/10 dark:bg-emerald-500/20 border border-emerald-600/30 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Type className="w-3.5 h-3.5 stroke-[2.4]" />
          <span>İlk Harf Çapası & Hafıza İpuçları</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4]">
          {phase === 'selection' && 'Bir Edebi Kategori ve Seviye Seçin'}
          {phase === 'study' && 'Cümlenin Melodisini ve Akışını Ezberleyin'}
          {phase === 'recalling' && 'İlk Harf İpuçlarını Takip Ederek Kelimeleri Yazın'}
          {phase === 'result' && 'İlk Harf Hafıza Analizi'}
        </h2>
      </div>

      {/* 1. SELECTION PHASE */}
      {phase === 'selection' && (
        <div className="w-full max-w-2xl space-y-6 animate-in fade-in duration-200">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2.5">
              1. Edebi Kategori
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-56 sm:max-h-72 overflow-y-auto p-2 border border-[#D6CEBE] dark:border-[#38322B] rounded-2xl bg-white dark:bg-[#1C1917] shadow-xs">
              {BOOK_GENRES.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGenre(g.id)}
                  className={`p-3 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                    selectedGenre === g.id
                      ? 'bg-emerald-600/15 dark:bg-emerald-500/20 border-emerald-600 dark:border-emerald-500 text-emerald-800 dark:text-emerald-300 font-bold shadow-xs'
                      : 'bg-[#FAF6EE] dark:bg-[#24201C] border-[#D6CEBE] dark:border-[#38322B] text-[#44403C] dark:text-[#EDE8DF] hover:text-[#1C1917] dark:hover:text-[#F5EFE4]'
                  }`}
                >
                  <span className="text-xs font-serif font-bold truncate">{g.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2.5">
              2. Zorluk Seviyesi
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DIFFICULTY_LEVELS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDifficulty(d.id)}
                  className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                    selectedDifficulty === d.id
                      ? 'bg-emerald-600/15 dark:bg-emerald-500/20 border-emerald-600 dark:border-emerald-500 text-[#1C1917] dark:text-[#F5EFE4] shadow-xs'
                      : 'bg-white dark:bg-[#24201C] border-[#D6CEBE] dark:border-[#38322B] text-[#44403C] dark:text-[#EDE8DF] hover:text-[#1C1917] dark:hover:text-[#F5EFE4]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4]">{d.name}</span>
                  </div>
                  <p className="text-xs text-[#57534E] dark:text-[#A8A196] font-medium">{d.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => startNewRound()}
            className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>İlk Harf Egzersizini Başlat</span>
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
                className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#FAF6EE] dark:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] text-[#57534E] dark:text-[#A8A196] hover:text-[#1C1917] dark:hover:text-[#F5EFE4] hover:border-emerald-600 font-semibold transition cursor-pointer shrink-0"
              >
                <span>Tür: <strong className="text-emerald-700 dark:text-emerald-300">{BOOK_GENRES.find(g => g.id === selectedGenre)?.name || 'Tüm Türler'}</strong></span>
              </button>

              <div className="flex items-center gap-1 shrink-0">
                {['easy', 'medium', 'hard', 'legendary'].map((d) => (
                  <button
                    key={d}
                    onClick={() => {
                      setSelectedDifficulty(d);
                      const q = quoteQueue.getNextQuote(selectedGenre, d, [], selectedBookId);
                      if (q) setupQuote(q);
                    }}
                    className={`px-2 py-0.5 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                      selectedDifficulty === d
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-[#FAF6EE] dark:bg-[#282420] text-[#78716C] dark:text-[#A8A196] hover:text-[#1C1917] dark:hover:text-[#F5EFE4]'
                    }`}
                  >
                    {d === 'easy' ? 'Kısa' : d === 'medium' ? 'Orta' : d === 'hard' ? 'Uzun' : 'Tirat'}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => startNewRound()}
              className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#FAF6EE] dark:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] text-emerald-700 dark:text-emerald-300 font-bold text-xs hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition cursor-pointer shrink-0"
              title="Başka bir alıntıya geç"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sonraki Pasaj</span>
            </button>
          </div>

          <div className="w-full bg-[#E5DFD3] dark:bg-[#282420] h-2 rounded-full mb-6 overflow-hidden border border-[#D8CEBD] dark:border-[#38322B]">
            <div
              className="bg-gradient-to-r from-emerald-600 to-teal-500 h-full transition-all duration-1000 ease-linear"
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
                <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="font-bold text-emerald-700 dark:text-emerald-300 font-serif text-sm underline decoration-dotted underline-offset-2">{currentQuote.book}</span>
                <span>—</span>
                <span className="text-[#1C1917] dark:text-[#F5EFE4] font-semibold">{currentQuote.author}</span>
              </button>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-600/30 dark:border-emerald-500/30 text-[11px] font-bold">
                {words.length} Kelime
              </span>
            </div>

            <p className="text-lg sm:text-2xl font-serif font-medium text-[#1C1917] dark:text-[#F5EFE4] leading-relaxed text-center italic my-6 px-1 quote-text font-quote">
              "{currentQuote.quote}"
            </p>

            <div className="mt-4 pt-3 border-t border-[#D6CEBE] dark:border-[#38322B] flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-400 px-1 font-semibold">
              <span>💡 Baş harflerin zihninizdeki ritmini yakalayın.</span>
              <span className="hidden sm:inline text-[#57534E] dark:text-[#A8A196] font-mono bg-[#FAF6EE] dark:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] px-2 py-0.5 rounded">Enter ↵</span>
            </div>
          </div>

          <button
            onClick={startRecallingPhase}
            className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-md transition cursor-pointer"
          >
            <Check className="w-5 h-5" />
            <span>Hazırım, Baş Harflerle Yaz! (Enter ↵)</span>
          </button>
        </div>
      )}

      {/* 3. RECALLING PHASE (FIRST LETTER SCAFFOLDING) */}
      {phase === 'recalling' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] mb-4 text-xs shadow-xs">
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
              className="flex items-center gap-2 truncate text-left hover:opacity-80 transition cursor-pointer"
              title="Kitabı İncele (Egzersiz duraklatılır)"
            >
              <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <strong className="text-emerald-700 dark:text-emerald-300 font-serif truncate underline decoration-dotted underline-offset-2">{currentQuote.book}</strong>
              <span className="text-[#78716C] dark:text-[#A8A196]">•</span>
              <span className="text-[#1C1917] dark:text-[#F5EFE4] font-semibold truncate">{currentQuote.author}</span>
            </button>

            <span className="text-[#57534E] dark:text-[#A8A196] font-bold shrink-0">
              {currentWordIndex + 1} / {words.length}
            </span>
          </div>

          {isPeeking && (
            <div className="w-full p-4 rounded-2xl bg-[#FAF6EE] dark:bg-[#282420] border-2 border-emerald-600 dark:border-emerald-500 text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 text-center font-serif text-base italic mb-4 animate-in fade-in font-quote">
              "{currentQuote.quote}"
            </div>
          )}

          {/* Scaffolding Card with First Letters */}
          <div className="w-full p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1C1917] border-2 border-[#D6CEBE] dark:border-[#38322B] shadow-md mb-6">
            <div className="text-base sm:text-xl font-serif font-medium leading-loose text-center my-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
              {words.map((w, idx) => {
                const isCurrent = idx === currentWordIndex;
                const isPast = idx < currentWordIndex;
                const userVal = typedWords[idx] || '';
                const isCorrect = isPast && (cleanWord(userVal) === w.clean || cleanWord(w.firstLetter + userVal) === w.clean);

                return (
                  <span
                    key={w.id}
                    onClick={() => {
                      setCurrentWordIndex(idx);
                      setCurrentWordInput(typedWords[idx] || '');
                      if (inputRef.current) inputRef.current.focus();
                    }}
                    className={`inline-flex items-baseline px-2 py-1 rounded-xl transition cursor-pointer ${
                      isCurrent
                        ? 'bg-emerald-500/15 dark:bg-emerald-500/25 border-2 border-emerald-600 dark:border-emerald-500 scale-105 shadow-xs'
                        : isPast
                        ? isCorrect
                          ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700/60'
                          : 'bg-amber-50 dark:bg-amber-950/50 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-700/60'
                        : 'bg-[#FAF6EE] dark:bg-[#24201C] border border-[#D6CEBE] dark:border-[#38322B] text-[#57534E] dark:text-[#A8A196]'
                    }`}
                  >
                    {w.prefix}
                    <strong className="text-lg sm:text-2xl text-emerald-700 dark:text-emerald-400 font-serif font-bold">
                      {w.firstLetter}
                    </strong>
                    <span className="font-mono text-sm sm:text-base tracking-widest opacity-60">
                      {isPast ? userVal.slice(1) || w.dashes : w.dashes}
                    </span>
                    {w.suffix}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Active Word Typing Input Bar */}
          <div className="w-full max-w-md flex flex-col items-center mb-6">
            <div className="w-full flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={currentWordInput}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                placeholder={`"${words[currentWordIndex]?.firstLetter}" ile başlayan kelimeyi yazın... (Boşluk = İleri)`}
                className="flex-1 p-4 rounded-2xl bg-white dark:bg-[#1C1917] border-2 border-emerald-600/50 dark:border-emerald-500/50 focus:border-emerald-600 dark:focus:border-emerald-500 text-[#1C1917] dark:text-[#F5EFE4] placeholder-[#78716C] dark:placeholder-[#A8A196] text-base sm:text-lg font-serif text-center focus:outline-none shadow-sm transition-all"
                autoFocus
              />
              <button
                onClick={() => commitCurrentWord(currentWordInput.trim())}
                className="px-5 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition cursor-pointer shrink-0"
              >
                {currentWordIndex >= words.length - 1 ? 'Bitir' : 'İleri'}
              </button>
            </div>
            <span className="text-[11px] text-[#78716C] dark:text-[#A8A196] mt-2">
              💡 Boşluk tuşuna basarak veya Enter'a basarak sıradaki kelimeye geçebilirsiniz.
            </span>
          </div>

          {/* Controls: Hint & Peek */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleUseHint}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-[#1E1B18] hover:bg-[#FAF6EE] dark:hover:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] text-emerald-700 dark:text-emerald-400 hover:border-emerald-600 text-xs font-bold transition cursor-pointer shadow-xs"
              title="Bu kelimeyi otomatik tamamlar"
            >
              <Lightbulb className="w-4 h-4" />
              <span>Kelime İpucu ({hintsUsed})</span>
            </button>

            <button
              onClick={handlePeek}
              disabled={isPeeking}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-[#1E1B18] hover:bg-[#FAF6EE] dark:hover:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] text-[#44403C] dark:text-[#EDE8DF] text-xs font-bold transition cursor-pointer shadow-xs"
              title="1 saniyeliğine gösterir"
            >
              <Eye className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Göz Ucuyla Bak</span>
            </button>

            <button
              onClick={() => handleSubmitAll()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition cursor-pointer shadow-xs"
            >
              <Check className="w-4 h-4" />
              <span>Kontrol Et</span>
            </button>
          </div>
        </div>
      )}

      {/* 4. RESULT PHASE */}
      {phase === 'result' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full grid grid-cols-2 gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] text-center shadow-xs">
              <div className="text-xs text-[#57534E] dark:text-[#A8A196] font-medium mb-1">Doğruluk Oranı</div>
              <div className={`text-3xl font-extrabold font-serif ${accuracy >= 75 ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                %{accuracy}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] text-center shadow-xs">
              <div className="text-xs text-[#57534E] dark:text-[#A8A196] font-medium mb-1">Kazanılan Puan</div>
              <div className="text-3xl font-extrabold font-serif text-[#476C46] dark:text-[#62B889]">
                {score}
              </div>
            </div>
          </div>

          <div className="w-full p-6 rounded-3xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] shadow-md mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] dark:text-[#F5EFE4] mb-3">
              İlk Harf ve Kelime Karşılaştırması
            </h4>

            <div className="flex flex-wrap gap-2 mb-6 p-4 rounded-2xl bg-[#FAF6EE] dark:bg-[#24201C] border border-[#D6CEBE] dark:border-[#38322B]">
              {words.map((w, idx) => {
                const user = typedWords[idx] || '';
                const isCorrect = cleanWord(user) === w.clean;

                return (
                  <div
                    key={idx}
                    className={`px-3 py-1.5 rounded-xl border text-sm font-serif ${
                      isCorrect
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700/80 text-emerald-950 dark:text-emerald-200 shadow-xs'
                        : 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-700/80 text-rose-950 dark:text-rose-200'
                    }`}
                  >
                    <span className="font-bold text-emerald-700 dark:text-emerald-400 mr-1">[{w.firstLetter}]</span>
                    <span>{w.core}</span>
                    {!isCorrect && user && (
                      <span className="text-xs text-rose-600 dark:text-rose-400 line-through ml-1.5 opacity-70">
                        ({user})
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Original Literary Quote & Direct Link */}
            <div className="space-y-3 pt-4 border-t border-[#D6CEBE] dark:border-[#38322B] text-xs">
              <div>
                <span className="text-[#57534E] dark:text-[#A8A196] font-medium block mb-0.5">
                  Orijinal Eser: <strong className="text-emerald-700 dark:text-emerald-400">{currentQuote.book}</strong> ({currentQuote.author})
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
                      className="w-full flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-[#FAF6EE] dark:bg-[#24201C] hover:bg-[#F2ECE0] dark:hover:bg-[#2E2822] border border-[#D6CEBE] dark:border-[#38322B] hover:border-emerald-600 dark:hover:border-emerald-500 transition group cursor-pointer text-left shadow-2xs"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-11 rounded-lg bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#D6CEBE] dark:border-[#38322B] flex items-center justify-center text-white shrink-0 shadow-xs">
                          <BookOpen className="w-4 h-4 text-[#FAF6EE]" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Eser İncelemesi & Pasajlar</span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] text-[#57534E] dark:text-[#A8A196] font-medium">
                              {matchedBook.passages?.length || 0} Pasaj
                            </span>
                          </div>
                          <h4 className="font-serif font-bold text-sm text-[#1C1917] dark:text-[#F5EFE4] group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition truncate">
                            {matchedBook.title}
                          </h4>
                          <p className="text-[11px] text-[#57534E] dark:text-[#A8A196] truncate">
                            {matchedBook.author} • {matchedBook.year || ''}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 group-hover:translate-x-0.5 transition shrink-0 pl-2">
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
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition shadow-md cursor-pointer"
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
