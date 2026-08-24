// Game Themes, Card Pairs and Word Lists

export const CARD_THEMES = {
  emojis: {
    id: 'emojis',
    name: 'Görsel Semboller',
    icon: 'Sparkles',
    pairs: [
      { id: '1', front: '🚀', matchKey: 'rocket', display: '🚀' },
      { id: '2', front: '🚀', matchKey: 'rocket', display: '🚀' },
      { id: '3', front: '🧠', matchKey: 'brain', display: '🧠' },
      { id: '4', front: '🧠', matchKey: 'brain', display: '🧠' },
      { id: '5', front: '⚡', matchKey: 'bolt', display: '⚡' },
      { id: '6', front: '⚡', matchKey: 'bolt', display: '⚡' },
      { id: '7', front: '💎', matchKey: 'gem', display: '💎' },
      { id: '8', front: '💎', matchKey: 'gem', display: '💎' },
      { id: '9', front: '🎯', matchKey: 'target', display: '🎯' },
      { id: '10', front: '🎯', matchKey: 'target', display: '🎯' },
      { id: '11', front: '🪐', matchKey: 'planet', display: '🪐' },
      { id: '12', front: '🪐', matchKey: 'planet', display: '🪐' },
      { id: '13', front: '🔥', matchKey: 'fire', display: '🔥' },
      { id: '14', front: '🔥', matchKey: 'fire', display: '🔥' },
      { id: '15', front: '🎨', matchKey: 'art', display: '🎨' },
      { id: '16', front: '🎨', matchKey: 'art', display: '🎨' },
    ]
  },
  vocabulary: {
    id: 'vocabulary',
    name: 'İngilizce - Türkçe Kelimeler',
    icon: 'Languages',
    pairs: [
      { id: 'v1', front: 'Memory', matchKey: 'mem', display: 'Memory', subtitle: 'ENG' },
      { id: 'v2', front: 'Hafıza', matchKey: 'mem', display: 'Hafıza', subtitle: 'TR' },
      { id: 'v3', front: 'Brain', matchKey: 'brn', display: 'Brain', subtitle: 'ENG' },
      { id: 'v4', front: 'Beyin', matchKey: 'brn', display: 'Beyin', subtitle: 'TR' },
      { id: 'v5', front: 'Wisdom', matchKey: 'wsd', display: 'Wisdom', subtitle: 'ENG' },
      { id: 'v6', front: 'Bilgelik', matchKey: 'wsd', display: 'Bilgelik', subtitle: 'TR' },
      { id: 'v7', front: 'Courage', matchKey: 'crg', display: 'Courage', subtitle: 'ENG' },
      { id: 'v8', front: 'Cesaret', matchKey: 'crg', display: 'Cesaret', subtitle: 'TR' },
      { id: 'v9', front: 'Focus', matchKey: 'fcs', display: 'Focus', subtitle: 'ENG' },
      { id: 'v10', front: 'Odaklanma', matchKey: 'fcs', display: 'Odaklanma', subtitle: 'TR' },
      { id: 'v11', front: 'Horizon', matchKey: 'hrz', display: 'Horizon', subtitle: 'ENG' },
      { id: 'v12', front: 'Ufuk', matchKey: 'hrz', display: 'Ufuk', subtitle: 'TR' },
      { id: 'v13', front: 'Journey', matchKey: 'jrn', display: 'Journey', subtitle: 'ENG' },
      { id: 'v14', front: 'Yolculuk', matchKey: 'jrn', display: 'Yolculuk', subtitle: 'TR' },
      { id: 'v15', front: 'Spark', matchKey: 'spk', display: 'Spark', subtitle: 'ENG' },
      { id: 'v16', front: 'Kıvılcım', matchKey: 'spk', display: 'Kıvılcım', subtitle: 'TR' },
    ]
  },
  capitals: {
    id: 'capitals',
    name: 'Ülke - Başkent Eşleştirme',
    icon: 'Globe',
    pairs: [
      { id: 'c1', front: 'Türkiye 🇹🇷', matchKey: 'tr', display: 'Türkiye', subtitle: 'Ülke' },
      { id: 'c2', front: 'Ankara', matchKey: 'tr', display: 'Ankara', subtitle: 'Başkent' },
      { id: 'c3', front: 'Fransa 🇫🇷', matchKey: 'fr', display: 'Fransa', subtitle: 'Ülke' },
      { id: 'c4', front: 'Paris', matchKey: 'fr', display: 'Paris', subtitle: 'Başkent' },
      { id: 'c5', front: 'Japonya 🇯🇵', matchKey: 'jp', display: 'Japonya', subtitle: 'Ülke' },
      { id: 'c6', front: 'Tokyo', matchKey: 'jp', display: 'Tokyo', subtitle: 'Başkent' },
      { id: 'c7', front: 'Almanya 🇩🇪', matchKey: 'de', display: 'Almanya', subtitle: 'Ülke' },
      { id: 'c8', front: 'Berlin', matchKey: 'de', display: 'Berlin', subtitle: 'Başkent' },
      { id: 'c9', front: 'İtalya 🇮🇹', matchKey: 'it', display: 'İtalya', subtitle: 'Ülke' },
      { id: 'c10', front: 'Roma', matchKey: 'it', display: 'Roma', subtitle: 'Başkent' },
      { id: 'c11', front: 'Kanada 🇨🇦', matchKey: 'ca', display: 'Kanada', subtitle: 'Ülke' },
      { id: 'c12', front: 'Ottawa', matchKey: 'ca', display: 'Ottawa', subtitle: 'Başkent' },
      { id: 'c13', front: 'İspanya 🇪🇸', matchKey: 'es', display: 'İspanya', subtitle: 'Ülke' },
      { id: 'c14', front: 'Madrid', matchKey: 'es', display: 'Madrid', subtitle: 'Başkent' },
      { id: 'c15', front: 'Mısır 🇪🇬', matchKey: 'eg', display: 'Mısır', subtitle: 'Ülke' },
      { id: 'c16', front: 'Kahire', matchKey: 'eg', display: 'Kahire', subtitle: 'Başkent' },
    ]
  },
  math: {
    id: 'math',
    name: 'Zihinden Matematik',
    icon: 'Calculator',
    pairs: [
      { id: 'm1', front: '7 × 8', matchKey: '56', display: '7 × 8', subtitle: 'İşlem' },
      { id: 'm2', front: '56', matchKey: '56', display: '56', subtitle: 'Sonuç' },
      { id: 'm3', front: '15 + 28', matchKey: '43', display: '15 + 28', subtitle: 'İşlem' },
      { id: 'm4', front: '43', matchKey: '43', display: '43', subtitle: 'Sonuç' },
      { id: 'm5', front: '144 ÷ 12', matchKey: '12', display: '144 ÷ 12', subtitle: 'İşlem' },
      { id: 'm6', front: '12', matchKey: '12', display: '12', subtitle: 'Sonuç' },
      { id: 'm7', front: '9²', matchKey: '81', display: '9²', subtitle: 'İşlem' },
      { id: 'm8', front: '81', matchKey: '81', display: '81', subtitle: 'Sonuç' },
      { id: 'm9', front: '25 × 4', matchKey: '100', display: '25 × 4', subtitle: 'İşlem' },
      { id: 'm10', front: '100', matchKey: '100', display: '100', subtitle: 'Sonuç' },
      { id: 'm11', front: '63 ÷ 7', matchKey: '9', display: '63 ÷ 7', subtitle: 'İşlem' },
      { id: 'm12', front: '9', matchKey: '9', display: '9', subtitle: 'Sonuç' },
      { id: 'm13', front: '18 + 29', matchKey: '47', display: '18 + 29', subtitle: 'İşlem' },
      { id: 'm14', front: '47', matchKey: '47', display: '47', subtitle: 'Sonuç' },
      { id: 'm15', front: '11 × 11', matchKey: '121', display: '11 × 11', subtitle: 'İşlem' },
      { id: 'm16', front: '121', matchKey: '121', display: '121', subtitle: 'Sonuç' },
    ]
  }
};

