import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Zap, Heart, Trophy, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../../utils/sound';

const PADS = [
  { id: 0, color: 'bg-emerald-500 hover:bg-emerald-400 border-emerald-400', activeColor: 'bg-emerald-300 shadow-[0_0_35px_#10b981] scale-95 ring-4 ring-emerald-300', label: 'Yeşil' },
  { id: 1, color: 'bg-sky-500 hover:bg-sky-400 border-sky-400', activeColor: 'bg-sky-300 shadow-[0_0_35px_#0ea5e9] scale-95 ring-4 ring-sky-300', label: 'Mavi' },
  { id: 2, color: 'bg-amber-500 hover:bg-amber-400 border-amber-400', activeColor: 'bg-amber-300 shadow-[0_0_35px_#f59e0b] scale-95 ring-4 ring-amber-300', label: 'Sarı' },
  { id: 3, color: 'bg-rose-500 hover:bg-rose-400 border-rose-400', activeColor: 'bg-rose-300 shadow-[0_0_35px_#f43f5e] scale-95 ring-4 ring-rose-300', label: 'Kırmızı' },
];

export default function SequenceGame({ onGameOver, onBack, highScore = 0 }) {
  const [sequence, setSequence] = useState([]);
  const [userStep, setUserStep] = useState(0);
  const [isPlayingSeq, setIsPlayingSeq] = useState(false);
  const [activePad, setActivePad] = useState(null);
  const [gameState, setGameState] = useState('idle'); // 'idle' | 'playing' | 'gameover'
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [message, setMessage] = useState('Oyuna başlamak için Başla butonuna tıklayın.');
  
  const timerRef = useRef(null);

  // Trigger pad flash & sound
  const flashPad = (padId, duration = 300) => {
    setActivePad(padId);
    sounds.playSequenceNote(padId);
    setTimeout(() => {
      setActivePad(null);
    }, duration);
  };

  // Start new game
  const startGame = () => {
    sounds.playClick();
    setScore(0);
    setLevel(1);
    setLives(3);
    setGameState('playing');
    setMessage('Dizilimi dikkatle izleyin...');
    
    // Initial random note
    const firstPad = Math.floor(Math.random() * 4);
    const newSeq = [firstPad];
    setSequence(newSeq);
    setUserStep(0);
    playSequence(newSeq);
  };

  // Playback sequence to user
  const playSequence = (seqToPlay) => {
    setIsPlayingSeq(true);
    setMessage('Sıra çalınıyor, ezberleyin...');
    
    let i = 0;
    const interval = Math.max(350, 600 - seqToPlay.length * 20); // speeds up with length

    const timer = setInterval(() => {
      if (i < seqToPlay.length) {
        flashPad(seqToPlay[i], interval * 0.7);
        i++;
      } else {
        clearInterval(timer);
        setIsPlayingSeq(false);
        setUserStep(0);
        setMessage('Şimdi sizin sıranız! Aynı sırayla tıklayın.');
      }
    }, interval);

    timerRef.current = timer;
  };

  // Handle user pad click
  const handlePadClick = (padId) => {
    if (isPlayingSeq || gameState !== 'playing') return;

    flashPad(padId, 200);

    // Check if correct
    if (padId === sequence[userStep]) {
      const nextStep = userStep + 1;
      setUserStep(nextStep);

      // Successfully completed the sequence
      if (nextStep === sequence.length) {
        const pointsWon = sequence.length * 10;
        const newScore = score + pointsWon;
        setScore(newScore);
        const nextLevel = level + 1;
        setLevel(nextLevel);
        
        sounds.playMatchSuccess();
        setMessage(`Harika! Seviye ${nextLevel}'e geçiyorsunuz...`);

        if (newScore > highScore && highScore > 0) {
          confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
        }

        // Add next step to sequence
        setTimeout(() => {
          const nextPad = Math.floor(Math.random() * 4);
          const nextSeq = [...sequence, nextPad];
          setSequence(nextSeq);
          playSequence(nextSeq);
        }, 1000);
      }
    } else {
      // Wrong pad clicked
      sounds.playError();
      const remainingLives = lives - 1;
      setLives(remainingLives);

      if (remainingLives > 0) {
        setMessage(`Yanlış sıra! Kalan can: ${remainingLives}. Tekrar dinleyin.`);
        setTimeout(() => {
          playSequence(sequence);
        }, 1200);
      } else {
        // Game Over
        setGameState('gameover');
        setMessage('Oyun bitti! Hafıza sınırınızı zorladınız.');
        onGameOver({ gameId: 'sequence', score, level });
      }
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

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

          <div className="flex items-center gap-1 px-3 py-1 bg-indigo-950/80 border border-indigo-500/30 rounded-lg text-indigo-300 font-bold text-sm">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Skor: {score}</span>
          </div>
        </div>
      </div>

      {/* Game Title & Status */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2">
          <Zap className="w-3.5 h-3.5" />
          Sıralı Hafıza / Seviye {level}
        </div>
        <p className="text-sm sm:text-base text-slate-300 font-medium h-6">
          {message}
        </p>
      </div>

      {/* 2x2 Pad Arena */}
      <div className="relative p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl mb-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 w-64 h-64 sm:w-72 sm:h-72">
          {PADS.map((pad) => {
            const isActive = activePad === pad.id;
            return (
              <button
                key={pad.id}
                disabled={isPlayingSeq || gameState !== 'playing'}
                onClick={() => handlePadClick(pad.id)}
                aria-label={pad.label}
                className={`rounded-2xl border-2 transition-all duration-150 transform cursor-pointer disabled:cursor-not-allowed ${
                  isActive ? pad.activeColor : `${pad.color} shadow-lg opacity-85 hover:opacity-100 hover:scale-[1.02]`
                }`}
              />
            );
          })}
        </div>

        {/* Center circular badge */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-slate-950/90 border-2 border-slate-700 flex flex-col items-center justify-center shadow-xl">
            <span className="text-[10px] text-slate-400 uppercase font-semibold">Adım</span>
            <span className="text-base font-extrabold text-white">
              {gameState === 'playing' ? `${userStep}/${sequence.length}` : '-'}
            </span>
          </div>
        </div>
      </div>

      {/* Action Controls */}
      {gameState === 'idle' && (
        <button
          onClick={startGame}
          className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold shadow-lg shadow-indigo-600/30 hover:scale-105 transition"
        >
          <Play className="w-5 h-5 fill-white" />
          <span>Oyunu Başlat</span>
        </button>
      )}

      {gameState === 'gameover' && (
        <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in-95 duration-200">
          <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 text-center">
            <h3 className="text-lg font-bold text-rose-300 mb-1">Oyun Bitti!</h3>
            <p className="text-sm text-slate-300">
              Ulaşılan Seviye: <strong className="text-white">{level}</strong> | Toplam Puan: <strong className="text-amber-400">{score}</strong>
            </p>
          </div>
          <button
            onClick={startGame}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold shadow-lg shadow-indigo-600/30 hover:scale-105 transition"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Tekrar Dene</span>
          </button>
        </div>
      )}
    </div>
  );
}
