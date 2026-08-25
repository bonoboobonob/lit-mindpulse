import React from 'react';
import { Home, Feather, BookOpen, BarChart3 } from 'lucide-react';
import { sounds } from '../../utils/sound';

export default function BottomNav({
  currentScreen,
  onNavigateHome,
  onOpenPractice,
  onOpenLibrary,
  onOpenStats,
}) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E5DFD3] px-4 py-2 flex items-center justify-around shadow-lg">
      {/* Home / Library */}
      <button
        onClick={() => {
          sounds.playClick();
          onNavigateHome();
        }}
        className={`flex flex-col items-center gap-1 p-1 transition cursor-pointer ${
          currentScreen === 'home' ? 'text-[#C85A32]' : 'text-[#78716C] hover:text-[#1C1917]'
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-semibold font-serif">Kütüphane</span>
      </button>

      {/* Practice */}
      <button
        onClick={() => {
          sounds.playClick();
          onOpenPractice();
        }}
        className={`flex flex-col items-center gap-1 p-1 transition cursor-pointer ${
          currentScreen === 'fullTyping' || currentScreen === 'clozeRecall' || currentScreen === 'wordScramble'
            ? 'text-[#C85A32]'
            : 'text-[#78716C] hover:text-[#C85A32]'
        }`}
      >
        <Feather className="w-5 h-5" />
        <span className="text-[10px] font-semibold font-serif">Pratik</span>
      </button>

      {/* Notebook */}
      <button
        onClick={() => {
          sounds.playClick();
          onOpenLibrary();
        }}
        className={`flex flex-col items-center gap-1 p-1 transition cursor-pointer ${
          currentScreen === 'library' ? 'text-[#C85A32]' : 'text-[#78716C] hover:text-[#C85A32]'
        }`}
      >
        <BookOpen className="w-5 h-5" />
        <span className="text-[10px] font-semibold font-serif">Defterim</span>
      </button>

      {/* Stats */}
      <button
        onClick={() => {
          sounds.playClick();
          onOpenStats();
        }}
        className="flex flex-col items-center gap-1 p-1 text-[#78716C] hover:text-[#C85A32] transition cursor-pointer"
      >
        <BarChart3 className="w-5 h-5" />
        <span className="text-[10px] font-semibold font-serif">İstatistik</span>
      </button>
    </nav>
  );
}
