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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="p-3 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-2xl">
            <Feather className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">Edebi Gelişim & İstatistikler</h2>
            <p className="text-xs text-slate-400">Ezberlenen sözcükler ve okuma antrenmanı geçmişiniz</p>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400 mb-1">Günlük Seri</div>
            <div className="text-2xl font-bold text-amber-400 flex items-center gap-1.5 font-serif">
              <Flame className="w-5 h-5 fill-amber-400" />
              {stats.streak || 1} <span className="text-xs font-normal text-slate-400">gün</span>
            </div>
          </div>

          <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400 mb-1">Ezberlenen Kelime</div>
            <div className="text-2xl font-bold text-emerald-400 flex items-center gap-1.5 font-serif">
              <BookOpen className="w-5 h-5" />
              {stats.totalWordsMemorized || 0}
            </div>
          </div>

          <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 col-span-2 sm:col-span-1">
            <div className="text-xs text-slate-400 mb-1">Toplam Antrenman</div>
            <div className="text-2xl font-bold text-indigo-400 flex items-center gap-1.5 font-serif">
              <Target className="w-5 h-5" />
              {stats.totalSessions || 0}
            </div>
          </div>
        </div>

        {/* High Scores */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400/90 mb-3">Mod Rekorları</h3>
          <div className="space-y-2.5">
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="text-base">✍️</span>
                <span className="text-sm font-serif text-slate-200">Tam Yazma Modu (Master Recall)</span>
              </div>
              <span className="font-bold text-amber-400">{stats.highScores?.fullTyping || 0} Puan</span>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="text-base">🧩</span>
                <span className="text-sm font-serif text-slate-200">Boşluk Doldurma (Cloze Test)</span>
              </div>
              <span className="font-bold text-purple-400">{stats.highScores?.clozeRecall || 0} Puan</span>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="text-base">📱</span>
                <span className="text-sm font-serif text-slate-200">Dokunmatik Kelime Dizme (Scramble)</span>
              </div>
              <span className="font-bold text-emerald-400">{stats.highScores?.wordScramble || 0} Puan</span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400/90 mb-3">Edebi Başarı Rozetleri</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {(stats.achievements || []).map((ach) => {
              const IconComponent = iconMap[ach.icon] || Feather;
              return (
                <div
                  key={ach.id}
                  className={`p-3.5 rounded-2xl border flex items-center gap-3 transition ${
                    ach.unlocked
                      ? 'bg-amber-950/20 border-amber-500/40 text-amber-200'
                      : 'bg-slate-950/40 border-slate-800 text-slate-500 opacity-50'
                  }`}
                >
                  <div className={`p-2 rounded-xl ${ach.unlocked ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-600'}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold">{ach.title}</h4>
                    <p className="text-[11px] text-slate-400">{ach.desc}</p>
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
