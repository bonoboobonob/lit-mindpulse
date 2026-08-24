// Comprehensive Literary Library with 150+ Book Quotes
// Diverse passages from different chapters and dialogues of famous books

export const BOOK_GENRES = [
  { id: 'all', name: 'Tüm Türler', icon: 'Sparkles', desc: 'Tüm edebi kategorilerden karma alıntılar' },
  { id: 'philosophy', name: 'Felsefe & Bilgelik', icon: 'Scale', desc: 'Stoacılık, varoluşçuluk ve kadim düşünceler' },
  { id: 'classics', name: 'Dünya Klasikleri', icon: 'BookOpen', desc: 'Dostoyevski, Tolstoy, Kafka ve kült romanlar' },
  { id: 'turkish', name: 'Türk Edebiyatı', icon: 'Feather', desc: 'Sabahattin Ali, Tanpınar, Oğuz Atay ve klasikler' },
  { id: 'poetry', name: 'Şiir & Dizeler', icon: 'Heart', desc: 'Nazım Hikmet, Cemal Süreya, Attila İlhan, Rumi' },
  { id: 'strategy', name: 'Tarih & Strateji', icon: 'Shield', desc: 'Sun Tzu, Machiavelli, İbn Haldun, İlber Ortaylı' },
  { id: 'drama', name: 'Dünya Tiyatrosu', icon: 'Drama', desc: 'Shakespeare, Goethe, Sophokles, Çehov, Beckett' },
  { id: 'mysticism', name: 'Tasavvuf & Doğu', icon: 'Flame', desc: 'Lao Tzu, Konfüçyüs, Halil Cibran, Şems-i Tebrizi' },
  { id: 'mystery', name: 'Polisiye & Gizem', icon: 'Search', desc: 'Sherlock Holmes, Agatha Christie, Poe, Ahmet Ümit' },
  { id: 'letters', name: 'Mektup & Günlük', icon: 'Mail', desc: 'Milena\'ya Mektuplar, Virginia Woolf, Anne Frank' },
  { id: 'nature', name: 'Doğa & İnziva', icon: 'Trees', desc: 'Thoreau (Walden), Emerson, Jack London, Moby Dick' },
  { id: 'mythology', name: 'Mitoloji & Büyülü', icon: 'Wand2', desc: 'Homeros, Dante (İlahi Komedya), Borges, Murakami' },
  { id: 'science', name: 'Bilim & Evren', icon: 'Compass', desc: 'Carl Sagan, Hawking, Feynman ve evrenin sırları' },
  { id: 'psychology', name: 'Psikoloji & İnsan', icon: 'Brain', desc: 'Viktor Frankl, Freud, Jung, anlam arayışı' },
  { id: 'dystopia', name: 'Distopya & Gelecek', icon: 'Eye', desc: '1984, Cesur Yeni Dünya, Fahrenheit 451' },
];

export const DIFFICULTY_LEVELS = [
  { id: 'easy', name: 'Kolay (4-8 Kelime)', desc: '10 saniye ezber süresi — Kısa ve vurucu cümleler', duration: 10 },
  { id: 'medium', name: 'Orta (9-15 Kelime)', desc: '15 saniye ezber süresi — Zengin edebi ve felsefi yapılar', duration: 15 },
  { id: 'hard', name: 'Zor (16-25 Kelime)', desc: '20 saniye ezber süresi — Uzun ve derin cümleler', duration: 20 },
  { id: 'legendary', name: 'Efsanevi (25+ Kelime)', desc: '30 saniye ezber süresi — Kompleks edebi paragraflar', duration: 30 },
];

