// Master Books Database (LibrisMind Literary Corpus)
// Comprehensive catalog containing EVERY single literary work cited in the project with full reviews, summaries, author bios, and rich passage pools across all difficulty levels

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
    summary: 'Roma İmparatoru Marcus Aurelius\'un Tuna boylarındaki askeri seferler sırasında çadırında yalnızca kendi nefsiyle hesaplaşmak için kaleme aldığı kişisel notlarıdır. Stoacı ahlakın, geçiciliğin, öfke kontrolünün ve kaderi kabullenmenin (Amor Fati) en berrak manifestosudur.',
    keyThemes: ['Stoacılık', 'Kaderi Sevmek (Amor Fati)', 'Zamanın Geçiciliği', 'İçsel Huzur'],
    historicalContext: 'Roma İmparatorluğu\'nun en güçlü döneminde savaşlar ve salgınlar sırasında yazılmış ölümsüz bir bilgelik rehberidir.',
    passages: [
      { id: 'kd_1', difficulty: 'easy', quote: 'Ruhun, düşüncelerinin rengine bürünür.' },
      { id: 'kd_2', difficulty: 'easy', quote: 'Sabah uyandığında nefes almanın ayrıcalığını hatırla.' },
      { id: 'kd_3', difficulty: 'easy', quote: 'Kendi zihninden daha huzurlu bir sığınak yoktur.' },
      { id: 'kd_4', difficulty: 'medium', quote: 'Dış dünya seni üzemez; seni üzen şey ona verdiğin kendi yargılarındır.' },
      { id: 'kd_5', difficulty: 'medium', quote: 'Hayatın amacı çoğunluğun tarafında olmak değil, akıl ve erdemin yanında durmaktır.' },
      { id: 'kd_6', difficulty: 'medium', quote: 'Gereksiz olan her şeyi hayatından çıkarırsan, ne kadar çok zamana ve huzura kavuşursun.' },
      { id: 'kd_7', difficulty: 'hard', quote: 'Güne başlarken kendine şunu söyle: Bugün nankör, küstah, hilekar ve kıskanç insanlarla karşılaşacağım çünkü onlar iyiyi ve kötüyü ayırt edemezler.' },
      { id: 'kd_8', difficulty: 'hard', quote: 'Başkalarının zihninde ne olup bittiğini bilmemek insanı mutsuz etmez; insan ancak kendi ruhunun hareketlerini izlemediği zaman mutsuz olur.' },
      { id: 'kd_9', difficulty: 'legendary', quote: 'Zaman sonsuz bir akıntıdır; her olay bir an için su yüzüne çıkar, ardından sürüklenip gider ve yerini bir başkasına bırakır.' },
      { id: 'kd_10', difficulty: 'legendary', quote: 'Evren sürekli bir değişimden ibarettir; hayatımız ise bizim düşüncelerimizin ve verdiğimiz anlamların eseridir.' }
    ]
  },
  {
    id: 'ahlak-mektuplari',
    title: 'Ahlak Mektupları & Yaşamın Kısalığı',
    originalTitle: 'Epistulae Morales ad Lucilium / De Brevitate Vitae',
    author: 'Seneca',
    authorBio: 'Romalı devlet adamı, hatip, tragedya yazarı ve Stoacı felsefenin en büyük temsilcilerinden biri.',
    authorBirthDeath: 'MÖ 4 - MS 65',
    year: 'MS 65',
    genre: 'philosophy',
    secondaryGenres: ['letters', 'classics', 'essay'],
    coverBg: 'from-[#C85A32] to-[#78350F]',
    summary: 'Seneca\'nın dostu Lucilius\'a yazdığı mektuplardan oluşur. Zamanın doğru kullanımı, ölüm korkusunun yenilmesi, bilgelik ve zenginliğin getirdiği ruhsal tuzaklar üzerine pratik yaşam dersleri sunar.',
    keyThemes: ['Zaman Yönetimi', 'Ölüm Bilinci', 'Sade Yaşam', 'Felsefi Dostluk'],
    historicalContext: 'İmparator Neron döneminde yazılmış, insan ruhunun baskı ve belirsizlik altındaki dayanıklılığını ele almıştır.',
    passages: [
      { id: 'am_1', difficulty: 'easy', quote: 'Zamanı iyi kullanan insan için ömür uzundur.' },
      { id: 'am_2', difficulty: 'easy', quote: 'Korkularımız gerçek acılarımızdan daima daha fazladır.' },
      { id: 'am_3', difficulty: 'easy', quote: 'Aza sahip olan değil, hep fazlasını isteyen yoksuldur.' },
      { id: 'am_4', difficulty: 'medium', quote: 'Hangi limana doğru yelken açtığını bilmeyen bir gemi için hiçbir rüzgar elverişli değildir.' },
      { id: 'am_5', difficulty: 'medium', quote: 'Ömrümüzün büyük bir kısmını gereksiz ve faydasız işlerle harcayarak heba ederiz.' },
      { id: 'am_6', difficulty: 'hard', quote: 'Bize verilen zaman kısa değildir; tersine biz onun büyük bir kısmını gereksiz işlerle tüketerek kısaltırız.' },
      { id: 'am_7', difficulty: 'hard', quote: 'Yaşamı ertelemek, hayatın bize sunduğu en büyük kayıptır; her gün yeni bir ömür gibi yaşanmalıdır.' },
      { id: 'am_8', difficulty: 'legendary', quote: 'Bilge insan talihin getirdiği hiçbir hediyeye sevinmez ve hiçbir felakete yenilmez; çünkü o yalnızca kendi iç huzuruna ve erdemine güvenir.' }
    ]
  },
  {
    id: 'dusunceler-ve-sohbetler',
    title: 'Düşünceler ve Sohbetler (Enchiridion)',
    originalTitle: 'Diatribai / Enchiridion',
    author: 'Epiktetos',
    authorBio: 'Köle olarak doğup Roma\'nın en saygın Stoacı filozofu haline gelen, özgürlüğün dış koşullarda değil zihinsel tutumda olduğunu öğreten bilge.',
    authorBirthDeath: 'MS 50 - MS 135',
    year: 'MS 108',
    genre: 'philosophy',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#4B5563] to-[#1F2937]',
    summary: 'Epiktetos, insanın yalnızca kontrol edebildiği şeylerden (kendi düşünceleri, arzuları ve seçimleri) sorumlu olduğunu; kontrol edemediği şeylere bağlanmanın esaret getirdiğini açıklar.',
    keyThemes: ['İçsel Özgürlük', 'Kontrol Alanı', 'Arzuların Terbiyesi', 'Ruhsal Bağımsızlık'],
    historicalContext: 'Öğrencisi Arrianus tarafından kayda geçirilmiş ve yüzyıllardır pratik ahlakın temel el kitabı olmuştur.',
    passages: [
      { id: 'ep_1', difficulty: 'easy', quote: 'İnsanları üzen şeyler olaylar değil, yargılardır.' },
      { id: 'ep_2', difficulty: 'easy', quote: 'Özgürlük, arzuladığın her şeyi yapabilmek değil, arzularını kontrol edebilmektir.' },
      { id: 'ep_3', difficulty: 'medium', quote: 'Kontrol edemediğin şeylerin tutsağı olma; sadece kendi seçimlerinin efendisi ol.' },
      { id: 'ep_4', difficulty: 'medium', quote: 'Seni kıran şey başkalarının hakaretleri değil, senin o hakarete verdiğin tepkidir.' },
      { id: 'ep_5', difficulty: 'hard', quote: 'Özgürlük, arzuladığın şeyleri elde etmekte değil, kontrolünde olmayan arzuları dizginlemeyi öğrenmekte yatar.' },
      { id: 'ep_6', difficulty: 'legendary', quote: 'Hayat bir tiyatro sahnesidir ve sana düşen rolü en iyi şekilde oynamak senin görevin; rolün büyüklüğünü seçmek ise yönetmenin takdiridir.' }
    ]
  },
  {
    id: 'boyle-buyurdu-zerdust',
    title: 'Böyle Buyurdu Zerdüşt',
    originalTitle: 'Also sprach Zarathustra',
    author: 'Friedrich Nietzsche',
    authorBio: '19. yüzyılın en sarsıcı Alman filozofu, şair ve kültür eleştirmeni. Üstinsan ve Güç İstenci kavramlarının mimarı.',
    authorBirthDeath: '1844 - 1900',
    year: '1883',
    genre: 'philosophy',
    secondaryGenres: ['poetry', 'classics'],
    coverBg: 'from-[#1C1917] to-[#451A03]',
    summary: 'Zerdüşt dağdaki yalnızlığından inerek insanlara sürü psikolojisini reddetmeyi, geleneksel dogmaları aşmayı ve kendi değerlerini yaratan "Üstinsan" olmayı müjdeler.',
    keyThemes: ['Üstinsan (Übermensch)', 'Kendi Kendini Aşmak', 'Bengi Dönüş', 'Yaratıcı İrade'],
    historicalContext: 'Batı metafiziğini kökten sarsan, modern varoluşçuluğun öncüsü kabul edilen başyapıt.',
    passages: [
      { id: 'bbz_1', difficulty: 'easy', quote: 'Uçuruma uzun süre bakarsan, uçurum da sana bakar.' },
      { id: 'bbz_2', difficulty: 'easy', quote: 'Beni öldürmeyen her darbe beni güçlendirir.' },
      { id: 'bbz_3', difficulty: 'easy', quote: 'Yaratmak, acıdan kurtulmanın ve hafiflemenin en büyük yoludur.' },
      { id: 'bbz_4', difficulty: 'medium', quote: 'Gök gürültüsüyle gelen fikirler dünyayı yönetir; sessizce atılan adımlar fırtınayı doğurur.' },
      { id: 'bbz_5', difficulty: 'medium', quote: 'Müziksiz bir hayat, varoluş açısından telafisi imkansız büyük bir hata olurdu.' },
      { id: 'bbz_6', difficulty: 'hard', quote: 'Kendi alevinizde yanmaya hazır olmalısınız; önce küle dönüşmeden nasıl yeniden doğabilirsiniz?' },
      { id: 'bbz_7', difficulty: 'hard', quote: 'İnsan, hayvan ile Üstinsan arasına gerilmiş tehlikeli bir halattır; bir uçurumun üzerindeki iptir.' },
      { id: 'bbz_8', difficulty: 'legendary', quote: 'Yükseklere tırmanmak isteyen insan yalnızlığın sert rüzgarlarına göğüs germelidir; çünkü zirveler kalabalıkların değil, sadece kartalların meskenidir.' }
    ]
  },
  {
    id: 'etika',
    title: 'Etika',
    originalTitle: 'Ethica, ordine geometrico demonstrata',
    author: 'Baruch Spinoza',
    authorBio: '17. yüzyıl Hollandalı rasyonalist filozof. Panteizmin ve akılcı ahlakın kurucusu.',
    authorBirthDeath: '1632 - 1677',
    year: '1677',
    genre: 'philosophy',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#065F46] to-[#022C22]',
    summary: 'Geometrik yöntemle kanıtlanan bu eserde Spinoza; Tanrı ile doğanın bir ve aynı olduğunu (Panteizm), insanın tutkuların esaretinden ancak akıl ve kavrayışla kurtulabileceğini gösterir.',
    keyThemes: ['Tanrı ve Doğa (Deus sive Natura)', 'Tutkuların Aşkınlığı', 'Akılcı Özgürlük', 'Keder ve Sevinç'],
    historicalContext: 'Ölümünden sonra gizlice basılan ve Aydınlanma felsefesine yön veren en cesur metinlerden biri.',
    passages: [
      { id: 'sp_1', difficulty: 'easy', quote: 'Keder, zihnin yetkinliğinin azalmasıdır.' },
      { id: 'sp_2', difficulty: 'easy', quote: 'Sevinç, insanın daha büyük bir yetkinliğe geçişidir.' },
      { id: 'sp_3', difficulty: 'medium', quote: 'İnsan eylemlerine ne ağlamalı, ne öfkelenmeli; yalnızca onları anlamaya çalışmalıdır.' },
      { id: 'sp_4', difficulty: 'medium', quote: 'Nefret, sevgiyle yenilmediği sürece karşılıklı nefreti besler.' },
      { id: 'sp_5', difficulty: 'hard', quote: 'Akıl tarafından yönlendirilen bir insan, kör tutkularının esiri olan bir kimseden katbekat daha özgür ve güçlüdür.' },
      { id: 'sp_6', difficulty: 'legendary', quote: 'Zihin bir şeyi akıl yoluyla kavradığı ölçüde, tutkuların yıkıcı gücünden kurtulur ve Tanrısal doğanın sonsuz dinginliğine erişir.' }
    ]
  },
  {
    id: 'yasam-bilgeligi',
    title: 'Yaşam Bilgeliği Üzerine Aforizmalar',
    originalTitle: 'Aphorismen zur Lebensweisheit',
    author: 'Arthur Schopenhauer',
    authorBio: 'Kötümserlik felsefesinin büyük ustası. İrade, yalnızlık ve estetik tefekkür üzerine derin teoriler geliştirmiştir.',
    authorBirthDeath: '1788 - 1860',
    year: '1851',
    genre: 'philosophy',
    secondaryGenres: ['essay'],
    coverBg: 'from-[#374151] to-[#111827]',
    summary: 'Schopenhauer\'ın günlük yaşamda mutluluğa, yalnızlığa, dostluğa ve insan karakterine dair son derece berrak, gerçekçi ve pratik bilgelik kılavuzudur.',
    keyThemes: ['Yalnızlığın Asaleti', 'İçsel Zenginlik', 'Acı ve Can Sıkıntısı', 'Karakter ve Kader'],
    historicalContext: 'Filozofun yaşlılık döneminde yazdığı ve dünya çapında büyük bir şöhrete kavuşmasını sağlayan en popüler eseridir.',
    passages: [
      { id: 'sch_1', difficulty: 'easy', quote: 'Yalnızlık, tüm büyük zihinlerin kaderidir.' },
      { id: 'sch_2', difficulty: 'easy', quote: 'Sıradan insanlar sadece zamanı harcamayı düşünür, zeki insan ise onu kullanmayı.' },
      { id: 'sch_3', difficulty: 'medium', quote: 'Hayat bir sarkaç gibi acı ile can sıkıntısı arasında gidip gelir.' },
      { id: 'sch_4', difficulty: 'medium', quote: 'Herkes kendi görüş alanının sınırlarını dünyanın sınırları olarak kabul eder.' },
      { id: 'sch_5', difficulty: 'hard', quote: 'Bir insanın kendi içinde neye sahip olduğu, dışarıdan ne elde edebileceğinden daima daha belirleyici ve kıymetlidir.' },
      { id: 'sch_6', difficulty: 'legendary', quote: 'İçsel zenginliği olan bir insan dışarıdan neredeyse hiçbir şey beklemez; çünkü kendi parlak zekası ve tefekkürü ona en asil mutluluğu sunar.' }
    ]
  },
  {
    id: 'sisifos-soyleni',
    title: 'Sisifos Söyleni',
    originalTitle: 'Le Mythe de Sisyphe',
    author: 'Albert Camus',
    authorBio: 'Fransız yazar, filozof ve Nobel Ödüllü edebiyatçı. Absürdizm felsefesinin kurucusu.',
    authorBirthDeath: '1913 - 1960',
    year: '1942',
    genre: 'philosophy',
    secondaryGenres: ['essay'],
    coverBg: 'from-[#475569] to-[#0F172A]',
    summary: 'Hayatın anlamsızlığı ve absürdü karşısında insanın intihar etmek yerine başkaldırmasını savunur. Kayasını dağın tepesine taşıyan Sisifos, bilinciyle kaderini aşar.',
    keyThemes: ['Absürd (Uyumsuzluk)', 'Başkaldırı', 'Bilinçli Varoluş', 'Özgürlük'],
    historicalContext: 'Varoluşçu edebiyatın ve felsefenin 20. yüzyıldaki en etkili manifesto metnidir.',
    passages: [
      { id: 'cam_1', difficulty: 'easy', quote: 'Sisifos\'u mutlu olarak hayal etmek gerekir.' },
      { id: 'cam_2', difficulty: 'easy', quote: 'Önemli olan yaşamak değil, bilinçle ve tutkuyla yaşamaktır.' },
      { id: 'cam_3', difficulty: 'medium', quote: 'Başkaldırıyorum, öyleyse varız; adaletsizlik karşısında susmak teslim olmaktır.' },
      { id: 'cam_4', difficulty: 'medium', quote: 'Kışın ortasında, içimde yenilmez bir yaz olduğunu öğrendim.' },
      { id: 'cam_5', difficulty: 'hard', quote: 'Kışın en soğuk gününde, içimde yenilmez ve sarsılmaz bir yaz mevsimi olduğunu keşfettim.' },
      { id: 'cam_6', difficulty: 'legendary', quote: 'İnsanlar ancak sizin çektiğiniz acıların kendi çıkarlarına dokunmadığını gördüklerinde samimiyetle merhamet gösterirler.' }
    ]
  },
  {
    id: 'bulanti',
    title: 'Bulantı & Varlık ve Hiçlik',
    originalTitle: 'La Nausée',
    author: 'Jean-Paul Sartre',
    authorBio: 'Fransız varoluşçu filozof, oyun yazarı ve romancı.',
    authorBirthDeath: '1905 - 1980',
    year: '1938',
    genre: 'philosophy',
    secondaryGenres: ['modernist', 'classics'],
    coverBg: 'from-[#047857] to-[#064E3B]',
    summary: 'Antoine Roquentin\'in nesnelerin ve varoluşun çıplak anlamsızlığı karşısında hissettiği "Bulantı" duygusu üzerinden varoluşun özden önce geldiğini kanıtlar.',
    keyThemes: ['Varoluş Özden Önce Gelir', 'Özgürlüğün Sorumluluğu', 'Bulantı', 'Kendi Kaderini İnşa Etmek'],
    historicalContext: 'Modern varoluşçuluğun roman formundaki ilk ve en önemli kurucu metni.',
    passages: [
      { id: 'srt_1', difficulty: 'easy', quote: 'Cehennem başkalarıdır.' },
      { id: 'srt_2', difficulty: 'easy', quote: 'Var olmak, orada öylece durmaktır; hiçbir gerekçesi yoktur.' },
      { id: 'srt_3', difficulty: 'medium', quote: 'İnsan özgürlüğe mahkumdur; çünkü bir kez dünyaya atıldıktan sonra yaptığı her şeyden sorumludur.' },
      { id: 'srt_4', difficulty: 'medium', quote: 'Hiçbir şey seçmemek bile aslında bir seçim yapmaktır.' },
      { id: 'srt_5', difficulty: 'hard', quote: 'Varoluş özden önce gelir; insan önce vardır, varoluşunu kendisi tanımlar ve seçimleriyle kendi kaderini inşa eder.' },
      { id: 'srt_6', difficulty: 'legendary', quote: 'İnsan kendi özgürlüğünün ağırlığı altında ezilir; çünkü yapacağı her eylemle sadece kendini değil, tüm insanlığı bağlayan bir seçimde bulunur.' }
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
    summary: 'Raskolnikov\'un teorisini kanıtlamak için işlediği cinayet ve ardından gelen amansız vicdan azabı, psikolojik buhran ve manevi kurtuluş arayışıdır.',
    keyThemes: ['Suç ve Vicdan', 'Olağanüstü İnsan Yanılsaması', 'Kefaret', 'Ahlaki Uyanış'],
    historicalContext: 'Psikolojik roman türünün zirvesi kabul edilen anıtsal Rus klasiği.',
    passages: [
      { id: 'sc_1', difficulty: 'easy', quote: 'Yeni bir adım atmak, yeni bir kelime söylemek insanların en çok korktuğu şeydir.' },
      { id: 'sc_2', difficulty: 'easy', quote: 'Bir anlık mutluluk bile bütün bir ömre bedeldir.' },
      { id: 'sc_3', difficulty: 'easy', quote: 'İnsan her şeye alışan bir yaratıktır.' },
      { id: 'sc_4', difficulty: 'medium', quote: 'Çok fazla bilinçli olmak bir hastalıktır; gerçek, tam anlamıyla bir hastalıktır.' },
      { id: 'sc_5', difficulty: 'medium', quote: 'İnsan sırf acı çekmemek için bile bütün varlığını feda etmeye hazırdır.' },
      { id: 'sc_6', difficulty: 'medium', quote: 'Yalan söylemek insanın diğer canlılara karşı tek üstünlüğüdür; çünkü doğruya ulaştırır.' },
      { id: 'sc_7', difficulty: 'medium', quote: 'Acı ve ıstırap, geniş bir zeka ve derin bir kalp için daima zorunludur.' },
      { id: 'sc_8', difficulty: 'hard', quote: 'Dünyayı güzellik kurtaracak; fakat o güzelliği görebilmek için önce kalpteki kibri ve kini temizlemek gerekir.' },
      { id: 'sc_9', difficulty: 'hard', quote: 'İnsanlar ikiye ayrılır: Sıradan olanlar ve kendi kurallarını koyma hakkına sahip olağanüstü olanlar.' },
      { id: 'sc_10', difficulty: 'hard', quote: 'Kendi yolunda yanlış gitmek, başkasının yolunda doğru gitmekten daima daha onurludur.' },
      { id: 'sc_11', difficulty: 'legendary', quote: 'Sevgi öyle büyük bir güçtür ki, bütün dünyayı satın alabilir ve sadece kendi günahlarını değil, başkalarının günahlarını da bağışlatabilir.' },
      { id: 'sc_12', difficulty: 'legendary', quote: 'Bana öyle geliyor ki insan sadece acılarını saymaktan hoşlanır, mutluluklarını ise hiç hesap etmez; oysa dikkat etse her anında bir sevinç gizlidir.' },
      { id: 'sc_13', difficulty: 'legendary', quote: 'Vicdanı olan bir insan, hatasını anladığı anda zaten en ağır cezayı kendi içinde çekmeye başlamıştır; zindanın karanlığı bunun yanında hafif kalır.' }
    ]
  },
  {
    id: 'savas-ve-baris',
    title: 'Savaş ve Barış & Anna Karenina',
    originalTitle: 'Voyna i Mir / Anna Karenina',
    author: 'Lev Tolstoy',
    authorBio: 'Rus edebiyatının devi, destansı anlatım ustası ve ahlak düşünürü.',
    authorBirthDeath: '1828 - 1910',
    year: '1869',
    genre: 'classics',
    secondaryGenres: ['strategy', 'history'],
    coverBg: 'from-[#1E3A8A] to-[#172554]',
    summary: 'Napolyon\'un Rusya işgali ekseninde aristokrat ailelerin kaderini, savaşın dehşetini ve tarihin gizli yasalarını işleyen panoramik destandır.',
    keyThemes: ['Tarihin Akışı', 'Sabır ve Zaman', 'Savaşın Anlamsızlığı', 'Ruhsal Dönüşüm'],
    historicalContext: 'Dünya edebiyat tarihinin en büyük panoramik romanı olarak tescillenmiştir.',
    passages: [
      { id: 'sb_1', difficulty: 'easy', quote: 'İnsan sadece sevgiyle yaşar.' },
      { id: 'sb_2', difficulty: 'easy', quote: 'Mutluluk, sahip olduklarımızın değerini bilmekle başlar.' },
      { id: 'sb_3', difficulty: 'medium', quote: 'Bütün mutlu aileler birbirine benzer; her mutsuz ailenin ise kendine özgü bir mutsuzluğu vardır.' },
      { id: 'sb_4', difficulty: 'medium', quote: 'En güçlü iki savaşçı sabır ve zamandır; onların üstesinden gelemeyeceği hiçbir engel yoktur.' },
      { id: 'sb_5', difficulty: 'medium', quote: 'Herkes insanlığı değiştirmeyi düşünür ama kimse önce kendini değiştirmeyi akıl etmez.' },
      { id: 'sb_6', difficulty: 'hard', quote: 'Belki de hayatımı yanlış yaşadım düşüncesi, ölüm döşeğindeki insanın zihnini kemiren en amansız azaptır.' },
      { id: 'sb_7', difficulty: 'hard', quote: 'Hayatın gerçek anlamını ancak ölümün soğuk nefesini ensemizde hissettiğimiz o dönüm noktalarında kavrarız.' },
      { id: 'sb_8', difficulty: 'legendary', quote: 'İnsanlar nehirler gibidir; suları aynıdır ama kimi yerde dar, kimi yerde hızlı, kimi yerde berrak, kimi yerde ise bulanık akar.' }
    ]
  },
  {
    id: 'donusum',
    title: 'Dönüşüm & Dava',
    originalTitle: 'Die Verwandlung / Der Process',
    author: 'Franz Kafka',
    authorBio: '20. yüzyıl yabancılaşmasının, modern bürokrasinin ve varoluşsal kaygının en büyük sembolik yazarı.',
    authorBirthDeath: '1883 - 1924',
    year: '1915',
    genre: 'classics',
    secondaryGenres: ['modernist', 'philosophy'],
    coverBg: 'from-[#713F12] to-[#451A03]',
    summary: 'Gregor Samsa\'nın bir sabah böceğe dönüşmesiyle ailesinin yabancılaşmasını anlatan Dönüşüm ve Josef K.\'nın suçu bilinmeyen bir mahkemede yargılanışını anlatan Dava romanlarıdır.',
    keyThemes: ['Yabancılaşma', 'Modern Bürokrasi', 'Suçluluk Hissi', 'Böcekleşme'],
    historicalContext: 'Modern dünya insanının sistem karşısındaki çaresizliğini öngören çağ açıcı başyapıtlar.',
    passages: [
      { id: 'kfk_1', difficulty: 'easy', quote: 'Gregor Samsa bir sabah huzursuz düşlerden uyandı.' },
      { id: 'kfk_2', difficulty: 'easy', quote: 'İçimdeki sessizlik dışarıdaki gürültüden çok daha ağırdır.' },
      { id: 'kfk_3', difficulty: 'medium', quote: 'Birisi Josef K.\'ya iftira atmış olmalıydı; çünkü kötü bir şey yapmamış olmasına rağmen tutuklandı.' },
      { id: 'kfk_4', difficulty: 'medium', quote: 'Doğru yol, yerden bir karış yukarıda gerilmiş bir ip üzerinde yürümek gibidir.' },
      { id: 'kfk_5', difficulty: 'hard', quote: 'Bir kafes bir kuş aramaya çıktı; oysa özgürlük kafesin dışındaki sonsuz gökyüzünde kanat çırpmaktı.' },
      { id: 'kfk_6', difficulty: 'legendary', quote: 'Ulaşılmak istenen hedefin kendisi değil, o hedefe giden yolda karşılaşılan belirsizlikler ve engeller insanın ruhunu şekillendirir.' }
    ]
  },
  {
    id: 'sefiller',
    title: 'Sefiller & Notre Dame',
    originalTitle: 'Les Misérables',
    author: 'Victor Hugo',
    authorBio: 'Fransız Romantizmi\'nin lideri, şair, oyun yazarı ve adalet savunucusu.',
    authorBirthDeath: '1802 - 1885',
    year: '1862',
    genre: 'classics',
    secondaryGenres: ['history'],
    coverBg: 'from-[#B91C1C] to-[#7F1D1D]',
    summary: 'Bir somun ekmek çaldığı için 19 yıl kürek cezası çeken Jean Valjean\'ın merhametle dönüşen hayatı ve adalet peşindeki Müfettiş Javert ile olan amansız kovalamacasıdır.',
    keyThemes: ['Merhamet ve Adalet', 'Yoksulluk', 'Ahlaki Kefaret', 'İnsanlık Onuru'],
    historicalContext: 'Fransız Devrimi sonrası toplumsal adaletsizliği gözler önüne seren ölümsüz roman.',
    passages: [
      { id: 'hug_1', difficulty: 'easy', quote: 'Ölmek hiçbir şeydir; asıl korkunç olan yaşamamaktır.' },
      { id: 'hug_2', difficulty: 'easy', quote: 'En büyük karanlık cehaletin yarattığı karanlıktır.' },
      { id: 'hug_3', difficulty: 'medium', quote: 'Gelecek, cesurların umudu, korkakların ise kabusudur.' },
      { id: 'hug_4', difficulty: 'medium', quote: 'Affetmek, adaletin katı kurallarından çok daha yüce ve iyileştirici bir güçtür.' },
      { id: 'hug_5', difficulty: 'hard', quote: 'Sevmek veya sevilmiş olmak yeterlidir; karanlık gecelerin ardından doğacak şafağı beklemek gerekmez.' },
      { id: 'hug_6', difficulty: 'legendary', quote: 'Toplum yoksulları karanlığa mahkum edip sonra da onların işlediği suçlara şaşırıyorsa, asıl suçlu karanlığı yaratan toplumun kendisidir.' }
    ]
  },
  {
    id: 'siddhartha-bozkirkurdu',
    title: 'Siddhartha & Bozkırkurdu',
    originalTitle: 'Siddhartha / Der Steppenwolf',
    author: 'Hermann Hesse',
    authorBio: 'Alman-İsviçreli romancı ve Nobel Edebiyat Ödülü sahibi. Doğu mistisizmi ve bireyleşme felsefesinin ustası.',
    authorBirthDeath: '1877 - 1962',
    year: '1922',
    genre: 'classics',
    secondaryGenres: ['philosophy', 'mysticism'],
    coverBg: 'from-[#D97706] to-[#78350F]',
    summary: 'Siddhartha\'nın aydınlanma arayışını nehir kıyısında bulması ve Harry Haller\'in Bozkırkurdu kimliğiyle modern toplumun sığlığına karşı iç hesaplaşmasıdır.',
    keyThemes: ['Aydınlanma Arayışı', 'Bozkırkurdu İkilemi', 'Yalnızlık', 'Özün Keşfi'],
    historicalContext: 'Doğu ve Batı düşüncesini modern bireyin ruhunda birleştiren kült eserler.',
    passages: [
      { id: 'hss_1', difficulty: 'easy', quote: 'Bilgelik başkasına aktarılamaz; onu kişi kendisi bulmalıdır.' },
      { id: 'hss_2', difficulty: 'medium', quote: 'Yalnızlık bağımsızlıktır; onu ben istedim ve uzun yıllar boyunca bedelini ödedim.' },
      { id: 'hss_3', difficulty: 'hard', quote: 'Kuş yumurtadan çıkmak için mücadele eder; yumurta dünyadır; doğmak isteyen bir dünyayı yok etmek zorundadır.' }
    ]
  },
  {
    id: 'madame-bovary',
    title: 'Madame Bovary & Kırmızı ve Siyah',
    originalTitle: 'Madame Bovary / Le Rouge et le Noir',
    author: 'Gustave Flaubert & Stendhal',
    authorBio: 'Fransız gerçekçi romanının kurucuları ve tutkunun büyük analistleri.',
    authorBirthDeath: '1821 - 1880 / 1783 - 1842',
    year: '1857',
    genre: 'classics',
    secondaryGenres: ['drama'],
    coverBg: 'from-[#BE185D] to-[#831843]',
    summary: 'Romantik hayallerle gerçek hayatın taşra sıradanlığı arasında sıkışıp kalan Emma Bovary\'nin trajik tatminsizliği ve Julien Sorel\'in yükseliş hırsıdır.',
    keyThemes: ['Bovarizm', 'Romantik Yanılsama', 'Taşra Yaşamı', 'Tatminsizlik'],
    historicalContext: 'Modern roman sanatının üslup ve teknik açısından miladı kabul edilen eser.',
    passages: [
      { id: 'flb_1', difficulty: 'medium', quote: 'İnsan kalbi bir sokak lambası gibidir; rüzgar estikçe söner ve titrer.' },
      { id: 'flb_2', difficulty: 'medium', quote: 'Büyük tutkular sessizce büyür ve fırtına gibi aniden patlak verir.' }
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
    authorBio: 'Türk edebiyatının en güçlü gerçekçi yazarlarından biri. İnsan ruhunun derinliklerini eşsiz bir durulukla anlatmıştır.',
    authorBirthDeath: '1907 - 1948',
    year: '1943',
    genre: 'turkish',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#9A3412] to-[#431407]',
    summary: 'İçine kapanık memur Raif Efendi\'nin gençliğinde Berlin\'de ressam Maria Puder ile yaşadığı saf ve trajik aşkın günlüğüdür.',
    keyThemes: ['Yalnızlık', 'Ruhsal Bağlantı', 'İçsel Sessizlik', 'Toplumsal Yabancılaşma'],
    historicalContext: 'Türk edebiyatının en çok okunan ve sevilen kült aşk ve yabancılaşma romanı.',
    passages: [
      { id: 'kmm_1', difficulty: 'easy', quote: 'İçimizde şeytan yok; içimizde aciz ve tembel bir ruh var.' },
      { id: 'kmm_2', difficulty: 'easy', quote: 'Bu dünyada merhametten daha asil bir erdem yoktur.' },
      { id: 'kmm_3', difficulty: 'easy', quote: 'Kimi sevdiysem içimde ayrı bir dünya kurdum onun için.' },
      { id: 'kmm_4', difficulty: 'medium', quote: 'Dünyada bana hiçbir şey, yaşama sevinci kadar kıymetli görünmüyordu.' },
      { id: 'kmm_5', difficulty: 'medium', quote: 'İnsanlar birbirlerini ne kadar az tanıyorlar ve ne kadar kolay yargılıyorlar.' },
      { id: 'kmm_6', difficulty: 'medium', quote: 'İnsan başkalarına yardım ettiği ölçüde kendi iç yalnızlığından sıyrılır.' },
      { id: 'kmm_7', difficulty: 'hard', quote: 'Bir insanın diğer bir insanı bütünüyle anlaması kadar dünyada imkansız ve mucizevi bir şey yoktur.' },
      { id: 'kmm_8', difficulty: 'hard', quote: 'İçimdeki sevinçleri ve acıları kimseye anlatamadığım için hepsini defterimin sessiz sayfalarına gömdüm.' },
      { id: 'kmm_9', difficulty: 'legendary', quote: 'Hayatta hiçbir zaman bir insana bu kadar çok bağlanmamalıydım; çünkü insanın bir başkasına bağlanması kendi özgürlüğünü kendi elleriyle teslim etmesidir.' }
    ]
  },
  {
    id: 'tutunamayanlar',
    title: 'Tutunamayanlar & Tehlikeli Oyunlar',
    originalTitle: 'Tutunamayanlar',
    author: 'Oğuz Atay',
    authorBio: 'Modern Türk romanının öncüsü ve postmodern edebiyatın kurucusu.',
    authorBirthDeath: '1934 - 1977',
    year: '1972',
    genre: 'turkish',
    secondaryGenres: ['modernist'],
    coverBg: 'from-[#1E293B] to-[#0F172A]',
    summary: 'Selim Işık ve Hikmet Benol karakterleri üzerinden Türk aydınının iç dünyasını, toplumsal ikiyüzlülüğü ve "tutunamayanların" varoluş sancısını anlatır.',
    keyThemes: ['Tutunamayanlar', 'Aydın Yabancılaşması', 'İç Monolog', 'İroni'],
    historicalContext: 'Türk romanında modernist ve postmodernist anlatımın kurucu metni.',
    passages: [
      { id: 'ttn_1', difficulty: 'easy', quote: 'Kelimeler albayım, bazı anlamlara gelmiyor.' },
      { id: 'ttn_2', difficulty: 'easy', quote: 'Ben buradayım sevgili okuyucum, sen neredesin acaba?' },
      { id: 'ttn_3', difficulty: 'medium', quote: 'Ben iç dünyama çekildikçe dışarıdaki dünya daha da anlamsızlaşıyor.' },
      { id: 'ttn_4', difficulty: 'medium', quote: 'Bizi anlamadılar Selim; bizi hiçbir zaman anlamayacaklar.' },
      { id: 'ttn_5', difficulty: 'medium', quote: 'Bütün hayatım boyunca başkalarının ne düşündüğünü hesaplamaktan yaşamayı unuttum.' },
      { id: 'ttn_6', difficulty: 'hard', quote: 'Korku öyle sinsi bir duygudur ki, insanı henüz gerçekleşmemiş felaketlerin esiri haline getirir.' },
      { id: 'ttn_7', difficulty: 'hard', quote: 'İnsan kalabalıklar içinde yalnız kaldığında, içindeki sesler dayanılmaz bir uğultuya dönüşür.' },
      { id: 'ttn_8', difficulty: 'legendary', quote: 'Bütün hayatımı başkalarının çizdiği dar kalıpların içine sığmaya çalışarak tükettim; oysa ben sadece kendi gökyüzümde kaybolmak istiyordum.' }
    ]
  },
  {
    id: 'huzur',
    title: 'Huzur & Saatleri Ayarlama Enstitüsü',
    originalTitle: 'Huzur',
    author: 'Ahmet Hamdi Tanpınar',
    authorBio: 'Doğu-Batı sentezi, zaman felsefesi, musiki ve rüya estetiğinin büyük ustası.',
    authorBirthDeath: '1901 - 1962',
    year: '1949',
    genre: 'turkish',
    secondaryGenres: ['modernist', 'classics'],
    coverBg: 'from-[#588157] to-[#283618]',
    summary: 'Mümtaz ile Nuran\'ın aşkı ekseninde İstanbul\'un tarihi dokusunu, Türk musikisini ve Doğu-Batı medeniyet buhranını anlatan anıtsal eser.',
    keyThemes: ['Doğu-Batı Medeniyet Krizi', 'Zaman Felsefesi', 'Türk Musikisi', 'Huzursuzluk'],
    historicalContext: 'Modern Türk edebiyatının estetik zirvelerinden biri kabul edilir.',
    passages: [
      { id: 'hzr_1', difficulty: 'easy', quote: 'Ne içindeyim zamanın, ne de büsbütün dışında.' },
      { id: 'hzr_2', difficulty: 'easy', quote: 'İstanbul, geçmişin hüznünü bugünün telaşıyla yoğuran bir rüyadır.' },
      { id: 'hzr_3', difficulty: 'medium', quote: 'Saat, insanın kendi varoluşunu ve faniliğini hatırlatan en acımasız aynadır.' },
      { id: 'hzr_4', difficulty: 'medium', quote: 'İçimizdeki boşluğu ancak büyük bir aşk veya sanat doldurabilir.' },
      { id: 'hzr_5', difficulty: 'hard', quote: 'Geçmiş zaman, ruhun derinliklerinde biriktirdiği en asil ve hüzünlü hatıralar hazinesidir.' },
      { id: 'hzr_6', difficulty: 'legendary', quote: 'Musiki öyle bir dildir ki, kelimelerin bittiği ve suskunluğun başladığı yerde insan ruhunun en mahrem köşelerine tercüman olur.' }
    ]
  },
  {
    id: 'ince-memed',
    title: 'İnce Memed & Ağrıdağı Efsanesi',
    originalTitle: 'İnce Memed',
    author: 'Yaşar Kemal',
    authorBio: 'Dünya edebiyatının en büyük epik anlatıcılarından Nobel adayı Türk romancı.',
    authorBirthDeath: '1923 - 2015',
    year: '1955',
    genre: 'turkish',
    secondaryGenres: ['classics', 'epic_fantasy'],
    coverBg: 'from-[#D97706] to-[#78350F]',
    summary: 'Çukurova\'da Abdi Ağa\'nın zulmüne karşı dağa çıkan İnce Memed\'in yoksul halkın kurtarıcısına dönüşme destanıdır.',
    keyThemes: ['Adalet ve Başkaldırı', 'Çukurova Coğrafyası', 'Eşkıyalık Miti', 'Direniş'],
    historicalContext: '40\'tan fazla dile çevrilen çağdaş bir halk destanı.',
    passages: [
      { id: 'im_1', difficulty: 'easy', quote: 'Zulmün olduğu yerde direniş haktır.' },
      { id: 'im_2', difficulty: 'medium', quote: 'İnsan dediğin bir topraktır; suyu sevgidir, güneşi ise adalettir.' },
      { id: 'im_3', difficulty: 'hard', quote: 'Dağlar ne kadar yüce olsa da sevda ateşi onların zirvesindeki karları eritmeye yeter.' }
    ]
  },
  {
    id: 'aylak-adam',
    title: 'Aylak Adam & Anayurt Oteli',
    originalTitle: 'Aylak Adam',
    author: 'Yusuf Atılgan',
    authorBio: 'Modern Türk edebiyatında yabancılaşma ve psikolojik derinliğin öncü yazarı.',
    authorBirthDeath: '1921 - 1989',
    year: '1959',
    genre: 'turkish',
    secondaryGenres: ['modernist', 'psychology'],
    coverBg: 'from-[#4B5563] to-[#1F2937]',
    summary: 'C. karakterinin gerçek bir sevgi ve anlam arayışıyla sokaklarda dolaşması ve Zebercet\'in yalnızlığın kıskacında çöküşüdür.',
    keyThemes: ['Aylaklık', 'Varoluşsal Yalnızlık', 'Tutku ve Takıntı', 'İç İçe Geçen Zaman'],
    historicalContext: 'Türk edebiyatında varoluşçu temanın en yetkin ilk örnekleri.',
    passages: [
      { id: 'ayl_1', difficulty: 'easy', quote: 'Sustu; konuşsa her şey bozulacaktı.' },
      { id: 'ayl_2', difficulty: 'medium', quote: 'Yalnızlık, insanın kendi ayak seslerini dinlemekten bile korktuğu sonsuz bir sessizliktir.' }
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
    authorBio: 'Totalitarizm, sansür ve manipülasyonu ifşa eden İngiliz romancı.',
    authorBirthDeath: '1903 - 1950',
    year: '1949',
    genre: 'dystopia',
    secondaryGenres: ['classics', 'politics'],
    coverBg: 'from-[#0F172A] to-[#020617]',
    summary: 'Geçmişin sürekli silindiği, düşüncenin suç sayıldığı Okyanusya\'da Büyük Birader\'e karşı hakikati arayan Winston Smith\'in hikayesidir.',
    keyThemes: ['Totalitarizm', 'Çiftdüşün', 'Gözetim Toplumu', 'Hakikatin Gaspı'],
    historicalContext: '20. yüzyılın en büyük siyasi uyarı metni.',
    passages: [
      { id: 'orw_1', difficulty: 'easy', quote: 'Büyük Birader seni izliyor.' },
      { id: 'orw_2', difficulty: 'easy', quote: 'Savaş barıştır, özgürlük köleliktir, cahillik güçtür.' },
      { id: 'orw_3', difficulty: 'medium', quote: 'Geçmişi kontrol eden geleceği kontrol eder; bugünü kontrol eden geçmişi kontrol eder.' },
      { id: 'orw_4', difficulty: 'medium', quote: 'Düşünce suçu ölümü gerektirmez; düşünce suçunun kendisi zaten ölümdür.' },
      { id: 'orw_5', difficulty: 'hard', quote: 'Özgürlük, iki kere ikinin dört ettiğini söyleyebilmektir; buna izin verilirse arkası kendiliğinden gelir.' },
      { id: 'orw_6', difficulty: 'hard', quote: 'Ortodoksluk bilinçsizlik demektir; düşünmeye gerek duymama halidir.' },
      { id: 'orw_7', difficulty: 'legendary', quote: 'Eğer geleceğin bir resmini görmek istiyorsanız, bir insanın yüzüne sonsuza dek basan bir postal hayal edin.' }
    ]
  },
  {
    id: 'hayvan-ciftligi',
    title: 'Hayvan Çiftliği',
    originalTitle: 'Animal Farm',
    author: 'George Orwell',
    authorBio: 'Siyasi alegorinin ve taşlamanın ustası İngiliz yazar.',
    authorBirthDeath: '1903 - 1950',
    year: '1945',
    genre: 'dystopia',
    secondaryGenres: ['satire', 'classics'],
    coverBg: 'from-[#991B1B] to-[#7F1D1D]',
    summary: 'İnsanların sömürüsüne karşı ayaklanan çiftlik hayvanlarının, domuzların liderliğinde zamanla eski efendilerinden daha acımasız bir diktatörlük kurmasını anlatan alegorik başyapıttır.',
    keyThemes: ['Devrim ve Yozlaşma', 'Güç Zehirlenmesi', 'Siyasi Propaganda', 'Alegori'],
    historicalContext: 'Stalin dönemini ve diktatörlük mekanizmalarını zekice hicveden ölümsüz bir fabl.',
    passages: [
      { id: 'hc_1', difficulty: 'easy', quote: 'Bütün hayvanlar eşittir ama bazıları daha eşittir.' },
      { id: 'hc_2', difficulty: 'easy', quote: 'Dört ayak iyi, iki ayak kötü!' },
      { id: 'hc_3', difficulty: 'medium', quote: 'Dışarıdaki hayvanlar bir domuzların yüzüne, bir insanların yüzüne baktılar; ama onları birbirinden ayırt edemediler.' },
      { id: 'hc_4', difficulty: 'medium', quote: 'Tek gerçek düşmanımız insandır; insanı sahneden çıkarın, açlık ve kölelik sonsuza dek yok olsun.' },
      { id: 'hc_5', difficulty: 'hard', quote: 'Hiçbir hayvan kendi türünden bir hayvanı öldürmeyecektir kuralı, zamanla hiçbir hayvan sebepsiz yere öldürülmeyecektir şekline dönüştürüldü.' },
      { id: 'hc_6', difficulty: 'legendary', quote: 'Yıllar geçti ve domuzlar artık iki ayak üzerinde yürümeye, ellerinde kırbaçlarla diğer hayvanları yönetmeye başladılar.' }
    ]
  },
  {
    id: 'cesur-yeni-dunya',
    title: 'Cesur Yeni Dünya',
    originalTitle: 'Brave New World',
    author: 'Aldous Huxley',
    authorBio: 'İnsan bilinci ve teknoloji üzerine vizyoner eserler veren düşünür.',
    authorBirthDeath: '1894 - 1963',
    year: '1932',
    genre: 'dystopia',
    secondaryGenres: ['classics', 'science'],
    coverBg: 'from-[#0284C7] to-[#0369A1]',
    summary: 'Acının "soma" haplarıyla yok edildiği, konfor uğruna sanat ve aşkın feda edildiği genetik şartlandırmalı gelecektir.',
    keyThemes: ['Zevk Yoluyla Kölelik', 'Teknolojik Şartlandırma', 'Vahşi İnsan', 'Sahte Huzur'],
    historicalContext: 'Modern tüketim toplumunu ve zevk yoluyla kontrolü öngören kehanet romanı.',
    passages: [
      { id: 'bnw_1', difficulty: 'easy', quote: 'Sözcükler tıpkı röntgen ışınları gibidir; doğru kullanıldığında her şeyi delip geçer.' },
      { id: 'bnw_2', difficulty: 'easy', quote: 'Mutluluk ve istikrar, bireysel tutkuların kurban edilmesiyle elde edilir.' },
      { id: 'bnw_3', difficulty: 'medium', quote: 'Gerçek mutluluk hiçbir zaman görkemli değildir; o sessiz ve dingin bir kabulleniştir.' },
      { id: 'bnw_4', difficulty: 'medium', quote: 'İnsanların sevdikleri şeylerle köleleştirildiği bir düzen, korkuyla yönetilen düzenden çok daha etkilidir.' },
      { id: 'bnw_5', difficulty: 'hard', quote: 'İnsanlara acı çektirmeyerek onları köleleştiren bir düzen, zorbalıkla yönetilen bir düzenden çok daha tehlikelidir.' },
      { id: 'bnw_6', difficulty: 'legendary', quote: 'Ben rahatlık istemiyorum; ben Tanrı\'yı istiyorum, şiiri istiyorum, gerçek tehlikeyi istiyorum, özgürlüğü ve günah işleme hakkını istiyorum.' }
    ]
  },
  {
    id: 'fahrenheit-451',
    title: 'Fahrenheit 451',
    originalTitle: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    authorBio: 'Amerikan bilimkurgu ve fantezi edebiyatının büyük şairi.',
    authorBirthDeath: '1920 - 2012',
    year: '1953',
    genre: 'dystopia',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#EA580C] to-[#C2410C]',
    summary: 'İtfaiyecilerin yangın söndürmek yerine kitap yaktığı bir gelecekte, itfaiyeci Guy Montag\'ın kitapların ardındaki ruhu keşfetmesidir.',
    keyThemes: ['Kitap Yakımı', 'Sansür ve Hafıza Kaybı', 'Düşünce Özgürlüğü', 'Küllerinden Doğan İnsan'],
    historicalContext: 'Kitap sevgisini ve bilginin kutsallığını anlatan en dokunaklı distopya.',
    passages: [
      { id: 'fh_1', difficulty: 'easy', quote: 'Kitapları yakmaktan daha büyük bir suç varsa o da onları okumamaktır.' },
      { id: 'fh_2', difficulty: 'easy', quote: 'Yakmak bir zevkti; bazı şeylerin kararıp yok olduğunu görmek büyüleyiciydi.' },
      { id: 'fh_3', difficulty: 'medium', quote: 'Kitaplar bize sadece bilmediğimiz şeyleri değil, unuttuğumuz insanlığımızı da hatırlatır.' },
      { id: 'fh_4', difficulty: 'medium', quote: 'İnsanların düşünmesini engellerseniz, onları eğlendirerek kontrol etmek çocuk oyuncağı olur.' },
      { id: 'fh_5', difficulty: 'hard', quote: 'Kitapların sayfaları arasında gözenekler vardır; onlar hayatın gerçek dokusunu ve nefesini taşırlar.' }
    ]
  },
  {
    id: 'biz',
    title: 'Biz',
    originalTitle: 'My (Мы)',
    author: 'Yevgeni Zamyatin',
    authorBio: '1984 ve Cesur Yeni Dünya\'ya ilham veren Rus distopya ustası.',
    authorBirthDeath: '1884 - 1937',
    year: '1924',
    genre: 'dystopia',
    secondaryGenres: ['modernist'],
    coverBg: 'from-[#0891B2] to-[#155E75]',
    summary: 'Camdan evlerde yaşayan, isim yerine numara taşıyan insanların "TekDevlet" düzeninde duygularını ve hayal güçlerini ameliyatla aldırmalarıdır.',
    keyThemes: ['Kusursuz Mantık ve Matematik', 'Duyguların Ameliyatı', 'Bireyin Yok Edilişi', 'İsyan'],
    historicalContext: 'Distopya edebiyatının babası kabul edilen öncü eser.',
    passages: [
      { id: 'zam_1', difficulty: 'easy', quote: 'Ben değil, biz olmak en kusursuz mutluluktur.' },
      { id: 'zam_2', difficulty: 'medium', quote: 'Kusursuz mutluluk ile sınırsız özgürlük arasında daima uzlaşmaz bir savaş vardır.' },
      { id: 'zam_3', difficulty: 'hard', quote: 'İnsan ruhu, tek tip düzenin kusursuz matematiğine sığmayacak kadar karmaşık ve delicedir.' }
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
    authorBio: 'Logoterapinin kurucusu, Avusturyalı nörolog ve psikiyatrist.',
    authorBirthDeath: '1905 - 1997',
    year: '1946',
    genre: 'psychology',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#059669] to-[#064E3B]',
    summary: 'Auschwitz toplama kampından sağ kurtulan Frankl\'ın, insanın en ağır acı ve çaresizlik koşullarında dahi bir anlam bularak hayata tutunabileceğini gösteren başyapıtıdır.',
    keyThemes: ['Anlam İstenci', 'Acının Anlamlandırılması', 'İçsel Tavır Seçimi', 'Logoterapi'],
    historicalContext: 'Milyonlarca insana zor zamanlarda rehberlik eden modern psikoloji klasiği.',
    passages: [
      { id: 'frk_1', difficulty: 'easy', quote: 'Yaşamak için bir nedeni olan her türlü nasıla katlanır.' },
      { id: 'frk_2', difficulty: 'medium', quote: 'İnsanın elinden her şey alınabilir; son özgürlüğü olan tavrını seçme hakkı hariç.' },
      { id: 'frk_3', difficulty: 'hard', quote: 'Koşulları değiştiremediğimiz anda, kendimizi değiştirmek zorunda olduğumuz gerçeğiyle yüzleşiriz.' }
    ]
  },
  {
    id: 'kesfedilmemis-benlik',
    title: 'Keşfedilmemiş Benlik & Kırmızı Kitap',
    originalTitle: 'The Undiscovered Self / The Red Book',
    author: 'Carl Gustav Jung',
    authorBio: 'Analitik psikolojinin kurucusu, arketipler ve kolektif bilinçdışının kaşifi.',
    authorBirthDeath: '1875 - 1961',
    year: '1957',
    genre: 'psychology',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#6B21A8] to-[#3B0764]',
    summary: 'Bireyleşme süreci, gölge arketipi ve modern insanın kendi bilinçdışıyla barışarak bütünlüğe ulaşma yolculuğudur.',
    keyThemes: ['Bilinçdışının Aydınlatılması', 'Gölge Arketipi', 'Bireyleşme', 'Kolektif Bilinçdışı'],
    historicalContext: 'Modern insanın ruhsal krizine derinlikli bir teşhis koyan eser.',
    passages: [
      { id: 'jng_1', difficulty: 'easy', quote: 'Dışarı bakan rüya görür, içeri bakan uyanır.' },
      { id: 'jng_2', difficulty: 'medium', quote: 'Kendi karanlığıyla yüzleşmeyen hiçbir insan aydınlığa ve olgunluğa ulaşamaz.' },
      { id: 'jng_3', difficulty: 'hard', quote: 'Bilinçdışını bilince dönüştürene kadar o hayatınızı yönetir ve siz ona kader dersiniz.' }
    ]
  },
  {
    id: 'sevme-sanati',
    title: 'Sevme Sanatı & Özgürlükten Kaçış',
    originalTitle: 'The Art of Loving',
    author: 'Erich Fromm',
    authorBio: 'Psikanalist, sosyolog ve hümanist filozof.',
    authorBirthDeath: '1900 - 1980',
    year: '1956',
    genre: 'psychology',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#E11D48] to-[#881337]',
    summary: 'Sevginin kendiliğinden oluşan bir heves değil; bilgi, özen, saygı ve sorumluluk gerektiren bilinçli bir sanat olduğunu açıklar.',
    keyThemes: ['Sevme Sanatı', 'Olgun Sevgi', 'Yalnızlığın Aşılması', 'Sorumluluk'],
    historicalContext: 'Milyonlarca okura gerçek sevginin anatomisini sunan psikoloji klasiği.',
    passages: [
      { id: 'frm_1', difficulty: 'easy', quote: 'Sevgi bir duygu değil, aktif bir sanattır.' },
      { id: 'frm_2', difficulty: 'medium', quote: 'İnsan kendi yalnızlığından korktuğu için özgürlüğünü otoriteye feda etmeye hazırdır.' }
    ]
  },
  {
    id: 'nietzsche-agladiginda',
    title: 'Nietzsche Ağladığında',
    originalTitle: 'When Nietzsche Wept',
    author: 'Irvin Yalom',
    authorBio: 'Varoluşçu psikoterapinin öncüsü, psikiyatrist ve edebiyatçı.',
    authorBirthDeath: '1931 - günümüz',
    year: '1992',
    genre: 'psychology',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#0369A1] to-[#0C4A6E]',
    summary: 'Josef Breuer ile Friedrich Nietzsche\'nin Viyana\'da buluşup psikanalizin doğumunu ve varoluşsal acıyı tedavi etme serüvenidir.',
    keyThemes: ['Varoluşsal Psikoterapi', 'Ümitsizlik ve Hakikat', 'İçsel İtiraflar'],
    historicalContext: 'Psikoloji ile felsefeyi edebiyat potasında eriten kült roman.',
    passages: [
      { id: 'ylm_1', difficulty: 'medium', quote: 'Ümit etmek, sadece gerçekleşmeyecek arzuların acısını uzatmaktan başka bir işe yaramaz.' }
    ]
  },

  // =========================================================================
  // 6. ŞİİR & DİZELER (POETRY)
  // =========================================================================
  {
    id: 'memleketimden-insan-manzaralari',
    title: 'Memleketimden İnsan Manzaraları',
    originalTitle: 'Memleketimden İnsan Manzaraları',
    author: 'Nazım Hikmet',
    authorBio: '20. yüzyıl dünya şiirinin büyük ustası, serbest nazmın devrimcisi.',
    authorBirthDeath: '1902 - 1963',
    year: '1966',
    genre: 'poetry',
    secondaryGenres: ['turkish', 'history'],
    coverBg: 'from-[#DC2626] to-[#991B1B]',
    summary: 'Haydarpaşa Garı\'ndan hareket eden bir trende Anadolu\'nun köylüsünü, mahkumunu, askerini ve insanını destanlaştıran anıtsal şiir ırmağıdır.',
    keyThemes: ['Halk Sevgisi', 'Hürriyet Tutkusu', 'Anadolu İnsanı', 'Lirik Destan'],
    historicalContext: 'Türk şiirinin en görkemli nehir destanı.',
    passages: [
      { id: 'nh_1', difficulty: 'easy', quote: 'Yaşamak bir ağaç gibi tek ve hür.' },
      { id: 'nh_2', difficulty: 'medium', quote: 'Dörtnala gelip Uzak Asya\'dan Akdeniz\'e bir kısrak başı gibi uzanan bu memleket bizim.' },
      { id: 'nh_3', difficulty: 'hard', quote: 'En güzel deniz henüz gidilmemiş olandır; en güzel çocuk henüz büyümedi; en güzel günlerimiz henüz yaşamadıklarımızdır.' }
    ]
  },
  {
    id: 'sevda-sozleri',
    title: 'Sevda Sözleri & Üvercinka',
    originalTitle: 'Sevda Sözleri',
    author: 'Cemal Süreya',
    authorBio: 'İkinci Yeni şiirinin öncüsü, Türkçenin en kıvrak ve duyarlı aşk şairi.',
    authorBirthDeath: '1931 - 1990',
    year: '1984',
    genre: 'poetry',
    secondaryGenres: ['turkish'],
    coverBg: 'from-[#E11D48] to-[#9F1239]',
    summary: 'Aşkı, yalnızlığı, bedeni ve gündelik hayatın mucizelerini benzersiz bir dil estetiğiyle buluşturan şiirlerin toplamıdır.',
    keyThemes: ['Erotizm ve Masumiyet', 'Dilin Estetiği', 'Hüzün', 'İkinci Yeni'],
    historicalContext: 'Çağdaş Türk şiirinin en çok ezberlenen dizelerinin kaynağı.',
    passages: [
      { id: 'cs_1', difficulty: 'easy', quote: 'Hayat kısa, kuşlar uçuyor.' },
      { id: 'cs_2', difficulty: 'medium', quote: 'Aklıma gelme diye kendime söz verdim; sonra her sokak başında sana rastladım.' },
      { id: 'cs_3', difficulty: 'hard', quote: 'Seni bir kere öpsem ikinin hatırı kalıyordu; iki kere öpsem üçün boynu bükük kalıyordu.' }
    ]
  },
  {
    id: 'goge-bakma-duragi',
    title: 'Göğe Bakma Durağı',
    originalTitle: 'Dünyanın En Güzel Arabistanı',
    author: 'Turgut Uyar',
    authorBio: 'İkinci Yeni\'nin en derin, hüzünlü ve varoluşsal şairlerinden biri.',
    authorBirthDeath: '1927 - 1985',
    year: '1959',
    genre: 'poetry',
    secondaryGenres: ['turkish'],
    coverBg: 'from-[#2563EB] to-[#1E40AF]',
    summary: 'Büyük kentin boğuntusundan kaçıp gökyüzüne sığınan iki sevgilinin saf sığınağını anlatan kült şiir.',
    keyThemes: ['Göğe Bakmak', 'Kentten Kaçış', 'Ortak Sığınak', 'Hüzün'],
    historicalContext: 'Modern Türk insanının yalnızlığına tercüman olan en popüler şiirlerden biri.',
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
    authorBio: 'Toplumcu gerçekçi Türk şiirinin en lirik ve gür sesli şairi.',
    authorBirthDeath: '1927 - 1991',
    year: '1968',
    genre: 'poetry',
    secondaryGenres: ['turkish'],
    coverBg: 'from-[#7F1D1D] to-[#450A0A]',
    summary: 'Hapisane duvarları arasından Anadolu\'ya ve sevgiliye duyulan yanardağ gibi tutkulu hasretin şiirleridir.',
    keyThemes: ['Hasret', 'Hapishane ve Direniş', 'Dağlar ve Sevda', 'Gür Ses'],
    historicalContext: 'Türk edebiyatında baskı rekorları kıran efsanevi şiir kitabı.',
    passages: [
      { id: 'aa_1', difficulty: 'easy', quote: 'Haberin var mı taş duvar; demir kapı, kör pencere?' },
      { id: 'aa_2', difficulty: 'hard', quote: 'Yokluğun cehennemin öbür adıdır; üşüyorum, kapama gözlerini.' }
    ]
  },
  {
    id: 'lavinia-yalnizlik',
    title: 'Lavinia & Yalnızlık Paylaşılmaz',
    originalTitle: 'Lavinia',
    author: 'Özdemir Asaf',
    authorBio: 'Kısa, çarpıcı ve felsefi aforizma şiirlerinin büyük ustası.',
    authorBirthDeath: '1923 - 1981',
    year: '1957',
    genre: 'poetry',
    secondaryGenres: ['turkish'],
    coverBg: 'from-[#4C1D95] to-[#2E1065]',
    summary: 'Aşkın çaresizliğini, gururu ve yalnızlığın tek başına taşınan ağırlığını anlatan unutulmaz dizelerdir.',
    keyThemes: ['Lavinia', 'Yalnızlık', 'Gurur ve Aşk'],
    historicalContext: 'Türkçenin en dokunaklı veda ve aşk şiirleri.',
    passages: [
      { id: 'oa_1', difficulty: 'easy', quote: 'Sana gitme demeyeceğim, ama gitme Lavinia.' },
      { id: 'oa_2', difficulty: 'medium', quote: 'Yalnızlık paylaşılsaydı adı yalnızlık olmazdı; o ancak tek başına taşınan bir yüktür.' }
    ]
  },
  {
    id: 'ben-sana-mecburum',
    title: 'Ben Sana Mecburum',
    originalTitle: 'Ben Sana Mecburum',
    author: 'Attila İlhan',
    authorBio: 'Mavi akımının öncüsü, sinemacı, romancı ve Türk şiirinin kaptanı.',
    authorBirthDeath: '1925 - 2005',
    year: '1960',
    genre: 'poetry',
    secondaryGenres: ['turkish'],
    coverBg: 'from-[#0F172A] to-[#1E293B]',
    summary: 'Yağmurlu geceler, ayrılıklar ve tutkulu bağlılıklarla örülü modern Türk şiirinin klasiklerindendir.',
    keyThemes: ['Mecburiyet', 'Gece ve Yağmur', 'Aşk ve Ayrılık'],
    historicalContext: 'Cumhuriyet dönemi Türk edebiyatının en popüler şiir kitaplarından biri.',
    passages: [
      { id: 'ai_1', difficulty: 'easy', quote: 'Ben sana mecburum bilemezsin, adını mıh gibi aklımda tutuyorum.' },
      { id: 'ai_2', difficulty: 'medium', quote: 'Ne vakit bir yaşamak düşünsem, bu kurtlar sofrasında akşam olur.' }
    ]
  },

  // =========================================================================
  // 7. MODERNİZM & BİLİNÇAKIŞI (MODERNISM)
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
    summary: 'İstemsiz hafızanın, bir madlen kekiyle canlanan çocukluk anılarının ve zamanı sanatla ebedileştirmenin 7 ciltlik anıtsal nehir romanıdır.',
    keyThemes: ['İstemsiz Hafıza', 'Zamanın Geri Kazanılması', 'Sanatın Ölümsüzlüğü', 'Sosyetik Çözümleme'],
    historicalContext: '20. yüzyıl roman sanatını baştan aşağıya değiştiren devasa başyapıt.',
    passages: [
      { id: 'pr_1', difficulty: 'easy', quote: 'Gerçek keşif yolculuğu yeni manzaralar aramakta değil, yeni gözlere sahip olmaktadır.' },
      { id: 'pr_2', difficulty: 'medium', quote: 'Bir anı, tadılan küçük bir madlen kekiyle zihinde yeniden canlanan koskoca bir dünyadır.' },
      { id: 'pr_3', difficulty: 'hard', quote: 'Zamanın akışı içinde unuttuğumuzu sandığımız duygular, en beklenmedik bir koku veya sesle capcanlı karşımıza dikilir.' },
      { id: 'pr_4', difficulty: 'legendary', quote: 'Sanat tek gerçek yaşamdır; çünkü sanatçının kendi gözleriyle dünyayı algılamasını ve bu benzersiz bakış açısını sonsuzluğa armağan etmesini sağlar.' }
    ]
  },
  {
    id: 'ulysses',
    title: 'Ulysses & Sanatçının Portresi',
    originalTitle: 'Ulysses',
    author: 'James Joyce',
    authorBio: 'Bilinçakışı tekniğinin ve modern edebiyatın en büyük İrlandalı dehası.',
    authorBirthDeath: '1882 - 1941',
    year: '1922',
    genre: 'modernist',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#0D9488] to-[#115E59]',
    summary: 'Leopold Bloom\'un Dublin\'de geçen 16 Haziran gününü Homeros\'un Odysseia destanına paralel bir bilinçakışıyla anlatan edebiyat anıtıdır.',
    keyThemes: ['Bilinçakışı', 'Gündelik Destan', 'Dil Oyunları', 'Tarihin Kabusu'],
    historicalContext: 'Dünya romanının en karmaşık ve en devrimci metni kabul edilir.',
    passages: [
      { id: 'jy_1', difficulty: 'easy', quote: 'Tarih, uyanmaya çalıştığım bir kabustur.' },
      { id: 'jy_2', difficulty: 'medium', quote: 'Ruhum, kendi kanatlarıyla gökyüzüne yükselmek için bütün zincirlerini kırmak zorundaydı.' },
      { id: 'jy_3', difficulty: 'hard', quote: 'Kar bütün İrlanda üzerine, yaşayanların ve ölülerin üzerine usul usul yağıyordu.' }
    ]
  },
  {
    id: 'ses-ve-ofke',
    title: 'Ses ve Öfke',
    originalTitle: 'The Sound and the Fury',
    author: 'William Faulkner',
    authorBio: 'Amerikan Güneyi\'nin trajedisini çok sesli bilinçakışıyla anlatan Nobel Ödüllü yazar.',
    authorBirthDeath: '1897 - 1962',
    year: '1929',
    genre: 'modernist',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#B45309] to-[#78350F]',
    summary: 'Compson ailesinin çöküşünü zihinsel engelli Benjy, intihara sürüklenen Quentin ve kin dolu Jason\'ın gözünden anlatan çok katmanlı başyapıttır.',
    keyThemes: ['Zamanın Parçalanması', 'Ailenin Çöküşü', 'Bellek ve Travma', 'Ses ve Öfke'],
    historicalContext: 'Modernist anlatı tekniklerinin zirve noktalarından biri.',
    passages: [
      { id: 'flk_1', difficulty: 'easy', quote: 'Geçmiş asla ölmez; hatta geçmiş bile değildir.' },
      { id: 'flk_2', difficulty: 'medium', quote: 'Kelimeler sadece bir boşluğu doldurmak için kullanılan çaresiz işaretlerdir.' },
      { id: 'tm_1', difficulty: 'hard', quote: 'Zaman algısı, insanın içinde bulunduğu mekanın genişliği ve ruhun dinginliği ile doğrudan ilişkilidir.' }
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
    authorBio: 'Deneme türünün kurucusu ve Rönesans şüpheciliğinin öncüsü.',
    authorBirthDeath: '1533 - 1592',
    year: '1580',
    genre: 'essay',
    secondaryGenres: ['philosophy', 'classics'],
    coverBg: 'from-[#854D0E] to-[#422006]',
    summary: 'Şatosunun kulesine çekilerek "Ben ne biliyorum?" sorusu etrafında insan doğasını, dostluğu, ölümü ve hayatı samimiyetle sorgulayan denemelerdir.',
    keyThemes: ['Kendini Tanımak', 'Şüphecilik', 'Ölümle Barışmak', 'İnsan Doğası'],
    historicalContext: 'Dünya edebiyatında deneme türünü başlatan başyapıt.',
    passages: [
      { id: 'mnt_1', difficulty: 'easy', quote: 'Kendimi arıyorum, bu yüzden kendimi yazıyorum.' },
      { id: 'mnt_2', difficulty: 'medium', quote: 'Dünyanın en yüksek tahtında bile otursanız, oturacağınız yer kendi kıçınızın üstüdür.' },
      { id: 'mnt_3', difficulty: 'hard', quote: 'Başkalarının bilgisiyle bilgili olabilsek bile, ancak kendi aklımızla bilge olabiliriz.' }
    ]
  },
  {
    id: 'curumenin-kitabi',
    title: 'Çürümenin Kitabı & Varolma Eğilimi',
    originalTitle: 'Précis de décomposition',
    author: 'Emil Cioran',
    authorBio: 'Rumen asıllı Fransız filozof ve aforizma ustası. Varoluşsal nihilizmin en lirik kalemi.',
    authorBirthDeath: '1911 - 1995',
    year: '1949',
    genre: 'essay',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#1F2937] to-[#030712]',
    summary: 'Varoluşun anlamsızlığını, uykusuzluğu, tarihin yanılsamalarını ve faniliği acımasız bir şiirsellikle ele alan aforizmalardır.',
    keyThemes: ['Çürüme ve Fanilik', 'Uykusuzluk ve Bilinç', 'Lirik Nihilizm', 'Kelimelerin İflası'],
    historicalContext: 'Modern çağın en keskin ve sarsıcı kötümserlik metinleri.',
    passages: [
      { id: 'cir_1', difficulty: 'easy', quote: 'Yalnızca acı çekenler gerçek anlamda uyanıktır.' },
      { id: 'cir_2', difficulty: 'medium', quote: 'Bütün kitaplar yazılmış birer mezar taşıdır; kelimeler ise içindeki ölü düşünceler.' },
      { id: 'cir_3', difficulty: 'hard', quote: 'Hiçbir şeye inanmamak, her şeye inanmaktan çok daha büyük bir disiplin ve cesaret gerektirir.' }
    ]
  },
  {
    id: 'bu-ulke',
    title: 'Bu Ülke & Jurnal',
    originalTitle: 'Bu Ülke',
    author: 'Cemil Meriç',
    authorBio: 'Türk düşünce dünyasının anıt ismi, mütercim, denemeci ve mütefekkir.',
    authorBirthDeath: '1916 - 1987',
    year: '1974',
    genre: 'essay',
    secondaryGenres: ['turkish', 'philosophy'],
    coverBg: 'from-[#78350F] to-[#451A03]',
    summary: 'Doğu ve Batı medeniyetlerini, aydınların köksüzlüğünü, dilin kutsallığını ve tefekkürün haysiyetini savunan başyapıttır.',
    keyThemes: ['Tefekkürün Haysiyeti', 'Dil ve Kültür', 'Doğu-Batı Muhasebesi', 'Kitap Sevgisi'],
    historicalContext: 'Türk aydınının kendi medeniyetiyle hesaplaştığı en temel metin.',
    passages: [
      { id: 'cm_1', difficulty: 'easy', quote: 'Kitaplar, insanlığın tek ve ebedi hafızasıdır.' },
      { id: 'cm_2', difficulty: 'medium', quote: 'Kelimeler kaybolunca düşünceler sığlaşır; dilini kaybeden bir millet hafızasını da kaybeder.' },
      { id: 'cm_3', difficulty: 'hard', quote: 'Düşünce şüpheyle başlar; şüphe etmeyen ve sorgulamayan bir zihin ancak bir esirdir.' }
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
    authorBio: 'Antik Çinli general, askeri stratejist ve filozof.',
    authorBirthDeath: 'MÖ 544 - MÖ 496',
    year: 'MÖ 5. yy',
    genre: 'strategy',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#991B1B] to-[#7F1D1D]',
    summary: 'Çatışmaları en az kayıpla ve mümkünse savaşmadan kazanmanın stratejik prensipleridir.',
    keyThemes: ['Savaşmadan Kazanmak', 'Stratejik Sabır', 'Düşmanı Tanımak', 'Esneklik'],
    historicalContext: '2500 yıldır dünya liderlerine ve komutanlara rehberlik eden strateji el kitabı.',
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
    authorBio: 'İtalyan Rönesansı\'nın siyaset teorisyeni ve tarihçisi.',
    authorBirthDeath: '1469 - 1527',
    year: '1532',
    genre: 'strategy',
    secondaryGenres: ['history'],
    coverBg: 'from-[#431407] to-[#1C1917]',
    summary: 'İktidarın nasıl kazanılacağını ve korunacağını ahlaki yanılsamalardan arındırarak anlatan siyaset bilimi manifestosu.',
    keyThemes: ['İktidar Sanatı', 'Tilki ve Aslan', 'Korku ve Sevgi', 'Realpolitik'],
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
    authorBio: 'Sosyolojinin, tarih felsefesinin ve iktisadın İslam dünyasındaki büyük kurucusu.',
    authorBirthDeath: '1332 - 1406',
    year: '1377',
    genre: 'strategy',
    secondaryGenres: ['history', 'philosophy'],
    coverBg: 'from-[#92400E] to-[#451A03]',
    summary: 'Uygarlıkların doğuşunu, yükselişini ve çöküşünü toplumsal dayanışma (asabiyet) ve coğrafi şartlar ekseninde açıklayan devasa eser.',
    keyThemes: ['Coğrafya Kaderdir', 'Asabiyet (Toplumsal Dayanışma)', 'Devletlerin Ömrü', 'Medeniyet Tarihi'],
    historicalContext: 'Tarih felsefesini ve bilimsel sosyolojiyi başlatan öncü eser.',
    passages: [
      { id: 'ibh_1', difficulty: 'medium', quote: 'Coğrafya kaderdir; toplumların karakterini ve geleceğini yaşadıkları toprak belirler.' },
      { id: 'ilb_1', difficulty: 'medium', quote: 'Cesur olun; hayatınızı başkalarının takdirine göre değil, kendi merakınıza göre kurun.' }
    ]
  },

  // =========================================================================
  // 10. DÜNYA TİYATROSU (DRAMA)
  // =========================================================================
  {
    id: 'hamlet-macbeth',
    title: 'Hamlet & Macbeth & Kral Lear',
    originalTitle: 'Hamlet / Macbeth / King Lear',
    author: 'William Shakespeare',
    authorBio: 'İngiliz tiyatrosunun ve dünya edebiyatının gelmiş geçmiş en büyük dramatik dehası.',
    authorBirthDeath: '1564 - 1616',
    year: '1603',
    genre: 'drama',
    secondaryGenres: ['classics', 'poetry'],
    coverBg: 'from-[#312E81] to-[#1E1B4B]',
    summary: 'İntikam ve şüphe arasında kıvranan Prens Hamlet ile iktidar hırsı yüzünden kanlı bir kabusa sürüklenen Macbeth\'in tragedyalarıdır.',
    keyThemes: ['Olmak ya da Olmamak', 'İktidar Hırsı', 'Vicdan ve Delilik', 'Hayatın Sahnesi'],
    historicalContext: 'İnsan psikolojisinin en karanlık odalarını aydınlatan dünya tiyatrosunun doruk noktaları.',
    passages: [
      { id: 'shk_1', difficulty: 'easy', quote: 'Olmak ya da olmamak, işte bütün mesele bu.' },
      { id: 'shk_2', difficulty: 'medium', quote: 'Hayat yürüyen bir gölgedir; sahnede çırpınan ve sonra unutulan zavallı bir aktördür.' },
      { id: 'shk_3', difficulty: 'hard', quote: 'Biz bu dünyaya delilerin körlere kılavuzluk ettiği bir tiyatro sahnesi olarak doğarız.' }
    ]
  },
  {
    id: 'faust-godot',
    title: 'Faust & Godot\'yu Beklerken',
    originalTitle: 'Faust / En attendant Godot',
    author: 'Goethe & Samuel Beckett',
    authorBio: 'Alman ve İrlandalı tiyatro dehaları.',
    authorBirthDeath: '1749 - 1832 / 1906 - 1989',
    year: '1808',
    genre: 'drama',
    secondaryGenres: ['classics', 'philosophy'],
    coverBg: 'from-[#7F1D1D] to-[#450A0A]',
    summary: 'Ruhunu şeytana satan Faust\'un ebedi hakikat arayışı ile hiçbir zaman gelmeyecek Godot\'yu bekleyen insanların absürd tiyatrosudur.',
    keyThemes: ['Ruhun Arayışı', 'Absürd Bekleyiş', 'Aramaktan Vazgeçmemek'],
    historicalContext: 'Klasik dramadan absürd tiyatroya dünya sahnesinin köşe taşları.',
    passages: [
      { id: 'gth_1', difficulty: 'easy', quote: 'Dur ey an, öyle güzelsin ki!' },
      { id: 'gth_2', difficulty: 'medium', quote: 'İnsan çabaladığı sürece yanılır; fakat aramaktan vazgeçmeyen kurtuluşa erer.' },
      { id: 'bck_1', difficulty: 'easy', quote: 'Hep denedin, hep yenildin. Olsun. Yine dene, yine yenil, daha iyi yenil.' }
    ]
  },

  // =========================================================================
  // 11. TASAVVUF & DOĞU (MYSTICISM)
  // =========================================================================
  {
    id: 'mesnevi',
    title: 'Mesnevi & Divan-ı Kebir',
    originalTitle: 'Mesnevi-i Manevi',
    author: 'Mevlana Celaleddin Rumi',
    authorBio: 'Evrensel sevgi, hoşgörü ve ilahi aşkın büyük Doğu bilgesi ve şairi.',
    authorBirthDeath: '1207 - 1273',
    year: '1273',
    genre: 'mysticism',
    secondaryGenres: ['poetry', 'philosophy'],
    coverBg: 'from-[#065F46] to-[#064E3B]',
    summary: 'Ney\'in kamışlıktan koparılış feryadıyla başlayan, insan ruhunun ilahi aslına dönme serüvenini hikayelerle anlatan aşk abidesidir.',
    keyThemes: ['İlahi Aşk', 'Yara ve Işık', 'Ney Metaforu', 'Gönül Gözü'],
    historicalContext: 'Doğu ve İslam tasavvufunun dünya çapında en çok okunan şiirsel şaheseri.',
    passages: [
      { id: 'rum_1', difficulty: 'easy', quote: 'Yara, ışığın sana sızdığı yerdir.' },
      { id: 'rum_2', difficulty: 'medium', quote: 'Dün akıllıydım, dünyayı değiştirmek istedim; bugün bilgeyim, kendimi değiştiriyorum.' },
      { id: 'rum_3', difficulty: 'hard', quote: 'Sen okyanustaki bir damla değilsin; sen tek bir damlanın içindeki koca bir okyanussun.' }
    ]
  },
  {
    id: 'kirk-kural-yunus-emre',
    title: 'Kırk Kural & Yunus Emre Divanı',
    originalTitle: 'Makalat / Risaletü\'n-Nushiyye',
    author: 'Şems-i Tebrizi & Yunus Emre',
    authorBio: 'Gönül erleri ve Anadolu hümanizminin kurucuları.',
    authorBirthDeath: '1185 - 1248 / 1238 - 1328',
    year: '1244',
    genre: 'mysticism',
    secondaryGenres: ['philosophy', 'poetry'],
    coverBg: 'from-[#9A3412] to-[#431407]',
    summary: 'Aşkın ve hakikatin kalpte bulunmasına dair kırk manevi ilke ve Yunus\'un duru Türkçeyle söylediği sevgi ilahileridir.',
    keyThemes: ['Gönül Aynası', 'İlim Kendin Bilmektir', 'Tevekkül'],
    historicalContext: 'Anadolu tasavvufunun temelleri.',
    passages: [
      { id: 'sms_1', difficulty: 'easy', quote: 'Hakk\'ı nerede ararsan ara, önce kalbinde bulmalısın.' },
      { id: 'sms_2', difficulty: 'medium', quote: 'Düzenim bozulur, hayatım altüst olur diye endişe etme; nereden bilirsin altının üstünden iyi olmadığını?' },
      { id: 'yn_1', difficulty: 'easy', quote: 'İlim ilim bilmektir, ilim kendin bilmektir.' }
    ]
  },
  {
    id: 'tao-te-ching-ermis',
    title: 'Tao Te Ching & Ermiş',
    originalTitle: 'Daodejing / The Prophet',
    author: 'Lao Tzu & Halil Cibran',
    authorBio: 'Doğu ve Akdeniz bilgeliğinin iki büyük sembolü.',
    authorBirthDeath: 'MÖ 6. yy / 1883 - 1931',
    year: 'MÖ 4. yy',
    genre: 'mysticism',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#047857] to-[#022C22]',
    summary: 'Doğanın akışına müdahale etmemeyi (Wu Wei) ve sevginin kendini tamamlamasını öğütleyen bilgelik metinleridir.',
    keyThemes: ['Wu Wei (Eylemsiz Eylem)', 'Suyun Gücü', 'Aşk ve Özgürlük'],
    historicalContext: 'Uzak Doğu ve Yakın Doğu felsefesinin temel taşları.',
    passages: [
      { id: 'lao_1', difficulty: 'easy', quote: 'Bin millik bir yolculuk tek bir adımla başlar.' },
      { id: 'lao_2', difficulty: 'medium', quote: 'Suyun yumuşaklığı ve sabrı, en sert kayaları bile zamanla aşındırmaya yeter.' },
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
    authorBio: 'Dünya sinema tarihinin en büyük şairi ve düşünürü. Solaris, Stalker ve Ayna\'nın yönetmeni.',
    authorBirthDeath: '1932 - 1986',
    year: '1986',
    genre: 'cinema_art',
    secondaryGenres: ['essay', 'philosophy'],
    coverBg: 'from-[#475569] to-[#1E293B]',
    summary: 'Sinemayı edebiyattan bağımsız bir "zaman heykeltıraşlığı" olarak tanımladığı manifestosudur.',
    keyThemes: ['Zaman Heykeltıraşlığı', 'Ruhsal Hakikat', 'Sanatçının Sorumluluğu'],
    historicalContext: 'Görsel sanatların felsefi derinliğini ortaya koyan başucu kitabı.',
    passages: [
      { id: 'trk_1', difficulty: 'easy', quote: 'Sanat, insanın mutlak hakikate ve mükemmelliğe duyduğu özlemdir.' },
      { id: 'trk_2', difficulty: 'medium', quote: 'Zamanı mühürlemek, anın içinde saklı olan sonsuz ruhu yakalamaktır.' },
      { id: 'trk_3', difficulty: 'hard', quote: 'Sanatçı olabilmek için insanın kendisini kurban etmeye ve hakikatin hizmetine adamaya hazır olması gerekir.' }
    ]
  },
  {
    id: 'gorme-bicimleri',
    title: 'Görme Biçimleri & Sanat Kuramı',
    originalTitle: 'Ways of Seeing / Das Kunstwerk',
    author: 'John Berger, Susan Sontag & Walter Benjamin',
    authorBio: 'Görsel kültürün ve modern sanat eleştirisinin dev teorisyenleri.',
    authorBirthDeath: '1926 - 2017 / 1933 - 2004',
    year: '1972',
    genre: 'cinema_art',
    secondaryGenres: ['essay'],
    coverBg: 'from-[#4F46E5] to-[#312E81]',
    summary: 'Görsellerin arkasındaki ideolojiyi, fotoğrafın faniliğe meydan okuyuşunu ve sanat eserinin çoğaltılma çağındaki aurasını çözümler.',
    keyThemes: ['Görsel İdeoloji', 'İmge ve Bakış', 'Aura Kaybı', 'Fotoğrafın Gücü'],
    historicalContext: 'Görsel okuryazarlık alanında devrim yaratan kuramsal metinler.',
    passages: [
      { id: 'brg_1', difficulty: 'easy', quote: 'Görmek, konuşmaktan önce gelmiştir.' },
      { id: 'brg_2', difficulty: 'medium', quote: 'Baktığımız nesne ile aramızdaki ilişki, aynı zamanda kendi bakış açımızın bir kurgusudur.' },
      { id: 'snt_1', difficulty: 'medium', quote: 'Fotoğraf çekmek, bir anı ebediyen sahiplenmek ve onun faniliğine meydan okumaktır.' },
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
    summary: 'Çöl gezegeni Arrakis\'in baharat kaynakları için verilen savaşta Paul Atreides\'in uyanış destanıdır.',
    keyThemes: ['Korkuyla Yüzleşmek', 'Ekoloji ve İnanç', 'Mesih Miti'],
    historicalContext: 'Bilimkurgunun Yüzüklerin Efendisi kabul edilen anıtsal eser.',
    passages: [
      { id: 'dn_1', difficulty: 'easy', quote: 'Korku aklın katilidir; korku mutlak yıkımı getiren küçük ölümdür.' },
      { id: 'dn_2', difficulty: 'easy', quote: 'Derin sularda boğulmamak için akıntıya karşı yüzmeyi öğrenmelisin.' },
      { id: 'dn_3', difficulty: 'medium', quote: 'Korkumla yüzleşeceğim; onun üzerimden ve içimden geçmesine izin vereceğim.' },
      { id: 'dn_4', difficulty: 'medium', quote: 'Korku geçtiğinde geriye hiçbir şey kalmayacak; yalnızca ben kalacağım.' },
      { id: 'dn_5', difficulty: 'hard', quote: 'Geleceği görmek bir lütuf değil, insanın sırtına yüklenmiş en ağır ve kaçınılmaz trajedidir.' }
    ]
  },
  {
    id: 'yuzuklerin-efendisi',
    title: 'Yüzüklerin Efendisi',
    originalTitle: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    authorBio: 'Oxford profesörü ve modern yüksek fantezi edebiyatının kurucusu.',
    authorBirthDeath: '1892 - 1973',
    year: '1954',
    genre: 'epic_fantasy',
    secondaryGenres: ['classics', 'mythology'],
    coverBg: 'from-[#065F46] to-[#064E3B]',
    summary: 'Tek Yüzük\'ü yok etmekle görevlendirilen Frodo Baggins ve Yüzük Kardeşliği\'nin karanlığa karşı direnişidir.',
    keyThemes: ['Dostluk ve Sadakat', 'Gücün Yozlaştırıcı Etkisi', 'Umut'],
    historicalContext: '20. yüzyıl dünya edebiyatına damga vuran epik efsane.',
    passages: [
      { id: 'tlk_1', difficulty: 'easy', quote: 'Gezginlerin hepsi kaybolmuş değildir.' },
      { id: 'tlk_2', difficulty: 'medium', quote: 'Karanlık ne kadar koyu olursa olsun, şafağın doğuşunu engelleyemez.' },
      { id: 'tlk_3', difficulty: 'hard', quote: 'Bize düşen tek şey, bize verilen zaman diliminde ne yapacağımıza karar vermektir.' }
    ]
  },
  {
    id: 'mulksuzler-yerdeniz',
    title: 'Mülksüzler & Yerdeniz Büyücüsü',
    originalTitle: 'The Dispossessed / A Wizard of Earthsea',
    author: 'Ursula K. Le Guin',
    authorBio: 'Felsefi bilimkurgu ve anarşist ütopyanın dev ismi.',
    authorBirthDeath: '1929 - 2018',
    year: '1974',
    genre: 'epic_fantasy',
    secondaryGenres: ['philosophy', 'dystopia'],
    coverBg: 'from-[#0891B2] to-[#164E63]',
    summary: 'Mülkiyetsiz Anarres gezegeni ile kapitalist Urras arasındaki fizikçi Shevek\'in duvarları yıkma mücadelesidir.',
    keyThemes: ['Mülksüzlük', 'Duvarlar ve Sınırlar', 'Denge ve Büyü'],
    historicalContext: 'Hem Hugo hem Nebula ödüllü kurucu ütopya metni.',
    passages: [
      { id: 'lgn_1', difficulty: 'easy', quote: 'Işığı görmek için karanlığın var olması gerekir.' },
      { id: 'lgn_2', difficulty: 'medium', quote: 'Bir duvar ördüğünde kimi içeride, kimi dışarıda bıraktığına dikkat etmelisin.' }
    ]
  },

  // =========================================================================
  // 14. MEKTUP & GÜNLÜK (LETTERS)
  // =========================================================================
  {
    id: 'milenaya-mektuplar',
    title: 'Milena\'ya Mektuplar & Babaya Mektup',
    originalTitle: 'Briefe an Milena / Brief an den Vater',
    author: 'Franz Kafka',
    authorBio: 'Prag doğumlu büyük yazar.',
    authorBirthDeath: '1883 - 1924',
    year: '1952',
    genre: 'letters',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#9A3412] to-[#7C2D12]',
    summary: 'Kafka\'nın Milena Jesenská\'ya yazdığı tutkulu, kırılgan ve trajik aşk mektuplarıdır.',
    keyThemes: ['Kırılgan Aşk', 'Uçurum Kenarı', 'İtiraf', 'Baba Otoritesi'],
    historicalContext: 'Dünya edebiyatının en sarsıcı aşk mektupları derlemesi.',
    passages: [
      { id: 'let_kfk_1', difficulty: 'easy', quote: 'Yanımda yürüyordun Milena, düşünsene, yanımdaydın.' },
      { id: 'let_kfk_2', difficulty: 'medium', quote: 'Seni sevmek, kendimi uçsuz bucaksız bir uçurumun kenarında bulmak gibi.' },
      { id: 'let_kfk_3', difficulty: 'hard', quote: 'Senin yanındayken konuşma yeteneğimi bütünüyle kaybediyordum çünkü senin otoriten karşısında her sözcük anlamsızlaşıyordu.' }
    ]
  },
  {
    id: 'kendine-ait-bir-oda',
    title: 'Kendine Ait Bir Oda & Günlükler',
    originalTitle: 'A Room of One\'s Own / The Diary of a Young Girl',
    author: 'Virginia Woolf & Anne Frank',
    authorBio: 'Modernist feminist yazar ve trajik Holokost günlüğünün yazarı.',
    authorBirthDeath: '1882 - 1941 / 1929 - 1945',
    year: '1929',
    genre: 'letters',
    secondaryGenres: ['essay', 'modernist'],
    coverBg: 'from-[#6D28D9] to-[#4C1D95]',
    summary: 'Kadınların edebiyatta var olabilmesi için kilitli bir odaya sahip olması gerektiğini savunan manifesto ve Anne Frank\'ın umut günlüğüdür.',
    keyThemes: ['Kendine Ait Bir Oda', 'Kadın ve Edebiyat', 'Umut ve Masumiyet'],
    historicalContext: 'Feminist edebiyat eleştirisinin ve 20. yüzyıl insanlık hafızasının kurucu eserleri.',
    passages: [
      { id: 'wlf_1', difficulty: 'easy', quote: 'Para kazanın ve kendinize ait bir oda edinin.' },
      { id: 'wlf_2', difficulty: 'medium', quote: 'Kelimeler bizi birbirimize bağlayan tek köprüdür.' },
      { id: 'wlf_3', difficulty: 'hard', quote: 'Bir kadın eğer kurmaca yazacaksa paraya ve kendine ait kilitli bir odaya sahip olmalıdır.' },
      { id: 'frk_1', difficulty: 'easy', quote: 'Her şeye rağmen insanların kalplerinin hala iyi olduğuna inanıyorum.' }
    ]
  },

  // =========================================================================
  // 15. DOĞA & İNZİVA (NATURE)
  // =========================================================================
  {
    id: 'walden',
    title: 'Walden / Ormanda Yaşam & Doğa',
    originalTitle: 'Walden; or, Life in the Woods / Nature',
    author: 'Henry David Thoreau & Ralph Waldo Emerson',
    authorBio: 'Amerikan transandantalistleri, doğa filozofları ve sade yaşamın öncüleri.',
    authorBirthDeath: '1817 - 1862 / 1803 - 1882',
    year: '1854',
    genre: 'nature',
    secondaryGenres: ['philosophy', 'essay'],
    coverBg: 'from-[#15803D] to-[#14532D]',
    summary: 'Thoreau\'nun Walden Gölü kıyısındaki kulübesinde sade, bilinçli ve doğayla uyumlu yaşam deneyimidir.',
    keyThemes: ['Sadelik', 'Bilinçli Yaşam', 'Doğanın Saflığı', 'Kendine Güven'],
    historicalContext: 'Modern çevre hareketinin ve sade yaşam felsefesinin kurucu klasiği.',
    passages: [
      { id: 'thr_1', difficulty: 'easy', quote: 'Ormana gittim çünkü bilinçli yaşamak istiyordum.' },
      { id: 'thr_2', difficulty: 'medium', quote: 'Basitleştirin, hayatınızı basitleştirin; üç öğün yerine tek öğün yiyin.' },
      { id: 'thr_3', difficulty: 'hard', quote: 'İnsanların büyük çoğunluğu sessiz bir çaresizlik içinde yaşar ve mezara gider.' },
      { id: 'emr_1', difficulty: 'easy', quote: 'Kendine inanmak, başarının ilk sırrıdır.' },
      { id: 'emr_2', difficulty: 'medium', quote: 'Ormanlarda insan ebedi bir gençliğe ve dinginliğe kavuşur.' }
    ]
  },
  {
    id: 'moby-dick',
    title: 'Moby Dick & Vahşetin Çağrısı',
    originalTitle: 'Moby-Dick / The Call of the Wild',
    author: 'Herman Melville & Jack London',
    authorBio: 'Bilinmeyenin peşindeki insan azmini ve doğanın vahşi çağrısını anlatan büyük yazarlar.',
    authorBirthDeath: '1819 - 1891 / 1876 - 1916',
    year: '1851',
    genre: 'nature',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#0369A1] to-[#082F49]',
    summary: 'Kaptan Ahab\'ın Beyaz Balina peşindeki saplantılı tutkusu ve Buck ile Martin Eden\'in doğa karşısındaki sınavıdır.',
    keyThemes: ['Bilinmeyenin Peşinde', 'Doğanın Yenilmezliği', 'İrade'],
    historicalContext: 'Amerikan edebiyatının en derin deniz ve insan destanları.',
    passages: [
      { id: 'nat_1', difficulty: 'easy', quote: 'Doğa hiçbir zaman insan yapımı kanunlara boyun eğmez.' },
      { id: 'nat_2', difficulty: 'medium', quote: 'Bana sadece bir kelime söyleyin: İnsan neden hep bilinmeyenin peşinden koşar?' },
      { id: 'nat_3', difficulty: 'medium', quote: 'Yaşamak istemek, sadece kitapların vadettiği güzellikleri dünyada bulabilmektir.' }
    ]
  },

  // =========================================================================
  // 16. MİTOLOJİ & BÜYÜLÜ GERÇEKÇİLİK (MYTHOLOGY)
  // =========================================================================
  {
    id: 'ilyada-odysseia',
    title: 'İlyada & Odysseia',
    originalTitle: 'Iliad & Odyssey',
    author: 'Homeros',
    authorBio: 'Antik Yunan epik şiirinin ve Batı edebiyatının kurucu ozanı.',
    authorBirthDeath: 'MÖ 8. yy',
    year: 'MÖ 8. yy',
    genre: 'mythology',
    secondaryGenres: ['classics', 'poetry'],
    coverBg: 'from-[#B45309] to-[#78350F]',
    summary: 'Truva Savaşı\'nın yıkıcı öfkesini ve kurnaz Odysseus\'un İthaka\'ya 10 yıl süren eve dönüş yolculuğunu anlatan kurucu destanlardır.',
    keyThemes: ['Kahramanlık ve Öfke', 'Eve Dönüş Yolculuğu', 'Kader ve Tanrılar'],
    historicalContext: 'Batı edebiyatının başlangıç noktası.',
    passages: [
      { id: 'hom_1', difficulty: 'easy', quote: 'Öfkeyi söyle tanrıça, Akhilleus\'un yıkıcı öfkesini.' },
      { id: 'hom_2', difficulty: 'medium', quote: 'Kaderin ağları sabırla örülür ve eninde sonunda hak yerini bulur.' }
    ]
  },
  {
    id: 'ilahi-komedya',
    title: 'İlahi Komedya',
    originalTitle: 'La Divina Commedia',
    author: 'Dante Alighieri',
    authorBio: 'İtalyan edebiyatının babası ve Rönesans şafağının şairi.',
    authorBirthDeath: '1265 - 1321',
    year: '1320',
    genre: 'mythology',
    secondaryGenres: ['classics', 'poetry'],
    coverBg: 'from-[#7F1D1D] to-[#450A0A]',
    summary: 'Dante\'nin şair Vergilius rehberliğinde Cehennem, Araf ve Cennet katlarına yaptığı ruhani yolculuktur.',
    keyThemes: ['Ruhun Arınması', 'İlahi Adalet', 'Aşk ve Kurtuluş'],
    historicalContext: 'Ortaçağ teolojisini ve insan ruhunu özetleyen anıt eser.',
    passages: [
      { id: 'dnt_1', difficulty: 'easy', quote: 'Buraya girenler, her türlü umudu geride bıraksın.' },
      { id: 'dnt_2', difficulty: 'hard', quote: 'Hayat yolculuğumuzun ortasında kendimi karanlık bir ormanda buldum çünkü doğru yolu kaybetmiştim.' }
    ]
  },
  {
    id: 'ficciones-alef',
    title: 'Ficciones / Kurgular, Alef & Görünmez Kentler',
    originalTitle: 'Ficciones / El Aleph / Le città invisibili',
    author: 'Jorge Luis Borges, Italo Calvino & Haruki Murakami',
    authorBio: 'Büyülü gerçekçilik, labirentler ve düşsel kentlerin büyük mimarları.',
    authorBirthDeath: '1899 - 1986 / 1923 - 1985 / 1949 - günümüz',
    year: '1944',
    genre: 'mythology',
    secondaryGenres: ['modernist', 'philosophy'],
    coverBg: 'from-[#0369A1] to-[#0C4A6E]',
    summary: 'Babil Kitaplığı, sonsuz labirentler, mekanın tüm noktalarını içeren Alef ve Calvino\'nun düşsel kentleridir.',
    keyThemes: ['Sonsuz Kütüphane', 'Labirentler', 'Zamanın Çatallanan Yolları', 'Alef'],
    historicalContext: 'Büyülü gerçekçilik ve postmodern edebiyatın kurucu başyapıtları.',
    passages: [
      { id: 'brg_1', difficulty: 'medium', quote: 'Evren, başkalarının kütüphane adını verdiği sonsuz bir labirenttir.' },
      { id: 'brg_2', difficulty: 'hard', quote: 'Alef, mekanın bütün noktalarını aynı anda içinde barındıran tek bir gizemli noktadır.' },
      { id: 'clv_1', difficulty: 'medium', quote: 'Bir kenti anlamak, orada yaşayanların hayallerini ve özlemlerini dinlemektir.' },
      { id: 'mrk_1', difficulty: 'medium', quote: 'Bazen kader küçük bir kum fırtınası gibidir; kaçtıkça seni içine çeker.' }
    ]
  },

  // =========================================================================
  // 17. POLİSİYE & GİZEM (MYSTERY)
  // =========================================================================
  {
    id: 'sherlock-holmes',
    title: 'Sherlock Holmes: Dörtlerin İmzası & Kızıl Dosya',
    originalTitle: 'Sherlock Holmes Canon',
    author: 'Arthur Conan Doyle',
    authorBio: 'Dedektiflik kurgusunun gelmiş geçmiş en ünlü karakterinin yaratıcısı.',
    authorBirthDeath: '1859 - 1930',
    year: '1887',
    genre: 'mystery',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#334155] to-[#0F172A]',
    summary: 'Dedüksiyon (tümdengelim) mantığı ve keskin gözlem gücüyle çözümsüz gibi duran suçları aydınlatan Sherlock Holmes maceralarıdır.',
    keyThemes: ['Tümdengelim Mantığı', 'Keskin Gözlem', 'Gizem Çözümü'],
    historicalContext: 'Polisiye türünün dünyadaki altın standardı.',
    passages: [
      { id: 'sh_1', difficulty: 'easy', quote: 'İmkansızı elediğinde geriye kalan ne kadar olasılıksız olursa olsun gerçektir.' },
      { id: 'sh_2', difficulty: 'medium', quote: 'Sen görüyorsun ama gözlemlemiyorsun; ayrım işte tam olarak buradadır.' }
    ]
  },
  {
    id: 'dogu-ekspresinde-cinayet',
    title: 'Doğu Ekspresinde Cinayet & On Küçük Zenci',
    originalTitle: 'Murder on the Orient Express / And Then There Were None',
    author: 'Agatha Christie',
    authorBio: 'Polisiye kurgunun kraliçesi, Hercule Poirot ve Miss Marple\'ın yaratıcısı.',
    authorBirthDeath: '1890 - 1976',
    year: '1934',
    genre: 'mystery',
    secondaryGenres: ['classics'],
    coverBg: 'from-[#831843] to-[#500724]',
    summary: 'Karlar altında mahsur kalan Doğu Ekspresi treninde işlenen kusursuz cinayeti çözen Belçikalı dedektif Hercule Poirot\'nun hikayesidir.',
    keyThemes: ['Gri Hücreler', 'Vicdan ve Adalet', 'Kusursuz Plan'],
    historicalContext: 'Tüm zamanların en ünlü ve şaşırtıcı dedektiflik romanı.',
    passages: [
      { id: 'ac_1', difficulty: 'easy', quote: 'İmkansız olan şey gerçekleşemez; öyleyse görünen imkansızlık bir yanılsamadır.' },
      { id: 'ac_2', difficulty: 'medium', quote: 'Vicdan azabı, insanın kendi içinde taşıdığı en acımasız cellattır.' },
      { id: 'poe_1', difficulty: 'easy', quote: 'Gözlerimin gördüğü her şey sadece bir düşün içindeki düşten ibaretti.' },
      { id: 'poe_2', difficulty: 'hard', quote: 'Zihinsel çözümleme yeteneği, sıradan gözlem gücünden çok daha derin ve gizemli bir sanattır.' }
    ]
  },

  // =========================================================================
  // 18. BİYOGRAFİ & PORTRE (BIOGRAPHY)
  // =========================================================================
  {
    id: 'yildizin-parladigi-anlar',
    title: 'Yıldızın Parladığı Anlar & Dünün Dünyası',
    originalTitle: 'Sternstunden der Menschheit / Die Welt von Gestern',
    author: 'Stefan Zweig & Plütarkhos',
    authorBio: 'İnsan psikolojisini ve tarihi anları büyüleyici bir dille anlatan büyük biyografi ustaları.',
    authorBirthDeath: '1881 - 1942 / MS 46 - MS 120',
    year: '1927',
    genre: 'biography',
    secondaryGenres: ['history', 'classics'],
    coverBg: 'from-[#1E3A8A] to-[#1E1B4B]',
    summary: 'Tarihin akışını birkaç dakikada değiştiren dramatik dönüm noktalarını ve yıkılan hümanist Avrupa\'nın yasını tutan otobiyografidir.',
    keyThemes: ['Tarihin Kırılma Anları', 'Hümanizm', 'Yıkılan Avrupa', 'Karakter'],
    historicalContext: 'Biyografi ve tarihi anlatımın edebiyattaki en lirik zirvesi.',
    passages: [
      { id: 'zwg_1', difficulty: 'easy', quote: 'Tarih, ancak nadir anlarda bir kahramanın eline kaderi teslim eder.' },
      { id: 'zwg_2', difficulty: 'medium', quote: 'Büyük bir ruha sahip olmak, hayatın bütün fırtınalarına karşı tek başına direnmektir.' },
      { id: 'zwg_3', difficulty: 'hard', quote: 'Bizler hiçbir kuşağın yaşamadığı kadar büyük bir çöküşe ve felakete tanıklık ettik.' },
      { id: 'plt_1', difficulty: 'medium', quote: 'Bir insanın karakteri, en büyük başarılarından çok en küçük alışkanlıklarında gizlidir.' }
    ]
  },

  // =========================================================================
  // 19. MİZAH & HİCİV (SATIRE & WIT)
  // =========================================================================
  {
    id: 'zubuk',
    title: 'Zübük - Kağnı Gölgesindeki İt & Yaşar Ne Yaşar',
    originalTitle: 'Zübük / Yaşar Ne Yaşar Ne Yaşamaz',
    author: 'Aziz Nesin',
    authorBio: 'Türk mizah edebiyatının uluslararası üne sahip en büyük ustası.',
    authorBirthDeath: '1915 - 1995',
    year: '1961',
    genre: 'satire',
    secondaryGenres: ['turkish'],
    coverBg: 'from-[#B45309] to-[#713F12]',
    summary: 'İbrahim Zübükzade\'nin yükselişi üzerinden toplumun sahtekarlığa nasıl çanak tuttuğunu ve bürokrasinin absürdlüğünü anlatan ölümsüz taşlamalardır.',
    keyThemes: ['Zübükizm', 'Siyasi İkiyüzlülük', 'Toplumsal Taşlama', 'Bürokrasi Çıkmazı'],
    historicalContext: 'Türk siyasi diline "Zübük" kavramını kazandıran kült eser.',
    passages: [
      { id: 'zb_1', difficulty: 'easy', quote: 'Gülmek, insanın çaresizliğe karşı bulduğu en asil silahtır.' },
      { id: 'zb_2', difficulty: 'easy', quote: 'Bu memlekette dürüst olmak suç, kurnaz olmak marifet sayılır.' },
      { id: 'zb_3', difficulty: 'medium', quote: 'Resmi evraklarda varsan varsın, yoksan nefes alsan bile yaşamazsın.' },
      { id: 'zb_4', difficulty: 'medium', quote: 'Kabahat tek başına Zübük\'te değil; onu baş tacı eden bizim kendi saflığımızdadır.' },
      { id: 'zb_5', difficulty: 'hard', quote: 'Biz kendi menfaatimiz için kuralları çiğnemeye razı olduğumuz sürece, başımıza yeni Zübüklerin geçmesi kaçınılmazdır.' }
    ]
  },
  {
    id: 'candide',
    title: 'Candide ya da İyimserlik & Huckleberry Finn',
    originalTitle: 'Candide / Adventures of Huckleberry Finn',
    author: 'Voltaire & Mark Twain',
    authorBio: 'Aydınlanma çağının ve modern Amerikan mizahının en büyük hiciv ustaları.',
    authorBirthDeath: '1694 - 1778 / 1835 - 1910',
    year: '1759',
    genre: 'satire',
    secondaryGenres: ['philosophy', 'classics'],
    coverBg: 'from-[#CA8A04] to-[#854D0E]',
    summary: 'Saf Candide\'in başına gelen felaketler zinciri ve Huck Finn\'in Mississippi Nehri boyunca süren özgürlük ve sahtekarlık taşlamasıdır.',
    keyThemes: ['Kör İyimserliğin İflası', 'Bahçemizi Yetiştirmek', 'Kahkahanın Gücü', 'Felsefi İroni'],
    historicalContext: 'Aydınlanma ve modern hicvin en büyük şaheserleri.',
    passages: [
      { id: 'cnd_1', difficulty: 'easy', quote: 'Bahçemizi yetiştirmek zorundayız.' },
      { id: 'cnd_2', difficulty: 'easy', quote: 'Çalışmak bizi üç büyük beladan kurtarır: can sıkıntısı, ahlaksızlık ve yoksulluk.' },
      { id: 'cnd_3', difficulty: 'medium', quote: 'Her şeyin en iyi olduğu bir dünyada yaşıyorsak, diğer dünyalar kimbilir nasıldır?' },
      { id: 'cnd_4', difficulty: 'hard', quote: 'Dünyadaki kötülükleri ve felaketleri süslü teorilerle aklamaya çalışmak, aklın kendini kandırmasından başka bir şey değildir.' },
      { id: 'mt_1', difficulty: 'easy', quote: 'Doğruyu söylerseniz hiçbir şeyi hatırlamak zorunda kalmazsınız.' },
      { id: 'mt_2', difficulty: 'medium', quote: 'İnsanın en güçlü silahı kahkahadır; onun karşısında hiçbir zorbalık dayanamaz.' }
    ]
  },

  // =========================================================================
  // 20. BİLİM & EVREN (SCIENCE)
  // =========================================================================
  {
    id: 'kozmos',
    title: 'Kozmos & Soluk Mavi Nokta',
    originalTitle: 'Cosmos / Pale Blue Dot',
    author: 'Carl Sagan',
    authorBio: 'Gökbilimci, astrofizikçi ve bilimin şiirsel anlatıcısı.',
    authorBirthDeath: '1934 - 1996',
    year: '1980',
    genre: 'science',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#0284C7] to-[#082F49]',
    summary: 'Evrenin 13.8 milyar yıllık tarihini, yıldız tozundan evrilen insan bilincini ve Dünya\'nın evrendeki kırılgan yerini anlatan bilim şaheseridir.',
    keyThemes: ['Yıldız Tozu', 'Soluk Mavi Nokta', 'Evrenin Merakı', 'Eleştirel Düşünce'],
    historicalContext: 'Milyonlarca insana bilim sevgisi aşılayan en etkili astronomi kitabı.',
    passages: [
      { id: 'sgn_1', difficulty: 'easy', quote: 'Bizler yıldız tozuyuz; evren kendi kendini anlamaya çalışan bir bilinçtir.' },
      { id: 'sgn_2', difficulty: 'easy', quote: 'Bir yerlerde olağanüstü bir şey keşfedilmeyi bekliyor.' },
      { id: 'sgn_3', difficulty: 'medium', quote: 'Bütün tarihimiz ve sevinçlerimiz uzayın sonsuz karanlığında asılı duran o toz zerresinde yaşandı.' },
      { id: 'sgn_4', difficulty: 'hard', quote: 'Bilim sadece bir bilgi bütünü değil, aynı zamanda düşünmenin ve sorgulamanın tek güvenilir yoludur.' },
      { id: 'sgn_5', difficulty: 'legendary', quote: 'Evrenin enginliği karşısında yalnızlığımız bir lanet değil; birbirimize daha fazla sarılmamız ve gezegenimizi korumamız için bir çağrıdır.' }
    ]
  },
  {
    id: 'zamanin-kisa-tarihi',
    title: 'Zamanın Kısa Tarihi & Zamanın Düzeni',
    originalTitle: 'A Brief History of Time / The Order of Time',
    author: 'Stephen Hawking, Richard Feynman & Carlo Rovelli',
    authorBio: 'Kozmoloji, kuantum mekaniği ve kuantum çekim kuramının büyük fizikçileri.',
    authorBirthDeath: '1942 - 2018 / 1918 - 1988 / 1956 - günümüz',
    year: '1988',
    genre: 'science',
    secondaryGenres: ['philosophy'],
    coverBg: 'from-[#312E81] to-[#0F172A]',
    summary: 'Büyük Patlama\'dan kara deliklere, zamanın akışının göreliliğinden evrenin sınırlarına kadar kozmolojinin en büyük sırlarıdır.',
    keyThemes: ['Zamanın Doğası', 'Kuantum ve Kütleçekim', 'Evrenin Başlangıcı', 'Kendini Kandırmamak'],
    historicalContext: 'Modern teorik fiziğin en çok okunan popüler bilim kitapları.',
    passages: [
      { id: 'hwk_1', difficulty: 'easy', quote: 'Zeka, değişime uyum sağlayabilme yeteneğidir.' },
      { id: 'rvl_1', difficulty: 'medium', quote: 'Zaman olaylardan bağımsız akmaz; nesneler arasındaki ilişkilerin ta kendisidir.' },
      { id: 'fyn_1', difficulty: 'medium', quote: 'En önemli ilke kendini kandırmamaktır; çünkü kandırılması en kolay kişi kendinsiniz.' }
    ]
  }
];
