// Master Books Database (LibrisMind Literary Corpus)
// Comprehensive catalog containing EVERY SINGLE standalone literary work cited in the project
// Each book is an independent entity with its own metadata, author biography, summary, themes, and passages.

export const BOOKS_DATABASE = [
  // =========================================================================
  // 1. FELSEFE & BİLGELİK (PHILOSOPHY)
  // =========================================================================
  {
    id: 'kendime-dusunceler',
    title: 'Kendime Düşünceler',
    originalTitle: 'Ta Eis Heauton (Τὰ εἰς ἑαυτόν)',
    author: 'Marcus Aurelius',
    authorBio: 'Roma İmparatoru ve Stoacı filozof. "Filozof Hükümdar" olarak tarihe geçmiş, erdemli ve sade yaşamın felsefesini savunmuştur.',
    authorBirthDeath: 'MS 121 - MS 180',
    year: 'MS 180',
    genre: 'philosophy',
    secondaryGenres: ['classics', 'essay'],
    coverBg: 'from-[#8C5E3C] to-[#5C3D26]',
    summary: 'Marcus Aurelius\'un Tuna boylarındaki askeri seferler sırasında çadırında yalnızca kendi nefsiyle hesaplaşmak için kaleme aldığı kişisel notlarıdır. Stoacı ahlakın, geçiciliğin ve kaderi kabullenmenin en berrak manifestosudur.',
    keyThemes: ['Stoacılık', 'Kaderi Sevmek (Amor Fati)', 'Zamanın Geçiciliği', 'İçsel Huzur'],
    historicalContext: 'Roma İmparatorluğu\'nun en güçlü döneminde savaşlar ve salgınlar sırasında yazılmış ölümsüz bir bilgelik rehberidir.',
    passages: [
      { id: 'kd_1', difficulty: 'easy', quote: 'Ruhun, düşüncelerinin rengine bürünür.' },
      { id: 'kd_2', difficulty: 'easy', quote: 'Sabah uyandığında nefes almanın ayrıcalığını hatırla.' },
      { id: 'kd_3', difficulty: 'easy', quote: 'Kendi zihninden daha huzurlu bir sığınak yoktur.' },
      { id: 'kd_4', difficulty: 'medium', quote: 'Dış dünya seni üzemez; seni üzen şey ona verdiğin kendi yargılarındır.' },
      { id: 'kd_5', difficulty: 'medium', quote: 'Hayatın amacı çoğunluğun tarafında olmak değil, akıl ve erdemin yanında durmaktır.' },
      { id: 'kd_6', difficulty: 'hard', quote: 'Güne başlarken kendine şunu söyle: Bugün nankör, küstah, hilekar ve kıskanç insanlarla karşılaşacağım çünkü onlar iyiyi ve kötüyü ayırt edemezler.' },
      { id: 'kd_7', difficulty: 'legendary', quote: 'Zaman sonsuz bir akıntıdır; her olay bir an için su yüzüne çıkar, ardından sürüklenip gider ve yerini bir başkasına bırakır.' }
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
    summary: 'Seneca\'nın dostu Lucilius\'a yazdığı mektuplardan oluşur. Zamanın doğru kullanımı, ölüm korkusunun yenilmesi, bilgelik ve sade yaşam dersleri sunar.',
    keyThemes: ['Zaman Yönetimi', 'Ölüm Bilinci', 'Sade Yaşam', 'Felsefi Dostluk'],
    historicalContext: 'İmparator Neron döneminde yazılmış, insan ruhunun baskı altındaki dayanıklılığını ele almıştır.',
    passages: [
      { id: 'am_1', difficulty: 'easy', quote: 'Zamanı iyi kullanan insan için ömür uzundur.' },
      { id: 'am_2', difficulty: 'medium', quote: 'Hangi limana doğru yelken açtığını bilmeyen bir gemi için hiçbir rüzgar elverişli değildir.' },
      { id: 'am_3', difficulty: 'legendary', quote: 'Bilge insan talihin getirdiği hiçbir hediyeye sevinmez ve hiçbir felakete yenilmez; çünkü o yalnızca kendi iç huzuruna ve erdemine güvenir.' }
    ]
  },
  {
    id: 'yasamin-kisaligi-uzerine',
    title: 'Yaşamın Kısalığı Üzerine',
    originalTitle: 'De Brevitate Vitae',
    author: 'Seneca',
    authorBio: 'Stoacı düşünür ve Roma senatörü.',
    authorBirthDeath: 'MÖ 4 - MS 65',
    year: 'MS 49',
    genre: 'philosophy',
    secondaryGenres: ['essay'],
    coverBg: 'from-[#B45309] to-[#713F12]',
    summary: 'İnsanların yaşamın kısalığından yakınmasını eleştirerek, aslında zamanın kısa olmadığını, insanların onu hoyratça harcadığını açıklar.',
    keyThemes: ['Zamanın Değeri', 'Erteleme Hastalığı', 'Bilinçli Yaşam'],
    historicalContext: 'Antik Roma\'da yaşam temposu ve amaçsız meşguliyetlere karşı felsefi bir manifesto.',
    passages: [
      { id: 'yku_1', difficulty: 'easy', quote: 'Korkularımız gerçek acılarımızdan daima daha fazladır.' },
      { id: 'yku_2', difficulty: 'hard', quote: 'Bize verilen zaman kısa değildir; tersine biz onun büyük bir kısmını gereksiz ve faydasız işlerle harcayarak heba ederiz.' }
    ]
  },
  {
    id: 'dusunceler-ve-sohbetler',
    title: 'Düşünceler ve Sohbetler',
    originalTitle: 'Diatribai (Διατριβαί)',
    author: 'Epiktetos',
    authorBio: 'Kölelikten bilgeliğe yükselen büyük Stoacı filozof.',
    authorBirthDeath: 'MS 50 - MS 135',
    year: 'MS 108',
    genre: 'philosophy',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#4B5563] to-[#1F2937]',
    summary: 'İnsanın yalnızca kontrol edebildiği düşüncelerinden ve seçimlerinden sorumlu olduğunu anlatan sohbetlerdir.',
    keyThemes: ['Kontrol Alanı', 'İçsel Özgürlük', 'Ruhsal Bağımsızlık'],
    historicalContext: 'Öğrencisi Arrianus tarafından tutulan ders notlarıdır.',
    passages: [
      { id: 'ep_1', difficulty: 'easy', quote: 'İnsanları üzen şeyler olaylar değil, yargılardır.' },
      { id: 'ep_2', difficulty: 'hard', quote: 'Özgürlük, arzuladığın şeyleri elde etmekte değil, kontrolünde olmayan arzuları dizginlemeyi öğrenmekte yatar.' }
    ]
  },
  {
    id: 'kilavuz-kitap',
    title: 'Kılavuz Kitap (Enchiridion)',
    originalTitle: 'Enchiridion',
    author: 'Epiktetos',
    authorBio: 'Stoacı ahlak felsefesinin kurucularından.',
    authorBirthDeath: 'MS 50 - MS 135',
    year: 'MS 125',
    genre: 'philosophy',
    secondaryGenres: ['essay'],
    coverBg: 'from-[#374151] to-[#111827]',
    summary: 'Gündelik hayatta karşılaşılan zorluklara karşı pratik Stoacı el kitabıdır.',
    keyThemes: ['Pratik Ahlak', 'Zihinsel Dayanıklılık', 'Sükunet'],
    historicalContext: 'Antik çağdan günümüze en popüler ahlak rehberi.',
    passages: [
      { id: 'epk_1', difficulty: 'medium', quote: 'Kontrol edemediğin şeylerin tutsağı olma; sadece kendi seçimlerinin efendisi ol.' }
    ]
  },
  {
    id: 'boyle-buyurdu-zerdust',
    title: 'Böyle Buyurdu Zerdüşt',
    originalTitle: 'Also sprach Zarathustra',
    author: 'Friedrich Nietzsche',
    authorBio: '19. yüzyılın en sarsıcı Alman filozofu, Üstinsan kavramının mimarı.',
    authorBirthDeath: '1844 - 1900',
    year: '1883',
    genre: 'philosophy',
    secondaryGenres: ['poetry', 'classics'],
    coverBg: 'from-[#1C1917] to-[#451A03]',
    summary: 'Zerdüşt\'ün dağdaki yalnızlığından inerek insanlara sürü psikolojisini reddetmeyi ve Üstinsan olmayı müjdelemesidir.',
    keyThemes: ['Üstinsan', 'Güç İstenci', 'Kendi Kendini Aşmak'],
    historicalContext: 'Batı felsefesini kökünden sarsan başyapıt.',
    passages: [
      { id: 'bbz_1', difficulty: 'easy', quote: 'Uçuruma uzun süre bakarsan, uçurum da sana bakar.' },
      { id: 'bbz_2', difficulty: 'medium', quote: 'Gök gürültüsüyle gelen fikirler dünyayı yönetir; sessizce atılan adımlar fırtınayı doğurur.' },
      { id: 'bbz_3', difficulty: 'hard', quote: 'Kendi alevinizde yanmaya hazır olmalısınız; önce küle dönüşmeden nasıl yeniden doğabilirsiniz?' }
    ]
  },
  {
    id: 'putlarin-alacakaranligi',
    title: 'Putların Alacakaranlığı',
    originalTitle: 'Götzen-Dämmerung',
    author: 'Friedrich Nietzsche',
    authorBio: 'Alman düşünür ve kültür eleştirmeni.',
    authorBirthDeath: '1844 - 1900',
    year: '1889',
    genre: 'philosophy',
    secondaryGenres: ['essay'],
    coverBg: 'from-[#7F1D1D] to-[#450A0A]',
    summary: 'Geleneksel ahlakın, felsefenin ve dogmaların çekiçle sınandığı aforizmalar bütünü.',
    keyThemes: ['Çekiçle Felsefe Yapmak', 'Putları Yıkmak', 'Direnç'],
    historicalContext: 'Nietzsche\'nin en berrak ve özet aforizma kitaplarından biridir.',
    passages: [
      { id: 'pa_1', difficulty: 'easy', quote: 'Beni öldürmeyen her darbe beni güçlendirir.' }
    ]
  },
  {
    id: 'sen-bilim',
    title: 'Şen Bilim',
    originalTitle: 'Die fröhliche Wissenschaft',
    author: 'Friedrich Nietzsche',
    authorBio: 'Bengi Dönüş ve Amor Fati felsefecisi.',
    authorBirthDeath: '1844 - 1900',
    year: '1882',
    genre: 'philosophy',
    secondaryGenres: ['poetry'],
    coverBg: 'from-[#9A3412] to-[#431407]',
    summary: 'Hayatı tüm sevinçleri ve acılarıyla kutlayan, müziği ve bilgeliği birleştiren lirik felsefe metni.',
    keyThemes: ['Şen Bilgelik', 'Müzik ve Sanat', 'Amor Fati'],
    historicalContext: 'Zerdüşt\'ten hemen önceki yaratıcı uyanış dönemi eseri.',
    passages: [
      { id: 'sb_n_1', difficulty: 'medium', quote: 'Müziksiz bir hayat, varoluş açısından telafisi imkansız büyük bir hata olurdu.' }
    ]
  },
  {
    id: 'insanca-pek-insanca',
    title: 'İnsanca, Pek İnsanca',
    originalTitle: 'Menschliches, Allzumenschliches',
    author: 'Friedrich Nietzsche',
    authorBio: 'Özgür zihinlerin savunucusu filozof.',
    authorBirthDeath: '1844 - 1900',
    year: '1878',
    genre: 'philosophy',
    secondaryGenres: ['essay'],
    coverBg: 'from-[#312E81] to-[#1E1B4B]',
    summary: 'İnsan psikolojisi, din, sanat ve toplum üzerine özgür düşünce aforizmaları.',
    keyThemes: ['Özgür Zihin', 'Yalnızlık', 'İnsan Doğası'],
    historicalContext: 'Nietzsche\'nin metafizikten kopup psikolojik çözümlemelere yöneldiği eser.',
    passages: [
      { id: 'ipi_1', difficulty: 'legendary', quote: 'Yükseklere tırmanmak isteyen insan yalnızlığın sert rüzgarlarına göğüs germelidir; çünkü zirveler kalabalıkların değil, sadece kartalların meskenidir.' }
    ]
  },
  {
    id: 'etika',
    title: 'Etika',
    originalTitle: 'Ethica, ordine geometrico demonstrata',
    author: 'Baruch Spinoza',
    authorBio: '17. yüzyıl Hollandalı rasyonalist filozof. Panteizmin kurucusu.',
    authorBirthDeath: '1632 - 1677',
    year: '1677',
    genre: 'philosophy',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#065F46] to-[#022C22]',
    summary: 'Tanrı ile doğanın bir ve aynı olduğunu (Panteizm) ve aklın insanı tutkulardan kurtardığını geometrik yöntemle kanıtlar.',
    keyThemes: ['Deus sive Natura', 'Tutkuların Aşkınlığı', 'Akılcı Özgürlük'],
    historicalContext: 'Aydınlanma felsefesine yön veren en cesur metinlerden biri.',
    passages: [
      { id: 'sp_1', difficulty: 'easy', quote: 'Keder, zihnin yetkinliğinin azalmasıdır.' },
      { id: 'sp_2', difficulty: 'medium', quote: 'İnsan eylemlerine ne ağlamalı, ne öfkelenmeli; yalnızca onları anlamaya çalışmalıdır.' },
      { id: 'sp_3', difficulty: 'hard', quote: 'Akıl tarafından yönlendirilen bir insan, kör tutkularının esiri olan bir kimseden katbekat daha özgür ve güçlüdür.' }
    ]
  },
  {
    id: 'yasam-bilgeligi',
    title: 'Yaşam Bilgeliği Üzerine Aforizmalar',
    originalTitle: 'Aphorismen zur Lebensweisheit',
    author: 'Arthur Schopenhauer',
    authorBio: 'Kötümserlik ve irade felsefesinin büyük ustası.',
    authorBirthDeath: '1788 - 1860',
    year: '1851',
    genre: 'philosophy',
    secondaryGenres: ['essay'],
    coverBg: 'from-[#374151] to-[#111827]',
    summary: 'Günlük yaşamda mutluluğa, yalnızlığa ve insan karakterine dair berrak ve pratik bilgelik kılavuzudur.',
    keyThemes: ['Yalnızlık', 'İçsel Zenginlik', 'Acı ve Sıkıntı'],
    historicalContext: 'Filozofun dünya çapında tanınmasını sağlayan popüler eseri.',
    passages: [
      { id: 'sch_1', difficulty: 'easy', quote: 'Yalnızlık, tüm büyük zihinlerin kaderidir.' },
      { id: 'sch_2', difficulty: 'hard', quote: 'Bir insanın kendi içinde neye sahip olduğu, dışarıdan ne elde edebileceğinden daima daha belirleyici ve kıymetlidir.' }
    ]
  },
  {
    id: 'askin-metafizigi',
    title: 'Aşkın Metafiziği',
    originalTitle: 'Metaphysik der Geschlechtsliebe',
    author: 'Arthur Schopenhauer',
    authorBio: 'İrade ve arzu üzerine çalışan Alman filozof.',
    authorBirthDeath: '1788 - 1860',
    year: '1844',
    genre: 'philosophy',
    secondaryGenres: ['psychology'],
    coverBg: 'from-[#BE185D] to-[#831843]',
    summary: 'Aşk duygusunun arkasındaki biyolojik iradeyi ve türün devamı dürtüsünü felsefi olarak açıklar.',
    keyThemes: ['Aşkın Doğası', 'Yaşama İradesi', 'Biyolojik Yanılsama'],
    historicalContext: 'Aşk felsefesinin en gerçekçi ve çarpıcı metinlerinden biridir.',
    passages: [
      { id: 'asm_1', difficulty: 'medium', quote: 'Hayat bir sarkaç gibi acı ile can sıkıntısı arasında gidip gelir.' }
    ]
  },
  {
    id: 'sisifos-soyleni',
    title: 'Sisifos Söyleni',
    originalTitle: 'Le Mythe de Sisyphe',
    author: 'Albert Camus',
    authorBio: 'Nobel Ödüllü Fransız yazar ve Absürdizm kurucusu.',
    authorBirthDeath: '1913 - 1960',
    year: '1942',
    genre: 'philosophy',
    secondaryGenres: ['essay'],
    coverBg: 'from-[#475569] to-[#0F172A]',
    summary: 'Hayatın anlamsızlığı karşısında insanın intihar etmek yerine başkaldırmasını savunur.',
    keyThemes: ['Absürd', 'Başkaldırı', 'Bilinç'],
    historicalContext: 'Varoluşçu düşüncenin en etkili deneme kitaplarından biri.',
    passages: [
      { id: 'cam_1', difficulty: 'easy', quote: 'Sisifos\'u mutlu olarak hayal etmek gerekir.' },
      { id: 'cam_2', difficulty: 'hard', quote: 'Kışın en soğuk gününde, içimde yenilmez ve sarsılmaz bir yaz mevsimi olduğunu keşfettim.' }
    ]
  },
  {
    id: 'baskaldiran-insan',
    title: 'Başkaldıran İnsan',
    originalTitle: 'L\'Homme révolté',
    author: 'Albert Camus',
    authorBio: 'Özgürlükçü varoluşçu edebiyatçı.',
    authorBirthDeath: '1913 - 1960',
    year: '1951',
    genre: 'philosophy',
    secondaryGenres: ['politics', 'essay'],
    coverBg: 'from-[#047857] to-[#064E3B]',
    summary: 'Tarih boyunca zulme ve haksızlığa karşı direnen insanın metafizik ve politik başkaldırısını inceler.',
    keyThemes: ['Başkaldırı', 'Adalet', 'Ölçülülük'],
    historicalContext: 'Totaliter ideolojilere karşı bireysel özgürlük manifestosu.',
    passages: [
      { id: 'bki_1', difficulty: 'medium', quote: 'Başkaldırıyorum, öyleyse varız; adaletsizlik karşısında susmak teslim olmaktır.' }
    ]
  },
  {
    id: 'dusus',
    title: 'Düşüş',
    originalTitle: 'La Chute',
    author: 'Albert Camus',
    authorBio: 'Fransız ahlak ve edebiyat ustası.',
    authorBirthDeath: '1913 - 1960',
    year: '1956',
    genre: 'philosophy',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#1E293B] to-[#0F172A]',
    summary: 'Amsterdam\'da bir barda eski avukat Jean-Baptiste Clamence\'ın modern insanın ikiyüzlülüğüyle hesaplaşmasıdır.',
    keyThemes: ['Suçluluk', 'İkiyüzlülük', 'Yargılama'],
    historicalContext: 'Sartre tarafından Camus\'nün en kusursuz edebi eseri olarak övülmüştür.',
    passages: [
      { id: 'dss_1', difficulty: 'legendary', quote: 'İnsanlar ancak sizin çektiğiniz acıların kendi çıkarlarına dokunmadığını gördüklerinde samimiyetle merhamet gösterirler.' }
    ]
  },
  {
    id: 'bulanti',
    title: 'Bulantı',
    originalTitle: 'La Nausée',
    author: 'Jean-Paul Sartre',
    authorBio: 'Fransız varoluşçu filozof ve romancı.',
    authorBirthDeath: '1905 - 1980',
    year: '1938',
    genre: 'philosophy',
    secondaryGenres: ['modernist', 'classics'],
    coverBg: 'from-[#059669] to-[#064E3B]',
    summary: 'Antoine Roquentin\'in nesnelerin varoluşu karşısında duyduğu bulantıyı anlatan varoluşçu roman.',
    keyThemes: ['Bulantı', 'Varoluş Özden Önce Gelir', 'Yabancılaşma'],
    historicalContext: 'Varoluşçuluğun roman formundaki ilk başyapıtı.',
    passages: [
      { id: 'bln_1', difficulty: 'hard', quote: 'Varoluş özden önce gelir; insan önce vardır, varoluşunu kendisi tanımlar ve seçimleriyle kendi kaderini inşa eder.' }
    ]
  },
  {
    id: 'varlik-ve-hiclik',
    title: 'Varlık ve Hiçlik',
    originalTitle: 'L\'Être et le Néant',
    author: 'Jean-Paul Sartre',
    authorBio: 'Fenomenolojik varoluşçuluğun kurucusu.',
    authorBirthDeath: '1905 - 1980',
    year: '1943',
    genre: 'philosophy',
    secondaryGenres: ['essay'],
    coverBg: 'from-[#111827] to-[#030712]',
    summary: 'İnsanın mutlak özgürlüğünü ve bu özgürlüğün getirdiği kaçınılmaz sorumluluğu felsefi temellerle inceler.',
    keyThemes: ['Özgürlüğe Mahkumiyet', 'Kötü Niyet', 'Hiçlik'],
    historicalContext: '20. yüzyıl felsefesinin en kapsamlı varoluşçu felsefe kitabı.',
    passages: [
      { id: 'vvh_1', difficulty: 'medium', quote: 'İnsan özgürlüğe mahkumdur; çünkü bir kez dünyaya atıldıktan sonra yaptığı her şeyden sorumludur.' }
    ]
  },
  {
    id: 'gizli-oturum',
    title: 'Gizli Oturum',
    originalTitle: 'Huis Clos',
    author: 'Jean-Paul Sartre',
    authorBio: 'Nobel Ödülü\'nü reddeden varoluşçu düşünür.',
    authorBirthDeath: '1905 - 1980',
    year: '1944',
    genre: 'philosophy',
    secondaryGenres: ['drama'],
    coverBg: 'from-[#991B1B] to-[#7F1D1D]',
    summary: 'Öldükten sonra aynı odada kilitli kalan üç kişinin birbirlerinin cehennemine dönüşmesini anlatan tiyatro oyunu.',
    keyThemes: ['Cehennem Başkalarıdır', 'Ötekinin Bakışı', 'Karakter'],
    historicalContext: 'Sartre\'ın en ünlü aforizmasının doğduğu tiyatro eseri.',
    passages: [
      { id: 'gzo_1', difficulty: 'easy', quote: 'Cehennem başkalarıdır.' }
    ]
  },

  // =========================================================================
  // 2. DÜNYA KLASİKLERİ (WORLD CLASSICS)
  // =========================================================================
  {
    id: 'suc-ve-ceza',
    title: 'Suç ve Ceza',
    originalTitle: 'Prestupleniye i Nakazaniye',
    author: 'Fyodor Dostoyevski',
    authorBio: 'İnsan psikolojisinin ve vicdan azabının gelmiş geçmiş en büyük romancısı.',
    authorBirthDeath: '1821 - 1881',
    year: '1866',
    genre: 'classics',
    secondaryGenres: ['psychology', 'philosophy'],
    coverBg: 'from-[#991B1B] to-[#450A0A]',
    summary: 'Raskolnikov\'un işlediği cinayet ve ardından gelen vicdan azabını, ahlaki çöküş ve kefaret arayışını anlatır.',
    keyThemes: ['Suç ve Vicdan', 'Kefaret', 'Olağanüstü İnsan Miti'],
    historicalContext: 'Psikolojik roman türünün zirvesi kabul edilen Rus klasiği.',
    passages: [
      { id: 'sc_1', difficulty: 'easy', quote: 'Yeni bir adım atmak, yeni bir kelime söylemek insanların en çok korktuğu şeydir.' },
      { id: 'sc_2', difficulty: 'legendary', quote: 'Vicdanı olan bir insan, hatasını anladığı anda zaten en ağır cezayı kendi içinde çekmeye başlamıştır; zindanın karanlığı bunun yanında hafif kalır.' }
    ]
  },
  {
    id: 'karamazov-kardesler',
    title: 'Karamazov Kardeşler',
    originalTitle: 'Bratya Karamazovy',
    author: 'Fyodor Dostoyevski',
    authorBio: 'Evrensel ahlak ve inanç sorgulayıcısı romancı.',
    authorBirthDeath: '1821 - 1881',
    year: '1880',
    genre: 'classics',
    secondaryGenres: ['philosophy', 'psychology'],
    coverBg: 'from-[#7F1D1D] to-[#450A0A]',
    summary: 'Baba Fyodor Karamazov\'un cinayeti etrafında üç kardeşin (Dmitri, İvan, Alyoşa) inanç, akıl ve tutku çatışmasıdır.',
    keyThemes: ['Büyük Engizisyoncu', 'Tanrı ve Ahlak', 'Bağışlama'],
    historicalContext: 'Dostoyevski\'nin son ve en büyük başyapıtı.',
    passages: [
      { id: 'kk_1', difficulty: 'medium', quote: 'İnsan sırf acı çekmemek için bile bütün varlığını feda etmeye hazırdır.' },
      { id: 'kk_2', difficulty: 'legendary', quote: 'Sevgi öyle büyük bir güçtür ki, bütün dünyayı satın alabilir ve sadece kendi günahlarını değil, başkalarının günahlarını da bağışlatabilir.' }
    ]
  },
  {
    id: 'yeraltindan-notlar',
    title: 'Yeraltından Notlar',
    originalTitle: 'Zapiski iz podpolya',
    author: 'Fyodor Dostoyevski',
    authorBio: 'Modern varoluşçu edebiyatın öncüsü.',
    authorBirthDeath: '1821 - 1881',
    year: '1864',
    genre: 'classics',
    secondaryGenres: ['philosophy', 'modernist'],
    coverBg: 'from-[#374151] to-[#111827]',
    summary: 'Toplumdan soyutlanmış Yeraltı Adamı\'nın akılcılığa, kibire ve modern toplumun sahteliklerine karşı monoloğudur.',
    keyThemes: ['Aşırı Bilinçlilik', 'Yeraltı Psikolojisi', 'İrrasyonalite'],
    historicalContext: '20. yüzyıl varoluşçu edebiyatının kapısını açan kurucu metin.',
    passages: [
      { id: 'yn_d_1', difficulty: 'medium', quote: 'Çok fazla bilinçli olmak bir hastalıktır; gerçek, tam anlamıyla bir hastalıktır.' },
      { id: 'yn_d_2', difficulty: 'legendary', quote: 'Bana öyle geliyor ki insan sadece acılarını saymaktan hoşlanır, mutluluklarını ise hiç hesap etmez; oysa dikkat etse her anında bir sevinç gizlidir.' }
    ]
  },
  {
    id: 'budala',
    title: 'Budala',
    originalTitle: 'Idiot',
    author: 'Fyodor Dostoyevski',
    authorBio: 'İyilik ve saflık trajedilerinin ustası.',
    authorBirthDeath: '1821 - 1881',
    year: '1869',
    genre: 'classics',
    secondaryGenres: ['psychology'],
    coverBg: 'from-[#4B5563] to-[#1F2937]',
    summary: 'Mutlak iyi ve saf Prens Mışkin\'in yozlaşmış Petersburg sosyetesindeki trajik öyküsüdür.',
    keyThemes: ['Güzellik Dünyayı Kurtaracak', 'Saflık ve Kibir', 'Merhamet'],
    historicalContext: 'Kusursuz bir Hristiyan erdeminin dünyevi kirlilikle karşılaşması.',
    passages: [
      { id: 'bd_1', difficulty: 'hard', quote: 'Dünyayı güzellik kurtaracak; fakat o güzelliği görebilmek için önce kalpteki kibri ve kini temizlemek gerekir.' }
    ]
  },
  {
    id: 'beyaz-geceler',
    title: 'Beyaz Geceler',
    originalTitle: 'Belye nochi',
    author: 'Fyodor Dostoyevski',
    authorBio: 'Petersburg sokaklarının hülyalı anlatıcısı.',
    authorBirthDeath: '1821 - 1881',
    year: '1848',
    genre: 'classics',
    secondaryGenres: ['turkish'],
    coverBg: 'from-[#0284C7] to-[#0369A1]',
    summary: 'Petersburg\'un aydınlık yaz gecelerinde yalnız bir hayalperest ile Nastenka\'nın dört gecelik dokunaklı dostluğu.',
    keyThemes: ['Hayalperestlik', 'Karşılıksız Sevgi', 'Yalnızlık'],
    historicalContext: 'Dostoyevski\'nin erken dönem lirik şaheseri.',
    passages: [
      { id: 'bg_1', difficulty: 'easy', quote: 'Bir anlık mutluluk bile bütün bir ömre bedeldir.' }
    ]
  },
  {
    id: 'savas-ve-baris',
    title: 'Savaş ve Barış',
    originalTitle: 'Voyna i Mir',
    author: 'Lev Tolstoy',
    authorBio: 'Panoramik destan ve gerçekçi roman devi.',
    authorBirthDeath: '1828 - 1910',
    year: '1869',
    genre: 'classics',
    secondaryGenres: ['history', 'strategy'],
    coverBg: 'from-[#1E3A8A] to-[#172554]',
    summary: 'Napolyon savaşları sırasında Rus toplumunun ve soylu ailelerin destansı panoramasını sunar.',
    keyThemes: ['Sabır ve Zaman', 'Tarihin Yasaları', 'Savaş ve İnsan'],
    historicalContext: 'Dünya edebiyat tarihinin en büyük panoramik romanı.',
    passages: [
      { id: 'sb_1', difficulty: 'medium', quote: 'En güçlü iki savaşçı sabır ve zamandır; onların üstesinden gelemeyeceği hiçbir engel yoktur.' }
    ]
  },
  {
    id: 'anna-karenina',
    title: 'Anna Karenina',
    originalTitle: 'Anna Karenina',
    author: 'Lev Tolstoy',
    authorBio: 'Ahlaki dürüstlük ve evlilik trajedilerinin anlatıcısı.',
    authorBirthDeath: '1828 - 1910',
    year: '1877',
    genre: 'classics',
    secondaryGenres: ['drama'],
    coverBg: 'from-[#9F1239] to-[#4C0519]',
    summary: 'Tutkulu aşkı uğruna toplumsal kuralları çiğneyen Anna Karenina\'nın trajedisi ve Levin\'in hakikat arayışıdır.',
    keyThemes: ['Mutlu ve Mutsuz Aileler', 'Toplumsal Baskı', 'Tutku'],
    historicalContext: 'Roman sanatının en kusursuz kurgularından biri kabul edilir.',
    passages: [
      { id: 'ak_1', difficulty: 'medium', quote: 'Bütün mutlu aileler birbirine benzer; her mutsuz ailenin ise kendine özgü bir mutsuzluğu vardır.' }
    ]
  },
  {
    id: 'insan-ne-ile-yasar',
    title: 'İnsan Ne İle Yaşar',
    originalTitle: 'Chem lyudi zhivy',
    author: 'Lev Tolstoy',
    authorBio: 'Halk hikayeleri ve ahlak masallarının bilge yazarı.',
    authorBirthDeath: '1828 - 1910',
    year: '1885',
    genre: 'classics',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#D97706] to-[#78350F]',
    summary: 'Yeryüzüne düşen bir meleğin insanların içinde ne olduğunu, onlara neyin verilmediğini ve insanın neyle yaşadığını öğrenmesidir.',
    keyThemes: ['Sevgi', 'Merhamet', 'Alçakgönüllülük'],
    historicalContext: 'Milyonlarca insana sevginin önemini aşılayan ölümsüz masal.',
    passages: [
      { id: 'iny_1', difficulty: 'easy', quote: 'İnsan sadece sevgiyle yaşar.' }
    ]
  },
  {
    id: 'ivan-ilyicin-olumu',
    title: 'İvan İlyiç\'in Ölümü',
    originalTitle: 'Smert Ivana Ilyicha',
    author: 'Lev Tolstoy',
    authorBio: 'Ölüm ve hakikat sorgulayıcısı yazar.',
    authorBirthDeath: '1828 - 1910',
    year: '1886',
    genre: 'classics',
    secondaryGenres: ['philosophy', 'psychology'],
    coverBg: 'from-[#475569] to-[#1E293B]',
    summary: 'Yüksek yargıç İvan İlyiç\'in ölüm döşeğinde sahte ve anlamsız yaşadığını fark etmesinin sarsıcı hikayesidir.',
    keyThemes: ['Ölümle Yüzleşme', 'Sahte Hayat', 'Hakiki Varoluş'],
    historicalContext: 'Ölüm psikolojisini anlatan en çarpıcı uzun öykü.',
    passages: [
      { id: 'iio_1', difficulty: 'hard', quote: 'Belki de hayatımı yanlış yaşadım düşüncesi, ölüm döşeğindeki insanın zihnini kemiren en amansız azaptır.' }
    ]
  },
  {
    id: 'dirilis',
    title: 'Diriliş',
    originalTitle: 'Voskreseniye',
    author: 'Lev Tolstoy',
    authorBio: 'Vicdan ve toplumsal adalet savunucusu Tolstoy.',
    authorBirthDeath: '1828 - 1910',
    year: '1899',
    genre: 'classics',
    secondaryGenres: ['essay'],
    coverBg: 'from-[#065F46] to-[#022C22]',
    summary: 'Prens Nehludov\'un gençlik günahıyla yüzleşip Sibirya sürgününe giden Katyuşa Maslova\'nın peşinden giderek manevi dirilişe ermesidir.',
    keyThemes: ['Manevi Diriliş', 'Adalet Eleştirisi', 'İnsan Doğası'],
    historicalContext: 'Tolstoy\'un kilise tarafından aforoz edilmesine yol açan son büyük romanı.',
    passages: [
      { id: 'drl_1', difficulty: 'legendary', quote: 'İnsanlar nehirler gibidir; suları aynıdır ama kimi yerde dar, kimi yerde hızlı, kimi yerde berrak, kimi yerde ise bulanık akar.' }
    ]
  },
  {
    id: 'donusum',
    title: 'Dönüşüm',
    originalTitle: 'Die Verwandlung',
    author: 'Franz Kafka',
    authorBio: 'Modern yabancılaşmanın ve varoluşsal kaygının büyük yazarı.',
    authorBirthDeath: '1883 - 1924',
    year: '1915',
    genre: 'classics',
    secondaryGenres: ['modernist'],
    coverBg: 'from-[#713F12] to-[#451A03]',
    summary: 'Gregor Samsa\'nın bir sabah dev bir böceğe dönüşmesi ve ailesinin yabancılaşması.',
    keyThemes: ['Yabancılaşma', 'Böcekleşme', 'Aile Baskısı'],
    historicalContext: 'Modern dünya insanının sistem karşısındaki çaresizliğini anlatan kült eser.',
    passages: [
      { id: 'dns_1', difficulty: 'easy', quote: 'Gregor Samsa bir sabah huzursuz düşlerden uyandı.' }
    ]
  },
  {
    id: 'dava',
    title: 'Dava',
    originalTitle: 'Der Process',
    author: 'Franz Kafka',
    authorBio: 'Bürokratik labirentlerin büyük ustası.',
    authorBirthDeath: '1883 - 1924',
    year: '1925',
    genre: 'classics',
    secondaryGenres: ['modernist', 'dystopia'],
    coverBg: 'from-[#1F2937] to-[#111827]',
    summary: 'Josef K.\'nın suçu bildirilmeyen görünmez bir mahkeme tarafından tutuklanıp yargılanışıdır.',
    keyThemes: ['Bürokratik Labirent', 'Suçsuzluğun Çaresizliği', 'Yasa Önünde'],
    historicalContext: 'Modern hukuk sisteminin ve otoriter mekanizmaların absürdlüğünü gözler önüne serer.',
    passages: [
      { id: 'dva_1', difficulty: 'medium', quote: 'Birisi Josef K.\'ya iftira atmış olmalıydı; çünkü kötü bir şey yapmamış olmasına rağmen tutuklandı.' }
    ]
  },
  {
    id: 'aforizmalar-kafka',
    title: 'Aforizmalar',
    originalTitle: 'Aphorismen',
    author: 'Franz Kafka',
    authorBio: 'Prag\'ın varoluşçu edebiyat dehası.',
    authorBirthDeath: '1883 - 1924',
    year: '1931',
    genre: 'classics',
    secondaryGenres: ['essay', 'philosophy'],
    coverBg: 'from-[#374151] to-[#0F172A]',
    summary: 'Kafka\'nın Zürau köyünde dinlenirken yazdığı günah, acı, umut ve doğru yol üzerine derin felsefi notlarıdır.',
    keyThemes: ['Kafes ve Kuş', 'Doğru Yol', 'Hakikat'],
    historicalContext: 'Kafka\'nın metafizik ve ahlaki düşüncelerini en saf haliyle yansıtır.',
    passages: [
      { id: 'kfk_afr_1', difficulty: 'hard', quote: 'Bir kafes bir kuş aramaya çıktı; oysa özgürlük kafesin dışındaki sonsuz gökyüzünde kanat çırpmaktı.' }
    ]
  },
  {
    id: 'sato',
    title: 'Şato',
    originalTitle: 'Das Schloss',
    author: 'Franz Kafka',
    authorBio: 'Erişilmez otoritenin simgesel yazarı.',
    authorBirthDeath: '1883 - 1924',
    year: '1926',
    genre: 'classics',
    secondaryGenres: ['modernist'],
    coverBg: 'from-[#4B5563] to-[#1F2937]',
    summary: 'Kadastrocu K.\'nın köye gelip asla ulaşamadığı gizemli Şato\'ya kabul edilme çabasıdır.',
    keyThemes: ['Ulaşılamaz Otorite', 'Yabancılık', 'Belirsizlik'],
    historicalContext: 'Modern insanın kutsala veya anlama ulaşma çabasının boşa çıkışını simgeler.',
    passages: [
      { id: 'sto_1', difficulty: 'legendary', quote: 'Ulaşılmak istenen hedefin kendisi değil, o hedefe giden yolda karşılaşılan belirsizlikler ve engeller insanın ruhunu şekillendirir.' }
    ]
  },
  {
    id: 'sefiller',
    title: 'Sefiller',
    originalTitle: 'Les Misérables',
    author: 'Victor Hugo',
    authorBio: 'Fransız Romantizmi\'nin lideri ve adalet savunucusu.',
    authorBirthDeath: '1802 - 1885',
    year: '1862',
    genre: 'classics',
    secondaryGenres: ['history'],
    coverBg: 'from-[#B91C1C] to-[#7F1D1D]',
    summary: 'Jean Valjean\'ın merhametle dönüşen hayatı ve Müfettiş Javert ile olan kovalamacasıdır.',
    keyThemes: ['Merhamet', 'Adalet', 'Yoksulluk'],
    historicalContext: '19. yüzyıl Fransız toplumunun devasa vicdan romanı.',
    passages: [
      { id: 'sfl_1', difficulty: 'easy', quote: 'Ölmek hiçbir şeydir; asıl korkunç olan yaşamamaktır.' },
      { id: 'sfl_2', difficulty: 'medium', quote: 'Gelecek, cesurların umudu, korkakların ise kabusudur.' }
    ]
  },
  {
    id: 'notre-dame-in-kamburu',
    title: 'Notre Dame\'ın Kamburu',
    originalTitle: 'Notre-Dame de Paris',
    author: 'Victor Hugo',
    authorBio: 'Gotik mimari ve saf sevginin romantik yazarı.',
    authorBirthDeath: '1802 - 1885',
    year: '1831',
    genre: 'classics',
    secondaryGenres: ['drama'],
    coverBg: 'from-[#991B1B] to-[#450A0A]',
    summary: 'Çirkin zangoç Quasimodo\'nun çingene kızı Esmeralda\'ya duyduğu saf ve trajik aşkıdır.',
    keyThemes: ['Fiziksel Çirkinlik ve Saf Kalp', 'Katedral', 'Kader (Ananke)'],
    historicalContext: 'Paris ve Notre Dame Katedrali\'ni kurtaran tarihi roman.',
    passages: [
      { id: 'ndk_1', difficulty: 'hard', quote: 'Sevmek veya sevilmiş olmak yeterlidir; karanlık gecelerin ardından doğacak şafağı beklemek gerekmez.' }
    ]
  },
  {
    id: 'siddhartha',
    title: 'Siddhartha',
    originalTitle: 'Siddhartha',
    author: 'Hermann Hesse',
    authorBio: 'Doğu bilgeliğini Batı bireyiyle buluşturan Nobel Ödüllü romancı.',
    authorBirthDeath: '1877 - 1962',
    year: '1922',
    genre: 'classics',
    secondaryGenres: ['philosophy', 'mysticism'],
    coverBg: 'from-[#D97706] to-[#78350F]',
    summary: 'Genç Brahman Siddhartha\'nın nehir kıyısında aydınlanmaya ve iç huzura ulaşma yolculuğu.',
    keyThemes: ['Aydınlanma', 'Nehrin Sesi', 'Öz Bilgi'],
    historicalContext: 'Hindistan felsefesi ve Budizm\'in edebi zirvesi.',
    passages: [
      { id: 'sdh_1', difficulty: 'easy', quote: 'Bilgelik başkasına aktarılamaz; onu kişi kendisi bulmalıdır.' }
    ]
  },
  {
    id: 'bozkirkurdu',
    title: 'Bozkırkurdu',
    originalTitle: 'Der Steppenwolf',
    author: 'Hermann Hesse',
    authorBio: 'Bireyleşme ve iç çatışma ustası.',
    authorBirthDeath: '1877 - 1962',
    year: '1927',
    genre: 'classics',
    secondaryGenres: ['psychology', 'philosophy'],
    coverBg: 'from-[#4B5563] to-[#1F2937]',
    summary: 'Harry Haller\'in insan yanı ile yalnız bozkırkurdu yanı arasındaki ruhsal savaşıdır.',
    keyThemes: ['Bozkırkurdu', 'Yalnızlık', 'Sihirli Tiyatro'],
    historicalContext: 'Modern insanın kültür krizi ve yabancılaşmasını teşhis eden kült roman.',
    passages: [
      { id: 'bzk_1', difficulty: 'medium', quote: 'Yalnızlık bağımsızlıktır; onu ben istedim ve uzun yıllar boyunca bedelini ödedim.' }
    ]
  },
  {
    id: 'demian',
    title: 'Demian',
    originalTitle: 'Demian',
    author: 'Hermann Hesse',
    authorBio: 'Jung psikolojisini edebiyata taşıyan yazar.',
    authorBirthDeath: '1877 - 1962',
    year: '1919',
    genre: 'classics',
    secondaryGenres: ['psychology'],
    coverBg: 'from-[#6B21A8] to-[#3B0764]',
    summary: 'Emil Sinclair\'in gizemli arkadaşı Max Demian sayesinde kendi iç karanlığını ve benliğini keşfetmesi.',
    keyThemes: ['Yumurta ve Dünya', 'Abraxas', 'Kendini Bulmak'],
    historicalContext: 'Birinci Dünya Savaşı sonrası gençliğin uyanış manifestosu.',
    passages: [
      { id: 'dmn_1', difficulty: 'hard', quote: 'Kuş yumurtadan çıkmak için mücadele eder; yumurta dünyadır; doğmak isteyen bir dünyayı yok etmek zorundadır.' }
    ]
  },
  {
    id: 'madame-bovary',
    title: 'Madame Bovary',
    originalTitle: 'Madame Bovary',
    author: 'Gustave Flaubert',
    authorBio: 'Fransız gerçekçi romanının kurucusu.',
    authorBirthDeath: '1821 - 1880',
    year: '1857',
    genre: 'classics',
    secondaryGenres: ['drama'],
    coverBg: 'from-[#BE185D] to-[#831843]',
    summary: 'Romantik kitapların hayaliyle yaşayan Emma Bovary\'nin taşra sıradanlığına karşı trajik çöküşüdür.',
    keyThemes: ['Bovarizm', 'Romantik Yanılsama', 'Tatminsizlik'],
    historicalContext: 'Modern gerçekçi romanın üslup ve dil açısından doruk noktası.',
    passages: [
      { id: 'mbv_1', difficulty: 'medium', quote: 'İnsan kalbi bir sokak lambası gibidir; rüzgar estikçe söner ve titrer.' }
    ]
  },
  {
    id: 'kirmizi-ve-siyah',
    title: 'Kırmızı ve Siyah',
    originalTitle: 'Le Rouge et le Noir',
    author: 'Stendhal',
    authorBio: 'Psikolojik gerçekçiliğin Fransız öncüsü.',
    authorBirthDeath: '1783 - 1842',
    year: '1830',
    genre: 'classics',
    secondaryGenres: ['history'],
    coverBg: 'from-[#991B1B] to-[#1C1917]',
    summary: 'Yoksul ama hırslı Julien Sorel\'in Restorasyon Fransası sosyetesinde tutku ve ikiyüzlülükle yükselişi.',
    keyThemes: ['Hırs ve Yükseliş', 'İki Yüzlülük', 'Sınıf Çatışması'],
    historicalContext: 'Fransız toplumunun sınıfsal yapısını ifşa eden psikolojik roman.',
    passages: [
      { id: 'kvs_1', difficulty: 'medium', quote: 'Büyük tutkular sessizce büyür ve fırtına gibi aniden patlak verir.' }
    ]
  },
  {
    id: 'altinci-kogus',
    title: 'Altıncı Koğuş',
    originalTitle: 'Palata No. 6',
    author: 'Anton Çehov',
    authorBio: 'Modern öykücülüğün ve Rus edebiyatının büyük ustası.',
    authorBirthDeath: '1860 - 1904',
    year: '1892',
    genre: 'classics',
    secondaryGenres: ['philosophy', 'psychology'],
    coverBg: 'from-[#475569] to-[#1E293B]',
    summary: 'Bir taşra akıl hastanesinde doktor Ragin ile felsefi hasta Gromov arasındaki sarsıcı diyaloglar.',
    keyThemes: ['Felsefi Kayıtsızlık', 'Delilik ve Akıl', 'Toplumsal Tımarhane'],
    historicalContext: 'Rus aydınının hareketsizliğine ve Stoacı kayıtsızlığına sert bir eleştiri.',
    passages: [
      { id: 'alk_1', difficulty: 'medium', quote: 'Düşünce ve akıl, insanın sahip olduğu en yüce ve dokunulmaz sığınaktır.' }
    ]
  },

  // =========================================================================
  // 3. TÜRK EDEBİYATI (TURKISH LITERATURE)
  // =========================================================================
  {
    id: 'kurk-mantolu-madonna',
    title: 'Kürk Mantolu Madonna',
    originalTitle: 'Kürk Mantolu Madonna',
    author: 'Sabahattin Ali',
    authorBio: 'İnsan ruhunun derinliklerini duru bir dille anlatan büyük Türk yazarı.',
    authorBirthDeath: '1907 - 1948',
    year: '1943',
    genre: 'turkish',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#9A3412] to-[#431407]',
    summary: 'Raif Efendi\'nin Berlin\'de ressam Maria Puder ile yaşadığı saf ve trajik aşkın hatıra defteridir.',
    keyThemes: ['Yalnızlık', 'Ruhsal Bağlantı', 'İçsel Sessizlik'],
    historicalContext: 'Türk edebiyatının en çok okunan başyapıtı.',
    passages: [
      { id: 'kmm_1', difficulty: 'easy', quote: 'İçimizde şeytan yok; içimizde aciz ve tembel bir ruh var.' },
      { id: 'kmm_3', difficulty: 'medium', quote: 'Dünyada bana hiçbir şey, yaşama sevinci kadar kıymetli görünmüyordu.' },
      { id: 'kmm_5', difficulty: 'hard', quote: 'Bir insanın diğer bir insanı bütünüyle anlaması kadar dünyada imkansız ve mucizevi bir şey yoktur.' },
      { id: 'kmm_6', difficulty: 'legendary', quote: 'Hayatta hiçbir zaman bir insana bu kadar çok bağlanmamalıydım; çünkü insanın bir başkasına bağlanması kendi özgürlüğünü kendi elleriyle teslim etmesidir.' }
    ]
  },
  {
    id: 'kuyucakli-yusuf',
    title: 'Kuyucaklı Yusuf',
    originalTitle: 'Kuyucaklı Yusuf',
    author: 'Sabahattin Ali',
    authorBio: 'Anadolu insanının ve kasaba gerçekçiliğinin öncüsü.',
    authorBirthDeath: '1907 - 1948',
    year: '1937',
    genre: 'turkish',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#B45309] to-[#713F12]',
    summary: 'Ailesi katledilen yetim Yusuf\'un Edremit kasabasındaki yozlaşmaya ve zulme karşı sessiz direnişi.',
    keyThemes: ['Kasaba Yozlaşması', 'Saf İnsan', 'Merhamet ve İsyan'],
    historicalContext: 'Türk edebiyatında köy ve kasaba gerçekçiliğini başlatan anıt roman.',
    passages: [
      { id: 'ky_1', difficulty: 'easy', quote: 'Bu dünyada merhametten daha asil bir erdem yoktur.' }
    ]
  },
  {
    id: 'icimizdeki-seytan',
    title: 'İçimizdeki Şeytan',
    originalTitle: 'İçimizdeki Şeytan',
    author: 'Sabahattin Ali',
    authorBio: 'Aydın ikiyüzlülüğünü ve bireysel iradesizliği ifşa eden yazar.',
    authorBirthDeath: '1907 - 1948',
    year: '1940',
    genre: 'turkish',
    secondaryGenres: ['psychology'],
    coverBg: 'from-[#7F1D1D] to-[#450A0A]',
    summary: 'Ömer ve Macide\'nin ilişkisi ekseninde İstanbul aydın çevrelerindeki sahtekarlık ve iradesizlik.',
    keyThemes: ['İçimizdeki Şeytan', 'İradesizlik', 'Aydın Eleştirisi'],
    historicalContext: 'Dönemin milliyetçi ve bohem aydın çevrelerini hicveden sarsıcı roman.',
    passages: [
      { id: 'is_1', difficulty: 'medium', quote: 'İnsanlar birbirlerini ne kadar az tanıyorlar ve ne kadar kolay yargılıyorlar.' }
    ]
  },
  {
    id: 'tutunamayanlar',
    title: 'Tutunamayanlar',
    originalTitle: 'Tutunamayanlar',
    author: 'Oğuz Atay',
    authorBio: 'Postmodern Türk romanının kurucusu.',
    authorBirthDeath: '1934 - 1977',
    year: '1972',
    genre: 'turkish',
    secondaryGenres: ['modernist'],
    coverBg: 'from-[#1E293B] to-[#0F172A]',
    summary: 'Turgut Özben\'in intihar eden arkadaşı Selim Işık\'ın izini sürerek Türk aydınının yabancılaşmasıyla yüzleşmesidir.',
    keyThemes: ['Tutunamayanlar', 'İroni', 'Yabancılaşma'],
    historicalContext: 'Türk romanında modernist ve postmodernist anlatımın başyapıtı.',
    passages: [
      { id: 'ttn_1', difficulty: 'easy', quote: 'Kelimeler albayım, bazı anlamlara gelmiyor.' },
      { id: 'ttn_3', difficulty: 'medium', quote: 'Bizi anlamadılar Selim; bizi hiçbir zaman anlamayacaklar.' },
      { id: 'ttn_5', difficulty: 'legendary', quote: 'Bütün hayatımı başkalarının çizdiği dar kalıpların içine sığmaya çalışarak tükettim; oysa ben sadece kendi gökyüzümde kaybolmak istiyordum.' }
    ]
  },
  {
    id: 'tehlikeli-oyunlar',
    title: 'Tehlikeli Oyunlar',
    originalTitle: 'Tehlikeli Oyunlar',
    author: 'Oğuz Atay',
    authorBio: 'İç monolog ve çok katmanlı anlatımın ustası.',
    authorBirthDeath: '1934 - 1977',
    year: '1973',
    genre: 'turkish',
    secondaryGenres: ['modernist'],
    coverBg: 'from-[#334155] to-[#0F172A]',
    summary: 'Hikmet Benol\'un bir gecekondunun üst katına çekilerek kendi kafasındaki karakterlerle kurduğu oyunlar dünyası.',
    keyThemes: ['Oyun ve Gerçeklik', 'Gecekondu', 'İç Hesaplaşma'],
    historicalContext: 'Bireyin zihnindeki parçalanmayı ve tiyatral dünyayı anlatan kült metin.',
    passages: [
      { id: 'to_1', difficulty: 'medium', quote: 'Ben iç dünyama çekildikçe dışarıdaki dünya daha da anlamsızlaşıyor.' }
    ]
  },
  {
    id: 'korkuyu-beklerken',
    title: 'Korkuyu Beklerken',
    originalTitle: 'Korkuyu Beklerken',
    author: 'Oğuz Atay',
    authorBio: 'Türk öykücülüğünde psikolojik ve fantastik derinlik ustası.',
    authorBirthDeath: '1934 - 1977',
    year: '1975',
    genre: 'turkish',
    secondaryGenres: ['mystery'],
    coverBg: 'from-[#4B5563] to-[#1F2937]',
    summary: 'Gizemli bir mektup alan adamın eve kapanıp belirsiz bir korkuyu beklemesini anlatan sarsıcı öyküler.',
    keyThemes: ['Korku ve Paranoya', 'Bekleyiş', 'Kuşatılmış Birey'],
    historicalContext: 'Modern kent insanının içsel korkularını anlatan öykü kitabı.',
    passages: [
      { id: 'kb_1', difficulty: 'hard', quote: 'Korku öyle sinsi bir duygudur ki, insanı henüz gerçekleşmemiş felaketlerin esiri haline getirir.' }
    ]
  },
  {
    id: 'huzur',
    title: 'Huzur',
    originalTitle: 'Huzur',
    author: 'Ahmet Hamdi Tanpınar',
    authorBio: 'Doğu-Batı sentezi, zaman felsefesi ve Türk musikisi ustası.',
    authorBirthDeath: '1901 - 1962',
    year: '1949',
    genre: 'turkish',
    secondaryGenres: ['modernist', 'classics'],
    coverBg: 'from-[#588157] to-[#283618]',
    summary: 'Mümtaz ile Nuran\'ın aşkı ekseninde İstanbul\'un tarihi dokusu ve Doğu-Batı medeniyet krizi.',
    keyThemes: ['Zaman Felsefesi', 'Türk Musikisi', 'Huzursuzluk'],
    historicalContext: 'Modern Türk edebiyatının estetik zirvesi.',
    passages: [
      { id: 'hzr_1', difficulty: 'easy', quote: 'Ne içindeyim zamanın, ne de büsbütün dışında.' },
      { id: 'hzr_4', difficulty: 'legendary', quote: 'Musiki öyle bir dildir ki, kelimelerin bittiği ve suskunluğun başladığı yerde insan ruhunun en mahrem köşelerine tercüman olur.' }
    ]
  },
  {
    id: 'saatleri-ayarlama-enstitusu',
    title: 'Saatleri Ayarlama Enstitüsü',
    originalTitle: 'Saatleri Ayarlama Enstitüsü',
    author: 'Ahmet Hamdi Tanpınar',
    authorBio: 'Türk modernleşmesinin en büyük ironik anlatıcısı.',
    authorBirthDeath: '1901 - 1962',
    year: '1961',
    genre: 'turkish',
    secondaryGenres: ['satire', 'modernist'],
    coverBg: 'from-[#B45309] to-[#713F12]',
    summary: 'Hayri İrdal ve Halit Ayarcı\'nın kurduğu absürd enstitü üzerinden Türk modernleşmesinin hicvi.',
    keyThemes: ['Zaman ve Saat', 'Doğu-Batı İronisi', 'Bürokrasi'],
    historicalContext: 'Türk edebiyatının en parlak modernleşme ve bürokrasi taşlaması.',
    passages: [
      { id: 'sae_1', difficulty: 'medium', quote: 'Saat, insanın kendi varoluşunu ve faniliğini hatırlatan en acımasız aynadır.' }
    ]
  },
  {
    id: 'bes-sehir',
    title: 'Beş Şehir',
    originalTitle: 'Beş Şehir',
    author: 'Ahmet Hamdi Tanpınar',
    authorBio: 'Kültür ve medeniyet denemecisi.',
    authorBirthDeath: '1901 - 1962',
    year: '1946',
    genre: 'turkish',
    secondaryGenres: ['essay', 'history'],
    coverBg: 'from-[#854D0E] to-[#422006]',
    summary: 'Ankara, Erzurum, Konya, Bursa ve İstanbul şehirlerinin ruhunu ve mimarisini anlatan anıt deneme.',
    keyThemes: ['Şehir ve Ruh', 'Tarih Şuuru', 'Geçmiş Zaman'],
    historicalContext: 'Türkiye\'nin şehir kültürünü edebiyatla ebedileştiren başyapıt.',
    passages: [
      { id: 'bse_1', difficulty: 'hard', quote: 'Geçmiş zaman, ruhun derinliklerinde biriktirdiği en asil ve hüzünlü hatıralar hazinesidir.' }
    ]
  },
  {
    id: 'ince-memed',
    title: 'İnce Memed',
    originalTitle: 'İnce Memed',
    author: 'Yaşar Kemal',
    authorBio: 'Nobel adayı Türk destan ve roman anlatıcısı.',
    authorBirthDeath: '1923 - 2015',
    year: '1955',
    genre: 'turkish',
    secondaryGenres: ['classics', 'epic_fantasy'],
    coverBg: 'from-[#D97706] to-[#78350F]',
    summary: 'Abdi Ağa\'nın zulmüne karşı dağa çıkan İnce Memed\'in Çukurova efsanesine dönüşmesi.',
    keyThemes: ['Adalet ve Başkaldırı', 'Çukurova', 'Eşkıyalık'],
    historicalContext: '40\'tan fazla dile çevrilen modern halk destanı.',
    passages: [
      { id: 'im_1', difficulty: 'easy', quote: 'Zulmün olduğu yerde direniş haktır.' },
      { id: 'im_2', difficulty: 'medium', quote: 'İnsan dediğin bir topraktır; suyu sevgidir, güneşi ise adalettir.' }
    ]
  },
  {
    id: 'agrindagi-efsanesi',
    title: 'Ağrıdağı Efsanesi',
    originalTitle: 'Ağrıdağı Efsanesi',
    author: 'Yaşar Kemal',
    authorBio: 'Anadolu efsanelerinin büyük ozanı.',
    authorBirthDeath: '1923 - 2015',
    year: '1970',
    genre: 'turkish',
    secondaryGenres: ['mythology'],
    coverBg: 'from-[#B91C1C] to-[#7F1D1D]',
    summary: 'Ahmet ile Gülbahar\'ın Ağrı Dağı eteklerinde geçen destansı ve ölümsüz sevdası.',
    keyThemes: ['Aşk ve Dağ', 'Halk İradesi', 'Efsane'],
    historicalContext: 'Halk motifleriyle örülü lirik bir destan romanı.',
    passages: [
      { id: 'ade_1', difficulty: 'hard', quote: 'Dağlar ne kadar yüce olsa da sevda ateşi onların zirvesindeki karları eritmeye yeter.' }
    ]
  },
  {
    id: 'aylak-adam',
    title: 'Aylak Adam',
    originalTitle: 'Aylak Adam',
    author: 'Yusuf Atılgan',
    authorBio: 'Modern Türk edebiyatında yabancılaşma ve yalnızlığın öncüsü.',
    authorBirthDeath: '1921 - 1989',
    year: '1959',
    genre: 'turkish',
    secondaryGenres: ['modernist'],
    coverBg: 'from-[#4B5563] to-[#1F2937]',
    summary: 'C. karakterinin kentte aylaklık ederek gerçek bir sevgi ve anlam arayışıdır.',
    keyThemes: ['Aylaklık', 'Sessizlik', 'Bireysel Yabancılaşma'],
    historicalContext: 'Türk edebiyatında varoluşçu temanın ilk yetkin örneği.',
    passages: [
      { id: 'ayl_1', difficulty: 'easy', quote: 'Sustu; konuşsa her şey bozulacaktı.' }
    ]
  },
  {
    id: 'anayurt-oteli',
    title: 'Anayurt Oteli',
    originalTitle: 'Anayurt Oteli',
    author: 'Yusuf Atılgan',
    authorBio: 'Psikolojik gerilim ve yabancılaşma ustası.',
    authorBirthDeath: '1921 - 1989',
    year: '1973',
    genre: 'turkish',
    secondaryGenres: ['psychology', 'mystery'],
    coverBg: 'from-[#1F2937] to-[#111827]',
    summary: 'Katip Zebercet\'in gecikmeli Ankara treniyle gelen gizemli kadını beklerken deliliğe sürüklenişi.',
    keyThemes: ['Yalnızlık', 'Takıntı', 'Zamanın Durması'],
    historicalContext: 'Türk romanında psikolojik yabancılaşmanın doruk noktası.',
    passages: [
      { id: 'ano_1', difficulty: 'medium', quote: 'Yalnızlık, insanın kendi ayak seslerini dinlemekten bile korktuğu sonsuz bir sessizliktir.' }
    ]
  },
  {
    id: 'dokuzuncu-hariciye-kogusu',
    title: 'Dokuzuncu Hariciye Koğuşu',
    originalTitle: 'Dokuzuncu Hariciye Koğuşu',
    author: 'Peyami Safa',
    authorBio: 'Psikolojik tahlil ustası Türk romancısı.',
    authorBirthDeath: '1899 - 1961',
    year: '1930',
    genre: 'turkish',
    secondaryGenres: ['psychology'],
    coverBg: 'from-[#047857] to-[#064E3B]',
    summary: 'Bacağındaki kemik hastalığı yüzünden hastane koğuşlarında yatan genç bir hastanın aşkı ve acısı.',
    keyThemes: ['Hastalık Psikolojisi', 'İçsel Algı', 'Platonik Aşk'],
    historicalContext: 'Türk edebiyatında otobiyografik psikolojik romanın zirvesi.',
    passages: [
      { id: 'dhk_1', difficulty: 'medium', quote: 'Hastalık, bedenin değil ruhun dünyayı daha derin ve keskin algılama halidir.' }
    ]
  },
  {
    id: 'alemdagda-var-bir-yilan',
    title: 'Alemdağ\'da Var Bir Yılan',
    originalTitle: 'Alemdağ\'da Var Bir Yılan',
    author: 'Sait Faik Abasıyanık',
    authorBio: 'İstanbul hikayecisi ve sevgi hümanisti.',
    authorBirthDeath: '1906 - 1954',
    year: '1954',
    genre: 'turkish',
    secondaryGenres: ['modernist'],
    coverBg: 'from-[#0284C7] to-[#0369A1]',
    summary: 'Yalnızlık, yabancılaşma ve gerçeküstü imgelerle örülü modern Türk hikayeciliğinin başyapıtı.',
    keyThemes: ['Sevmek', 'İstanbul', 'Gerçeküstü Yalnızlık'],
    historicalContext: 'Sait Faik\'in gerçeküstücülüğe adım attığı son ve en derin hikaye kitabı.',
    passages: [
      { id: 'avy_1', difficulty: 'easy', quote: 'Sevmek, bir insanı sevmekle başlar her şey.' }
    ]
  },

  // =========================================================================
  // 4. ŞİİR & DİZELER (POETRY)
  // =========================================================================
  {
    id: 'memleketimden-insan-manzaralari',
    title: 'Memleketimden İnsan Manzaraları',
    originalTitle: 'Memleketimden İnsan Manzaraları',
    author: 'Nazım Hikmet',
    authorBio: '20. yüzyıl dünya şiirinin büyük ustası.',
    authorBirthDeath: '1902 - 1963',
    year: '1966',
    genre: 'poetry',
    secondaryGenres: ['turkish', 'history'],
    coverBg: 'from-[#DC2626] to-[#991B1B]',
    summary: 'Haydarpaşa Garı\'ndan kalkan trende Anadolu insanının panoramik ve destansı şiiridir.',
    keyThemes: ['Halk Sevgisi', 'Hürriyet', 'Lirik Destan'],
    historicalContext: 'Türk şiirinin en büyük nehir destanı.',
    passages: [
      { id: 'nh_1', difficulty: 'easy', quote: 'Yaşamak bir ağaç gibi tek ve hür.' }
    ]
  },
  {
    id: 'kuvayi-milliye-destani',
    title: 'Kuvâyi Milliye Destanı',
    originalTitle: 'Kuvâyi Milliye Destanı',
    author: 'Nazım Hikmet',
    authorBio: 'Kurtuluş Savaşı destanının büyük şairi.',
    authorBirthDeath: '1902 - 1963',
    year: '1965',
    genre: 'poetry',
    secondaryGenres: ['history'],
    coverBg: 'from-[#B91C1C] to-[#7F1D1D]',
    summary: 'Kurtuluş Savaşı\'nın köylüsünü, kadınlarını ve askerlerini anlatan epik şiir anıtı.',
    keyThemes: ['Milli Mücadele', 'Vatan Sevgisi', 'Halk Kahramanları'],
    historicalContext: 'Milli Mücadele\'yi anlatan en lirik destan.',
    passages: [
      { id: 'kmd_1', difficulty: 'medium', quote: 'Dörtnala gelip Uzak Asya\'dan Akdeniz\'e bir kısrak başı gibi uzanan bu memleket bizim.' }
    ]
  },
  {
    id: 'henuz-vakit-varken-gulum',
    title: 'Henüz Vakit Varken Gülüm',
    originalTitle: 'Henüz Vakit Varken Gülüm',
    author: 'Nazım Hikmet',
    authorBio: 'Umut ve sevda şairi.',
    authorBirthDeath: '1902 - 1963',
    year: '1976',
    genre: 'poetry',
    secondaryGenres: ['turkish'],
    coverBg: 'from-[#EA580C] to-[#C2410C]',
    summary: 'Geleceğe ve insana duyulan sarsılmaz inancın lirik dizeleri.',
    keyThemes: ['Umut', 'Gelecek Günler', 'Sevda'],
    historicalContext: 'Nazım\'ın en çok ezberlenen umut şiirleri.',
    passages: [
      { id: 'hvg_1', difficulty: 'hard', quote: 'En güzel deniz henüz gidilmemiş olandır; en güzel çocuk henüz büyümedi; en güzel günlerimiz henüz yaşamadıklarımızdır.' }
    ]
  },
  {
    id: 'sevda-sozleri',
    title: 'Sevda Sözleri',
    originalTitle: 'Sevda Sözleri',
    author: 'Cemal Süreya',
    authorBio: 'İkinci Yeni şiirinin öncüsü ve aşkın büyük şairi.',
    authorBirthDeath: '1931 - 1990',
    year: '1984',
    genre: 'poetry',
    secondaryGenres: ['turkish'],
    coverBg: 'from-[#E11D48] to-[#9F1239]',
    summary: 'Aşkı, yalnızlığı ve gündelik hayatı eşsiz bir dil estetiğiyle buluşturan şiirlerin bütünüdür.',
    keyThemes: ['Aşk', 'Dilin Kıvraklığı', 'Hüzün'],
    historicalContext: 'Çağdaş Türk şiirinin en çok okunan külliyatı.',
    passages: [
      { id: 'cs_1', difficulty: 'easy', quote: 'Hayat kısa, kuşlar uçuyor.' },
      { id: 'cs_2', difficulty: 'medium', quote: 'Aklıma gelme diye kendime söz verdim; sonra her sokak başında sana rastladım.' }
    ]
  },
  {
    id: 'uvercinka',
    title: 'Üvercinka',
    originalTitle: 'Üvercinka',
    author: 'Cemal Süreya',
    authorBio: 'Türkçenin en duyarlı erotik ve lirik şairi.',
    authorBirthDeath: '1931 - 1990',
    year: '1958',
    genre: 'poetry',
    secondaryGenres: ['turkish'],
    coverBg: 'from-[#BE185D] to-[#831843]',
    summary: 'İkinci Yeni şiirinin miladı sayılan, dil kurallarını sarsan kült şiir kitabı.',
    keyThemes: ['Üvercinka', 'Öpüşmek', 'Erotizm ve Masumiyet'],
    historicalContext: 'Yeditepe Şiir Armağanı kazanan efsanevi ilk kitap.',
    passages: [
      { id: 'uvr_1', difficulty: 'hard', quote: 'Seni bir kere öpsem ikinin hatırı kalıyordu; iki kere öpsem üçün boynu bükük kalıyordu.' }
    ]
  },
  {
    id: 'goge-bakma-duragi',
    title: 'Göğe Bakma Durağı',
    originalTitle: 'Dünyanın En Güzel Arabistanı',
    author: 'Turgut Uyar',
    authorBio: 'İkinci Yeni\'nin hüzünlü ve derinlikli şairi.',
    authorBirthDeath: '1927 - 1985',
    year: '1959',
    genre: 'poetry',
    secondaryGenres: ['turkish'],
    coverBg: 'from-[#2563EB] to-[#1E40AF]',
    summary: 'Kentin boğuntusundan kaçıp gökyüzüne sığınan sevgililerin ölümsüz şiiri.',
    keyThemes: ['Göğe Bakmak', 'Ortak Sığınak', 'Kent Kaçışı'],
    historicalContext: 'Modern Türk insanının yalnızlığına tercüman olan en popüler şiir.',
    passages: [
      { id: 'tu_1', difficulty: 'easy', quote: 'İkimiz birden sevinebiliriz göğe bakalım.' },
      { id: 'tu_2', difficulty: 'medium', quote: 'Durma göğe bakalım; gökyüzü hepimizin tek ortak sığınağıdır.' }
    ]
  },
  {
    id: 'hasretinden-prangalar-eskittim',
    title: 'Hasretinden Prangalar Eskittim',
    originalTitle: 'Hasretinden Prangalar Eskittim',
    author: 'Ahmed Arif',
    authorBio: 'Toplumcu gerçekçi Türk şiirinin gür sesli ustası.',
    authorBirthDeath: '1927 - 1991',
    year: '1968',
    genre: 'poetry',
    secondaryGenres: ['turkish'],
    coverBg: 'from-[#7F1D1D] to-[#450A0A]',
    summary: 'Hapishane duvarları arasından sevgiliye ve memlekete duyulan tutkulu hasret dizeleri.',
    keyThemes: ['Hasret', 'Demir Kapı', 'Direniş ve Sevda'],
    historicalContext: 'Türkiye\'de tüm zamanların en çok baskı yapan şiir kitabı.',
    passages: [
      { id: 'aa_1', difficulty: 'easy', quote: 'Haberin var mı taş duvar; demir kapı, kör pencere?' },
      { id: 'aa_2', difficulty: 'hard', quote: 'Yokluğun cehennemin öbür adıdır; üşüyorum, kapama gözlerini.' }
    ]
  },
  {
    id: 'lavinia',
    title: 'Lavinia',
    originalTitle: 'Lavinia',
    author: 'Özdemir Asaf',
    authorBio: 'Duru ve vurucu aforizma şiirlerinin şairi.',
    authorBirthDeath: '1923 - 1981',
    year: '1957',
    genre: 'poetry',
    secondaryGenres: ['turkish'],
    coverBg: 'from-[#4C1D95] to-[#2E1065]',
    summary: 'Adını gizlediği sevgilisine yazdığı Türk edebiyatının en dokunaklı veda ve aşk şiiri.',
    keyThemes: ['Sana Gitme Demeyeceğim', 'Gizli Aşk', 'Gurur'],
    historicalContext: 'Mevhibe Meziyet Beyat\'a yazılmış ölümsüz şiir.',
    passages: [
      { id: 'lvn_1', difficulty: 'easy', quote: 'Sana gitme demeyeceğim, ama gitme Lavinia.' }
    ]
  },
  {
    id: 'yalnizlik-paylasilmaz',
    title: 'Yalnızlık Paylaşılmaz',
    originalTitle: 'Yalnızlık Paylaşılmaz',
    author: 'Özdemir Asaf',
    authorBio: 'Yalnızlık ve insan ilişkilerinin derin şairi.',
    authorBirthDeath: '1923 - 1981',
    year: '1962',
    genre: 'poetry',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#312E81] to-[#1E1B4B]',
    summary: 'Yalnızlığın tek başına taşınan ağırlığı üzerine felsefi aforizma şiirleri.',
    keyThemes: ['Yalnızlık', 'Paylaşılmazlık', 'İçsel Ağırlık'],
    historicalContext: 'Özdemir Asaf\'ın başucu şiir kitabı.',
    passages: [
      { id: 'ylp_1', difficulty: 'medium', quote: 'Yalnızlık paylaşılsaydı adı yalnızlık olmazdı; o ancak tek başına taşınan bir yüktür.' }
    ]
  },
  {
    id: 'ben-sana-mecburum',
    title: 'Ben Sana Mecburum',
    originalTitle: 'Ben Sana Mecburum',
    author: 'Attila İlhan',
    authorBio: 'Mavi akımının öncüsü ve Türk şiirinin kaptanı.',
    authorBirthDeath: '1925 - 2005',
    year: '1960',
    genre: 'poetry',
    secondaryGenres: ['turkish'],
    coverBg: 'from-[#0F172A] to-[#1E293B]',
    summary: 'Ayrılıklar, yağmurlu geceler ve tutkulu bağlılıklarla örülü anıt şiirler.',
    keyThemes: ['Mecburiyet', 'Yağmur ve Ayrılık', 'Tutku'],
    historicalContext: 'Cumhuriyet dönemi Türk şiirinin en sevilen kitaplarından biri.',
    passages: [
      { id: 'bsm_1', difficulty: 'easy', quote: 'Ben sana mecburum bilemezsin, adını mıh gibi aklımda tutuyorum.' }
    ]
  },
  {
    id: 'elde-var-huzun',
    title: 'Elde Var Hüzün',
    originalTitle: 'Elde Var Hüzün',
    author: 'Attila İlhan',
    authorBio: 'Hüzün ve akşamların büyük şairi.',
    authorBirthDeath: '1925 - 2005',
    year: '1982',
    genre: 'poetry',
    secondaryGenres: ['turkish'],
    coverBg: 'from-[#374151] to-[#111827]',
    summary: 'Zamanın akışı içinde tükenen ömür ve geriye kalan asil hüzün üzerine şiirler.',
    keyThemes: ['Kurtlar Sofrası', 'Akşam ve Hüzün', 'Geçip Giden Ömür'],
    historicalContext: 'Attila İlhan\'ın olgunluk dönemi şaheseri.',
    passages: [
      { id: 'evh_1', difficulty: 'medium', quote: 'Ne vakit bir yaşamak düşünsem, bu kurtlar sofrasında akşam olur.' }
    ]
  },

  // =========================================================================
  // 5. MODERNİZM & BİLİNÇAKIŞI (MODERNISM)
  // =========================================================================
  {
    id: 'kayip-zamanin-izinde',
    title: 'Kayıp Zamanın İzinde',
    originalTitle: 'À la recherche du temps perdu',
    author: 'Marcel Proust',
    authorBio: 'Modernist romanın ve hafıza estetiğinin Fransız dehası.',
    authorBirthDeath: '1871 - 1922',
    year: '1913',
    genre: 'modernist',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#7C3AED] to-[#5B21B6]',
    summary: 'Madlen kekiyle canlanan çocukluk anılarının ve zamanı sanatla ebedileştirmenin 7 ciltlik anıtsal nehir romanı.',
    keyThemes: ['İstemsiz Hafıza', 'Madlen Keki', 'Sanatın Ölümsüzlüğü'],
    historicalContext: '20. yüzyıl roman sanatını baştan aşağı değiştiren başyapıt.',
    passages: [
      { id: 'pr_1', difficulty: 'easy', quote: 'Gerçek keşif yolculuğu yeni manzaralar aramakta değil, yeni gözlere sahip olmaktadır.' },
      { id: 'pr_2', difficulty: 'medium', quote: 'Bir anı, tadılan küçük bir madlen kekiyle zihinde yeniden canlanan koskoca bir dünyadır.' },
      { id: 'pr_4', difficulty: 'legendary', quote: 'Sanat tek gerçek yaşamdır; çünkü sanatçının kendi gözleriyle dünyayı algılamasını ve bu benzersiz bakış açısını sonsuzluğa armağan etmesini sağlar.' }
    ]
  },
  {
    id: 'ulysses',
    title: 'Ulysses',
    originalTitle: 'Ulysses',
    author: 'James Joyce',
    authorBio: 'Bilinçakışı tekniğinin ve modern edebiyatın İrlandalı dehası.',
    authorBirthDeath: '1882 - 1941',
    year: '1922',
    genre: 'modernist',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#0D9488] to-[#115E59]',
    summary: 'Leopold Bloom\'un Dublin\'de geçen tek bir gününü Odysseia destanına paralel bilinçakışıyla anlatır.',
    keyThemes: ['Bilinçakışı', 'Tarihin Kabusu', 'Dublin'],
    historicalContext: 'Dünya romanının en devrimci ve karmaşık metni.',
    passages: [
      { id: 'jy_1', difficulty: 'easy', quote: 'Tarih, uyanmaya çalıştığım bir kabustur.' }
    ]
  },
  {
    id: 'sanatcinin-bir-genc-adam-olarak-portresi',
    title: 'Sanatçının Bir Genç Adam Olarak Portresi',
    originalTitle: 'A Portrait of the Artist as a Young Man',
    author: 'James Joyce',
    authorBio: 'Otobiyografik modernizmin ustası.',
    authorBirthDeath: '1882 - 1941',
    year: '1916',
    genre: 'modernist',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#0891B2] to-[#164E63]',
    summary: 'Stephen Dedalus\'un dini ve milli zincirleri kırarak özgür bir sanatçıya dönüşmesi.',
    keyThemes: ['Özgür Ruh', 'Sanat İradesi', 'Zincirleri Kırmak'],
    historicalContext: 'Modernist sanatçının doğuş manifestosu.',
    passages: [
      { id: 'sbg_1', difficulty: 'medium', quote: 'Ruhum, kendi kanatlarıyla gökyüzüne yükselmek için bütün zincirlerini kırmak zorundaydı.' }
    ]
  },
  {
    id: 'dublinliler',
    title: 'Dublinliler',
    originalTitle: 'Dubliners',
    author: 'James Joyce',
    authorBio: 'Kısa öykü ve epifani ustası.',
    authorBirthDeath: '1882 - 1941',
    year: '1914',
    genre: 'modernist',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#334155] to-[#0F172A]',
    summary: 'Dublin halkının felç olmuş ruhsal durumunu ve "Ölüler" öyküsünün eşsiz kapanışını anlatan 15 hikaye.',
    keyThemes: ['Epifani (Aydınlanma)', 'Ruhsal Felç', 'Ölüler'],
    historicalContext: 'Modern kısa öykünün dönüm noktası.',
    passages: [
      { id: 'dbl_1', difficulty: 'hard', quote: 'Kar bütün İrlanda üzerine, yaşayanların ve ölülerin üzerine usul usul yağıyordu.' }
    ]
  },
  {
    id: 'ses-ve-ofke',
    title: 'Ses ve Öfke',
    originalTitle: 'The Sound and the Fury',
    author: 'William Faulkner',
    authorBio: 'Çok sesli bilinçakışının Nobel Ödüllü ustası.',
    authorBirthDeath: '1897 - 1962',
    year: '1929',
    genre: 'modernist',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#B45309] to-[#78350F]',
    summary: 'Compson ailesinin çöküşünü zihinsel engelli Benjy, Quentin ve Jason\'ın gözünden anlatan çok katmanlı eser.',
    keyThemes: ['Geçmişin Ölmezliği', 'Ses ve Öfke', 'Parçalanan Zaman'],
    historicalContext: 'Amerikan edebiyatının en zorlu ve büyüleyici modern klasiği.',
    passages: [
      { id: 'flk_1', difficulty: 'easy', quote: 'Geçmiş asla ölmez; hatta geçmiş bile değildir.' }
    ]
  },
  {
    id: 'dosegimde-olurken',
    title: 'Döşeğimde Ölürken',
    originalTitle: 'As I Lay Dying',
    author: 'William Faulkner',
    authorBio: 'Güney edebiyatının epik yazarı.',
    authorBirthDeath: '1897 - 1962',
    year: '1930',
    genre: 'modernist',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#78350F] to-[#451A03]',
    summary: 'Bundren ailesinin anneleri Addie\'nin cenazesini gömmek için çıktıkları trajikomik nehir yolculuğu.',
    keyThemes: ['Kelimelerin Yetersizliği', 'Ölüm Yolculuğu', 'Çok Sesli Bakış'],
    historicalContext: '15 farklı anlatıcının iç sesiyle yazılmış kurgu harikası.',
    passages: [
      { id: 'doo_1', difficulty: 'medium', quote: 'Kelimeler sadece bir boşluğu doldurmak için kullanılan çaresiz işaretlerdir.' }
    ]
  },
  {
    id: 'buyulu-dag',
    title: 'Büyülü Dağ',
    originalTitle: 'Der Zauberberg',
    author: 'Thomas Mann',
    authorBio: 'Alman düşünce romanının Nobel Ödüllü devi.',
    authorBirthDeath: '1875 - 1955',
    year: '1924',
    genre: 'modernist',
    secondaryGenres: ['philosophy', 'classics'],
    coverBg: 'from-[#1E3A8A] to-[#172554]',
    summary: 'Hans Castorp\'un İsviçre Alpleri\'ndeki sanatoryumda geçirdiği 7 yılda zaman, ölüm ve Avrupa uygarlığıyla hesaplaşmasıdır.',
    keyThemes: ['Zaman Algısı', 'Avrupa\'nın Çöküşü', 'Hastalık ve Bilgelik'],
    historicalContext: 'Birinci Dünya Savaşı öncesi Avrupa zihninin entelektüel anıtı.',
    passages: [
      { id: 'byd_1', difficulty: 'hard', quote: 'Zaman algısı, insanın içinde bulunduğu mekanın genişliği ve ruhun dinginliği ile doğrudan ilişkilidir.' }
    ]
  },

  // =========================================================================
  // 6. DİSTOPYA & GELECEK (DYSTOPIA)
  // =========================================================================
  {
    id: '1984',
    title: '1984',
    originalTitle: 'Nineteen Eighty-Four',
    author: 'George Orwell',
    authorBio: 'Totalitarizmi ifşa eden İngiliz yazar.',
    authorBirthDeath: '1903 - 1950',
    year: '1949',
    genre: 'dystopia',
    secondaryGenres: ['classics', 'politics'],
    coverBg: 'from-[#0F172A] to-[#020617]',
    summary: 'Geçmişin silindiği, düşüncenin suç sayıldığı Okyanusya\'da Büyük Birader\'e karşı hakikati arayan Winston Smith.',
    keyThemes: ['Büyük Birader', 'Çiftdüşün', 'Gözetim'],
    historicalContext: '20. yüzyılın en büyük siyasi uyarı metni.',
    passages: [
      { id: 'orw_1', difficulty: 'easy', quote: 'Büyük Birader seni izliyor.' },
      { id: 'orw_3', difficulty: 'medium', quote: 'Geçmişi kontrol eden geleceği kontrol eder; bugünü kontrol eden geçmişi kontrol eder.' },
      { id: 'orw_4', difficulty: 'hard', quote: 'Özgürlük, iki kere ikinin dört ettiğini söyleyebilmektir; buna izin verilirse arkası kendiliğinden gelir.' },
      { id: 'orw_5', difficulty: 'legendary', quote: 'Eğer geleceğin bir resmini görmek istiyorsanız, bir insanın yüzüne sonsuza dek basan bir postal hayal edin.' }
    ]
  },
  {
    id: 'hayvan-ciftligi',
    title: 'Hayvan Çiftliği',
    originalTitle: 'Animal Farm',
    author: 'George Orwell',
    authorBio: 'Siyasi taşlamanın ustası.',
    authorBirthDeath: '1903 - 1950',
    year: '1945',
    genre: 'dystopia',
    secondaryGenres: ['satire', 'classics'],
    coverBg: 'from-[#991B1B] to-[#7F1D1D]',
    summary: 'İnsanlara karşı devrim yapan çiftlik hayvanlarının domuzların diktatörlüğüne boyun eğiş masalı.',
    keyThemes: ['Eşitlik Yanılsaması', 'Güç Yozlaşması', 'Siyasi Fabl'],
    historicalContext: 'Diktatörlükleri ve propaganda mekanizmalarını hicveden başyapıt.',
    passages: [
      { id: 'hc_1', difficulty: 'easy', quote: 'Bütün hayvanlar eşittir ama bazıları daha eşittir.' }
    ]
  },
  {
    id: 'cesur-yeni-dunya',
    title: 'Cesur Yeni Dünya',
    originalTitle: 'Brave New World',
    author: 'Aldous Huxley',
    authorBio: 'Gelecek vizyoneri düşünür.',
    authorBirthDeath: '1894 - 1963',
    year: '1932',
    genre: 'dystopia',
    secondaryGenres: ['classics', 'science'],
    coverBg: 'from-[#0284C7] to-[#0369A1]',
    summary: 'Acının soma haplarıyla yok edildiği, konfor uğruna sanat ve aşkın feda edildiği genetik gelecek.',
    keyThemes: ['Zevk Yoluyla Kölelik', 'Şartlandırma', 'Soma'],
    historicalContext: 'Modern tüketim toplumunu zevkle kontrolü öngören distopya.',
    passages: [
      { id: 'bnw_1', difficulty: 'easy', quote: 'Sözcükler tıpkı röntgen ışınları gibidir; doğru kullanıldığında her şeyi delip geçer.' },
      { id: 'bnw_2', difficulty: 'medium', quote: 'Gerçek mutluluk hiçbir zaman görkemli değildir; o sessiz ve dingin bir kabulleniştir.' },
      { id: 'bnw_3', difficulty: 'hard', quote: 'İnsanlara acı çektirmeyerek onları köleleştiren bir düzen, zorbalıkla yönetilen bir düzenden çok daha tehlikelidir.' }
    ]
  },
  {
    id: 'fahrenheit-451',
    title: 'Fahrenheit 451',
    originalTitle: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    authorBio: 'Amerikan bilimkurgu ve fantezi şairi.',
    authorBirthDeath: '1920 - 2012',
    year: '1953',
    genre: 'dystopia',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#EA580C] to-[#C2410C]',
    summary: 'İtfaiyecilerin yangın söndürmek yerine kitap yaktığı bir gelecekte Guy Montag\'ın uyanışı.',
    keyThemes: ['Kitap Yakımı', 'Sansür', 'Bellek'],
    historicalContext: 'Kitap sevgisini anlatan en dokunaklı distopya.',
    passages: [
      { id: 'fh_1', difficulty: 'easy', quote: 'Kitapları yakmaktan daha büyük bir suç varsa o da onları okumamaktır.' },
      { id: 'fh_2', difficulty: 'medium', quote: 'Kitaplar bize sadece bilmediğimiz şeyleri değil, unuttuğumuz insanlığımızı da hatırlatır.' }
    ]
  },
  {
    id: 'biz',
    title: 'Biz',
    originalTitle: 'My (Мы)',
    author: 'Yevgeni Zamyatin',
    authorBio: 'Distopya edebiyatının babası.',
    authorBirthDeath: '1884 - 1937',
    year: '1924',
    genre: 'dystopia',
    secondaryGenres: ['modernist'],
    coverBg: 'from-[#0891B2] to-[#155E75]',
    summary: 'Camdan evlerde yaşayan, isim yerine numara taşıyan insanların TekDevlet düzeni.',
    keyThemes: ['Kusursuz Mantık', 'Duyguların Ameliyatı', 'Biz vs Ben'],
    historicalContext: '1984 ve Cesur Yeni Dünya\'ya ilham veren ilk modern distopya.',
    passages: [
      { id: 'zam_1', difficulty: 'medium', quote: 'Kusursuz mutluluk ile sınırsız özgürlük arasında daima uzlaşmaz bir savaş vardır.' }
    ]
  },

  // =========================================================================
  // 7. PSİKOLOJİ & İNSAN (PSYCHOLOGY)
  // =========================================================================
  {
    id: 'insanin-anlam-arayisi',
    title: 'İnsanın Anlam Arayışı',
    originalTitle: 'Man\'s Search for Meaning',
    author: 'Viktor Frankl',
    authorBio: 'Logoterapinin kurucusu Avusturyalı psikiyatrist.',
    authorBirthDeath: '1905 - 1997',
    year: '1946',
    genre: 'psychology',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#059669] to-[#064E3B]',
    summary: 'Toplama kampından sağ kurtulan Frankl\'ın insanın her koşulda bir anlam bularak yaşayabileceğini kanıtlaması.',
    keyThemes: ['Anlam İstenci', 'İçsel Tavır Seçimi', 'Logoterapi'],
    historicalContext: 'Milyonlarca insana rehberlik eden psikoloji klasiği.',
    passages: [
      { id: 'frk_1', difficulty: 'easy', quote: 'Yaşamak için bir nedeni olan her türlü nasıla katlanır.' },
      { id: 'frk_2', difficulty: 'medium', quote: 'İnsanın elinden her şey alınabilir; son özgürlüğü olan tavrını seçme hakkı hariç.' },
      { id: 'frk_3', difficulty: 'hard', quote: 'Koşulları değiştiremediğimiz anda, kendimizi değiştirmek zorunda olduğumuz gerçeğiyle yüzleşiriz.' }
    ]
  },
  {
    id: 'kesfedilmemis-benlik',
    title: 'Keşfedilmemiş Benlik',
    originalTitle: 'The Undiscovered Self',
    author: 'Carl Gustav Jung',
    authorBio: 'Analitik psikolojinin kurucusu.',
    authorBirthDeath: '1875 - 1961',
    year: '1957',
    genre: 'psychology',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#6B21A8] to-[#3B0764]',
    summary: 'Modern insanın kitle toplumu içinde bireyselliğini koruması ve kendi bilinçdışıyla yüzleşmesi.',
    keyThemes: ['İçsel Uyanış', 'Gölge', 'Bireysellik'],
    historicalContext: 'Modern toplumun kitlesel çılgınlığına karşı bireysel ruh reçetesi.',
    passages: [
      { id: 'jng_1', difficulty: 'easy', quote: 'Dışarı bakan rüya görür, içeri bakan uyanır.' }
    ]
  },
  {
    id: 'kirmizi-kitap',
    title: 'Kırmızı Kitap',
    originalTitle: 'Liber Novus / The Red Book',
    author: 'Carl Gustav Jung',
    authorBio: 'Arketipler ve vizyonlar kaşifi.',
    authorBirthDeath: '1875 - 1961',
    year: '2009',
    genre: 'psychology',
    secondaryGenres: ['mysticism', 'philosophy'],
    coverBg: 'from-[#991B1B] to-[#7F1D1D]',
    summary: 'Jung\'un kendi bilinçdışına yaptığı tehlikeli ve dönüştürücü içsel vizyon yolculuğu.',
    keyThemes: ['Karanlıkla Yüzleşme', 'Arketipler', 'İçsel Aydınlanma'],
    historicalContext: 'Jung\'un teorilerinin doğum yeri olan gizli günlüğü.',
    passages: [
      { id: 'jng_k_1', difficulty: 'medium', quote: 'Kendi karanlığıyla yüzleşmeyen hiçbir insan aydınlığa ve olgunluğa ulaşamaz.' }
    ]
  },
  {
    id: 'insan-ve-sembolleri',
    title: 'İnsan ve Sembolleri',
    originalTitle: 'Man and His Symbols',
    author: 'Carl Gustav Jung',
    authorBio: 'Sembolik dilin büyük teorisyeni.',
    authorBirthDeath: '1875 - 1961',
    year: '1964',
    genre: 'psychology',
    secondaryGenres: ['mythology'],
    coverBg: 'from-[#4338CA] to-[#312E81]',
    summary: 'Rüyaların, mitlerin ve sembollerin insan psikolojisindeki dönüştürücü gücü.',
    keyThemes: ['Rüyalar', 'Kolektif Bilinçdışı', 'Semboller'],
    historicalContext: 'Jung\'un genel okur için yazdığı son vasiyet kitabı.',
    passages: [
      { id: 'jng_s_1', difficulty: 'hard', quote: 'Bilinçdışını bilince dönüştürene kadar o hayatınızı yönetir ve siz ona kader dersiniz.' }
    ]
  },
  {
    id: 'sevme-sanati',
    title: 'Sevme Sanatı',
    originalTitle: 'The Art of Loving',
    author: 'Erich Fromm',
    authorBio: 'Psikanalist ve hümanist filozof.',
    authorBirthDeath: '1900 - 1980',
    year: '1956',
    genre: 'psychology',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#E11D48] to-[#881337]',
    summary: 'Sevginin bir rastlantı değil, bilgi, emek ve özen gerektiren aktif bir sanat olduğu.',
    keyThemes: ['Aktif Sevgi', 'Özen ve Saygı', 'Olgun Bağlılık'],
    historicalContext: 'Milyonlarca insana sevginin hakiki doğasını anlatan klasik.',
    passages: [
      { id: 'frm_1', difficulty: 'easy', quote: 'Sevgi bir duygu değil, aktif bir sanattır.' }
    ]
  },
  {
    id: 'ozgurlukten-kacis',
    title: 'Özgürlükten Kaçış',
    originalTitle: 'Escape from Freedom',
    author: 'Erich Fromm',
    authorBio: 'Toplumsal psikoloji ve otorite eleştirmeni.',
    authorBirthDeath: '1900 - 1980',
    year: '1941',
    genre: 'psychology',
    secondaryGenres: ['strategy', 'politics'],
    coverBg: 'from-[#1E293B] to-[#0F172A]',
    summary: 'Modern insanın yalnızlıktan korktuğu için özgürlüğünü totaliter liderlere nasıl teslim ettiği.',
    keyThemes: ['Yalnızlık Korkusu', 'Otoriterizm', 'Özgürlük'],
    historicalContext: 'Faşizmin psikolojik köklerini açıklayan kurucu metin.',
    passages: [
      { id: 'ozk_1', difficulty: 'medium', quote: 'İnsan kendi yalnızlığından korktuğu için özgürlüğünü otoriteye feda etmeye hazırdır.' }
    ]
  },
  {
    id: 'nietzsche-agladiginda',
    title: 'Nietzsche Ağladığında',
    originalTitle: 'When Nietzsche Wept',
    author: 'Irvin Yalom',
    authorBio: 'Varoluşçu psikoterapinin öncüsü romancı.',
    authorBirthDeath: '1931 - günümüz',
    year: '1992',
    genre: 'psychology',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#0369A1] to-[#0C4A6E]',
    summary: 'Josef Breuer ile Nietzsche\'nin Viyana\'da buluşup psikanalizin doğumunu ve ümitsizliği tedavi etmesi.',
    keyThemes: ['Varoluşsal Terapi', 'Ümitsizlik', 'Hakikat'],
    historicalContext: 'Psikoloji ile felsefeyi birleştiren çok satan roman.',
    passages: [
      { id: 'ylm_1', difficulty: 'medium', quote: 'Ümit etmek, sadece gerçekleşmeyecek arzuların acısını uzatmaktan başka bir işe yaramaz.' }
    ]
  },

  // =========================================================================
  // 8. DENEME & TEFEKKÜR (ESSAYS)
  // =========================================================================
  {
    id: 'denemeler',
    title: 'Denemeler',
    originalTitle: 'Les Essais',
    author: 'Michel de Montaigne',
    authorBio: 'Deneme türünün kurucusu.',
    authorBirthDeath: '1533 - 1592',
    year: '1580',
    genre: 'essay',
    secondaryGenres: ['philosophy', 'classics'],
    coverBg: 'from-[#854D0E] to-[#422006]',
    summary: 'Şatosunun kulesinde "Ben ne biliyorum?" diyerek insan doğasını ve kendini sorgulayan denemeler.',
    keyThemes: ['Kendini Tanımak', 'Şüphecilik', 'Ölümle Barışmak'],
    historicalContext: 'Dünya edebiyatında deneme türünü başlatan başyapıt.',
    passages: [
      { id: 'mnt_1', difficulty: 'easy', quote: 'Kendimi arıyorum, bu yüzden kendimi yazıyorum.' },
      { id: 'mnt_2', difficulty: 'medium', quote: 'Dünyanın en yüksek tahtında bile otursanız, oturacağınız yer kendi kıçınızın üstüdür.' },
      { id: 'mnt_3', difficulty: 'hard', quote: 'Başkalarının bilgisiyle bilgili olabilsek bile, ancak kendi aklımızla bilge olabiliriz.' }
    ]
  },
  {
    id: 'curumenin-kitabi',
    title: 'Çürümenin Kitabı',
    originalTitle: 'Précis de décomposition',
    author: 'Emil Cioran',
    authorBio: 'Varoluşsal nihilizmin lirik filozofu.',
    authorBirthDeath: '1911 - 1995',
    year: '1949',
    genre: 'essay',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#1F2937] to-[#030712]',
    summary: 'Faniliği, uykusuzluğu ve inançların çöküşünü şiirsel bir acımasızlıkla ele alan aforizmalar.',
    keyThemes: ['Çürüme', 'Uykusuzluk', 'Lirik Nihilizm'],
    historicalContext: 'Modern çağın en keskin kötümserlik metni.',
    passages: [
      { id: 'cir_1', difficulty: 'easy', quote: 'Yalnızca acı çekenler gerçek anlamda uyanıktır.' }
    ]
  },
  {
    id: 'dogmus-olmanin-sakincasi',
    title: 'Doğmuş Olmanın Sakıncası',
    originalTitle: 'De l\'inconvénient d\'être né',
    author: 'Emil Cioran',
    authorBio: 'Rumen asıllı Fransız aforizma ustası.',
    authorBirthDeath: '1911 - 1995',
    year: '1973',
    genre: 'essay',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#374151] to-[#111827]',
    summary: 'Var olmanın ağırlığı, doğumun sakıncası ve kelimelerin faniliği üzerine aforizmalar.',
    keyThemes: ['Doğumun Yükü', 'Kelimeler ve Mezar Taşları', 'Hiçlik'],
    historicalContext: 'Cioran\'ın en ünlü aforizma derlemelerinden biri.',
    passages: [
      { id: 'dos_1', difficulty: 'medium', quote: 'Bütün kitaplar yazılmış birer mezar taşıdır; kelimeler ise içindeki ölü düşünceler.' }
    ]
  },
  {
    id: 'varolma-egilimi',
    title: 'Varolma Eğilimi',
    originalTitle: 'La Tentation d\'exister',
    author: 'Emil Cioran',
    authorBio: 'Şüphecilik ve ümitsizlik filozofu.',
    authorBirthDeath: '1911 - 1995',
    year: '1960',
    genre: 'essay',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#4B5563] to-[#1F2937]',
    summary: 'Tarihin yanılsamaları ve insanın inanma ihtiyacına karşı zihinsel disiplin denemeleri.',
    keyThemes: ['İnançsızlığın Cesareti', 'Tarihsel İllüzyon', 'Zihin'],
    historicalContext: 'Entelektüel cesaretin sınırlarını zorlayan denemeler.',
    passages: [
      { id: 'veg_1', difficulty: 'hard', quote: 'Hiçbir şeye inanmamak, her şeye inanmaktan çok daha büyük bir disiplin ve cesaret gerektirir.' }
    ]
  },
  {
    id: 'bu-ulke',
    title: 'Bu Ülke',
    originalTitle: 'Bu Ülke',
    author: 'Cemil Meriç',
    authorBio: 'Türk düşünce dünyasının anıt ismi, mütefekkir.',
    authorBirthDeath: '1916 - 1987',
    year: '1974',
    genre: 'essay',
    secondaryGenres: ['turkish', 'philosophy'],
    coverBg: 'from-[#78350F] to-[#451A03]',
    summary: 'Doğu ve Batı medeniyetlerini, aydınların yabancılaşmasını ve dilin kutsallığını savunan anıt eser.',
    keyThemes: ['Tefekkürün Haysiyeti', 'Kitap Sevgisi', 'Kültür'],
    historicalContext: 'Türk aydınının kendi medeniyetiyle hesaplaştığı en temel metin.',
    passages: [
      { id: 'cm_1', difficulty: 'easy', quote: 'Kitaplar, insanlığın tek ve ebedi hafızasıdır.' },
      { id: 'cm_2', difficulty: 'medium', quote: 'Kelimeler kaybolunca düşünceler sığlaşır; dilini kaybeden bir millet hafızasını da kaybeder.' }
    ]
  },
  {
    id: 'jurnal',
    title: 'Jurnal',
    originalTitle: 'Jurnal',
    author: 'Cemil Meriç',
    authorBio: 'Münzevi düşünce ustası.',
    authorBirthDeath: '1916 - 1987',
    year: '1992',
    genre: 'essay',
    secondaryGenres: ['letters'],
    coverBg: 'from-[#854D0E] to-[#422006]',
    summary: 'Cemil Meriç\'in karanlık dünyasında kaleme aldığı kişisel çile ve tefekkür günlüğüdür.',
    keyThemes: ['Şüphe ve Düşünce', 'Yalnızlık', 'Fildişi Kule'],
    historicalContext: 'Türk entelektüel hayatının en samimi iç dökümü.',
    passages: [
      { id: 'jrn_1', difficulty: 'hard', quote: 'Düşünce şüpheyle başlar; şüphe etmeyen ve sorgulamayan bir zihin ancak bir esirdir.' }
    ]
  },

  // =========================================================================
  // 9. TARİH & STRATEJİ (STRATEGY)
  // =========================================================================
  {
    id: 'savas-sanati',
    title: 'Savaş Sanatı',
    originalTitle: 'Sunzi Bingfa (孫子兵法)',
    author: 'Sun Tzu',
    authorBio: 'Antik Çinli askeri stratejist.',
    authorBirthDeath: 'MÖ 544 - MÖ 496',
    year: 'MÖ 5. yy',
    genre: 'strategy',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#991B1B] to-[#7F1D1D]',
    summary: 'Çatışmaları savaşmadan kazanmanın stratejik prensipleri.',
    keyThemes: ['Savaşmadan Kazanmak', 'Stratejik Sabır', 'Düşmanı Tanımak'],
    historicalContext: '2500 yıldır dünya liderlerine rehberlik eden el kitabı.',
    passages: [
      { id: 'st_1', difficulty: 'easy', quote: 'En büyük zafer, savaşmadan kazanılan zaferdir.' },
      { id: 'st_2', difficulty: 'medium', quote: 'Kendini ve düşmanını iyi tanırsan, yüz savaşa girsen de tehlikeye düşmezsin.' }
    ]
  },
  {
    id: 'prens',
    title: 'Prens',
    originalTitle: 'Il Principe',
    author: 'Niccolò Machiavelli',
    authorBio: 'İtalyan siyaset teorisyeni.',
    authorBirthDeath: '1469 - 1527',
    year: '1532',
    genre: 'strategy',
    secondaryGenres: ['history'],
    coverBg: 'from-[#431407] to-[#1C1917]',
    summary: 'İktidarın nasıl kazanılacağını ve korunacağını ahlaki yanılsamalardan arındırarak inceler.',
    keyThemes: ['İktidar', 'Tilki ve Aslan', 'Korku ve Sevgi'],
    historicalContext: 'Modern siyaset biliminin kurucu metni.',
    passages: [
      { id: 'mch_1', difficulty: 'easy', quote: 'Sevilmektense korkulmak çok daha güvenlidir.' },
      { id: 'mch_2', difficulty: 'medium', quote: 'Aslan tuzaklardan kaçamaz, tilki ise kurtları kovamaz; öyleyse hem tilki hem aslan olmalısın.' }
    ]
  },
  {
    id: 'mukaddime',
    title: 'Mukaddime',
    originalTitle: 'Al-Muqaddimah (المقدمة)',
    author: 'İbn Haldun',
    authorBio: 'Sosyoloji ve tarih felsefesinin kurucusu.',
    authorBirthDeath: '1332 - 1406',
    year: '1377',
    genre: 'strategy',
    secondaryGenres: ['history', 'philosophy'],
    coverBg: 'from-[#92400E] to-[#451A03]',
    summary: 'Uygarlıkların doğuşunu ve çöküşünü asabiyet ve coğrafi şartlarla açıklayan anıt eser.',
    keyThemes: ['Coğrafya Kaderdir', 'Asabiyet', 'Medeniyet'],
    historicalContext: 'Bilimsel sosyolojiyi başlatan öncü eser.',
    passages: [
      { id: 'ibh_1', difficulty: 'medium', quote: 'Coğrafya kaderdir; toplumların karakterini ve geleceğini yaşadıkları toprak belirler.' }
    ]
  },
  {
    id: 'bir-omur-nasil-yasanir',
    title: 'Bir Ömür Nasıl Yaşanır',
    originalTitle: 'Bir Ömür Nasıl Yaşanır',
    author: 'İlber Ortaylı',
    authorBio: 'Tarihçi, yazar ve akademisyen.',
    authorBirthDeath: '1947 - günümüz',
    year: '2019',
    genre: 'strategy',
    secondaryGenres: ['essay'],
    coverBg: 'from-[#1E3A8A] to-[#172554]',
    summary: 'Kişisel gelişim, seyahat, okuma kültürü ve hayatı anlamlı kılma üzerine tecrübeler.',
    keyThemes: ['Merak', 'Cesaret', 'Kendi Hayatını Kurmak'],
    historicalContext: 'Modern Türk insanına hayat kılavuzu sunan söyleşi kitabı.',
    passages: [
      { id: 'ilb_1', difficulty: 'medium', quote: 'Cesur olun; hayatınızı başkalarının takdirine göre değil, kendi merakınıza göre kurun.' }
    ]
  },

  // =========================================================================
  // 10. DÜNYA TİYATROSU (DRAMA)
  // =========================================================================
  {
    id: 'hamlet',
    title: 'Hamlet',
    originalTitle: 'Hamlet',
    author: 'William Shakespeare',
    authorBio: 'İngiliz tiyatro dehası.',
    authorBirthDeath: '1564 - 1616',
    year: '1603',
    genre: 'drama',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#312E81] to-[#1E1B4B]',
    summary: 'Prens Hamlet\'in babasının intikamını alma ve varoluşsal şüphe tragedyası.',
    keyThemes: ['Olmak ya da Olmamak', 'İntikam', 'Şüphe'],
    historicalContext: 'Dünya tiyatrosunun en çok sahnelenen tragedyası.',
    passages: [
      { id: 'shk_1', difficulty: 'easy', quote: 'Olmak ya da olmamak, işte bütün mesele bu.' }
    ]
  },
  {
    id: 'macbeth',
    title: 'Macbeth',
    originalTitle: 'Macbeth',
    author: 'William Shakespeare',
    authorBio: 'Karanlık tutkuların şairi.',
    authorBirthDeath: '1564 - 1616',
    year: '1606',
    genre: 'drama',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#7F1D1D] to-[#450A0A]',
    summary: 'İktidar hırsıyla kralını öldüren Macbeth\'in vicdan azabı ve kanlı çöküşü.',
    keyThemes: ['İktidar Hırsı', 'Hayat Yürüyen Bir Gölgedir', 'Kader'],
    historicalContext: 'İktidar tutkusunun yarattığı deliliği anlatan tragedya.',
    passages: [
      { id: 'shk_2', difficulty: 'medium', quote: 'Hayat yürüyen bir gölgedir; sahnede çırpınan ve sonra unutulan zavallı bir aktördür.' }
    ]
  },
  {
    id: 'kral-lear',
    title: 'Kral Lear',
    originalTitle: 'King Lear',
    author: 'William Shakespeare',
    authorBio: 'Tragedya sanatının zirvesi.',
    authorBirthDeath: '1564 - 1616',
    year: '1606',
    genre: 'drama',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#4B5563] to-[#1F2937]',
    summary: 'Krallığını dalkavuk kızlarına paylaştırıp sadık kızını kovan yaşlı kralın deliliği.',
    keyThemes: ['Nankörlük', 'Delilik', 'Tiyatro Sahnesi'],
    historicalContext: 'İnsan çaresizliğini anlatan en karanlık tragedya.',
    passages: [
      { id: 'shk_3', difficulty: 'hard', quote: 'Biz bu dünyaya delilerin körlere kılavuzluk ettiği bir tiyatro sahnesi olarak doğarız.' }
    ]
  },
  {
    id: 'faust',
    title: 'Faust',
    originalTitle: 'Faust',
    author: 'Johann Wolfgang von Goethe',
    authorBio: 'Alman edebiyatının evrensel dehası.',
    authorBirthDeath: '1749 - 1832',
    year: '1808',
    genre: 'drama',
    secondaryGenres: ['classics', 'philosophy'],
    coverBg: 'from-[#991B1B] to-[#450A0A]',
    summary: 'Doktor Faust\'un mutlak tatmin ve bilgi uğruna Mefistofeles ile yaptığı ruh sözleşmesi.',
    keyThemes: ['Ruh Sözleşmesi', 'Güzelliğin Anı', 'Arayış'],
    historicalContext: 'Goethe\'nin yaşam boyu yazdığı anıtsal dramatik şiir.',
    passages: [
      { id: 'gth_1', difficulty: 'easy', quote: 'Dur ey an, öyle güzelsin ki!' },
      { id: 'gth_2', difficulty: 'medium', quote: 'İnsan çabaladığı sürece yanılır; fakat aramaktan vazgeçmeyen kurtuluşa erer.' }
    ]
  },
  {
    id: 'godotyu-beklerken',
    title: 'Godot\'yu Beklerken',
    originalTitle: 'En attendant Godot',
    author: 'Samuel Beckett',
    authorBio: 'Absürd tiyatronun Nobel Ödüllü ustası.',
    authorBirthDeath: '1906 - 1989',
    year: '1953',
    genre: 'drama',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#1F2937] to-[#111827]',
    summary: 'Vladimir ve Estragon\'un bir ağaç altında hiç gelmeyecek olan Godot\'yu absürd bekleyişi.',
    keyThemes: ['Bekleyiş', 'Absürd', 'Yenilgi'],
    historicalContext: '20. yüzyıl tiyatro anlayışını kökten yıkan başyapıt.',
    passages: [
      { id: 'bck_1', difficulty: 'easy', quote: 'Hep denedin, hep yenildin. Olsun. Yine dene, yine yenil, daha iyi yenil.' }
    ]
  },

  // =========================================================================
  // 11. TASAVVUF & DOĞU (MYSTICISM)
  // =========================================================================
  {
    id: 'mesnevi',
    title: 'Mesnevi',
    originalTitle: 'Mesnevi-i Manevi',
    author: 'Mevlana Celaleddin Rumi',
    authorBio: 'Evrensel sevgi ve ilahi aşkın büyük bilgesi.',
    authorBirthDeath: '1207 - 1273',
    year: '1273',
    genre: 'mysticism',
    secondaryGenres: ['poetry', 'philosophy'],
    coverBg: 'from-[#065F46] to-[#064E3B]',
    summary: 'Ney\'in feryadıyla başlayan, insan ruhunun ilahi hakikate dönme serüvenini hikayelerle anlatan aşk abidesi.',
    keyThemes: ['İlahi Aşk', 'Yara ve Işık', 'Kendini Değiştirmek'],
    historicalContext: 'Dünya çapında en çok okunan tasavvufi şaheser.',
    passages: [
      { id: 'rum_1', difficulty: 'easy', quote: 'Yara, ışığın sana sızdığı yerdir.' },
      { id: 'rum_2', difficulty: 'medium', quote: 'Dün akıllıydım, dünyayı değiştirmek istedim; bugün bilgeyim, kendimi değiştiriyorum.' }
    ]
  },
  {
    id: 'divan-i-kebir',
    title: 'Divan-ı Kebir',
    originalTitle: 'Divan-ı Kebir',
    author: 'Mevlana Celaleddin Rumi',
    authorBio: 'Aşk coşkusunun ve semanın şairi.',
    authorBirthDeath: '1207 - 1273',
    year: '1268',
    genre: 'mysticism',
    secondaryGenres: ['poetry'],
    coverBg: 'from-[#047857] to-[#022C22]',
    summary: 'Mevlana\'nın Şems-i Tebrizi\'nin ayrılığıyla vecd içinde söylediği gazeller.',
    keyThemes: ['Damla ve Okyanus', 'Vecd', 'Sema'],
    historicalContext: 'Lirik tasavvufi şiirin zirve noktası.',
    passages: [
      { id: 'dvk_1', difficulty: 'hard', quote: 'Sen okyanustaki bir damla değilsin; sen tek bir damlanın içindeki koca bir okyanussun.' }
    ]
  },
  {
    id: 'kirk-kural',
    title: 'Kırk Kural (Makalat)',
    originalTitle: 'Makalat',
    author: 'Şems-i Tebrizi',
    authorBio: 'Mevlana\'nın gönül aynası ve manevi güneşi.',
    authorBirthDeath: '1185 - 1248',
    year: '1244',
    genre: 'mysticism',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#9A3412] to-[#431407]',
    summary: 'Aşkın ve hakikatin kalpte bulunmasına dair kırk manevi ilke.',
    keyThemes: ['Kalpte Bulmak', 'Altının Üstünden İyi Olması', 'Aşk'],
    historicalContext: 'Mevlana\'nın dönüşümüne kıvılcım olan sohbetler.',
    passages: [
      { id: 'sms_1', difficulty: 'easy', quote: 'Hakk\'ı nerede ararsan ara, önce kalbinde bulmalısın.' },
      { id: 'sms_2', difficulty: 'medium', quote: 'Düzenim bozulur, hayatım altüst olur diye endişe etme; nereden bilirsin altının üstünden iyi olmadığını?' }
    ]
  },
  {
    id: 'divan-yunus-emre',
    title: 'Yunus Emre Divanı',
    originalTitle: 'Divan',
    author: 'Yunus Emre',
    authorBio: 'Anadolu tasavvufunun ve duru Türkçenin öncüsü.',
    authorBirthDeath: '1238 - 1328',
    year: '1320',
    genre: 'mysticism',
    secondaryGenres: ['poetry', 'turkish'],
    coverBg: 'from-[#15803D] to-[#14532D]',
    summary: 'İnsan sevgisi, kendini bilmek ve ilahi aşk üzerine söylenmiş duru nefesler.',
    keyThemes: ['İlim Kendin Bilmektir', 'Yaratılanı Sevmek', 'Gönül'],
    historicalContext: 'Türk dilinin ve hümanizminin kurucu metni.',
    passages: [
      { id: 'yn_1', difficulty: 'easy', quote: 'İlim ilim bilmektir, ilim kendin bilmektir.' }
    ]
  },
  {
    id: 'tao-te-ching',
    title: 'Tao Te Ching',
    originalTitle: 'Daodejing (道德經)',
    author: 'Lao Tzu',
    authorBio: 'Taoculuk felsefesinin kurucusu antik Çin bilgesi.',
    authorBirthDeath: 'MÖ 6. yy',
    year: 'MÖ 4. yy',
    genre: 'mysticism',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#047857] to-[#022C22]',
    summary: 'Doğanın akışına müdahale etmemeyi (Wu Wei) ve su gibi alçakgönüllü olmayı öğütleyen 81 kıtalık bilgelik metni.',
    keyThemes: ['Wu Wei (Eylemsiz Eylem)', 'Suyun Sabrı', 'İlk Adım'],
    historicalContext: 'Uzak Doğu felsefesinin temel taşı.',
    passages: [
      { id: 'lao_1', difficulty: 'easy', quote: 'Bin millik bir yolculuk tek bir adımla başlar.' },
      { id: 'lao_2', difficulty: 'medium', quote: 'Suyun yumuşaklığı ve sabrı, en sert kayaları bile zamanla aşındırmaya yeter.' }
    ]
  },
  {
    id: 'ermis',
    title: 'Ermiş',
    originalTitle: 'The Prophet',
    author: 'Halil Cibran',
    authorBio: 'Lübnan asıllı Amerikalı şair, ressam ve bilge.',
    authorBirthDeath: '1883 - 1931',
    year: '1923',
    genre: 'mysticism',
    secondaryGenres: ['poetry', 'philosophy'],
    coverBg: 'from-[#D97706] to-[#78350F]',
    summary: 'El-Mustafa\'nın Orphalese halkına veda ederken aşk, evlilik, sevinç, keder ve ölüm üzerine verdiği bilgelik dersleri.',
    keyThemes: ['Aşkın Kendini Tamamlaması', 'Özgürlük', 'Ruhsal Birlik'],
    historicalContext: 'Dünya çapında 100 milyondan fazla okura ulaşan bilgelik şiiri.',
    passages: [
      { id: 'kbr_1', difficulty: 'medium', quote: 'Aşk hiçbir şey istemez, sadece kendi kendisini tamamlamak ister.' }
    ]
  },

  // =========================================================================
  // 12. SİNEMA & SANAT KURAMI (CINEMA & ART)
  // =========================================================================
  {
    id: 'muhurlenmis-zaman',
    title: 'Mühürlenmiş Zaman',
    originalTitle: 'Zapechatlennoe Vremya',
    author: 'Andrey Tarkovski',
    authorBio: 'Sinema tarihinin büyük şairi ve düşünürü.',
    authorBirthDeath: '1932 - 1986',
    year: '1986',
    genre: 'cinema_art',
    secondaryGenres: ['essay', 'philosophy'],
    coverBg: 'from-[#475569] to-[#1E293B]',
    summary: 'Sinemayı "zaman heykeltıraşlığı" olarak tanımladığı estetik ve ruhsal manifestosu.',
    keyThemes: ['Zaman Heykeltıraşlığı', 'Sanatçının Fedakarlığı', 'Hakikat'],
    historicalContext: 'Görsel sanatların felsefi derinliğini ortaya koyan başucu kitabı.',
    passages: [
      { id: 'trk_1', difficulty: 'easy', quote: 'Sanat, insanın mutlak hakikate ve mükemmelliğe duyduğu özlemdir.' },
      { id: 'trk_2', difficulty: 'medium', quote: 'Zamanı mühürlemek, anın içinde saklı olan sonsuz ruhu yakalamaktır.' },
      { id: 'trk_3', difficulty: 'hard', quote: 'Sanatçı olabilmek için insanın kendisini kurban etmeye ve hakikatin hizmetine adamaya hazır olması gerekir.' }
    ]
  },
  {
    id: 'gorme-bicimleri',
    title: 'Görme Biçimleri',
    originalTitle: 'Ways of Seeing',
    author: 'John Berger',
    authorBio: 'İngiliz sanat eleştirmeni ve görsel kültür kuramcısı.',
    authorBirthDeath: '1926 - 2017',
    year: '1972',
    genre: 'cinema_art',
    secondaryGenres: ['essay'],
    coverBg: 'from-[#4F46E5] to-[#312E81]',
    summary: 'Görsellere bakışımızın ardındaki ideolojik, sınıfsal ve toplumsal kodları çözer.',
    keyThemes: ['Görmek Konuşmaktan Önce Gelir', 'İmge ve Bakış Açısı', 'Sanat'],
    historicalContext: 'Görsel okuryazarlık alanında devrim yaratan metin.',
    passages: [
      { id: 'brg_1', difficulty: 'easy', quote: 'Görmek, konuşmaktan önce gelmiştir.' },
      { id: 'brg_2', difficulty: 'medium', quote: 'Baktığımız nesne ile aramızdaki ilişki, aynı zamanda kendi bakış açımızın bir kurgusudur.' }
    ]
  },
  {
    id: 'fotograf-uzerine',
    title: 'Fotoğraf Üzerine',
    originalTitle: 'On Photography',
    author: 'Susan Sontag',
    authorBio: 'Amerikalı yazar, düşünür ve kültür eleştirmeni.',
    authorBirthDeath: '1933 - 2004',
    year: '1977',
    genre: 'cinema_art',
    secondaryGenres: ['essay'],
    coverBg: 'from-[#334155] to-[#0F172A]',
    summary: 'Fotoğrafın dünyayı sahiplenme, anı dondurma ve gerçeği yeniden üretme gücü.',
    keyThemes: ['Anı Sahiplenmek', 'Fanilik', 'Görsel Tüketim'],
    historicalContext: 'Fotoğraf teorisinin en önemli kurucu eleştirisi.',
    passages: [
      { id: 'snt_1', difficulty: 'medium', quote: 'Fotoğraf çekmek, bir anı ebediyen sahiplenmek ve onun faniliğine meydan okumaktır.' }
    ]
  },
  {
    id: 'teknigin-olanaklariyla-sanat',
    title: 'Tekniğin Olanaklarıyla Sanat',
    originalTitle: 'Das Kunstwerk im Zeitalter seiner technischen Reproduzierbarkeit',
    author: 'Walter Benjamin',
    authorBio: 'Frankfurt Okulu kültür filozofu ve eleştirmeni.',
    authorBirthDeath: '1892 - 1940',
    year: '1936',
    genre: 'cinema_art',
    secondaryGenres: ['essay', 'philosophy'],
    coverBg: 'from-[#1F2937] to-[#111827]',
    summary: 'Mekanik olarak çoğaltılan sanat eserinin aurasını yitirmesi ve sanatın politize oluşu.',
    keyThemes: ['Aura Kaybı', 'Teknik Çoğaltım', 'Sanat ve Politika'],
    historicalContext: '20. yüzyıl estetik ve medya kuramının temel taşı.',
    passages: [
      { id: 'bnj_1', difficulty: 'hard', quote: 'Mekanik olarak çoğaltılan sanat eseri, kendi özgün aurasını ve biricikliğini yitirir.' }
    ]
  },

  // =========================================================================
  // 13. EPİK & FANTASTİK (EPIC FANTASY)
  // =========================================================================
  {
    id: 'dune',
    title: 'Dune',
    originalTitle: 'Dune',
    author: 'Frank Herbert',
    authorBio: 'Amerikan bilimkurgu ve felsefe yazarı.',
    authorBirthDeath: '1920 - 1986',
    year: '1965',
    genre: 'epic_fantasy',
    secondaryGenres: ['science', 'philosophy'],
    coverBg: 'from-[#EA580C] to-[#9A3412]',
    summary: 'Çöl gezegeni Arrakis\'in baharat kaynakları ve Paul Atreides\'in mesiyanik uyanış destanı.',
    keyThemes: ['Korku Aklın Katilidir', 'Ekoloji', 'Mesih Miti'],
    historicalContext: 'Bilimkurgunun en büyük anıt romanı.',
    passages: [
      { id: 'dn_1', difficulty: 'easy', quote: 'Korku aklın katilidir; korku mutlak yıkımı getiren küçük ölümdür.' },
      { id: 'dn_3', difficulty: 'medium', quote: 'Korkumla yüzleşeceğim; onun üzerimden ve içimden geçmesine izin vereceğim.' }
    ]
  },
  {
    id: 'yuzuklerin-efendisi-yuzuk-kardesligi',
    title: 'Yüzüklerin Efendisi: Yüzük Kardeşliği',
    originalTitle: 'The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    authorBio: 'Yüksek fantezi edebiyatının babası.',
    authorBirthDeath: '1892 - 1973',
    year: '1954',
    genre: 'epic_fantasy',
    secondaryGenres: ['classics', 'mythology'],
    coverBg: 'from-[#065F46] to-[#064E3B]',
    summary: 'Tek Yüzük\'ü yok etmek üzere yola çıkan Frodo Baggins ve Yüzük Kardeşliği\'nin ilk adımları.',
    keyThemes: ['Gezginler', 'Zamanı Doğru Kullanmak', 'Kardeşlik'],
    historicalContext: 'Modern fantastik kurguyu başlatan efsane.',
    passages: [
      { id: 'tlk_1', difficulty: 'easy', quote: 'Gezginlerin hepsi kaybolmuş değildir.' },
      { id: 'tlk_3', difficulty: 'hard', quote: 'Bize düşen tek şey, bize verilen zaman diliminde ne yapacağımıza karar vermektir.' }
    ]
  },
  {
    id: 'yuzuklerin-efendisi-kralin-donusu',
    title: 'Yüzüklerin Efendisi: Kralın Dönüşü',
    originalTitle: 'The Return of the King',
    author: 'J.R.R. Tolkien',
    authorBio: 'Orta Dünya mitolojisinin mimarı.',
    authorBirthDeath: '1892 - 1973',
    year: '1955',
    genre: 'epic_fantasy',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#D97706] to-[#78350F]',
    summary: 'Karanlıklar Efendisi Sauron\'a karşı verilen son savaş ve şafağın doğuşu.',
    keyThemes: ['Umut ve Şafak', 'Cesaret', 'Fedakarlık'],
    historicalContext: 'Epik üçlemenin görkemli kapanış kitabı.',
    passages: [
      { id: 'tlk_2', difficulty: 'medium', quote: 'Karanlık ne kadar koyu olursa olsun, şafağın doğuşunu engelleyemez.' }
    ]
  },
  {
    id: 'yerdeniz-buyucusu',
    title: 'Yerdeniz Büyücüsü',
    originalTitle: 'A Wizard of Earthsea',
    author: 'Ursula K. Le Guin',
    authorBio: 'Felsefi fantezi ve bilimkurgu ustası.',
    authorBirthDeath: '1929 - 2018',
    year: '1968',
    genre: 'epic_fantasy',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#0891B2] to-[#155E75]',
    summary: 'Genç büyücü Ged\'in serbest bıraktığı gölgesiyle yüzleşip dengenin sırrını kavraması.',
    keyThemes: ['Işık ve Karanlık Dengesi', 'Gölgeyle Yüzleşmek', 'Büyü'],
    historicalContext: 'Fantezi edebiyatına derin felsefi boyut kazandıran klasik.',
    passages: [
      { id: 'lgn_1', difficulty: 'easy', quote: 'Işığı görmek için karanlığın var olması gerekir.' }
    ]
  },
  {
    id: 'mulksuzler',
    title: 'Mülksüzler',
    originalTitle: 'The Dispossessed',
    author: 'Ursula K. Le Guin',
    authorBio: 'Anarşist ütopya ve bilimkurgu dehası.',
    authorBirthDeath: '1929 - 2018',
    year: '1974',
    genre: 'epic_fantasy',
    secondaryGenres: ['dystopia', 'philosophy'],
    coverBg: 'from-[#4B5563] to-[#1F2937]',
    summary: 'Mülkiyetsiz Anarres ile kapitalist Urras gezegenleri arasındaki fizikçi Shevek\'in duvarları yıkma çabası.',
    keyThemes: ['Mülksüzlük', 'Duvarlar ve Sınırlar', 'Özgürlük'],
    historicalContext: 'Hugo ve Nebula ödüllü kurucu ütopya.',
    passages: [
      { id: 'lgn_2', difficulty: 'medium', quote: 'Bir duvar ördüğünde kimi içeride, kimi dışarıda bıraktığına dikkat etmelisin.' }
    ]
  },

  // =========================================================================
  // 14. MEKTUP & GÜNLÜK (LETTERS)
  // =========================================================================
  {
    id: 'milenaya-mektuplar',
    title: 'Milena\'ya Mektuplar',
    originalTitle: 'Briefe an Milena',
    author: 'Franz Kafka',
    authorBio: 'Büyük Praglı yazar.',
    authorBirthDeath: '1883 - 1924',
    year: '1952',
    genre: 'letters',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#9A3412] to-[#7C2D12]',
    summary: 'Kafka\'nın Milena Jesenská\'ya yazdığı tutkulu, kırılgan ve trajik aşk mektupları.',
    keyThemes: ['Kırılgan Aşk', 'Uçurum Kenarı', 'İtiraf'],
    historicalContext: 'Dünya edebiyatının en dokunaklı aşk mektupları.',
    passages: [
      { id: 'let_kfk_1', difficulty: 'easy', quote: 'Yanımda yürüyordun Milena, düşünsene, yanımdaydın.' },
      { id: 'let_kfk_2', difficulty: 'medium', quote: 'Seni sevmek, kendimi uçsuz bucaksız bir uçurumun kenarında bulmak gibi.' }
    ]
  },
  {
    id: 'babaya-mektup',
    title: 'Babaya Mektup',
    originalTitle: 'Brief an den Vater',
    author: 'Franz Kafka',
    authorBio: 'Baba otoritesi ve suçluluk tahlilcisi.',
    authorBirthDeath: '1883 - 1924',
    year: '1952',
    genre: 'letters',
    secondaryGenres: ['psychology'],
    coverBg: 'from-[#374151] to-[#111827]',
    summary: 'Kafka\'nın babası Hermann Kafka\'nın ezici otoritesine karşı yazdığı 100 sayfalık sarsıcı itirafname.',
    keyThemes: ['Baba Otoritesi', 'Konuşamama Korkusu', 'Suçluluk'],
    historicalContext: 'Kafka\'nın tüm edebi eserlerinin psikolojik anahtarı.',
    passages: [
      { id: 'let_kfk_3', difficulty: 'hard', quote: 'Senin yanındayken konuşma yeteneğimi bütünüyle kaybediyordum çünkü senin otoriten karşısında her sözcük anlamsızlaşıyordu.' }
    ]
  },
  {
    id: 'kendine-ait-bir-oda',
    title: 'Kendine Ait Bir Oda',
    originalTitle: 'A Room of One\'s Own',
    author: 'Virginia Woolf',
    authorBio: 'Feminist edebiyat kuramının ve bilinçakışının İngiliz ustası.',
    authorBirthDeath: '1882 - 1941',
    year: '1929',
    genre: 'letters',
    secondaryGenres: ['essay', 'modernist'],
    coverBg: 'from-[#6D28D9] to-[#4C1D95]',
    summary: 'Kadınların edebiyatta var olabilmesi için maddi bağımsızlığa ve kilitli bir odaya sahip olması gerektiğini savunan feminist manifesto.',
    keyThemes: ['Kendine Ait Bir Oda', 'Kadın ve Edebiyat', 'Özgür Yaratıcılık'],
    historicalContext: 'Feminist edebiyat eleştirisinin kurucu başyapıtı.',
    passages: [
      { id: 'wlf_1', difficulty: 'easy', quote: 'Para kazanın ve kendinize ait bir oda edinin.' },
      { id: 'wlf_2', difficulty: 'hard', quote: 'Bir kadın eğer kurmaca yazacaksa paraya ve kendine ait kilitli bir odaya sahip olmalıdır.' }
    ]
  },
  {
    id: 'dalgalar',
    title: 'Dalgalar',
    originalTitle: 'The Waves',
    author: 'Virginia Woolf',
    authorBio: 'Bilinçakışı ve ritmik düzyazının öncüsü.',
    authorBirthDeath: '1882 - 1941',
    year: '1931',
    genre: 'letters',
    secondaryGenres: ['modernist'],
    coverBg: 'from-[#0284C7] to-[#0369A1]',
    summary: 'Altı arkadaşın çocukluktan yaşlılığa hayatlarını deniz dalgalarının ritmiyle anlatan lirik roman.',
    keyThemes: ['Zamanın Akışı', 'Kelimelerle Kurulan Köprü', 'Bilinç Dalgaları'],
    historicalContext: 'Woolf\'un en deneysel ve şiirsel romanı.',
    passages: [
      { id: 'dlg_1', difficulty: 'medium', quote: 'Kelimeler bizi birbirimize bağlayan tek köprüdür.' }
    ]
  },
  {
    id: 'genc-bir-kizin-gunlugu',
    title: 'Genç Bir Kızın Günlüğü',
    originalTitle: 'Het Achterhuis / The Diary of a Young Girl',
    author: 'Anne Frank',
    authorBio: 'Nazi işgali altındaki Amsterdam\'da gizlenen genç kız.',
    authorBirthDeath: '1929 - 1945',
    year: '1947',
    genre: 'letters',
    secondaryGenres: ['history'],
    coverBg: 'from-[#D97706] to-[#78350F]',
    summary: 'Gizli Çatı Katı\'nda iki yıl saklanan Anne Frank\'ın umut, korku ve insan sevgisi dolu günlüğü.',
    keyThemes: ['İnsan İyiliği', 'Umut', 'Masumiyet'],
    historicalContext: 'Holokost trajedisinin insanlık hafızasındaki en dokunaklı belgesi.',
    passages: [
      { id: 'frk_1', difficulty: 'easy', quote: 'Her şeye rağmen insanların kalplerinin hala iyi olduğuna inanıyorum.' }
    ]
  },

  // =========================================================================
  // 15. DOĞA & İNZİVA (NATURE)
  // =========================================================================
  {
    id: 'walden',
    title: 'Walden / Ormanda Yaşam',
    originalTitle: 'Walden; or, Life in the Woods',
    author: 'Henry David Thoreau',
    authorBio: 'Amerikan transandantalisti, doğa filozofu.',
    authorBirthDeath: '1817 - 1862',
    year: '1854',
    genre: 'nature',
    secondaryGenres: ['philosophy', 'essay'],
    coverBg: 'from-[#15803D] to-[#14532D]',
    summary: 'Walden Gölü kıyısında kulübede sade, bilinçli ve doğayla uyumlu yaşam deneyimi.',
    keyThemes: ['Sadelik', 'Bilinçli Yaşam', 'Sessiz Çaresizlik'],
    historicalContext: 'Sade yaşam felsefesinin kurucu klasiği.',
    passages: [
      { id: 'thr_1', difficulty: 'easy', quote: 'Ormana gittim çünkü bilinçli yaşamak istiyordum.' },
      { id: 'thr_2', difficulty: 'medium', quote: 'Basitleştirin, hayatınızı basitleştirin; üç öğün yerine tek öğün yiyin.' },
      { id: 'thr_3', difficulty: 'hard', quote: 'İnsanların büyük çoğunluğu sessiz bir çaresizlik içinde yaşar ve mezara gider.' }
    ]
  },
  {
    id: 'kendine-guven',
    title: 'Kendine Güven',
    originalTitle: 'Self-Reliance',
    author: 'Ralph Waldo Emerson',
    authorBio: 'Transandantalist filozof ve şair.',
    authorBirthDeath: '1803 - 1882',
    year: '1841',
    genre: 'nature',
    secondaryGenres: ['essay', 'philosophy'],
    coverBg: 'from-[#854D0E] to-[#422006]',
    summary: 'Toplumsal uyumculuğu reddedip kendi iç sesine ve sezgilerine güvenmeyi savunan manifesto.',
    keyThemes: ['Kendine Güven', 'Özgünlük', 'Bireysellik'],
    historicalContext: 'Amerikan düşünce tarihinin temel taşlarından biri.',
    passages: [
      { id: 'emr_1', difficulty: 'easy', quote: 'Kendine inanmak, başarının ilk sırrıdır.' }
    ]
  },
  {
    id: 'doga-emerson',
    title: 'Doğa',
    originalTitle: 'Nature',
    author: 'Ralph Waldo Emerson',
    authorBio: 'Doğa mistisizminin Amerikan öncüsü.',
    authorBirthDeath: '1803 - 1882',
    year: '1836',
    genre: 'nature',
    secondaryGenres: ['essay'],
    coverBg: 'from-[#059669] to-[#064E3B]',
    summary: 'Doğanın insan ruhunu iyileştiren, gençleştiren ve Tanrısal birliğe kavuşturan gücü.',
    keyThemes: ['Ormanın Dinginliği', 'Ebedi Gençlik', 'Doğanın Ruhu'],
    historicalContext: 'Transandantalist akımı başlatan kurucu kitapçık.',
    passages: [
      { id: 'emr_2', difficulty: 'medium', quote: 'Ormanlarda insan ebedi bir gençliğe ve dinginliğe kavuşur.' }
    ]
  },
  {
    id: 'vahsetin-cagrisi',
    title: 'Vahşetin Çağrısı',
    originalTitle: 'The Call of the Wild',
    author: 'Jack London',
    authorBio: 'Vahşi doğanın ve hayatta kalma mücadelesinin büyük yazarı.',
    authorBirthDeath: '1876 - 1916',
    year: '1903',
    genre: 'nature',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#0891B2] to-[#164E63]',
    summary: 'Evcil köpek Buck\'ın Klondike altın arama bölgesinde vahşi doğaya dönüp kurt sürüsünün lideri olması.',
    keyThemes: ['Doğanın Çağrısı', 'Hayatta Kalma Kanunu', 'Vahşilik'],
    historicalContext: 'Dünya edebiyatının en popüler doğa ve macera romanı.',
    passages: [
      { id: 'nat_1', difficulty: 'easy', quote: 'Doğa hiçbir zaman insan yapımı kanunlara boyun eğmez.' }
    ]
  },
  {
    id: 'martin-eden',
    title: 'Martin Eden',
    originalTitle: 'Martin Eden',
    author: 'Jack London',
    authorBio: 'İşçi sınıfından edebiyat zirvesine yükselen yazar.',
    authorBirthDeath: '1876 - 1916',
    year: '1909',
    genre: 'nature',
    secondaryGenres: ['classics', 'turkish'],
    coverBg: 'from-[#0284C7] to-[#082F49]',
    summary: 'İşçi sınıfından denizci Martin Eden\'in bir burjuva kızına duyduğu aşkla yazar olup başarıya ulaştıktan sonra yaşadığı derin boşluk.',
    keyThemes: ['Yazarlık Tutkusu', 'Burjuva İkiyüzlülüğü', 'Hayal Kırıklığı'],
    historicalContext: 'Jack London\'ın en güçlü yarı otobiyografik şaheseri.',
    passages: [
      { id: 'mrt_1', difficulty: 'medium', quote: 'Yaşamak istemek, sadece kitapların vadettiği güzellikleri dünyada bulabilmektir.' }
    ]
  },
  {
    id: 'moby-dick',
    title: 'Moby Dick',
    originalTitle: 'Moby-Dick; or, The Whale',
    author: 'Herman Melville',
    authorBio: 'Amerikan edebiyatının deniz ve kader filozofu.',
    authorBirthDeath: '1819 - 1891',
    year: '1851',
    genre: 'nature',
    secondaryGenres: ['classics', 'philosophy'],
    coverBg: 'from-[#0369A1] to-[#0C4A6E]',
    summary: 'Kaptan Ahab\'ın bacağını koparan Beyaz Balina Moby Dick\'in peşinde tüm mürettebatıyla çıktığı metafizik av.',
    keyThemes: ['Bilinmeyenin Peşinde', 'Doğanın Yenilmezliği', 'Saplantı'],
    historicalContext: 'Amerikan edebiyatının en büyük felsefi deniz destanı.',
    passages: [
      { id: 'mbd_1', difficulty: 'medium', quote: 'Bana sadece bir kelime söyleyin: İnsan neden hep bilinmeyenin peşinden koşar?' }
    ]
  },

  // =========================================================================
  // 16. MİTOLOJİ & BÜYÜLÜ GERÇEKÇİLİK (MYTHOLOGY)
  // =========================================================================
  {
    id: 'ilyada',
    title: 'İlyada',
    originalTitle: 'Iliad (Ἰλιάς)',
    author: 'Homeros',
    authorBio: 'Antik Yunan epik şiirinin kurucu ozanı.',
    authorBirthDeath: 'MÖ 8. yy',
    year: 'MÖ 8. yy',
    genre: 'mythology',
    secondaryGenres: ['classics', 'poetry'],
    coverBg: 'from-[#B45309] to-[#78350F]',
    summary: 'Truva Savaşı\'nın son yılında Akhilleus\'un yıkıcı öfkesi ve Hektor ile düellosu.',
    keyThemes: ['Akhilleus\'un Öfkesi', 'Kahramanlık', 'Kader ve Tanrılar'],
    historicalContext: 'Batı edebiyatının başlangıç noktası.',
    passages: [
      { id: 'hom_1', difficulty: 'easy', quote: 'Öfkeyi söyle tanrıça, Akhilleus\'un yıkıcı öfkesini.' }
    ]
  },
  {
    id: 'odysseia',
    title: 'Odysseia',
    originalTitle: 'Odyssey (Ὀδύσσεια)',
    author: 'Homeros',
    authorBio: 'Eve dönüş mitinin kurucusu.',
    authorBirthDeath: 'MÖ 8. yy',
    year: 'MÖ 8. yy',
    genre: 'mythology',
    secondaryGenres: ['classics', 'poetry'],
    coverBg: 'from-[#D97706] to-[#78350F]',
    summary: 'Kurnaz Odysseus\'un Truva sonrası İthaka\'ya 10 yıl süren eve dönüş yolculuğu.',
    keyThemes: ['Eve Dönüş', 'Sabır ve Kurnazlık', 'Kader'],
    historicalContext: 'Yolculuk ve eve dönüş temasının arketipi.',
    passages: [
      { id: 'hom_2', difficulty: 'medium', quote: 'Kaderin ağları sabırla örülür ve eninde sonunda hak yerini bulur.' }
    ]
  },
  {
    id: 'ilahi-komedya-cehennem',
    title: 'İlahi Komedya: Cehennem',
    originalTitle: 'La Divina Commedia: Inferno',
    author: 'Dante Alighieri',
    authorBio: 'İtalyan edebiyatının babası.',
    authorBirthDeath: '1265 - 1321',
    year: '1320',
    genre: 'mythology',
    secondaryGenres: ['classics', 'poetry'],
    coverBg: 'from-[#7F1D1D] to-[#450A0A]',
    summary: 'Dante\'nin şair Vergilius rehberliğinde Cehennemin dokuz katına yaptığı ruhani yolculuk.',
    keyThemes: ['Cehennem Kapısı', 'Karanlık Orman', 'İlahi Adalet'],
    historicalContext: 'Ortaçağ teolojisini ve insan ruhunu özetleyen anıt eser.',
    passages: [
      { id: 'dnt_1', difficulty: 'easy', quote: 'Buraya girenler, her türlü umudu geride bıraksın.' },
      { id: 'dnt_2', difficulty: 'hard', quote: 'Hayat yolculuğumuzun ortasında kendimi karanlık bir ormanda buldum çünkü doğru yolu kaybetmiştim.' }
    ]
  },
  {
    id: 'ficciones',
    title: 'Ficciones / Kurgular',
    originalTitle: 'Ficciones',
    author: 'Jorge Luis Borges',
    authorBio: 'Labirentlerin ve sonsuz kütüphanelerin mimarı Arjantinli deha.',
    authorBirthDeath: '1899 - 1986',
    year: '1944',
    genre: 'mythology',
    secondaryGenres: ['modernist', 'philosophy'],
    coverBg: 'from-[#0369A1] to-[#0C4A6E]',
    summary: 'Babil Kitaplığı ve Çatallanan Yollar Bahçesi gibi sonsuzluk ve labirent öyküleri.',
    keyThemes: ['Evren Bir Kütüphanedir', 'Labirentler', 'Zamanın Sonsuzluğu'],
    historicalContext: 'Postmodern ve büyülü gerçekçi edebiyatın kurucu metni.',
    passages: [
      { id: 'brg_1', difficulty: 'medium', quote: 'Evren, başkalarının kütüphane adını verdiği sonsuz bir labirenttir.' }
    ]
  },
  {
    id: 'alef',
    title: 'Alef',
    originalTitle: 'El Aleph',
    author: 'Jorge Luis Borges',
    authorBio: 'Büyülü gerçekçilik filozofu.',
    authorBirthDeath: '1899 - 1986',
    year: '1949',
    genre: 'mythology',
    secondaryGenres: ['modernist'],
    coverBg: 'from-[#4338CA] to-[#312E81]',
    summary: 'Bir bodrum katında evrenin tüm mekanlarını ve anlarını aynı anda gösteren tek bir nokta olan Alef.',
    keyThemes: ['Alef', 'Eşzamanlı Sonsuzluk', 'Bellek'],
    historicalContext: 'Felsefe ile edebiyatı birleştiren başyapıt öyküler.',
    passages: [
      { id: 'brg_2', difficulty: 'hard', quote: 'Alef, mekanın bütün noktalarını aynı anda içinde barındıran tek bir gizemli noktadır.' }
    ]
  },
  {
    id: 'gorunmez-kentler',
    title: 'Görünmez Kentler',
    originalTitle: 'Le città invisibili',
    author: 'Italo Calvino',
    authorBio: 'İtalyan düş ve kurmaca ustası.',
    authorBirthDeath: '1923 - 1985',
    year: '1972',
    genre: 'mythology',
    secondaryGenres: ['modernist', 'poetry'],
    coverBg: 'from-[#0891B2] to-[#155E75]',
    summary: 'Marco Polo\'nun Kubilay Han\'a anlattığı 55 düşsel kentin şiirsel çözümlemeleri.',
    keyThemes: ['Düş Kentleri', 'Arzular ve Şehir', 'Bellek'],
    historicalContext: 'Görsel ve felsefi imgelem şaheseri.',
    passages: [
      { id: 'clv_1', difficulty: 'medium', quote: 'Bir kenti anlamak, orada yaşayanların hayallerini ve özlemlerini dinlemektir.' }
    ]
  },
  {
    id: 'sahilde-kafka',
    title: 'Sahilde Kafka',
    originalTitle: 'Kafka on the Shore (海辺のカフカ)',
    author: 'Haruki Murakami',
    authorBio: 'Japon büyülü gerçekçilik romancısı.',
    authorBirthDeath: '1949 - günümüz',
    year: '2002',
    genre: 'mythology',
    secondaryGenres: ['modernist'],
    coverBg: 'from-[#1E293B] to-[#0F172A]',
    summary: 'Evden kaçan 15 yaşındaki Kafka Tamura ile kedilerle konuşan Nakata\'nın kader fırtınasındaki kesişmesi.',
    keyThemes: ['Kum Fırtınası', 'Kader', 'Büyülü Gerçeklik'],
    historicalContext: 'Modern dünya edebiyatının en popüler mistik romanlarından biri.',
    passages: [
      { id: 'mrk_1', difficulty: 'medium', quote: 'Bazen kader küçük bir kum fırtınası gibidir; kaçtıkça seni içine çeker.' }
    ]
  },

  // =========================================================================
  // 17. POLİSİYE & GİZEM (MYSTERY)
  // =========================================================================
  {
    id: 'sherlock-holmes-dortlerin-imzasi',
    title: 'Sherlock Holmes: Dörtlerin İmzası',
    originalTitle: 'The Sign of the Four',
    author: 'Arthur Conan Doyle',
    authorBio: 'Dedektiflik kurgusunun büyük yaratıcısı.',
    authorBirthDeath: '1859 - 1930',
    year: '1890',
    genre: 'mystery',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#334155] to-[#0F172A]',
    summary: 'Agra hazinesi, gizemli bir cinayet ve Sherlock Holmes\'un tümdengelim mantığıyla çözdüğü vaka.',
    keyThemes: ['Tümdengelim', 'İmkansızı Elemek', 'Gizem'],
    historicalContext: 'Sherlock Holmes efsanesini pekiştiren roman.',
    passages: [
      { id: 'sh_1', difficulty: 'easy', quote: 'İmkansızı elediğinde geriye kalan ne kadar olasılıksız olursa olsun gerçektir.' }
    ]
  },
  {
    id: 'sherlock-holmes-kizil-dosya',
    title: 'Sherlock Holmes: Kızıl Dosya',
    originalTitle: 'A Study in Scarlet',
    author: 'Arthur Conan Doyle',
    authorBio: 'Holmes ve Watson ikilisinin yaratıcısı.',
    authorBirthDeath: '1859 - 1930',
    year: '1887',
    genre: 'mystery',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#991B1B] to-[#7F1D1D]',
    summary: 'Sherlock Holmes ile Dr. John Watson\'ın tanışması ve Baker Street 221B\'deki ilk cinayet çözümü.',
    keyThemes: ['Gözlem ve Görmek', 'Kızıl Dosya', 'Mantık'],
    historicalContext: 'Sherlock Holmes\'un dünyada ilk kez sahneye çıktığı roman.',
    passages: [
      { id: 'sh_2', difficulty: 'medium', quote: 'Sen görüyorsun ama gözlemlemiyorsun; ayrım işte tam olarak buradadır.' }
    ]
  },
  {
    id: 'dogu-ekspresinde-cinayet',
    title: 'Doğu Ekspresinde Cinayet',
    originalTitle: 'Murder on the Orient Express',
    author: 'Agatha Christie',
    authorBio: 'Polisiye kurgunun kraliçesi.',
    authorBirthDeath: '1890 - 1976',
    year: '1934',
    genre: 'mystery',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#831843] to-[#500724]',
    summary: 'Karlar altında mahsur kalan trende öldürülen Ratchett cinayetini çözen Hercule Poirot.',
    keyThemes: ['Gri Hücreler', 'İmkansızlık Yanılsaması', 'Adalet'],
    historicalContext: 'Tüm zamanların en ünlü dedektiflik kurgusu.',
    passages: [
      { id: 'ac_1', difficulty: 'easy', quote: 'İmkansız olan şey gerçekleşemez; öyleyse görünen imkansızlık bir yanılsamadır.' }
    ]
  },
  {
    id: 'on-kucuk-zenci',
    title: 'On Küçük Zenci (Ve Sonra Hiç Kalmadı)',
    originalTitle: 'And Then There Were None',
    author: 'Agatha Christie',
    authorBio: 'Kusursuz cinayet kurgularının ustası.',
    authorBirthDeath: '1890 - 1976',
    year: '1939',
    genre: 'mystery',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#4C1D95] to-[#2E1065]',
    summary: 'Issız bir adaya davet edilen on kişinin birer birer tekerleme eşliğinde cezalandırılması.',
    keyThemes: ['Vicdan Azabı', 'Kusursuz İntikam', 'Zenci Adası'],
    historicalContext: '100 milyondan fazla satan polisiye tarihinin en çok satan romanı.',
    passages: [
      { id: 'ac_2', difficulty: 'medium', quote: 'Vicdan azabı, insanın kendi içinde taşıdığı en acımasız cellattır.' }
    ]
  },
  {
    id: 'kuzgun',
    title: 'Kuzgun & Şiirler',
    originalTitle: 'The Raven',
    author: 'Edgar Allan Poe',
    authorBio: 'Gotik korku, gizem ve melankolinin babası.',
    authorBirthDeath: '1809 - 1849',
    year: '1845',
    genre: 'mystery',
    secondaryGenres: ['poetry'],
    coverBg: 'from-[#0F172A] to-[#020617]',
    summary: 'Gece yarısı odasına giren kuzgunun "Nevermore" yankısıyla kayıp aşkı Lenore\'un yasını tutan adam.',
    keyThemes: ['Düş İçindeki Düş', 'Kuzgun', 'Melankoli'],
    historicalContext: 'Amerikan gotik şiirinin şaheseri.',
    passages: [
      { id: 'poe_1', difficulty: 'easy', quote: 'Gözlerimin gördüğü her şey sadece bir düşün içindeki düşten ibaretti.' }
    ]
  },
  {
    id: 'morgue-sokagi-cinayeti',
    title: 'Morgue Sokağı Cinayeti',
    originalTitle: 'The Murders in the Rue Morgue',
    author: 'Edgar Allan Poe',
    authorBio: 'Modern dedektiflik türünün kurucusu.',
    authorBirthDeath: '1809 - 1849',
    year: '1841',
    genre: 'mystery',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#7F1D1D] to-[#450A0A]',
    summary: 'C. Auguste Dupin\'in kilitli bir odada işlenen vahşi cinayeti zihinsel çözümleme yeteneğiyle aydınlatması.',
    keyThemes: ['Zihinsel Çözümleme (Ratiocination)', 'Kilitli Oda', 'Analitik Zeka'],
    historicalContext: 'Tarihte yazılmış ilk modern dedektiflik öyküsü.',
    passages: [
      { id: 'poe_2', difficulty: 'hard', quote: 'Zihinsel çözümleme yeteneği, sıradan gözlem gücünden çok daha derin ve gizemli bir sanattır.' }
    ]
  },

  // =========================================================================
  // 18. BİYOGRAFİ & PORTRE (BIOGRAPHY)
  // =========================================================================
  {
    id: 'yildizin-parladigi-anlar',
    title: 'Yıldızın Parladığı Anlar',
    originalTitle: 'Sternstunden der Menschheit',
    author: 'Stefan Zweig',
    authorBio: 'Tarihsel anların ve insan psikolojisinin büyük anlatıcısı.',
    authorBirthDeath: '1881 - 1942',
    year: '1927',
    genre: 'biography',
    secondaryGenres: ['history', 'classics'],
    coverBg: 'from-[#1E3A8A] to-[#1E1B4B]',
    summary: 'Tarihin akışını tek bir anda değiştiren 14 dramatik kırılma noktasının lirik anlatımı.',
    keyThemes: ['Tarihin Kırılma Anları', 'Kaderin Eli', 'Büyük İrade'],
    historicalContext: 'Biyografik anlatımın dünya çapındaki zirve eseri.',
    passages: [
      { id: 'zwg_1', difficulty: 'easy', quote: 'Tarih, ancak nadir anlarda bir kahramanın eline kaderi teslim eder.' }
    ]
  },
  {
    id: 'kendileriyle-savasanlar',
    title: 'Kendileriyle Savaşanlar',
    originalTitle: 'Der Kampf mit dem Dämon',
    author: 'Stefan Zweig',
    authorBio: 'Büyük ruhların biyografi ustası.',
    authorBirthDeath: '1881 - 1942',
    year: '1925',
    genre: 'biography',
    secondaryGenres: ['philosophy', 'psychology'],
    coverBg: 'from-[#7F1D1D] to-[#450A0A]',
    summary: 'Hölderlin, Kleist ve Nietzsche\'nin içlerindeki ifritle (deha ile) savaşıp trajik sona yürümeleri.',
    keyThemes: ['Büyük Ruh', 'Fırtınalara Direnmek', 'Trajik Deha'],
    historicalContext: 'Dahi sanatçıların psikolojik portresi.',
    passages: [
      { id: 'zwg_2', difficulty: 'medium', quote: 'Büyük bir ruha sahip olmak, hayatın bütün fırtınalarına karşı tek başına direnmektir.' }
    ]
  },
  {
    id: 'dunun-dunyasi',
    title: 'Dünün Dünyası',
    originalTitle: 'Die Welt von Gestern',
    author: 'Stefan Zweig',
    authorBio: 'Yıkılan Avrupa hümanizminin yasını tutan yazar.',
    authorBirthDeath: '1881 - 1942',
    year: '1942',
    genre: 'biography',
    secondaryGenres: ['history'],
    coverBg: 'from-[#374151] to-[#111827]',
    summary: 'İki dünya savaşı arasında çöken Viyana ve Avrupa hümanizminin intiharından önce yazdığı anıları.',
    keyThemes: ['Yıkılan Dünya', 'Büyük Çöküş', 'Hümanizm'],
    historicalContext: '20. yüzyılın en dokunaklı veda ve otobiyografi kitabı.',
    passages: [
      { id: 'zwg_3', difficulty: 'hard', quote: 'Bizler hiçbir kuşağın yaşamadığı kadar büyük bir çöküşe ve felakete tanıklık ettik.' }
    ]
  },
  {
    id: 'paralel-yasamlar',
    title: 'Paralel Yaşamlar',
    originalTitle: 'Bioi Paralleloi (Βίοι Παράλληλοι)',
    author: 'Plütarkhos',
    authorBio: 'Antik biyografi yazarı ve ahlak filozofu.',
    authorBirthDeath: 'MS 46 - MS 120',
    year: 'MS 100',
    genre: 'biography',
    secondaryGenres: ['history', 'classics'],
    coverBg: 'from-[#92400E] to-[#451A03]',
    summary: 'Büyük Yunan ve Roma liderlerinin (Büyük İskender, Sezar vb.) erdem ve kusurlarını karşılaştıran anıt biyografi.',
    keyThemes: ['Karakter ve Alışkanlıklar', 'Liderlik', 'Erdem'],
    historicalContext: 'Biyografi türünün tarihteki ilk büyük başyapıtı.',
    passages: [
      { id: 'plt_1', difficulty: 'medium', quote: 'Bir insanın karakteri, en büyük başarılarından çok en küçük alışkanlıklarında gizlidir.' }
    ]
  },

  // =========================================================================
  // 19. MİZAH & HİCİV (SATIRE & WIT)
  // =========================================================================
  {
    id: 'zubuk',
    title: 'Zübük - Kağnı Gölgesindeki İt',
    originalTitle: 'Zübük',
    author: 'Aziz Nesin',
    authorBio: 'Türk mizah edebiyatının uluslararası üne sahip ustası.',
    authorBirthDeath: '1915 - 1995',
    year: '1961',
    genre: 'satire',
    secondaryGenres: ['turkish'],
    coverBg: 'from-[#B45309] to-[#713F12]',
    summary: 'İbrahim Zübükzade\'nin yükselişi üzerinden toplumun sahtekarlığa nasıl çanak tuttuğunu anlatan siyasi taşlama.',
    keyThemes: ['Zübükizm', 'Gülmek En Asil Silah', 'Siyasi İkiyüzlülük'],
    historicalContext: 'Türk siyasi diline "Zübük" kavramını kazandıran kült roman.',
    passages: [
      { id: 'zb_1', difficulty: 'easy', quote: 'Gülmek, insanın çaresizliğe karşı bulduğu en asil silahtır.' }
    ]
  },
  {
    id: 'yasar-ne-yasar-ne-yasamaz',
    title: 'Yaşar Ne Yaşar Ne Yaşamaz',
    originalTitle: 'Yaşar Ne Yaşar Ne Yaşamaz',
    author: 'Aziz Nesin',
    authorBio: 'Toplumsal hiciv ve tiyatro ustası.',
    authorBirthDeath: '1915 - 1995',
    year: '1977',
    genre: 'satire',
    secondaryGenres: ['turkish', 'drama'],
    coverBg: 'from-[#D97706] to-[#78350F]',
    summary: 'Nüfus kağıdı olmadığı için kayıtlarda ölü sayılan ama vergi ve askerlik zamanı yaşayan Yaşar Yaşamaz\'ın trajikomik öyküsü.',
    keyThemes: ['Resmi Evrak Çıkmazı', 'Bürokrasi Absürdü', 'Halk Çaresizliği'],
    historicalContext: 'Devlet bürokrasisini yerle bir eden Türk mizah klasiği.',
    passages: [
      { id: 'ynyn_1', difficulty: 'medium', quote: 'Resmi evraklarda varsan varsın, yoksan nefes alsan bile yaşamazsın.' }
    ]
  },
  {
    id: 'candide',
    title: 'Candide ya da İyimserlik',
    originalTitle: 'Candide, ou l\'Optimisme',
    author: 'Voltaire',
    authorBio: 'Fransız Aydınlanması\'nın keskin zekalı filozofu.',
    authorBirthDeath: '1694 - 1778',
    year: '1759',
    genre: 'satire',
    secondaryGenres: ['philosophy', 'classics'],
    coverBg: 'from-[#CA8A04] to-[#854D0E]',
    summary: 'Pangloss\'un "bu dünya dünyaların en iyisidir" dogmasıyla yola çıkan saf Candide\'in felaketler sonucu bahçesini yetiştirmeye karar vermesi.',
    keyThemes: ['Bahçemizi Yetiştirmek', 'Kör İyimserliğin İflası', 'Felsefi İroni'],
    historicalContext: 'Aydınlanma çağının kilise dogmalarını yıkan felsefi hicvi.',
    passages: [
      { id: 'cnd_1', difficulty: 'easy', quote: 'Bahçemizi yetiştirmek zorundayız.' },
      { id: 'cnd_2', difficulty: 'medium', quote: 'Her şeyin en iyi olduğu bir dünyada yaşıyorsak, diğer dünyalar kimbilir nasıldır?' }
    ]
  },
  {
    id: 'huckleberry-finn',
    title: 'Huckleberry Finn\'in Maceraları',
    originalTitle: 'Adventures of Huckleberry Finn',
    author: 'Mark Twain',
    authorBio: 'Modern Amerikan edebiyatının babası kabul edilen mizahçı.',
    authorBirthDeath: '1835 - 1910',
    year: '1884',
    genre: 'satire',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#0284C7] to-[#075985]',
    summary: 'Huck Finn ile kaçak köle Jim\'in Mississippi Nehri üzerinde bir salla özgürlüğe ve insanlığa doğru yolculuğu.',
    keyThemes: ['Doğruyu Söylemek', 'Özgürlük', 'Toplumsal İkiyüzlülük'],
    historicalContext: 'Hemingway\'e göre tüm modern Amerikan edebiyatının kaynağı.',
    passages: [
      { id: 'mt_1', difficulty: 'easy', quote: 'Doğruyu söylerseniz hiçbir şeyi hatırlamak zorunda kalmazsınız.' }
    ]
  },
  {
    id: 'tom-sawyer',
    title: 'Tom Sawyer\'ın Maceraları',
    originalTitle: 'The Adventures of Tom Sawyer',
    author: 'Mark Twain',
    authorBio: 'Çocukluk ve kahkaha şairi.',
    authorBirthDeath: '1835 - 1910',
    year: '1876',
    genre: 'satire',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#EA580C] to-[#C2410C]',
    summary: 'Haylaz Tom Sawyer\'ın çit boyama kurnazlığı ve Mississippi kıyısındaki hazine maceraları.',
    keyThemes: ['Kahkahanın Gücü', 'Çocukluk Kurnazlığı', 'Özgürlük'],
    historicalContext: 'Dünya çocuk ve gençlik edebiyatının ölümsüz klasiği.',
    passages: [
      { id: 'mt_2', difficulty: 'medium', quote: 'İnsanın en güçlü silahı kahkahadır; onun karşısında hiçbir zorbalık dayanamaz.' }
    ]
  },

  // =========================================================================
  // 20. BİLİM & EVREN (SCIENCE)
  // =========================================================================
  {
    id: 'kozmos',
    title: 'Kozmos',
    originalTitle: 'Cosmos',
    author: 'Carl Sagan',
    authorBio: 'Gökbilimci, astrofizikçi ve bilimin şiirsel anlatıcısı.',
    authorBirthDeath: '1934 - 1996',
    year: '1980',
    genre: 'science',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#0284C7] to-[#082F49]',
    summary: 'Evrenin 13.8 milyar yıllık evrimi, yıldız tozundan oluşan insan bilinci ve uzayın keşfi.',
    keyThemes: ['Yıldız Tozuyuz', 'Evrenin Bilinci', 'Merak'],
    historicalContext: 'Milyonlarca insana bilim sevgisi aşılayan efsanevi kitap.',
    passages: [
      { id: 'sgn_1', difficulty: 'easy', quote: 'Bizler yıldız tozuyuz; evren kendi kendini anlamaya çalışan bir bilinçtir.' }
    ]
  },
  {
    id: 'soluk-mavi-nokta',
    title: 'Soluk Mavi Nokta',
    originalTitle: 'Pale Blue Dot',
    author: 'Carl Sagan',
    authorBio: 'Gezegenimizi uzaydan yorumlayan hümanist astronom.',
    authorBirthDeath: '1934 - 1996',
    year: '1994',
    genre: 'science',
    secondaryGenres: ['philosophy', 'essay'],
    coverBg: 'from-[#0369A1] to-[#0C4A6E]',
    summary: 'Voyager 1\'in çektiği Dünya fotoğrafı üzerinden insanın kibrine ve evrendeki küçüklüğüne dair tefekkür.',
    keyThemes: ['Soluk Mavi Nokta', 'İnsan Kibri', 'Tek Evimiz'],
    historicalContext: 'İnsanlığa hoşgörü ve gezegeni koruma çağrısı yapan manifestodur.',
    passages: [
      { id: 'sgn_2', difficulty: 'medium', quote: 'Bütün tarihimiz ve sevinçlerimiz uzayın sonsuz karanlığında asılı duran o toz zerresinde yaşandı.' }
    ]
  },
  {
    id: 'karanlik-bir-dunyada-bilimin-mum-isigi',
    title: 'Karanlık Bir Dünyada Bilimin Mum Işığı',
    originalTitle: 'The Demon-Haunted World: Science as a Candle in the Dark',
    author: 'Carl Sagan',
    authorBio: 'Eleştirel düşünce ve akılcılık savunucusu.',
    authorBirthDeath: '1934 - 1996',
    year: '1995',
    genre: 'science',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#4338CA] to-[#312E81]',
    summary: 'Batıl inançlara ve sahte bilimlere karşı bilimin şüpheci ve sorgulayıcı mum ışığını savunur.',
    keyThemes: ['Bilimin Mum Işığı', 'Eleştirel Düşünce', 'Şüphecilik'],
    historicalContext: 'Sahte bilimlere karşı akılcılığın en berrak savunusu.',
    passages: [
      { id: 'sgn_3', difficulty: 'hard', quote: 'Bilim sadece bir bilgi bütünü değil, aynı zamanda düşünmenin ve sorgulamanın tek güvenilir yoludur.' }
    ]
  },
  {
    id: 'zamanin-kisa-tarihi',
    title: 'Zamanın Kısa Tarihi',
    originalTitle: 'A Brief History of Time',
    author: 'Stephen Hawking',
    authorBio: 'Teorik fizikçi, kozmolog ve ALS\'ye meydan okuyan deha.',
    authorBirthDeath: '1942 - 2018',
    year: '1988',
    genre: 'science',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#1E3A8A] to-[#0F172A]',
    summary: 'Büyük Patlama\'dan kara deliklere ve evrenin sınırlarına kadar kozmolojinin sırları.',
    keyThemes: ['Zeka ve Değişim', 'Büyük Patlama', 'Kara Delikler'],
    historicalContext: 'Modern teorik fiziğin dünya çapında en çok satan popüler bilim kitabı.',
    passages: [
      { id: 'hwk_1', difficulty: 'easy', quote: 'Zeka, değişime uyum sağlayabilme yeteneğidir.' }
    ]
  },
  {
    id: 'eminim-saka-yapiyorsunuz-bay-feynman',
    title: 'Eminim Şaka Yapıyorsunuz Bay Feynman!',
    originalTitle: 'Surely You\'re Joking, Mr. Feynman!',
    author: 'Richard Feynman',
    authorBio: 'Nobel Fizik Ödüllü kuantum dehası ve maceracı.',
    authorBirthDeath: '1918 - 1988',
    year: '1985',
    genre: 'science',
    secondaryGenres: ['biography'],
    coverBg: 'from-[#D97706] to-[#78350F]',
    summary: 'Kuantum elektrodinamiğinin yaratıcısı Feynman\'ın kasa açma, bongo çalma ve fizik maceraları.',
    keyThemes: ['Kendini Kandırmamak', 'Bilimsel Merak', 'Özgür Zihin'],
    historicalContext: 'Bilim insanı portresini yıkan eğlenceli ve derin otobiyografi.',
    passages: [
      { id: 'fyn_1', difficulty: 'medium', quote: 'En önemli ilke kendini kandırmamaktır; çünkü kandırılması en kolay kişi kendinsiniz.' }
    ]
  },
  {
    id: 'zamanin-duzeni',
    title: 'Zamanın Düzeni',
    originalTitle: 'The Order of Time (L\'ordine del tempo)',
    author: 'Carlo Rovelli',
    authorBio: 'İtalyan teorik fizikçi ve kuantum çekim kuramcısı.',
    authorBirthDeath: '1956 - günümüz',
    year: '2017',
    genre: 'science',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#312E81] to-[#1E1B4B]',
    summary: 'Zamanın evrende tek ve mutlak bir akışı olmadığını, olaylar arasındaki ilişkiler ağı olduğunu şiirsel bir dille açıklar.',
    keyThemes: ['Zamanın Göreliliği', 'Olaylar Ağı', 'Kuantum Düzeni'],
    historicalContext: 'Modern fiziğin zaman kavramına getirdiği en şiirsel bakış.',
    passages: [
      { id: 'rvl_1', difficulty: 'medium', quote: 'Zaman olaylardan bağımsız akmaz; nesneler arasındaki ilişkilerin ta kendisidir.' }
    ]
  }
];