export const BOOK_QUOTES = [
  // ==========================================
  // 1. FELSEFE & BİLGELİK (PHILOSOPHY & STOICISM)
  // ==========================================
  // Marcus Aurelius - Kendime Düşünceler (Farklı Bölümler)
  {
    id: 'phil_ma_1',
    genre: 'philosophy',
    difficulty: 'easy',
    book: 'Kendime Düşünceler',
    author: 'Marcus Aurelius',
    quote: 'Ruhun, düşüncelerinin rengine bürünür.',
  },
  {
    id: 'phil_ma_2',
    genre: 'philosophy',
    difficulty: 'easy',
    book: 'Kendime Düşünceler',
    author: 'Marcus Aurelius',
    quote: 'Sabah uyandığında nefes almanın ayrıcalığını hatırla.',
  },
  {
    id: 'phil_ma_3',
    genre: 'philosophy',
    difficulty: 'medium',
    book: 'Kendime Düşünceler',
    author: 'Marcus Aurelius',
    quote: 'Dış dünya seni üzemez; seni üzen şey ona verdiğin kendi yargılarındır.',
  },
  {
    id: 'phil_ma_4',
    genre: 'philosophy',
    difficulty: 'hard',
    book: 'Kendime Düşünceler',
    author: 'Marcus Aurelius',
    quote: 'Geriye kalan ömrün belirsizdir; her eylemini, hayatının son ve en kusursuz eylemiymiş gibi gerçekleştir.',
  },
  {
    id: 'phil_ma_5',
    genre: 'philosophy',
    difficulty: 'legendary',
    book: 'Kendime Düşünceler',
    author: 'Marcus Aurelius',
    quote: 'Zaman sonsuz bir akıntı, olayların azgın bir nehridir; bir şey göründüğü an sürüklenip gider, yerine başkası gelir ve o da aynı şekilde kaybolup yok olur.',
  },

  // Seneca - Yaşamın Kısalığı ve Ahlak Mektupları
  {
    id: 'phil_sen_1',
    genre: 'philosophy',
    difficulty: 'easy',
    book: 'Yaşamın Kısalığı Üzerine',
    author: 'Seneca',
    quote: 'Zamanımız az değil, çoğunu boşa harcıyoruz.',
  },
  {
    id: 'phil_sen_2',
    genre: 'philosophy',
    difficulty: 'medium',
    book: 'Ahlak Mektupları',
    author: 'Seneca',
    quote: 'Hangi limana gideceğini bilmeyen bir gemi için hiçbir rüzgar elverişli değildir.',
  },
  {
    id: 'phil_sen_3',
    genre: 'philosophy',
    difficulty: 'hard',
    book: 'Yaşamın Kısalığı Üzerine',
    author: 'Seneca',
    quote: 'Geleceği beklerken şimdiki anı kaçırırız ve hayat farkına varmadan tükenip gider.',
  },

  // Friedrich Nietzsche - Böyle Buyurdu Zerdüşt & Aforizmalar
  {
    id: 'phil_ntz_1',
    genre: 'philosophy',
    difficulty: 'easy',
    book: 'Putların Alacakaranlığı',
    author: 'Friedrich Nietzsche',
    quote: 'Beni öldürmeyen şey, beni daha güçlü kılar.',
  },
  {
    id: 'phil_ntz_2',
    genre: 'philosophy',
    difficulty: 'medium',
    book: 'Böyle Buyurdu Zerdüşt',
    author: 'Friedrich Nietzsche',
    quote: 'Uçuruma uzun süre bakarsan, uçurum da senin içine bakar.',
  },
  {
    id: 'phil_ntz_3',
    genre: 'philosophy',
    difficulty: 'medium',
    book: 'Böyle Buyurdu Zerdüşt',
    author: 'Friedrich Nietzsche',
    quote: 'Kendi alevinizle kendinizi yakmaya hazır olmalısınız, küle dönmeden nasıl yenilenebilirsiniz?',
  },
  {
    id: 'phil_ntz_4',
    genre: 'philosophy',
    difficulty: 'hard',
    book: 'İyinin ve Kötünün Ötesinde',
    author: 'Friedrich Nietzsche',
    quote: 'Canavarlarla savaşan kişi, bu mücadele sırasında kendisinin de bir canavara dönüşmemesine dikkat etmelidir.',
  },
  {
    id: 'phil_ntz_5',
    genre: 'philosophy',
    difficulty: 'legendary',
    book: 'Böyle Buyurdu Zerdüşt',
    author: 'Friedrich Nietzsche',
    quote: 'İnsan, hayvan ile üstinsan arasına gerilmiş bir halattır; bir uçurumun üstündeki tehlikeli bir geçiş, tehlikeli bir geriye bakış ve ürpertici bir duraklamadır.',
  },

  // Albert Camus - Yabancı & Sisifos Söyleni
  {
    id: 'phil_cam_1',
    genre: 'philosophy',
    difficulty: 'easy',
    book: 'Yabancı',
    author: 'Albert Camus',
    quote: 'Hayatın anlamsızlığı, yaşanmaya değer tek gerçektir.',
  },
  {
    id: 'phil_cam_2',
    genre: 'philosophy',
    difficulty: 'medium',
    book: 'Sisifos Söyleni',
    author: 'Albert Camus',
    quote: 'Tepelere doğru tek başına didinmek bile bir insanın yüreğini doldurmaya yeter.',
  },
  {
    id: 'phil_cam_3',
    genre: 'philosophy',
    difficulty: 'hard',
    book: 'Başkaldıran İnsan',
    author: 'Albert Camus',
    quote: 'Başkaldırıyorum, öyleyse varız; insan ancak haksızlığa karşı durduğunda kendi haysiyetini kazanabilir.',
  },

  // Platon, Spinoza, Montaigne & Kant
  {
    id: 'phil_plt_1',
    genre: 'philosophy',
    difficulty: 'medium',
    book: 'Devlet',
    author: 'Platon',
    quote: 'Kendini yönetmeyi bilmeyenler, başkalarının yönetiminde yaşamaya mahkum olurlar.',
  },
  {
    id: 'phil_spz_1',
    genre: 'philosophy',
    difficulty: 'hard',
    book: 'Etika',
    author: 'Baruch Spinoza',
    quote: 'İnsanlar isteklerinin bilincindedirler ancak onları bu istekleri duymaya yönelten nedenlerin farkında değillerdir.',
  },
  {
    id: 'phil_mnt_1',
    genre: 'philosophy',
    difficulty: 'hard',
    book: 'Denemeler',
    author: 'Montaigne',
    quote: 'Dünyanın en yüce tahtına da çıksanız, oturacağınız yer yine kendi bedeninizin üzeridir.',
  },
  {
    id: 'phil_knt_1',
    genre: 'philosophy',
    difficulty: 'legendary',
    book: 'Saf Aklın Eleştirisi',
    author: 'Immanuel Kant',
    quote: 'Görüsüz kavramlar boş, kavramsız görüler kördür; insan zihni dünyayı ancak kendi oluşturduğu deneyim kategorileri aracılığıyla kavrayabilir ve anlamlandırabilir.',
  },

  // ==========================================
  // 2. DÜNYA KLASİKLERİ & ROMAN (WORLD CLASSICS)
  // ==========================================
  // Fyodor Dostoyevski - Suç ve Ceza (Çoklu Bölümler)
  {
    id: 'clas_sc_1',
    genre: 'classics',
    difficulty: 'easy',
    book: 'Suç ve Ceza',
    author: 'Fyodor Dostoyevski',
    quote: 'Her şey insanın kendi elindedir.',
  },
  {
    id: 'clas_sc_2',
    genre: 'classics',
    difficulty: 'medium',
    book: 'Suç ve Ceza',
    author: 'Fyodor Dostoyevski',
    quote: 'Yeni bir adım atmak, yeni bir kelime söylemek insanların en çok korktuğu şeydir.',
  },
  {
    id: 'clas_sc_3',
    genre: 'classics',
    difficulty: 'medium',
    book: 'Suç ve Ceza',
    author: 'Fyodor Dostoyevski',
    quote: 'İnsan zekası bazen en saçma şeyleri bile dahiyane kılıflara sokabilir.',
  },
  {
    id: 'clas_sc_4',
    genre: 'classics',
    difficulty: 'hard',
    book: 'Suç ve Ceza',
    author: 'Fyodor Dostoyevski',
    quote: 'Acı ve ıstırap, geniş bir yürek ve derin bir bilinç sahibi olan insanlar için kaçınılmazdır.',
  },
  {
    id: 'clas_sc_5',
    genre: 'classics',
    difficulty: 'legendary',
    book: 'Suç ve Ceza',
    author: 'Fyodor Dostoyevski',
    quote: 'Onları dirilten sevgiydi; birinin kalbi diğeri için tükenmez bir hayat kaynağı haline gelmişti ve yedi yıllık sürgün artık onlara yedi gün gibi geliyordu.',
  },

  // Fyodor Dostoyevski - Karamazov Kardeşler & Yeraltından Notlar
  {
    id: 'clas_dos_1',
    genre: 'classics',
    difficulty: 'hard',
    book: 'Karamazov Kardeşler',
    author: 'Fyodor Dostoyevski',
    quote: 'İnsanlık sevgisi soyut kaldıkça kolaydır; asıl erdem yanı başınızdaki somut insanı kusurlarıyla sevebilmektir.',
  },
  {
    id: 'clas_dos_2',
    genre: 'classics',
    difficulty: 'legendary',
    book: 'Yeraltından Notlar',
    author: 'Fyodor Dostoyevski',
    quote: 'Yemin ederim baylar, fazlasıyla bilinçli olmak gerçek bir hastalıktır; sıradan bir insanın gündelik hayatını sürdürebilmesi için derin bir farkındalık fazlasıyla ağır gelir.',
  },

  // Antoine de Saint-Exupéry - Küçük Prens (Çoklu Bölümler)
  {
    id: 'clas_kp_1',
    genre: 'classics',
    difficulty: 'easy',
    book: 'Küçük Prens',
    author: 'Antoine de Saint-Exupéry',
    quote: 'Gerçeğin mayası gözle görülmez, sadece kalple bakılabilir.',
  },
  {
    id: 'clas_kp_2',
    genre: 'classics',
    difficulty: 'easy',
    book: 'Küçük Prens',
    author: 'Antoine de Saint-Exupéry',
    quote: 'Gülünü senin için bu kadar değerli kılan, ona ayırdığın zamandır.',
  },
  {
    id: 'clas_kp_3',
    genre: 'classics',
    difficulty: 'medium',
    book: 'Küçük Prens',
    author: 'Antoine de Saint-Exupéry',
    quote: 'Evcilleştirdiğin şeyden her zaman sen sorumlusun; gülüne karşı sorumlusun.',
  },
  {
    id: 'clas_kp_4',
    genre: 'classics',
    difficulty: 'hard',
    book: 'Küçük Prens',
    author: 'Antoine de Saint-Exupéry',
    quote: 'Büyükler sayılardan hoşlanır; onlara yeni bir arkadaşınızdan bahsettiğinizde asıl önemli şeyleri asla sormazlar.',
  },

  // Franz Kafka - Dönüşüm & Dava
  {
    id: 'clas_kfk_1',
    genre: 'classics',
    difficulty: 'easy',
    book: 'Dönüşüm',
    author: 'Franz Kafka',
    quote: 'Gregor Samsa bir sabah huzursuz düşlerden uyandı.',
  },
  {
    id: 'clas_kfk_2',
    genre: 'classics',
    difficulty: 'medium',
    book: 'Dönüşüm',
    author: 'Franz Kafka',
    quote: 'Bir insan çalışmadığında ailesine yük olduğunu hissetmeye mahkumdur.',
  },
  {
    id: 'clas_kfk_3',
    genre: 'classics',
    difficulty: 'legendary',
    book: 'Dava',
    author: 'Franz Kafka',
    quote: 'Birisi Joseph K. hakkında asılsız bir iftirada bulunmuş olmalıydı; çünkü kötü bir şey yapmadığı halde bir sabah ansızın tutuklandı ve hayatı geri dönülmez biçimde değişti.',
  },

  // Lev Tolstoy - Anna Karenina & İnsan Ne İle Yaşar?
  {
    id: 'clas_tls_1',
    genre: 'classics',
    difficulty: 'medium',
    book: 'Anna Karenina',
    author: 'Lev Tolstoy',
    quote: 'Tüm mutlu aileler birbirine benzer; her mutsuz ailenin mutsuzluğu ise kendine özgüdür.',
  },
  {
    id: 'clas_tls_2',
    genre: 'classics',
    difficulty: 'medium',
    book: 'İnsan Ne İle Yaşar?',
    author: 'Lev Tolstoy',
    quote: 'İnsan kendi kaygılarıyla değil, kalbindeki sevgiyle yaşar.',
  },
  {
    id: 'clas_tls_3',
    genre: 'classics',
    difficulty: 'hard',
    book: 'Savaş ve Barış',
    author: 'Lev Tolstoy',
    quote: 'En güçlü iki savaşçı sabır ve zamandır; her fırtına eninde sonunda dinginliğe teslim olur.',
  },

  // Victor Hugo, Stefan Zweig, Oscar Wilde, Gabriel García Márquez
  {
    id: 'clas_hugo_1',
    genre: 'classics',
    difficulty: 'hard',
    book: 'Sefiller',
    author: 'Victor Hugo',
    quote: 'Gelecek, güçsüzler için ulaşılmaz, korkaklar için bilinmez, cesurlar için ise eşsiz bir fırsattır.',
  },
  {
    id: 'clas_zwg_1',
    genre: 'classics',
    difficulty: 'easy',
    book: 'Satranç',
    author: 'Stefan Zweig',
    quote: 'İnsan hiçbir şey yapmadan sadece düşünceleriyle baş başa kalamaz.',
  },
  {
    id: 'clas_wld_1',
    genre: 'classics',
    difficulty: 'easy',
    book: 'Dorian Gray\'in Portresi',
    author: 'Oscar Wilde',
    quote: 'Kendini yargılamak, başkalarını yargılamaktan çok daha zordur.',
  },
  {
    id: 'clas_mrq_1',
    genre: 'classics',
    difficulty: 'medium',
    book: 'Yüzyıllık Yalnızlık',
    author: 'Gabriel García Márquez',
    quote: 'İnsan ölmek üzere olduğunu hissettiğinde geçmişiyle barışmak ister.',
  },

  // ==========================================
  // 3. TÜRK EDEBİYATI (TURKISH LITERATURE)
  // ==========================================
  // Sabahattin Ali - Kürk Mantolu Madonna & Kuyucaklı Yusuf
  {
    id: 'turk_kmm_1',
    genre: 'turkish',
    difficulty: 'easy',
    book: 'Kürk Mantolu Madonna',
    author: 'Sabahattin Ali',
    quote: 'İnsanlara güvenmek konusunda acele etmemek gerekir.',
  },
  {
    id: 'turk_kmm_2',
    genre: 'turkish',
    difficulty: 'easy',
    book: 'Kürk Mantolu Madonna',
    author: 'Sabahattin Ali',
    quote: 'Hayatta en güvendiğim insan da bana yabancıymış meğer.',
  },
  {
    id: 'turk_kmm_3',
    genre: 'turkish',
    difficulty: 'medium',
    book: 'Kürk Mantolu Madonna',
    author: 'Sabahattin Ali',
    quote: 'İçimizde saklı duran cevherleri ortaya çıkaracak bir ruha rastlamak ne büyük saadettir.',
  },
  {
    id: 'turk_kmm_4',
    genre: 'turkish',
    difficulty: 'hard',
    book: 'Kürk Mantolu Madonna',
    author: 'Sabahattin Ali',
    quote: 'Dünyada bana hiçbir şey, kendisini hayatının sonuna kadar bir kadına teslim eden bir adam kadar acıklı görünmemiştir.',
  },
  {
    id: 'turk_ky_1',
    genre: 'turkish',
    difficulty: 'medium',
    book: 'Kuyucaklı Yusuf',
    author: 'Sabahattin Ali',
    quote: 'İçimizdeki şeytan pek de kurnaz olmayan bir bahaneden ibarettir.',
  },

  // Ahmet Hamdi Tanpınar - Saatleri Ayarlama Enstitüsü & Huzur
  {
    id: 'turk_sae_1',
    genre: 'turkish',
    difficulty: 'easy',
    book: 'Saatleri Ayarlama Enstitüsü',
    author: 'Ahmet Hamdi Tanpınar',
    quote: 'Zamanın kendine has görünmez bir ritmi vardır.',
  },
  {
    id: 'turk_sae_2',
    genre: 'turkish',
    difficulty: 'medium',
    book: 'Saatleri Ayarlama Enstitüsü',
    author: 'Ahmet Hamdi Tanpınar',
    quote: 'En büyük yanılgımız, başkalarının da bizim gibi düşündüğünü sanmamızdır.',
  },
  {
    id: 'turk_sae_3',
    genre: 'turkish',
    difficulty: 'hard',
    book: 'Saatleri Ayarlama Enstitüsü',
    author: 'Ahmet Hamdi Tanpınar',
    quote: 'Saatin kendisi mekan, yürüyüşü zaman, ayarı ise insandır; bu üçü birleşmedikçe hayatın manası bulunamaz.',
  },
  {
    id: 'turk_hzr_1',
    genre: 'turkish',
    difficulty: 'hard',
    book: 'Huzur',
    author: 'Ahmet Hamdi Tanpınar',
    quote: 'Kendi kendimizle kalmak, hayatın bize sunduğu en güç ama ruhu en çok olgunlaştıran imtihandır.',
  },

  // Oğuz Atay - Tutunamayanlar & Tehlikeli Oyunlar
  {
    id: 'turk_tut_1',
    genre: 'turkish',
    difficulty: 'easy',
    book: 'Tutunamayanlar',
    author: 'Oğuz Atay',
    quote: 'Beni anlamıyorlardı, ben de anlatmaktan vazgeçtim.',
  },
  {
    id: 'turk_tut_2',
    genre: 'turkish',
    difficulty: 'medium',
    book: 'Tutunamayanlar',
    author: 'Oğuz Atay',
    quote: 'Kelimeler, albayım, bazı anlamlara gelmiyor ve insanı derin bir çaresizlikte bırakıyor.',
  },
  {
    id: 'turk_tut_3',
    genre: 'turkish',
    difficulty: 'hard',
    book: 'Tutunamayanlar',
    author: 'Oğuz Atay',
    quote: 'İnsan çok sevdiği bir şeyi kaybedince dünyanın bütün anlamını kaybettiğini sanır.',
  },
  {
    id: 'turk_to_1',
    genre: 'turkish',
    difficulty: 'hard',
    book: 'Tehlikeli Oyunlar',
    author: 'Oğuz Atay',
    quote: 'Ben iç dünyama çekildikçe dışarıdaki dünya bana daha yabancı ve anlaşılmaz görünmeye başladı.',
  },

  // Yaşar Kemal, Sait Faik, Peyami Safa, Cemil Meriç
  {
    id: 'turk_yk_1',
    genre: 'turkish',
    difficulty: 'medium',
    book: 'İnce Memed',
    author: 'Yaşar Kemal',
    quote: 'İnsanoğlu umutsuzluktan umut yaratabilen yeryüzündeki tek varlıktır.',
  },
  {
    id: 'turk_sf_1',
    genre: 'turkish',
    difficulty: 'easy',
    book: 'Semaver',
    author: 'Sait Faik Abasıyanık',
    quote: 'Bir insanı sevmekle başlar her şey.',
  },
  {
    id: 'turk_ps_1',
    genre: 'turkish',
    difficulty: 'hard',
    book: 'Dokuzuncu Hariciye Koğuşu',
    author: 'Peyami Safa',
    quote: 'Yalnızlık, insanın kendi iç sesini dinlemesini sağlayan acımasız fakat son derece öğretici bir aynadır.',
  },
  {
    id: 'turk_cm_1',
    genre: 'turkish',
    difficulty: 'legendary',
    book: 'Bu Ülke',
    author: 'Cemil Meriç',
    quote: 'Kamus bir milletin hafızasıdır, yani kendisidir; kamusa uzanan el o milletin namusuna uzanmıştır ve dilsizleşen toplumlar kendi öz değerlerini düşünme yeteneğini ebediyen kaybeder.',
  },

  // ==========================================
  // 4. ŞİİR & DİZELER (POETRY & VERSES)
  // ==========================================
  // Nazım Hikmet, Cemal Süreya, Attila İlhan, Orhan Veli, Mevlana, Yunus Emre
  {
    id: 'poet_cs_1',
    genre: 'poetry',
    difficulty: 'easy',
    book: 'Sevda Sözleri',
    author: 'Cemal Süreya',
    quote: 'Hayat kısa, kuşlar uçuyor.',
  },
  {
    id: 'poet_cs_2',
    genre: 'poetry',
    difficulty: 'medium',
    book: 'Sevda Sözleri',
    author: 'Cemal Süreya',
    quote: 'Seni düşünmek güzel şey, ümitli şey, dünyanın en güzel sesinden en güzel şarkıyı dinlemek gibi bir şey.',
  },
  {
    id: 'poet_ov_1',
    genre: 'poetry',
    difficulty: 'easy',
    book: 'Bütün Şiirleri',
    author: 'Orhan Veli Kanık',
    quote: 'Düşünme, arzu et sade! Bak, böceklerin de aklı yok.',
  },
  {
    id: 'poet_ov_2',
    genre: 'poetry',
    difficulty: 'medium',
    book: 'Bütün Şiirleri',
    author: 'Orhan Veli Kanık',
    quote: 'Ağlasam sesimi duyar mısınız mısralarımda; dokunabilir misiniz gözyaşlarıma ellerinizle?',
  },
  {
    id: 'poet_nh_1',
    genre: 'poetry',
    difficulty: 'medium',
    book: 'Henüz Vakit Varken Gülüm',
    author: 'Nazım Hikmet',
    quote: 'En güzel deniz henüz gidilmemiş olandır; en güzel çocuk henüz büyümedi.',
  },
  {
    id: 'poet_nh_2',
    genre: 'poetry',
    difficulty: 'legendary',
    book: 'Memleketimden İnsan Manzaraları',
    author: 'Nazım Hikmet',
    quote: 'Yürümek; yürümeyenleri arkada bırakıp yürümek, düşenleri kaldırıp yürümek, karanlığın üzerine basarak güneşe doğru durmaksızın yürümek insanın en asil görevidir.',
  },
  {
    id: 'poet_ai_1',
    genre: 'poetry',
    difficulty: 'medium',
    book: 'Ben Sana Mecburum',
    author: 'Attila İlhan',
    quote: 'Ben sana mecburum bilemezsin, adını mıh gibi aklımda tutuyorum.',
  },
  {
    id: 'poet_mev_1',
    genre: 'poetry',
    difficulty: 'medium',
    book: 'Mesnevi',
    author: 'Mevlana Celaleddin-i Rumi',
    quote: 'Dünle beraber gitti cancağızım, ne kadar söz varsa düne ait; şimdi yeni şeyler söylemek lazım.',
  },
  {
    id: 'poet_yun_1',
    genre: 'poetry',
    difficulty: 'easy',
    book: 'Divan',
    author: 'Yunus Emre',
    quote: 'İlim ilim bilmektir, ilim kendin bilmektir.',
  },

  // ==========================================
  // 5. BİLİM & EVREN (SCIENCE & COSMOS)
  // ==========================================
  // Carl Sagan - Kozmos & Soluk Mavi Nokta
  {
    id: 'sci_cs_1',
    genre: 'science',
    difficulty: 'easy',
    book: 'Kozmos',
    author: 'Carl Sagan',
    quote: 'Hepimiz yıldız tozundan meydana gelmiş canlılarız.',
  },
  {
    id: 'sci_cs_2',
    genre: 'science',
    difficulty: 'medium',
    book: 'Kozmos',
    author: 'Carl Sagan',
    quote: 'Bir kitap, bir insanın zihninden binlerce yıl öteye fısıldayan büyülü bir araçtır.',
  },
  {
    id: 'sci_cs_3',
    genre: 'science',
    difficulty: 'hard',
    book: 'Karanlık Bir Dünyada Bilimin Mum Işığı',
    author: 'Carl Sagan',
    quote: 'Olağanüstü iddialar her zaman olağanüstü kanıtlar gerektirir ve bilimin temel taşı eleştirel şüpheciliktir.',
  },
  {
    id: 'sci_cs_4',
    genre: 'science',
    difficulty: 'legendary',
    book: 'Soluk Mavi Nokta',
    author: 'Carl Sagan',
    quote: 'Şu noktaya tekrar bakın; o burası, evimiz, biziz. Sevdiğiniz, tanıdığınız, duyduğunuz herkes ve yaşamış olan her insan hayatını bu toz zerresinin üzerinde geçirdi.',
  },

  // Stephen Hawking, Richard Feynman, Yuval Noah Harari
  {
    id: 'sci_hwk_1',
    genre: 'science',
    difficulty: 'easy',
    book: 'Zamanın Kısa Tarihi',
    author: 'Stephen Hawking',
    quote: 'Zeka, değişime ayak uydurabilme yeteneğidir.',
  },
  {
    id: 'sci_hwk_2',
    genre: 'science',
    difficulty: 'hard',
    book: 'Büyük Tasarım',
    author: 'Stephen Hawking',
    quote: 'Felsefe bilimin hızına ayak uyduramadı; artık evrenin sırlarını çözme meşalesini kuramsal fizik taşıyor.',
  },
  {
    id: 'sci_fyn_1',
    genre: 'science',
    difficulty: 'medium',
    book: 'Fizik Yasaları Üzerine',
    author: 'Richard Feynman',
    quote: 'Bilim insanı bilmediğini açıkça kabul etmekten korkmayan ve sürekli sorgulayan kişidir.',
  },
  {
    id: 'sci_har_1',
    genre: 'science',
    difficulty: 'medium',
    book: 'Sapiens',
    author: 'Yuval Noah Harari',
    quote: 'Büyük insan topluluklarını bir arada tutan en güçlü bağ paylaşılan ortak kurgulardır.',
  },
  {
    id: 'sci_drw_1',
    genre: 'science',
    difficulty: 'legendary',
    book: 'Türlerin Kökeni',
    author: 'Charles Darwin',
    quote: 'Ne en güçlü olan tür hayatta kalır, ne de en zeki olan; hayatta kalan tek tür, çevre koşullarındaki değişime en hızlı ve etkin biçimde uyum sağlayabilendir.',
  },

  // ==========================================
  // 6. PSİKOLOJİ & VAROLUŞ (PSYCHOLOGY & MEANING)
  // ==========================================
  // Viktor Frankl - İnsanın Anlam Arayışı
  {
    id: 'psy_frk_1',
    genre: 'psychology',
    difficulty: 'easy',
    book: 'İnsanın Anlam Arayışı',
    author: 'Viktor Frankl',
    quote: 'Yaşamak için bir nedeni olan, her türlü nasıla katlanır.',
  },
  {
    id: 'psy_frk_2',
    genre: 'psychology',
    difficulty: 'medium',
    book: 'İnsanın Anlam Arayışı',
    author: 'Viktor Frankl',
    quote: 'İnsandan her şeyini alabilirsiniz, tek bir şey hariç: Olaylar karşısında takınacağı tavrı seçme özgürlüğü.',
  },
  {
    id: 'psy_frk_3',
    genre: 'psychology',
    difficulty: 'hard',
    book: 'İnsanın Anlam Arayışı',
    author: 'Viktor Frankl',
    quote: 'Bir durumun üstesinden artık gelemiyorsak, kendimizi değiştirme zorunluluğuyla karşı karşıyayız demektir.',
  },

  // Erich Fromm, Irvin Yalom, Carl Gustav Jung
  {
    id: 'psy_frm_1',
    genre: 'psychology',
    difficulty: 'easy',
    book: 'Sevme Sanatı',
    author: 'Erich Fromm',
    quote: 'Sevgi bir duygu değil, sürekli bir emektir.',
  },
  {
    id: 'psy_ylm_1',
    genre: 'psychology',
    difficulty: 'medium',
    book: 'Günübirlik Hayatlar',
    author: 'Irvin Yalom',
    quote: 'Ölüm düşüncesi insanı yok etmez, aksine onu kurtarıp hayatı anlamlandırır.',
  },
  {
    id: 'psy_jng_1',
    genre: 'psychology',
    difficulty: 'medium',
    book: 'Anılar, Düşler, Düşünceler',
    author: 'Carl Gustav Jung',
    quote: 'Dışarıya bakan rüya görür, kendi içine bakan ise gerçek anlamda uyanır.',
  },

  // ==========================================
  // 7. DİSTOPYA & GELECEK (DYSTOPIA)
  // ==========================================
  // George Orwell - 1984 (Çoklu Bölümler)
  {
    id: 'dys_1984_1',
    genre: 'dystopia',
    difficulty: 'easy',
    book: '1984',
    author: 'George Orwell',
    quote: 'Büyük Birader seni izliyor.',
  },
  {
    id: 'dys_1984_2',
    genre: 'dystopia',
    difficulty: 'medium',
    book: '1984',
    author: 'George Orwell',
    quote: 'Geçmişi denetleyen geleceği denetler; şimdiyi denetleyen ise geçmişi denetler.',
  },
  {
    id: 'dys_1984_3',
    genre: 'dystopia',
    difficulty: 'medium',
    book: '1984',
    author: 'George Orwell',
    quote: 'Özgürlük, iki kere ikinin dört ettiğini söyleyebilmektir; buna izin verilirse arkası gelir.',
  },
  {
    id: 'dys_1984_4',
    genre: 'dystopia',
    difficulty: 'hard',
    book: '1984',
    author: 'George Orwell',
    quote: 'Gerçek güç insan bedenleri üzerinde değil, insan zihni üzerinde mutlak kontrol kurabilmektir.',
  },
  {
    id: 'dys_1984_5',
    genre: 'dystopia',
    difficulty: 'legendary',
    book: '1984',
    author: 'George Orwell',
    quote: 'Savaş barıştır, özgürlük köleliktir, cehalet güçtür; kitlelerin hafızası silindiğinde iktidarın yalanları tartışmasız hakikat haline gelir ve direniş imkansızlaşır.',
  },

  // Aldous Huxley - Cesur Yeni Dünya, Ray Bradbury - Fahrenheit 451, José Saramago - Körlük
  {
    id: 'dys_hux_1',
    genre: 'dystopia',
    difficulty: 'medium',
    book: 'Cesur Yeni Dünya',
    author: 'Aldous Huxley',
    quote: 'İnsanların acı çekmeden köleleştirildiği bir dünya en tehlikeli hapishanedir.',
  },
  {
    id: 'dys_f451_1',
    genre: 'dystopia',
    difficulty: 'easy',
    book: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    quote: 'Kitapları yakmaktan daha büyük suç onları okumamaktır.',
  },
  {
    id: 'dys_f451_2',
    genre: 'dystopia',
    difficulty: 'hard',
    book: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    quote: 'Kitaplar bize sadece bilmek istediklerimizi değil, yüzleşmekten korktuğumuz gerçekleri de fısıldar.',
  },
  {
    id: 'dys_srm_1',
    genre: 'dystopia',
    difficulty: 'hard',
    book: 'Körlük',
    author: 'José Saramago',
    quote: 'Gözlerimizi kaybetmedik, biz zaten kördük; gördüğü halde gerçeğe göz yuman körlerdik.',
  },

  // ==========================================
  // 8. TARİH & STRATEJİ (HISTORY & STRATEGY)
  // ==========================================
  { id: 'strat_st_1', genre: 'strategy', difficulty: 'easy', book: 'Savaş Sanatı', author: 'Sun Tzu', quote: 'En büyük zafer, savaşmadan kazanılan zaferdir.' },
  { id: 'strat_st_2', genre: 'strategy', difficulty: 'medium', book: 'Savaş Sanatı', author: 'Sun Tzu', quote: 'Kendini ve düşmanını iyi tanırsan, yüz savaş yapsan bile tehlikeye düşmezsin.' },
  { id: 'strat_st_3', genre: 'strategy', difficulty: 'hard', book: 'Savaş Sanatı', author: 'Sun Tzu', quote: 'Stratejisi olmayan taktik yenilgi öncesi gürültüdür; taktiği olmayan strateji ise zafere giden en yavaş yoldur.' },
  { id: 'strat_mch_1', genre: 'strategy', difficulty: 'easy', book: 'Prens', author: 'Niccolò Machiavelli', quote: 'Korkulmak sevilmekten çok daha güvenlidir.' },
  { id: 'strat_mch_2', genre: 'strategy', difficulty: 'medium', book: 'Prens', author: 'Niccolò Machiavelli', quote: 'İnsanlar babalarının ölümünü, miraslarının kaybından çok daha çabuk unuturlar.' },
  { id: 'strat_mch_3', genre: 'strategy', difficulty: 'hard', book: 'Prens', author: 'Niccolò Machiavelli', quote: 'Bir hükümdar hem aslanın cesaretine hem de tilkinin kurnazlığına aynı anda sahip olmak zorundadır.' },
  { id: 'strat_hld_1', genre: 'strategy', difficulty: 'easy', book: 'Mukaddime', author: 'İbn Haldun', quote: 'Coğrafya kaderdir.' },
  { id: 'strat_hld_2', genre: 'strategy', difficulty: 'hard', book: 'Mukaddime', author: 'İbn Haldun', quote: 'Toplumlar da tıpkı insanlar gibi doğar, büyür, olgunlaşır, yaşlanır ve kaçınılmaz olarak çökerler.' },
  { id: 'strat_ilb_1', genre: 'strategy', difficulty: 'easy', book: 'Bir Ömür Nasıl Yaşanır?', author: 'İlber Ortaylı', quote: 'Cahil kalmak, insanın kendine yapabileceği en büyük haksızlıktır.' },
  { id: 'strat_ilb_2', genre: 'strategy', difficulty: 'medium', book: 'Bir Ömür Nasıl Yaşanır?', author: 'İlber Ortaylı', quote: 'Okumak sadece bilgi edinmek değil, insanı kendi dar kalıplarından kurtarma eylemidir.' },
  { id: 'strat_atk_1', genre: 'strategy', difficulty: 'hard', book: 'Nutuk', author: 'Mustafa Kemal Atatürk', quote: 'Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır.' },

  // ==========================================
  // 9. DÜNYA TİYATROSU & TRAJEDİ (DRAMA & THEATER)
  // ==========================================
  { id: 'drm_shk_1', genre: 'drama', difficulty: 'easy', book: 'Hamlet', author: 'William Shakespeare', quote: 'Olmak ya da olmamak, işte bütün mesele bu.' },
  { id: 'drm_shk_2', genre: 'drama', difficulty: 'medium', book: 'Hamlet', author: 'William Shakespeare', quote: 'Yeryüzünde ve gökyüzünde, felsefenizin hayal bile edemeyeceği çok daha fazla şey vardır.' },
  { id: 'drm_shk_3', genre: 'drama', difficulty: 'easy', book: 'Romeo ve Juliet', author: 'William Shakespeare', quote: 'Yara almamış olan, yarayla alay eder.' },
  { id: 'drm_shk_4', genre: 'drama', difficulty: 'hard', book: 'Macbeth', author: 'William Shakespeare', quote: 'Hayat yürüyen bir gölgedir; sahnede çırpınıp duran ve bir daha duyulmayan zavallı bir oyuncudur.' },
  { id: 'drm_shk_5', genre: 'drama', difficulty: 'legendary', book: 'Kral Lear', author: 'William Shakespeare', quote: 'Biz doğduğumuz zaman ağlarız; çünkü delilerle dolu bu koca dünya sahnesine çıkmışızdır ve kaderin rüzgarları bizi oradan oraya savurur.' },
  { id: 'drm_gth_1', genre: 'drama', difficulty: 'easy', book: 'Faust', author: 'Johann Wolfgang von Goethe', quote: 'İnsan çabaladığı sürece hata yapmaktan kaçınamaz.' },
  { id: 'drm_gth_2', genre: 'drama', difficulty: 'hard', book: 'Faust', author: 'Johann Wolfgang von Goethe', quote: 'Özgürlük de hayat da her gün yeniden fethedilmek zorundadır.' },
  { id: 'drm_chv_1', genre: 'drama', difficulty: 'easy', book: 'Vanya Dayı', author: 'Anton Çehov', quote: 'İnsanda her şey güzel olmalı; yüzü, giysisi, ruhu ve düşünceleri.' },
  { id: 'drm_bck_1', genre: 'drama', difficulty: 'easy', book: 'Godot\'yu Beklerken', author: 'Samuel Beckett', quote: 'Hepimiz deli doğarız, bazılarımız öyle kalır.' },
  { id: 'drm_bck_2', genre: 'drama', difficulty: 'medium', book: 'Godot\'yu Beklerken', author: 'Samuel Beckett', quote: 'Denedin, yenildin; olsun, yine dene, yine yenil, daha güzel yenil.' },

  // ==========================================
  // 10. TASAVVUF & DOĞU BİLGELİĞİ (MYSTICISM & EASTERN WISDOM)
  // ==========================================
  { id: 'myst_lao_1', genre: 'mysticism', difficulty: 'easy', book: 'Tao Te Ching', author: 'Lao Tzu', quote: 'Bin millik bir yolculuk tek bir adımla başlar.' },
  { id: 'myst_lao_2', genre: 'mysticism', difficulty: 'medium', book: 'Tao Te Ching', author: 'Lao Tzu', quote: 'Başkalarını bilen kimse bilgili, kendini bilen kimse ise aydınlanmış kişidir.' },
  { id: 'myst_lao_3', genre: 'mysticism', difficulty: 'hard', book: 'Tao Te Ching', author: 'Lao Tzu', quote: 'Su gibi olun; su yumuşaktır fakat en sert kayaları bile sabırla aşındırır.' },
  { id: 'myst_cnf_1', genre: 'mysticism', difficulty: 'easy', book: 'Konuşmalar (Analektler)', author: 'Konfüçyüs', quote: 'Hiçbir şey yapmayan insan hata yapmaz.' },
  { id: 'myst_cnf_2', genre: 'mysticism', difficulty: 'medium', book: 'Konuşmalar (Analektler)', author: 'Konfüçyüs', quote: 'Karanlığa küfredeceğine kalk bir mum yak.' },
  { id: 'myst_cbr_1', genre: 'mysticism', difficulty: 'easy', book: 'Ermiş', author: 'Halil Cibran', quote: 'Güzellik, sonsuzluğun bir aynada kendine bakışıdır.' },
  { id: 'myst_cbr_2', genre: 'mysticism', difficulty: 'medium', book: 'Ermiş', author: 'Halil Cibran', quote: 'Sevgi size bir taç giydirdiği gibi, sizi çarmıha germesini de bilir.' },
  { id: 'myst_cbr_3', genre: 'mysticism', difficulty: 'hard', book: 'Kırık Kanatlar', author: 'Halil Cibran', quote: 'Keder varlığınızı ne kadar derinden oyarsa, içine alabileceği sevinç de o kadar büyük olur.' },
  { id: 'myst_sms_1', genre: 'mysticism', difficulty: 'medium', book: 'Makalat', author: 'Şems-i Tebrizi', quote: 'Düzenim bozulur diye korkma; nereden biliyorsun hayatın altının üstünden daha iyi olmadığını?' },
  { id: 'myst_att_1', genre: 'mysticism', difficulty: 'hard', book: 'Mantıku\'t-Tayr (Kuşların Dili)', author: 'Feridüddin Attar', quote: 'Arayan kişi aradığının ta kendisi olduğunu anladığı gün asıl vuslata erer.' },

  // ==========================================
  // 11. POLİSİYE & GİZEM (MYSTERY & DETECTIVE)
  // ==========================================
  { id: 'mys_sh_1', genre: 'mystery', difficulty: 'easy', book: 'Sherlock Holmes: Dörtlerin İmzası', author: 'Arthur Conan Doyle', quote: 'İmkansızı elediğinizde geriye kalan ne kadar olasılık dışı olursa olsun gerçektir.' },
  { id: 'mys_sh_2', genre: 'mystery', difficulty: 'medium', book: 'Sherlock Holmes: Kızıl Dosya', author: 'Arthur Conan Doyle', quote: 'Sen görüyorsun ama gözlemlemiyorsun; ayrım işte tam olarak buradadır.' },
  { id: 'mys_sh_3', genre: 'mystery', difficulty: 'hard', book: 'Baskerville\'lerin Köpeği', author: 'Arthur Conan Doyle', quote: 'Küçük ayrıntılar her zaman en önemli ve belirleyici ipuçlarını içinde saklar.' },
  { id: 'mys_ac_1', genre: 'mystery', difficulty: 'easy', book: 'Doğu Ekspresinde Cinayet', author: 'Agatha Christie', quote: 'İmkansız olan şey gerçekleşemez; öyleyse görünen imkansızlık bir yanılsamadır.' },
  { id: 'mys_ac_2', genre: 'mystery', difficulty: 'medium', book: 'On Küçük Zenci', author: 'Agatha Christie', quote: 'Vicdan azabı, insanın kendi içinde taşıdığı en acımasız cellattır.' },
  { id: 'mys_poe_1', genre: 'mystery', difficulty: 'easy', book: 'Kuzgun', author: 'Edgar Allan Poe', quote: 'Gözlerimin gördüğü her şey sadece bir düşün içindeki düşten ibaretti.' },
  { id: 'mys_poe_2', genre: 'mystery', difficulty: 'hard', book: 'Morgue Sokağı Cinayeti', author: 'Edgar Allan Poe', quote: 'Zihinsel çözümleme yeteneği, sıradan gözlem gücünden çok daha derin ve gizemli bir sanattır.' },
  { id: 'mys_au_1', genre: 'mystery', difficulty: 'medium', book: 'İstanbul Hatırası', author: 'Ahmet Ümit', quote: 'Tarih sadece geçmişin hikayesi değil, bugünün de aynasıdır.' },

  // ==========================================
  // 12. MEKTUP, GÜNLÜK & BİYOGRAFİ (LETTERS & MEMOIRS)
  // ==========================================
  { id: 'let_kfk_1', genre: 'letters', difficulty: 'easy', book: 'Milena\'ya Mektuplar', author: 'Franz Kafka', quote: 'Yanımda yürüyordun Milena, düşünsene, yanımdaydın.' },
  { id: 'let_kfk_2', genre: 'letters', difficulty: 'medium', book: 'Milena\'ya Mektuplar', author: 'Franz Kafka', quote: 'Seni sevmek, kendimi uçsuz bucaksız bir uçurumun kenarında bulmak gibi.' },
  { id: 'let_kfk_3', genre: 'letters', difficulty: 'hard', book: 'Babaya Mektup', author: 'Franz Kafka', quote: 'Senin yanındayken konuşma yeteneğimi bütünüyle kaybediyordum çünkü senin otoriten karşısında her sözcük anlamsızlaşıyordu.' },
  { id: 'let_wlf_1', genre: 'letters', difficulty: 'easy', book: 'Kendine Ait Bir Oda', author: 'Virginia Woolf', quote: 'Para kazanın ve kendinize ait bir oda edinin.' },
  { id: 'let_wlf_2', genre: 'letters', difficulty: 'hard', book: 'Kendine Ait Bir Oda', author: 'Virginia Woolf', quote: 'Bir kadın eğer kurmaca yazacaksa paraya ve kendine ait kilitli bir odaya sahip olmalıdır.' },
  { id: 'let_wlf_3', genre: 'letters', difficulty: 'medium', book: 'Dalgalar', author: 'Virginia Woolf', quote: 'Kelimeler bizi birbirimize bağlayan tek köprüdür.' },
  { id: 'let_zwg_1', genre: 'letters', difficulty: 'hard', book: 'Dünün Dünyası', author: 'Stefan Zweig', quote: 'Bizler hiçbir kuşağın yaşamadığı kadar büyük bir çöküşe ve felakete tanıklık ettik.' },
  { id: 'let_frk_1', genre: 'letters', difficulty: 'easy', book: 'Genç Bir Kızın Günlüğü', author: 'Anne Frank', quote: 'Her şeye rağmen insanların kalplerinin hala iyi olduğuna inanıyorum.' },

  // ==========================================
  // 13. DOĞA & İNZİVA (NATURE & SOLITUDE)
  // ==========================================
  { id: 'nat_thr_1', genre: 'nature', difficulty: 'easy', book: 'Walden / Ormanda Yaşam', author: 'Henry David Thoreau', quote: 'Ormana gittim çünkü bilinçli yaşamak istiyordum.' },
  { id: 'nat_thr_2', genre: 'nature', difficulty: 'medium', book: 'Walden / Ormanda Yaşam', author: 'Henry David Thoreau', quote: 'Basitleştirin, hayatınızı basitleştirin; üç öğün yerine tek öğün yiyin.' },
  { id: 'nat_thr_3', genre: 'nature', difficulty: 'hard', book: 'Walden / Ormanda Yaşam', author: 'Henry David Thoreau', quote: 'İnsanların büyük çoğunluğu sessiz bir çaresizlik içinde yaşar ve mezara gider.' },
  { id: 'nat_emr_1', genre: 'nature', difficulty: 'easy', book: 'Kendine Güven', author: 'Ralph Waldo Emerson', quote: 'Kendine inanmak, başarının ilk sırrıdır.' },
  { id: 'nat_emr_2', genre: 'nature', difficulty: 'medium', book: 'Doğa', author: 'Ralph Waldo Emerson', quote: 'Ormanlarda insan ebedi bir gençliğe ve dinginliğe kavuşur.' },
  { id: 'nat_lnd_1', genre: 'nature', difficulty: 'easy', book: 'Vahşetin Çağrısı', author: 'Jack London', quote: 'Doğa hiçbir zaman insan yapımı kanunlara boyun eğmez.' },
  { id: 'nat_lnd_2', genre: 'nature', difficulty: 'medium', book: 'Martin Eden', author: 'Jack London', quote: 'Yaşamak istemek, sadece kitapların vadettiği güzellikleri dünyada bulabilmektir.' },
  { id: 'nat_mlv_1', genre: 'nature', difficulty: 'medium', book: 'Moby Dick', author: 'Herman Melville', quote: 'Bana sadece bir kelime söyleyin: İnsan neden hep bilinmeyenin peşinden koşar?' },

  // ==========================================
  // 14. MİTOLOJİ & BÜYÜLÜ GERÇEKÇİLİK (MYTHOLOGY & MAGICAL REALISM)
  // ==========================================
  { id: 'myt_hom_1', genre: 'mythology', difficulty: 'easy', book: 'İlyada', author: 'Homeros', quote: 'Öfkeyi söyle tanrıça, Akhilleus\'un yıkıcı öfkesini.' },
  { id: 'myt_hom_2', genre: 'mythology', difficulty: 'medium', book: 'Odysseia', author: 'Homeros', quote: 'Kaderin ağları sabırla örülür ve eninde sonunda hak yerini bulur.' },
  { id: 'myt_dnt_1', genre: 'mythology', difficulty: 'easy', book: 'İlahi Komedya: Cehennem', author: 'Dante Alighieri', quote: 'Buraya girenler, her türlü umudu geride bıraksın.' },
  { id: 'myt_dnt_2', genre: 'mythology', difficulty: 'hard', book: 'İlahi Komedya: Cehennem', author: 'Dante Alighieri', quote: 'Hayat yolculuğumuzun ortasında kendimi karanlık bir ormanda buldum çünkü doğru yolu kaybetmiştim.' },
  { id: 'myt_brg_1', genre: 'mythology', difficulty: 'medium', book: 'Ficciones / Kurgular', author: 'Jorge Luis Borges', quote: 'Evren, başkalarının kütüphane adını verdiği sonsuz bir labirenttir.' },
  { id: 'myt_brg_2', genre: 'mythology', difficulty: 'hard', book: 'Alef', author: 'Jorge Luis Borges', quote: 'Alef, mekanın bütün noktalarını aynı anda içinde barındıran tek bir gizemli noktadır.' },
  { id: 'myt_clv_1', genre: 'mythology', difficulty: 'medium', book: 'Görünmez Kentler', author: 'Italo Calvino', quote: 'Bir kenti anlamak, orada yaşayanların hayallerini ve özlemlerini dinlemektir.' },
  { id: 'myt_mrk_1', genre: 'mythology', difficulty: 'medium', book: 'Sahilde Kafka', author: 'Haruki Murakami', quote: 'Bazen kader küçük bir kum fırtınası gibidir; kaçtıkça seni içine çeker.' }
];
