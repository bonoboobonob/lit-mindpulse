import React from 'react';
import { X, Feather, Compass, BookOpen, Layers, Repeat, Sparkles } from 'lucide-react';

export default function TipsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const techniques = [
    {
      title: "1. Cümlenin Ritmik Melodisi & Vezin",
      desc: "Büyük yazarlar cümlelerini bir müzik besteler gibi yazarlar. Cümleyi okurken nefes duraklarına, kelimelerin ahengine ve iç sesinizin temposuna odaklanın. Ritim hafızası, görsel hafızadan daha kalıcıdır.",
      icon: Feather,
      tag: "İşitsel & Ritmik Hafıza"
    },
    {
      title: "2. Çapa & İskelet Tekniği (Anchor Words)",
      desc: "Uzun edebi cümlelerde önce cümlenin belkemiğini (özne, temel fiil ve ana kavram) zihninize bir çapa olarak sabitleyin. Ardından niteleyici sıfatları ve yan cümleleri bu iskelete bağlayın.",
      icon: Layers,
      tag: "Çalışma Belleği"
    },
    {
      title: "3. Zihinsel Sahne Görselleştirmesi",
      desc: "Kelimeleri tek tek harf dizisi olarak ezberlemek yerine cümlenin anlattığı soyut felsefi fikri veya manzarayı bir tablo gibi zihninizde canlandırın. Beyin görüntüyü kelimeden 60.000 kat daha hızlı işler.",
      icon: Compass,
      tag: "Görsel Hafıza"
    },
    {
      title: "4. Hafıza Sarayı (Method of Loci)",
      desc: "Cümlenin farklı parçalarını (örneğin Dostoyevski'nin 'Yeni bir adım atmak...' cümlesindeki 'adım', 'kelime', 'korku') evinizin kapısına, masasına ve aynasına yerleştirin. Hatırlamak için odada yürüyün.",
      icon: BookOpen,
      tag: "Uzamsal Hafıza"
    },
    {
      title: "5. Aktif Yazarak Geri Çağırma (Active Recall)",
      desc: "Cümleyi tekrar tekrar okumak yerine ekrandan gizleyip klavyeyle yazmaya çalışmak, beynin nöronal bağlantılarını en güçlü şekilde ateşleyen ve kalıcılığı 3 kat artıran kanıtlanmış yöntemdir.",
      icon: Repeat,
      tag: "Kas & Nöron Hafızası"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="p-3 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-2xl">
            <Feather className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">Edebi Cümle Ezberleme Sanatı</h2>
            <p className="text-xs text-slate-400">Kitapları ve felsefi alıntıları kalıcı hafızaya kazıma teknikleri</p>
          </div>
        </div>

        {/* Techniques List */}
        <div className="space-y-4 mb-6">
          {techniques.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div key={i} className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-amber-500/15 text-amber-400 rounded-xl">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-serif font-bold text-slate-100">{tech.title}</h3>
                  </div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 font-medium">
                    {tech.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-10 font-serif">
                  {tech.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Golden Quote */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 to-orange-950/40 border border-amber-500/30 text-center">
          <p className="text-xs sm:text-sm font-serif italic text-amber-200">
            "Ezberlenen her asil cümle, ruhun karanlık odalarını aydınlatan sönmez bir kandildir."
          </p>
        </div>
      </div>
    </div>
  );
}
