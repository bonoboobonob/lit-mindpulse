import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Play, RotateCcw, Trophy, ArrowLeft, Check, X, Timer, Sparkles, PlusCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WORD_PACKS, MNEMONIC_TIPS } from '../../data/gamesData';
import { sounds } from '../../utils/sound';

export default function WordMemorizerGame({ onGameOver, onBack, highScore = 0 }) {
  const [selectedPackKey, setSelectedPackKey] = useState('medium');
  const [customWordsInput, setCustomWordsInput] = useState('');
  const [showCustomModal, setShowCustomModal] = useState(false);

  const [phase, setPhase] = useState('idle'); // 'idle' | 'study' | 'recall' | 'result'
  const [wordList, setWordList] = useState([]);
  const [scrambledOptions, setScrambledOptions] = useState([]);
  const [userSelection, setUserSelection] = useState([]);
  const [timeLeft, setTimeLeft] = useState(25);
  const [totalStudyTime, setTotalStudyTime] = useState(25);
  const [score, setScore] = useState(0);

  const timerRef = useRef(null);

  const startStudyPhase = (packKey = selectedPackKey, customWords = null) => {
    sounds.playClick();
    if (timerRef.current) clearInterval(timerRef.current);

    let words = [];
    let duration = 25;

    if (customWords && customWords.length >= 3) {
      words = customWords;
      duration = Math.max(10, words.length * 3);
    } else {
      const pack = WORD_PACKS[packKey] || WORD_PACKS.medium;
      words = [...pack.words];
      duration = pack.time;
    }

    setWordList(words);
    setTimeLeft(duration);
    setTotalStudyTime(duration);
    setUserSelection([]);
    setPhase('study');

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          startRecallPhase(words);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const startRecallPhase = (words = wordList) => {
    sounds.playLevelUp();
    if (timerRef.current) clearInterval(timerRef.current);
    setPhase('recall');

    // Create scrambled options: correct words + a few random distractors
    const distractors = ['Bulut', 'Pusula', 'Gölge', 'Nehir', 'Işık', 'Ağaç', 'Yankı'].filter(w => !words.includes(w)).slice(0, 3);
    const pool = [...words, ...distractors].sort(() => 0.5 - Math.random());
    setScrambledOptions(pool);
    setUserSelection([]);
  };

  const handleToggleWord = (word) => {
    if (userSelection.includes(word)) {
      sounds.playClick();
      setUserSelection(userSelection.filter(w => w !== word));
    } else {
      if (userSelection.length < wordList.length) {
        sounds.playTone(550 + userSelection.length * 40, 'triangle', 0.12, 0.12);
        setUserSelection([...userSelection, word]);
      }
    }
  };

  const submitRecall = () => {
    sounds.playClick();
    setPhase('result');

    // Calculate score & accuracy
    let correctCount = 0;
    let orderMatchCount = 0;

    userSelection.forEach((w, idx) => {
      if (wordList.includes(w)) correctCount++;
      if (wordList[idx] === w) orderMatchCount++;
    });

    const accuracy = Math.round((correctCount / wordList.length) * 100);
    const calculatedScore = (correctCount * 50) + (orderMatchCount * 30);
    setScore(calculatedScore);

    if (accuracy >= 80) {
      sounds.playVictory();
      confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
    } else {
      sounds.playError();
    }

    onGameOver({ gameId: 'wordMemorizer', score: calculatedScore, accuracy });
  };

  const handleSaveCustomWords = () => {
    const raw = customWordsInput.split(/[\n,]+/).map(w => w.trim()).filter(Boolean);
    if (raw.length >= 3) {
      setShowCustomModal(false);
      setSelectedPackKey('custom');
      startStudyPhase('custom', raw);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4 flex flex-col items-center">
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
              <span>{timeLeft}s Kaldı</span>
            </div>
          )}

          <div className="flex items-center gap-1 px-3 py-1 bg-amber-950/80 border border-amber-500/30 rounded-lg text-amber-300 font-bold text-sm">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Skor: {score}</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <BookOpen className="w-3.5 h-3.5" />
          Hızlı Kelime & Sayı Ezberi
        </div>
        <h2 className="text-xl font-bold text-white">
          {phase === 'idle' && 'Ezber Paketini Seçin ve Başlayın'}
          {phase === 'study' && 'Kelimeleri Hafıza Sarayınıza Yerleştirin'}
          {phase === 'recall' && 'Hatırladığınız Kelimeleri Sırayla Seçin'}
          {phase === 'result' && 'Hafıza Performansı Değerlendirmesi'}
        </h2>
      </div>

      {/* Mode / Pack Selector (When idle) */}
      {phase === 'idle' && (
        <div className="w-full max-w-md space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.entries(WORD_PACKS).map(([key, pack]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedPackKey(key);
                  startStudyPhase(key);
                }}
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/80 text-left transition group"
              >
                <div className="text-sm font-semibold text-slate-200 group-hover:text-amber-300">
                  {pack.name}
                </div>
                <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                  <span>⏱️ {pack.time} saniye</span>
                  <span>• {pack.words.length} Kelime</span>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowCustomModal(true)}
            className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/40 hover:border-indigo-400 text-indigo-200 text-sm font-medium flex items-center justify-center gap-2 transition"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Kendi Kelime Listeni Ekle (Ders/Şiir/Sözlük)</span>
          </button>
        </div>
      )}

      {/* Study Phase */}
      {phase === 'study' && (
        <div className="w-full max-w-lg flex flex-col items-center">
          {/* Progress Bar */}
          <div className="w-full bg-slate-800 h-2 rounded-full mb-6 overflow-hidden">
            <div
              className="bg-gradient-to-r from-amber-500 to-rose-500 h-full transition-all duration-1000 ease-linear"
              style={{ width: `${(timeLeft / totalStudyTime) * 100}%` }}
            />
          </div>

          {/* Word Badges Grid */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {wordList.map((word, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/30 flex items-center gap-2.5 shadow-lg shadow-amber-500/5"
              >
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-base font-semibold text-slate-100 truncate">
                  {word}
                </span>
              </div>
            ))}
          </div>

          {/* Ready Button */}
          <button
            onClick={() => startRecallPhase(wordList)}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold shadow-lg shadow-amber-600/30 hover:scale-105 transition"
          >
            <Check className="w-5 h-5" />
            <span>Ezberledim, Hatırlamaya Geç!</span>
          </button>
        </div>
      )}

      {/* Recall Phase */}
      {phase === 'recall' && (
        <div className="w-full max-w-lg flex flex-col items-center">
          <p className="text-xs text-slate-400 mb-4">
            Aşağıdaki kelimelerden aklınızda kalanları sırasıyla tıklayarak ekleyin ({userSelection.length}/{wordList.length}):
          </p>

          {/* User's Selected Sequence Box */}
          <div className="w-full min-h-[90px] p-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 mb-6 flex flex-wrap gap-2 items-center">
            {userSelection.length === 0 ? (
              <span className="text-xs text-slate-500 italic mx-auto">Kelimelere tıklayarak buraya sırasıyla ekleyin...</span>
            ) : (
              userSelection.map((w, i) => (
                <button
                  key={i}
                  onClick={() => handleToggleWord(w)}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs sm:text-sm font-medium flex items-center gap-1.5 shadow"
                >
                  <span className="text-[10px] text-indigo-200 font-bold">{i + 1}.</span>
                  <span>{w}</span>
                  <X className="w-3.5 h-3.5 text-indigo-200 hover:text-white" />
                </button>
              ))
            )}
          </div>

          {/* Scrambled Word Pool */}
          <div className="w-full flex flex-wrap gap-2.5 justify-center mb-8">
            {scrambledOptions.map((word, i) => {
              const isSelected = userSelection.includes(word);
              return (
                <button
                  key={i}
                  disabled={isSelected}
                  onClick={() => handleToggleWord(word)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                    isSelected
                      ? 'bg-slate-800 text-slate-600 border border-slate-800 cursor-not-allowed opacity-40'
                      : 'bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-indigo-400'
                  }`}
                >
                  {word}
                </button>
              );
            })}
          </div>

          {/* Submit */}
          <button
            onClick={submitRecall}
            disabled={userSelection.length === 0}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white font-bold shadow-lg shadow-emerald-600/30 transition"
          >
            <Sparkles className="w-5 h-5" />
            <span>Cevabı Gönder & Kontrol Et</span>
          </button>
        </div>
      )}

      {/* Result Phase */}
      {phase === 'result' && (
        <div className="w-full max-w-lg flex flex-col items-center">
          {/* Comparison Table */}
          <div className="w-full rounded-2xl bg-slate-900 border border-slate-800 p-4 mb-6 shadow-xl">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Doğruluk Analizi (Orijinal Sıra vs. Sizin Hatırladığınız)
            </h4>
            <div className="space-y-2">
              {wordList.map((targetWord, idx) => {
                const userWord = userSelection[idx];
                const isExactMatch = userWord === targetWord;
                const isFoundSomewhere = userSelection.includes(targetWord);

                return (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs sm:text-sm ${
                      isExactMatch
                        ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                        : isFoundSomewhere
                        ? 'bg-amber-950/30 border-amber-500/40 text-amber-300'
                        : 'bg-rose-950/30 border-rose-500/40 text-rose-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{idx + 1}. {targetWord}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isExactMatch && <span className="text-xs bg-emerald-500/20 px-2 py-0.5 rounded font-medium">Tam Doğru (+80p)</span>}
                      {!isExactMatch && isFoundSomewhere && <span className="text-xs bg-amber-500/20 px-2 py-0.5 rounded font-medium">Sırası Farklı (+50p)</span>}
                      {!isFoundSomewhere && <span className="text-xs bg-rose-500/20 px-2 py-0.5 rounded font-medium">Unutuldu</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => startStudyPhase(selectedPackKey)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition shadow-lg shadow-indigo-600/30"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Aynı Listeyi Tekrar Dene</span>
            </button>
            <button
              onClick={() => setPhase('idle')}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium transition"
            >
              Paket Değiştir
            </button>
          </div>
        </div>
      )}

      {/* Custom Words Modal */}
      {showCustomModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-2">Özel Ezber Listesi Oluştur</h3>
            <p className="text-xs text-slate-400 mb-4">
              Kelimeleri veya maddeleri virgülle ya da alt alta yazarak girin (en az 3 kelime):
            </p>
            <textarea
              rows={5}
              value={customWordsInput}
              onChange={(e) => setCustomWordsInput(e.target.value)}
              placeholder="Örn: Mitokondri, Ribozom, Lizozom, Çekirdek, Sitoplazma"
              className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 mb-4"
            />
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setShowCustomModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white text-sm"
              >
                İptal
              </button>
              <button
                onClick={handleSaveCustomWords}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition"
              >
                Başlat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
