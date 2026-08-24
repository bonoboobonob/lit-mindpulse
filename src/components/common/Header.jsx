import React from 'react';
import { Volume2, VolumeX, Flame, BarChart3, Home, Lightbulb, BookOpen, Feather } from 'lucide-react';
import { sounds } from '../../utils/sound';

export default function Header({ 
  currentScreen, 
  onNavigateHome, 
  onOpenStats, 
  onOpenTips,
  onOpenLibrary,
  streak = 1,
  isMuted,
  onToggleSound 
}) {
  return (
    <header className="w-full max-w-5xl mx-auto px-3 sm:px-4 py-4 flex items-center justify-between border-b border-slate-800/80 mb-6">
      {/* Brand / Logo */}
      <div 
        onClick={onNavigateHome}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
          <Feather className="w-5 h-5 text-slate-950 stroke-[2.5]" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-serif font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-orange-300 to-amber-500">
            LibrisMind
          </h1>
          <p className="text-[11px] text-slate-400 hidden sm:block font-serif italic">Edebi Hafıza & Kitap Ezberi</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* Streak */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold shadow-inner">
          <Flame className="w-4 h-4 fill-amber-500 animate-pulse" />
          <span>{streak} Gün Seri</span>
        </div>

        {/* Notebook / My Library Button */}
        <button
          onClick={onOpenLibrary}
          title="Kişisel Hafıza Defterim"
          className={`p-2 rounded-xl border transition ${
            currentScreen === 'library'
              ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
              : 'bg-slate-900/80 hover:bg-slate-800 border-slate-800 text-slate-400 hover:text-amber-300'
          }`}
        >
          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Tips Button */}
        <button
          onClick={onOpenTips}
          title="Hafıza Sarayı & Ezber Teknikleri"
          className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-amber-300 transition"
        >
          <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Stats Button */}
        <button
          onClick={onOpenStats}
          title="İstatistikler ve Başarılar"
          className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-indigo-400 transition"
        >
          <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Sound Toggle */}
        <button
          onClick={onToggleSound}
          title={isMuted ? "Sesi Aç" : "Sesi Kapat"}
          className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-purple-400 transition"
        >
          {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />}
        </button>

        {/* Home Button if not on home */}
        {currentScreen !== 'home' && (
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold transition cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Kütüphane</span>
          </button>
        )}
      </div>
    </header>
  );
}
