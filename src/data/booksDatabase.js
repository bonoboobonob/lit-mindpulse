// Master Books Database (LibrisMind Literary Corpus)
// Comprehensive catalog containing EVERY SINGLE standalone literary work cited in the project
// Each book is an independent entity with its own metadata, author biography, summary, themes, and rich passages across multiple difficulty levels.

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
    coverBg: 'from-[#C85A32] to-[#78350F]',
    summary: 'Seneca\'nın dostu Lucilius\'a yazdığı mektuplardan oluşur. Zamanın doğru kullanımı, ölüm korkusunun yenilmesi, bilgelik ve sade yaşam dersleri sunar.',
    keyThemes: ['Zaman Yönetimi', 'Ölüm Bilinci', 'Sade Yaşam', 'Felsefi Dostluk'],
    historicalContext: 'İmparator Neron döneminde yazılmış, insan ruhunun baskı altındaki dayanıklılığını ele almıştır.',
    passages: [
      { id: 'am_1', difficulty: 'easy', quote: 'Zamanı iyi kullanan insan için ömür uzundur.' },
      { id: 'am_2', difficulty: 'easy', quote: 'Aza sahip olan değil, hep fazlasını isteyen yoksuldur.' },
      { id: 'am_3', difficulty: 'medium', quote: 'Hangi limana doğru yelken açtığını bilmeyen bir gemi için hiçbir rüzgar elverişli değildir.' },
      { id: 'am_4', difficulty: 'hard', quote: 'Ömrümüzün büyük bir kısmını gereksiz işlerle tüketerek kısaltırız.' },
      { id: 'am_5', difficulty: 'legendary', quote: 'Bilge insan talihin getirdiği hiçbir hediyeye sevinmez ve hiçbir felakete yenilmez; çünkü o yalnızca kendi iç huzuruna ve erdemine güvenir.' }
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
    coverBg: 'from-[#B45309] to-[#713F12]',
    summary: 'İnsanların yaşamın kısalığından yakınmasını eleştirerek, aslında zamanın kısa olmadığını, insanların onu hoyratça harcadığını açıklar.',
    keyThemes: ['Zamanın Değeri', 'Erteleme Hastalığı', 'Bilinçli Yaşam'],
    historicalContext: 'Antik Roma\'da yaşam temposu ve amaçsız meşguliyetlere karşı felsefi bir manifesto.',
    passages: [
      { id: 'yku_1', difficulty: 'easy', quote: 'Korkularımız gerçek acılarımızdan daima daha fazladır.' },
      { id: 'yku_2', difficulty: 'medium', quote: 'Geleceği beklerken şimdiki zamanı kaybetmek, insanlığın en büyük yanılgısıdır.' },
      { id: 'yku_3', difficulty: 'hard', quote: 'Bize verilen zaman kısa değildir; tersine biz onun büyük bir kısmını gereksiz ve faydasız işlerle harcayarak heba ederiz.' }
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
    coverBg: 'from-[#4B5563] to-[#1F2937]',
    summary: 'İnsanın yalnızca kontrol edebildiği düşüncelerinden ve seçimlerinden sorumlu olduğunu anlatan sohbetlerdir.',
    keyThemes: ['Kontrol Alanı', 'İçsel Özgürlük', 'Ruhsal Bağımsızlık'],
    historicalContext: 'Öğrencisi Arrianus tarafından tutulan ders notlarıdır.',
    passages: [
      { id: 'ep_1', difficulty: 'easy', quote: 'İnsanları üzen şeyler olaylar değil, yargılardır.' },
      { id: 'ep_2', difficulty: 'medium', quote: 'Seni kıran şey başkalarının hakaretleri değil, senin o hakarete verdiğin tepkidir.' },
      { id: 'ep_3', difficulty: 'hard', quote: 'Özgürlük, arzuladığın şeyleri elde etmekte değil, kontrolünde olmayan arzuları dizginlemeyi öğrenmekte yatar.' }
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
    coverBg: 'from-[#374151] to-[#111827]',
    summary: 'Gündelik hayatta karşılaşılan zorluklara karşı pratik Stoacı el kitabıdır.',
    keyThemes: ['Pratik Ahlak', 'Zihinsel Dayanıklılık', 'Sükunet'],
    historicalContext: 'Antik çağdan günümüze en popüler ahlak rehberi.',
    passages: [
      { id: 'epk_1', difficulty: 'easy', quote: 'Özgürlük, arzuladığın her şeyi yapabilmek değil, arzularını kontrol edebilmektir.' },
      { id: 'epk_2', difficulty: 'medium', quote: 'Kontrol edemediğin şeylerin tutsağı olma; sadece kendi seçimlerinin efendisi ol.' },
      { id: 'epk_3', difficulty: 'legendary', quote: 'Hayat bir tiyatro sahnesidir ve sana düşen rolü en iyi şekilde oynamak senin görevin; rolün büyüklüğünü seçmek ise yönetmenin takdiridir.' }
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
    coverBg: 'from-[#7F1D1D] to-[#450A0A]',
    summary: 'Geleneksel ahlakın, felsefenin ve dogmaların çekiçle sınandığı aforizmalar bütünü.',
    keyThemes: ['Çekiçle Felsefe Yapmak', 'Putları Yıkmak', 'Direnç'],
    historicalContext: 'Nietzsche\'nin en berrak ve özet aforizma kitaplarından biridir.',
    passages: [
      { id: 'pa_1', difficulty: 'easy', quote: 'Beni öldürmeyen her darbe beni güçlendirir.' },
      { id: 'pa_2', difficulty: 'medium', quote: 'İçinde bir amaç olan insan, her türlü zorluğa katlanmanın bir yolunu bulur.' },
      { id: 'pa_3', difficulty: 'hard', quote: 'Tüm putları devirmek gerekir; ta ki geriye yalnızca sarsılmaz hakikatin kendisi kalsın.' }
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
    coverBg: 'from-[#9A3412] to-[#431407]',
    summary: 'Hayatı tüm sevinçleri ve acılarıyla kutlayan, müziği ve bilgeliği birleştiren lirik felsefe metni.',
    keyThemes: ['Şen Bilgelik', 'Müzik ve Sanat', 'Amor Fati'],
    historicalContext: 'Zerdüşt\'ten hemen önceki yaratıcı uyanış dönemi eseri.',
    passages: [
      { id: 'sb_n_1', difficulty: 'easy', quote: 'Yaşamak, tehlikeli yaşamayı göze almaktır.' },
      { id: 'sb_n_2', difficulty: 'medium', quote: 'Müziksiz bir hayat, varoluş açısından telafisi imkansız büyük bir hata olurdu.' },
      { id: 'sb_n_3', difficulty: 'hard', quote: 'Kaderini sevmek, başına gelen her şeyi bir lütuf ve güç kaynağı olarak görebilme cesaretidir.' }
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
    coverBg: 'from-[#374151] to-[#111827]',
    summary: 'Günlük yaşamda mutluluğa, yalnızlığa ve insan karakterine dair berrak ve pratik bilgelik kılavuzudur.',
    keyThemes: ['Yalnızlık', 'İçsel Zenginlik', 'Acı ve Sıkıntı'],
    historicalContext: 'Filozofun dünya çapında tanınmasını sağlayan popüler eseri.',
    passages: [
      { id: 'sch_1', difficulty: 'easy', quote: 'Yalnızlık, tüm büyük zihinlerin kaderidir.' },
      { id: 'sch_2', difficulty: 'medium', quote: 'Sıradan insanlar sadece zamanı harcamayı düşünür, zeki insan ise onu kullanmayı.' },
      { id: 'sch_3', difficulty: 'hard', quote: 'Bir insanın kendi içinde neye sahip olduğu, dışarıdan ne elde edebileceğinden daima daha belirleyici ve kıymetlidir.' }
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
    coverBg: 'from-[#475569] to-[#0F172A]',
    summary: 'Hayatın anlamsızlığı karşısında insanın intihar etmek yerine başkaldırmasını savunur.',
    keyThemes: ['Absürd', 'Başkaldırı', 'Bilinç'],
    historicalContext: 'Varoluşçu düşüncenin en etkili deneme kitaplarından biri.',
    passages: [
      { id: 'cam_1', difficulty: 'easy', quote: 'Sisifos\'u mutlu olarak hayal etmek gerekir.' },
      { id: 'cam_2', difficulty: 'medium', quote: 'Önemli olan yaşamak değil, bilinçle ve tutkuyla yaşamaktır.' },
      { id: 'cam_3', difficulty: 'hard', quote: 'Kışın en soğuk gününde, içimde yenilmez ve sarsılmaz bir yaz mevsimi olduğunu keşfettim.' }
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
    coverBg: 'from-[#047857] to-[#064E3B]',
    summary: 'Tarih boyunca zulme ve haksızlığa karşı direnen insanın metafizik ve politik başkaldırısını inceler.',
    keyThemes: ['Başkaldırı', 'Adalet', 'Ölçülülük'],
    historicalContext: 'Totaliter ideolojilere karşı bireysel özgürlük manifestosu.',
    passages: [
      { id: 'bki_1', difficulty: 'easy', quote: 'Özgürlük, başkalarının da özgür olabileceği bir dünyayı savunmaktır.' },
      { id: 'bki_2', difficulty: 'medium', quote: 'Başkaldırıyorum, öyleyse varız; adaletsizlik karşısında susmak teslim olmaktır.' },
      { id: 'bki_3', difficulty: 'hard', quote: 'Zorbalığa karşı boyun eğmeyen insan, yalnız kendi onurunu değil tüm insanlığın haysiyetini korur.' }
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
    coverBg: 'from-[#059669] to-[#064E3B]',
    summary: 'Antoine Roquentin\'in nesnelerin varoluşu karşısında duyduğu bulantıyı anlatan varoluşçu roman.',
    keyThemes: ['Bulantı', 'Varoluş Özden Önce Gelir', 'Yabancılaşma'],
    historicalContext: 'Varoluşçuluğun roman formundaki ilk başyapıtı.',
    passages: [
      { id: 'bln_1', difficulty: 'easy', quote: 'Var olmak, orada öylece durmaktır; hiçbir gerekçesi yoktur.' },
      { id: 'bln_2', difficulty: 'medium', quote: 'Hiçbir şey seçmemek bile aslında bir seçim yapmaktır.' },
      { id: 'bln_3', difficulty: 'hard', quote: 'Varoluş özden önce gelir; insan önce vardır, varoluşunu kendisi tanımlar ve seçimleriyle kendi kaderini inşa eder.' }
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
    coverBg: 'from-[#111827] to-[#030712]',
    summary: 'İnsanın mutlak özgürlüğünü ve bu özgürlüğün getirdiği kaçınılmaz sorumluluğu felsefi temellerle inceler.',
    keyThemes: ['Özgürlüğe Mahkumiyet', 'Kötü Niyet', 'Hiçlik'],
    historicalContext: '20. yüzyıl felsefesinin en kapsamlı varoluşçu felsefe kitabı.',
    passages: [
      { id: 'vvh_1', difficulty: 'easy', quote: 'İnsan kendi kendisini nasıl tanımlarsa ancak öyle var olur.' },
      { id: 'vvh_2', difficulty: 'medium', quote: 'İnsan özgürlüğe mahkumdur; çünkü bir kez dünyaya atıldıktan sonra yaptığı her şeyden sorumludur.' },
      { id: 'vvh_3', difficulty: 'legendary', quote: 'İnsan kendi özgürlüğünün ağırlığı altında ezilir; çünkü yapacağı her eylemle sadece kendini değil, tüm insanlığı bağlayan bir seçimde bulunur.' }
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
    coverBg: 'from-[#991B1B] to-[#450A0A]',
    summary: 'Raskolnikov\'un işlediği cinayet ve ardından gelen vicdan azabını, ahlaki çöküş ve kefaret arayışını anlatır.',
    keyThemes: ['Suç ve Vicdan', 'Kefaret', 'Olağanüstü İnsan Miti'],
    historicalContext: 'Psikolojik roman türünün zirvesi kabul edilen Rus klasiği.',
    passages: [
      { id: 'sc_1', difficulty: 'easy', quote: 'Yeni bir adım atmak, yeni bir kelime söylemek insanların en çok korktuğu şeydir.' },
      { id: 'sc_2', difficulty: 'medium', quote: 'Acı ve ıstırap, geniş bir zeka ve derin bir kalp için daima zorunludur.' },
      { id: 'sc_3', difficulty: 'hard', quote: 'Kendi yolunda yanlış gitmek, başkasının yolunda doğru gitmekten daima daha onurludur.' },
      { id: 'sc_4', difficulty: 'legendary', quote: 'Vicdanı olan bir insan, hatasını anladığı anda zaten en ağır cezayı kendi içinde çekmeye başlamıştır; zindanın karanlığı bunun yanında hafif kalır.' }
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
    coverBg: 'from-[#7F1D1D] to-[#450A0A]',
    summary: 'Baba Fyodor Karamazov\'un cinayeti etrafında üç kardeşin (Dmitri, İvan, Alyoşa) inanç, akıl ve tutku çatışmasıdır.',
    keyThemes: ['Büyük Engizisyoncu', 'Tanrı ve Ahlak', 'Bağışlama'],
    historicalContext: 'Dostoyevski\'nin son ve en büyük başyapıtı.',
    passages: [
      { id: 'kk_1', difficulty: 'easy', quote: 'Dünyada çocukların gözyaşları üzerine kurulacak hiçbir cenneti kabul etmiyorum.' },
      { id: 'kk_2', difficulty: 'medium', quote: 'İnsan sırf acı çekmemek için bile bütün varlığını feda etmeye hazırdır.' },
      { id: 'kk_3', difficulty: 'legendary', quote: 'Sevgi öyle büyük bir güçtür ki, bütün dünyayı satın alabilir ve sadece kendi günahlarını değil, başkalarının günahlarını da bağışlatabilir.' }
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
    coverBg: 'from-[#374151] to-[#111827]',
    summary: 'Toplumdan soyutlanmış Yeraltı Adamı\'nın akılcılığa, kibire ve modern toplumun sahteliklerine karşı monoloğudur.',
    keyThemes: ['Aşırı Bilinçlilik', 'Yeraltı Psikolojisi', 'İrrasyonalite'],
    historicalContext: '20. yüzyıl varoluşçu edebiyatının kapısını açan kurucu metin.',
    passages: [
      { id: 'yn_d_1', difficulty: 'easy', quote: 'Ben hasta bir adamım, huysuz bir adamım ben.' },
      { id: 'yn_d_2', difficulty: 'medium', quote: 'Çok fazla bilinçli olmak bir hastalıktır; gerçek, tam anlamıyla bir hastalıktır.' },
      { id: 'yn_d_3', difficulty: 'legendary', quote: 'Bana öyle geliyor ki insan sadece acılarını saymaktan hoşlanır, mutluluklarını ise hiç hesap etmez; oysa dikkat etse her anında bir sevinç gizlidir.' }
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
    coverBg: 'from-[#1E3A8A] to-[#172554]',
    summary: 'Napolyon savaşları sırasında Rus toplumunun ve soylu ailelerin destansı panoramasını sunar.',
    keyThemes: ['Sabır ve Zaman', 'Tarihin Yasaları', 'Savaş ve İnsan'],
    historicalContext: 'Dünya edebiyat tarihinin en büyük panoramik romanı.',
    passages: [
      { id: 'sb_1', difficulty: 'easy', quote: 'İnsan sadece sevgiyle yaşar.' },
      { id: 'sb_2', difficulty: 'medium', quote: 'En güçlü iki savaşçı sabır ve zamandır; onların üstesinden gelemeyeceği hiçbir engel yoktur.' },
      { id: 'sb_3', difficulty: 'hard', quote: 'Hayatın gerçek anlamını ancak ölümün soğuk nefesini ensemizde hissettiğimiz o dönüm noktalarında kavrarız.' }
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
    coverBg: 'from-[#9F1239] to-[#4C0519]',
    summary: 'Tutkulu aşkı uğruna toplumsal kuralları çiğneyen Anna Karenina\'nın trajedisi ve Levin\'in hakikat arayışıdır.',
    keyThemes: ['Mutlu ve Mutsuz Aileler', 'Toplumsal Baskı', 'Tutku'],
    historicalContext: 'Roman sanatının en kusursuz kurgularından biri kabul edilir.',
    passages: [
      { id: 'ak_1', difficulty: 'easy', quote: 'Saygı olmayan yerde gerçek ve kalıcı bir sevgi yeşeremez.' },
      { id: 'ak_2', difficulty: 'medium', quote: 'Bütün mutlu aileler birbirine benzer; her mutsuz ailenin ise kendine özgü bir mutsuzluğu vardır.' },
      { id: 'ak_3', difficulty: 'hard', quote: 'İnsan ruhu öyle karmaşık bir labirenttir ki, kendi arzularının kölesi olduğunda en aydınlık yolu bile karanlık görür.' }
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
    coverBg: 'from-[#713F12] to-[#451A03]',
    summary: 'Gregor Samsa\'nın bir sabah dev bir böceğe dönüşmesi ve ailesinin yabancılaşması.',
    keyThemes: ['Yabancılaşma', 'Böcekleşme', 'Aile Baskısı'],
    historicalContext: 'Modern dünya insanının sistem karşısındaki çaresizliğini anlatan kült eser.',
    passages: [
      { id: 'dns_1', difficulty: 'easy', quote: 'Gregor Samsa bir sabah huzursuz düşlerden uyandı.' },
      { id: 'dns_2', difficulty: 'medium', quote: 'İçimdeki sessizlik dışarıdaki gürültüden çok daha ağırdır.' },
      { id: 'dns_3', difficulty: 'hard', quote: 'İnsanlar ancak işlerine yaradığınız sürece size tahammül ederler; faydanız bittiğinde ise en yakınlarınız bile birer yabancıya dönüşür.' }
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
    coverBg: 'from-[#1F2937] to-[#111827]',
    summary: 'Josef K.\'nın suçu bildirilmeyen görünmez bir mahkeme tarafından tutuklanıp yargılanışıdır.',
    keyThemes: ['Bürokratik Labirent', 'Suçsuzluğun Çaresizliği', 'Yasa Önünde'],
    historicalContext: 'Modern hukuk sisteminin ve otoriter mekanizmaların absürdlüğünü gözler önüne serer.',
    passages: [
      { id: 'dva_1', difficulty: 'easy', quote: 'Suçsuz olmak, adaletsiz bir sistemde en büyük suç haline gelir.' },
      { id: 'dva_2', difficulty: 'medium', quote: 'Birisi Josef K.\'ya iftira atmış olmalıydı; çünkü kötü bir şey yapmamış olmasına rağmen tutuklandı.' },
      { id: 'dva_3', difficulty: 'hard', quote: 'Görünmeyen bir mahkemenin önünde kendini savunmaya çalışmak, karanlıkta gölgelerle savaşmaktan farksızdır.' }
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
    coverBg: 'from-[#B91C1C] to-[#7F1D1D]',
    summary: 'Jean Valjean\'ın merhametle dönüşen hayatı ve Müfettiş Javert ile olan kovalamacasıdır.',
    keyThemes: ['Merhamet', 'Adalet', 'Yoksulluk'],
    historicalContext: '19. yüzyıl Fransız toplumunun devasa vicdan romanı.',
    passages: [
      { id: 'sfl_1', difficulty: 'easy', quote: 'Ölmek hiçbir şeydir; asıl korkunç olan yaşamamaktır.' },
      { id: 'sfl_2', difficulty: 'medium', quote: 'Gelecek, cesurların umudu, korkakların ise kabusudur.' },
      { id: 'sfl_3', difficulty: 'hard', quote: 'Sevmek veya sevilmiş olmak yeterlidir; karanlık gecelerin ardından doğacak şafağı beklemek gerekmez.' }
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
    coverBg: 'from-[#D97706] to-[#78350F]',
    summary: 'Genç Brahman Siddhartha\'nın nehir kıyısında aydınlanmaya ve iç huzura ulaşma yolculuğu.',
    keyThemes: ['Aydınlanma', 'Nehrin Sesi', 'Öz Bilgi'],
    historicalContext: 'Hindistan felsefesi ve Budizm\'in edebi zirvesi.',
    passages: [
      { id: 'sdh_1', difficulty: 'easy', quote: 'Bilgelik başkasına aktarılamaz; onu kişi kendisi bulmalıdır.' },
      { id: 'sdh_2', difficulty: 'medium', quote: 'Nehir her yerdedir; kaynağında, şelalesinde ve denize ulaştığı her damlasında aynı anda vardır.' },
      { id: 'sdh_3', difficulty: 'hard', quote: 'Aramak bir hedefe kilitlenmektir; bulmak ise her şeye açık ve özgür bir zihinle beklemektir.' }
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
    coverBg: 'from-[#4B5563] to-[#1F2937]',
    summary: 'Harry Haller\'in insan yanı ile yalnız bozkırkurdu yanı arasındaki ruhsal savaşıdır.',
    keyThemes: ['Bozkırkurdu', 'Yalnızlık', 'Sihirli Tiyatro'],
    historicalContext: 'Modern insanın kültür krizi ve yabancılaşmasını teşhis eden kült roman.',
    passages: [
      { id: 'bzk_1', difficulty: 'easy', quote: 'Sadece deliler için; giriş parası aklınızdır.' },
      { id: 'bzk_2', difficulty: 'medium', quote: 'Yalnızlık bağımsızlıktır; onu ben istedim ve uzun yıllar boyunca bedelini ödedim.' },
      { id: 'bzk_3', difficulty: 'hard', quote: 'İçimdeki vahşi kurt ile medeni insan arasındaki savaş bitmedikçe hiçbir şehirde huzur bulamam.' }
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
    id: 'tutunamayanlar',
    title: 'Tutunamayanlar',
    originalTitle: 'Tutunamayanlar',
    author: 'Oğuz Atay',
    authorBio: 'Postmodern Türk romanının kurucusu.',
    authorBirthDeath: '1934 - 1977',
    year: '1972',
    genre: 'turkish',
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
    id: 'huzur',
    title: 'Huzur',
    originalTitle: 'Huzur',
    author: 'Ahmet Hamdi Tanpınar',
    authorBio: 'Doğu-Batı sentezi, zaman felsefesi ve Türk musikisi ustası.',
    authorBirthDeath: '1901 - 1962',
    year: '1949',
    genre: 'turkish',
    coverBg: 'from-[#588157] to-[#283618]',
    summary: 'Mümtaz ile Nuran\'ın aşkı ekseninde İstanbul\'un tarihi dokusu ve Doğu-Batı medeniyet krizi.',
    keyThemes: ['Zaman Felsefesi', 'Türk Musikisi', 'Huzursuzluk'],
    historicalContext: 'Modern Türk edebiyatının estetik zirvesi.',
    passages: [
      { id: 'hzr_1', difficulty: 'easy', quote: 'Ne içindeyim zamanın, ne de büsbütün dışında.' },
      { id: 'hzr_2', difficulty: 'medium', quote: 'İstanbul, geçmişin hüznünü bugünün telaşıyla yoğuran bir rüyadır.' },
      { id: 'hzr_4', difficulty: 'legendary', quote: 'Musiki öyle bir dildir ki, kelimelerin bittiği ve suskunluğun başladığı yerde insan ruhunun en mahrem köşelerine tercüman olur.' }
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
    coverBg: 'from-[#D97706] to-[#78350F]',
    summary: 'Abdi Ağa\'nın zulmüne karşı dağa çıkan İnce Memed\'in Çukurova efsanesine dönüşmesi.',
    keyThemes: ['Adalet ve Başkaldırı', 'Çukurova', 'Eşkıyalık'],
    historicalContext: '40\'tan fazla dile çevrilen modern halk destanı.',
    passages: [
      { id: 'im_1', difficulty: 'easy', quote: 'Zulmün olduğu yerde direniş haktır.' },
      { id: 'im_2', difficulty: 'medium', quote: 'İnsan dediğin bir topraktır; suyu sevgidir, güneşi ise adalettir.' },
      { id: 'im_3', difficulty: 'hard', quote: 'Dağlar ne kadar yüce olsa da sevda ateşi onların zirvesindeki karları eritmeye yeter.' }
    ]
  },

  // =========================================================================
  // 4. DİSTOPYA & GELECEK (DYSTOPIA)
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
    coverBg: 'from-[#991B1B] to-[#7F1D1D]',
    summary: 'İnsanlara karşı devrim yapan çiftlik hayvanlarının domuzların diktatörlüğüne boyun eğiş masalı.',
    keyThemes: ['Eşitlik Yanılsaması', 'Güç Yozlaşması', 'Siyasi Fabl'],
    historicalContext: 'Diktatörlükleri ve propaganda mekanizmalarını hicveden başyapıt.',
    passages: [
      { id: 'hc_1', difficulty: 'easy', quote: 'Bütün hayvanlar eşittir ama bazıları daha eşittir.' },
      { id: 'hc_2', difficulty: 'medium', quote: 'Dışarıdaki hayvanlar bir domuzların yüzüne, bir insanların yüzüne baktılar; ama onları birbirinden ayırt edemediler.' },
      { id: 'hc_3', difficulty: 'hard', quote: 'Devrimle vaat edilen özgürlük, domuzların ellerinde daha acımasız bir kırbaca dönüştü.' }
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
    coverBg: 'from-[#EA580C] to-[#C2410C]',
    summary: 'İtfaiyecilerin yangın söndürmek yerine kitap yaktığı bir gelecekte Guy Montag\'ın uyanışı.',
    keyThemes: ['Kitap Yakımı', 'Sansür', 'Bellek'],
    historicalContext: 'Kitap sevgisini anlatan en dokunaklı distopya.',
    passages: [
      { id: 'fh_1', difficulty: 'easy', quote: 'Kitapları yakmaktan daha büyük bir suç varsa o da onları okumamaktır.' },
      { id: 'fh_2', difficulty: 'medium', quote: 'Kitaplar bize sadece bilmediğimiz şeyleri değil, unuttuğumuz insanlığımızı da hatırlatır.' },
      { id: 'fh_3', difficulty: 'hard', quote: 'Kitapların sayfaları arasında gözenekler vardır; onlar hayatın gerçek dokusunu ve nefesini taşırlar.' }
    ]
  },

  // =========================================================================
  // 5. PSİKOLOJİ & İNSAN (PSYCHOLOGY)
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
    coverBg: 'from-[#6B21A8] to-[#3B0764]',
    summary: 'Modern insanın kitle toplumu içinde bireyselliğini koruması ve kendi bilinçdışıyla yüzleşmesi.',
    keyThemes: ['İçsel Uyanış', 'Gölge', 'Bireysellik'],
    historicalContext: 'Modern toplumun kitlesel çılgınlığına karşı bireysel ruh reçetesi.',
    passages: [
      { id: 'jng_1', difficulty: 'easy', quote: 'Dışarı bakan rüya görür, içeri bakan uyanır.' },
      { id: 'jng_2', difficulty: 'medium', quote: 'Kendi karanlığıyla yüzleşmeyen hiçbir insan aydınlığa ve olgunluğa ulaşamaz.' },
      { id: 'jng_3', difficulty: 'hard', quote: 'Bilinçdışını bilince dönüştürene kadar o hayatınızı yönetir ve siz ona kader dersiniz.' }
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
    coverBg: 'from-[#E11D48] to-[#881337]',
    summary: 'Sevginin bir rastlantı değil, bilgi, emek ve özen gerektiren aktif bir sanat olduğu.',
    keyThemes: ['Aktif Sevgi', 'Özen ve Saygı', 'Olgun Bağlılık'],
    historicalContext: 'Milyonlarca insana sevginin hakiki doğasını anlatan klasik.',
    passages: [
      { id: 'frm_1', difficulty: 'easy', quote: 'Sevgi bir duygu değil, aktif bir sanattır.' },
      { id: 'frm_2', difficulty: 'medium', quote: 'İnsan kendi yalnızlığından korktuğu için özgürlüğünü otoriteye feda etmeye hazırdır.' },
      { id: 'frm_3', difficulty: 'hard', quote: 'Gerçek sevgi, karşındakinin kendi doğasına uygun olarak büyümesine ve gelişmesine saygı duymaktır.' }
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
    coverBg: 'from-[#0369A1] to-[#0C4A6E]',
    summary: 'Josef Breuer ile Nietzsche\'nin Viyana\'da buluşup psikanalizin doğumunu ve ümitsizliği tedavi etmesi.',
    keyThemes: ['Varoluşsal Terapi', 'Ümitsizlik', 'Hakikat'],
    historicalContext: 'Psikoloji ile felsefeyi birleştiren çok satan roman.',
    passages: [
      { id: 'ylm_1', difficulty: 'easy', quote: 'Acı çekmek değil, anlamsız acı çekmek insanı mahveder.' },
      { id: 'ylm_2', difficulty: 'medium', quote: 'Ümit etmek, sadece gerçekleşmeyecek arzuların acısını uzatmaktan başka bir işe yaramaz.' },
      { id: 'ylm_3', difficulty: 'hard', quote: 'Kendi seçimlerinin sorumluluğunu alamayan bir insan, başkalarının çizdiği kadere mahkumdur.' }
    ]
  },

  // =========================================================================
  // 6. BİYOGRAFİ & PORTRE (BIOGRAPHY)
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
    coverBg: 'from-[#1E3A8A] to-[#1E1B4B]',
    summary: 'Tarihin akışını tek bir anda değiştiren 14 dramatik kırılma noktasının lirik anlatımı.',
    keyThemes: ['Tarihin Kırılma Anları', 'Kaderin Eli', 'Büyük İrade'],
    historicalContext: 'Biyografik anlatımın dünya çapındaki zirve eseri.',
    passages: [
      { id: 'zwg_1', difficulty: 'easy', quote: 'Tarih, ancak nadir anlarda bir kahramanın eline kaderi teslim eder.' },
      { id: 'zwg_1_b', difficulty: 'medium', quote: 'Bir insanın kaderini belirleyen dönüm noktaları bazen tek bir saniyede gizlidir.' },
      { id: 'zwg_1_c', difficulty: 'hard', quote: 'Büyük kararlar daima sessizlik içinde alınır; fırtınanın koptuğu an ise artık çok geçtir.' }
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
    coverBg: 'from-[#7F1D1D] to-[#450A0A]',
    summary: 'Hölderlin, Kleist ve Nietzsche\'nin içlerindeki deha ateşiyle savaşıp trajik sona yürümeleri.',
    keyThemes: ['Büyük Ruh', 'Fırtınalara Direnmek', 'Trajik Deha'],
    historicalContext: 'Dahi sanatçıların psikolojik portresi.',
    passages: [
      { id: 'zwg_2', difficulty: 'easy', quote: 'Deha, insanı kendi iç alevinde yakan kutsal bir ateştir.' },
      { id: 'zwg_2_b', difficulty: 'medium', quote: 'Büyük bir ruha sahip olmak, hayatın bütün fırtınalarına karşı tek başına direnmektir.' },
      { id: 'zwg_2_c', difficulty: 'hard', quote: 'Kendi içindeki fırtınayı dindiremeyen bir ruh, dünyayı yerinden oynatacak eserler doğurur.' }
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
    coverBg: 'from-[#374151] to-[#111827]',
    summary: 'İki dünya savaşı arasında çöken Viyana ve Avrupa hümanizminin intiharından önce yazdığı anıları.',
    keyThemes: ['Yıkılan Dünya', 'Büyük Çöküş', 'Hümanizm'],
    historicalContext: '20. yüzyılın en dokunaklı veda ve otobiyografi kitabı.',
    passages: [
      { id: 'zwg_3_a', difficulty: 'easy', quote: 'Güvenlik duygusu, bütün bir kuşağın en büyük yanılsamasıydı.' },
      { id: 'zwg_3', difficulty: 'medium', quote: 'Gölgesi hayatımın her anına düşen savaş, insanlığın bir asırda biriktirdiği tüm incelikleri sildi.' },
      { id: 'zwg_3_c', difficulty: 'hard', quote: 'Bizler hiçbir kuşağın yaşamadığı kadar büyük bir çöküşe ve felakete tanıklık ettik.' }
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
    coverBg: 'from-[#92400E] to-[#451A03]',
    summary: 'Büyük Yunan ve Roma liderlerinin erdem ve kusurlarını karşılaştıran anıt biyografi.',
    keyThemes: ['Karakter ve Alışkanlıklar', 'Liderlik', 'Erdem'],
    historicalContext: 'Biyografi türünün tarihteki ilk büyük başyapıtı.',
    passages: [
      { id: 'plt_1', difficulty: 'easy', quote: 'Öfkeyi yenmek, kılıçla bir orduyu yenmekten çok daha büyük bir erdemdir.' },
      { id: 'plt_2', difficulty: 'medium', quote: 'Bir insanın karakteri, en büyük başarılarından çok en küçük alışkanlıklarında gizlidir.' },
      { id: 'plt_3', difficulty: 'hard', quote: 'Büyük insanların hayatı bize gösterir ki, talih ancak hazırlıklı ve erdemli zihinlere tebessüm eder.' }
    ]
  },

  // =========================================================================
  // 7. MİZAH & HİCİV (SATIRE & WIT)
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
    coverBg: 'from-[#B45309] to-[#713F12]',
    summary: 'İbrahim Zübükzade\'nin yükselişi üzerinden toplumun sahtekarlığa nasıl çanak tuttuğunu anlatan siyasi taşlama.',
    keyThemes: ['Zübükizm', 'Gülmek En Asil Silah', 'Siyasi İkiyüzlülük'],
    historicalContext: 'Türk siyasi diline "Zübük" kavramını kazandıran kült roman.',
    passages: [
      { id: 'zb_1', difficulty: 'easy', quote: 'Gülmek, insanın çaresizliğe karşı bulduğu en asil silahtır.' },
      { id: 'zb_2', difficulty: 'medium', quote: 'Bu memlekette dürüst olmak suç, kurnaz olmak marifet sayılır.' },
      { id: 'zb_3', difficulty: 'hard', quote: 'Kabahat tek başına Zübük\'te değil; onu baş tacı eden bizim kendi saflığımızdadır.' }
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
    coverBg: 'from-[#D97706] to-[#78350F]',
    summary: 'Nüfus kağıdı olmadığı için kayıtlarda ölü sayılan ama vergi ve askerlik zamanı yaşayan Yaşar Yaşamaz\'ın trajikomik öyküsü.',
    keyThemes: ['Resmi Evrak Çıkmazı', 'Bürokrasi Absürdü', 'Halk Çaresizliği'],
    historicalContext: 'Devlet bürokrasisini yerle bir eden Türk mizah klasiği.',
    passages: [
      { id: 'ynyn_1', difficulty: 'easy', quote: 'Yaşamak için önce kağıt üzerinde var olduğunu kanıtlamalısın.' },
      { id: 'ynyn_2', difficulty: 'medium', quote: 'Resmi evraklarda varsan varsın, yoksan nefes alsan bile yaşamazsın.' },
      { id: 'ynyn_3', difficulty: 'hard', quote: 'Devletin mührü olmadan nefes almak bu memlekette en büyük cürümdür.' }
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
    coverBg: 'from-[#CA8A04] to-[#854D0E]',
    summary: 'Pangloss\'un "bu dünya dünyaların en iyisidir" dogmasıyla yola çıkan saf Candide\'in felaketler sonucu bahçesini yetiştirmeye karar vermesi.',
    keyThemes: ['Bahçemizi Yetiştirmek', 'Kör İyimserliğin İflası', 'Felsefi İroni'],
    historicalContext: 'Aydınlanma çağının kilise dogmalarını yıkan felsefi hicvi.',
    passages: [
      { id: 'cnd_1', difficulty: 'easy', quote: 'Bahçemizi yetiştirmek zorundayız.' },
      { id: 'cnd_2', difficulty: 'medium', quote: 'Her şeyin en iyi olduğu bir dünyada yaşıyorsak, diğer dünyalar kimbilir nasıldır?' },
      { id: 'cnd_3', difficulty: 'hard', quote: 'Çalışmak bizi üç büyük beladan kurtarır: can sıkıntısı, ahlaksızlık ve yoksulluk.' }
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
    coverBg: 'from-[#0284C7] to-[#075985]',
    summary: 'Huck Finn ile kaçak köle Jim\'in Mississippi Nehri üzerinde bir salla özgürlüğe ve insanlığa doğru yolculuğu.',
    keyThemes: ['Doğruyu Söylemek', 'Özgürlük', 'Toplumsal İkiyüzlülük'],
    historicalContext: 'Hemingway\'e göre tüm modern Amerikan edebiyatının kaynağı.',
    passages: [
      { id: 'mt_1', difficulty: 'easy', quote: 'Doğruyu söylerseniz hiçbir şeyi hatırlamak zorunda kalmazsınız.' },
      { id: 'mt_1_b', difficulty: 'medium', quote: 'İnsanın vicdanı öyle bir şeydir ki, haklı da olsan haksız da olsan seni rahat bırakmaz.' }
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
    coverBg: 'from-[#EA580C] to-[#C2410C]',
    summary: 'Haylaz Tom Sawyer\'ın çit boyama kurnazlığı ve Mississippi kıyısındaki maceraları.',
    keyThemes: ['Kahkahanın Gücü', 'Çocukluk Kurnazlığı', 'Özgürlük'],
    historicalContext: 'Dünya çocuk ve gençlik edebiyatının ölümsüz klasiği.',
    passages: [
      { id: 'mt_2', difficulty: 'easy', quote: 'Bir şeyi arzulamanın yolu onu ulaşılmaz kılmaktır.' },
      { id: 'mt_2_b', difficulty: 'medium', quote: 'İnsanın en güçlü silahı kahkahadır; onun karşısında hiçbir zorbalık dayanamaz.' }
    ]
  },

  // =========================================================================
  // 8. BİLİM & EVREN (SCIENCE)
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
    coverBg: 'from-[#0284C7] to-[#082F49]',
    summary: 'Evrenin 13.8 milyar yıllık evrimi, yıldız tozundan oluşan insan bilinci ve uzayın keşfi.',
    keyThemes: ['Yıldız Tozuyuz', 'Evrenin Bilinci', 'Merak'],
    historicalContext: 'Milyonlarca insana bilim sevgisi aşılayan efsanevi kitap.',
    passages: [
      { id: 'sgn_1', difficulty: 'easy', quote: 'Bizler yıldız tozuyuz; evren kendi kendini anlamaya çalışan bir bilinçtir.' },
      { id: 'sgn_1_b', difficulty: 'medium', quote: 'Bir yerlerde olağanüstü bir şey keşfedilmeyi bekliyor.' },
      { id: 'sgn_1_c', difficulty: 'hard', quote: 'Evrenin enginliği karşısında yalnızlığımız bir lanet değil; birbirimize daha fazla sarılmamız için bir çağrıdır.' }
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
    coverBg: 'from-[#0369A1] to-[#0C4A6E]',
    summary: 'Voyager 1\'in çektiği Dünya fotoğrafı üzerinden insanın kibrine ve evrendeki küçüklüğüne dair tefekkür.',
    keyThemes: ['Soluk Mavi Nokta', 'İnsan Kibri', 'Tek Evimiz'],
    historicalContext: 'İnsanlığa hoşgörü ve gezegeni koruma çağrısı yapan manifestodur.',
    passages: [
      { id: 'sgn_2', difficulty: 'easy', quote: 'Bütün kibirlerimiz uzayın karanlığındaki o mavi noktada son bulur.' },
      { id: 'sgn_2_b', difficulty: 'medium', quote: 'Bütün tarihimiz ve sevinçlerimiz uzayın sonsuz karanlığında asılı duran o toz zerresinde yaşandı.' }
    ]
  },
  {
    id: 'karanlik-bir-dunyada-bilimin-mum-isigi',
    title: 'Karanlık Bir Dünyada Bilimin Mum Işığı',
    originalTitle: 'The Demon-Haunted World',
    author: 'Carl Sagan',
    authorBio: 'Eleştirel düşünce ve akılcılık savunucusu.',
    authorBirthDeath: '1934 - 1996',
    year: '1995',
    genre: 'science',
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
    coverBg: 'from-[#1E3A8A] to-[#0F172A]',
    summary: 'Büyük Patlama\'dan kara deliklere ve evrenin sınırlarına kadar kozmolojinin sırları.',
    keyThemes: ['Zeka ve Değişim', 'Büyük Patlama', 'Kara Delikler'],
    historicalContext: 'Modern teorik fiziğin dünya çapında en çok satan popüler bilim kitabı.',
    passages: [
      { id: 'hwk_1', difficulty: 'easy', quote: 'Zeka, değişime uyum sağlayabilme yeteneğidir.' },
      { id: 'hwk_2', difficulty: 'medium', quote: 'Sessiz insanların en gürültülü zihinleri vardır.' }
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
    coverBg: 'from-[#D97706] to-[#78350F]',
    summary: 'Kuantum elektrodinamiğinin yaratıcısı Feynman\'ın kasa açma, bongo çalma ve fizik maceraları.',
    keyThemes: ['Kendini Kandırmamak', 'Bilimsel Merak', 'Özgür Zihin'],
    historicalContext: 'Bilim insanı portresini yıkan eğlenceli ve derin otobiyografi.',
    passages: [
      { id: 'fyn_1', difficulty: 'easy', quote: 'Bilim, uzmanların cehaletine inanmaktır.' },
      { id: 'fyn_2', difficulty: 'medium', quote: 'En önemli ilke kendini kandırmamaktır; çünkü kandırılması en kolay kişi kendinsiniz.' }
    ]
  },
  {
    id: 'zamanin-duzeni',
    title: 'Zamanın Düzeni',
    originalTitle: 'The Order of Time',
    author: 'Carlo Rovelli',
    authorBio: 'İtalyan teorik fizikçi ve kuantum çekim kuramcısı.',
    authorBirthDeath: '1956 - günümüz',
    year: '2017',
    genre: 'science',
    coverBg: 'from-[#312E81] to-[#1E1B4B]',
    summary: 'Zamanın evrende tek ve mutlak bir akışı olmadığını, olaylar arasındaki ilişkiler ağı olduğunu şiirsel bir dille açıklar.',
    keyThemes: ['Zamanın Göreliliği', 'Olaylar Ağı', 'Kuantum Düzeni'],
    historicalContext: 'Modern fiziğin zaman kavramına getirdiği en şiirsel bakış.',
    passages: [
      { id: 'rvl_1', difficulty: 'medium', quote: 'Zaman olaylardan bağımsız akmaz; nesneler arasındaki ilişkilerin ta kendisidir.' },
      { id: 'rvl_2', difficulty: 'hard', quote: 'Bizler zamandan yapılmış varlıklarız; hatıralarımız geçmişi, arzularımız ise geleceği inşa eder.' }
    ]
  }
];
