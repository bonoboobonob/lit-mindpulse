import React, { useState } from 'react';
import { 
  BookOpen, 
  Feather, 
  Puzzle, 
  Layers, 
  Play, 
  Trophy, 
  Sparkles, 
  Flame, 
  Compass, 
  Brain, 
  Scale, 
  Heart, 
  Eye, 
  Bookmark,
  ChevronRight,
  Shield,
  Drama,
  Search,
  Mail,
  Trees,
  Wand2
} from 'lucide-react';
import { BOOK_GENRES, BOOK_QUOTES } from '../data/bookQuotes';
import { sounds } from '../utils/sound';

const PRACTICE_MODES = [
  {
    id: 'fullTyping',
    title: 'Tam Yazma Modu',
    subtitle: 'Master Recall',
    tag: 'Klavyeyle Eksiksiz Yazma',
    desc: 'Cümleyi hafızana al, ekrandan kaybolunca klavyeyle orijinal metni birebir yazarak doğruluğunu test et.',
    icon: Feather,
    gradient: 'from-amber-600/20 via-orange-600/20 to-amber-950/40 hover:border-amber-500/60',
    iconColor: 'text-amber-400 bg-amber-500/20',
    badge: 'En Popüler',
  },
  {
    id: 'clozeRecall',
    title: 'Boşluk Doldurma',
    subtitle: 'Cloze Memory',
    tag: 'Kilit Kelime Hafızası',
    desc: 'Cümlenin anlamını taşıyan kilit felsefi ve edebi kavramlar gizlenir. Sadece doğru kelimeleri hatırla ve tamamla.',
    icon: Puzzle,
    gradient: 'from-purple-600/20 via-indigo-600/20 to-purple-950/40 hover:border-purple-500/60',
    iconColor: 'text-purple-400 bg-purple-500/20',
    badge: 'Eğitici',
  },
  {
    id: 'wordScramble',
    title: 'Dokunmatik Kelime Dizme',
    subtitle: 'Word Scramble',
    tag: 'Mobilde Hızlı Pratik',
    desc: 'Karışık olarak verilen kelimelere doğru sırayla dokunarak edebi cümleyi yeniden inşa et. Yazmak istemeyenler için ideal.',
    icon: Layers,
    gradient: 'from-emerald-600/20 via-teal-600/20 to-emerald-950/40 hover:border-emerald-500/60',
    iconColor: 'text-emerald-400 bg-emerald-500/20',
    badge: 'Hızlı Mod',
  },
];

const genreIcons = {
  Sparkles,
  Scale,
  BookOpen,
  Feather,
  Heart,
  Shield,
  Drama,
  Flame,
  Search,
  Mail,
  Trees,
  Wand2,
  Compass,
  Brain,
  Eye,
};

export default function HomeMenu({ 
  onSelectMode, 
  onSelectGenre, 
  onOpenLibrary, 
  stats, 
  onStartQuote 
}) {
  // Deterministic daily quote based on date
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const dailyQuote = BOOK_QUOTES[dayOfYear % BOOK_QUOTES.length] || BOOK_QUOTES[0];

  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-2">
      {/* Literary Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/30 p-6 sm:p-10 mb-8 shadow-2xl">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Feather className="w-3.5 h-3.5" />
            <span>Edebi Hafıza & Zihin Kütüphanesi</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-white tracking-tight leading-tight mb-3">
            Zihninizi Edebiyatın <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-orange-300 to-amber-500">
              Sözcükleriyle Güçlendirin
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
            Dünya klasikleri, felsefe ve Türk edebiyatı şaheserlerinden seçilen kült cümleleri ezberleyin; çalışma belleğinizi, dil zenginliğinizi ve odaklanmanızı zirveye taşıyın.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                sounds.playClick();
                onSelectMode('fullTyping');
              }}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-amber-500/20 hover:scale-105 transition cursor-pointer"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Ezber Antrenmanına Başla</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onOpenLibrary();
              }}
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm font-semibold transition cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Hafıza Defterim</span>
            </button>
          </div>
        </div>

        {/* Ambient golden background glow */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Featured Quote of the Day */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Günün Edebi Alıntısı</span>
          </h3>
          <span className="text-xs text-slate-500">Her gün yenilenir</span>
        </div>

        <div className="relative p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-amber-500/40 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
              <span className="font-serif font-bold text-amber-300">{dailyQuote.book}</span>
              <span>—</span>
              <span>{dailyQuote.author}</span>
            </div>
            <p className="text-base sm:text-lg font-serif italic text-slate-100 leading-relaxed">
              "{dailyQuote.quote}"
            </p>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              onStartQuote(dailyQuote);
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs sm:text-sm font-bold transition shrink-0 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-amber-300" />
            <span>Bu Cümleyi Ezberle</span>
          </button>
        </div>
      </div>

      {/* 3 Main Practice Modes */}
      <div className="mb-10">
        <h3 className="text-lg font-serif font-bold text-slate-200 mb-4 flex items-center gap-2">
          <Feather className="w-5 h-5 text-amber-400" />
          <span>Egzersiz ve Hatırlama Modları</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PRACTICE_MODES.map((mode) => {
            const Icon = mode.icon;

            return (
              <div
                key={mode.id}
                onClick={() => {
                  sounds.playClick();
                  onSelectMode(mode.id);
                }}
                className={`relative group p-6 rounded-3xl bg-slate-900/90 border border-slate-800 transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-xl bg-gradient-to-br ${mode.gradient}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-2xl ${mode.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {mode.badge}
                  </span>
                </div>

                <h4 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                  {mode.title}
                </h4>
                <div className="text-[11px] font-semibold text-amber-400/90 mb-2">
                  {mode.tag}
                </div>

                <p className="text-xs text-slate-400 mb-4 line-clamp-3 leading-relaxed">
                  {mode.desc}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Antrenmana Başla</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Genres Explorer Showcase */}
      <div>
        <h3 className="text-lg font-serif font-bold text-slate-200 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-400" />
          <span>Edebi Türler & Kategoriler (250+ Eser)</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {BOOK_GENRES.filter(g => g.id !== 'all').map((genre) => {
            const Icon = genreIcons[genre.icon] || BookOpen;
            const quoteCount = BOOK_QUOTES.filter(q => q.genre === genre.id).length;

            return (
              <div
                key={genre.id}
                onClick={() => {
                  sounds.playClick();
                  onSelectGenre(genre.id);
                }}
                className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all cursor-pointer group shadow"
              >
                <div className="p-2 w-fit rounded-xl bg-slate-800 text-amber-400 mb-2 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <h5 className="text-xs sm:text-sm font-serif font-bold text-slate-200 group-hover:text-amber-300">
                  {genre.name}
                </h5>
                <span className="text-[11px] text-slate-500">
                  {quoteCount} Alıntı
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
