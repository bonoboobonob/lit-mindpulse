import React from 'react';
import { 
  Play, 
  BookOpen, 
  Sparkles, 
  ChevronRight, 
  Feather, 
  Layers, 
  Puzzle,
  Brain,
  Quote,
  Shield,
  Drama,
  Flame,
  Search,
  Mail,
  Trees,
  Wand2,
  Compass,
  Eye,
  Bookmark
} from 'lucide-react';
import { 
  OakTreeIllustration, 
  AuthorPortraitIllustration, 
  OpenBookIllustration, 
  LighthouseIllustration, 
  BookmarkRibbon 
} from '../assets/illustrations';
import { BOOK_GENRES, BOOK_QUOTES } from '../data/bookQuotes';
import { sounds } from '../utils/sound';

const PRACTICE_MODES = [
  {
    id: 'fullTyping',
    title: 'Tam Yazma & Hatırlama',
    tag: 'Aktif Geri Çağırma • Master Recall',
    desc: 'Cümleyi zihninize kazıyın, ardından tek bir harfine dahi bakmadan klavyenizle eksiksiz yazarak çalışma belleğinizi güçlendirin.',
    badge: '1. Seviye',
    icon: Feather,
    iconBg: 'bg-[#C85A32]/10 text-[#C85A32] border-[#C85A32]/30',
    tagColor: 'text-[#C85A32]',
    illustration: OakTreeIllustration,
  },
  {
    id: 'clozeRecall',
    title: 'Edebi Boşluk Doldurma',
    tag: 'Kilit Kavramlar • Cloze Test',
    desc: 'Cümlenin anahtar felsefi kelimelerini ve metaforlarını tespit edip hafızanızdan doğru yerlerine yerleştirin.',
    badge: '2. Seviye',
    icon: Puzzle,
    iconBg: 'bg-[#8C5E3C]/10 text-[#8C5E3C] border-[#8C5E3C]/30',
    tagColor: 'text-[#8C5E3C]',
    illustration: LighthouseIllustration,
  },
  {
    id: 'wordScramble',
    title: 'Dokunmatik Kelime Dizme',
    tag: 'Ritmik Sıralama • Scramble',
    desc: 'Cümleyi oluşturan sözcüklerin edebi ahengini ve ritmini kavrayarak dokunmatik kartlarla doğru sıraya dizin.',
    badge: '3. Seviye',
    icon: Layers,
    iconBg: 'bg-[#588157]/10 text-[#588157] border-[#588157]/30',
    tagColor: 'text-[#588157]',
    illustration: OpenBookIllustration,
  },
];

