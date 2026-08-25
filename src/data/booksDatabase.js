// Master Books Database (LibrisMind Literary Corpus)
// Comprehensive book metadata, author bios, historical context, summaries, and extensive chapter passages

export const BOOKS_DATABASE = [
  // =========================================================================
  // 1. FELSEFE & BİLGELİK (PHILOSOPHY)
  // =========================================================================
  {
    id: 'kendime-dusunceler',
    title: 'Kendime Düşünceler',
    originalTitle: 'Ta Eis Heauton (Τὰ εἰς ἑαυτόν)',
    author: 'Marcus Aurelius',
    authorBio: 'Roma İmparatoru ve Stoacı filozof. "Filozof Hükümdar" olarak tarihe geçmiş, güç ve iktidarın zirvesindeyken erdemli ve sade yaşamın felsefesini savunmuştur.',
    authorBirthDeath: 'MS 121 - MS 180',
    year: 'MS 180',
    genre: 'philosophy',
    secondaryGenres: ['classics', 'essay'],
    coverBg: 'from-[#8C5E3C] to-[#5C3D26]',
    summary: 'Roma İmparatoru Marcus Aurelius\'un Tuna boylarındaki askeri seferler sırasında çadırında yalnızca kendi nefsiyle hesaplaşmak için kaleme aldığı kişisel notlarıdır. Stoacı ahlakın, geçiciliğin, öfke kontrolünün ve kaderi kabullenmenin (Amor Fati) en berrak manifestosudur.',
    keyThemes: ['Stoacılık', 'Kaderi Sevmek (Amor Fati)', 'Zamanın Geçiciliği', 'İçsel Huzur'],
    historicalContext: 'Roma İmparatorluğu\'nun en güçlü döneminde, savaşlar ve salgın hastalıklar sırasında yazılmış, yüzyıllar boyu devlet adamlarına ve düşünürlere rehberlik etmiştir.',
    passages: [
      { id: 'kd_1', difficulty: 'easy', quote: 'Ruhun, düşüncelerinin rengine bürünür.' },
      { id: 'kd_2', difficulty: 'easy', quote: 'Sabah uyandığında nefes almanın ayrıcalığını hatırla.' },
      { id: 'kd_3', difficulty: 'medium', quote: 'Dış dünya seni üzemez; seni üzen şey ona verdiğin kendi yargılarındır.' },
      { id: 'kd_4', difficulty: 'medium', quote: 'Hayatın amacı çoğunluğun tarafında olmak değil, akıl ve erdemin yanında durmaktır.' },
      { id: 'kd_5', difficulty: 'hard', quote: 'Güne başlarken kendine şunu söyle: Bugün nankör, küstah, hilekar ve kıskanç insanlarla karşılaşacağım çünkü onlar iyiyi ve kötüyü ayırt edemezler.' },
      { id: 'kd_6', difficulty: 'legendary', quote: 'Zaman sonsuz bir akıntıdır; her olay bir an için su yüzüne çıkar, ardından sürüklenip gider ve yerini bir başkasına bırakır.' },
      { id: 'kd_7', difficulty: 'medium', quote: 'Kısa bir ömür sana bağışlandı; onu başkalarının ne düşündüğünü hesaplayarak tüketme.' },
      { id: 'kd_8', difficulty: 'hard', quote: 'Evren değişimdir; hayatımız ise düşüncelerimizin inşa ettiği bir yapıdır.' },
    ]
  },
  {
    id: 'ahlak-mektuplari',
    title: 'Ahlak Mektupları',
    originalTitle: 'Epistulae Morales ad Lucilium',
    author: 'Seneca',
    authorBio: 'Romalı devlet adamı, hatip, tragedya yazarı ve Stoacı felsefenin en büyük temsilcilerinden biri.',
    authorBirthDeath: 'MÖ 4 - MS 65',
    year: 'MS 65',
    genre: 'philosophy',
    secondaryGenres: ['letters', 'classics'],
    coverBg: 'from-[#C85A32] to-[#78350F]',
    summary: 'Seneca\'nın dostu Lucilius\'a yazdığı 124 mektuptan oluşur. Zamanın doğru kullanımı, ölüm korkusunun yenilmesi, dostluk, bilgelik ve zenginliğin getirdiği ruhsal tuzaklar üzerine pratik yaşam dersleri sunar.',
    keyThemes: ['Zaman Yönetimi', 'Ölüm Bilinci', 'Sade Yaşam', 'Felsefi Dostluk'],
    historicalContext: 'İmparator Neron döneminde yazılmış, insan ruhunun baskı ve belirsizlik altındaki dayanıklılığını felsefi derinlikle ele almıştır.',
    passages: [
      { id: 'am_1', difficulty: 'easy', quote: 'Zamanı iyi kullanan insan için ömür uzundur.' },
      { id: 'am_2', difficulty: 'easy', quote: 'Korkularımız gerçek acılarımızdan daima daha fazladır.' },
      { id: 'am_3', difficulty: 'medium', quote: 'Hangi limana doğru yelken açtığını bilmeyen bir gemi için hiçbir rüzgar elverişli değildir.' },
      { id: 'am_4', difficulty: 'hard', quote: 'Bize verilen zaman kısa değildir; tersine biz onun büyük bir kısmını gereksiz ve faydasız işlerle harcayarak heba ederiz.' },
      { id: 'am_5', difficulty: 'legendary', quote: 'Bilge insan talihin getirdiği hiçbir hediyeye sevinmez ve hiçbir felakete yenilmez; çünkü o yalnızca kendi iç huzuruna ve erdemine güvenir.' },
      { id: 'am_6', difficulty: 'medium', quote: 'Başkasının kölesi olmadan önce kendi hırslarının efendisi olmayı öğren.' },
    ]
  },
  {
    id: 'boyle-buyurdu-zerdust',
    title: 'Böyle Buyurdu Zerdüşt',
    originalTitle: 'Also sprach Zarathustra',
    author: 'Friedrich Nietzsche',
    authorBio: '19. yüzyılın en sarsıcı Alman filozofu, şair ve kültür eleştirmeni. Üstinsan, Güç İstenci ve Bengi Dönüş kavramlarının mimarı.',
    authorBirthDeath: '1844 - 1900',
    year: '1883',
    genre: 'philosophy',
    secondaryGenres: ['poetry', 'classics'],
    coverBg: 'from-[#1C1917] to-[#451A03]',
    summary: 'Nietzsche\'nin başyapıtı olan lirik ve felsefi bir anlatıdır. Zerdüşt dağdaki 10 yıllık yalnızlığından inerek insanlara geleneksel ahlakın ötesine geçmeyi, sürü psikolojisini reddetmeyi ve "Üstinsan" idealini müjdeler.',
    keyThemes: ['Üstinsan (Übermensch)', 'Kendi Kendini Aşmak', 'Bengi Dönüş', 'Yaratıcı Yıkım'],
    historicalContext: 'Batı metafiziğini ve Hristiyan ahlakını kökten sarsan, modern varoluşçuluğun ve postmodernizmin öncüsü kabul edilen kült metin.',
    passages: [
      { id: 'bbz_1', difficulty: 'easy', quote: 'Uçuruma uzun süre bakarsan, uçurum da sana bakar.' },
      { id: 'bbz_2', difficulty: 'easy', quote: 'Beni öldürmeyen her darbe beni güçlendirir.' },
      { id: 'bbz_3', difficulty: 'medium', quote: 'Gök gürültüsüyle gelen fikirler dünyayı yönetir; sessizce atılan adımlar fırtınayı doğurur.' },
      { id: 'bbz_4', difficulty: 'hard', quote: 'Kendi alevinizde yanmaya hazır olmalısınız; önce küle dönüşmeden nasıl yeniden doğabilirsiniz?' },
      { id: 'bbz_5', difficulty: 'legendary', quote: 'Yükseklere tırmanmak isteyen insan yalnızlığın sert rüzgarlarına göğüs germelidir; çünkü zirveler kalabalıkların değil, sadece kartalların meskenidir.' },
      { id: 'bbz_6', difficulty: 'medium', quote: 'İnsan, hayvan ile Üstinsan arasına gerilmiş tehlikeli bir iptir; uçurumun üzerinde asılı bir geçiştir.' },
    ]
  },
  {
    id: 'sisifos-soyleni',
    title: 'Sisifos Söyleni',
    originalTitle: 'Le Mythe de Sisyphe',
    author: 'Albert Camus',
    authorBio: 'Fransız yazar, filozof ve Nobel Edebiyat Ödülü sahibi. Absürdizm (Uyumsuzluk) akımının öncüsü.',
    authorBirthDeath: '1913 - 1960',
    year: '1942',
    genre: 'philosophy',
    secondaryGenres: ['essay', 'classics'],
    coverBg: 'from-[#374151] to-[#1F2937]',
    summary: 'Camus, hayatın anlamsızlığı ve absürdü karşısında insanın intihar etmek yerine başkaldırmasını savunur. Tanrılar tarafından sonsuza dek bir kayayı dağın zirvesine yuvarlamaya mahkum edilen Sisifos, cezasının ve emeğinin bilincinde olarak mutlu kabul edilir.',
    keyThemes: ['Absürd (Uyumsuzluk)', 'Başkaldırı', 'Bilinçli Varoluş', 'Özgürlük'],
    historicalContext: 'II. Dünya Savaşı\'nın yıkımı ortasında yayımlanmış, 20. yüzyıl varoluşçu düşüncesinin temel taşlarından biri haline gelmiştir.',
    passages: [
      { id: 'ss_1', difficulty: 'easy', quote: 'Sisifos\'u mutlu olarak hayal etmek gerekir.' },
      { id: 'ss_2', difficulty: 'medium', quote: 'Gerçekten önemli olan tek bir felsefe sorunu vardır, o da intihardır.' },
      { id: 'ss_3', difficulty: 'hard', quote: 'Kışın en soğuk gününde, içimde yenilmez ve sarsılmaz bir yaz mevsimi olduğunu keşfettim.' },
      { id: 'ss_4', difficulty: 'legendary', quote: 'Kayanın zirveye her itilişi, insanın kendi kaderini ellerine alması ve anlamsızlığa karşı asilce direnmesidir.' },
    ]
  },

  // =========================================================================
  // 2. TÜRK EDEBİYATI (TURKISH LITERATURE)
  // =========================================================================
  {
    id: 'kurk-mantolu-madonna',
    title: 'Kürk Mantolu Madonna',
    originalTitle: 'Kürk Mantolu Madonna',
    author: 'Sabahattin Ali',
    authorBio: 'Türk edebiyatının en güçlü gerçekçi ve toplumcu yazarlarından biri. Roman, öykü ve şiirleriyle insan ruhunun derinliklerini eşsiz bir yalınlıkla anlatmıştır.',
    authorBirthDeath: '1907 - 1948',
    year: '1943',
    genre: 'turkish',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#9A3412] to-[#431407]',
    summary: 'İçine kapanık memur Raif Efendi\'nin gençlik yıllarında Berlin\'de bir sanat galerisinde Maria Puder\'in otoportresiyle başlayan ve hayatını sonsuza dek değiştiren tutkulu, trajik aşkının hikayesidir.',
    keyThemes: ['Yalnızlık', 'Ruhsal Bağlantı', 'İçsel Sessizlik', 'Toplumsal Yabancılaşma'],
    historicalContext: '1940\'lı yıllarda Hakikat gazetesinde tefrika edilmiş, yıllar geçtikçe Türk edebiyatının en çok okunan kült romanı haline gelmiştir.',
    passages: [
      { id: 'kmm_1', difficulty: 'easy', quote: 'İçimizde şeytan yok; içimizde aciz ve tembel bir ruh var.' },
      { id: 'kmm_2', difficulty: 'medium', quote: 'Dünyada bana hiçbir şey, yaşama sevinci kadar kıymetli görünmüyordu.' },
      { id: 'kmm_3', difficulty: 'hard', quote: 'Bir insanın diğer bir insanı bütünüyle anlaması kadar dünyada imkansız ve mucizevi bir şey yoktur.' },
      { id: 'kmm_4', difficulty: 'legendary', quote: 'Hayatta hiçbir zaman bir insana bu kadar çok bağlanmamalıydım; çünkü insanın bir başkasına bağlanması kendi özgürlüğünü kendi elleriyle teslim etmesidir.' },
      { id: 'kmm_5', difficulty: 'medium', quote: 'Hayatım boyunca kimseye içimi dökemedim; çünkü insanların beni anlamayacağından emindim.' },
    ]
  },
  {
    id: 'tutunamayanlar',
    title: 'Tutunamayanlar',
    originalTitle: 'Tutunamayanlar',
    author: 'Oğuz Atay',
    authorBio: 'Modern Türk romanının öncüsü ve postmodern edebiyatın kurucusu. Mühendislik ve edebiyatı birleştirerek Türk aydınının trajedisini kaleme almıştır.',
    authorBirthDeath: '1934 - 1977',
    year: '1972',
    genre: 'turkish',
    secondaryGenres: ['modernist'],
    coverBg: 'from-[#1E293B] to-[#0F172A]',
    summary: 'İntihar eden arkadaşı Selim Işık\'ın izini süren Turgut Özben\'in, burjuva düzenine ve sığ toplumsal normlara ayak uyduramayan "tutunamayanların" iç dünyasını keşfetme serüvenidir.',
    keyThemes: ['Tutunamayanlar', 'Aydın Yabancılaşması', 'İç Konuşma', 'Sarkazm'],
    historicalContext: 'TRT Roman Ödülü kazanmış, Türk edebiyatında bilinçakışı, parodi ve çok sesliliğin miladı kabul edilmiştir.',
    passages: [
      { id: 'ttn_1', difficulty: 'easy', quote: 'Kelimeler albayım, bazı anlamlara gelmiyor.' },
      { id: 'ttn_2', difficulty: 'medium', quote: 'Bizi anlamadılar Selim; bizi hiçbir zaman anlamayacaklar.' },
      { id: 'ttn_3', difficulty: 'hard', quote: 'Korku öyle sinsi bir duygudur ki, insanı henüz gerçekleşmemiş felaketlerin esiri haline getirir.' },
      { id: 'ttn_4', difficulty: 'legendary', quote: 'Bütün hayatımı başkalarının çizdiği dar kalıpların içine sığmaya çalışarak tükettim; oysa ben sadece kendi gökyüzümde kaybolmak istiyordum.' },
      { id: 'ttn_5', difficulty: 'medium', quote: 'Ben iç dünyama çekildikçe dışarıdaki dünya daha da anlamsızlaşıyor.' },
    ]
  },
  {
    id: 'huzur',
    title: 'Huzur',
    originalTitle: 'Huzur',
    author: 'Ahmet Hamdi Tanpınar',
    authorBio: 'Şair, romancı, denemeci ve edebiyat tarihçisi. Doğu-Batı sentezi, zaman, musiki ve rüya estetiğinin büyük ustası.',
    authorBirthDeath: '1901 - 1962',
    year: '1949',
    genre: 'turkish',
    secondaryGenres: ['modernist', 'classics'],
    coverBg: 'from-[#588157] to-[#283618]',
    summary: 'II. Dünya Savaşı\'nın arifesinde İstanbul\'da geçen roman; Mümtaz, Nuran, İhsan ve Suat karakterleri üzerinden Doğu-Batı medeniyet krizini, Türk musikisini ve derin bir aşkı işler.',
    keyThemes: ['Doğu-Batı İkilemi', 'İstanbul Estetiği', 'Zaman Felsefesi', 'Türk Musikisi'],
    historicalContext: 'Modern Türk edebiyatının en yetkin başyapıtlarından biri olarak kabul edilir.',
    passages: [
      { id: 'hzr_1', difficulty: 'easy', quote: 'Ne içindeyim zamanın, ne de büsbütün dışında.' },
      { id: 'hzr_2', difficulty: 'medium', quote: 'Saat, insanın kendi varoluşunu ve faniliğini hatırlatan en acımasız aynadır.' },
      { id: 'hzr_3', difficulty: 'hard', quote: 'Geçmiş zaman, ruhun derinliklerinde biriktirdiği en asil ve hüzünlü hatıralar hazinesidir.' },
      { id: 'hzr_4', difficulty: 'legendary', quote: 'Musiki öyle bir dildir ki, kelimelerin bittiği ve suskunluğun başladığı yerde insan ruhunun en mahrem köşelerine tercüman olur.' },
    ]
  },
  {
    id: 'ince-memed',
    title: 'İnce Memed (1-4 Cilt)',
    originalTitle: 'İnce Memed',
    author: 'Yaşar Kemal',
    authorBio: 'Dünya edebiyatının en büyük epik anlatıcılarından, Nobel adayı Türk romancı. Çukurova insanının destansı direnişini ölümsüzleştirmiştir.',
    authorBirthDeath: '1923 - 2015',
    year: '1955',
    genre: 'turkish',
    secondaryGenres: ['classics', 'epic_fantasy'],
    coverBg: 'from-[#D97706] to-[#78350F]',
    summary: 'Çukurova\'da Abdi Ağa\'nın zulmüne dayanamayarak dağa çıkan ve yoksul köylülerin efsanevi kurtarıcısına dönüşen İnce Memed\'in destansı başkaldırısıdır.',
    keyThemes: ['Adalet ve Başkaldırı', 'Çukurova Doğası', 'Eşkıyalık Miti', 'Halk Dayanışması'],
    historicalContext: '40\'tan fazla dile çevrilmiş, dünya edebiyatında çağdaş bir Robin Hood destanı olarak kabul görmüştür.',
    passages: [
      { id: 'im_1', difficulty: 'easy', quote: 'Zulmün olduğu yerde direniş haktır.' },
      { id: 'im_2', difficulty: 'medium', quote: 'İnsan dediğin bir topraktır; suyu sevgidir, güneşi ise adalettir.' },
      { id: 'im_3', difficulty: 'hard', quote: 'Bir insanın zulme boyun eğmesi, sadece kendi onurunu değil insanlığın ortak haysiyetini de çiğnemesidir.' },
    ]
  },

  // =========================================================================
  // 3. DÜNYA KLASİKLERİ (WORLD CLASSICS)
  // =========================================================================
  {
    id: 'suc-ve-ceza',
    title: 'Suç ve Ceza',
    originalTitle: 'Prestupleniye i Nakazaniye (Преступление и наказание)',
    author: 'Fyodor Dostoyevski',
    authorBio: 'İnsan psikolojisinin ve vicdan azabının gelmiş geçmiş en büyük romancısı.',
    authorBirthDeath: '1821 - 1881',
    year: '1866',
    genre: 'classics',
    secondaryGenres: ['psychology', 'philosophy'],
    coverBg: 'from-[#991B1B] to-[#450A0A]',
    summary: 'Yoksul üniversite öğrencisi Raskolnikov\'un "olağanüstü insanlar ahlak kurallarının üzerindedir" teorisini kanıtlamak için tefeci kadını öldürmesi ve ardından gelen amansız vicdan azabı ve kurtuluş arayışıdır.',
    keyThemes: ['Suç ve Vicdan', 'Üstinsan Yanılsaması', 'Kurtuluş ve Kefaret', 'Psikolojik Çözümleme'],
    historicalContext: 'Psikolojik gerçekçiliğin zirvesi sayılan, dünya edebiyatının tartışmasız en büyük romanlarından biridir.',
    passages: [
      { id: 'sc_1', difficulty: 'easy', quote: 'Yeni bir adım atmak, yeni bir kelime söylemek insanların en çok korktuğu şeydir.' },
      { id: 'sc_2', difficulty: 'medium', quote: 'Karanlık düşünceler, insanın ruhuna saplanan zehirli bir hançer gibidir.' },
      { id: 'sc_3', difficulty: 'hard', quote: 'İnsan sadece acılarını saymaktan hoşlanır, mutluluklarını ise hiç hesap etmez; oysa dikkat etse her anında bir sevinç gizlidir.' },
      { id: 'sc_4', difficulty: 'legendary', quote: 'Her şeyden önce ben bir insanım ve benim de herkes gibi acı çekmeye, yanılmaya ve kendi ruhumu yeniden inşa etmeye hakkım vardır.' },
    ]
  },
  {
    id: 'savas-ve-baris',
    title: 'Savaş ve Barış',
    originalTitle: 'Voyna i Mir (Война и мир)',
    author: 'Lev Tolstoy',
    authorBio: 'Rus edebiyatının devi, ahlak filozofu ve destansı anlatım ustası.',
    authorBirthDeath: '1828 - 1910',
    year: '1869',
    genre: 'classics',
    secondaryGenres: ['strategy', 'history'],
    coverBg: 'from-[#1E3A8A] to-[#172554]',
    summary: 'Napolyon\'un Rusya\'yı işgali döneminde beş aristokrat ailenin (Bezukhov, Bolkonski, Rostov) kaderlerini, savaşın anlamsızlığını ve insan ruhunun erdem arayışını anlatan anıtsal bir destandır.',
    keyThemes: ['Tarihin Akışı', 'Kader ve Özgür İrade', 'Savaşın Gerçek Yüzü', 'Ruhsal Aydınlanma'],
    historicalContext: 'Dünya edebiyat tarihinin en kapsamlı ve en görkemli panoramik romanı olarak tescillenmiştir.',
    passages: [
      { id: 'sb_1', difficulty: 'easy', quote: 'İnsan sadece sevgiyle yaşar.' },
      { id: 'sb_2', difficulty: 'medium', quote: 'En güçlü iki savaşçı sabır ve zamandır; onların üstesinden gelemeyeceği hiçbir engel yoktur.' },
      { id: 'sb_3', difficulty: 'hard', quote: 'Herkes insanlığı değiştirmeyi düşünür ama hiç kimse önce kendini değiştirmeyi aklına getirmez.' },
      { id: 'sb_4', difficulty: 'legendary', quote: 'İnsanlar nehirler gibidir; suları aynıdır ama kimi yerde dar, kimi yerde hızlı, kimi yerde berrak, kimi yerde ise bulanık akar.' },
    ]
  },

  // =========================================================================
  // 4. MİZAH & HİCİV (SATIRE & WIT)
  // =========================================================================
  {
    id: 'zubuk',
    title: 'Zübük - Kağnı Gölgesindeki İt',
    originalTitle: 'Zübük',
    author: 'Aziz Nesin',
    authorBio: 'Türk mizah edebiyatının uluslararası üne sahip en büyük ustası. Toplumsal yozlaşmayı, siyasi ikiyüzlülüğü ve insan zaaflarını keskin bir kara mizahla eleştirmiştir.',
    authorBirthDeath: '1915 - 1995',
    year: '1961',
    genre: 'satire',
    secondaryGenres: ['turkish'],
    coverBg: 'from-[#B45309] to-[#713F12]',
    summary: 'Kasaba siyasetinde yalan, entrika ve sahtekarlıkla basamakları hızla tırmanan İbrahim Zübükzade\'nin yükseliş hikayesi üzerinden; toplumun kendi çıkarları için ahlaksızlığa nasıl göz yumduğunu anlatan ölümsüz bir siyasi ve toplumsal taşlamadır.',
    keyThemes: ['Siyasi Yozlaşma', 'Toplumsal İkiyüzlülük', 'Kara Mizah', 'Halk Psikolojisi'],
    historicalContext: 'Türk siyasi literatürüne "Zübükizm" kavramını kazandıran ve sinemaya da uyarlanan kült hiciv klasiğidir.',
    passages: [
      { id: 'zb_1', difficulty: 'easy', quote: 'Gülmek, insanın çaresizliğe karşı bulduğu en asil silahtır.' },
      { id: 'zb_2', difficulty: 'medium', quote: 'Zübük tek başına bir mikrop değildir; onu besleyen ve büyüten bataklığın ta kendisi biziz.' },
      { id: 'zb_3', difficulty: 'hard', quote: 'Biz bu kasabada hepimiz birer Zübük\'üz; çünkü dürüst insanı saf, dolandırıcıyı ise iş bitirici olarak alkışladık.' },
      { id: 'zb_4', difficulty: 'legendary', quote: 'Bir toplum kendi hakkını savunmaktan vazgeçip başkalarının sırtından kolay yoldan zengin olmayı düşlediği gün Zübükler iktidara gelir.' },
    ]
  },
  {
    id: 'yasar-ne-yasar-ne-yasamaz',
    title: 'Yaşar Ne Yaşar Ne Yaşamaz',
    originalTitle: 'Yaşar Ne Yaşar Ne Yaşamaz',
    author: 'Aziz Nesin',
    authorBio: 'Dünya çapında birçok ödül almış, Türk hiciv sanatının usta kalemi.',
    authorBirthDeath: '1915 - 1995',
    year: '1977',
    genre: 'satire',
    secondaryGenres: ['turkish', 'drama'],
    coverBg: 'from-[#0D9488] to-[#115E59]',
    summary: 'Nüfus kaydında ölü gözüktüğü için okula gidemeyen, evlenemeyen, askere çağrılan fakat miras alamayan Yaşar Yaşamaz\'ın bürokrasi karşısındaki trajikomik yaşam mücadelesidir.',
    keyThemes: ['Bürokrasi Çıkmazı', 'Absürd Adalet', 'Birey ve Devlet', 'Mizahi Başkaldırı'],
    historicalContext: 'Tiyatro ve radyo oyunları olarak yüzlerce kez sahnelenmiş, Türk insanının bürokrasiyle imtihanını simgeleyen bir başyapıttır.',
    passages: [
      { id: 'yn_1', difficulty: 'easy', quote: 'Resmi evraklarda varsan varsın, yoksan nefes alsan bile yaşamazsın.' },
      { id: 'yn_2', difficulty: 'medium', quote: 'Devlet kağıt üzerinde ölüsün diyorsa, mezardan kalkıp gelsen bile kimseyi inandıramazsın.' },
      { id: 'yn_3', difficulty: 'hard', quote: 'İnsan yaşarken öldüğünü ispat edemez ama öldükten sonra yaşadığını ispat etmek zorunda kalır.' },
    ]
  },
  {
    id: 'candide',
    title: 'Candide ya da İyimserlik',
    originalTitle: 'Candide, ou l\'Optimisme',
    author: 'Voltaire',
    authorBio: 'Fransız Aydınlanması\'nın en keskin zekalı filozofu, yazar ve hiciv ustası.',
    authorBirthDeath: '1694 - 1778',
    year: '1759',
    genre: 'satire',
    secondaryGenres: ['philosophy', 'classics'],
    coverBg: 'from-[#CA8A04] to-[#854D0E]',
    summary: 'Hocası Pangloss\'un "bu dünya var olabilecek en mükemmel dünyadır" felsefesiyle büyüyen saf Candide\'in başına gelen felaketler zinciri ve sonunda vardığı "bahçemizi yetiştirmeliyiz" bilgelik sonucudur.',
    keyThemes: ['Kör İyimserliğin İflası', 'Aydınlanma Eleştirisi', 'Eyleme Geçmek', 'İroni'],
    historicalContext: 'Leibniz\'in iyimserlik felsefesine ve dönemin kilise dogmalarına yöneltilmiş en etkili felsefi hiciv metnidir.',
    passages: [
      { id: 'cnd_1', difficulty: 'easy', quote: 'Bahçemizi yetiştirmek zorundayız.' },
      { id: 'cnd_2', difficulty: 'medium', quote: 'Her şeyin en iyi olduğu bir dünyada yaşıyorsak, diğer dünyalar kimbilir nasıldır?' },
      { id: 'cnd_3', difficulty: 'hard', quote: 'Boş felsefelerle vakit kaybetmek yerine elimizdeki toprağı işlemek ruhun tek kurtuluşudur.' },
    ]
  },

  // =========================================================================
  // 5. DİSTOPYA & GELECEK (DYSTOPIA)
  // =========================================================================
  {
    id: '1984',
    title: '1984',
    originalTitle: 'Nineteen Eighty-Four',
    author: 'George Orwell',
    authorBio: 'İngiliz romancı ve gazeteci. Totalitarizm, sansür ve dil manipülasyonunun en keskin uyarıcısı.',
    authorBirthDeath: '1903 - 1950',
    year: '1949',
    genre: 'dystopia',
    secondaryGenres: ['classics', 'politics'],
    coverBg: 'from-[#0F172A] to-[#020617]',
    summary: 'Düşüncenin suç sayıldığı, geçmişin sürekli yeniden yazıldığı ve her adımın "Büyük Birader" tarafından izlendiği Okyanusya\'da, hakikati arayan Winston Smith\'in umutsuz isyanıdır.',
    keyThemes: ['Totalitarizm', 'Çiftdüşün (Doublethink)', 'Yenikonuş (Newspeak)', 'Gözetim Toplumu'],
    historicalContext: '20. yüzyılın siyasi vizyonunu şekillendiren, otoriter sistemlerin mekanizmasını ifşa eden kült şaheser.',
    passages: [
      { id: 'orw_1', difficulty: 'easy', quote: 'Büyük Birader seni izliyor.' },
      { id: 'orw_2', difficulty: 'medium', quote: 'Geçmişi kontrol eden geleceği kontrol eder; bugünü kontrol eden geçmişi kontrol eder.' },
      { id: 'orw_3', difficulty: 'hard', quote: 'Özgürlük, iki kere ikinin dört ettiğini söyleyebilmektir; buna izin verilirse arkası kendiliğinden gelir.' },
      { id: 'orw_4', difficulty: 'legendary', quote: 'Eğer geleceğin bir resmini görmek istiyorsanız, bir insanın yüzüne sonsuza dek basan bir postal hayal edin.' },
    ]
  },
  {
    id: 'cesur-yeni-dunya',
    title: 'Cesur Yeni Dünya',
    originalTitle: 'Brave New World',
    author: 'Aldous Huxley',
    authorBio: 'İngiliz yazar ve düşünür. İnsan bilinci, teknoloji ve geleceğin toplumsal yapıları üzerine vizyoner eserler vermiştir.',
    authorBirthDeath: '1894 - 1963',
    year: '1932',
    genre: 'dystopia',
    secondaryGenres: ['classics', 'science'],
    coverBg: 'from-[#0284C7] to-[#0369A1]',
    summary: 'İnsanların kuluçka merkezlerinde üretildiği, acı ve kederin "soma" adlı uyuşturucuyla yok edildiği, konfor uğruna sanat, aşk ve özgürlüğün feda edildiği mekanik bir geleceğin tasviridir.',
    keyThemes: ['Zevk Yoluyla Kölelik', 'Genetik Şartlandırma', 'Duyguların Yok Edilişi', 'Vahşi İnsan'],
    historicalContext: 'Orwell\'in korku distopyasının karşısında, zevk ve eğlence yoluyla kontrolü öngören modern dünyanın kehanet metnidir.',
    passages: [
      { id: 'bnw_1', difficulty: 'easy', quote: 'Sözcükler tıpkı röntgen ışınları gibidir; doğru kullanıldığında her şeyi delip geçer.' },
      { id: 'bnw_2', difficulty: 'medium', quote: 'Gerçek mutluluk hiçbir zaman görkemli değildir; o sessiz ve dingin bir kabulleniştir.' },
      { id: 'bnw_3', difficulty: 'hard', quote: 'İnsanlara acı çektirmeyerek onları köleleştiren bir düzen, zorbalıkla yönetilen bir düzenden çok daha tehlikelidir.' },
    ]
  },

  // =========================================================================
  // 6. EPİK & FANTASTİK (EPIC FANTASY)
  // =========================================================================
  {
    id: 'dune',
    title: 'Dune',
    originalTitle: 'Dune',
    author: 'Frank Herbert',
    authorBio: 'Amerikan bilimkurgu ve felsefe yazarı. Ekoloji, din, siyaset ve insan potansiyeli üzerine derin evrenler yaratmıştır.',
    authorBirthDeath: '1920 - 1986',
    year: '1965',
    genre: 'epic_fantasy',
    secondaryGenres: ['science', 'philosophy'],
    coverBg: 'from-[#EA580C] to-[#9A3412]',
    summary: 'Çöl gezegeni Arrakis\'in ("Dune") baharat kaynakları için verilen hanedanlar arası savaşta, genç Paul Atreides\'in bir peygambere ve evrenin kaderini değiştiren lidere dönüşme destanıdır.',
    keyThemes: ['Korkuyla Yüzleşmek', 'Ekoloji ve Çevre', 'Mesihlik ve İktidar', 'Zihinsel Disiplin'],
    historicalContext: 'Bilimkurgu edebiyatının "Yüzüklerin Efendisi" kabul edilen, Hugo ve Nebula ödüllü anıtsal şaheser.',
    passages: [
      { id: 'dn_1', difficulty: 'easy', quote: 'Korku aklın katilidir; korku mutlak yıkımı getiren küçük ölümdür.' },
      { id: 'dn_2', difficulty: 'medium', quote: 'Korkumla yüzleşeceğim; onun üzerimden ve içimden geçmesine izin vereceğim.' },
      { id: 'dn_3', difficulty: 'hard', quote: 'Gözler kapalıyken yürümek tehlikelidir; fakat hakikate gözlerini kapatarak yaşamak ölümün ta kendisidir.' },
      { id: 'dn_4', difficulty: 'legendary', quote: 'Bir lider, halkının sadece hayallerini değil, korkularını ve çaresizliklerini de kendi omuzlarında taşıyabilen kişidir.' },
    ]
  },
  {
    id: 'yuzuklerin-efendisi',
    title: 'Yüzüklerin Efendisi',
    originalTitle: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    authorBio: 'Oxford profesörü, filolog ve modern yüksek fantezi edebiyatının kurucusu.',
    authorBirthDeath: '1892 - 1973',
    year: '1954',
    genre: 'epic_fantasy',
    secondaryGenres: ['classics', 'mythology'],
    coverBg: 'from-[#065F46] to-[#064E3B]',
    summary: 'Tek Yüzük\'ü Hüküm Dağı\'na götürüp yok etmekle görevlendirilen küçük Hobbit Frodo Baggins ve Yüzük Kardeşliği\'nin Orta Dünya\'yı karanlıktan kurtarma mücadelesidir.',
    keyThemes: ['Dostluk ve Sadakat', 'Gücün Yozlaştırıcı Etkisi', 'Küçük İnsanların Cesareti', 'Umut'],
    historicalContext: 'Dünya çapında 150 milyondan fazla satan ve 20. yüzyıl edebiyatına damga vuran epik efsane.',
    passages: [
      { id: 'lotr_1', difficulty: 'easy', quote: 'Gezginlerin hepsi kaybolmuş değildir.' },
      { id: 'lotr_2', difficulty: 'medium', quote: 'Karanlık ne kadar koyu olursa olsun, şafağın doğuşunu engelleyemez.' },
      { id: 'lotr_3', difficulty: 'hard', quote: 'Bize düşen tek şey, bize verilen zaman diliminde ne yapacağımıza karar vermektir.' },
      { id: 'lotr_4', difficulty: 'legendary', quote: 'Dünyada hala uğruna savaşmaya değer güzellikler var bay Frodo; ve bizler onlar için direnmek zorundayız.' },
    ]
  },

  // =========================================================================
  // 7. SİNEMA & SANAT KURAMI (CINEMA & ART)
  // =========================================================================
  {
    id: 'muhurlenmis-zaman',
    title: 'Mühürlenmiş Zaman',
    originalTitle: 'Zapechatlennoe Vremya (Запечатлённое время)',
    author: 'Andrey Tarkovski',
    authorBio: 'Dünya sinema tarihinin en büyük şairi ve düşünürü. Solaris, Stalker, Ayna ve Nostalghia filmlerinin efsanevi yönetmeni.',
    authorBirthDeath: '1932 - 1986',
    year: '1986',
    genre: 'cinema_art',
    secondaryGenres: ['essay', 'philosophy'],
    coverBg: 'from-[#475569] to-[#1E293B]',
    summary: 'Tarkovski\'nin sinemayı edebiyat ve tiyatrodan bağımsız bir "zaman heykeltıraşlığı" olarak tanımladığı, sanatçının ahlaki sorumluluğunu ve manevi arayışını anlattığı sinema manifestosudur.',
    keyThemes: ['Zaman Heykeltıraşlığı', 'Ruhsal Hakikat', 'Sanatçının Sorumluluğu', 'Görsel Şiir'],
    historicalContext: 'Yalnızca sinemacılar için değil, tüm sanat dalları ve düşünce dünyası için bir başucu estetik rehberi kabul edilir.',
    passages: [
      { id: 'mt_1', difficulty: 'easy', quote: 'Sanat, insanın mutlak hakikate ve mükemmelliğe duyduğu özlemdir.' },
      { id: 'mt_2', difficulty: 'medium', quote: 'Zamanı mühürlemek, anın içinde saklı olan sonsuz ruhu yakalamaktır.' },
      { id: 'mt_3', difficulty: 'hard', quote: 'Sanatçı olabilmek için insanın kendisini kurban etmeye ve hakikatin hizmetine adamaya hazır olması gerekir.' },
    ]
  },
  {
    id: 'gorme-bicimleri',
    title: 'Görme Biçimleri',
    originalTitle: 'Ways of Seeing',
    author: 'John Berger',
    authorBio: 'İngiliz sanat eleştirmeni, yazar ve ressam. Görsel kültür ve imge politikalarının öncüsü.',
    authorBirthDeath: '1926 - 2017',
    year: '1972',
    genre: 'cinema_art',
    secondaryGenres: ['essay', 'philosophy'],
    coverBg: 'from-[#4F46E5] to-[#312E81]',
    summary: 'Tablolara, fotoğraflara ve reklamlara nasıl baktığımızı, görme eyleminin arkasındaki ideolojik, sınıfsal ve toplumsal kodları çözümleyen kült sanat kuramı eseridir.',
    keyThemes: ['Görsel İdeoloji', 'İmge ve İktidar', 'Göz ve Bakış', 'Sanat Tarihi Çözümlemesi'],
    historicalContext: 'BBC televizyon dizisinden kitaba dönüştürülen, görsel okuryazarlık alanında bir devrim yaratan metin.',
    passages: [
      { id: 'gb_1', difficulty: 'easy', quote: 'Görmek, konuşmaktan önce gelmiştir.' },
      { id: 'gb_2', difficulty: 'medium', quote: 'Baktığımız nesne ile aramızdaki ilişki, aynı zamanda kendi bakış açımızın bir kurgusudur.' },
      { id: 'gb_3', difficulty: 'hard', quote: 'Bir imgeyi görmek, aynı zamanda onun üretildiği çağın güç ilişkilerini ve arzularını çözümlemektir.' },
    ]
  }
];
