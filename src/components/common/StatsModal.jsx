import React from 'react';
import { X, Trophy, Flame, Feather, Award, Target, BookOpen, Puzzle, Sparkles } from 'lucide-react';

const iconMap = {
  Award,
  Flame,
  Feather,
  BookOpen,
  Sparkles,
  Puzzle,
};

export default function StatsModal({ isOpen, onClose, stats }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#57534E] dark:text-[#A8A196] hover:text-[#1C1917] dark:hover:text-[#F5EFE4] rounded-xl hover:bg-[#FAF6EE] dark:hover:bg-[#282420] transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="p-3 bg-[#C85A32]/10 dark:bg-[#E07048]/15 text-[#B44A22] dark:text-[#E07048] border border-[#C85A32]/30 dark:border-[#E07048]/40 rounded-2xl">
            <Feather className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4]">Edebi Gelişim & İstatistikler</h2>
            <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A8A196] font-medium">Ezberlenen sözcükler ve okuma antrenmanı geçmişiniz</p>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-4 bg-[#FAF6EE] dark:bg-[#24201C] rounded-2xl border border-[#D6CEBE] dark:border-[#38322B]">
            <div className="text-xs text-[#57534E] dark:text-[#A8A196] font-semibold mb-1">Günlük Seri</div>
            <div className="text-2xl font-bold text-[#B44A22] dark:text-[#E07048] flex items-center gap-1.5 font-serif">
              <Flame className="w-5 h-5 fill-[#C85A32] dark:fill-[#E07048]" />
              {stats.streak || 1} <span className="text-xs font-semibold text-[#57534E] dark:text-[#A8A196]">gün</span>
            </div>
          </div>

          <div className="p-4 bg-[#FAF6EE] dark:bg-[#24201C] rounded-2xl border border-[#D6CEBE] dark:border-[#38322B]">
            <div className="text-xs text-[#57534E] dark:text-[#A8A196] font-semibold mb-1">Ezberlenen Kelime</div>
            <div className="text-2xl font-bold text-[#476C46] dark:text-[#62B889] flex items-center gap-1.5 font-serif">
              <BookOpen className="w-5 h-5" />
              {stats.totalWordsMemorized || 0}
            </div>
          </div>

          <div className="p-4 bg-[#FAF6EE] dark:bg-[#24201C] rounded-2xl border border-[#D6CEBE] dark:border-[#38322B] col-span-2 sm:col-span-1">
            <div className="text-xs text-[#57534E] dark:text-[#A8A196] font-semibold mb-1">Toplam Antrenman</div>
            <div className="text-2xl font-bold text-[#8C5E3C] dark:text-[#D4AF37] flex items-center gap-1.5 font-serif">
              <Target className="w-5 h-5" />
              {stats.totalSessions || 0}
            </div>
          </div>
        </div>

        {/* High Scores */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#B44A22] dark:text-[#E07048] mb-3">Mod Rekorları</h3>
          <div className="space-y-2.5">
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF6EE] dark:bg-[#24201C] border border-[#D6CEBE] dark:border-[#38322B]">
              <div className="flex items-center gap-2.5">
                <span className="text-base">✍️</span>
                <span className="text-sm font-serif text-[#1C1917] dark:text-[#F5EFE4] font-bold">Tam Yazma Modu (Master Recall)</span>
              </div>
              <span className="font-bold text-[#B44A22] dark:text-[#E07048]">{stats.highScores?.fullTyping || 0} Puan</span>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF6EE] dark:bg-[#24201C] border border-[#D6CEBE] dark:border-[#38322B]">
              <div className="flex items-center gap-2.5">
                <span className="text-base">🧩</span>
                <span className="text-sm font-serif text-[#1C1917] dark:text-[#F5EFE4] font-bold">Boşluk Doldurma (Cloze Test)</span>
              </div>
              <span className="font-bold text-[#8C5E3C] dark:text-[#D4AF37]">{stats.highScores?.clozeRecall || 0} Puan</span>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF6EE] dark:bg-[#24201C] border border-[#D6CEBE] dark:border-[#38322B]">
              <div className="flex items-center gap-2.5">
                <span className="text-base">📱</span>
                <span className="text-sm font-serif text-[#1C1917] dark:text-[#F5EFE4] font-bold">Dokunmatik Kelime Dizme (Scramble)</span>
              </div>
              <span className="font-bold text-[#476C46] dark:text-[#62B889]">{stats.highScores?.wordScramble || 0} Puan</span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#B44A22] dark:text-[#E07048] mb-3">Edebi Başarı Rozetleri</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {(stats.achievements || []).map((ach) => {
              const IconComponent = iconMap[ach.icon] || Feather;
              return (
                <div
                  key={ach.id}
                  className={`p-3.5 rounded-2xl border flex items-center gap-3 transition ${
                    ach.unlocked
                      ? 'bg-[#C85A32]/10 dark:bg-[#E07048]/15 border-[#C85A32]/40 dark:border-[#E07048]/40 text-[#1C1917] dark:text-[#F5EFE4]'
                      : 'bg-[#FAF6EE]/70 dark:bg-[#24201C]/70 border-[#D6CEBE] dark:border-[#38322B] text-[#78716C] dark:text-[#A8A196] opacity-75'
                  }`}
                >
                  <div className={`p-2 rounded-xl ${ach.unlocked ? 'bg-white dark:bg-[#1C1917] text-[#B44A22] dark:text-[#E07048] border border-[#C85A32]/30 dark:border-[#E07048]/40 shadow-xs' : 'bg-[#FAF6EE] dark:bg-[#24201C] text-[#78716C] dark:text-[#A8A196]'}`}>
                    <IconComponent className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4]">{ach.title}</h4>
                    <p className="text-[11px] text-[#57534E] dark:text-[#A8A196] font-medium leading-snug">{ach.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
