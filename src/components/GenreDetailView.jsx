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
  Heart
} from 'lucide-react';
import { BOOK_GENRES, BOOK_QUOTES, DIFFICULTY_LEVELS } from '../data/bookQuotes';
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
  onStartSpecificQuote 
}) {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const genre = BOOK_GENRES.find(g => g.id === genreId) || BOOK_GENRES[1];
  const Icon = genreIcons[genre.icon] || BookOpen;

  // Filter quotes belonging to this genre
  const allGenreQuotes = genre.id === 'all' 
    ? BOOK_QUOTES 
    : BOOK_QUOTES.filter(q => q.genre === genre.id);

  const filteredQuotes = selectedDifficulty === 'all'
    ? allGenreQuotes
    : allGenreQuotes.filter(q => q.difficulty === selectedDifficulty);

  // Distinct authors and books count in this genre
  const distinctBooks = new Set(allGenreQuotes.map(q => q.book)).size;
  const distinctAuthors = new Set(allGenreQuotes.map(q => q.author)).size;

  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-2 animate-in fade-in duration-200">
      {/* Top Back Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => {
            sounds.playClick();
            onBack();
          }}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#FAF6EE] border border-[#D6CEBE] text-[#44403C] hover:text-[#1C1917] text-sm font-semibold transition shadow-xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kütüphaneye Dön</span>
        </button>

        <span className="text-xs text-[#57534E] font-medium hidden sm:inline">
          {distinctBooks} Farklı Eser • {distinctAuthors} Yazar
        </span>
      </div>

      {/* Genre Showcase Banner */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-[#D6CEBE] shadow-xs mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-[#C85A32]/10 text-[#B44A22] border border-[#C85A32]/30 shrink-0">
              <Icon className="w-8 h-8 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917]">
                  {genre.name}
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF6EE] text-[#B44A22] border border-[#D6CEBE] text-xs font-bold">
                  {allGenreQuotes.length} Alıntı
                </span>
              </div>
              <p className="text-sm text-[#44403C] font-medium leading-relaxed max-w-xl">
                {genre.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Launch Buttons for this specific Genre */}
        <div className="mt-6 pt-5 border-t border-[#D6CEBE]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B44A22] block mb-3">
            Bu Kategoride Antrenman Başlat
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => {
                sounds.playClick();
                onStartGenrePractice(genre.id, 'fullTyping');
              }}
              className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#FAF6EE] hover:bg-[#F2ECE1] border border-[#D6CEBE] text-[#1C1917] hover:text-[#B44A22] hover:border-[#C85A32] font-semibold text-sm transition cursor-pointer shadow-xs"
            >
              <Feather className="w-4 h-4 text-[#B44A22]" />
              <span>✍️ Tam Yazma Modu</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onStartGenrePractice(genre.id, 'clozeRecall');
              }}
              className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#FAF6EE] hover:bg-[#F2ECE1] border border-[#D6CEBE] text-[#1C1917] hover:text-[#8C5E3C] hover:border-[#8C5E3C] font-semibold text-sm transition cursor-pointer shadow-xs"
            >
              <Puzzle className="w-4 h-4 text-[#8C5E3C]" />
              <span>🧩 Boşluk Doldurma</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onStartGenrePractice(genre.id, 'wordScramble');
              }}
              className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#FAF6EE] hover:bg-[#F2ECE1] border border-[#D6CEBE] text-[#1C1917] hover:text-[#476C46] hover:border-[#588157] font-semibold text-sm transition cursor-pointer shadow-xs"
            >
              <Layers className="w-4 h-4 text-[#476C46]" />
              <span>📱 Kelime Dizme</span>
            </button>
          </div>
        </div>
      </div>

      {/* Difficulty Filter Tabs */}
      <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#1C1917]">
          <Filter className="w-4 h-4 text-[#B44A22]" />
          <span>Kategori İçi Eserler & Cümleler:</span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <button
            onClick={() => setSelectedDifficulty('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
              selectedDifficulty === 'all'
                ? 'bg-[#C85A32] text-white shadow-xs'
                : 'bg-white border border-[#D6CEBE] text-[#57534E] hover:text-[#1C1917]'
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
                    : 'bg-white border border-[#D6CEBE] text-[#57534E] hover:text-[#1C1917]'
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
            easy: { name: 'Kolay', color: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
            medium: { name: 'Orta', color: 'bg-amber-50 text-amber-800 border-amber-300' },
            hard: { name: 'Zor', color: 'bg-orange-50 text-orange-800 border-orange-300' },
            legendary: { name: 'Efsanevi', color: 'bg-rose-50 text-rose-800 border-rose-300' },
          };
          const diffInfo = diffLabels[q.difficulty] || diffLabels.easy;

          return (
            <div
              key={q.id}
              className="p-5 rounded-3xl bg-white border border-[#D6CEBE] hover:border-[#C85A32]/60 transition-all flex flex-col justify-between shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#57534E] mb-3 pb-2 border-b border-[#D6CEBE]">
                  <div className="font-serif font-bold text-[#B44A22] text-sm truncate max-w-[220px]">
                    {q.book}
                  </div>
                  <span className="text-[#57534E] font-medium text-[11px]">{q.author}</span>
                </div>

                <p className="text-sm sm:text-base font-serif italic text-[#1C1917] leading-relaxed mb-4 font-quote">
                  "{q.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#D6CEBE] text-xs">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${diffInfo.color}`}>
                    {diffInfo.name}
                  </span>
                  <span className="text-[11px] text-[#57534E] font-medium">
                    {wordCount} Kelime
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onStartSpecificQuote(q, 'fullTyping')}
                    title="Tam Yazma ile Ezberle"
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-[#C85A32]/10 hover:bg-[#C85A32]/20 text-[#B44A22] border border-[#C85A32]/30 font-bold transition cursor-pointer text-xs"
                  >
                    <Play className="w-3 h-3 fill-[#B44A22]" />
                    <span>Ezberle</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
