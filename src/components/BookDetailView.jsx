import React, { useState } from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  Play, 
  Feather, 
  Puzzle, 
  Layers, 
  Sparkles, 
  Calendar, 
  User, 
  Tag, 
  Award, 
  Bookmark,
  Share2
} from 'lucide-react';
import { BOOKS_DATABASE } from '../data/booksDatabase';
import { BOOK_GENRES } from '../data/bookQuotes';
import { BookmarkRibbon } from '../assets/illustrations';
import { sounds } from '../utils/sound';

export default function BookDetailView({ 
  bookId, 
  onBack, 
  onStartBookPractice, 
  onStartSpecificQuote 
}) {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const book = BOOKS_DATABASE.find(b => b.id === bookId) || BOOKS_DATABASE[0];
  const genreObj = BOOK_GENRES.find(g => g.id === book.genre) || BOOK_GENRES[1];

  const passages = book.passages || [];
  const filteredPassages = selectedDifficulty === 'all'
    ? passages
    : passages.filter(p => p.difficulty === selectedDifficulty);

  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-2 animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => {
            sounds.playClick();
            onBack();
          }}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#FAF6EE] border border-[#D6CEBE] text-[#44403C] hover:text-[#1C1917] text-sm font-semibold transition shadow-xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Geri Dön</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/30 text-[#B44A22] text-xs font-bold">
            {genreObj.name}
          </span>
          <span className="text-xs text-[#57534E] font-medium hidden sm:inline">
            Yayın: {book.year}
          </span>
        </div>
      </div>

      {/* Book Hero Presentation (Kinfolk Atelier Book Card) */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-[#D6CEBE] shadow-xs mb-8 overflow-hidden">
        {/* Ribbon decoration */}
        <div className="absolute top-0 right-8 sm:right-12 pointer-events-none">
          <BookmarkRibbon className="w-6 h-10 text-[#C85A32]" />
        </div>

        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
          {/* Stylized Book Spine/Cover Art */}
          <div className={`w-full md:w-56 h-72 rounded-2xl bg-gradient-to-br ${book.coverBg || 'from-[#8C5E3C] to-[#5C3D26]'} p-5 text-white flex flex-col justify-between shadow-lg shrink-0 relative overflow-hidden border-2 border-white/20`}>
            {/* Texture */}
            <div className="absolute inset-0 bg-black/15 pointer-events-none" />
            <div className="absolute -right-8 -bottom-8 opacity-20 pointer-events-none">
              <BookOpen className="w-36 h-36" />
            </div>

            <div className="relative z-10">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-200 block mb-1">
                LibrisMind Corpus
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold leading-snug">
                {book.title}
              </h3>
              {book.originalTitle && (
                <span className="text-[10px] text-white/70 italic block mt-0.5 font-serif">
                  {book.originalTitle}
                </span>
              )}
            </div>

            <div className="relative z-10 pt-4 border-t border-white/20">
              <span className="text-xs font-serif font-medium block text-white/90">
                {book.author}
              </span>
              <span className="text-[10px] text-white/60 block">
                {book.year}
              </span>
            </div>
          </div>

          {/* Book Metadata & Synopsis */}
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] mb-1">
                {book.title}
              </h2>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E]">
                <span className="font-serif font-bold text-[#B44A22] text-sm">{book.author}</span>
                <span>•</span>
                <span>{book.authorBirthDeath}</span>
                <span>•</span>
                <span>{book.year} Basımı</span>
              </div>
            </div>

            {/* Author Bio Snippet */}
            <div className="p-3.5 rounded-2xl bg-[#FAF6EE] border border-[#D6CEBE] text-xs text-[#44403C] leading-relaxed">
              <strong className="text-[#1C1917] block mb-0.5">Yazar Hakkında:</strong>
              {book.authorBio}
            </div>

            {/* Synopsis */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#B44A22] mb-1.5">
                Eser Özeti & Edebi Anlamı
              </h4>
              <p className="text-sm text-[#1C1917] leading-relaxed font-serif">
                {book.summary}
              </p>
            </div>

            {/* Key Themes */}
            {book.keyThemes && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#57534E] mb-2">
                  Öne Çıkan Temalar & Kavramlar
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {book.keyThemes.map((theme, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-xl bg-white border border-[#D6CEBE] text-[#44403C] text-xs font-semibold shadow-xs"
                    >
                      #{theme}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Mode Launchers for THIS Book */}
        <div className="mt-8 pt-6 border-t border-[#D6CEBE]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B44A22]">
              Bu Eserden Hafıza Egzersizi Başlat ({passages.length} Pasaj)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => {
                sounds.playClick();
                onStartBookPractice(book.id, 'fullTyping');
              }}
              className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#FAF6EE] hover:bg-[#F2ECE1] border border-[#D6CEBE] text-[#1C1917] hover:text-[#B44A22] hover:border-[#C85A32] font-bold text-sm transition cursor-pointer shadow-xs"
            >
              <Feather className="w-4 h-4 text-[#B44A22]" />
              <span>✍️ Tam Yazma Modu</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onStartBookPractice(book.id, 'clozeRecall');
              }}
              className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#FAF6EE] hover:bg-[#F2ECE1] border border-[#D6CEBE] text-[#1C1917] hover:text-[#8C5E3C] hover:border-[#8C5E3C] font-bold text-sm transition cursor-pointer shadow-xs"
            >
              <Puzzle className="w-4 h-4 text-[#8C5E3C]" />
              <span>🧩 Boşluk Doldurma</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onStartBookPractice(book.id, 'wordScramble');
              }}
              className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#FAF6EE] hover:bg-[#F2ECE1] border border-[#D6CEBE] text-[#1C1917] hover:text-[#476C46] hover:border-[#588157] font-bold text-sm transition cursor-pointer shadow-xs"
            >
              <Layers className="w-4 h-4 text-[#476C46]" />
              <span>📱 Kelime Dizme</span>
            </button>
          </div>
        </div>
      </div>

      {/* Book's Passages List */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-lg font-serif font-bold text-[#1C1917] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#B44A22]" />
            <span>Kitabın Seçkin Pasajları ({passages.length})</span>
          </h3>

          <div className="flex items-center gap-1">
            {['all', 'easy', 'medium', 'hard', 'legendary'].map((lvl) => {
              const count = lvl === 'all' ? passages.length : passages.filter(p => p.difficulty === lvl).length;
              if (count === 0 && lvl !== 'all') return null;
              const labels = { all: 'Tümü', easy: 'Kolay', medium: 'Orta', hard: 'Zor', legendary: 'Efsanevi' };
              return (
                <button
                  key={lvl}
                  onClick={() => setSelectedDifficulty(lvl)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition cursor-pointer ${
                    selectedDifficulty === lvl
                      ? 'bg-[#C85A32] text-white shadow-xs'
                      : 'bg-white border border-[#D6CEBE] text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {labels[lvl]} ({count})
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPassages.map((p, index) => {
            const wordCount = p.quote.trim().split(/\s+/).length;
            const diffLabels = {
              easy: { name: 'Kolay', color: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
              medium: { name: 'Orta', color: 'bg-amber-50 text-amber-800 border-amber-300' },
              hard: { name: 'Zor', color: 'bg-orange-50 text-orange-800 border-orange-300' },
              legendary: { name: 'Efsanevi', color: 'bg-rose-50 text-rose-800 border-rose-300' },
            };
            const diffInfo = diffLabels[p.difficulty] || diffLabels.easy;

            // Form complete quote object for starting game
            const quoteObj = {
              id: p.id,
              genre: book.genre,
              difficulty: p.difficulty,
              book: book.title,
              author: book.author,
              quote: p.quote,
              bookId: book.id,
            };

            return (
              <div
                key={p.id || index}
                className="p-5 rounded-3xl bg-white border border-[#D6CEBE] hover:border-[#C85A32]/60 transition-all flex flex-col justify-between shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#57534E] mb-3 pb-2 border-b border-[#D6CEBE]">
                    <span className="font-serif font-bold text-[#B44A22] text-xs">
                      Pasaj #{index + 1}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${diffInfo.color}`}>
                      {diffInfo.name} ({wordCount} Kelime)
                    </span>
                  </div>

                  <p className="text-sm sm:text-base font-serif italic text-[#1C1917] leading-relaxed mb-4 font-quote">
                    "{p.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#D6CEBE]">
                  <button
                    onClick={() => onStartSpecificQuote(quoteObj, 'fullTyping')}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#C85A32]/10 hover:bg-[#C85A32]/20 text-[#B44A22] border border-[#C85A32]/40 font-bold transition cursor-pointer text-xs"
                  >
                    <Play className="w-3.5 h-3.5 fill-[#B44A22]" />
                    <span>Bu Cümleyi Ezberle</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
