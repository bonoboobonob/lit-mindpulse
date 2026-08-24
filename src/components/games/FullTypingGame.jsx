import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  Play, 
  RotateCcw, 
  Trophy, 
  ArrowLeft, 
  Check, 
  Timer, 
  Sparkles, 
  Lightbulb, 
  Feather, 
  Eye, 
  Keyboard
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BOOK_GENRES, DIFFICULTY_LEVELS, BOOK_QUOTES } from '../../data/bookQuotes';
import { quoteQueue } from '../../utils/quoteQueue';
import { sounds } from '../../utils/sound';

export default function FullTypingGame({ 
  onGameOver, 
  onBack, 
  highScore = 0, 
  initialQuote = null 
}) {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('medium');
  const [currentQuote, setCurrentQuote] = useState(initialQuote);

  const [phase, setPhase] = useState(initialQuote ? 'study' : 'selection'); // 'selection' | 'study' | 'typing' | 'result'
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
      quote = quoteQueue.getNextQuote(selectedGenre, selectedDifficulty);
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
    }
  }, [initialQuote]);

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
    
    // Set timestamp to prevent accidental instant skip on the same Enter press
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
        // Enforce 600ms cooldown so the Enter key used for submitting does NOT skip the result screen
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
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs sm:text-sm transition cursor-pointer shrink-0"
        >
          <ArrowLeft className="w-4 h-4" />
          <span><span className="hidden sm:inline">Kütüphaneye </span>Dön</span>
        </button>

        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {phase === 'study' && (
            <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-300 font-bold text-xs sm:text-sm whitespace-nowrap shrink-0">
              <Timer className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin text-amber-400 shrink-0" />
              <span>{timeLeft}s Ezber</span>
            </div>
          )}

          {phase === 'typing' && (
            <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 bg-indigo-500/15 border border-indigo-500/30 rounded-xl text-indigo-300 font-bold text-xs sm:text-sm whitespace-nowrap shrink-0">
              <Keyboard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400 shrink-0" />
              <span>Yazma Modu</span>
            </div>
          )}

          <div className="flex items-center gap-1 px-2.5 sm:px-3 py-1 bg-amber-950/40 border border-amber-500/30 rounded-xl text-amber-300 font-bold text-xs sm:text-sm whitespace-nowrap shrink-0">
            <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Skor: {score}</span>
          </div>
        </div>
      </div>

      {/* Header Badge */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <Feather className="w-3.5 h-3.5" />
          <span>Edebi Hafıza & Tam Yazma</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-100">
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
            <label className="block text-xs font-bold uppercase tracking-wider text-amber-400/90 mb-2.5">
              1. Edebi Kategori Seçin
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-56 sm:max-h-72 overflow-y-auto p-2 border border-slate-800/80 rounded-2xl bg-slate-950/40">
              {BOOK_GENRES.map((genre) => (
                <button
                  key={genre.id}
                  onClick={() => setSelectedGenre(genre.id)}
                  className={`p-3 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                    selectedGenre === genre.id
                      ? 'bg-amber-500/15 border-amber-500/60 text-amber-200 shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900/80 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <span className="text-xs font-serif font-bold truncate">{genre.name}</span>
                  <span className="text-[10px] text-slate-500 mt-1 line-clamp-1">{genre.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-amber-400/90 mb-2.5">
              2. Zorluk Seviyesi
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DIFFICULTY_LEVELS.map((diff) => (
                <button
                  key={diff.id}
                  onClick={() => setSelectedDifficulty(diff.id)}
                  className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                    selectedDifficulty === diff.id
                      ? 'bg-indigo-950/50 border-indigo-500/60 text-white shadow-lg shadow-indigo-500/10'
                      : 'bg-slate-900/80 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-serif font-bold text-slate-100">{diff.name}</span>
                  </div>
                  <p className="text-xs text-slate-400">{diff.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => startStudyPhase()}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-500 hover:to-orange-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-600/20 hover:scale-[1.01] transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-5 h-5 fill-slate-950" />
            <span>Alıntıyı Getir & Ezberi Başlat</span>
          </button>
        </div>
      )}

      {/* 2. STUDY PHASE */}
      {phase === 'study' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full bg-slate-800/80 h-2 rounded-full mb-6 overflow-hidden border border-slate-700/50">
            <div
              className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 h-full transition-all duration-1000 ease-linear"
              style={{ width: `${(timeLeft / totalStudyTime) * 100}%` }}
            />
          </div>

          <div className="w-full relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border-2 border-amber-500/30 shadow-2xl mb-8">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span className="font-bold text-amber-300 font-serif text-sm">{currentQuote.book}</span>
                <span className="text-slate-500">—</span>
                <span className="text-slate-300 font-medium">{currentQuote.author}</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[11px] font-semibold">
                {currentQuote.quote.trim().split(/\s+/).length} Kelime
              </span>
            </div>

            <p className="text-base sm:text-xl font-serif font-medium text-slate-100 leading-relaxed text-center italic my-6 px-1 quote-text">
              "{currentQuote.quote}"
            </p>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400/80 px-1">
              <span>💡 Anahtar kavramları zihninizde sabitleyin.</span>
              <span className="hidden sm:inline text-slate-400 font-mono bg-slate-800 px-2 py-0.5 rounded">Enter ↵</span>
            </div>
          </div>

          <button
            onClick={startTypingPhase}
            className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/20 hover:scale-105 transition cursor-pointer"
          >
            <Check className="w-5 h-5" />
            <span>Ezberledim, Yazmaya Geç! (Enter ↵)</span>
          </button>
        </div>
      )}

      {/* 3. TYPING PHASE */}
      {phase === 'typing' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 mb-4 text-xs">
            <div className="flex items-center gap-2 truncate">
              <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
              <strong className="text-amber-300 font-serif truncate">{currentQuote.book}</strong>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 truncate">{currentQuote.author}</span>
            </div>

            <span className="text-slate-400 font-semibold shrink-0">
              {currentQuote.quote.trim().split(/\s+/).length} Kelime
            </span>
          </div>

          {isPeeking && (
            <div className="w-full p-4 rounded-2xl bg-amber-950/90 border border-amber-500 text-amber-200 text-center font-serif text-base italic mb-4 animate-in fade-in">
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
              className="w-full p-4 sm:p-5 rounded-2xl bg-slate-900 border-2 border-slate-700 focus:border-amber-500 text-white placeholder-slate-500 text-base sm:text-lg font-serif leading-relaxed resize-none focus:outline-none shadow-xl transition-all"
            />

            <div className="absolute bottom-3 right-4 text-xs text-slate-500 flex items-center gap-2">
              <span className="hidden sm:inline bg-slate-800 px-2 py-0.5 rounded text-[10px] text-slate-400">Enter = Kontrol Et</span>
              <span>{typedText.trim() ? typedText.trim().split(/\s+/).length : 0} / {currentQuote.quote.trim().split(/\s+/).length} kelime</span>
            </div>
          </div>

          <div className="w-full flex items-center justify-between gap-2 mb-6">
            <div className="flex items-center gap-2">
              <button
                onClick={handleUseHint}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-amber-400 text-xs font-semibold transition cursor-pointer"
                title="Sıradaki kelimeyi ekler (-30 Puan)"
              >
                <Lightbulb className="w-4 h-4" />
                <span>Kelime İpucu ({hintsUsed})</span>
              </button>

              <button
                onClick={handlePeek}
                disabled={isPeeking}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-semibold transition cursor-pointer"
                title="1 saniyeliğine gösterir (-50 Puan)"
              >
                <Eye className="w-4 h-4 text-sky-400" />
                <span>Göz Ucuyla Bak</span>
              </button>
            </div>

            <button
              onClick={() => setTypedText('')}
              className="text-xs text-slate-500 hover:text-slate-300 transition cursor-pointer"
            >
              Temizle
            </button>
          </div>

          <button
            onClick={handleSubmitTyping}
            disabled={!typedText.trim()}
            className="flex items-center gap-2 px-10 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-40 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/20 hover:scale-105 transition cursor-pointer"
          >
            <Sparkles className="w-5 h-5 fill-slate-950" />
            <span>Doğrula ve Analizi Gör (Enter ↵)</span>
          </button>
        </div>
      )}

      {/* 4. RESULT PHASE */}
      {phase === 'result' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full grid grid-cols-3 gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-xs text-slate-400 mb-1">Doğruluk</div>
              <div className={`text-2xl sm:text-3xl font-serif font-extrabold ${accuracy >= 80 ? 'text-emerald-400' : accuracy >= 50 ? 'text-amber-400' : 'text-rose-400'}`}>
                %{accuracy}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-xs text-slate-400 mb-1">Yazma Hızı</div>
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-sky-400">
                {wpm} <span className="text-xs font-normal text-slate-400">WPM</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-xs text-slate-400 mb-1">Kazanılan Puan</div>
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-amber-400">
                {score}
              </div>
            </div>
          </div>

          <div className="w-full p-5 sm:p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl mb-6">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              <span>Kelime Karşılaştırması</span>
              <div className="flex items-center gap-2.5 text-[11px] font-normal normal-case">
                <span className="text-emerald-400">● Doğru</span>
                <span className="text-rose-400">● Hatalı</span>
                <span className="text-amber-400">● Eksik</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 text-sm sm:text-base font-serif leading-relaxed mb-6 max-h-48 sm:max-h-64 overflow-y-auto">
              {diffAnalysis.map((item, idx) => {
                if (item.status === 'correct') {
                  return (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 font-semibold">
                      {item.word}
                    </span>
                  );
                } else if (item.status === 'incorrect') {
                  return (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-rose-950/60 text-rose-300 border border-rose-500/40 font-semibold flex items-center gap-1">
                      <span className="line-through opacity-60 text-xs">{item.userWord}</span>
                      <span>{item.word}</span>
                    </span>
                  );
                } else if (item.status === 'missing') {
                  return (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-amber-950/60 text-amber-300 border border-amber-500/40 border-dashed">
                      {item.word}
                    </span>
                  );
                } else {
                  return (
                    <span key={idx} className="px-2 py-1 rounded-lg bg-slate-800 text-slate-400 line-through text-xs">
                      {item.userWord}
                    </span>
                  );
                }
              })}
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 font-semibold block mb-0.5">Orijinal Eser: <strong className="text-amber-300">{currentQuote.book}</strong> ({currentQuote.author})</span>
                <p className="text-slate-200 italic font-serif text-sm quote-text">
                  "{currentQuote.quote}"
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => startStudyPhase()}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>Sıradaki Yeni Cümle (Enter ↵)</span>
            </button>

            <button
              onClick={() => startStudyPhase(currentQuote)}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Tekrar Dene</span>
            </button>

            <button
              onClick={() => setPhase('selection')}
              className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 text-sm transition cursor-pointer"
            >
              Tür / Zorluk Değiştir
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