export const WORD_PACKS = {
  easy: {
    name: 'Temel Seviye (6 Kelime)',
    time: 15,
    words: ['Güneş', 'Kitap', 'Köprü', 'Rüzgar', 'Deniz', 'Yıldız']
  },
  medium: {
    name: 'Orta Seviye (10 Kelime)',
    time: 25,
    words: ['Kelebek', 'Teleskop', 'Pusula', 'Zaman', 'Şelale', 'Kristal', 'Orkestra', 'Gökyüzü', 'Volkan', 'Fener']
  },
  hard: {
    name: 'İleri Seviye (14 Kelime)',
    time: 35,
    words: ['Sinerji', 'Astronot', 'Hipotez', 'Labirent', 'Paradoks', 'Metafor', 'Kuantum', 'Senfoni', 'Keşif', 'Efsane', 'Dinamizm', 'Vizyon', 'Akademi', 'Galaksi']
  },
  numbers: {
    name: 'Sayı Dizisi (8 Sayı)',
    time: 20,
    words: ['482', '917', '305', '641', '829', '153', '764', '590']
  }
};

export const MNEMONIC_TIPS = [
  "Hikaye Tekniği: Kelimeleri aklınızda saçma ve canlı bir hikayeye dönüştürün. Beyin absürt sahneleri daha zor unutur.",
  "Mekan Metodu (Loci / Hafıza Sarayı): Ezberlenecek nesneleri evinizin odalarına sırayla yerleştirdiğinizi hayal edin.",
  "Gruplama (Chunking): Uzun sayı serilerini telefon numarası gibi 2'şer veya 3'erli bloklara bölün.",
  "Duyusal Kodlama: Kelimeyi sadece okumayın; sesini, kokusunu veya rengini hayal ederek beynin birden çok lobunu aktif edin.",
  "Aralıklı Tekrar: Öğrendiğiniz bilgiyi 10 dakika, 1 gün ve 3 gün sonra tekrar etmek kalıcı hafızaya aktarır."
];
