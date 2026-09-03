import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  Play, 
  RotateCcw, 
  Trophy, 
  ArrowLeft, 
  ArrowRight,
  Timer, 
  Sparkles, 
  Flame, 
  Zap, 
  CheckCircle2, 
  XCircle,
  Crown,
  Award,
  Sliders,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BOOK_GENRES, BOOK_QUOTES } from '../../data/bookQuotes';
import { BOOKS_DATABASE } from '../../data/booksDatabase';
import { sounds } from '../../utils/sound';

// Build a unified, rich literary pool of Quotes, Books, and Authors
const ALL_LITERARY_ITEMS = (() => {
  const items = [];
  const seenQuotes = new Set();

  // 1. From BOOK_QUOTES (curated classic quotes)
  BOOK_QUOTES.forEach((q, idx) => {
    if (q.quote && q.book && q.author && !seenQuotes.has(q.quote.trim())) {
      seenQuotes.add(q.quote.trim());
      items.push({
        id: `bq_${idx}`,
        quote: q.quote.trim(),
        book: q.book.trim(),
        author: q.author.trim(),
        genre: q.genre || 'classics'
      });
    }
  });

  // 2. From BOOKS_DATABASE passages
  BOOKS_DATABASE.forEach((b, bIdx) => {
    (b.passages || []).forEach((p, pIdx) => {
      if (p.quote && !seenQuotes.has(p.quote.trim())) {
        seenQuotes.add(p.quote.trim());
        items.push({
          id: `db_${bIdx}_${pIdx}`,
          quote: p.quote.trim(),
          book: b.title.trim(),
          author: b.author.trim(),
          genre: b.genre || 'classics'
        });
      }
    });
  });

  return items;
})();

// Distinct book and author catalog for decoys
const DISTINCT_BOOKS = (() => {
  const map = new Map();
  ALL_LITERARY_ITEMS.forEach(item => {
    const key = `${item.book}_${item.author}`;
    if (!map.has(key)) {
      map.set(key, { book: item.book, author: item.author, genre: item.genre });
    }
  });
  return Array.from(map.values());
})();

