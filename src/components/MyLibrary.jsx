import React, { useState } from 'react';
import { BookOpen, PlusCircle, Trash2, Play, Bookmark, Sparkles, Feather, ArrowLeft } from 'lucide-react';
import { sounds } from '../utils/sound';

export default function MyLibrary({ 
  customQuotes = [], 
  onAddCustomQuote, 
  onDeleteCustomQuote, 
  onStartPractice,
  onBack 
}) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [quoteText, setQuoteText] = useState('');

  const handleSave = () => {
    if (!quoteText.trim()) return;
    sounds.playClick();

    const newQuote = {
      id: 'custom_' + Date.now(),
      genre: 'custom',
      book: bookTitle.trim() || 'Kişisel Not / Kitap',
      author: author.trim() || 'Anonim',
      quote: quoteText.trim(),
      difficulty: quoteText.trim().split(/\s+/).length <= 8 ? 'easy' : quoteText.trim().split(/\s+/).length <= 16 ? 'medium' : 'hard',
      dateAdded: new Date().toLocaleDateString('tr-TR'),
    };

    onAddCustomQuote(newQuote);
    setBookTitle('');
    setAuthor('');
    setQuoteText('');
    setShowAddModal(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-2 animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 text-sm transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </button>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition cursor-pointer"
        >
          <PlusCircle className="w-4 h-4 fill-slate-950" />
          <span>Yeni Alıntı Ekle</span>
        </button>
      </div>

      {/* Hero */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-indigo-950/30 border border-amber-500/20 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
            <Feather className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">Kişisel Hafıza Defterim</h2>
            <p className="text-xs text-slate-400">Okuduğunuz kitaplardan altını çizdiğiniz ve ezberlemek istediğiniz satırlar</p>
          </div>
        </div>
      </div>

      {/* Quotes List */}
      {customQuotes.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-3xl bg-slate-900/50 border border-slate-800">
          <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-serif font-bold text-slate-300 mb-1">Henüz özel alıntı eklemediniz</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
            Okuduğunuz kitaplardaki en sevdiğiniz cümleleri buraya ekleyerek istediğiniz zaman ezberleme alıştırması yapabilirsiniz.
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-300 text-xs font-semibold transition"
          >
            İlk Cümleni Ekle
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {customQuotes.map((q) => (
            <div
              key={q.id}
              className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 pb-2 border-b border-slate-800">
                  <div className="font-serif font-bold text-amber-300 truncate max-w-[200px]">
                    {q.book}
                  </div>
                  <span className="text-slate-500 text-[11px]">{q.author}</span>
                </div>

                <p className="text-sm font-serif italic text-slate-100 leading-relaxed mb-4">
                  "{q.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs">
                <span className="text-[11px] text-slate-500">
                  {q.quote.trim().split(/\s+/).length} Kelime
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onDeleteCustomQuote(q.id)}
                    className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg transition"
                    title="Alıntıyı Sil"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onStartPractice(q)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-medium transition cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-amber-300" />
                    <span>Ezberle</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl">
            <h3 className="text-lg font-serif font-bold text-white mb-1">Kitap Alıntısı Ekle</h3>
            <p className="text-xs text-slate-400 mb-4">
              Ezberlemek istediğiniz cümlenin detaylarını girin:
            </p>

            <div className="space-y-3 mb-5">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Kitap / Eser Adı:</label>
                <input
                  type="text"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  placeholder="Örn: Tutunamayanlar"
                  className="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Yazar:</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Örn: Oğuz Atay"
                  className="w-full p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Alıntı Cümlesi:</label>
                <textarea
                  rows={4}
                  value={quoteText}
                  onChange={(e) => setQuoteText(e.target.value)}
                  placeholder="Ezberlemek istediğiniz cümleyi tam olarak yazın..."
                  className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm font-serif focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white text-sm"
              >
                Vazgeç
              </button>
              <button
                onClick={handleSave}
                disabled={!quoteText.trim()}
                className="px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold text-sm transition"
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
