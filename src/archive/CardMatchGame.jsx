import React, { useState, useEffect, useRef } from 'react';
import { Layers, RotateCcw, Trophy, ArrowLeft, Timer, Flame, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CARD_THEMES } from '../../data/gamesData';
import { sounds } from '../../utils/sound';

export default function CardMatchGame({ onGameOver, onBack, highScore = 0 }) {
  const [selectedTheme, setSelectedTheme] = useState('emojis');
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]); // indices
  const [matchedPairs, setMatchedPairs] = useState([]); // matchKeys
  const [moves, setMoves] = useState(0);
  const [combo, setCombo] = useState(1);
  const [score, setScore] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const timerRef = useRef(null);

  // Initialize and shuffle deck
  const setupGame = (themeKey = selectedTheme) => {
    sounds.playClick();
    if (timerRef.current) clearInterval(timerRef.current);

    const theme = CARD_THEMES[themeKey] || CARD_THEMES.emojis;
    const shuffled = [...theme.pairs].sort(() => 0.5 - Math.random());

    setCards(shuffled);
    setFlippedCards([]);
    setMatchedPairs([]);
    setMoves(0);
    setCombo(1);
    setScore(0);
    setTimeElapsed(0);
    setIsGameActive(true);
    setIsWon(false);
    setIsChecking(false);

    timerRef.current = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    setupGame(selectedTheme);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [selectedTheme]);

  const handleCardClick = (index) => {
    if (!isGameActive || isChecking) return;
    if (flippedCards.includes(index)) return;
    if (matchedPairs.includes(cards[index].matchKey)) return;

    sounds.playCardFlip();
    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      setIsChecking(true);

      const [firstIdx, secondIdx] = newFlipped;
      const card1 = cards[firstIdx];
      const card2 = cards[secondIdx];

      if (card1.matchKey === card2.matchKey) {
        // MATCH!
        sounds.playMatchSuccess();
        const basePoints = 100;
        const comboBonus = combo * 30;
        const newScore = score + basePoints + comboBonus;
        setScore(newScore);
        setCombo((c) => Math.min(c + 1, 5));

        const updatedMatches = [...matchedPairs, card1.matchKey];
        setMatchedPairs(updatedMatches);
        setFlippedCards([]);
        setIsChecking(false);

        // Win condition check
        if (updatedMatches.length === cards.length / 2) {
          clearInterval(timerRef.current);
          setIsWon(true);
          setIsGameActive(false);
          sounds.playVictory();
          confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 } });
          
          // Time bonus
          const finalScore = Math.max(newScore + Math.max(0, 300 - timeElapsed * 3), 100);
          setScore(finalScore);
          onGameOver({ gameId: 'cardMatch', score: finalScore });
        }
      } else {
        // NO MATCH
        sounds.playError();
        setCombo(1);
        setTimeout(() => {
          setFlippedCards([]);
          setIsChecking(false);
        }, 900);
      }
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

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
          <div className="flex items-center gap-1 px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-lg text-slate-300 text-sm">
            <Timer className="w-4 h-4 text-sky-400" />
            <span>{formatTime(timeElapsed)}</span>
          </div>

          <div className="flex items-center gap-1 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-300 font-bold text-sm">
            <Flame className="w-4 h-4 text-amber-500" />
            <span>{combo}x Kombo</span>
          </div>

          <div className="flex items-center gap-1 px-3 py-1 bg-emerald-950/80 border border-emerald-500/30 rounded-lg text-emerald-300 font-bold text-sm">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>{score}</span>
          </div>
        </div>
      </div>

      {/* Theme Selector */}
      <div className="w-full flex items-center justify-center gap-2 mb-6 overflow-x-auto pb-1">
        {Object.entries(CARD_THEMES).map(([key, theme]) => (
          <button
            key={key}
            onClick={() => setSelectedTheme(key)}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition flex items-center gap-1.5 whitespace-nowrap ${
              selectedTheme === key
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400'
                : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-700/50'
            }`}
          >
            <span>{theme.name}</span>
          </button>
        ))}
      </div>

      {/* 4x4 Cards Grid */}
      <div className="w-full grid grid-cols-4 gap-2.5 sm:gap-3.5 mb-6 max-w-lg">
        {cards.map((card, index) => {
          const isFlipped = flippedCards.includes(index) || matchedPairs.includes(card.matchKey);
          const isMatched = matchedPairs.includes(card.matchKey);

          return (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className="aspect-square perspective-1000 cursor-pointer"
            >
              <div
                className={`relative w-full h-full duration-300 transform-style-3d transition-transform ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* Card Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-indigo-950 border-2 border-slate-700/80 flex items-center justify-center shadow-lg hover:border-indigo-500/60 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-slate-700/40 flex items-center justify-center text-slate-400 text-sm font-bold">
                    ?
                  </div>
                </div>

                {/* Card Front */}
                <div
                  className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl border-2 flex flex-col items-center justify-center p-1 text-center shadow-xl select-none ${
                    isMatched
                      ? 'bg-emerald-950/80 border-emerald-500/80 text-emerald-300'
                      : 'bg-indigo-900/90 border-indigo-400 text-white'
                  }`}
                >
                  <span className="text-xl sm:text-2xl font-bold leading-tight line-clamp-2">
                    {card.display}
                  </span>
                  {card.subtitle && (
                    <span className="text-[10px] text-slate-300/80 uppercase font-semibold mt-0.5">
                      {card.subtitle}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Win Banner / Restart */}
      {isWon ? (
        <div className="flex flex-col items-center gap-4 p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center animate-in fade-in zoom-in-95 duration-200">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <Check className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-emerald-300">Tebrikler, Tamamladınız!</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Süre: <strong>{formatTime(timeElapsed)}</strong> | Hamle: <strong>{moves}</strong> | Final Skor: <strong className="text-amber-400">{score}</strong>
            </p>
          </div>
          <button
            onClick={() => setupGame(selectedTheme)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Yeni Oyun Oyna</span>
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span>Hamle Sayısı: <strong className="text-slate-200">{moves}</strong></span>
          <span>Eşleşen Çift: <strong className="text-emerald-400">{matchedPairs.length} / {cards.length / 2}</strong></span>
          <button
            onClick={() => setupGame(selectedTheme)}
            className="p-1.5 text-slate-400 hover:text-slate-200 transition"
            title="Yeniden Başlat"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
