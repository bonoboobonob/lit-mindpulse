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
  Share2,
  Sliders,
  Home,
  RotateCcw
} from 'lucide-react';
import { BOOKS_DATABASE } from '../data/booksDatabase';
import { BOOK_GENRES, DIFFICULTY_LEVELS } from '../data/bookQuotes';
import { BookmarkRibbon } from '../assets/illustrations';
import { sounds } from '../utils/sound';
import { speechEngine } from '../utils/speech';
import AudioSpeakButton from './common/AudioSpeakButton';

export default function BookDetailView({ 
  bookId, 
  pausedGameSession = null,
  onResumeExercise,
  onNavigateHome,
  onBack, 
  onStartBookPractice, 
  onStartSpecificQuote 
}) {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [practiceDifficulty, setPracticeDifficulty] = useState('all'); // Difficulty filter for quick practice buttons

  const book = BOOKS_DATABASE.find(b => b.id === bookId) || BOOKS_DATABASE[0];
  const genreObj = BOOK_GENRES.find(g => g.id === book.genre) || BOOK_GENRES[1];

  const passages = book.passages || [];
  const filteredPassages = selectedDifficulty === 'all'
    ? passages
    : passages.filter(p => p.difficulty === selectedDifficulty);

  const practicePassageCount = practiceDifficulty === 'all'
    ? passages.length
    : passages.filter(p => p.difficulty === practiceDifficulty).length;

  const modeName = pausedGameSession?.mode === 'fullTyping' 
    ? 'Tam Yazma' 
    : pausedGameSession?.mode === 'clozeRecall' 
    ? 'Boşluk Doldurma' 
    : 'Kelime Dizme';

  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 py-2 animate-in fade-in duration-200">
      {/* Top Header Navigation */}
      <div className="flex items-center justify-between gap-2 mb-6">
        <div className="flex items-center gap-2">
          {pausedGameSession ? (
            <button
              onClick={() => {
                speechEngine.stop();
                sounds.playClick();
                if (onResumeExercise) onResumeExercise();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl btn-terracotta text-xs sm:text-sm font-bold transition shadow-sm cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Egzersize Dön ({modeName})</span>
            </button>
          ) : (
            <button
              onClick={() => {
                speechEngine.stop();
                sounds.playClick();
                onBack();
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-[#1E1B18] hover:bg-[#FAF6EE] dark:hover:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] text-[#44403C] dark:text-[#EDE8DF] hover:text-[#1C1917] dark:hover:text-[#F5EFE4] text-sm font-semibold transition shadow-xs cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Geri Dön</span>
            </button>
          )}

          <button
            onClick={() => {
              speechEngine.stop();
              sounds.playClick();
              if (onNavigateHome) onNavigateHome();
              else onBack();
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-[#1E1B18] hover:bg-[#FAF6EE] dark:hover:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] text-[#57534E] dark:text-[#A8A196] hover:text-[#1C1917] dark:hover:text-[#F5EFE4] text-xs sm:text-sm font-semibold transition shadow-xs cursor-pointer"
            title="Ana Sayfaya Dön"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Ana Sayfa</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#C85A32]/10 dark:bg-[#E07048]/15 border border-[#C85A32]/30 dark:border-[#E07048]/40 text-[#B44A22] dark:text-[#E07048] text-xs font-bold">
            {genreObj.name}
          </span>
          <span className="text-xs text-[#57534E] dark:text-[#A8A196] font-medium hidden sm:inline">
            Yayın: {book.year}
          </span>
        </div>
      </div>

      {/* Book Hero Presentation (Kinfolk Atelier Book Card) */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] shadow-xs mb-8 overflow-hidden">
        {/* Ribbon decoration */}
        <div className="absolute top-0 right-8 sm:right-12 pointer-events-none">
          <BookmarkRibbon className="w-6 h-10 text-[#C85A32] dark:text-[#E07048]" />
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
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4] mb-1">
                {book.title}
              </h2>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E] dark:text-[#A8A196]">
                <span className="font-serif font-bold text-[#B44A22] dark:text-[#E07048] text-sm">{book.author}</span>
                <span>•</span>
                <span>{book.authorBirthDeath}</span>
                <span>•</span>
                <span>{book.year} Basımı</span>
              </div>
            </div>

            {/* Author Bio Snippet */}
            <div className="p-3.5 rounded-2xl bg-[#FAF6EE] dark:bg-[#24201C] border border-[#D6CEBE] dark:border-[#38322B] text-xs text-[#44403C] dark:text-[#D6CEBE] leading-relaxed">
              <strong className="text-[#1C1917] dark:text-[#F5EFE4] block mb-0.5">Yazar Hakkında:</strong>
              {book.authorBio}
            </div>

            {/* Synopsis */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#B44A22] dark:text-[#E07048] mb-1.5">
                Eser Özeti & Edebi Anlamı
              </h4>
              <p className="text-sm text-[#1C1917] dark:text-[#F5EFE4] leading-relaxed font-serif">
                {book.summary}
              </p>
            </div>

            {/* Key Themes */}
            {book.keyThemes && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#57534E] dark:text-[#A8A196] mb-2">
                  Öne Çıkan Temalar & Kavramlar
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {book.keyThemes.map((theme, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-xl bg-white dark:bg-[#282420] border border-[#D6CEBE] dark:border-[#38322B] text-[#44403C] dark:text-[#D6CEBE] text-xs font-semibold shadow-xs"
                    >
                      #{theme}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Mode Launchers for THIS Book with Difficulty Selection */}
        <div className="mt-8 pt-6 border-t border-[#D6CEBE] dark:border-[#38322B]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B44A22] dark:text-[#E07048] block">
                Bu Eserden Hafıza Egzersizi Başlat
              </span>
              <span className="text-xs text-[#57534E] dark:text-[#A8A196]">
                Seçilen filtredeki {practicePassageCount} pasaj tekrarsız ve adil olarak sırayla gelir.
              </span>
            </div>

            {/* Practice Difficulty Selector */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 bg-[#FAF6EE] dark:bg-[#24201C] p-1.5 rounded-2xl border border-[#D6CEBE] dark:border-[#38322B]">
              {[
                { id: 'all', label: '🎲 Karma' },
                { id: 'easy', label: '🟢 Kolay' },
                { id: 'medium', label: '🟡 Orta' },
                { id: 'hard', label: '🟠 Zor' },
                { id: 'legendary', label: '🔴 Efsanevi' },
              ].map((lvl) => {
                const count = lvl.id === 'all' ? passages.length : passages.filter(p => p.difficulty === lvl.id).length;
                if (count === 0 && lvl.id !== 'all') return null;
                const isSelected = practiceDifficulty === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    onClick={() => {
                      sounds.playClick();
                      setPracticeDifficulty(lvl.id);
                    }}
                    className={`px-2.5 py-1 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? 'bg-[#C85A32] text-white shadow-xs'
                        : 'text-[#57534E] dark:text-[#A8A196] hover:text-[#1C1917] dark:hover:text-[#F5EFE4] hover:bg-white/60 dark:hover:bg-white/10'
                    }`}
                  >
                    {lvl.label} <span className="opacity-80 text-[10px]">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => {
                sounds.playClick();
                onStartBookPractice(book.id, 'fullTyping', practiceDifficulty);
              }}
              className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#FAF6EE] dark:bg-[#24201C] hover:bg-[#F2ECE1] dark:hover:bg-[#2E2822] border border-[#D6CEBE] dark:border-[#38322B] text-[#1C1917] dark:text-[#F5EFE4] hover:text-[#B44A22] dark:hover:text-[#E07048] hover:border-[#C85A32] dark:hover:border-[#E07048] font-bold text-sm transition cursor-pointer shadow-xs"
            >
              <Feather className="w-4 h-4 text-[#B44A22] dark:text-[#E07048]" />
              <span>✍️ Tam Yazma ({practiceDifficulty === 'all' ? 'Tümü' : practiceDifficulty})</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onStartBookPractice(book.id, 'clozeRecall', practiceDifficulty);
              }}
              className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#FAF6EE] dark:bg-[#24201C] hover:bg-[#F2ECE1] dark:hover:bg-[#2E2822] border border-[#D6CEBE] dark:border-[#38322B] text-[#1C1917] dark:text-[#F5EFE4] hover:text-[#8C5E3C] dark:hover:text-[#D4AF37] hover:border-[#8C5E3C] dark:hover:border-[#D4AF37] font-bold text-sm transition cursor-pointer shadow-xs"
            >
              <Puzzle className="w-4 h-4 text-[#8C5E3C] dark:text-[#D4AF37]" />
              <span>🧩 Boşluk Doldurma ({practiceDifficulty === 'all' ? 'Tümü' : practiceDifficulty})</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                onStartBookPractice(book.id, 'wordScramble', practiceDifficulty);
              }}
              className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#FAF6EE] dark:bg-[#24201C] hover:bg-[#F2ECE1] dark:hover:bg-[#2E2822] border border-[#D6CEBE] dark:border-[#38322B] text-[#1C1917] dark:text-[#F5EFE4] hover:text-[#476C46] dark:hover:text-[#62B889] hover:border-[#588157] dark:hover:border-[#62B889] font-bold text-sm transition cursor-pointer shadow-xs"
            >
              <Layers className="w-4 h-4 text-[#476C46] dark:text-[#62B889]" />
              <span>📱 Kelime Dizme ({practiceDifficulty === 'all' ? 'Tümü' : practiceDifficulty})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Book's Passages List */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="text-lg font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#B44A22] dark:text-[#E07048]" />
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
                      : 'bg-white dark:bg-[#1E1B18] border border-[#D6CEBE] dark:border-[#38322B] text-[#57534E] dark:text-[#A8A196] hover:text-[#1C1917] dark:hover:text-[#F5EFE4]'
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
              easy: { name: 'Kolay', color: 'bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-700/60' },
              medium: { name: 'Orta', color: 'bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-700/60' },
              hard: { name: 'Zor', color: 'bg-orange-50 text-orange-800 border-orange-300 dark:bg-orange-950/60 dark:text-orange-300 dark:border-orange-700/60' },
              legendary: { name: 'Efsanevi', color: 'bg-rose-50 text-rose-800 border-rose-300 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-700/60' },
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
                className="p-5 rounded-3xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] hover:border-[#C85A32]/60 dark:hover:border-[#E07048]/60 transition-all flex flex-col justify-between shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#57534E] dark:text-[#A8A196] mb-3 pb-2 border-b border-[#D6CEBE] dark:border-[#38322B]">
                    <span className="font-serif font-bold text-[#B44A22] dark:text-[#E07048] text-xs">
                      Pasaj #{index + 1}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${diffInfo.color}`}>
                      {diffInfo.name} ({wordCount} Kelime)
                    </span>
                  </div>

                  <p className="text-sm sm:text-base font-serif italic text-[#1C1917] dark:text-[#F5EFE4] leading-relaxed mb-4 font-quote">
                    "{p.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#D6CEBE] dark:border-[#38322B]">
                  <AudioSpeakButton 
                    text={p.quote}
                    label="Dinle"
                    activeLabel="Durdur"
                    size="xs"
                  />
                  <button
                    onClick={() => {
                      speechEngine.stop();
                      onStartSpecificQuote(quoteObj, 'fullTyping');
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#C85A32]/10 dark:bg-[#E07048]/15 hover:bg-[#C85A32]/20 dark:hover:bg-[#E07048]/25 text-[#B44A22] dark:text-[#E07048] border border-[#C85A32]/40 dark:border-[#E07048]/40 font-bold transition cursor-pointer text-xs"
                  >
                    <Play className="w-3.5 h-3.5 fill-[#B44A22] dark:fill-[#E07048]" />
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
