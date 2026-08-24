import React, { useState, useEffect } from 'react';
import { Brain, Play, RotateCcw, Heart, Trophy, ArrowLeft, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../../utils/sound';

export default function ChimpTestGame({ onGameOver, onBack, highScore = 0 }) {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameState, setGameState] = useState('idle'); // 'idle' | 'showing' | 'hidden' | 'level_pass' | 'gameover'
  const [gridTiles, setGridTiles] = useState([]); // array of { id, number, isClicked, isVisible }
  const [nextExpected, setNextExpected] = useState(1);
  const [message, setMessage] = useState('Şempanze Hafıza Testini başlatmak için tıklayın.');

  // Grid dimensions: 5 rows x 8 cols = 40 cells
  const ROWS = 5;
  const COLS = 8;
  const TOTAL_CELLS = ROWS * COLS;

  const startLevel = (lvl = level) => {
    sounds.playClick();
    const numbersCount = Math.min(3 + lvl, 15); // Level 1 = 4 numbers, Level 7 = 10 numbers
    const cellIndices = Array.from({ length: TOTAL_CELLS }, (_, i) => i);
    const shuffledPositions = cellIndices.sort(() => 0.5 - Math.random()).slice(0, numbersCount);

    const tiles = Array(TOTAL_CELLS).fill(null);
    shuffledPositions.forEach((pos, idx) => {
      tiles[pos] = {
        number: idx + 1,
        isClicked: false,
      };
    });

    setGridTiles(tiles);
    setNextExpected(1);
    setGameState('showing');
    setMessage(`1'den ${numbersCount}'e kadar sayıları inceleyin. 1'e bastığınızda diğerleri gizlenecek!`);
  };

  const startGame = () => {
    setScore(0);
    setLevel(1);
    setLives(3);
    startLevel(1);
  };

  const handleTileClick = (index) => {
    const tile = gridTiles[index];
    if (!tile || tile.isClicked || gameState === 'level_pass' || gameState === 'gameover') return;

    const clickedNum = tile.number;

    if (clickedNum === nextExpected) {
      // Correct click
      sounds.playTone(400 + clickedNum * 60, 'triangle', 0.15, 0.15);

      // On first correct click (clicking '1'), hide all other numbers!
      if (clickedNum === 1 && gameState === 'showing') {
        setGameState('hidden');
        setMessage('Hepsini sırasıyla tıklamaya devam edin!');
      }

      // Mark this tile clicked
      const updated = [...gridTiles];
      updated[index] = { ...tile, isClicked: true };
      setGridTiles(updated);

      const targetTotal = Math.min(3 + level, 15);

      if (clickedNum === targetTotal) {
        // Level completed!
        sounds.playLevelUp();
        const earnedPoints = targetTotal * 20 * level;
        const newScore = score + earnedPoints;
        setScore(newScore);
        setGameState('level_pass');
        setMessage(`Mükemmel! ${targetTotal} sayıyı tam hatırladınız.`);

        if (newScore > highScore && highScore > 0) {
          confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
        }

        setTimeout(() => {
          const nextLvl = level + 1;
          setLevel(nextLvl);
          startLevel(nextLvl);
        }, 1200);
      } else {
        setNextExpected(clickedNum + 1);
      }
    } else {
      // Wrong number clicked!
      sounds.playError();
      const remainingLives = lives - 1;
      setLives(remainingLives);

      if (remainingLives <= 0) {
        setGameState('gameover');
        setMessage('Oyun bitti! Hafıza limitinizi keşfettiniz.');
        onGameOver({ gameId: 'chimpTest', score, level });
      } else {
        setMessage(`Hata! Beklenen: ${nextExpected}. Kalan can: ${remainingLives}`);
        setTimeout(() => {
          startLevel(level);
        }, 1200);
      }
    }
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

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-rose-400">
            {Array.from({ length: 3 }).map((_, i) => (
              <Heart
                key={i}
                className={`w-5 h-5 ${i < lives ? 'fill-rose-500 text-rose-500' : 'text-slate-700'}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1 px-3 py-1 bg-pink-950/80 border border-pink-500/30 rounded-lg text-pink-300 font-bold text-sm">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Skor: {score}</span>
          </div>
        </div>
      </div>

      {/* Header Info */}
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <Brain className="w-3.5 h-3.5" />
          Chimp Test / Seviye {level} ({Math.min(3 + level, 15)} Sayı)
        </div>
        <p className="text-sm sm:text-base text-slate-300 font-medium h-6">
          {message}
        </p>
      </div>

      {/* Chimp Test 5x8 Grid */}
      <div className="w-full p-4 sm:p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl mb-8">
        <div className="grid grid-cols-8 gap-2 sm:gap-2.5 max-w-lg mx-auto aspect-[8/5]">
          {gridTiles.map((tile, index) => {
            if (!tile) {
              return <div key={index} className="rounded-xl bg-slate-950/40 border border-slate-900" />;
            }

            if (tile.isClicked) {
              return (
                <div
                  key={index}
                  className="rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm font-bold opacity-40"
                >
                  ✓
                </div>
              );
            }

            const shouldShowNumber = gameState === 'showing' || gameState === 'gameover';

            return (
              <button
                key={index}
                onClick={() => handleTileClick(index)}
                className={`rounded-xl border-2 font-bold text-base sm:text-lg flex items-center justify-center transition-all cursor-pointer hover:scale-105 shadow-md ${
                  shouldShowNumber
                    ? 'bg-slate-800 border-indigo-400 text-white shadow-indigo-500/20'
                    : 'bg-white border-slate-300 text-transparent hover:bg-slate-200'
                }`}
              >
                {shouldShowNumber ? tile.number : ''}
              </button>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      {gameState === 'idle' && (
        <button
          onClick={startGame}
          className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold shadow-lg shadow-pink-600/30 hover:scale-105 transition"
        >
          <Play className="w-5 h-5 fill-white" />
          <span>Testi Başlat</span>
        </button>
      )}

      {gameState === 'gameover' && (
        <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in-95 duration-200">
          <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 text-center">
            <h3 className="text-lg font-bold text-rose-300 mb-1">Test Tamamlandı!</h3>
            <p className="text-sm text-slate-300">
              Maksimum Sayı: <strong className="text-white">{Math.min(3 + level, 15)}</strong> | Puan: <strong className="text-pink-400">{score}</strong>
            </p>
          </div>
          <button
            onClick={startGame}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold shadow-lg shadow-pink-600/30 hover:scale-105 transition"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Tekrar Başla</span>
          </button>
        </div>
      )}
    </div>
  );
}
