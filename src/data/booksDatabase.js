// Master Books Database (LibrisMind Literary Corpus)
// Comprehensive catalog containing EVERY book referenced in the project with full reviews, summaries, bios, and rich passage pools

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
    title: 'Ahlak Mektupları',
    originalTitle: 'Epistulae Morales ad Lucilium',
    author: 'Seneca',
    authorBio: 'Romalı devlet adamı, hatip, tragedya yazarı ve Stoacı felsefenin en büyük temsilcilerinden biri.',
    authorBirthDeath: 'MÖ 4 - MS 65',
    year: 'MS 65',
    genre: 'philosophy',
    secondaryGenres: ['letters', 'classics'],
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
    title: 'Düşünceler ve Sohbetler',
    originalTitle: 'Diatribai (Διατριβαί)',
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
    title: 'Savaş ve Barış',
    originalTitle: 'Voyna i Mir',
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
    title: 'Sefiller',
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
  // 5. MİZAH & HİCİV (SATIRE & WIT)
  // =========================================================================
  {
    id: 'zubuk',
    title: 'Zübük - Kağnı Gölgesindeki İt',
    originalTitle: 'Zübük',
    author: 'Aziz Nesin',
    authorBio: 'Türk mizah edebiyatının uluslararası üne sahip en büyük ustası.',
    authorBirthDeath: '1915 - 1995',
    year: '1961',
    genre: 'satire',
    secondaryGenres: ['turkish'],
    coverBg: 'from-[#B45309] to-[#713F12]',
    summary: 'İbrahim Zübükzade\'nin yükselişi üzerinden toplumun sahtekarlığa nasıl çanak tuttuğunu anlatan ölümsüz siyasi taşlama.',
    keyThemes: ['Zübükizm', 'Siyasi İkiyüzlülük', 'Toplumsal Taşlama', 'Kara Mizah'],
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
    title: 'Candide ya da İyimserlik',
    originalTitle: 'Candide, ou l\'Optimisme',
    author: 'Voltaire',
    authorBio: 'Fransız Aydınlanması\'nın en keskin zekalı filozofu ve hiciv ustası.',
    authorBirthDeath: '1694 - 1778',
    year: '1759',
    genre: 'satire',
    secondaryGenres: ['philosophy', 'classics'],
    coverBg: 'from-[#CA8A04] to-[#854D0E]',
    summary: 'Saf Candide\'in başına gelen felaketler zinciri ve sonunda "bahçemizi yetiştirmeliyiz" bilgelik sonucuna varmasıdır.',
    keyThemes: ['Kör İyimserliğin İflası', 'Bahçemizi Yetiştirmek', 'Felsefi İroni'],
    historicalContext: 'Aydınlanma çağının kilise dogmalarını yıkan en ünlü felsefi taşlaması.',
    passages: [
      { id: 'cnd_1', difficulty: 'easy', quote: 'Bahçemizi yetiştirmek zorundayız.' },
      { id: 'cnd_2', difficulty: 'easy', quote: 'Çalışmak bizi üç büyük beladan kurtarır: can sıkıntısı, ahlaksızlık ve yoksulluk.' },
      { id: 'cnd_3', difficulty: 'medium', quote: 'Her şeyin en iyi olduğu bir dünyada yaşıyorsak, diğer dünyalar kimbilir nasıldır?' },
      { id: 'cnd_4', difficulty: 'hard', quote: 'Dünyadaki kötülükleri ve felaketleri süslü teorilerle aklamaya çalışmak, aklın kendini kandırmasından başka bir şey değildir.' }
    ]
  },

  // =========================================================================
  // 6. DİĞER KÜLT BAŞYAPITLAR (DUNE, KOZMOS, ZWEIG, vb.)
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
  }
];
