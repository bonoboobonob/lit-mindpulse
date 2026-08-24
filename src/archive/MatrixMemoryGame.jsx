import React, { useState, useEffect, useRef } from 'react';
import { Eye, Play, RotateCcw, Heart, Trophy, ArrowLeft, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../../utils/sound';

export default function MatrixMemoryGame({ onGameOver, onBack, highScore = 0 }) {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameState, setGameState] = useState('idle'); // 'idle' | 'showing' | 'recalling' | 'round_success' | 'gameover'
  const [gridConfig, setGridConfig] = useState({ size: 3, count: 3 });
  const [targetTiles, setTargetTiles] = useState([]);
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [wrongTiles, setWrongTiles] = useState([]);
  const [message, setMessage] = useState('Matris hafızası oyununu başlatmak için tıklayın.');

  const timerRef = useRef(null);

  // Compute grid size and target count according to level
  const getLevelConfig = (lvl) => {
    if (lvl <= 2) return { size: 3, count: 2 + lvl }; // 3x3, 3-4 tiles
    if (lvl <= 5) return { size: 4, count: 4 + (lvl - 2) }; // 4x4, 5-7 tiles
    if (lvl <= 9) return { size: 5, count: 7 + (lvl - 5) }; // 5x5, 8-11 tiles
    return { size: 6, count: Math.min(12 + (lvl - 9), 20) }; // 6x6
  };

  const startRound = (newLevel = level) => {
    const config = getLevelConfig(newLevel);
    setGridConfig(config);
    setSelectedTiles([]);
    setWrongTiles([]);

    const totalCells = config.size * config.size;
    const indices = Array.from({ length: totalCells }, (_, i) => i);
    
    // Pick random target cells
    const shuffled = indices.sort(() => 0.5 - Math.random());
    const targets = shuffled.slice(0, config.count);
    setTargetTiles(targets);

    setGameState('showing');
    setMessage(`Parlayan ${config.count} kareyi aklınızda tutun...`);
    sounds.playTone(440, 'sine', 0.2, 0.1);

    // Show duration: 1.4s
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setGameState('recalling');
      setMessage('Şimdi parlayan kareleri seçin!');
    }, 1400);
  };

  const startGame = () => {
    sounds.playClick();
    setScore(0);
    setLevel(1);
    setLives(3);
    startRound(1);
  };

  const handleTileClick = (index) => {
    if (gameState !== 'recalling') return;
    if (selectedTiles.includes(index) || wrongTiles.includes(index)) return;

    if (targetTiles.includes(index)) {
      // Correct tile
      sounds.playTone(523.25 + selectedTiles.length * 50, 'triangle', 0.15, 0.15);
      const newSelected = [...selectedTiles, index];
      setSelectedTiles(newSelected);

      // Check if all targets found
      if (newSelected.length === targetTiles.length) {
        sounds.playLevelUp();
        const roundPoints = targetTiles.length * 15 * level;
        const newScore = score + roundPoints;
        setScore(newScore);
        setGameState('round_success');
        setMessage('Tebrikler! Bir sonraki seviyeye geçiyorsunuz.');

        if (newScore > highScore && highScore > 0) {
          confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
        }

        setTimeout(() => {
          const nextLevel = level + 1;
          setLevel(nextLevel);
          startRound(nextLevel);
        }, 1100);
      }
    } else {
      // Wrong tile clicked
      sounds.playError();
      setWrongTiles((prev) => [...prev, index]);
      const remainingLives = lives - 1;
      setLives(remainingLives);

      if (remainingLives <= 0) {
        setGameState('gameover');
        setMessage('Canınız tükendi! Oyun sona erdi.');
        onGameOver({ gameId: 'matrix', score, level });
      } else {
        setMessage(`Hata! ${remainingLives} canınız kaldı.`);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const totalCells = gridConfig.size * gridConfig.size;

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-4 flex flex-col items-center">
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

          <div className="flex items-center gap-1 px-3 py-1 bg-purple-950/80 border border-purple-500/30 rounded-lg text-purple-300 font-bold text-sm">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Skor: {score}</span>
          </div>
        </div>
      </div>

      {/* Title & Info */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <Eye className="w-3.5 h-3.5" />
          Matris Hafızası / Seviye {level} ({gridConfig.size}x{gridConfig.size})
        </div>
        <p className="text-sm sm:text-base text-slate-300 font-medium h-6">
          {message}
        </p>
      </div>

      {/* Matrix Grid */}
      <div className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl mb-8">
        <div
          className="grid gap-2.5 sm:gap-3"
          style={{
            gridTemplateColumns: `repeat(${gridConfig.size}, minmax(0, 1fr))`,
            width: gridConfig.size <= 4 ? '280px' : gridConfig.size === 5 ? '320px' : '360px',
            height: gridConfig.size <= 4 ? '280px' : gridConfig.size === 5 ? '320px' : '360px',
          }}
        >
          {Array.from({ length: totalCells }).map((_, index) => {
            const isTarget = targetTiles.includes(index);
            const isSelected = selectedTiles.includes(index);
            const isWrong = wrongTiles.includes(index);
            const isShowingPhase = gameState === 'showing';
            const isSuccessPhase = gameState === 'round_success';

            let cellClass = 'bg-slate-800/80 border-slate-700/60 hover:bg-slate-700/80';

            if (isShowingPhase && isTarget) {
              cellClass = 'bg-gradient-to-tr from-cyan-400 to-indigo-400 border-cyan-300 shadow-[0_0_20px_#38bdf8] scale-95';
            } else if (isSelected) {
              cellClass = 'bg-gradient-to-tr from-emerald-500 to-teal-400 border-emerald-300 shadow-[0_0_15px_#10b981]';
            } else if (isWrong) {
              cellClass = 'bg-rose-600 border-rose-400 shadow-[0_0_15px_#f43f5e] animate-shake';
            } else if (gameState === 'gameover' && isTarget) {
              cellClass = 'bg-indigo-600/40 border-indigo-400 border-dashed';
            }

            return (
              <button
                key={index}
                disabled={gameState !== 'recalling'}
                onClick={() => handleTileClick(index)}
                className={`rounded-xl border transition-all duration-200 flex items-center justify-center cursor-pointer disabled:cursor-default ${cellClass}`}
              >
                {isSelected && <CheckCircle2 className="w-5 h-5 text-white" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      {gameState === 'idle' && (
        <button
          onClick={startGame}
          className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold shadow-lg shadow-purple-600/30 hover:scale-105 transition"
        >
          <Play className="w-5 h-5 fill-white" />
          <span>Matris Testini Başlat</span>
        </button>
      )}

      {gameState === 'gameover' && (
        <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in-95 duration-200">
          <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 text-center">
            <h3 className="text-lg font-bold text-rose-300 mb-1">Oyun Sona Erdi!</h3>
            <p className="text-sm text-slate-300">
              En Yüksek Seviye: <strong className="text-white">{level}</strong> | Skor: <strong className="text-purple-400">{score}</strong>
            </p>
          </div>
          <button
            onClick={startGame}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold shadow-lg shadow-purple-600/30 hover:scale-105 transition"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Yeniden Başlat</span>
          </button>
        </div>
      )}
    </div>
  );
}
