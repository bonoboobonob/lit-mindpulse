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
    <nav className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#FAF7F2]/95 dark:bg-[#161412]/95 backdrop-blur-md border-t border-[#D6CEBE] dark:border-[#38322B] px-4 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] flex items-center justify-around shadow-md transition-colors duration-200">
      {/* Home / Library */}
      <button
        onClick={() => {
          sounds.playClick();
          onNavigateHome();
        }}
        className={`flex flex-col items-center gap-1 p-1 transition cursor-pointer ${
          currentScreen === 'home' ? 'text-[#B44A22] dark:text-[#E07048] font-bold' : 'text-[#57534E] dark:text-[#A8A196] hover:text-[#1C1917] dark:hover:text-[#F5EFE4]'
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
          ['fullTyping', 'clozeRecall', 'wordScramble', 'textDetective', 'firstLetter', 'speedTrio'].includes(currentScreen)
            ? 'text-[#B44A22] dark:text-[#E07048] font-bold'
            : 'text-[#57534E] dark:text-[#A8A196] hover:text-[#B44A22] dark:hover:text-[#E07048]'
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
          currentScreen === 'library' ? 'text-[#B44A22] dark:text-[#E07048] font-bold' : 'text-[#57534E] dark:text-[#A8A196] hover:text-[#B44A22] dark:hover:text-[#E07048]'
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
        className="flex flex-col items-center gap-1 p-1 text-[#57534E] dark:text-[#A8A196] hover:text-[#B44A22] dark:hover:text-[#E07048] transition cursor-pointer"
      >
        <BarChart3 className="w-5 h-5 stroke-[2.2]" />
        <span className="text-[10px] font-semibold font-serif">İstatistik</span>
      </button>
    </nav>
  );
}
