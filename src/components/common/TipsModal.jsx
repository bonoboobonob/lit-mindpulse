import React from 'react';
import { X, Feather, Compass, BookOpen, Layers, Repeat } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#57534E] dark:text-[#A8A196] hover:text-[#1C1917] dark:hover:text-[#F5EFE4] rounded-xl hover:bg-[#FAF6EE] dark:hover:bg-[#282420] transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="p-3 bg-[#C85A32]/10 dark:bg-[#E07048]/15 text-[#B44A22] dark:text-[#E07048] border border-[#C85A32]/30 dark:border-[#E07048]/40 rounded-2xl">
            <Feather className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4]">Edebi Cümle Ezberleme Sanatı</h2>
            <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A8A196] font-medium">Kitapları ve felsefi alıntıları kalıcı hafızaya kazıma teknikleri</p>
          </div>
        </div>

        {/* Techniques List */}
        <div className="space-y-4 mb-6">
          {techniques.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div key={i} className="p-4 bg-[#FAF6EE] dark:bg-[#24201C] rounded-2xl border border-[#D6CEBE] dark:border-[#38322B] hover:border-[#C85A32]/40 dark:hover:border-[#E07048]/40 transition">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-white dark:bg-[#1C1917] text-[#B44A22] dark:text-[#E07048] border border-[#D6CEBE] dark:border-[#38322B] rounded-xl shadow-xs">
                      <Icon className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <h3 className="text-sm sm:text-base font-serif font-bold text-[#1C1917] dark:text-[#F5EFE4]">{tech.title}</h3>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white dark:bg-[#1C1917] border border-[#D6CEBE] dark:border-[#38322B] text-[#B44A22] dark:text-[#E07048]">
                    {tech.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#44403C] dark:text-[#D6CEBE] leading-relaxed pl-10 font-sans font-normal">
                  {tech.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Golden Quote */}
        <div className="p-4 rounded-2xl bg-[#FAF6EE] dark:bg-[#24201C] border border-[#D6CEBE] dark:border-[#38322B] text-center">
          <p className="text-xs sm:text-sm font-serif italic text-[#B44A22] dark:text-[#E07048] font-semibold font-quote">
            "Ezberlenen her asil cümle, ruhun karanlık odalarını aydınlatan sönmez bir kandildir."
          </p>
        </div>
      </div>
    </div>
  );
}
