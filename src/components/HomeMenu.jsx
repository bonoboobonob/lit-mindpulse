import React, { useMemo } from 'react';
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
  Type,
  Zap
} from 'lucide-react';
import { 
  OakTreeIllustration, 
  AuthorPortraitIllustration, 
  OpenBookIllustration, 
  LighthouseIllustration, 
  BookmarkRibbon 
} from '../assets/illustrations';
import { BOOK_GENRES, BOOK_QUOTES } from '../data/bookQuotes';
import { BOOKS_DATABASE } from '../data/booksDatabase';
import { sounds } from '../utils/sound';

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
  {
    id: 'textDetective',
    title: 'Edebi Metin Dedektifi',
    tag: 'Sahte Kelime Avı • Intruder',
    desc: 'Orijinal metne sızan sahte veya değiştirilmiş sözcükleri tespit edin, metni yazarın hakiki kalemine kavuşturun.',
    icon: Search,
    iconBg: 'bg-amber-600/10 text-amber-700 dark:text-amber-300 border-amber-600/30',
    tagColor: 'text-amber-700 dark:text-amber-300',
    illustration: OpenBookIllustration,
  },
  {
    id: 'firstLetter',
    title: 'İlk Harf Çapası',
    tag: 'Tirat & Sahne Hafızası • Scaffolding',
    desc: 'Yalnızca ilk harf ipuçlarını takip ederek metnin tamamını zihninizden hızla geri çağırın ve klavyeyle tamamlayın.',
    icon: Type,
    iconBg: 'bg-emerald-600/10 text-emerald-700 dark:text-emerald-300 border-emerald-600/30',
    tagColor: 'text-emerald-700 dark:text-emerald-300',
    illustration: OakTreeIllustration,
  },
  {
    id: 'speedTrio',
    title: '60s Edebi Trio Sprint',
    tag: 'Hızlı Eşleştirme • Speed Match',
    desc: '60 saniyede ekrana gelen edebi pasajların hangi eser ve yazara ait olduğunu en hızlı şekilde eşleştirerek kombo yapın.',
    icon: Zap,
    iconBg: 'bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 border-indigo-600/30',
    tagColor: 'text-indigo-700 dark:text-indigo-300',
    illustration: LighthouseIllustration,
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
  Bookmark,
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
  onStartQuote,
  onSelectBook 
}) {
  // Deterministic daily quote based on date
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const dailyQuote = BOOK_QUOTES[dayOfYear % BOOK_QUOTES.length] || BOOK_QUOTES[0];

  // Accurate genre statistics (real book count and de-duplicated total quotes)
  const { genreStats, totalSystemQuotes } = useMemo(() => {
    const stats = {};
    const allSeen = new Set(BOOKS_DATABASE.flatMap(b => (b.passages || []).map(p => p.quote.trim().toLowerCase())));
    BOOK_QUOTES.forEach(q => {
      const norm = q.quote ? q.quote.trim().toLowerCase() : '';
      if (norm) allSeen.add(norm);
    });

    BOOK_GENRES.filter(g => g.id !== 'all').forEach(genre => {
      const gBooks = BOOKS_DATABASE.filter(b => b.genre === genre.id);
      const seenQuotes = new Set(gBooks.flatMap(b => (b.passages || []).map(p => p.quote.trim().toLowerCase())));
      BOOK_QUOTES.forEach(q => {
        if (q.genre === genre.id) {
          const norm = q.quote ? q.quote.trim().toLowerCase() : '';
          if (norm) seenQuotes.add(norm);
        }
      });
      stats[genre.id] = {
        bookCount: gBooks.length,
        quoteCount: seenQuotes.size,
      };
    });

    return { genreStats: stats, totalSystemQuotes: allSeen.size };
  }, []);

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
            <span>The Atelier Edition • Edebi Hafıza & Kütüphane</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4] tracking-tight leading-snug mb-3">
            Zihninizi Edebiyatın <br className="hidden sm:inline" />
            <span className="text-[#B44A22] dark:text-[#E07048] italic font-serif font-normal">
              Kalıcı Sözcükleriyle
            </span> Güçlendirin
          </h2>

          <p className="text-sm sm:text-base text-[#44403C] dark:text-[#D6CEBE] mb-6 leading-relaxed font-sans font-normal">
            Dünya klasikleri, felsefe ve Türk edebiyatı şaheserlerinden derlenen <strong className="font-semibold text-[#1C1917] dark:text-[#F5EFE4]">{BOOKS_DATABASE.length} başyapıt</strong> ve <strong className="font-semibold text-[#1C1917] dark:text-[#F5EFE4]">{totalSystemQuotes}+ kült edebi pasajı</strong> ezberleyin; çalışma belleğinizi, dil zenginliğinizi ve odaklanmanızı zirveye taşıyın.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                sounds.playClick();
                const el = document.getElementById('practice-modes');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onSelectMode('fullTyping');
                }
              }}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl btn-terracotta font-bold text-sm sm:text-base cursor-pointer shadow-md transition hover:scale-[1.02]"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Egzersiz Modlarını Keşfet</span>
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
            <div className="flex items-center gap-2 text-xs text-[#57534E] dark:text-[#A8A196] mb-2 font-medium flex-wrap">
              <button
                onClick={() => {
                  sounds.playClick();
                  const matchedBook = BOOKS_DATABASE.find(b => 
                    b.title.toLowerCase() === dailyQuote.book?.toLowerCase() ||
                    (dailyQuote.book && b.title.toLowerCase().includes(dailyQuote.book.toLowerCase())) ||
                    (dailyQuote.book && dailyQuote.book.toLowerCase().includes(b.title.toLowerCase()))
                  );
                  if (matchedBook && onSelectBook) {
                    onSelectBook(matchedBook.id);
                  }
                }}
                className="font-serif font-bold text-[#B44A22] dark:text-[#E07048] text-sm hover:underline cursor-pointer text-left"
                title="Kitabı ve pasajlarını incele"
              >
                {dailyQuote.book}
              </button>
              <span>—</span>
              <span className="text-[#1C1917] dark:text-[#F5EFE4] font-semibold">{dailyQuote.author}</span>
              
              {/* Category Badge */}
              <span className="px-2 py-0.5 rounded-full bg-[#FAF6EE] dark:bg-[#282420] text-[#8C5E3C] dark:text-[#C8A27A] border border-[#D6CEBE] dark:border-[#38322B] text-[10px] font-bold">
                {BOOK_GENRES.find(g => g.id === dailyQuote.genre)?.name || 'Dünya Edebiyatı'}
              </span>

              {/* Difficulty Badge */}
              <span className="px-2 py-0.5 rounded-full bg-[#C85A32]/10 dark:bg-[#E07048]/20 text-[#B44A22] dark:text-[#E07048] border border-[#C85A32]/30 dark:border-[#E07048]/30 text-[10px] font-bold">
                {dailyQuote.difficulty === 'easy' ? 'Kolay Seviye' : dailyQuote.difficulty === 'hard' ? 'Zor Seviye' : dailyQuote.difficulty === 'legendary' ? 'Efsanevi Seviye' : 'Orta Seviye'}
              </span>
            </div>
            <p className="text-base sm:text-lg font-serif italic text-[#1C1917] dark:text-[#F5EFE4] leading-relaxed font-quote">
              "{dailyQuote.quote}"
            </p>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              onStartQuote(dailyQuote);
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#C85A32]/10 dark:bg-[#E07048]/15 hover:bg-[#C85A32]/20 dark:hover:bg-[#E07048]/25 text-[#B44A22] dark:text-[#E07048] border border-[#C85A32]/40 dark:border-[#E07048]/40 text-xs sm:text-sm font-bold transition shrink-0 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-[#B44A22] dark:fill-[#E07048]" />
            <span>Bu Pasajı Ezberle</span>
          </button>
        </div>
      </div>

      {/* 6 Practice Modes (Atelier Style) */}
      <div id="practice-modes" className="mb-10 scroll-mt-24">
        <h3 className="text-lg font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4] mb-4 flex items-center gap-2">
          <Feather className="w-5 h-5 text-[#B44A22] dark:text-[#E07048]" />
          <span>Egzersiz ve Hatırlama Modları</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h3 className="text-lg font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#B44A22] dark:text-[#E07048]" />
            <span>Edebi Türler & Kategoriler</span>
          </h3>
          <span className="text-xs font-sans font-semibold text-[#8C5E3C] dark:text-[#C8A27A] bg-[#FAF6EE] dark:bg-[#282420] px-2.5 py-1 rounded-full border border-[#D6CEBE] dark:border-[#38322B]">
            {BOOKS_DATABASE.length} Eser • {totalSystemQuotes}+ Pasaj & Alıntı
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {BOOK_GENRES.filter(g => g.id !== 'all').map((genre) => {
            const Icon = genreIcons[genre.icon] || BookOpen;
            const stats = genreStats[genre.id] || { bookCount: 0, quoteCount: 0 };

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
                <div className="flex items-center gap-1.5 text-[11px] text-[#57534E] dark:text-[#A8A196] mt-2.5 font-sans">
                  <span className="font-semibold text-[#1C1917] dark:text-[#EDE8DF]">{stats.bookCount} Eser</span>
                  <span className="text-[#A8A29E] dark:text-[#57534E]">•</span>
                  <span>{stats.quoteCount} Alıntı</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
