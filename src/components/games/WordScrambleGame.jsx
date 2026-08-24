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
  Feather,
  Layers,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BOOK_GENRES, DIFFICULTY_LEVELS, BOOK_QUOTES } from '../../data/bookQuotes';
import { quoteQueue } from '../../utils/quoteQueue';
import { sounds } from '../../utils/sound';

export default function WordScrambleGame({ onGameOver, onBack, highScore = 0 }) {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');
  const [currentQuote, setCurrentQuote] = useState(null);

  const [phase, setPhase] = useState('selection'); // 'selection' | 'study' | 'scramble' | 'result'
  const [timeLeft, setTimeLeft] = useState(15);
  const [totalStudyTime, setTotalStudyTime] = useState(15);

  const [originalTokens, setOriginalTokens] = useState([]); // array of original words
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
      const isCleanEqual = cleanWord(item.word) === cleanWord(origWord);
      const isCorrect = isExact || isCleanEqual;

      if (isCorrect) {
        matches++;
      }

      return {
        placedWord: item.word,
        expectedWord: origWord,
        isCorrect: isCorrect,
        index: idx,
      };
    });

    const acc = Math.round((matches / originalTokens.length) * 100);
    const diffMultiplier = currentQuote.difficulty === 'legendary' ? 4 : currentQuote.difficulty === 'hard' ? 3 : currentQuote.difficulty === 'medium' ? 2 : 1;
    const calculatedScore = Math.round(acc * 5 * diffMultiplier);

    setCorrectCount(matches);
    setAccuracy(acc);
    setScore(calculatedScore);
    setDiffAnalysis(diff);
    resultTimestampRef.current = Date.now();
    setPhase('result');

    if (acc >= 80) {
      sounds.playVictory();
      confetti({ particleCount: 75, spread: 75, origin: { y: 0.6 } });
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
    const quote = quoteQueue.getNextQuote(selectedGenre, selectedDifficulty);
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

          <div className="flex items-center gap-1 px-2.5 sm:px-3 py-1 bg-amber-950/40 border border-amber-500/30 rounded-xl text-amber-300 font-bold text-xs sm:text-sm whitespace-nowrap shrink-0">
            <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Skor: {score}</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <Layers className="w-3.5 h-3.5" />
          <span>Dokunmatik Kelime Dizme (Scramble)</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-100">
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
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2.5">
              1. Edebi Kategori
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-56 sm:max-h-72 overflow-y-auto p-2 border border-slate-800/80 rounded-2xl bg-slate-950/40">
              {BOOK_GENRES.map(g => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGenre(g.id)}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    selectedGenre === g.id
                      ? 'bg-emerald-950/40 border-emerald-400 text-white shadow-lg'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-xs font-serif font-bold block">{g.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2.5">
              2. Zorluk
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DIFFICULTY_LEVELS.map(d => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDifficulty(d.id)}
                  className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                    selectedDifficulty === d.id
                      ? 'bg-emerald-950/50 border-emerald-500 text-white'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-sm font-serif font-bold text-slate-100 block">{d.name}</span>
                  <span className="text-xs text-slate-400">{d.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={startNewGame}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-base shadow-xl shadow-emerald-600/20 hover:scale-[1.01] transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>Kelime Dizme Egzersizini Başlat</span>
          </button>
        </div>
      )}

      {/* 2. STUDY */}
      {phase === 'study' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full bg-slate-800/80 h-2 rounded-full mb-6 overflow-hidden border border-slate-700/50">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full transition-all duration-1000 ease-linear"
              style={{ width: `${(timeLeft / totalStudyTime) * 100}%` }}
            />
          </div>

          <div className="w-full p-6 sm:p-8 rounded-3xl bg-slate-900 border-2 border-emerald-500/30 shadow-2xl mb-8">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-emerald-300 font-serif text-sm">{currentQuote.book}</span>
                <span className="text-slate-500">—</span>
                <span className="text-slate-300 font-medium">{currentQuote.author}</span>
              </div>
            </div>

            <p className="text-base sm:text-xl font-serif font-medium text-slate-100 leading-relaxed text-center italic my-6 px-1 quote-text">
              "{currentQuote.quote}"
            </p>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-emerald-300 px-1">
              <span>💡 Kelimelerin dizilim sırasını aklınızda tutun.</span>
              <span className="hidden sm:inline text-slate-400 font-mono bg-slate-800 px-2 py-0.5 rounded">Enter ↵</span>
            </div>
          </div>

          <button
            onClick={() => {
              if (timerRef.current) clearInterval(timerRef.current);
              sounds.playLevelUp();
              setPhase('scramble');
            }}
            className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg hover:scale-105 transition cursor-pointer"
          >
            <Check className="w-5 h-5" />
            <span>Hazırım, Dizmeye Başla! (Enter ↵)</span>
          </button>
        </div>
      )}

      {/* 3. SCRAMBLE */}
      {phase === 'scramble' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="text-xs text-slate-400 mb-3 flex items-center justify-between w-full">
            <span className="font-serif text-amber-300 font-bold">{currentQuote.book} — {currentQuote.author}</span>
            <span>{userSequence.length} / {originalTokens.length} kelime</span>
          </div>

          {/* User's assembled sequence box */}
          <div className="w-full min-h-[100px] max-h-40 sm:max-h-48 overflow-y-auto p-3 sm:p-4 rounded-3xl bg-slate-900/95 border-2 border-slate-700/80 shadow-2xl mb-4 sm:mb-6 flex flex-wrap gap-1.5 sm:gap-2 items-center justify-center">
            {userSequence.length === 0 ? (
              <span className="text-xs text-slate-500 italic font-serif">Aşağıdaki kelimelere sırasıyla dokunarak cümleyi oluşturun...</span>
            ) : (
              userSequence.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleRemoveWord(item)}
                  className="px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-emerald-600/30 border border-emerald-400/60 text-emerald-200 font-serif text-sm sm:text-base font-semibold flex items-center gap-1 shadow hover:bg-rose-900/40 hover:border-rose-400 hover:text-rose-200 transition cursor-pointer"
                  title="Geri almak için tıkla"
                >
                  <span>{item.word}</span>
                  <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-60" />
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
                    ? 'bg-slate-900 text-slate-700 border border-slate-900 cursor-not-allowed opacity-30'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-emerald-400 shadow-md hover:scale-105 cursor-pointer'
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
            className="flex items-center gap-2 px-10 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-40 text-white font-bold shadow-xl transition cursor-pointer"
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
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-xs text-slate-400 mb-1">Dizilim Doğruluğu</div>
              <div className={`text-2xl sm:text-3xl font-serif font-extrabold ${accuracy >= 80 ? 'text-emerald-400' : accuracy >= 50 ? 'text-amber-400' : 'text-rose-400'}`}>
                %{accuracy}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-xs text-slate-400 mb-1">Doğru Sıralama</div>
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-sky-400">
                {correctCount} / {originalTokens.length}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-xs text-slate-400 mb-1">Kazanılan Puan</div>
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-emerald-400">
                {score}
              </div>
            </div>
          </div>

          {/* Word Comparison Panel */}
          <div className="w-full p-5 sm:p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl mb-6">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              <span>Sıralama & Doğruluk Karşılaştırması</span>
              <div className="flex items-center gap-2.5 text-[11px] font-normal normal-case">
                <span className="text-emerald-400">● Doğru Konum</span>
                <span className="text-rose-400">● Hatalı Konum</span>
              </div>
            </div>

            {/* User Assembled Words with status */}
            <div className="mb-4">
              <span className="text-xs text-slate-400 block mb-2 font-medium">Sizin Oluşturduğunuz Dizilim:</span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 text-sm sm:text-base font-serif leading-relaxed p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 max-h-48 sm:max-h-60 overflow-y-auto">
                {diffAnalysis.map((item, idx) => (
                  <span
                    key={idx}
                    className={`px-2.5 py-1 rounded-xl font-semibold border flex items-center gap-1.5 ${
                      item.isCorrect
                        ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40 shadow-sm'
                        : 'bg-rose-950/60 text-rose-300 border-rose-500/40'
                    }`}
                  >
                    <span>{item.placedWord}</span>
                    {!item.isCorrect && (
                      <span className="text-[10px] bg-rose-900/80 px-1.5 py-0.5 rounded text-rose-200 font-sans font-normal" title={`Olması gereken: ${item.expectedWord}`}>
                        ({item.expectedWord})
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Original Literary Quote */}
            <div className="pt-4 border-t border-slate-800/80 text-xs">
              <span className="text-slate-400 font-semibold block mb-1">
                Orijinal Eser: <strong className="text-emerald-300 font-serif">{currentQuote.book}</strong> ({currentQuote.author})
              </span>
              <p className="text-slate-200 italic font-serif text-sm sm:text-base quote-text leading-relaxed">
                "{currentQuote.quote}"
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={startNewGame}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition shadow-lg shadow-emerald-600/20 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-white" />
              <span>Sıradaki Yeni Cümle (Enter ↵)</span>
            </button>

            <button
              onClick={() => startRound(currentQuote)}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Tekrar Dene</span>
            </button>

            <button
              onClick={() => setPhase('selection')}
              className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 text-sm transition cursor-pointer"
            >
              Tür / Seviye Değiştir
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
