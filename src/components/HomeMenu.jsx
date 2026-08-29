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
  Bookmark,
  Film,
  PenTool,
  Crown,
  Scroll,
  Laugh,
  Hourglass,
  Scale,
  Heart,
  Volume2
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
import AudioSpeakButton from './common/AudioSpeakButton';

const PRACTICE_MODES = [
  {
    id: 'fullTyping',
    title: 'Tam Yazma & Hatırlama',
    tag: 'Aktif Geri Çağırma • Master Recall',
    desc: 'Cümleyi zihninize kazıyın, ardından tek bir harfine dahi bakmadan klavyenizle eksiksiz yazarak çalışma belleğinizi güçlendirin.',
    icon: Feather,
    iconBg: 'bg-[#C85A32]/10 text-[#B44A22] border-[#C85A32]/30',
    tagColor: 'text-[#B44A22]',
    illustration: OakTreeIllustration,
  },
  {
    id: 'clozeRecall',
    title: 'Edebi Boşluk Doldurma',
    tag: 'Kilit Kavramlar • Cloze Test',
    desc: 'Cümlenin anahtar felsefi kelimelerini ve metaforlarını tespit edip hafızanızdan doğru yerlerine yerleştirin.',
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
    icon: Layers,
    iconBg: 'bg-[#588157]/10 text-[#476C46] border-[#588157]/30',
    tagColor: 'text-[#476C46]',
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
  Film,
  PenTool,
  Crown,
  Scroll,
  Laugh,
  Hourglass,
  Scale,
  Heart,
  Sparkles,
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
      <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#D6CEBE] dark:border-[#38322B] p-6 sm:p-10 mb-8 shadow-xs">
        {/* Subtle decorative background watermark without box */}
        <div className="absolute right-4 -bottom-6 opacity-15 dark:opacity-10 pointer-events-none hidden md:block text-[#C85A32]">
          <OakTreeIllustration className="w-64 h-64" />
        </div>

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#E07048]/20 border border-[#C85A32]/30 dark:border-[#E07048]/40 text-[#B44A22] dark:text-[#E07048] text-xs font-bold uppercase tracking-wider mb-4">
            <Feather className="w-3.5 h-3.5 stroke-[2.4]" />
            <span>The Atelier Edition • Edebi Hafıza Mizanpajı</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4] tracking-tight leading-snug mb-3">
            Zihninizi Edebiyatın <br className="hidden sm:inline" />
            <span className="text-[#B44A22] dark:text-[#E07048] italic font-serif font-normal">
              Kalıcı Sözcükleriyle
            </span> Güçlendirin
          </h2>

          <p className="text-sm sm:text-base text-[#44403C] dark:text-[#D6CEBE] mb-6 leading-relaxed font-sans font-normal">
            Dünya klasikleri, felsefe ve Türk edebiyatı şaheserlerinden seçilen 250+ kült cümleyi ezberleyin; çalışma belleğinizi, dil zenginliğinizi ve odaklanmanızı zirveye taşıyın.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                sounds.playClick();
                onSelectMode('fullTyping');
              }}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl btn-terracotta font-bold text-sm sm:text-base cursor-pointer shadow-md"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Ezber Antrenmanına Başla</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onOpenLibrary();
              }}
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-[#FAF6EE] dark:bg-[#282420] hover:bg-[#F2ECE1] dark:hover:bg-[#342F2A] border border-[#D6CEBE] dark:border-[#443D35] text-[#1C1917] dark:text-[#EDE8DF] text-sm font-semibold transition cursor-pointer shadow-xs"
            >
              <BookOpen className="w-4 h-4 text-[#B44A22] dark:text-[#E07048]" />
              <span>Hafıza Defterim</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Quote of the Day (Archival Card with Bookmark) */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#B44A22] dark:text-[#E07048] flex items-center gap-2">
            <Sparkles className="w-4 h-4 stroke-[2.2]" />
            <span>Günün Edebi Alıntısı</span>
          </h3>
          <span className="text-xs text-[#57534E] dark:text-[#A8A196] font-serif font-medium italic">Her gün yenilenir</span>
        </div>

        <div className="relative p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:border-[#C85A32]/60 dark:hover:border-[#E07048]/60 transition">
          {/* Top Terracotta Ribbon */}
          <div className="absolute top-0 right-6 sm:right-10 pointer-events-none">
            <BookmarkRibbon className="w-6 h-8 text-[#C85A32] dark:text-[#E07048]" />
          </div>

          <div className="flex-1 pr-6 sm:pr-8">
            <div className="flex items-center gap-2 text-xs text-[#57534E] dark:text-[#A8A196] mb-2 font-medium">
              <span className="font-serif font-bold text-[#B44A22] dark:text-[#E07048] text-sm">{dailyQuote.book}</span>
              <span>—</span>
              <span className="text-[#1C1917] dark:text-[#F5EFE4] font-semibold">{dailyQuote.author}</span>
            </div>
            <p className="text-base sm:text-lg font-serif italic text-[#1C1917] dark:text-[#F5EFE4] leading-relaxed font-quote">
              "{dailyQuote.quote}"
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
            <AudioSpeakButton 
              text={dailyQuote.quote}
              label="Dinle"
              activeLabel="Durdur"
              size="md"
            />
            <button
              onClick={() => {
                sounds.playClick();
                onStartQuote(dailyQuote);
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#C85A32]/10 dark:bg-[#E07048]/15 hover:bg-[#C85A32]/20 dark:hover:bg-[#E07048]/25 text-[#B44A22] dark:text-[#E07048] border border-[#C85A32]/40 dark:border-[#E07048]/40 text-xs sm:text-sm font-bold transition shrink-0 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-[#B44A22] dark:fill-[#E07048]" />
              <span>Bu Cümleyi Ezberle</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3 Main Practice Modes (Atelier Style) */}
      <div className="mb-10">
        <h3 className="text-lg font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4] mb-4 flex items-center gap-2">
          <Feather className="w-5 h-5 text-[#B44A22] dark:text-[#E07048]" />
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
                className="relative group p-6 rounded-3xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] hover:border-[#C85A32]/60 dark:hover:border-[#E07048]/60 transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-2xl border ${mode.iconBg}`}>
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4] group-hover:text-[#B44A22] dark:group-hover:text-[#E07048] transition-colors mb-1">
                    {mode.title}
                  </h4>
                  <div className={`text-[11px] font-bold ${mode.tagColor} mb-2.5`}>
                    {mode.tag}
                  </div>

                  <p className="text-xs text-[#44403C] dark:text-[#D6CEBE] mb-4 line-clamp-3 leading-relaxed font-sans">
                    {mode.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#D6CEBE] dark:border-[#38322B] text-xs text-[#B44A22] dark:text-[#E07048] font-bold group-hover:translate-x-1 transition-transform">
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
        <h3 className="text-lg font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4] mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#B44A22] dark:text-[#E07048]" />
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
                className="p-4 rounded-2xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] hover:border-[#C85A32]/60 dark:hover:border-[#E07048]/60 hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="p-2 w-fit rounded-xl bg-[#FAF6EE] dark:bg-[#282420] text-[#B44A22] dark:text-[#E07048] border border-[#D6CEBE] dark:border-[#38322B] mb-2.5 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <h5 className="text-xs sm:text-sm font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4] group-hover:text-[#B44A22] dark:group-hover:text-[#E07048] leading-snug">
                    {genre.name}
                  </h5>
                </div>
                <span className="text-[11px] text-[#57534E] dark:text-[#A8A196] mt-2 font-sans font-semibold">
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
