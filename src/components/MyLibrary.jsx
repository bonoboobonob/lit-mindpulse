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
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#FAF6EE] border border-[#D6CEBE] text-[#44403C] hover:text-[#1C1917] text-sm font-semibold transition shadow-xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </button>

        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-2xl btn-terracotta font-bold text-xs sm:text-sm shadow-md transition cursor-pointer"
        >
          <PlusCircle className="w-4 h-4 fill-white" />
          <span>Yeni Alıntı Ekle</span>
        </button>
      </div>

      {/* Hero */}
      <div className="p-6 rounded-3xl bg-white border border-[#D6CEBE] shadow-xs mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-2xl bg-[#C85A32]/10 text-[#B44A22] border border-[#C85A32]/30">
            <Feather className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">Kişisel Hafıza Defterim</h2>
            <p className="text-xs sm:text-sm text-[#57534E] font-medium">Okuduğunuz kitaplardan altını çizdiğiniz ve ezberlemek istediğiniz satırlar</p>
          </div>
        </div>
      </div>

      {/* Quotes List */}
      {customQuotes.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-3xl bg-white border border-[#D6CEBE] shadow-xs">
          <BookOpen className="w-12 h-12 text-[#78716C] mx-auto mb-3 stroke-[1.8]" />
          <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-1">Henüz özel alıntı eklemediniz</h3>
          <p className="text-xs sm:text-sm text-[#57534E] max-w-md mx-auto mb-6 leading-relaxed">
            Okuduğunuz kitaplardaki en sevdiğiniz cümleleri buraya ekleyerek istediğiniz zaman ezberleme alıştırması yapabilirsiniz.
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-6 py-2.5 rounded-xl btn-terracotta text-xs font-bold transition cursor-pointer shadow-md"
          >
            İlk Cümleni Ekle
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {customQuotes.map((q) => (
            <div
              key={q.id}
              className="p-5 rounded-3xl bg-white border border-[#D6CEBE] hover:border-[#C85A32]/60 transition-all flex flex-col justify-between shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#57534E] mb-3 pb-2 border-b border-[#D6CEBE]">
                  <div className="font-serif font-bold text-[#B44A22] text-sm truncate max-w-[200px]">
                    {q.book}
                  </div>
                  <span className="text-[#57534E] font-medium text-[11px]">{q.author}</span>
                </div>

                <p className="text-sm sm:text-base font-serif italic text-[#1C1917] leading-relaxed mb-4 font-quote">
                  "{q.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#D6CEBE] text-xs">
                <span className="text-[11px] text-[#57534E] font-semibold">
                  {q.quote.trim().split(/\s+/).length} Kelime
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onDeleteCustomQuote(q.id)}
                    className="p-1.5 text-[#78716C] hover:text-rose-700 rounded-lg transition cursor-pointer"
                    title="Alıntıyı Sil"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onStartPractice(q)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#C85A32]/10 hover:bg-[#C85A32]/20 text-[#B44A22] border border-[#C85A32]/40 font-bold transition cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-[#B44A22]" />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="w-full max-w-lg bg-white border border-[#D6CEBE] rounded-3xl p-6 shadow-2xl">
            <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-1">Kitap Alıntısı Ekle</h3>
            <p className="text-xs text-[#57534E] mb-4">
              Ezberlemek istediğiniz cümlenin detaylarını girin:
            </p>

            <div className="space-y-3 mb-5">
              <div>
                <label className="block text-xs text-[#44403C] font-bold mb-1">Kitap / Eser Adı:</label>
                <input
                  type="text"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  placeholder="Örn: Tutunamayanlar"
                  className="w-full p-2.5 rounded-xl bg-[#FAF6EE] border border-[#D6CEBE] text-[#1C1917] placeholder-[#78716C] text-sm focus:outline-none focus:border-[#C85A32]"
                />
              </div>

              <div>
                <label className="block text-xs text-[#44403C] font-bold mb-1">Yazar:</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Örn: Oğuz Atay"
                  className="w-full p-2.5 rounded-xl bg-[#FAF6EE] border border-[#D6CEBE] text-[#1C1917] placeholder-[#78716C] text-sm focus:outline-none focus:border-[#C85A32]"
                />
              </div>

              <div>
                <label className="block text-xs text-[#44403C] font-bold mb-1">Alıntı Cümlesi:</label>
                <textarea
                  rows={4}
                  value={quoteText}
                  onChange={(e) => setQuoteText(e.target.value)}
                  placeholder="Ezberlemek istediğiniz cümleyi tam olarak yazın..."
                  className="w-full p-3 rounded-xl bg-[#FAF6EE] border border-[#D6CEBE] text-[#1C1917] placeholder-[#78716C] text-sm font-serif focus:outline-none focus:border-[#C85A32] resize-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 rounded-xl bg-[#FAF6EE] text-[#44403C] hover:text-[#1C1917] font-semibold text-sm cursor-pointer"
              >
                Vazgeç
              </button>
              <button
                onClick={handleSave}
                disabled={!quoteText.trim()}
                className="px-6 py-2 rounded-xl btn-terracotta disabled:opacity-50 font-bold text-sm transition cursor-pointer"
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
