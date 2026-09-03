// LocalStorage and Literary Statistics Manager
const STORAGE_KEY = 'librismind_literary_stats_v2';
const CUSTOM_QUOTES_KEY = 'librismind_custom_quotes_v2';
const THEME_KEY = 'librismind_theme';

export const getSavedTheme = () => {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  } catch (e) {
    return 'light';
  }
};

export const saveTheme = (theme) => {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) {
    console.error('Failed to save theme:', e);
  }
};

export const getSavedStats = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const defaults = getDefaultStats();
    if (!raw) return defaults;
    const parsed = JSON.parse(raw);

    // Merge existing achievements with new ones
    const achievementMap = new Map((parsed.achievements || []).map(a => [a.id, a]));
    const mergedAchievements = defaults.achievements.map(defAch => {
      const existing = achievementMap.get(defAch.id);
      return existing ? { ...defAch, unlocked: existing.unlocked } : defAch;
    });

    return {
      ...defaults,
      ...parsed,
      highScores: {
        ...defaults.highScores,
        ...(parsed.highScores || {})
      },
      achievements: mergedAchievements
    };
  } catch (e) {
    console.error('Failed to load stats:', e);
    return getDefaultStats();
  }
};

export const getCustomQuotes = () => {
  try {
    const raw = localStorage.getItem(CUSTOM_QUOTES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

export const saveCustomQuotes = (quotes) => {
  try {
    localStorage.setItem(CUSTOM_QUOTES_KEY, JSON.stringify(quotes));
  } catch (e) {
    console.error('Failed to save custom quotes:', e);
  }
};

export const getDefaultStats = () => ({
  streak: 1,
  lastPlayedDate: new Date().toISOString().split('T')[0],
  totalSessions: 0,
  totalWordsMemorized: 0,
  highScores: {
    fullTyping: 0,
    clozeRecall: 0,
    wordScramble: 0,
    textDetective: 0,
    firstLetter: 0,
    speedTrio: 0,
  },
  achievements: [
    { id: 'first_quote', title: 'İlk Cümle', desc: 'İlk edebi alıntını başarıyla ezberle', unlocked: false, icon: 'Feather' },
    { id: 'streak_3', title: 'Düzenli Okur', desc: '3 gün üst üste edebi antrenman yap', unlocked: false, icon: 'Flame' },
    { id: 'words_100', title: 'Kelime Ustası', desc: 'Toplamda 100 kelimelik alıntı ezberle', unlocked: false, icon: 'BookOpen' },
    { id: 'perfect_typing', title: 'Hatasız Kalem', desc: 'Tam Yazma modunda %100 doğruluk yakala', unlocked: false, icon: 'Sparkles' },
    { id: 'cloze_master', title: 'Kavram Avcısı', desc: 'Boşluk doldurma modunda tam puan al', unlocked: false, icon: 'Puzzle' },
    { id: 'detective_master', title: 'Dedektif Gözü', desc: 'Metin Dedektifi modunda tüm sahte kelimeleri kusursuz tespit et', unlocked: false, icon: 'Search' },
    { id: 'scaffolding_pro', title: 'Tirat Virtüözü', desc: 'İlk Harf Çapası modunda %90+ doğrulukla pasajı tamamla', unlocked: false, icon: 'Award' },
    { id: 'speed_champ', title: 'Edebi Şimşek', desc: 'Trio Sprint modunda 1000+ puan rekoruna ulaş', unlocked: false, icon: 'Zap' },
  ]
});

export const saveGameResult = ({ gameId, score, accuracy = 100, wordsCount = 10 }) => {
  try {
    const stats = getSavedStats();
    const today = new Date().toISOString().split('T')[0];

    // Calculate streak
    if (stats.lastPlayedDate !== today) {
      const lastDate = new Date(stats.lastPlayedDate);
      const currentDate = new Date(today);
      const diffDays = Math.round((currentDate - lastDate) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        stats.streak = (stats.streak || 0) + 1;
      } else if (diffDays > 1) {
        stats.streak = 1;
      }
      stats.lastPlayedDate = today;
    }

    stats.totalSessions = (stats.totalSessions || 0) + 1;
    if (accuracy >= 70) {
      stats.totalWordsMemorized = (stats.totalWordsMemorized || 0) + wordsCount;
    }

    // High Scores
    if (!stats.highScores[gameId] || score > stats.highScores[gameId]) {
      stats.highScores[gameId] = score;
    }

    // Achievements
    stats.achievements.forEach(ach => {
      if (ach.id === 'first_quote' && stats.totalSessions >= 1) ach.unlocked = true;
      if (ach.id === 'streak_3' && stats.streak >= 3) ach.unlocked = true;
      if (ach.id === 'words_100' && stats.totalWordsMemorized >= 100) ach.unlocked = true;
      if (ach.id === 'perfect_typing' && gameId === 'fullTyping' && accuracy === 100) ach.unlocked = true;
      if (ach.id === 'cloze_master' && gameId === 'clozeRecall' && accuracy === 100) ach.unlocked = true;
      if (ach.id === 'detective_master' && gameId === 'textDetective' && accuracy === 100) ach.unlocked = true;
      if (ach.id === 'scaffolding_pro' && gameId === 'firstLetter' && accuracy >= 90) ach.unlocked = true;
      if (ach.id === 'speed_champ' && gameId === 'speedTrio' && score >= 1000) ach.unlocked = true;
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    return stats;
  } catch (e) {
    console.error('Failed to save stats:', e);
    return getDefaultStats();
  }
};
