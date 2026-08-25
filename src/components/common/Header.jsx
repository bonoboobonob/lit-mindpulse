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
    <header className="w-full max-w-5xl mx-auto px-3 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b border-[#D6CEBE] bg-[#FAF7F2]/90 backdrop-blur-sm sticky top-0 z-30 mb-4 sm:mb-6">
      {/* Brand / Logo */}
      <div 
        onClick={onNavigateHome}
        className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
      >
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#C85A32] flex items-center justify-center shadow-md shadow-[#C85A32]/20 group-hover:scale-105 transition-transform duration-300 shrink-0">
          <Feather className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.4]" />
        </div>
        <div>
          <h1 className="text-lg sm:text-2xl font-serif font-bold text-[#1C1917] tracking-tight leading-tight flex items-center gap-1.5">
            LibrisMind
            <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#B44A22] bg-[#C85A32]/15 px-1.5 py-0.5 rounded border border-[#C85A32]/30 hidden sm:inline-block">Atelier</span>
          </h1>
          <p className="text-[10px] sm:text-[11px] text-[#57534E] hidden sm:block font-serif font-medium italic">Edebi Hafıza & Kitap Ezberi</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
        {/* Streak Badge */}
        <div className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/40 text-[#B44A22] text-xs sm:text-sm font-bold shadow-xs shrink-0 whitespace-nowrap">
          <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#C85A32] shrink-0" />
          <span>{streak} <span className="hidden sm:inline">Günlük </span>Seri</span>
        </div>

        {/* Notebook / My Library Button (Hidden on mobile header, available in BottomNav) */}
        <button
          onClick={onOpenLibrary}
          title="Kişisel Hafıza Defterim"
          className={`hidden sm:flex p-2 rounded-xl border transition cursor-pointer ${
            currentScreen === 'library'
              ? 'bg-[#C85A32]/15 border-[#C85A32] text-[#B44A22]'
              : 'bg-white hover:bg-[#FAF6EE] border-[#D6CEBE] text-[#44403C] hover:text-[#B44A22] hover:border-[#C85A32]'
          }`}
        >
          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Tips Button */}
        <button
          onClick={onOpenTips}
          title="Hafıza Sarayı & Ezber Teknikleri"
          className="p-1.5 sm:p-2 rounded-xl bg-white hover:bg-[#FAF6EE] border border-[#D6CEBE] text-[#44403C] hover:text-[#B44A22] hover:border-[#C85A32] transition cursor-pointer"
        >
          <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Stats Button (Hidden on mobile header, available in BottomNav) */}
        <button
          onClick={onOpenStats}
          title="İstatistikler ve Başarılar"
          className="hidden sm:flex p-2 rounded-xl bg-white hover:bg-[#FAF6EE] border border-[#D6CEBE] text-[#44403C] hover:text-[#B44A22] hover:border-[#C85A32] transition cursor-pointer"
        >
          <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Sound Toggle */}
        <button
          onClick={onToggleSound}
          title={isMuted ? "Sesi Aç" : "Sesi Kapat"}
          className="p-1.5 sm:p-2 rounded-xl bg-white hover:bg-[#FAF6EE] border border-[#D6CEBE] text-[#44403C] hover:text-[#B44A22] hover:border-[#C85A32] transition cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700" />}
        </button>

        {/* Home Button if not on home */}
        {currentScreen !== 'home' && (
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-[#C85A32]/10 hover:bg-[#C85A32]/20 border border-[#C85A32]/40 text-[#B44A22] text-xs sm:text-sm font-bold transition cursor-pointer shrink-0"
          >
            <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Kütüphane</span>
          </button>
        )}
      </div>
    </header>
  );
}
