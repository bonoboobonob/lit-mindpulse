// Helper for Edebi Metin Dedektifi (Text Detective Game)

const LITERARY_SUBSTITUTES = {
  'zaman': 'vakit',
  'vakit': 'zaman',
  'insan': 'birey',
  'insanlar': 'bireyler',
  'yalnızlık': 'ıssızlık',
  'yalnız': 'kimsesiz',
  'karanlık': 'zifir',
  'hayat': 'yaşam',
  'yaşam': 'ömür',
  'dünya': 'evren',
  'güzel': 'hoş',
  'büyük': 'devasa',
  'küçük': 'ufak',
  'gözler': 'bakışlar',
  'gözleri': 'bakışları',
  'kalp': 'yürek',
  'yürek': 'gönül',
  'gönül': 'vicdan',
  'sessizlik': 'sükûnet',
  'sessiz': 'sakin',
  'ölüm': 'son',
  'ruh': 'zihin',
  'ruhu': 'canı',
  'hüzün': 'keder',
  'keder': 'acı',
  'sevinç': 'mutluluk',
  'kitap': 'roman',
  'yazmak': 'karalamak',
  'anlamak': 'kavramak',
  'anladım': 'farkettim',
  'düşünce': 'fikir',
  'düşünceler': 'fikirler',
  'akıl': 'mantık',
  'aşk': 'sevda',
  'sevgi': 'tutku',
  'korku': 'endişe',
  'korkular': 'kaygılar',
  'hürriyet': 'özgürlük',
  'özgürlük': 'serbestlik',
  'şehir': 'kent',
  'rüya': 'hayal',
  'rüyalar': 'düşler',
  'gökyüzü': 'sema',
  'rüzgar': 'esinti',
  'deniz': 'okyanus',
  'yolculuk': 'seyahat',
  'yol': 'patika',
  'hafıza': 'bellek',
  'hatıra': 'anı',
  'hatıralar': 'anılar',
  'hakikat': 'gerçek',
  'gerçek': 'doğru',
  'gece': 'akşam',
  'sabah': 'şafak',
  'ışık': 'ziya',
  'güneş': 'ufuk',
  'kelime': 'sözcük',
  'kelimeler': 'sözcükler',
  'söz': 'kelam',
  'ses': 'nida',
  'sonsuz': 'ebedi',
  'geçmiş': 'mazi',
  'gelecek': 'istikbal',
  'dost': 'arkadaş',
  'düşman': 'hasım',
  'kader': 'yazgı',
  'çocuk': 'yavru',
  'kadın': 'hanım',
  'adam': 'şahıs',
};

const STOPWORDS = new Set([
  've', 'veya', 'bir', 'bu', 'şu', 'o', 'de', 'da', 'ile', 'için', 
  'ne', 'ise', 'ki', 'gibi', 'kadar', 'en', 'daha', 'çok', 'ama', 
  'fakat', 'ancak', 'her', 'hiç', 'tüm', 'hep', 'mi', 'mı', 'mu', 'mü'
]);

function cleanWord(str) {
  return (str || '').toLocaleLowerCase('tr').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’«»“”‘’—–…]/g, '').trim();
}

/**
 * Generates an intruder-injected version of the quote
 * @param {string} rawQuote 
 * @param {number} intruderCount (1 to 4)
 * @returns {Array<{ id: number, original: string, display: string, isIntruder: boolean, isFound: boolean, prefix: string, suffix: string }>}
 */
export function generateDetectiveTokens(rawQuote, intruderCount = 2) {
  if (!rawQuote) return [];

  // Match words and their surrounding punctuations
  const rawWords = rawQuote.trim().split(/\s+/);
  
  const tokens = rawWords.map((rawWord, idx) => {
    const match = rawWord.match(/^([^a-zA-ZçğıöşüÇĞİÖŞÜ0-9]*)(.*?)([^a-zA-ZçğıöşüÇĞİÖŞÜ0-9]*)$/);
    const prefix = match ? match[1] : '';
    const core = match ? match[2] : rawWord;
    const suffix = match ? match[3] : '';
    const cleaned = cleanWord(core);

    return {
      id: idx,
      raw: rawWord,
      core,
      prefix,
      suffix,
      cleaned,
      isCandidate: core.length >= 3 && !STOPWORDS.has(cleaned),
      isIntruder: false,
      impostorWord: null,
      isFound: false,
      isWronglyTapped: false,
    };
  });

  // Pick candidates
  const candidates = tokens.filter(t => t.isCandidate);
  
  // Prefer candidates that have known literary substitutes
  const knownCandidates = candidates.filter(t => LITERARY_SUBSTITUTES[t.cleaned]);
  const otherCandidates = candidates.filter(t => !LITERARY_SUBSTITUTES[t.cleaned]);

  // Shuffle pools
  const pool = [...knownCandidates.sort(() => Math.random() - 0.5), ...otherCandidates.sort(() => Math.random() - 0.5)];
  
  const targetCount = Math.min(intruderCount, pool.length);
  const selectedTargets = pool.slice(0, targetCount);

  selectedTargets.forEach((target) => {
    target.isIntruder = true;
    
    // Determine impostor word
    let substitute = LITERARY_SUBSTITUTES[target.cleaned];
    if (!substitute) {
      // Create subtle synonym / modification
      const genericImpostors = ['başka', 'belli', 'derin', 'gizli', 'tuhaf', 'ayrı', 'garip', 'yeni', 'eski', 'farklı'];
      substitute = genericImpostors[Math.floor(Math.random() * genericImpostors.length)];
    }

    // Preserve casing
    if (target.core[0] === target.core[0].toUpperCase()) {
      substitute = substitute.charAt(0).toUpperCase() + substitute.slice(1);
    }

    target.impostorWord = substitute;
  });

  return tokens;
}
