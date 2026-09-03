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
      { id: 'sb_1', difficulty: 'easy', quote: 'En güçlü iki savaşçı sabır ve zamandır; onların üstesinden gelemeyeceği hiçbir engel yoktur.' },
      { id: 'sb_2', difficulty: 'medium', quote: 'En büyük zafer, insanın kendi tutkularına ve nefsine karşı kazandığı zaferdir.' },
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
      { id: 'im_3', difficulty: 'hard', quote: 'İnsanoğlu umutsuzluktan umut yaratandır; bu dünyada zulüm ne kadar koyu olursa olsun, direnişin ışığı asla sönmez.' }
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
      { id: 'jng_2', difficulty: 'medium', quote: 'Toplumun kalitesi, onu oluşturan bireylerin ahlaki ve zihinsel derinliği kadardır.' },
      { id: 'jng_3', difficulty: 'hard', quote: 'Kendi iç dünyasını ve gölgesini tanımayan insan, dış dünyadaki güçlerin oyuncağı olmaya mahkumdur.' }
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
      { id: 'frm_2', difficulty: 'medium', quote: 'Olgunlaşmamış sevgi seni sevdiğim için sana ihtiyacım var der; olgun sevgi sana ihtiyacım olduğu için seni seviyorum der.' },
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
,

  {
    "id": "memleketimden-insan-manzaralari",
    "title": "Memleketimden İnsan Manzaraları",
    "originalTitle": "Memleketimden İnsan Manzaraları",
    "author": "Nazım Hikmet",
    "authorBio": "Türk edebiyatının dünyaca ünlü şairi, oyun yazarı ve düşünürü. Serbest nazmın ve toplumcu şiirin öncüsüdür.",
    "authorBirthDeath": "1902 - 1963",
    "year": "1966",
    "genre": "poetry",
    "coverBg": "from-[#991B1B] to-[#450A0A]",
    "summary": "Nazım Hikmet'in Bursa Cezaevi'nde kaleme aldığı, 20. yüzyıl Türkiye'sinin tren vagonlarından köylere, aydınlardan mahpuslara uzanan destansı manzarasıdır.",
    "keyThemes": [
      "İnsan Sevgisi",
      "Halkın Mücadelesi",
      "Umut",
      "Vatan Hasreti"
    ],
    "historicalContext": "1940'ların cezaevi koşullarında sinematografik bir şiir diliyle inşa edilmiş edebi anıt.",
    "passages": [
      {
        "id": "naz_1",
        "difficulty": "easy",
        "quote": "Yaşamak bir ağaç gibi tek ve hür ve bir orman gibi kardeşçesine."
      },
      {
        "id": "naz_2",
        "difficulty": "medium",
        "quote": "En güzel deniz henüz gidilmemiş olandır. En güzel çocuk henüz büyümedi."
      },
      {
        "id": "naz_3",
        "difficulty": "hard",
        "quote": "Sen yanmasan, ben yanmasam, biz yanmasak nasıl çıkar karanlıklar aydınlığa?"
      },
      {
        "id": "naz_4",
        "difficulty": "legendary",
        "quote": "Dörtnala gelip Uzak Asya'dan Akdeniz'e bir kısrak başı gibi uzanan bu memleket bizim."
      }
    ]
  },

  {
    "id": "sevda-sozleri",
    "title": "Sevda Sözleri",
    "originalTitle": "Sevda Sözleri & Üvercinka",
    "author": "Cemal Süreya",
    "authorBio": "İkinci Yeni şiirinin en lirik, erotik ve ironik ustası. Türkçenin ses olanaklarını genişleten şair ve denemeci.",
    "authorBirthDeath": "1931 - 1990",
    "year": "1984",
    "genre": "poetry",
    "coverBg": "from-[#E11D48] to-[#881337]",
    "summary": "Cemal Süreya'nın bütün şiirlerini bir araya getiren başyapıtı. Aşkın, tutkunun, göçün ve hüznün eşsiz metaforlarla örüldüğü modern Türk şiiri külliyatı.",
    "keyThemes": [
      "Lirik Aşk",
      "Yalnızlık",
      "Dilin Esnekliği",
      "Kent Hüznü"
    ],
    "historicalContext": "İkinci Yeni akımının imge zenginliği ve Türkçenin ritmik doruk noktası.",
    "passages": [
      {
        "id": "cs_1",
        "difficulty": "easy",
        "quote": "Hayat kısa, kuşlar uçuyor."
      },
      {
        "id": "cs_2",
        "difficulty": "medium",
        "quote": "Senin bir havan var beni asıl saran o; onunla daha bir gün ışığı, onsuz bir akşamüstü."
      },
      {
        "id": "cs_3",
        "difficulty": "hard",
        "quote": "Oysa ben senin gözlerindeki o hüzünlü derinliğe kendi sessizliğimi feda etmiştim."
      },
      {
        "id": "cs_4",
        "difficulty": "legendary",
        "quote": "Gözlerin bir çığlık, bir yaralı haykırış; gözlerin bu gece çok uzaktan geçen bir tren."
      }
    ]
  },

  {
    "id": "ben-sana-mecburum",
    "title": "Ben Sana Mecburum",
    "originalTitle": "Ben Sana Mecburum",
    "author": "Attila İlhan",
    "authorBio": "Mavi akımının öncüsü, romancı, şair ve düşünür. Şiirlerinde sinematografik görsellik ve coşkun lirizm hakimdir.",
    "authorBirthDeath": "1925 - 2005",
    "year": "1960",
    "genre": "poetry",
    "coverBg": "from-[#1E3A8A] to-[#172554]",
    "summary": "Yağmurlu gecelerin, neon ışıklarının, ayrılıkların ve devasa bir aşkın sinematografik anlatımı olan kült şiir kitabı.",
    "keyThemes": [
      "Mecburiyet",
      "Yağmur ve Ayrılık",
      "İsyan",
      "Şehir Yalnızlığı"
    ],
    "historicalContext": "1950'lerin sonu Paris ve İstanbul ekseninde yazılmış modern lirizm.",
    "passages": [
      {
        "id": "ai_1",
        "difficulty": "easy",
        "quote": "Ben sana mecburum bilemezsin, adını mıh gibi aklımda tutuyorum."
      },
      {
        "id": "ai_2",
        "difficulty": "medium",
        "quote": "Ne vakit bir yaşamak düşünsem, bu kurtlar sofrasında belki zor."
      },
      {
        "id": "ai_3",
        "difficulty": "hard",
        "quote": "Ayrılık da sevdaya dahil, çünkü ayrılanlar hala sevgili."
      },
      {
        "id": "ai_4",
        "difficulty": "legendary",
        "quote": "Görünmez bir mezarlıktır zaman; şairler ölümlerini kendi dizelerinde taşırlar."
      }
    ]
  },

  {
    "id": "goge-bakma-duragi",
    "title": "Göğe Bakma Durağı",
    "originalTitle": "Dünyanın En Güzel Arabistanı & Tütünler Islak",
    "author": "Turgut Uyar",
    "authorBio": "İkinci Yeni'nin trajik ve derin soluklu şairi. Bireyin yabancılaşmasını ve varoluş sancısını modern imgelerle işlemiştir.",
    "authorBirthDeath": "1927 - 1985",
    "year": "1968",
    "genre": "poetry",
    "coverBg": "from-[#0D9488] to-[#115E59]",
    "summary": "Metropolün sıkışmışlığından göğe, sonsuzluğa ve sükunete kaçışın şiiri. Modern çağ insanının en saf sığınak çağrısı.",
    "keyThemes": [
      "Göğe Bakmak",
      "Kaçış ve Arınma",
      "Kentsel Bunalım",
      "Dinginlik"
    ],
    "historicalContext": "Hızlı kentleşmenin getirdiği mekanik yabancılaşmaya karşı doğan şiirsel isyan.",
    "passages": [
      {
        "id": "tu_1",
        "difficulty": "easy",
        "quote": "İkimiz birden sevinebiliriz göğe bakalım."
      },
      {
        "id": "tu_2",
        "difficulty": "medium",
        "quote": "Senin bu ellerinde ne var bilmiyorum göğe bakalım; tuttukça güçleniyorum kalabalık oluyorum."
      },
      {
        "id": "tu_3",
        "difficulty": "hard",
        "quote": "Bütün iyi kitapların sonunda, bütün gündüzlerin, bütün gecelerin sonunda meltemi senden esen bir deniz olmalı."
      }
    ]
  },

  {
    "id": "hasretinden-prangalar-eskittim",
    "title": "Hasretinden Prangalar Eskittim",
    "originalTitle": "Hasretinden Prangalar Eskittim",
    "author": "Ahmed Arif",
    "authorBio": "Doğu Anadolu'nun dağlarını, yiğitliğini, hüznünü ve eşsiz hasretini Türkçenin en vurucu ritmiyle yoğuran şair.",
    "authorBirthDeath": "1927 - 1991",
    "year": "1968",
    "genre": "poetry",
    "coverBg": "from-[#B45309] to-[#78350F]",
    "summary": "Tek bir şiir kitabıyla edebiyat tarihimizde milyonların ezberine kazınmış, hasretin ve direncin destansı sesi.",
    "keyThemes": [
      "Hasret",
      "Direniş",
      "Dağlar ve Özlem",
      "Kardeşlik"
    ],
    "historicalContext": "Halk edebiyatı geleneğini serbest toplumcu şiirle birleştiren çığır açıcı eser.",
    "passages": [
      {
        "id": "aa_1",
        "difficulty": "easy",
        "quote": "Terketmedi sevdan beni, aç kaldım susuz kaldım."
      },
      {
        "id": "aa_2",
        "difficulty": "medium",
        "quote": "Vurulsam kaybolsam derim; çırılçıplak, bir kavgada, erkence."
      },
      {
        "id": "aa_3",
        "difficulty": "hard",
        "quote": "Haberin var mı taş duvar? Demir kapı, kör pencere, yastığım, ranzam, zincirim."
      }
    ]
  },

  {
    "id": "kayip-zamanin-izinde",
    "title": "Kayıp Zamanın İzinde",
    "originalTitle": "À la recherche du temps perdu",
    "author": "Marcel Proust",
    "authorBio": "20. yüzyıl romanını kökten değiştiren Fransız yazar. Bellek, zaman ve bilinç akışının doruk noktasıdır.",
    "authorBirthDeath": "1871 - 1922",
    "year": "1913",
    "genre": "modernist",
    "coverBg": "from-[#475569] to-[#1E293B]",
    "summary": "Bir madlen bisküvisinin çaya batırılmasıyla başlayan ve insan hafızasının derinliklerine inen yedi ciltlik dev anıt.",
    "keyThemes": [
      "İstemsiz Hafıza",
      "Zamanın Geri Kazanılması",
      "Kayıp ve Sanat",
      "Aristokrasi"
    ],
    "historicalContext": "Modern psikolojinin ve zaman algısının edebi dildeki en büyük devrimi.",
    "passages": [
      {
        "id": "pr_1",
        "difficulty": "easy",
        "quote": "Gerçek keşif yolculuğu yeni manzaralar aramak değil, yeni gözlere sahip olmaktır."
      },
      {
        "id": "pr_2",
        "difficulty": "medium",
        "quote": "Bizi mutlu eden insanlara minnettar olalım; onlar ruhlarımızı çiçeklendiren sevimli bahçıvanlardır."
      },
      {
        "id": "pr_3",
        "difficulty": "hard",
        "quote": "Geçmiş, aklın erişemeyeceği bir yerde, herhangi bir nesnenin içine gizlenmiş olarak bekler."
      },
      {
        "id": "pr_4",
        "difficulty": "legendary",
        "quote": "Yıllar geçip de eski günlerden geriye hiçbir şey kalmadığında, yalnızca koku ve tat, daha kırılgan ama daha dirençli olarak hatırlama anıtını tek başlarına taşırlar."
      }
    ]
  },

  {
    "id": "ulysses",
    "title": "Ulysses",
    "originalTitle": "Ulysses",
    "author": "James Joyce",
    "authorBio": "İrlandalı modernist edebiyat dehası. Dilin sınırlarını zorlayan bilinçakışı tekniğinin kurucusudur.",
    "authorBirthDeath": "1882 - 1941",
    "year": "1922",
    "genre": "modernist",
    "coverBg": "from-[#047857] to-[#064E3B]",
    "summary": "Leopold Bloom'un Dublin sokaklarındaki 16 Haziran 1904 gününü Homeros'un Odysseia destanına paralel anlatan roman devrimi.",
    "keyThemes": [
      "Bilinçakışı",
      "Gündelik Destan",
      "Yabancılaşma",
      "Kelimelerin Müziği"
    ],
    "historicalContext": "Modernist romanın biçimsel zirvesi; sansür davalarına konu olmuş devrimci anlatı.",
    "passages": [
      {
        "id": "joy_1",
        "difficulty": "easy",
        "quote": "Tarih, uyanmaya çalıştığım bir kabustur."
      },
      {
        "id": "joy_2",
        "difficulty": "medium",
        "quote": "Hatalar keşif kapılarıdır; insan yanılmadan gerçeğe varamaz."
      },
      {
        "id": "joy_3",
        "difficulty": "hard",
        "quote": "Yaşamak, hata yapmak, düşmek, zafer kazanmak ve hayatı yeniden yaratmak için buradayız."
      }
    ]
  },

  {
    "id": "ses-ve-ofke",
    "title": "Ses ve Öfke",
    "originalTitle": "The Sound and the Fury",
    "author": "William Faulkner",
    "authorBio": "Amerikan edebiyatının Nobel ödüllü devi. Güney bölgesinin çöküşünü çoklu bilinç akışı teknikleriyle resmetmiştir.",
    "authorBirthDeath": "1897 - 1962",
    "year": "1929",
    "genre": "modernist",
    "coverBg": "from-[#7C2D12] to-[#431407]",
    "summary": "Compson ailesinin çöküşünü dört farklı karakterin zihninden ve parçalanmış zaman katmanlarından aktaran edebi meydan okuma.",
    "keyThemes": [
      "Zamanın Tutsaklığı",
      "Ailenin Çöküşü",
      "Bellek Parçalanması",
      "Güney Trajedisi"
    ],
    "historicalContext": "Shakespeare'in Macbeth tiradından adını alan modern Amerikan başyapıtı.",
    "passages": [
      {
        "id": "faulk_1",
        "difficulty": "easy",
        "quote": "Zaman ancak saatler durduğunda gerçekten yaşamaya başlar."
      },
      {
        "id": "faulk_2",
        "difficulty": "medium",
        "quote": "Sana saati zamanı hatırlayasın diye değil, onu bazen unutasın diye veriyorum."
      },
      {
        "id": "faulk_3",
        "difficulty": "hard",
        "quote": "Hayat bir delinin anlattığı, ses ve öfkeyle dolu, hiçbir anlamı olmayan bir masaldır."
      }
    ]
  },

  {
    "id": "buyulu-dag",
    "title": "Büyülü Dağ",
    "originalTitle": "Der Zauberberg",
    "author": "Thomas Mann",
    "authorBio": "Alman edebiyatının Nobel ödüllü anıt yazarı. Avrupa kültürünün krizlerini felsefi derinlikle irdelemiştir.",
    "authorBirthDeath": "1875 - 1955",
    "year": "1924",
    "genre": "modernist",
    "coverBg": "from-[#1F2937] to-[#111827]",
    "summary": "Hans Castorp'un İsviçre Alpleri'ndeki bir sanatoryumda geçirdiği yedi yıl boyunca zaman, ölüm, hastalık ve insanlık üzerine felsefi yolculuğu.",
    "keyThemes": [
      "Zaman Algısı",
      "Hastalık ve Deha",
      "Burjuva Çöküşü",
      "Avrupa Bunalımı"
    ],
    "historicalContext": "Birinci Dünya Savaşı öncesi hasta ve çökmekte olan Avrupa ruhunun alegorisi.",
    "passages": [
      {
        "id": "tm_1",
        "difficulty": "easy",
        "quote": "Zaman bir gizemdir; elle tutulamaz ama her şeyi dönüştürür."
      },
      {
        "id": "tm_2",
        "difficulty": "medium",
        "quote": "İnsan iyilik ve sevgi adına ölümün düşüncelerine hükmetmesine izin vermemelidir."
      },
      {
        "id": "tm_3",
        "difficulty": "hard",
        "quote": "Düzen ve sadeleşme, insanın kaosa karşı geliştirdiği en yüce zihinsel savunmadır."
      }
    ]
  },

  {
    "id": "denemeler",
    "title": "Denemeler",
    "originalTitle": "Essais",
    "author": "Michel de Montaigne",
    "authorBio": "Rönesans filozofu ve deneme türünün kurucusu. \"Ben ne biliyorum?\" (Que sais-je?) sorusunu insanlığa armağan etmiştir.",
    "authorBirthDeath": "1533 - 1592",
    "year": "1580",
    "genre": "essay",
    "coverBg": "from-[#78350F] to-[#451A03]",
    "summary": "Montaigne'in şatosunun kulesine çekilerek insan doğasını, korkularını, dostluğu ve ölümü kendi benliği üzerinden sorguladığı ölümsüz tefekkür.",
    "keyThemes": [
      "Kendini Tanıma",
      "Şüphecilik",
      "Ölümle Barışmak",
      "Hoşgörü"
    ],
    "historicalContext": "Fransa Din Savaşları sırasında insan aklını ve barışı savunan hümanist başyapıt.",
    "passages": [
      {
        "id": "mon_1",
        "difficulty": "easy",
        "quote": "Dünyanın en yüksek tahtına da çıksanız, oturacağınız yer kendi kıçınızın üstüdür."
      },
      {
        "id": "mon_2",
        "difficulty": "medium",
        "quote": "Kendini tanımak bilgeliğin başlangıcıdır; başkalarını bilmek ise erdemdir."
      },
      {
        "id": "mon_3",
        "difficulty": "hard",
        "quote": "Felsefe yapmak ölmeyi öğrenmektir; çünkü ölümü düşünen insan kölelikten kurtulur."
      },
      {
        "id": "mon_4",
        "difficulty": "legendary",
        "quote": "Her insanda bütün insanlık durumunun bir örneği vardır; bu yüzden kendimi incelemekle bütün insanlığı inceliyorum."
      }
    ]
  },

  {
    "id": "curumenin-kitabi",
    "title": "Çürümenin Kitabı",
    "originalTitle": "Précis de décomposition",
    "author": "Emil Cioran",
    "authorBio": "Rumen asıllı Fransız filozof ve aforizma ustası. Varoluşsal karamsarlığın ve lirik nihilizmin zirvesidir.",
    "authorBirthDeath": "1911 - 1995",
    "year": "1949",
    "genre": "essay",
    "coverBg": "from-[#334155] to-[#0F172A]",
    "summary": "İnançların, fanatizmlerin ve insanın yaşama yanılsamasının acımasız bir zihinsel neşterle teşrih edildiği felsefi tiradlar.",
    "keyThemes": [
      "Varoluş Sancısı",
      "Uykusuzluk",
      "Yanılsamaların Çöküşü",
      "Yalnızlık"
    ],
    "historicalContext": "İkinci Dünya Savaşı sonrasında Paris'in tavan aralarında yazılmış tavizsiz aforizmalar.",
    "passages": [
      {
        "id": "cio_1",
        "difficulty": "easy",
        "quote": "Yalnızca şüphe duyanlar gerçekten uyanıktır."
      },
      {
        "id": "cio_2",
        "difficulty": "medium",
        "quote": "Bir fikre körü körüne bağlanan insan, cellat olmaya en yakın insandır."
      },
      {
        "id": "cio_3",
        "difficulty": "hard",
        "quote": "Müzik olmasaydı, varoluşun ağırlığı altında insan aklı un ufak olurdu."
      },
      {
        "id": "cio_4",
        "difficulty": "legendary",
        "quote": "Doğmuş olmak, insanın başına gelebilecek en büyük kaza ve aynı zamanda bütün felaketlerin başlangıcıdır."
      }
    ]
  },

  {
    "id": "bu-ulke",
    "title": "Bu Ülke",
    "originalTitle": "Bu Ülke",
    "author": "Cemil Meriç",
    "authorBio": "Türk düşünce hayatının en parlak münzevisi, denemeci, mütercim ve fikir adamı.",
    "authorBirthDeath": "1916 - 1987",
    "year": "1974",
    "genre": "essay",
    "coverBg": "from-[#854D0E] to-[#422006]",
    "summary": "Doğu ve Batı medeniyetleri arasındaki köprüde, aydın sorumluluğunu ve kütüphanenin kutsallığını savunan bir aydın çığlığı.",
    "keyThemes": [
      "Doğu-Batı Çatışması",
      "Aydın Sorumluluğu",
      "Kitap Sevgisi",
      "Düşünce Namusu"
    ],
    "historicalContext": "Gözlerini kaybettikten sonra talebelerine dikte ederek yazdırdığı muazzam fikir anıtı.",
    "passages": [
      {
        "id": "cm_1",
        "difficulty": "easy",
        "quote": "Kitap, istikbale yollanan mektuptur; pulu samimiyet, adresi insandır."
      },
      {
        "id": "cm_2",
        "difficulty": "medium",
        "quote": "Kelimeler kaybolunca düşünce donar; tefekkür ancak dille nefes alır."
      },
      {
        "id": "cm_3",
        "difficulty": "hard",
        "quote": "Düşünce şüpheyle başlar; şüphe etmeyen zihinler önyargıların kölesi olmaya mahkumdur."
      },
      {
        "id": "cm_4",
        "difficulty": "legendary",
        "quote": "Yığınlar sloganlarla düşünür; aydın ise kavramların namusunu korumakla mükelleftir."
      }
    ]
  },

  {
    "id": "savas-sanati",
    "title": "Savaş Sanatı",
    "originalTitle": "Sunzi Bingfa (孫子兵法)",
    "author": "Sun Tzu",
    "authorBio": "MÖ 5. yüzyılda yaşamış Çinli general, askeri stratejist ve filozof.",
    "authorBirthDeath": "MÖ 544 - MÖ 496",
    "year": "MÖ 500",
    "genre": "strategy",
    "coverBg": "from-[#991B1B] to-[#450A0A]",
    "summary": "Savaşmadan kazanmanın, hasmı tanıyarak zafer elde etmenin ve stratejik sabrın tüm dünyada rehber kabul edilen kadim el kitabı.",
    "keyThemes": [
      "Savaşmadan Kazanmak",
      "Kendini ve Düşmanı Tanımak",
      "Esneklik",
      "Sabır"
    ],
    "historicalContext": "İlkbahar ve Sonbahar döneminde yazılmış, askeri olduğu kadar yönetim felsefesinin de klasiği.",
    "passages": [
      {
        "id": "st_1",
        "difficulty": "easy",
        "quote": "En büyük zafer, savaşmadan kazanılan zaferdir."
      },
      {
        "id": "st_2",
        "difficulty": "medium",
        "quote": "Kendini ve düşmanını tanırsan, yüz savaşa girsen de tehlikeye düşmezsin."
      },
      {
        "id": "st_3",
        "difficulty": "hard",
        "quote": "Kusursuz stratejist su gibi olmalıdır; su nasıl kabın şeklini alırsa, akıl da şartlara öyle uyum sağlar."
      }
    ]
  },

  {
    "id": "prens",
    "title": "Prens",
    "originalTitle": "Il Principe",
    "author": "Niccolò Machiavelli",
    "authorBio": "Floransalı diplomat, tarihçi ve modern siyaset felsefesinin kurucusu.",
    "authorBirthDeath": "1469 - 1527",
    "year": "1532",
    "genre": "strategy",
    "coverBg": "from-[#581C87] to-[#3B0764]",
    "summary": "İktidarın nasıl kazanılacağı, nasıl korunacağı ve liderliğin pratik mekanizmaları üzerine tarihin en etkili ve tartışmalı başyapıtı.",
    "keyThemes": [
      "Reel Politika",
      "Güç Dengesi",
      "Cesaret ve Talih (Virtù & Fortuna)",
      "Liderlik"
    ],
    "historicalContext": "İtalyan şehir devletlerinin kriz ve işgal altında olduğu Rönesans İtalya'sında yazılmıştır.",
    "passages": [
      {
        "id": "mac_1",
        "difficulty": "easy",
        "quote": "Korkulan biri olmak, sevilmekten daha güvenlidir."
      },
      {
        "id": "mac_2",
        "difficulty": "medium",
        "quote": "Bir hükümdar hem aslan kadar güçlü hem de tilki kadar kurnaz olmalıdır."
      },
      {
        "id": "mac_3",
        "difficulty": "hard",
        "quote": "Talih bir kadına benzer; ona hükmetmek isteyen kişi cesur davranmalı ve cüretkar adımlar atmalıdır."
      }
    ]
  },

  {
    "id": "mukaddime",
    "title": "Mukaddime",
    "originalTitle": "Al-Muqaddimah (المقدمة)",
    "author": "İbn Haldun",
    "authorBio": "Tarih felsefesi, sosyoloji ve iktisadın öncüsü kabul edilen Endülüslü düşünür ve devlet adamı.",
    "authorBirthDeath": "1332 - 1406",
    "year": "1377",
    "genre": "strategy",
    "coverBg": "from-[#A16207] to-[#713F12]",
    "summary": "Devletlerin doğuşu, yükselişi, refaha gömülüşü ve çöküş döngülerini Asabiye kavramıyla açıklayan sosyolojik anıt.",
    "keyThemes": [
      "Asabiye (Sosyal Dayanışma)",
      "Coğrafya ve Kader",
      "Devletlerin Ömrü",
      "Uygarlık Döngüsü"
    ],
    "historicalContext": "Kuzey Afrika'da İbni Selame kalesinde inzivaya çekilerek kaleme aldığı tarih felsefesi.",
    "passages": [
      {
        "id": "ih_1",
        "difficulty": "easy",
        "quote": "Coğrafya kaderdir."
      },
      {
        "id": "ih_2",
        "difficulty": "medium",
        "quote": "Geçmiş geleceğe suyun suya benzediğinden daha çok benzer."
      },
      {
        "id": "ih_3",
        "difficulty": "hard",
        "quote": "Zor zamanlar güçlü insanları doğurur; güçlü insanlar refahı, refah ise çöküşü getirir."
      }
    ]
  },

  {
    "id": "hamlet",
    "title": "Hamlet",
    "originalTitle": "The Tragedy of Hamlet, Prince of Denmark",
    "author": "William Shakespeare",
    "authorBio": "İngiliz edebiyatının ve dünya tiyatrosunun gelmiş geçmiş en büyük oyun yazarı ve şairi.",
    "authorBirthDeath": "1564 - 1616",
    "year": "1601",
    "genre": "drama",
    "coverBg": "from-[#1E1B4B] to-[#0F172A]",
    "summary": "Danimarka prensi Hamlet'in babasının intikamı, ahlaki tereddütler, delilik ve varoluş üzerine yazdığı ölümsüz tragedya.",
    "keyThemes": [
      "Olmak ya da Olmamak",
      "İntikam ve Vicdan",
      "Hakikat ve Rol",
      "Ölüm"
    ],
    "historicalContext": "Rönesans tiyatrosunun zirvesi; modern bireyin iç hesaplaşmasının başlangıcı.",
    "passages": [
      {
        "id": "ham_1",
        "difficulty": "easy",
        "quote": "Olmak ya da olmamak, işte bütün mesele bu."
      },
      {
        "id": "ham_2",
        "difficulty": "medium",
        "quote": "İyi ya da kötü diye bir şey yoktur; düşünce onu öyle yapar."
      },
      {
        "id": "ham_3",
        "difficulty": "hard",
        "quote": "Gökyüzünde ve yeryüzünde senin felsefenin hayal bile edemeyeceği nice sırlar vardır Horatio."
      },
      {
        "id": "ham_4",
        "difficulty": "legendary",
        "quote": "Bizler rüyaların yapıldığı kumaştan yapılmışız; küçücük ömrümüz ise derin bir uykuyla noktalanır."
      }
    ]
  },

  {
    "id": "faust",
    "title": "Faust",
    "originalTitle": "Faust: Eine Tragödie",
    "author": "Johann Wolfgang von Goethe",
    "authorBio": "Alman edebiyatının evrensel dehası, şair, oyun yazarı, doğabilimci ve devlet adamı.",
    "authorBirthDeath": "1749 - 1832",
    "year": "1808",
    "genre": "drama",
    "coverBg": "from-[#831843] to-[#500724]",
    "summary": "Bütün bilimleri öğrenip yine de tatmin olamayan Doktor Faust'un Mefistofeles ile girdiği ruh ve tutku bahsi.",
    "keyThemes": [
      "Bilgi ve Arzu",
      "Şeytanla Anlaşma",
      "Sonsuz Arayış",
      "Kurtuluş"
    ],
    "historicalContext": "Goethe'nin 60 yıllık emeğinin ürünü olan felsefi ve kozmik başyapıt.",
    "passages": [
      {
        "id": "fst_1",
        "difficulty": "easy",
        "quote": "Dur ey zaman, ne kadar güzelsin!"
      },
      {
        "id": "fst_2",
        "difficulty": "medium",
        "quote": "İnsan çabaladığı sürece yanılır; fakat arayan insan asla bütünüyle kaybolmaz."
      },
      {
        "id": "fst_3",
        "difficulty": "hard",
        "quote": "Daima kötülüğü arzulayan fakat daima iyiliğe hizmet eden o kadim kudretin bir parçasıyım ben."
      }
    ]
  },

  {
    "id": "godotyu-beklerken",
    "title": "Godot'yu Beklerken",
    "originalTitle": "En attendant Godot",
    "author": "Samuel Beckett",
    "authorBio": "İrlandalı avangard yazar ve Nobel ödüllü tiyatro dehası. Absürd tiyatronun kurucusudur.",
    "authorBirthDeath": "1906 - 1989",
    "year": "1953",
    "genre": "drama",
    "coverBg": "from-[#374151] to-[#1F2937]",
    "summary": "Vladimir ve Estragon'un ıssız bir yolda bir ağacın dibinde hiçbir zaman gelmeyecek olan Godot'yu bekleyişleri.",
    "keyThemes": [
      "Bekleyiş",
      "Absürd Varoluş",
      "Zamanın Boşluğu",
      "Dostluk"
    ],
    "historicalContext": "İkinci Dünya Savaşı sonrası anlamını yitiren dünyada yazılmış en etkili tiyatro eseri.",
    "passages": [
      {
        "id": "bck_1",
        "difficulty": "easy",
        "quote": "Gidelim. — Gidemeyiz. — Neden? — Godot'yu bekliyoruz."
      },
      {
        "id": "bck_2",
        "difficulty": "medium",
        "quote": "Her gün aynı güneş doğuyor ama bizler her gün biraz daha eksiliyoruz."
      },
      {
        "id": "bck_3",
        "difficulty": "hard",
        "quote": "Alışkanlık, insanın en büyük susturucusudur; bizi uyuşturur ve acıyı hissetmez hale getirir."
      }
    ]
  },

  {
    "id": "mesnevi",
    "title": "Mesnevi",
    "originalTitle": "Masnavi-ye Ma'navi (مثنوی معنوی)",
    "author": "Mevlana Celaleddin Rumi",
    "authorBio": "13. yüzyılda yaşamış büyük İslam mütefekkiri, sufi ve şair. Evrensel sevgi ve hoşgörünün timsalidir.",
    "authorBirthDeath": "1207 - 1273",
    "year": "1258",
    "genre": "mysticism",
    "coverBg": "from-[#D97706] to-[#78350F]",
    "summary": "İnsan ruhunun ayrılık neyinden vuslat okyanusuna uzanan hikayeler, semboller ve hikmetlerle dolu manevi kılavuz.",
    "keyThemes": [
      "İlahi Aşk",
      "Birlik (Vahdet)",
      "Nefis Terbiyesi",
      "Hoşgörü"
    ],
    "historicalContext": "Moğol istilası altındaki Anadolu'da insanlara umut ve barış aşılayan manevi pınar.",
    "passages": [
      {
        "id": "rumi_1",
        "difficulty": "easy",
        "quote": "Yara, ışığın içeri girdiği yerdir."
      },
      {
        "id": "rumi_2",
        "difficulty": "easy",
        "quote": "Dün akıllıydım, dünyayı değiştirmek istedim. Bugün bilgeyim, kendimi değiştiriyorum."
      },
      {
        "id": "rumi_3",
        "difficulty": "medium",
        "quote": "Aşk öyle bir ateştir ki tutuştumu sevgiliden başka her şeyi yakıp kül eder."
      },
      {
        "id": "rumi_4",
        "difficulty": "hard",
        "quote": "Sus artık ey dil! Sırrı ifşa etme; zira söz inci olsa da sükut sedefidir."
      }
    ]
  },

  {
    "id": "kirk-kural",
    "title": "Kırk Kural (Aşk)",
    "originalTitle": "Makalat & Kırk Kural",
    "author": "Şems-i Tebrizi",
    "authorBio": "Mevlana'nın manevi yoldaşı, derviş ve hakikat aşığı Tebrizli sufi mürşit.",
    "authorBirthDeath": "1185 - 1248",
    "year": "1244",
    "genre": "mysticism",
    "coverBg": "from-[#DC2626] to-[#7F1D1D]",
    "summary": "Aşkın, arınmanın, hakikati aramanın ve insanın kalbindeki putları yıkmasının kırk kuralı.",
    "keyThemes": [
      "Hakikat Aşkı",
      "Aynalık",
      "İçsel Dönüşüm",
      "Cesaret"
    ],
    "historicalContext": "Konya'da Mevlana ile karşılaşarak onu bir alimden bir aşk bülbülüne dönüştüren kutlu buluşma.",
    "passages": [
      {
        "id": "sems_1",
        "difficulty": "easy",
        "quote": "Hakk'ı nerede ararsan ara, O ancak temiz bir kalpte bulunur."
      },
      {
        "id": "sems_2",
        "difficulty": "medium",
        "quote": "Düzenim bozulur, hayatım altüst olur diye endişe etme. Nereden biliyorsun hayatın altının üstünden daha iyi olmadığını?"
      },
      {
        "id": "sems_3",
        "difficulty": "hard",
        "quote": "Kainattaki her zerrede O'nun izi vardır; fakat O'nu arayan insan önce kendi içindeki engelleri kaldırmalıdır."
      }
    ]
  },

  {
    "id": "yunus-emre-divani",
    "title": "Yunus Emre Divanı",
    "originalTitle": "Risaletü'n-Nushiyye & Divan",
    "author": "Yunus Emre",
    "authorBio": "Türkçenin en arı, samimi ve derin tasavvuf şairi. Gönül insanı ve sevgi elçisidir.",
    "authorBirthDeath": "1238 - 1328",
    "year": "1320",
    "genre": "mysticism",
    "coverBg": "from-[#059669] to-[#064E3B]",
    "summary": "Yaratılanı yaratandan ötürü seven, sade Türkçeyle insanlığın en derin ilahi sırlarını terennüm eden şiir pınarı.",
    "keyThemes": [
      "Gönül Almak",
      "Ölüm ve Beka",
      "Vahdet",
      "Yalın Türkçe"
    ],
    "historicalContext": "Anadolu Türkçesinin bir edebiyat ve tefekkür dili olarak mühürlendiği dönem.",
    "passages": [
      {
        "id": "yun_1",
        "difficulty": "easy",
        "quote": "Sevelim, sevilelim; dünya kimseye kalmaz."
      },
      {
        "id": "yun_2",
        "difficulty": "medium",
        "quote": "İlim ilim bilmektir, ilim kendin bilmektir; sen kendini bilmezsin ya nice okumaktır."
      },
      {
        "id": "yun_3",
        "difficulty": "hard",
        "quote": "Beni bende demen ben de değilem; bir ben vardır bende benden içeri."
      }
    ]
  },

  {
    "id": "tao-te-ching",
    "title": "Tao Te Ching",
    "originalTitle": "Daodejing (道德經)",
    "author": "Lao Tzu",
    "authorBio": "Antik Çin filozofu ve Taoizm'in kurucusu kabul edilen kadim bilge.",
    "authorBirthDeath": "MÖ 6. yüzyıl",
    "year": "MÖ 500",
    "genre": "mysticism",
    "coverBg": "from-[#1E293B] to-[#0F172A]",
    "summary": "Yol (Tao) ve onun erdemi (Te) üzerine yazılmış, çabasız eylemi (Wu Wei) ve sadeliği öğütleyen Doğu klasiği.",
    "keyThemes": [
      "Wu Wei (Eylemsizlikte Eylem)",
      "Su Gibi Olmak",
      "Yol",
      "Sadeliğin Gücü"
    ],
    "historicalContext": "Çin düşüncesini Budizm ve Konfüçyüsçülük ile birlikte şekillendiren temel metin.",
    "passages": [
      {
        "id": "lao_1",
        "difficulty": "easy",
        "quote": "Bin millik bir yolculuk tek bir adımla başlar."
      },
      {
        "id": "lao_2",
        "difficulty": "medium",
        "quote": "Bilen konuşmaz, konuşan bilmez; sessizlik bilgeliğin anahtarıdır."
      },
      {
        "id": "lao_3",
        "difficulty": "hard",
        "quote": "Dünyada sudan daha yumuşak ve esnek hiçbir şey yoktur; fakat kayaları aşındırmakta ondan güçlüsü bulunmaz."
      }
    ]
  },

  {
    "id": "ermis",
    "title": "Ermiş",
    "originalTitle": "The Prophet",
    "author": "Halil Cibran",
    "authorBio": "Lübnan asıllı Amerikalı şair, ressam ve filozof. Doğu mistisizmini Batı hümanizmiyle harmanlamıştır.",
    "authorBirthDeath": "1883 - 1931",
    "year": "1923",
    "genre": "mysticism",
    "coverBg": "from-[#B45309] to-[#78350F]",
    "summary": "El-Mustafa'nın memleketine dönmeden önce Orphalese halkına aşk, evlilik, çocuklar, acı ve ölüm üzerine verdiği bilgelik dersleri.",
    "keyThemes": [
      "Özgür Aşk",
      "Ölüm ve Doğum",
      "Çalışmanın Onuru",
      "Ruhsal Bağımsızlık"
    ],
    "historicalContext": "Dünya dillerine en çok çevrilen ve her çağda milyonları etkileyen manevi başyapıt.",
    "passages": [
      {
        "id": "cib_1",
        "difficulty": "easy",
        "quote": "Aşk birbirine bakmak değil, birlikte aynı yöne bakmaktır."
      },
      {
        "id": "cib_2",
        "difficulty": "medium",
        "quote": "Çocuklarınız sizin çocuklarınız değildir; onlar hayatın kendine olan özleminin oğulları ve kızlarıdır."
      },
      {
        "id": "cib_3",
        "difficulty": "hard",
        "quote": "Birlikte durun ama çok yakın değil; tapınağın sütunları da birbirinden ayrı durur."
      }
    ]
  },

  {
    "id": "muhurlenmis-zaman",
    "title": "Mühürlenmiş Zaman",
    "originalTitle": "Zapechatlennoe Vremya",
    "author": "Andrey Tarkovski",
    "authorBio": "Rus sinema yönetmeni ve sanat felsefecisi. Sinemayı bir şiir ve ruhani arınma biçimi haline getirmiştir.",
    "authorBirthDeath": "1932 - 1986",
    "year": "1986",
    "genre": "cinema_art",
    "coverBg": "from-[#0F766E] to-[#134E4A]",
    "summary": "Tarkovski'nin sinema estetiği, zamanın akışı, ritim ve sanatçının manevi sorumluluğu üzerine yazdığı ölümsüz poetika.",
    "keyThemes": [
      "Zamanı Mühürlemek",
      "Ruhani Sanat",
      "Şiirsel Sinema",
      "Kurban ve Sorumluluk"
    ],
    "historicalContext": "Sovyet sansürüne karşı sanatın mutlak özgürlüğünü savunan yönetmenin vasiyeti.",
    "passages": [
      {
        "id": "tar_1",
        "difficulty": "easy",
        "quote": "Sanat, insanın mutlak hakikate ve mükemmelliğe duyduğu özlemdir."
      },
      {
        "id": "tar_2",
        "difficulty": "medium",
        "quote": "Yönetmen, zamanın akışını yakalayan ve onu bir heykel gibi yontan kişidir."
      },
      {
        "id": "tar_3",
        "difficulty": "hard",
        "quote": "Bir insanın kendini bütünüyle bir amaca adayabilmesi için ruhunda manevi bir boşluk olmalıdır."
      }
    ]
  },

  {
    "id": "gorme-bicimleri",
    "title": "Görme Biçimleri",
    "originalTitle": "Ways of Seeing",
    "author": "John Berger",
    "authorBio": "İngiliz sanat eleştirmeni, romancı, ressam ve düşünür. Görsel kültürü çözümleme biçimimizi değiştirmiştir.",
    "authorBirthDeath": "1926 - 2017",
    "year": "1972",
    "genre": "cinema_art",
    "coverBg": "from-[#4338CA] to-[#312E81]",
    "summary": "Sanat eserlerine nasıl baktığımızı, bakışımızın ideoloji, cinsiyet ve sermaye tarafından nasıl şekillendirildiğini anlatan kült eser.",
    "keyThemes": [
      "Bakışın İdeolojisi",
      "İmge ve Mülkiyet",
      "Reklamın Yanılsaması",
      "Görsel Bellek"
    ],
    "historicalContext": "BBC belgeselinden kitaba dönüştürülen, 20. yüzyılın en etkili görsel kuram kitabı.",
    "passages": [
      {
        "id": "brg_1",
        "difficulty": "easy",
        "quote": "Görme, konuşmadan önce gelir; çocuk konuşmadan önce bakar ve tanır."
      },
      {
        "id": "brg_2",
        "difficulty": "medium",
        "quote": "Bir nesneyi nasıl gördüğümüz, neyi bildiğimize ve neye inandığımıza bağlıdır."
      },
      {
        "id": "brg_3",
        "difficulty": "hard",
        "quote": "Fotoğraf bir anı dondurur; ancak dondurulan an, çevresindeki bütün bağlamdan koparılmış bir tanıktır."
      }
    ]
  },

  {
    "id": "fotograf-uzerine",
    "title": "Fotoğraf Üzerine",
    "originalTitle": "On Photography",
    "author": "Susan Sontag",
    "authorBio": "Amerikalı denemeci, eleştirmen, romancı ve insan hakları savunucusu.",
    "authorBirthDeath": "1933 - 2004",
    "year": "1977",
    "genre": "cinema_art",
    "coverBg": "from-[#1E293B] to-[#0F172A]",
    "summary": "Fotoğrafın dünyayı tüketme, gerçekliği parçalama ve hatıraları mülk edinme gücü üzerine felsefi soruşturma.",
    "keyThemes": [
      "Fotoğraf ve Bellek",
      "Görsel Tüketim",
      "Gerçekliğin Aşınması",
      "Estetik"
    ],
    "historicalContext": "Modern medyanın görsel bombardımanını erken dönemde deşifre eden eleştirel kilometre taşı.",
    "passages": [
      {
        "id": "snt_1",
        "difficulty": "easy",
        "quote": "Fotoğraf çekmek, bir şeyin güzelliğine el koymaktır."
      },
      {
        "id": "snt_2",
        "difficulty": "medium",
        "quote": "Kamera dünyayı bir dizi minyatür parçaya böler ve onları mülkümüz gibi saklamamızı sağlar."
      },
      {
        "id": "snt_3",
        "difficulty": "hard",
        "quote": "Bir şeyi fotoğraflamak, onun ölümüne ve geçiciliğine ortak olmak demektir."
      }
    ]
  },

  {
    "id": "yuzuklerin-efendisi",
    "title": "Yüzüklerin Efendisi",
    "originalTitle": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "authorBio": "İngiliz filolog, Oxford profesörü ve modern epik fantezi edebiyatının babası.",
    "authorBirthDeath": "1892 - 1973",
    "year": "1954",
    "genre": "epic_fantasy",
    "coverBg": "from-[#15803D] to-[#14532D]",
    "summary": "Orta Dünya'nın kaderini belirleyecek Tek Yüzük'ü yok etmek için yola çıkan küçük bir hobbitin ve Kardeşlik'in destanı.",
    "keyThemes": [
      "Gücün Yozlaştırıcılığı",
      "Küçüklerin Cesareti",
      "Dostluk",
      "Umutsuzlukta Umut"
    ],
    "historicalContext": "İki dünya savaşının gölgesinde inşa edilmiş, dilleri ve mitolojisi olan eşsiz edebi evren.",
    "passages": [
      {
        "id": "lotr_1",
        "difficulty": "easy",
        "quote": "Her parıldayan altın değildir; her gezgin de yolunu kaybetmemiştir."
      },
      {
        "id": "lotr_2",
        "difficulty": "medium",
        "quote": "Dünyada iyi bir şeyler var Frodo ve onlar için savaşmaya değer."
      },
      {
        "id": "lotr_3",
        "difficulty": "hard",
        "quote": "Yapmamız gereken tek şey, bize verilen zamanı en doğru şekilde değerlendirmektir."
      },
      {
        "id": "lotr_4",
        "difficulty": "legendary",
        "quote": "Karanlık ne kadar koyu olursa olsun şafak mutlaka söker; gölgeler sadece geçici bir perdedir."
      }
    ]
  },

  {
    "id": "dune",
    "title": "Dune",
    "originalTitle": "Dune",
    "author": "Frank Herbert",
    "authorBio": "Amerikalı bilimkurgu ve felsefe yazarı. Ekoloji, din ve siyaseti harmanlayan bilimkurgu şaheserinin yaratıcısıdır.",
    "authorBirthDeath": "1920 - 1986",
    "year": "1965",
    "genre": "epic_fantasy",
    "coverBg": "from-[#CA8A04] to-[#713F12]",
    "summary": "Çöl gezegeni Arrakis'te baharat uğruna verilen imparatorluk savaşları ve Paul Atreides'in mesiyanik yükselişi.",
    "keyThemes": [
      "Korkuyu Yenmek",
      "Ekoloji ve Çöl",
      "Mesiyanik Tehlike",
      "İktidar"
    ],
    "historicalContext": "Bilimkurguyu felsefe, din ve çevre bilinciyle buluşturan tüm zamanların en çok satan serisi.",
    "passages": [
      {
        "id": "dn_1",
        "difficulty": "easy",
        "quote": "Korku aklın katilidir; korku toptan yok oluşu getiren küçük ölümdür."
      },
      {
        "id": "dn_2",
        "difficulty": "medium",
        "quote": "Korkumla yüzleşeceğim; onun üzerimden ve içimden geçmesine izin vereceğim."
      },
      {
        "id": "dn_3",
        "difficulty": "hard",
        "quote": "Korku geçip gittiğinde geriye hiçbir şey kalmayacak, yalnızca ben kalacağım."
      }
    ]
  },

  {
    "id": "yerdeniz-buyucusu",
    "title": "Yerdeniz Büyücüsü",
    "originalTitle": "A Wizard of Earthsea",
    "author": "Ursula K. Le Guin",
    "authorBio": "Amerikalı edebiyat dehası. Fantastik ve bilimkurgu türünü antropoloji, taoizm ve anarşist felsefeyle taçlandırmıştır.",
    "authorBirthDeath": "1929 - 2018",
    "year": "1968",
    "genre": "epic_fantasy",
    "coverBg": "from-[#0369A1] to-[#0C4A6E]",
    "summary": "Genç büyücü Ged'in kibri yüzünden serbest bıraktığı gölgeyle yüzleşmek için çıktığı ada denizleri yolculuğu.",
    "keyThemes": [
      "Denge (Ekolojik ve Ruhsal)",
      "Gölgeyle Yüzleşmek",
      "Kelimelerin Gücü",
      "Büyüme Sancısı"
    ],
    "historicalContext": "Savaş yerine içsel dengeyi ve karanlığı kabullenmeyi öğütleyen felsefi fantezi klasiği.",
    "passages": [
      {
        "id": "leg_1",
        "difficulty": "easy",
        "quote": "Sözü söylemek için sessizlik gerekir; ışığı görmek için karanlık."
      },
      {
        "id": "leg_2",
        "difficulty": "medium",
        "quote": "Bir mum yakmak bir gölge yaratmaktır; denge her şeyin özüdür."
      },
      {
        "id": "leg_3",
        "difficulty": "hard",
        "quote": "Kendi gölgesinden kaçan insan asla huzur bulamaz; onu ancak adıyla çağırıp kabullendiğinde özgürleşir."
      }
    ]
  },

  {
    "id": "milenaya-mektuplar",
    "title": "Milena'ya Mektuplar",
    "originalTitle": "Briefe an Milena",
    "author": "Franz Kafka",
    "authorBio": "20. yüzyılın en etkili ve derin varoluşçu yazarı. Modern insanın bürokrasi ve suçluluk karşısındaki çaresizliğini resmetmiştir.",
    "authorBirthDeath": "1883 - 1924",
    "year": "1952",
    "genre": "letters",
    "coverBg": "from-[#713F12] to-[#451A03]",
    "summary": "Kafka'nın Çek gazeteci ve çevirmen Milena Jesenská'ya yazdığı, aşkın, imkansızlığın ve içsel parçalanmanın en çıplak mektupları.",
    "keyThemes": [
      "İmkansız Aşk",
      "Korku ve Şefkat",
      "Yazının Gücü",
      "Ruhsal Çıplaklık"
    ],
    "historicalContext": "Veremle boğuşan Kafka'nın sanatoryum ve Prag günlerinden dökülen edebi itiraflar.",
    "passages": [
      {
        "id": "mln_1",
        "difficulty": "easy",
        "quote": "Seni seviyorum çünkü sen bana kendimi unutturuyorsun."
      },
      {
        "id": "mln_2",
        "difficulty": "medium",
        "quote": "Uykusuz geçen gecelerde zihnim senin adınla atan bir kalbe dönüşüyor."
      },
      {
        "id": "mln_3",
        "difficulty": "hard",
        "quote": "Bana yazdığın her mektup bir kurtuluş olduğu kadar, içimdeki o derin yarayı daha da büyütüyor."
      },
      {
        "id": "mln_4",
        "difficulty": "legendary",
        "quote": "Yanımda yürüyordun Milena, düşünsene, yanımdaydın ve ben dünyadaki bütün korkularımı unutmuştum."
      }
    ]
  },

  {
    "id": "kendine-ait-bir-oda",
    "title": "Kendine Ait Bir Oda",
    "originalTitle": "A Room of One's Own",
    "author": "Virginia Woolf",
    "authorBio": "İngiliz modernist romancı, denemeci ve feminist kuramın öncüsü. Bilinçakışı tekniğinin ustasıdır.",
    "authorBirthDeath": "1882 - 1941",
    "year": "1929",
    "genre": "letters",
    "coverBg": "from-[#6B21A8] to-[#3B0764]",
    "summary": "Bir kadının özgürce yazabilmesi ve düşünebilmesi için paraya ve kendine ait kilitli bir odaya ihtiyacı olduğunu savunan manifestodur.",
    "keyThemes": [
      "Kadın Özgürlüğü",
      "Yaratıcı Bağımsızlık",
      "Maddi Şartlar",
      "Edebi Bellek"
    ],
    "historicalContext": "Cambridge Üniversitesi'nde kadın öğrencilere verilen konferanslardan doğan tarihi metin.",
    "passages": [
      {
        "id": "woolf_1",
        "difficulty": "easy",
        "quote": "Bir kadın yazacaksa parası ve kendine ait bir odası olmalıdır."
      },
      {
        "id": "woolf_2",
        "difficulty": "medium",
        "quote": "Kilit vurun kütüphanelerinize isterseniz; ama zihnimin özgürlüğüne vurabileceğiniz hiçbir kilit yoktur."
      },
      {
        "id": "woolf_3",
        "difficulty": "hard",
        "quote": "Kendi düşüncelerinin efendisi olamayan bir insan, başkalarının kalıplarında yaşamaya mahkumdur."
      }
    ]
  },

  {
    "id": "genc-bir-kizin-gunlugu",
    "title": "Genç Bir Kızın Günlüğü",
    "originalTitle": "Het Achterhuis (The Diary of a Young Girl)",
    "author": "Anne Frank",
    "authorBio": "Nazi işgali altındaki Amsterdam'da gizli çatı katında saklanan ve günlüğüyle insanlığın vicdanı olan genç yazar.",
    "authorBirthDeath": "1929 - 1945",
    "year": "1947",
    "genre": "letters",
    "coverBg": "from-[#BE123C] to-[#881337]",
    "summary": "İki yıl boyunca bir çatı katında saklanan Anne Frank'ın korkularını, umutlarını ve insanlığa olan inancını anlattığı günlükler.",
    "keyThemes": [
      "İnsan İyiliği",
      "Umut",
      "Karanlıkta Yaşamak",
      "Büyüme"
    ],
    "historicalContext": "Holokost trajedisinin bireysel tanıklığı ve insan ruhunun karanlığa meydan okuyuşu.",
    "passages": [
      {
        "id": "anne_1",
        "difficulty": "easy",
        "quote": "Her şeye rağmen insanların kalplerinde hala iyi olduklarına inanıyorum."
      },
      {
        "id": "anne_2",
        "difficulty": "medium",
        "quote": "Kağıt insanlardan daha sabırlıdır; o her derdi sessizce dinler."
      },
      {
        "id": "anne_3",
        "difficulty": "hard",
        "quote": "Gök yüzüne baktığımda bir gün bu zulmün sona ereceğini ve dünyaya barışın geri geleceğini hissediyorum."
      }
    ]
  },

  {
    "id": "walden",
    "title": "Walden / Ormanda Yaşam",
    "originalTitle": "Walden; or, Life in the Woods",
    "author": "Henry David Thoreau",
    "authorBio": "Amerikalı düşünür, doğabilimci, şair ve sivil itaatsizlik kuramcısı.",
    "authorBirthDeath": "1817 - 1862",
    "year": "1854",
    "genre": "nature",
    "coverBg": "from-[#15803D] to-[#14532D]",
    "summary": "Thoreau'nun Walden Gölü kıyısında kendi elleriyle yaptığı kulübede iki yıl geçirerek sadeleşmeyi ve doğayla bütünleşmeyi anlattığı anıt.",
    "keyThemes": [
      "Sade Yaşam",
      "Doğaya Dönüş",
      "Zihinsel Özgürlük",
      "Tüketim Karşıtlığı"
    ],
    "historicalContext": "Sanayi Devrimi'nin mekanikleştirdiği topluma karşı doğan transandantalist manifesto.",
    "passages": [
      {
        "id": "thr_1",
        "difficulty": "easy",
        "quote": "Sadeleşin, sadeleşin, sadeleşin!"
      },
      {
        "id": "thr_2",
        "difficulty": "medium",
        "quote": "Ormana gittim çünkü bilinçli yaşamak, hayatın can damarını emmek istiyordum."
      },
      {
        "id": "thr_3",
        "difficulty": "hard",
        "quote": "İnsanların çoğunluğu sessiz bir çaresizlik içinde yaşar; oysa doğa her gün yeniden doğuş sunar."
      },
      {
        "id": "thr_4",
        "difficulty": "legendary",
        "quote": "Ölüm anım geldiğinde aslında hiç yaşamamış olduğumu fark etmemek için hayatı bütün çıplaklığıyla kucaklamak istedim."
      }
    ]
  },

  {
    "id": "kendine-guven",
    "title": "Kendine Güven ve Doğa",
    "originalTitle": "Self-Reliance and Nature",
    "author": "Ralph Waldo Emerson",
    "authorBio": "Transandantalist felsefenin kurucusu, Amerikalı filozof, denemeci ve şair.",
    "authorBirthDeath": "1803 - 1882",
    "year": "1841",
    "genre": "nature",
    "coverBg": "from-[#65A30D] to-[#365314]",
    "summary": "Bireyin taklitten uzaklaşıp kendi sezgilerine güvenmesini ve doğanın ruhla olan kutsal uyumunu müjdeleyen denemeler.",
    "keyThemes": [
      "Kendine İtimat",
      "Doğanın Dili",
      "Taklit İntihardır",
      "Ruhsal Uyanış"
    ],
    "historicalContext": "Amerikan düşünce tarihinin bağımsızlık ve özgünlük manifestosu.",
    "passages": [
      {
        "id": "emr_1",
        "difficulty": "easy",
        "quote": "Taklit intihardır; kendi iç sesine güven."
      },
      {
        "id": "emr_2",
        "difficulty": "medium",
        "quote": "Doğanın içinde insan asla yalnız değildir; ormanlar ebedi bir gençliğin tapınağıdır."
      },
      {
        "id": "emr_3",
        "difficulty": "hard",
        "quote": "Büyük insan, kalabalıkların ortasında da yalnızlığın dinginliğini koruyabilen insandır."
      }
    ]
  },

  {
    "id": "vahsetin-cagrisi",
    "title": "Vahşetin Çağrısı",
    "originalTitle": "The Call of the Wild",
    "author": "Jack London",
    "authorBio": "Amerikalı serüvenci, gazeteci ve romancı. Doğanın sert yasalarını ve insanın hayatta kalma savaşını anlatmıştır.",
    "authorBirthDeath": "1876 - 1916",
    "year": "1903",
    "genre": "nature",
    "coverBg": "from-[#0284C7] to-[#075985]",
    "summary": "Evcil bir köpek olan Buck'ın Klondike altın arayışı sırasında vahşi doğaya kaçırılışı ve atalarının ilkel çağrısına teslim oluşu.",
    "keyThemes": [
      "Doğanın Çağrısı",
      "İlkel Güç",
      "Hayatta Kalma",
      "Uygarlık Yanılsaması"
    ],
    "historicalContext": "Alaska'nın dondurucu şartlarında insanın ve hayvanın saf doğaya dönüşü.",
    "passages": [
      {
        "id": "jck_1",
        "difficulty": "easy",
        "quote": "Doğanın yasası basittir: Ya hükmedeceksin ya boyun eğeceksin."
      },
      {
        "id": "jck_2",
        "difficulty": "medium",
        "quote": "Uygarlığın bütün bağları koptuğunda, damarlarda ataların vahşi şarkısı yankılanır."
      },
      {
        "id": "jck_3",
        "difficulty": "hard",
        "quote": "Hayatın en derin hazzı, bütün kasların ve hislerin kusursuz bir ahenkle çalıştığı o vahşi koşuda gizlidir."
      }
    ]
  },

  {
    "id": "moby-dick",
    "title": "Moby Dick",
    "originalTitle": "Moby-Dick; or, The Whale",
    "author": "Herman Melville",
    "authorBio": "Amerikan edebiyatının dev romancısı ve şairi. İnsanın doğayla ve kaderle olan metafizik savaşını işlemiştir.",
    "authorBirthDeath": "1819 - 1891",
    "year": "1851",
    "genre": "nature",
    "coverBg": "from-[#1E3A8A] to-[#172554]",
    "summary": "Kaptan Ahab'ın bacağını koparan devasa Beyaz Balina Moby Dick'in peşinde tüm tayfasını felakete sürükleyen takıntılı avı.",
    "keyThemes": [
      "İnsanın Doğaya Meydan Okuyuşu",
      "Kader ve Delilik",
      "Okyanus Sonsuzluğu",
      "Takıntı"
    ],
    "historicalContext": "Denizcilik macerasını İncilsel ve mitolojik bir derinlikle taçlandıran büyük roman.",
    "passages": [
      {
        "id": "mel_1",
        "difficulty": "easy",
        "quote": "Bana İsmail deyin."
      },
      {
        "id": "mel_2",
        "difficulty": "medium",
        "quote": "Deniz bir aynadır; ona bakan insan kendi ruhunun fırtınalarını görür."
      },
      {
        "id": "mel_3",
        "difficulty": "hard",
        "quote": "Akıl almaz bir hedefin peşinden koşan insan, sonunda kendi felaketinin mimarı olur."
      }
    ]
  },

  {
    "id": "ilyada-ve-odysseia",
    "title": "İlyada ve Odysseia",
    "originalTitle": "Ilias & Odysseia (Ἰλιάς & Ὀδύσσεια)",
    "author": "Homeros",
    "authorBio": "Antik Yunan edebiyatının ve Batı edebiyat geleneğinin kurucusu kabul edilen İyonyalı ozan.",
    "authorBirthDeath": "MÖ 8. yüzyıl",
    "year": "MÖ 750",
    "genre": "mythology",
    "coverBg": "from-[#CA8A04] to-[#713F12]",
    "summary": "Truva Savaşı'nın kanlı destanı İlyada ve zeki Odysseus'un İthake'ye evine dönmek için canavarlarla verdiği on yıllık macera Odysseia.",
    "keyThemes": [
      "Kahramanlık ve Fanilik",
      "Kader ve Tanrılar",
      "Eve Dönüş (Nostos)",
      "Zeka ve Kurnazlık"
    ],
    "historicalContext": "Batı medeniyetinin ilk yazılı destanları ve mitolojik hafızanın temeltaşı.",
    "passages": [
      {
        "id": "hom_1",
        "difficulty": "easy",
        "quote": "İnsan soyu yapraklara benzer; bir kısmı dökülür, bir kısmı baharda yeşerir."
      },
      {
        "id": "hom_2",
        "difficulty": "medium",
        "quote": "Tanrılar ölümlüleri kıskanır; çünkü insan fanidir ve fani olan her an paha biçilmezdir."
      },
      {
        "id": "hom_3",
        "difficulty": "hard",
        "quote": "Kaderin ağlarını kimse çözemez; cesur adam kaderinden kaçmayan, ona başı dik yürüyendir."
      }
    ]
  },

  {
    "id": "ilahi-komedya",
    "title": "İlahi Komedya: Cehennem",
    "originalTitle": "La Divina Commedia: Inferno",
    "author": "Dante Alighieri",
    "authorBio": "İtalyan edebiyatının babası, Rönesans'ın habercisi büyük şair ve düşünür.",
    "authorBirthDeath": "1265 - 1321",
    "year": "1320",
    "genre": "mythology",
    "coverBg": "from-[#7F1D1D] to-[#450A0A]",
    "summary": "Dante'nin şair Vergilius rehberliğinde Cehennemin dokuz katına inerek günahkarlarla ve kendi vicdanıyla yüzleştiği alegorik yolculuk.",
    "keyThemes": [
      "İlahi Adalet",
      "Arınma Arayışı",
      "Aşkın Yolu (Beatrice)",
      "Vicdan Azabı"
    ],
    "historicalContext": "Ortaçağ teolojisinin ve Rönesans hümanizminin en görkemli şiirsel sentezi.",
    "passages": [
      {
        "id": "dnt_1",
        "difficulty": "easy",
        "quote": "Buradan girenler, her türlü umudu geride bıraksın."
      },
      {
        "id": "dnt_2",
        "difficulty": "medium",
        "quote": "Hayat yolculuğumuzun ortasında kendimi karanlık bir ormanda buldum, çünkü doğru yol kaybolmuştu."
      },
      {
        "id": "dnt_3",
        "difficulty": "hard",
        "quote": "Cehennemin en karanlık köşeleri, ahlaki kriz zamanlarında tarafsız kalanlar için ayrılmıştır."
      },
      {
        "id": "dnt_4",
        "difficulty": "legendary",
        "quote": "Güneşi ve diğer yıldızları hareket ettiren tek güç aşktır."
      }
    ]
  },

  {
    "id": "ficciones-kurgular",
    "title": "Ficciones / Kurgular & Alef",
    "originalTitle": "Ficciones & El Aleph",
    "author": "Jorge Luis Borges",
    "authorBio": "Arjantinli edebiyat devi. Labirentler, aynalar, sonsuz kütüphaneler ve metafizik oyunların ustasıdır.",
    "authorBirthDeath": "1899 - 1986",
    "year": "1944",
    "genre": "mythology",
    "coverBg": "from-[#4C1D95] to-[#2E1065]",
    "summary": "Babil Kütüphanesi, Çatallanan Yollar Bahçesi ve evrendeki her noktanın aynı anda göründüğü Alef gibi felsefi labirentler.",
    "keyThemes": [
      "Sonsuz Kütüphane",
      "Zaman Labirentleri",
      "Aynalar ve Çiftler",
      "Evrensel Bellek"
    ],
    "historicalContext": "Büyülü gerçekçiliğin ve postmodern edebiyatın temel esin kaynağı.",
    "passages": [
      {
        "id": "brg_f1",
        "difficulty": "easy",
        "quote": "Cenneti her zaman bir tür kütüphane olarak hayal etmişimdir."
      },
      {
        "id": "brg_f2",
        "difficulty": "medium",
        "quote": "Ben bir gölgeyim, aynalarda kaybolan bir hatıranın yansımasıyım."
      },
      {
        "id": "brg_f3",
        "difficulty": "hard",
        "quote": "Zaman çatallanan sonsuz yollardan oluşur; her seçim yeni bir evreni doğurur."
      }
    ]
  },

  {
    "id": "gorunmez-kentler",
    "title": "Görünmez Kentler",
    "originalTitle": "Le città invisibili",
    "author": "Italo Calvino",
    "authorBio": "İtalyan edebiyatının 20. yüzyıldaki en yaratıcı masalcısı ve kurmaca ustası.",
    "authorBirthDeath": "1923 - 1985",
    "year": "1972",
    "genre": "mythology",
    "coverBg": "from-[#0D9488] to-[#134E4A]",
    "summary": "Marco Polo'nun Moğol İmparatoru Kubilay Han'a anlattığı arzu, hafıza, işaretler ve rüyalarla örülü hayali kentler.",
    "keyThemes": [
      "Hayali Kentler",
      "Bellek ve Mekan",
      "Arzu ve Ölüm",
      "İmparatorluk"
    ],
    "historicalContext": "Şehir kuramını şiirsel masalla birleştiren modern edebiyat harikası.",
    "passages": [
      {
        "id": "clv_1",
        "difficulty": "easy",
        "quote": "Bir kentin güzelliği sokaklarında değil, uyandırdığı hatıralardadır."
      },
      {
        "id": "clv_2",
        "difficulty": "medium",
        "quote": "Gözler gördükleri şeyleri değil, taşıdıkları anlamları algılar."
      },
      {
        "id": "clv_3",
        "difficulty": "hard",
        "quote": "Yaşayanların cehennemi gelecekte var olacak bir şey değil; her gün içinde yaşadığımız bu cehennemdir."
      }
    ]
  },

  {
    "id": "sherlock-holmes",
    "title": "Sherlock Holmes: Kızıl Dosya",
    "originalTitle": "A Study in Scarlet & The Sign of the Four",
    "author": "Arthur Conan Doyle",
    "authorBio": "İskoç doktor ve yazar. Mantık, tümdengelim ve gözlem dehası Sherlock Holmes'ün yaratıcısıdır.",
    "authorBirthDeath": "1859 - 1930",
    "year": "1887",
    "genre": "mystery",
    "coverBg": "from-[#374151] to-[#111827]",
    "summary": "221B Baker Street'te başlayan, Dr. Watson ile Holmes'ün tümdengelim sanatıyla çözdüğü cinayet ve entrikalar zinciri.",
    "keyThemes": [
      "Tümdengelim Mantığı",
      "Gözlem Sanatı",
      "Dostluk",
      "Suç ve Akıl"
    ],
    "historicalContext": "Viktorya dönemi Londra'sının sisli sokaklarında doğan polisiye türünün kurucu efsanesi.",
    "passages": [
      {
        "id": "sh_1",
        "difficulty": "easy",
        "quote": "İmkansızı elediğinizde, geriye kalan şey ne kadar olasılıksız olursa olsun gerçektir."
      },
      {
        "id": "sh_2",
        "difficulty": "medium",
        "quote": "Sen görüyorsun ama gözlemlemiyorsun Watson; görmekle gözlemlemek arasındaki fark büyüktür."
      },
      {
        "id": "sh_3",
        "difficulty": "hard",
        "quote": "Bir insanın zihni küçük boş bir çatı katına benzer; bilge insan orayı sadece işine yarayacak aletlerle doldurur."
      }
    ]
  },

  {
    "id": "dogu-ekspresinde-cinayet",
    "title": "Doğu Ekspresinde Cinayet",
    "originalTitle": "Murder on the Orient Express",
    "author": "Agatha Christie",
    "authorBio": "Polisiye kurgunun kraliçesi kabul edilen İngiliz yazar. Hercule Poirot ve Miss Marple'ın yaratıcısıdır.",
    "authorBirthDeath": "1890 - 1976",
    "year": "1934",
    "genre": "mystery",
    "coverBg": "from-[#9A3412] to-[#7C2D12]",
    "summary": "Kar fırtınasında mahsur kalan Doğu Ekspresi treninde işlenen kusursuz cinayet ve dedektif Hercule Poirot'nun gri hücreleri.",
    "keyThemes": [
      "Adalet ve İntikam",
      "Gri Hücreler",
      "Kapalı Mekan Gizemi",
      "Kolektif Sır"
    ],
    "historicalContext": "İstanbul Sirkeci Garı'ndan kalkan tarihi trenin vagonlarında kurgulanan dedektiflik başyapıtı.",
    "passages": [
      {
        "id": "ac_1",
        "difficulty": "easy",
        "quote": "İmkansız olan gerçekleşmiş olamaz; öyleyse imkansız gibi görünen şey bir yanılsamadır."
      },
      {
        "id": "ac_2",
        "difficulty": "medium",
        "quote": "Gerçek asla gizli kalmaz; insan konuşmasa bile gözleri ve elleri fısıldar."
      },
      {
        "id": "ac_3",
        "difficulty": "hard",
        "quote": "İnsan ruhu bir labirenttir; en masum görünen kalplerin altında bile karanlık sırlar uyuyabilir."
      }
    ]
  },

  {
    "id": "morgue-sokagi-cinayeti",
    "title": "Morgue Sokağı Cinayeti & Kuzgun",
    "originalTitle": "The Murders in the Rue Morgue & The Raven",
    "author": "Edgar Allan Poe",
    "authorBio": "Amerikan gotik edebiyatının, modern dedektif öykülerinin ve karanlık romantizmin öncüsü şair ve yazar.",
    "authorBirthDeath": "1809 - 1849",
    "year": "1841",
    "genre": "mystery",
    "coverBg": "from-[#1E1B4B] to-[#0A0A0A]",
    "summary": "Kilitli bir odada işlenen akıl almaz cinayeti çözen Auguste Dupin ve karanlık bir gecede çaresiz bir aşığın kapısına konan Kuzgun.",
    "keyThemes": [
      "Akıl ve Dehşet",
      "Kilitli Oda Gizemi",
      "Kayıp Aşk ve Yas",
      "Gotik Atmosfer"
    ],
    "historicalContext": "Polisiye ve analitik dedektiflik türünün dünya edebiyatındaki ilk örneği.",
    "passages": [
      {
        "id": "poe_1",
        "difficulty": "easy",
        "quote": "Dedim ki: Kuzgun bir daha asla dedi."
      },
      {
        "id": "poe_2",
        "difficulty": "medium",
        "quote": "Bütün sırlar görünürdedir; onları göremeyen sadece fazla derine bakan gözlerdir."
      },
      {
        "id": "poe_3",
        "difficulty": "hard",
        "quote": "Delilik ve deha arasındaki çizgi öyle incedir ki, kimi zaman en parlak akıl en karanlık kabusları doğurur."
      }
    ]
  }
];