export default function SpeedTrioGame({
  onGameOver,
  onBack,
  onSelectBook,
  highScore = 0
}) {
  const [phase, setPhase] = useState('intro'); // 'intro' | 'playing' | 'result'
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState(60); // 30, 60, 90
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [history, setHistory] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [feedbackStatus, setFeedbackStatus] = useState(null); // 'correct' | 'wrong' | null

  const timerRef = useRef(null);
  const transitionTimeoutRef = useRef(null);
  const usedQuoteIdsRef = useRef(new Set());

  // Generate a distinct, guaranteed single-answer question filtered by genre
  const generateQuestion = () => {
    // Filter pool by genre if specified
    const genreFiltered = selectedGenre === 'all'
      ? ALL_LITERARY_ITEMS
      : ALL_LITERARY_ITEMS.filter(q => q.genre === selectedGenre);

    const basePool = genreFiltered.length >= 4 ? genreFiltered : ALL_LITERARY_ITEMS;

    // Pick an unplayed quote or reset pool if exhausted
    let pool = basePool.filter(q => !usedQuoteIdsRef.current.has(q.id));
    if (pool.length === 0) {
      usedQuoteIdsRef.current.clear();
      pool = basePool;
    }

    const targetItem = pool[Math.floor(Math.random() * pool.length)];
    usedQuoteIdsRef.current.add(targetItem.id);

    // Pick 3 distinct decoy books (different book title AND different author)
    const eligibleDecoys = DISTINCT_BOOKS.filter(
      d => d.book !== targetItem.book && d.author !== targetItem.author
    );

    // Shuffle and pick 3 decoys
    const shuffledDecoys = [...eligibleDecoys].sort(() => Math.random() - 0.5).slice(0, 3);

    // Form 4 options
    const rawOptions = [
      {
        optionId: 'opt_correct',
        title: targetItem.book,
        author: targetItem.author,
        isCorrect: true,
      },
      ...shuffledDecoys.map((d, idx) => ({
        optionId: `opt_decoy_${idx}`,
        title: d.book,
        author: d.author,
        isCorrect: false,
      }))
    ];

    // Shuffle options and assign A, B, C, D labels
    const letters = ['A', 'B', 'C', 'D'];
    const options = rawOptions
      .sort(() => Math.random() - 0.5)
      .map((opt, i) => ({
        ...opt,
        key: `opt_${i}`,
        letter: letters[i],
      }));

    return {
      id: targetItem.id,
      quote: targetItem.quote,
      correctBook: targetItem.book,
      correctAuthor: targetItem.author,
      options,
    };
  };

  const startGame = () => {
    sounds.playLevelUp();
    usedQuoteIdsRef.current.clear();
    setTimeLeft(selectedDuration);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setCorrectCount(0);
    setWrongCount(0);
    setQuestionNumber(1);
    setHistory([]);
    setSelectedOptionId(null);
    setFeedbackStatus(null);
    setPhase('playing');

    const firstQ = generateQuestion();
    setCurrentQuestion(firstQ);

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleOptionClick = (option) => {
    if (feedbackStatus !== null) return; // Prevent double clicks

    setSelectedOptionId(option.optionId);

    if (option.isCorrect) {
      sounds.playSuccess();
      sounds.triggerHaptic('medium');
      setFeedbackStatus('correct');

      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);

      // Streak multiplier bonus
      const multiplier = newStreak >= 5 ? 2.0 : newStreak >= 3 ? 1.5 : 1.0;
      const earned = Math.round(100 * multiplier);
      setScore(s => s + earned);
      setCorrectCount(c => c + 1);

      // Add time bonus for streaks
      if (newStreak >= 3) {
        setTimeLeft(t => Math.min(selectedDuration, t + 2));
      }

      setHistory(prev => [
        {
          quote: currentQuestion.quote,
          book: currentQuestion.correctBook,
          author: currentQuestion.correctAuthor,
          userSelected: `${option.title} (${option.author})`,
          isCorrect: true,
        },
        ...prev
      ]);

      // 650ms smooth transition for correct answer
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = setTimeout(() => {
        setSelectedOptionId(null);
        setFeedbackStatus(null);
        setQuestionNumber(n => n + 1);
        setCurrentQuestion(generateQuestion());
      }, 650);
    } else {
      sounds.playError();
      sounds.triggerHaptic('error');
      setFeedbackStatus('wrong');
      setStreak(0);
      setWrongCount(w => w + 1);

      setHistory(prev => [
        {
          quote: currentQuestion.quote,
          book: currentQuestion.correctBook,
          author: currentQuestion.correctAuthor,
          userSelected: `${option.title} (${option.author})`,
          isCorrect: false,
        },
        ...prev
      ]);

      // 900ms delay for wrong answer so user sees the correct answer clearly
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = setTimeout(() => {
        setSelectedOptionId(null);
        setFeedbackStatus(null);
        setQuestionNumber(n => n + 1);
        setCurrentQuestion(generateQuestion());
      }, 900);
    }
  };

  const endGame = () => {
    sounds.playLevelUp();
    setPhase('result');
    if (timerRef.current) clearInterval(timerRef.current);
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);

    confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });

    if (onGameOver) {
      onGameOver({
        gameId: 'speedTrio',
        score,
        accuracy: (correctCount + wrongCount) > 0 ? Math.round((correctCount / (correctCount + wrongCount)) * 100) : 0,
        wordsCount: correctCount * 10,
      });
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    };
  }, []);

  // Title Rank Determination
  const getRank = (finalScore) => {
    if (finalScore >= 1500) return { title: 'Kütüphane Üstadı', badge: '👑', color: 'text-amber-500' };
    if (finalScore >= 1000) return { title: 'Baş Sahhaf', badge: '📜', color: 'text-[#B44A22] dark:text-[#E07048]' };
    if (finalScore >= 500) return { title: 'Kitap Muhafızı', badge: '🛡️', color: 'text-emerald-600 dark:text-emerald-400' };
    return { title: 'Edebiyat Çırağı', badge: '🌱', color: 'text-stone-600 dark:text-stone-400' };
  };

  const rank = getRank(score);

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

        <div className="flex items-center gap-2">
          {phase === 'playing' && (
            <>
              {/* Question Index */}
              <div className="px-2.5 py-1 bg-[#FAF6EE] dark:bg-[#24201C] border border-[#D6CEBE] dark:border-[#38322B] rounded-xl text-xs font-bold text-[#57534E] dark:text-[#A8A196]">
                Soru #{questionNumber}
              </div>

              {/* Streak Badge */}
              {streak >= 2 && (
                <div className="flex items-center gap-1 px-2.5 py-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 rounded-xl text-amber-700 dark:text-amber-300 font-bold text-xs shadow-xs animate-bounce">
                  <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{streak}x Kombo ({streak >= 5 ? '2.0x' : '1.5x'})</span>
                </div>
              )}

              {/* Timer Pill */}
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-xl font-bold text-xs sm:text-sm shadow-xs ${
                timeLeft <= 10 
                  ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300 animate-pulse'
                  : 'bg-[#C85A32]/10 dark:bg-[#E07048]/20 text-[#B44A22] dark:text-[#E07048] border border-[#C85A32]/40 dark:border-[#E07048]/40'
              }`}>
                <Timer className="w-4 h-4" />
                <span>{timeLeft}s</span>
              </div>
            </>
          )}

          <div className="flex items-center gap-1 px-2.5 sm:px-3.5 py-1 bg-[#FAF6EE] dark:bg-[#24201C] border border-[#D6CEBE] dark:border-[#38322B] rounded-xl text-[#1C1917] dark:text-[#F5EFE4] font-bold text-xs sm:text-sm whitespace-nowrap shrink-0 shadow-xs">
            <Trophy className="w-3.5 h-3.5 text-[#B44A22] dark:text-[#E07048] shrink-0" />
            <span>Skor: {score}</span>
          </div>
        </div>
      </div>

      {/* Mode Badge & Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 dark:border-amber-500/40 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>Edebi Trio Sprint</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4]">
          {phase === 'intro' && 'Edebi Refleks & Eşleştirme Tercihleri'}
          {phase === 'playing' && 'Bu Alıntı Hangi Eser & Yazara Aittir?'}
          {phase === 'result' && 'Trio Sprint Edebiyat Karnesi'}
        </h2>
      </div>

      {/* 1. INTRO & PREFERENCES PHASE */}
      {phase === 'intro' && (
        <div className="w-full max-w-2xl space-y-6 animate-in fade-in duration-200">
          {/* Section 1: Duration Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#B44A22] dark:text-[#E07048] mb-2.5">
              1. Sprint Süresi
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { sec: 30, title: 'Şimşek Sprint', desc: '30 Saniye • Hızlı Refleks', icon: '⚡' },
                { sec: 60, title: 'Standart Sprint', desc: '60 Saniye • Dengeli Tur', icon: '⏱️' },
                { sec: 90, title: 'Edebi Maraton', desc: '90 Saniye • Geniş Havuz', icon: '⏳' },
              ].map((m) => (
                <button
                  key={m.sec}
                  onClick={() => setSelectedDuration(m.sec)}
                  className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                    selectedDuration === m.sec
                      ? 'bg-amber-500/15 border-amber-500 text-[#1C1917] dark:text-[#F5EFE4] shadow-xs ring-1 ring-amber-500'
                      : 'bg-white dark:bg-[#1C1917] border-[#D6CEBE] dark:border-[#38322B] text-[#57534E] dark:text-[#A8A196] hover:text-[#1C1917] dark:hover:text-[#F5EFE4]'
                  }`}
                >
                  <div className="text-xl mb-1">{m.icon}</div>
                  <div className="font-serif font-bold text-xs sm:text-sm text-[#1C1917] dark:text-[#F5EFE4]">{m.title}</div>
                  <div className="text-[10px] text-[#78716C] dark:text-[#A8A196] mt-0.5">{m.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: Category Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#B44A22] dark:text-[#E07048] mb-2.5">
              2. Edebi Kategori Tercihi
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-56 sm:max-h-64 overflow-y-auto p-2 border border-[#D6CEBE] dark:border-[#38322B] rounded-2xl bg-white dark:bg-[#1C1917] shadow-xs">
              {BOOK_GENRES.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGenre(g.id)}
                  className={`p-3 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                    selectedGenre === g.id
                      ? 'bg-amber-500/15 border-amber-500 text-amber-900 dark:text-amber-300 font-bold shadow-xs'
                      : 'bg-[#FAF6EE] dark:bg-[#24201C] border-[#D6CEBE] dark:border-[#38322B] text-[#44403C] dark:text-[#EDE8DF] hover:text-[#1C1917] dark:hover:text-[#F5EFE4]'
                  }`}
                >
                  <span className="text-xs font-serif font-bold truncate">{g.name}</span>
                  <span className="text-[10px] text-[#78716C] dark:text-[#A8A196] mt-1 line-clamp-1">{g.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={startGame}
            className="w-full py-4 rounded-2xl btn-terracotta font-bold text-base shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>{selectedDuration} Saniyelik Sprint'i Başlat!</span>
          </button>
        </div>
      )}

      {/* 2. PLAYING PHASE */}
      {phase === 'playing' && currentQuestion && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          {/* Quick Preferences info pill */}
          <div className="w-full flex items-center justify-between gap-2 mb-3 p-2 rounded-2xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] shadow-xs text-xs">
            <span className="text-[#57534E] dark:text-[#A8A196] font-medium">
              Kategori: <strong className="text-[#B44A22] dark:text-[#E07048]">{BOOK_GENRES.find(g => g.id === selectedGenre)?.name || 'Tüm Türler'}</strong>
            </span>
            <button
              onClick={() => setPhase('intro')}
              className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-[#FAF6EE] dark:bg-[#282420] text-[#57534E] dark:text-[#A8A196] hover:text-[#1C1917] dark:hover:text-[#F5EFE4] border border-[#D6CEBE] dark:border-[#38322B] font-bold transition cursor-pointer"
            >
              <Sliders className="w-3 h-3" />
              <span>Ayarları Değiştir</span>
            </button>
          </div>

          {/* Quote Card */}
          <div className="w-full p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1C1917] border-2 border-[#D6CEBE] dark:border-[#38322B] shadow-md mb-6 relative">
            <div className="text-xs font-bold uppercase tracking-wider text-[#B44A22] dark:text-[#E07048] mb-3 text-center">
              Edebi Pasaj
            </div>

            <p className="text-lg sm:text-2xl font-serif italic text-[#1C1917] dark:text-[#F5EFE4] leading-relaxed text-center quote-text font-quote my-2">
              "{currentQuestion.quote}"
            </p>
          </div>

          {/* 4 Multiple Choice Options with A, B, C, D */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedOptionId === option.optionId;
              const isRevealedCorrect = feedbackStatus !== null && option.isCorrect;
              const isRevealedWrong = feedbackStatus === 'wrong' && isSelected;

              return (
                <button
                  key={option.key}
                  disabled={feedbackStatus !== null}
                  onClick={() => handleOptionClick(option)}
                  className={`p-4 rounded-2xl border text-left transition cursor-pointer flex items-center justify-between shadow-xs ${
                    isRevealedCorrect
                      ? 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-500 text-emerald-950 dark:text-emerald-200 scale-102 font-bold shadow-md ring-2 ring-emerald-500'
                      : isRevealedWrong
                      ? 'bg-rose-100 dark:bg-rose-950/80 border-rose-500 text-rose-950 dark:text-rose-200 font-bold ring-2 ring-rose-500'
                      : 'bg-white dark:bg-[#1C1917] hover:bg-[#FAF6EE] dark:hover:bg-[#282420] border-[#D6CEBE] dark:border-[#38322B] text-[#1C1917] dark:text-[#F5EFE4] hover:border-[#C85A32] dark:hover:border-[#E07048]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-serif font-bold text-xs shrink-0 ${
                      isRevealedCorrect
                        ? 'bg-emerald-600 text-white'
                        : isRevealedWrong
                        ? 'bg-rose-600 text-white'
                        : 'bg-[#FAF6EE] dark:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] text-[#57534E] dark:text-[#A8A196]'
                    }`}>
                      {option.letter}
                    </span>

                    <div className="min-w-0">
                      <h4 className="font-serif font-bold text-sm sm:text-base leading-snug truncate">
                        {option.title}
                      </h4>
                      <p className="text-xs text-[#57534E] dark:text-[#A8A196] mt-0.5 font-medium truncate">
                        {option.author}
                      </p>
                    </div>
                  </div>

                  {isRevealedCorrect && (
                    <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-300 shrink-0 ml-2">
                      <span>Doğru</span>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  )}
                  {isRevealedWrong && (
                    <div className="flex items-center gap-1 text-xs font-bold text-rose-700 dark:text-rose-300 shrink-0 ml-2">
                      <span>Yanlış</span>
                      <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. RESULT PHASE */}
      {phase === 'result' && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          {/* Rank & Stats Card */}
          <div className="w-full p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] shadow-md mb-6 text-center">
            <div className="text-4xl mb-2">{rank.badge}</div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#57534E] dark:text-[#A8A196] mb-1">Kazanılan Rütbe</div>
            <h3 className={`text-2xl font-serif font-bold ${rank.color} mb-4`}>
              {rank.title}
            </h3>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#D6CEBE] dark:border-[#38322B]">
              <div>
                <div className="text-xs text-[#57534E] dark:text-[#A8A196] font-medium">Toplam Skor</div>
                <div className="text-2xl font-serif font-extrabold text-[#B44A22] dark:text-[#E07048]">{score}</div>
              </div>
              <div>
                <div className="text-xs text-[#57534E] dark:text-[#A8A196] font-medium">Doğru / Yanlış</div>
                <div className="text-2xl font-serif font-extrabold text-emerald-600 dark:text-emerald-400">
                  {correctCount} <span className="text-xs font-normal text-rose-500">/ {wrongCount}</span>
                </div>
              </div>
              <div>
                <div className="text-xs text-[#57534E] dark:text-[#A8A196] font-medium">Maks. Seri</div>
                <div className="text-2xl font-serif font-extrabold text-amber-600 dark:text-amber-400">{maxStreak}x</div>
              </div>
            </div>
          </div>

          {/* Answered Questions History */}
          {history.length > 0 && (
            <div className="w-full p-5 rounded-3xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] shadow-xs mb-6 max-h-60 overflow-y-auto">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] dark:text-[#F5EFE4] mb-3">
                Cevaplanan Alıntılar ({history.length})
              </h4>

              <div className="space-y-2 text-xs font-serif">
                {history.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-2xl border flex items-center justify-between gap-2 ${
                      item.isCorrect
                        ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                        : 'bg-rose-50/70 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-950 dark:text-rose-200'
                    }`}
                  >
                    <div className="truncate flex-1">
                      <p className="italic line-clamp-1">"{item.quote}"</p>
                      <button
                        onClick={() => {
                          const targetBook = BOOKS_DATABASE.find(b => 
                            b.title.toLowerCase() === item.book?.toLowerCase() ||
                            (item.book && b.title.toLowerCase().includes(item.book.toLowerCase())) ||
                            (item.book && item.book.toLowerCase().includes(b.title.toLowerCase()))
                          );
                          if (onSelectBook && targetBook) {
                            onSelectBook(targetBook.id);
                          }
                        }}
                        className="text-[11px] not-italic font-bold text-[#B44A22] dark:text-[#E07048] hover:underline cursor-pointer"
                        title="Bu eseri kütüphanede incele"
                      >
                        {item.book}
                      </button>
                      {' '}— {item.author}
                    </div>

                    <span className="font-bold shrink-0">
                      {item.isCorrect ? '✓ Doğru' : `✗ (${item.userSelected})`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={startGame}
              className="flex items-center gap-2 px-8 py-3.5 rounded-2xl btn-terracotta font-bold text-base shadow-md transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 fill-white" />
              <span>Yeniden Oyna</span>
            </button>

            <button
              onClick={() => setPhase('intro')}
              className="px-5 py-3.5 rounded-2xl bg-white dark:bg-[#1E1B18] hover:bg-[#FAF6EE] dark:hover:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] text-[#57534E] dark:text-[#A8A196] hover:text-[#1C1917] dark:hover:text-[#F5EFE4] font-semibold text-sm transition cursor-pointer shadow-xs"
            >
              Tür / Süre Değiştir
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
