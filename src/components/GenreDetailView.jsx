import React, { useState } from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  Play, 
  Sparkles, 
  Feather, 
  Puzzle, 
  Layers,
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
  Filter,
  Film,
  PenTool,
  Crown,
  Scroll,
  Laugh,
  Hourglass,
  Scale,
  Heart,
  ChevronRight,
  Info,
  Type,
  Zap
} from 'lucide-react';
import { BOOK_GENRES, BOOK_QUOTES, DIFFICULTY_LEVELS } from '../data/bookQuotes';
import { BOOKS_DATABASE } from '../data/booksDatabase';
import { sounds } from '../utils/sound';

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

export default function GenreDetailView({ 
  genreId, 
  onBack, 
  onStartGenrePractice, 
  onStartSpecificQuote,
  onSelectBook
}) {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const genre = BOOK_GENRES.find(g => g.id === genreId) || BOOK_GENRES[1];
  const Icon = genreIcons[genre.icon] || BookOpen;

  // Find books in master books database for this genre
  const genreBooks = genre.id === 'all'
    ? BOOKS_DATABASE
    : BOOKS_DATABASE.filter(b => b.genre === genre.id);

  // Derive all quotes directly from genreBooks passages
  const dbGenreQuotes = genreBooks.flatMap(b => (b.passages || []).map(p => ({
    id: p.id,
    genre: b.genre,
    difficulty: p.difficulty,
    book: b.title,
    author: b.author,
    quote: p.quote,
    bookId: b.id,
  })));

  // Also include any standalone quotes from BOOK_QUOTES for this genre
  const seenQuotes = new Set(dbGenreQuotes.map(q => q.quote.trim().toLowerCase()));
  const extraQuotes = [];
  BOOK_QUOTES.forEach(q => {
    if (genre.id === 'all' || q.genre === genre.id) {
      const norm = q.quote ? q.quote.trim().toLowerCase() : '';
      if (norm && !seenQuotes.has(norm)) {
        seenQuotes.add(norm);
        const matchedBook = BOOKS_DATABASE.find(b => 
          b.title.toLowerCase() === q.book?.toLowerCase() || 
          (q.book && b.title.toLowerCase().includes(q.book.toLowerCase())) ||
          (q.book && q.book.toLowerCase().includes(b.title.toLowerCase()))
        );
        extraQuotes.push({
          id: q.id,
          genre: q.genre,
          difficulty: q.difficulty,
          book: q.book,
          author: q.author,
          quote: q.quote,
          bookId: matchedBook ? matchedBook.id : null,
        });
      }
    }
  });

  const allGenreQuotes = [...dbGenreQuotes, ...extraQuotes];

  const filteredQuotes = selectedDifficulty === 'all'
    ? allGenreQuotes
    : allGenreQuotes.filter(q => q.difficulty === selectedDifficulty);

  // Distinct authors and books count in this genre
  const distinctBooks = new Set([...genreBooks.map(b => b.title), ...allGenreQuotes.map(q => q.book)]).size;
  const distinctAuthors = new Set([...genreBooks.map(b => b.author), ...allGenreQuotes.map(q => q.author)]).size;

  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-2 animate-in fade-in duration-200">
      {/* Top Back Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => {
            sounds.playClick();
            onBack();
          }}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-[#1E1B18] hover:bg-[#FAF6EE] dark:hover:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] text-[#44403C] dark:text-[#EDE8DF] hover:text-[#1C1917] dark:hover:text-[#F5EFE4] text-sm font-semibold transition shadow-xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kütüphaneye Dön</span>
        </button>

        <span className="text-xs text-[#57534E] dark:text-[#A8A196] font-medium hidden sm:inline">
          {distinctBooks} Farklı Eser • {distinctAuthors} Yazar
        </span>
      </div>

      {/* Genre Showcase Banner */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] shadow-xs mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-[#C85A32]/10 dark:bg-[#E07048]/15 text-[#B44A22] dark:text-[#E07048] border border-[#C85A32]/30 dark:border-[#E07048]/40 shrink-0">
              <Icon className="w-8 h-8 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4]">
                  {genre.name}
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF6EE] dark:bg-[#282420] text-[#B44A22] dark:text-[#E07048] border border-[#D6CEBE] dark:border-[#38322B] text-xs font-bold">
                  {allGenreQuotes.length} Alıntı
                </span>
              </div>
              <p className="text-sm text-[#44403C] dark:text-[#D6CEBE] font-medium leading-relaxed max-w-xl">
                {genre.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Launch Buttons for this specific Genre */}
        <div className="mt-6 pt-5 border-t border-[#D6CEBE] dark:border-[#38322B]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B44A22] dark:text-[#E07048] block mb-3">
            Bu Kategoride Antrenman Başlat
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
            <button
              onClick={() => {
                sounds.playClick();
                onStartGenrePractice(genre.id, 'fullTyping');
              }}
              className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#FAF6EE] dark:bg-[#24201C] hover:bg-[#F2ECE1] dark:hover:bg-[#2E2822] border border-[#D6CEBE] dark:border-[#38322B] text-[#1C1917] dark:text-[#F5EFE4] hover:text-[#B44A22] dark:hover:text-[#E07048] hover:border-[#C85A32] dark:hover:border-[#E07048] font-semibold text-xs sm:text-sm transition cursor-pointer shadow-xs"
            >
              <Feather className="w-4 h-4 text-[#B44A22] dark:text-[#E07048]" />
              <span>✍️ Tam Yazma</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onStartGenrePractice(genre.id, 'clozeRecall');
              }}
              className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#FAF6EE] dark:bg-[#24201C] hover:bg-[#F2ECE1] dark:hover:bg-[#2E2822] border border-[#D6CEBE] dark:border-[#38322B] text-[#1C1917] dark:text-[#F5EFE4] hover:text-[#8C5E3C] dark:hover:text-[#D4AF37] hover:border-[#8C5E3C] dark:hover:border-[#D4AF37] font-semibold text-xs sm:text-sm transition cursor-pointer shadow-xs"
            >
              <Puzzle className="w-4 h-4 text-[#8C5E3C] dark:text-[#D4AF37]" />
              <span>🧩 Boşluk Doldur</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onStartGenrePractice(genre.id, 'wordScramble');
              }}
              className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#FAF6EE] dark:bg-[#24201C] hover:bg-[#F2ECE1] dark:hover:bg-[#2E2822] border border-[#D6CEBE] dark:border-[#38322B] text-[#1C1917] dark:text-[#F5EFE4] hover:text-[#476C46] dark:hover:text-[#62B889] hover:border-[#588157] dark:hover:border-[#62B889] font-semibold text-xs sm:text-sm transition cursor-pointer shadow-xs"
            >
              <Layers className="w-4 h-4 text-[#476C46] dark:text-[#62B889]" />
              <span>📱 Kelime Dizme</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onStartGenrePractice(genre.id, 'textDetective');
              }}
              className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#FAF6EE] dark:bg-[#24201C] hover:bg-[#F2ECE1] dark:hover:bg-[#2E2822] border border-[#D6CEBE] dark:border-[#38322B] text-[#1C1917] dark:text-[#F5EFE4] hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-500 font-semibold text-xs sm:text-sm transition cursor-pointer shadow-xs"
            >
              <Search className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>🕵️ Metin Dedektifi</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onStartGenrePractice(genre.id, 'firstLetter');
              }}
              className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#FAF6EE] dark:bg-[#24201C] hover:bg-[#F2ECE1] dark:hover:bg-[#2E2822] border border-[#D6CEBE] dark:border-[#38322B] text-[#1C1917] dark:text-[#F5EFE4] hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 font-semibold text-xs sm:text-sm transition cursor-pointer shadow-xs"
            >
              <Type className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>🔤 İlk Harf Çapası</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onStartGenrePractice(genre.id, 'speedTrio');
              }}
              className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#FAF6EE] dark:bg-[#24201C] hover:bg-[#F2ECE1] dark:hover:bg-[#2E2822] border border-[#D6CEBE] dark:border-[#38322B] text-[#1C1917] dark:text-[#F5EFE4] hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 font-semibold text-xs sm:text-sm transition cursor-pointer shadow-xs"
            >
              <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>⚡ Trio Sprint</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Master Books in this Genre */}
      {genreBooks.length > 0 && (
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-lg font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#B44A22] dark:text-[#E07048]" />
              <span>Kategorinin Başyapıtları & Eser İncelemeleri</span>
            </h3>
            <span className="text-xs text-[#57534E] dark:text-[#A8A196] font-medium hidden sm:inline">
              Detaylı özet ve kitap içi pasajlar için esere dokunun
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {genreBooks.map((book) => (
              <div
                key={book.id}
                onClick={() => {
                  sounds.playClick();
                  onSelectBook(book.id);
                }}
                className="p-5 rounded-3xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] hover:border-[#C85A32] dark:hover:border-[#E07048] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4 mb-3">
                    {/* Small Book Cover Thumbnail */}
                    <div className={`w-16 h-20 rounded-xl bg-gradient-to-br ${book.coverBg || 'from-[#8C5E3C] to-[#5C3D26]'} p-2 text-white flex flex-col justify-between shrink-0 shadow-xs border border-white/20 group-hover:scale-105 transition-transform`}>
                      <span className="text-[8px] uppercase tracking-widest text-amber-200 font-bold">Libris</span>
                      <BookOpen className="w-4 h-4 opacity-70" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4] group-hover:text-[#B44A22] dark:group-hover:text-[#E07048] transition-colors truncate">
                        {book.title}
                      </h4>
                      <p className="text-xs text-[#57534E] dark:text-[#A8A196] font-medium mb-1.5">
                        {book.author} • {book.year}
                      </p>
                      <p className="text-xs text-[#44403C] dark:text-[#D6CEBE] line-clamp-2 leading-relaxed">
                        {book.summary}
                      </p>
                    </div>
                  </div>

                  {/* Themes preview */}
                  {book.keyThemes && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {book.keyThemes.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF6EE] dark:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] text-[#57534E] dark:text-[#A8A196]">
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#D6CEBE] dark:border-[#38322B] text-xs font-bold text-[#B44A22] dark:text-[#E07048] group-hover:translate-x-1 transition-transform">
                  <span>Kitap Özeti & {book.passages?.length || 0} Pasajı İncele</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Difficulty Filter Tabs & Quotes Stream */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#1C1917] dark:text-[#F5EFE4]">
            <Filter className="w-4 h-4 text-[#B44A22] dark:text-[#E07048]" />
            <span>Kategori İçi Tüm Cümleler ({allGenreQuotes.length}):</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedDifficulty('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                selectedDifficulty === 'all'
                  ? 'bg-[#C85A32] text-white shadow-xs'
                  : 'bg-white dark:bg-[#1E1B18] border border-[#D6CEBE] dark:border-[#38322B] text-[#57534E] dark:text-[#A8A196] hover:text-[#1C1917] dark:hover:text-[#F5EFE4]'
              }`}
            >
              Tümü ({allGenreQuotes.length})
            </button>
            {DIFFICULTY_LEVELS.map(d => {
              const count = allGenreQuotes.filter(q => q.difficulty === d.id).length;
              if (count === 0) return null;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDifficulty(d.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                    selectedDifficulty === d.id
                      ? 'bg-[#C85A32] text-white shadow-xs'
                      : 'bg-white dark:bg-[#1E1B18] border border-[#D6CEBE] dark:border-[#38322B] text-[#57534E] dark:text-[#A8A196] hover:text-[#1C1917] dark:hover:text-[#F5EFE4]'
                  }`}
                >
                  {d.name.split(' ')[0]} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredQuotes.map((q) => {
            const wordCount = q.quote.trim().split(/\s+/).length;
            const diffLabels = {
              easy: { name: 'Kolay', color: 'bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-700/60' },
              medium: { name: 'Orta', color: 'bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-700/60' },
              hard: { name: 'Zor', color: 'bg-orange-50 text-orange-800 border-orange-300 dark:bg-orange-950/60 dark:text-orange-300 dark:border-orange-700/60' },
              legendary: { name: 'Efsanevi', color: 'bg-rose-50 text-rose-800 border-rose-300 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-700/60' },
            };
            const diffInfo = diffLabels[q.difficulty] || diffLabels.easy;

            return (
              <div
                key={q.id}
                className="p-5 rounded-3xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] hover:border-[#C85A32]/60 dark:hover:border-[#E07048]/60 transition-all flex flex-col justify-between shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#57534E] dark:text-[#A8A196] mb-3 pb-2 border-b border-[#D6CEBE] dark:border-[#38322B]">
                    <div className="font-serif font-bold text-[#B44A22] dark:text-[#E07048] text-sm truncate max-w-[220px]">
                      {q.book}
                    </div>
                    <span className="text-[#57534E] dark:text-[#A8A196] font-medium text-[11px]">{q.author}</span>
                  </div>

                  <p className="text-sm sm:text-base font-serif italic text-[#1C1917] dark:text-[#F5EFE4] leading-relaxed mb-4 font-quote">
                    "{q.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#D6CEBE] dark:border-[#38322B] text-xs">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${diffInfo.color}`}>
                      {diffInfo.name}
                    </span>
                    <span className="text-[11px] text-[#57534E] dark:text-[#A8A196] font-medium">
                      {wordCount} Kelime
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onStartSpecificQuote(q, 'fullTyping')}
                      title="Tam Yazma ile Ezberle"
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-[#C85A32]/10 dark:bg-[#E07048]/15 hover:bg-[#C85A32]/20 dark:hover:bg-[#E07048]/25 text-[#B44A22] dark:text-[#E07048] border border-[#C85A32]/30 dark:border-[#E07048]/40 font-bold transition cursor-pointer text-xs"
                    >
                      <Play className="w-3 h-3 fill-[#B44A22] dark:fill-[#E07048]" />
                      <span>Ezberle</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
