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
  Puzzle,
  Lightbulb
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BOOK_GENRES, DIFFICULTY_LEVELS, BOOK_QUOTES } from '../../data/bookQuotes';
import { quoteQueue } from '../../utils/quoteQueue';
import { sounds } from '../../utils/sound';

const STOPWORDS = ['ve', 'veya', 'bir', 'bu', 'şu', 'o', 'de', 'da', 'ile', 'için', 'ne', 'ise', 'ki', 'gibi', 'kadar', 'en', 'daha', 'çok', 'ama', 'fakat', 'ancak'];

export default function ClozeRecallGame({ onGameOver, onBack, highScore = 0 }) {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('medium');
  const [currentQuote, setCurrentQuote] = useState(null);

  const [phase, setPhase] = useState('selection'); // 'selection' | 'study' | 'testing' | 'result'
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
    
    // Pick candidate words (core length >= 4 and not in stopwords)
    const eligibleIndices = [];
    rawWords.forEach((w, idx) => {
      const parsed = parseToken(w);
      const clean = cleanWord(parsed.core);
      if (clean.length >= 4 && !STOPWORDS.includes(clean)) {
        eligibleIndices.push(idx);
      }
    });

    const blanksCount = Math.min(Math.max(2, Math.floor(rawWords.length / 4)), 4);
    const shuffled = [...eligibleIndices].sort(() => 0.5 - Math.random());
    const selectedBlankIndices = new Set(shuffled.slice(0, blanksCount));

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
    const quote = quoteQueue.getNextQuote(selectedGenre, selectedDifficulty);
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
      <div className="w-full flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 text-sm transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kütüphaneye Dön</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          {phase === 'study' && (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-300 font-bold text-xs sm:text-sm">
              <Timer className="w-4 h-4 animate-spin text-amber-400" />
              <span>{timeLeft}s Ezber</span>
            </div>
          )}

          <div className="flex items-center gap-1 px-3 py-1 bg-amber-950/40 border border-amber-500/30 rounded-xl text-amber-300 font-bold text-xs sm:text-sm">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Skor: {score}</span>
          </div>
        </div>
      </div>

      {/* Mode Badge & Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <Puzzle className="w-3.5 h-3.5" />
          <span>Edebi Boşluk Doldurma (Cloze Test)</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-100">
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
            <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-2.5">
              1. Edebi Kategori
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-56 sm:max-h-72 overflow-y-auto p-2 border border-slate-800/80 rounded-2xl bg-slate-950/40">
              {BOOK_GENRES.map(g => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGenre(g.id)}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    selectedGenre === g.id
                      ? 'bg-purple-900/30 border-purple-400 text-white shadow-lg shadow-purple-500/10'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-xs font-serif font-bold block">{g.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-2.5">
              2. Zorluk Seviyesi
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DIFFICULTY_LEVELS.map(d => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDifficulty(d.id)}
                  className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                    selectedDifficulty === d.id
                      ? 'bg-purple-950/40 border-purple-500 text-white'
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
            onClick={startNewRound}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-purple-600/20 hover:scale-[1.01] transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-5 h-5 fill-white" />
            <span>Boşluk Doldurma Egzersizini Başlat</span>
          </button>
        </div>
      )}

      {/* 2. STUDY PHASE */}
      {phase === 'study' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full bg-slate-800/80 h-2 rounded-full mb-6 overflow-hidden border border-slate-700/50">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-1000 ease-linear"
              style={{ width: `${(timeLeft / totalStudyTime) * 100}%` }}
            />
          </div>

          <div className="w-full p-6 sm:p-8 rounded-3xl bg-slate-900 border-2 border-purple-500/30 shadow-2xl mb-8">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span className="font-bold text-purple-300 font-serif text-sm">{currentQuote.book}</span>
                <span className="text-slate-500">—</span>
                <span className="text-slate-300 font-medium">{currentQuote.author}</span>
              </div>
            </div>

            <p className="text-lg sm:text-2xl font-serif font-medium text-slate-100 leading-relaxed text-center italic my-6 px-2">
              {clozeTokens.map((t, idx) => {
                if (t.isBlank) {
                  return (
                    <span key={idx} className="inline-block mx-1 my-0.5">
                      {t.prefix}
                      <span className="px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 not-italic font-bold font-serif shadow-sm">
                        {t.coreWord}
                      </span>
                      {t.suffix}
                    </span>
                  );
                }
                return <span key={idx} className="mx-1">{t.fullWord}</span>;
              })}
            </p>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-purple-300 px-1">
              <span>💡 Vurgulanan kelimeleri aklınızda tutun.</span>
              <span className="hidden sm:inline text-slate-400 font-mono bg-slate-800 px-2 py-0.5 rounded">Enter ↵</span>
            </div>
          </div>

          <button
            onClick={startTestingPhase}
            className="flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base shadow-lg hover:scale-105 transition cursor-pointer"
          >
            <Check className="w-5 h-5" />
            <span>Ezberledim, Boşlukları Doldur! (Enter ↵)</span>
          </button>
        </div>
      )}

      {/* 3. TESTING PHASE */}
      {phase === 'testing' && currentQuote && (
        <div className="w-full max-w-2xl flex flex-col items-center animate-in fade-in duration-200">
          <div className="w-full p-6 sm:p-8 rounded-3xl bg-slate-900 border-2 border-purple-500/40 shadow-2xl mb-6">
            <div className="text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800 flex items-center justify-between">
              <span className="font-serif text-purple-300 font-bold">{currentQuote.book} ({currentQuote.author})</span>
              <span className="text-slate-400 font-semibold">{clozeTokens.filter(t => t.isBlank).length} Boşluk</span>
            </div>

            <div className="text-lg sm:text-2xl font-serif font-medium text-slate-200 leading-loose text-center my-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
              {clozeTokens.map((t, idx) => {
                if (!t.isBlank) {
                  return <span key={idx} className="mx-0.5">{t.fullWord}</span>;
                }
                const bIdx = t.blankIndex;
                return (
                  <span key={idx} className="inline-flex items-center mx-1">
                    {t.prefix}
                    <input
                      ref={el => inputRefs.current[bIdx] = el}
                      type="text"
                      value={userInputs[bIdx] || ''}
                      onChange={(e) => handleInputChange(bIdx, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, bIdx)}
                      placeholder={`(${bIdx + 1})`}
                      className="w-28 sm:w-36 px-2.5 py-1 text-center font-serif text-base sm:text-lg bg-slate-950 border-2 border-purple-400 rounded-xl text-amber-300 placeholder-slate-600 focus:outline-none focus:border-amber-400 shadow-inner"
                    />
                    {t.suffix}
                  </span>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-10 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-base shadow-xl hover:scale-105 transition cursor-pointer"
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
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-xs text-slate-400 mb-1">Boşluk Doğruluğu</div>
              <div className={`text-3xl font-extrabold font-serif ${accuracy >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
                %{accuracy}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-xs text-slate-400 mb-1">Kazanılan Puan</div>
              <div className="text-3xl font-extrabold font-serif text-purple-400">
                {score}
              </div>
            </div>
          </div>

          <div className="w-full p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Boşluk Analizi</h4>
            <div className="space-y-2.5">
              {clozeTokens.filter(t => t.isBlank).map((b, i) => {
                const userVal = cleanWord(userInputs[b.blankIndex] || '');
                const isCorrect = userVal === b.cleanTarget;

                return (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border text-sm font-serif ${
                      isCorrect
                        ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                        : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
                    }`}
                  >
                    <div>
                      <span className="font-sans text-xs text-slate-400 block mb-0.5">Boşluk #{i + 1}:</span>
                      <strong className="text-base">{b.coreWord}</strong>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-slate-400 block mb-0.5">Sizin cevabınız:</span>
                      <span className="font-semibold">{userInputs[b.blankIndex] || '(Boş bırakıldı)'}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={startNewRound}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition shadow-lg cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-white" />
              <span>Sıradaki Yeni Cümle (Enter ↵)</span>
            </button>
            <button
              onClick={() => setPhase('selection')}
              className="px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm cursor-pointer"
            >
              Tür Değiştir
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
