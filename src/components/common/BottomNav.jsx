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
    <nav className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#D6CEBE] px-4 py-2 flex items-center justify-around shadow-md">
      {/* Home / Library */}
      <button
        onClick={() => {
          sounds.playClick();
          onNavigateHome();
        }}
        className={`flex flex-col items-center gap-1 p-1 transition cursor-pointer ${
          currentScreen === 'home' ? 'text-[#B44A22] font-bold' : 'text-[#57534E] hover:text-[#1C1917]'
        }`}
      >
        <Home className="w-5 h-5 stroke-[2.2]" />
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
            ? 'text-[#B44A22] font-bold'
            : 'text-[#57534E] hover:text-[#B44A22]'
        }`}
      >
        <Feather className="w-5 h-5 stroke-[2.2]" />
        <span className="text-[10px] font-semibold font-serif">Pratik</span>
      </button>

      {/* Notebook */}
      <button
        onClick={() => {
          sounds.playClick();
          onOpenLibrary();
        }}
        className={`flex flex-col items-center gap-1 p-1 transition cursor-pointer ${
          currentScreen === 'library' ? 'text-[#B44A22] font-bold' : 'text-[#57534E] hover:text-[#B44A22]'
        }`}
      >
        <BookOpen className="w-5 h-5 stroke-[2.2]" />
        <span className="text-[10px] font-semibold font-serif">Defterim</span>
      </button>

      {/* Stats */}
      <button
        onClick={() => {
          sounds.playClick();
          onOpenStats();
        }}
        className="flex flex-col items-center gap-1 p-1 text-[#57534E] hover:text-[#B44A22] transition cursor-pointer"
      >
        <BarChart3 className="w-5 h-5 stroke-[2.2]" />
        <span className="text-[10px] font-semibold font-serif">İstatistik</span>
      </button>
    </nav>
  );
}
