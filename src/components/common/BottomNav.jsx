import React from 'react';
import { Home, Feather, BookOpen, BarChart3, Lightbulb } from 'lucide-react';
import { sounds } from '../../utils/sound';

export default function BottomNav({
  currentScreen,
  onNavigateHome,
  onOpenPractice,
  onOpenLibrary,
  onOpenStats,
}) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/80 px-4 py-2 flex items-center justify-around">
      {/* Home / Library */}
      <button
        onClick={() => {
          sounds.playClick();
          onNavigateHome();
        }}
        className={`flex flex-col items-center gap-1 p-1 transition ${
          currentScreen === 'home' ? 'text-amber-400' : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-medium font-serif">Kütüphane</span>
      </button>

      {/* Practice */}
      <button
        onClick={() => {
          sounds.playClick();
          onOpenPractice();
        }}
        className={`flex flex-col items-center gap-1 p-1 transition ${
          currentScreen === 'fullTyping' || currentScreen === 'clozeRecall' || currentScreen === 'wordScramble'
            ? 'text-amber-400'
            : 'text-slate-400 hover:text-amber-300'
        }`}
      >
        <Feather className="w-5 h-5" />
        <span className="text-[10px] font-medium font-serif">Pratik</span>
      </button>

      {/* Notebook */}
      <button
        onClick={() => {
          sounds.playClick();
          onOpenLibrary();
        }}
        className={`flex flex-col items-center gap-1 p-1 transition ${
          currentScreen === 'library' ? 'text-amber-400' : 'text-slate-400 hover:text-amber-300'
        }`}
      >
        <BookOpen className="w-5 h-5" />
        <span className="text-[10px] font-medium font-serif">Defterim</span>
      </button>

      {/* Stats */}
      <button
        onClick={() => {
          sounds.playClick();
          onOpenStats();
        }}
        className="flex flex-col items-center gap-1 p-1 text-slate-400 hover:text-indigo-300 transition"
      >
        <BarChart3 className="w-5 h-5" />
        <span className="text-[10px] font-medium font-serif">İstatistik</span>
      </button>
    </nav>
  );
}
