import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  Play, 
  RotateCcw, 
  Trophy, 
  ArrowLeft, 
  Check, 
  X, 
  Timer, 
  Sparkles, 
  Lightbulb, 
  Feather, 
  PlusCircle,
  Eye,
  Keyboard,
  Compass,
  Scale
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BOOK_GENRES, DIFFICULTY_LEVELS, BOOK_QUOTES } from '../../data/bookQuotes';
import { sounds } from '../../utils/sound';

export default function SentenceRecallGame({ onGameOver, onBack, highScore = 0 }) {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('medium');
  const [currentQuote, setCurrentQuote] = useState(null);

  const [phase, setPhase] = useState('selection'); // 'selection' | 'study' | 'typing' | 'result'
  const [timeLeft, setTimeLeft] = useState(20);
  const [totalStudyTime, setTotalStudyTime] = useState(20);
  const [typedText, setTypedText] = useState('');
  const [hintsUsed, setHintsUsed] = useState(0);
  const [peekUsed, setPeekUsed] = useState(false);
  const [isPeeking, setIsPeeking] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [timeSpentTyping, setTimeSpentTyping] = useState(0);

  // Custom Quote Modal
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customQuoteText, setCustomQuoteText] = useState('');
  const [customBookName, setCustomBookName] = useState('');
  const [customAuthorName, setCustomAuthorName] = useState('');

  // Result metrics
  const [accuracy, setAccuracy] = useState(0);
  const [score, setScore] = useState(0);
  const [diffAnalysis, setDiffAnalysis] = useState([]);
  const [wpm, setWpm] = useState(0);

  const timerRef = useRef(null);
  const inputRef = useRef(null);

  // Filter quotes based on genre and difficulty
  const getFilteredQuotes = (genre = selectedGenre, difficulty = selectedDifficulty) => {
    return BOOK_QUOTES.filter(q => {
      const matchGenre = genre === 'all' || q.genre === genre;
      const matchDiff = difficulty === 'all' || q.difficulty === difficulty;
      return matchGenre && matchDiff;
    });
  };

  // Start study phase with a chosen or random quote
  const startStudyPhase = (quoteToUse = null) => {
    sounds.playClick();
    if (timerRef.current) clearInterval(timerRef.current);

    let quote = quoteToUse;
    if (!quote) {
      const pool = getFilteredQuotes(selectedGenre, selectedDifficulty);
      if (pool.length === 0) {
        // Fallback to any quote in that difficulty
        const fallbackPool = BOOK_QUOTES.filter(q => q.difficulty === selectedDifficulty);
        quote = fallbackPool[Math.floor(Math.random() * fallbackPool.length)] || BOOK_QUOTES[0];
      } else {
        quote = pool[Math.floor(Math.random() * pool.length)];
      }
    }

    setCurrentQuote(quote);
    const words = quote.quote.trim().split(/\s+/);
    const diffObj = DIFFICULTY_LEVELS.find(d => d.id === quote.difficulty) || DIFFICULTY_LEVELS[1];
    const duration = Math.max(8, Math.round(words.length * diffObj.timePerWord));

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

  // Normalize string for fuzzy comparison (lower case, remove basic punctuation)
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

    const typingDuration = Math.max(1, (Date.now() - startTime) / 1000);
    setTimeSpentTyping(typingDuration);

    const originalWords = currentQuote.quote.trim().split(/\s+/);
    const userWords = typedText.trim().split(/\s+/).filter(Boolean);

    let matchCount = 0;
    const diff = [];

    // Analyze each word in the original quote
    originalWords.forEach((origWord, idx) => {
      const userWord = userWords[idx];
      const normOrig = normalize(origWord);
      const normUser = userWord ? normalize(userWord) : '';

      if (normUser === normOrig) {
        matchCount++;
        diff.push({
          word: origWord,
          userWord: userWord,
          status: 'correct', // Green
        });
      } else if (userWord) {
        diff.push({
          word: origWord,
          userWord: userWord,
          status: 'incorrect', // Red
        });
      } else {
        diff.push({
          word: origWord,
          userWord: null,
          status: 'missing', // Yellow
        });
      }
    });

    // Check if user typed extra words
    if (userWords.length > originalWords.length) {
      for (let i = originalWords.length; i < userWords.length; i++) {
        diff.push({
          word: '',
          userWord: userWords[i],
          status: 'extra',
        });
      }
    }

    const calculatedAccuracy = Math.round((matchCount / originalWords.length) * 100);
    const calculatedWpm = Math.round((userWords.length / (typingDuration / 60))) || 0;

    // Difficulty multiplier
    const diffMultiplier = currentQuote.difficulty === 'legendary' ? 4 : currentQuote.difficulty === 'hard' ? 3 : currentQuote.difficulty === 'medium' ? 2 : 1;
    
    // Base score calculation with deductions for hints / peeks
    let calculatedScore = Math.round((calculatedAccuracy * 10 * diffMultiplier) - (hintsUsed * 30) - (peekUsed ? 50 : 0));
    calculatedScore = Math.max(0, calculatedScore);

    setAccuracy(calculatedAccuracy);
    setWpm(calculatedWpm);
    setScore(calculatedScore);
    setDiffAnalysis(diff);
    setPhase('result');

    if (calculatedAccuracy >= 85) {
      sounds.playVictory();
      confetti({ particleCount: 75, spread: 80, origin: { y: 0.6 } });
    } else {
      sounds.playError();
    }

    onGameOver({
      gameId: 'sentenceRecall',
      score: calculatedScore,
      accuracy: calculatedAccuracy,
    });
  };

  // Add Custom Quote
  const handleAddCustomQuote = () => {
    if (!customQuoteText.trim()) return;
    const words = customQuoteText.trim().split(/\s+/);
    let diff = 'medium';
    if (words.length <= 8) diff = 'easy';
    else if (words.length <= 15) diff = 'medium';
    else if (words.length <= 25) diff = 'hard';
    else diff = 'legendary';

    const customObj = {
      id: 'custom_' + Date.now(),
      genre: 'custom',
      difficulty: diff,
      book: customBookName.trim() || 'Özel Not / Kitap',
      author: customAuthorName.trim() || 'Siz',
      quote: customQuoteText.trim(),
    };

    setShowCustomModal(false);
    startStudyPhase(customObj);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-4 flex flex-col items-center">
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-sm transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Geri</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-4">
          {phase === 'study' && (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded-lg text-amber-300 font-bold text-sm">
              <Timer className="w-4 h-4 animate-spin text-amber-400" />
              <span>{timeLeft}s Ezber Süresi</span>
            </div>
          )}

          {phase === 'typing' && (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-indigo-500/20 border border-indigo-500/40 rounded-lg text-indigo-300 font-bold text-sm">
              <Keyboard className="w-4 h-4 text-indigo-400" />
              <span>Yazma Modu</span>
            </div>
          )}

          <div className="flex items-center gap-1 px-3 py-1 bg-emerald-950/80 border border-emerald-500/30 rounded-lg text-emerald-300 font-bold text-sm">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Skor: {score}</span>
          </div>
        </div>
      </div>

      {/* Header Badge */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Kitap Cümlesi Ezber & Yazma Modu</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          {phase === 'selection' && 'Edebi Tür ve Zorluk Seçin'}
          {phase === 'study' && 'Cümleyi Zihninizde Canlandırarak Ezberleyin'}
          {phase === 'typing' && 'Hatırladığınız Cümleyi Klavyeyle Yazın'}
          {phase === 'result' && 'Hafıza Doğruluk & Yazım Değerlendirmesi'}
        </h2>
      </div>

      {/* 1. SELECTION PHASE */}
      {phase === 'selection' && (
        <div className="w-full max-w-2xl space-y-6 animate-in fade-in duration-200">
          {/* Genre Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
              1. Kitap Türü Seçin
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {BOOK_GENRES.map((genre) => (
                <button
                  key={genre.id}
                  onClick={() => setSelectedGenre(genre.id)}
                  className={`p-3 rounded-xl border text-left transition flex items-center gap-2.5 ${
                    selectedGenre === genre.id
                      ? 'bg-indigo-600/30 border-indigo-400 text-white shadow-lg shadow-indigo-500/20'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <Feather className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold truncate">{genre.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
              2. Zorluk Seviyesi (Cümle Uzunluğu & Kelime Derinliği)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DIFFICULTY_LEVELS.map((diff) => (
                <button
                  key={diff.id}
                  onClick={() => setSelectedDifficulty(diff.id)}
                  className={`p-3.5 rounded-2xl border text-left transition ${
                    selectedDifficulty === diff.id
                      ? 'bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border-purple-400 text-white shadow-lg'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-slate-100">{diff.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium">
                      ~{diff.timePerWord}s / kelime
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{diff.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={() => startStudyPhase()}
              className="w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold shadow-lg shadow-indigo-600/30 hover:scale-[1.02] transition flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>Cümle Ezberini Başlat</span>
            </button>

            <button
              onClick={() => setShowCustomModal(true)}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm font-semibold transition flex items-center justify-center gap-2"
            >
              <PlusCircle className="w-4 h-4 text-amber-400" />
              <span>Kendi Kitap Alıntını Ekle</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. STUDY / EZBERLEME PHASE */}
      {phase === 'study' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          {/* Animated Countdown Progress Bar */}
          <div className="w-full bg-slate-800 h-2 rounded-full mb-6 overflow-hidden">
            <div
              className="bg-gradient-to-r from-amber-500 via-purple-500 to-indigo-500 h-full transition-all duration-1000 ease-linear"
              style={{ width: `${(timeLeft / totalStudyTime) * 100}%` }}
            />
          </div>

          {/* Quote Card */}
          <div className="w-full relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/40 shadow-2xl mb-8">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span className="font-semibold text-slate-200">{currentQuote.book}</span>
                <span className="text-slate-500">—</span>
                <span className="text-slate-300">{currentQuote.author}</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[11px] font-medium">
                {currentQuote.quote.trim().split(/\s+/).length} Kelime
              </span>
            </div>

            {/* The Quote Text */}
            <p className="text-lg sm:text-2xl font-serif font-medium text-white leading-relaxed text-center italic my-4">
              "{currentQuote.quote}"
            </p>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-center text-xs text-indigo-300">
              <span>💡 İpucu: Cümlenin ritmine ve anahtar kelimelerine odaklanın.</span>
            </div>
          </div>

          {/* Skip / Ready Button */}
          <button
            onClick={startTypingPhase}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold shadow-lg shadow-emerald-600/30 hover:scale-105 transition"
          >
            <Check className="w-5 h-5" />
            <span>Ezberledim, Yazmaya Geç!</span>
          </button>
        </div>
      )}

      {/* 3. TYPING / YAZMA PHASE */}
      {phase === 'typing' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          {/* Context Card (Book & Author) */}
          <div className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 mb-4 text-xs">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span className="text-slate-400">Kitap:</span>
              <strong className="text-slate-200">{currentQuote.book}</strong>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">Yazar:</span>
              <strong className="text-slate-200">{currentQuote.author}</strong>
            </div>

            <span className="text-indigo-400 font-semibold">
              Hedef: {currentQuote.quote.trim().split(/\s+/).length} Kelime
            </span>
          </div>

          {/* Peeking Banner if triggered */}
          {isPeeking && (
            <div className="w-full p-4 rounded-2xl bg-amber-950/90 border border-amber-500 text-amber-200 text-center font-serif text-base italic mb-4 animate-in fade-in">
              "{currentQuote.quote}"
            </div>
          )}

          {/* Interactive Typing Textarea */}
          <div className="w-full relative mb-4">
            <textarea
              ref={inputRef}
              rows={4}
              value={typedText}
              onChange={(e) => setTypedText(e.target.value)}
              placeholder="Ezberlediğiniz cümleyi buraya tam olarak yazın..."
              className="w-full p-4 sm:p-5 rounded-2xl bg-slate-900 border-2 border-slate-700 focus:border-indigo-500 text-white placeholder-slate-500 text-base sm:text-lg font-medium leading-relaxed resize-none focus:outline-none shadow-xl transition-all"
            />

            {/* Word Counter inside Textarea */}
            <div className="absolute bottom-3 right-4 text-xs text-slate-500">
              {typedText.trim() ? typedText.trim().split(/\s+/).length : 0} / {currentQuote.quote.trim().split(/\s+/).length} kelime
            </div>
          </div>

          {/* Help / Hint Utilities */}
          <div className="w-full flex items-center justify-between gap-2 mb-6">
            <div className="flex items-center gap-2">
              <button
                onClick={handleUseHint}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-amber-400 text-xs font-semibold transition"
                title="Sıradaki kelimeyi ekler (-30 Puan)"
              >
                <Lightbulb className="w-4 h-4" />
                <span>Kelime İpucu Al ({hintsUsed})</span>
              </button>

              <button
                onClick={handlePeek}
                disabled={isPeeking}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-semibold transition"
                title="1 saniyeliğine cümleyi gösterir (-50 Puan)"
              >
                <Eye className="w-4 h-4 text-sky-400" />
                <span>Göz Ucuyla Bak</span>
              </button>
            </div>

            <button
              onClick={() => setTypedText('')}
              className="text-xs text-slate-500 hover:text-slate-300 transition"
            >
              Temizle
            </button>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmitTyping}
            disabled={!typedText.trim()}
            className="flex items-center gap-2 px-10 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 disabled:opacity-40 text-white font-bold shadow-lg shadow-indigo-600/30 hover:scale-105 transition"
          >
            <Sparkles className="w-5 h-5 fill-white" />
            <span>Doğrula ve Puanı Gör</span>
          </button>
        </div>
      )}

      {/* 4. RESULT / ANALİZ PHASE */}
      {phase === 'result' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          {/* Summary Score Card */}
          <div className="w-full grid grid-cols-3 gap-3 mb-6">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-xs text-slate-400 mb-1">Doğruluk Oranı</div>
              <div className={`text-2xl sm:text-3xl font-extrabold ${accuracy >= 80 ? 'text-emerald-400' : accuracy >= 50 ? 'text-amber-400' : 'text-rose-400'}`}>
                %{accuracy}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-xs text-slate-400 mb-1">Yazma Hızı</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">
                {wpm} <span className="text-xs font-normal text-slate-400">WPM</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-xs text-slate-400 mb-1">Kazanılan Puan</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">
                {score}
              </div>
            </div>
          </div>

          {/* Word-by-Word Diff Analysis */}
          <div className="w-full p-5 sm:p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between">
              <span>Kelime Bazlı Karşılaştırma</span>
              <div className="flex items-center gap-3 text-[11px] font-normal normal-case">
                <span className="flex items-center gap-1 text-emerald-400">● Doğru</span>
                <span className="flex items-center gap-1 text-rose-400">● Hatalı</span>
                <span className="flex items-center gap-1 text-amber-400">● Eksik</span>
              </div>
            </h4>

            {/* Interactive Word Badges */}
            <div className="flex flex-wrap gap-2 text-base sm:text-lg font-serif leading-relaxed mb-6">
              {diffAnalysis.map((item, idx) => {
                if (item.status === 'correct') {
                  return (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 font-semibold"
                    >
                      {item.word}
                    </span>
                  );
                } else if (item.status === 'incorrect') {
                  return (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-rose-950/60 text-rose-300 border border-rose-500/40 font-semibold flex items-center gap-1"
                      title={`Yazdığınız: "${item.userWord}" | Orijinal: "${item.word}"`}
                    >
                      <span className="line-through opacity-60 text-xs">{item.userWord}</span>
                      <span>{item.word}</span>
                    </span>
                  );
                } else if (item.status === 'missing') {
                  return (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-amber-950/60 text-amber-300 border border-amber-500/40 border-dashed"
                      title="Bu kelimeyi yazmayı unuttunuz"
                    >
                      {item.word}
                    </span>
                  );
                } else {
                  return (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-lg bg-slate-800 text-slate-400 line-through text-xs"
                    >
                      {item.userWord}
                    </span>
                  );
                }
              })}
            </div>

            {/* Original vs User text */}
            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 font-semibold block mb-0.5">Orijinal Kitap Cümlesi:</span>
                <p className="text-slate-200 italic font-serif text-sm">
                  "{currentQuote.quote}"
                </p>
              </div>
              <div>
                <span className="text-slate-400 font-semibold block mb-0.5">Sizin Yazdığınız:</span>
                <p className="text-slate-300 font-serif text-sm">
                  "{typedText}"
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => startStudyPhase()}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition shadow-lg shadow-indigo-600/30"
            >
              <Sparkles className="w-4 h-4" />
              <span>Yeni Cümle Getir</span>
            </button>

            <button
              onClick={() => startStudyPhase(currentQuote)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm transition"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Aynı Cümleyi Tekrar Dene</span>
            </button>

            <button
              onClick={() => setPhase('selection')}
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 text-sm transition"
            >
              Tür / Zorluk Değiştir
            </button>
          </div>
        </div>
      )}

      {/* Custom Quote Modal */}
      {showCustomModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-1">Özel Kitap Alıntısı Ekle</h3>
            <p className="text-xs text-slate-400 mb-4">
              Okuduğunuz bir kitaptan, şiirden veya sınav notunuzdan ezberlemek istediğiniz bir cümleyi girin:
            </p>

            <div className="space-y-3 mb-5">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Kitap / Eser Adı (Opsiyonel):</label>
                <input
                  type="text"
                  value={customBookName}
                  onChange={(e) => setCustomBookName(e.target.value)}
                  placeholder="Örn: Suç ve Ceza"
                  className="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Yazar (Opsiyonel):</label>
                <input
                  type="text"
                  value={customAuthorName}
                  onChange={(e) => setCustomAuthorName(e.target.value)}
                  placeholder="Örn: Dostoyevski"
                  className="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Ezberlenecek Cümle:</label>
                <textarea
                  rows={3}
                  value={customQuoteText}
                  onChange={(e) => setCustomQuoteText(e.target.value)}
                  placeholder="Cümleyi buraya yapıştırın veya yazın..."
                  className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5">
              <button
                onClick={() => setShowCustomModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white text-sm"
              >
                İptal
              </button>
              <button
                onClick={handleAddCustomQuote}
                disabled={!customQuoteText.trim()}
                className="px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold text-sm transition"
              >
                Ezberi Başlat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