const genreIcons = {
  Brain,
  Quote,
  BookOpen,
  Feather,
  Shield,
  Drama,
  Flame,
  Search,
  Mail,
  Trees,
  Wand2,
  Compass,
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
      {/* Atelier Hero Banner (Woodcut & Editorial Grid) */}
      <div className="relative overflow-hidden rounded-3xl bg-white border border-[#E5DFD3] p-6 sm:p-10 mb-8 shadow-sm">
        {/* Subtle decorative background watermark */}
        <div className="absolute right-4 -bottom-6 opacity-10 pointer-events-none hidden md:block">
          <OakTreeIllustration className="w-64 h-64" />
        </div>

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/25 text-[#C85A32] text-xs font-semibold uppercase tracking-wider mb-4">
            <Feather className="w-3.5 h-3.5" />
            <span>The Atelier Edition • Edebi Hafıza Mizanpajı</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight leading-tight mb-3">
            Zihninizi Edebiyatın <br className="hidden sm:inline" />
            <span className="text-[#C85A32] italic font-serif font-normal">
              Kalıcı Sözcükleriyle
            </span> Güçlendirin
          </h2>

          <p className="text-sm sm:text-base text-[#57534E] mb-6 leading-relaxed font-sans">
            Dünya klasikleri, felsefe ve Türk edebiyatı şaheserlerinden seçilen 250+ kült cümleyi ezberleyin; çalışma belleğinizi, dil zenginliğinizi ve odaklanmanızı zirveye taşıyın.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                sounds.playClick();
                onSelectMode('fullTyping');
              }}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl btn-terracotta font-bold text-sm sm:text-base cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Ezber Antrenmanına Başla</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onOpenLibrary();
              }}
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-[#FAF6EE] hover:bg-[#F2ECE1] border border-[#E5DFD3] text-[#1C1917] text-sm font-semibold transition cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#C85A32]" />
              <span>Hafıza Defterim</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Quote of the Day (Archival Card with Bookmark) */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#C85A32] flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Günün Edebi Alıntısı</span>
          </h3>
          <span className="text-xs text-[#78716C] font-serif italic">Her gün yenilenir</span>
        </div>

        <div className="relative p-6 sm:p-7 rounded-3xl bg-white border border-[#E5DFD3] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:border-[#C85A32]/40 transition">
          {/* Top Terracotta Ribbon */}
          <div className="absolute top-0 right-6 sm:right-10 pointer-events-none">
            <BookmarkRibbon className="w-6 h-8 text-[#C85A32]" />
          </div>

          <div className="flex-1 pr-6 sm:pr-8">
            <div className="flex items-center gap-2 text-xs text-[#78716C] mb-2 font-medium">
              <span className="font-serif font-bold text-[#C85A32] text-sm">{dailyQuote.book}</span>
              <span>—</span>
              <span className="text-[#1C1917]">{dailyQuote.author}</span>
            </div>
            <p className="text-base sm:text-lg font-serif italic text-[#1C1917] leading-relaxed">
              "{dailyQuote.quote}"
            </p>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              onStartQuote(dailyQuote);
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#C85A32]/10 hover:bg-[#C85A32]/20 text-[#C85A32] border border-[#C85A32]/30 text-xs sm:text-sm font-bold transition shrink-0 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-[#C85A32]" />
            <span>Bu Cümleyi Ezberle</span>
          </button>
        </div>
      </div>

      {/* 3 Main Practice Modes (Atelier Style) */}
      <div className="mb-10">
        <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-4 flex items-center gap-2">
          <Feather className="w-5 h-5 text-[#C85A32]" />
          <span>Egzersiz ve Hatırlama Modları</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PRACTICE_MODES.map((mode) => {
            const Icon = mode.icon;
            const Illustration = mode.illustration;

            return (
              <div
                key={mode.id}
                onClick={() => {
                  sounds.playClick();
                  onSelectMode(mode.id);
                }}
                className="relative group p-6 rounded-3xl bg-white border border-[#E5DFD3] hover:border-[#C85A32]/50 transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-2xl border ${mode.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF6EE] text-[#78716C] border border-[#E5DFD3]">
                      {mode.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-[#1C1917] group-hover:text-[#C85A32] transition-colors">
                    {mode.title}
                  </h4>
                  <div className={`text-[11px] font-semibold ${mode.tagColor} mb-2`}>
                    {mode.tag}
                  </div>

                  <p className="text-xs text-[#57534E] mb-4 line-clamp-3 leading-relaxed">
                    {mode.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#E5DFD3] text-xs text-[#C85A32] font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Antrenmana Başla</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Genres Explorer Showcase (Book Spine / Archival Style) */}
      <div>
        <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#C85A32]" />
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
                className="p-4 rounded-2xl bg-white border border-[#E5DFD3] hover:border-[#C85A32]/50 hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="p-2 w-fit rounded-xl bg-[#FAF6EE] text-[#C85A32] border border-[#E5DFD3] mb-2.5 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h5 className="text-xs sm:text-sm font-serif font-bold text-[#1C1917] group-hover:text-[#C85A32] leading-snug">
                    {genre.name}
                  </h5>
                </div>
                <span className="text-[11px] text-[#78716C] mt-2 font-sans font-medium">
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
