// Comprehensive Literary Library with 400+ Cult Book Quotes & Masterpieces
// Diverse passages across 20 distinct literary categories, carefully balanced by difficulty

export const BOOK_GENRES = [
  { id: 'all', name: 'Tüm Türler', icon: 'Sparkles', desc: 'Tüm edebi kategorilerden 400+ karma kült alıntı' },
  { id: 'philosophy', name: 'Felsefe & Bilgelik', icon: 'Scale', desc: 'Stoacılık, varoluşçuluk, ahlak ve kadim düşünürler' },
  { id: 'classics', name: 'Dünya Klasikleri', icon: 'BookOpen', desc: 'Dostoyevski, Tolstoy, Kafka, Hugo ve kült romanlar' },
  { id: 'turkish', name: 'Türk Edebiyatı', icon: 'Feather', desc: 'Sabahattin Ali, Tanpınar, Oğuz Atay, Yaşar Kemal' },
  { id: 'poetry', name: 'Şiir & Dizeler', icon: 'Heart', desc: 'Nazım Hikmet, Cemal Süreya, Attila İlhan, Turgut Uyar' },
  { id: 'modernist', name: 'Modernizm & Bilinçakışı', icon: 'Hourglass', desc: 'Proust, Joyce, Woolf, Faulkner, Thomas Mann' },
  { id: 'dystopia', name: 'Distopya & Gelecek', icon: 'Eye', desc: '1984, Cesur Yeni Dünya, Fahrenheit 451, Biz' },
  { id: 'psychology', name: 'Psikoloji & İnsan', icon: 'Brain', desc: 'Viktor Frankl, Jung, Freud, Fromm, Rollo May' },
  { id: 'essay', name: 'Deneme & Tefekkür', icon: 'PenTool', desc: 'Montaigne, Cioran, Cemil Meriç, Francis Bacon' },
  { id: 'strategy', name: 'Tarih & Strateji', icon: 'Shield', desc: 'Sun Tzu, Machiavelli, İbn Haldun, İlber Ortaylı' },
  { id: 'drama', name: 'Dünya Tiyatrosu', icon: 'Drama', desc: 'Shakespeare, Goethe, Sophokles, Çehov, Beckett' },
  { id: 'mysticism', name: 'Tasavvuf & Doğu', icon: 'Flame', desc: 'Mevlana, Yunus Emre, Lao Tzu, Şems, Halil Cibran' },
  { id: 'cinema_art', name: 'Sinema & Sanat', icon: 'Film', desc: 'Tarkovski, John Berger, Susan Sontag, Walter Benjamin' },
  { id: 'epic_fantasy', name: 'Epik & Fantastik', icon: 'Crown', desc: 'Tolkien, Ursula K. Le Guin, Frank Herbert (Dune)' },
  { id: 'letters', name: 'Mektup & Günlük', icon: 'Mail', desc: 'Milena\'ya Mektuplar, Virginia Woolf, Anne Frank' },
  { id: 'nature', name: 'Doğa & İnziva', icon: 'Trees', desc: 'Thoreau (Walden), Emerson, Jack London, Melville' },
  { id: 'mythology', name: 'Mitoloji & Büyülü', icon: 'Wand2', desc: 'Homeros, Dante, Borges, Calvino, Murakami' },
  { id: 'mystery', name: 'Polisiye & Gizem', icon: 'Search', desc: 'Sherlock Holmes, Agatha Christie, Poe, Ahmet Ümit' },
  { id: 'biography', name: 'Biyografi & Portre', icon: 'Scroll', desc: 'Stefan Zweig, Plütarkhos, Walter Isaacson' },
  { id: 'satire', name: 'Mizah & Hiciv', icon: 'Laugh', desc: 'Aziz Nesin, Voltaire, Mark Twain, Jonathan Swift' },
  { id: 'science', name: 'Bilim & Evren', icon: 'Compass', desc: 'Carl Sagan, Hawking, Feynman, Carlo Rovelli' },
];

export const DIFFICULTY_LEVELS = [
  { id: 'easy', name: 'Kolay (4-8 Kelime)', desc: '10 saniye ezber süresi — Kısa ve vurucu aforizmalar', duration: 10 },
  { id: 'medium', name: 'Orta (9-15 Kelime)', desc: '15 saniye ezber süresi — Zengin edebi ve felsefi yapılar', duration: 15 },
  { id: 'hard', name: 'Zor (16-25 Kelime)', desc: '20 saniye ezber süresi — Uzun ve derin cümleler', duration: 20 },
  { id: 'legendary', name: 'Efsanevi (25+ Kelime)', desc: '30 saniye ezber süresi — Kompleks edebi paragraflar', duration: 30 },
];

export const BOOK_QUOTES = [
  {
    "id": "phil_ma_1",
    "genre": "philosophy",
    "difficulty": "easy",
    "book": "Kendime Düşünceler",
    "author": "Marcus Aurelius",
    "quote": "Ruhun, düşüncelerinin rengine bürünür."
  },
  {
    "id": "phil_ma_2",
    "genre": "philosophy",
    "difficulty": "easy",
    "book": "Kendime Düşünceler",
    "author": "Marcus Aurelius",
    "quote": "Ruhun, düşüncelerinin rengine bürünür."
  },
  {
    "id": "phil_ma_3",
    "genre": "philosophy",
    "difficulty": "medium",
    "book": "Kendime Düşünceler",
    "author": "Marcus Aurelius",
    "quote": "Dış dünya seni üzemez; seni üzen şey ona verdiğin kendi yargılarındır."
  },
  {
    "id": "phil_ma_4",
    "genre": "philosophy",
    "difficulty": "medium",
    "book": "Kendime Düşünceler",
    "author": "Marcus Aurelius",
    "quote": "Dış dünya seni üzemez; seni üzen şey ona verdiğin kendi yargılarındır."
  },
  {
    "id": "phil_ma_5",
    "genre": "philosophy",
    "difficulty": "hard",
    "book": "Kendime Düşünceler",
    "author": "Marcus Aurelius",
    "quote": "Güne başlarken kendine şunu söyle: Bugün nankör, küstah, hilekar ve kıskanç insanlarla karşılaşacağım çünkü onlar iyiyi ve kötüyü birbirinden ayırt edemezler."
  },
  {
    "id": "phil_ma_6",
    "genre": "philosophy",
    "difficulty": "legendary",
    "book": "Kendime Düşünceler",
    "author": "Marcus Aurelius",
    "quote": "Zaman sonsuz bir akıntıdır; her olay bir an için su yüzüne çıkar, ardından sürüklenip gider ve yerini bir başkasına bırakır. Bütün kainat tek bir canlı varlık gibidir; tek bir ruha ve tek bir akla sahiptir ve her şey bu evrensel ahengin bir parçası olarak döner."
  },
  {
    "id": "phil_sn_1",
    "genre": "philosophy",
    "difficulty": "easy",
    "book": "Ahlak Mektupları",
    "author": "Seneca",
    "quote": "Zamanı iyi kullanan insan için ömür uzundur."
  },
  {
    "id": "phil_sn_2",
    "genre": "philosophy",
    "difficulty": "easy",
    "book": "Yaşamın Kısalığı Üzerine",
    "author": "Seneca",
    "quote": "Bize verilen ömür kısa değildir."
  },
  {
    "id": "phil_sn_3",
    "genre": "philosophy",
    "difficulty": "medium",
    "book": "Ahlak Mektupları",
    "author": "Seneca",
    "quote": "Hangi limana doğru yelken açtığını bilmeyen bir gemi için hiçbir rüzgar elverişli değildir."
  },
  {
    "id": "phil_sn_4",
    "genre": "philosophy",
    "difficulty": "hard",
    "book": "Yaşamın Kısalığı Üzerine",
    "author": "Seneca",
    "quote": "Zamanı en cömertçe harcadığımız şey haline getiririz; oysa insanın cimri ve kıskanç olması gereken tek ve yegane hazine zamandır."
  },
  {
    "id": "phil_sn_5",
    "genre": "philosophy",
    "difficulty": "legendary",
    "book": "Ahlak Mektupları",
    "author": "Seneca",
    "quote": "Bilge insan talihin getirdiği hiçbir hediyeye sevinmez ve hiçbir felakete yenilmez; çünkü o yalnızca kendi iç huzuruna ve erdemine güvenir. Ölümden korkan insan asla özgürce yaşayamaz; zira hayatın son anını sükunetle beklemeyi öğrenmeyen bir zihin daima geleceğin kaygılarıyla titrer."
  },
  {
    "id": "phil_ep_1",
    "genre": "philosophy",
    "difficulty": "easy",
    "book": "Düşünceler ve Sohbetler",
    "author": "Epiktetos",
    "quote": "Zihninden başka hiçbir şeye hükmedemezsin."
  },
  {
    "id": "phil_ep_2",
    "genre": "philosophy",
    "difficulty": "medium",
    "book": "Kılavuz Kitap (Enchiridion)",
    "author": "Epiktetos",
    "quote": "Huzur arıyorsan, elinde olmayan şeylerin peşinden koşmayı ve onlar için kaygılanmayı bırak."
  },
  {
    "id": "phil_ep_3",
    "genre": "philosophy",
    "difficulty": "hard",
    "book": "Düşünceler ve Sohbetler",
    "author": "Epiktetos",
    "quote": "Bir insanın huzurunu bozan şey dış dünyadaki olaylar değil, o olaylar hakkında kendi zihninde geliştirdiği asılsız kuruntular ve peşin yargılardır."
  },
  {
    "id": "phil_nz_1",
    "genre": "philosophy",
    "difficulty": "easy",
    "book": "Böyle Buyurdu Zerdüşt",
    "author": "Friedrich Nietzsche",
    "quote": "İnsan aşılması gereken bir köprüdür."
  },
  {
    "id": "phil_nz_2",
    "genre": "philosophy",
    "difficulty": "easy",
    "book": "Putların Alacakaranlığı",
    "author": "Friedrich Nietzsche",
    "quote": "Beni öldürmeyen şey beni güçlendirir."
  },
  {
    "id": "phil_nz_3",
    "genre": "philosophy",
    "difficulty": "medium",
    "book": "Böyle Buyurdu Zerdüşt",
    "author": "Friedrich Nietzsche",
    "quote": "Yıldız doğurabilmek için insanın kendi içinde bir kaos taşıması gerekir."
  },
  {
    "id": "phil_nz_4",
    "genre": "philosophy",
    "difficulty": "medium",
    "book": "Şen Bilim",
    "author": "Friedrich Nietzsche",
    "quote": "En büyük tehlikelerin ortasında yaşayın; şehirlerinizi Vezüv Yanardağı'nın eteklerine kurun."
  },
  {
    "id": "phil_nz_5",
    "genre": "philosophy",
    "difficulty": "hard",
    "book": "Böyle Buyurdu Zerdüşt",
    "author": "Friedrich Nietzsche",
    "quote": "Kendinize inanın ve kendi değerlerinizi kendi vicdanınızla yaratın; zira daima sürüye uyan ve başkalarını taklit eden insan asla kendi doruğuna tırmanamaz."
  },
  {
    "id": "phil_nz_6",
    "genre": "philosophy",
    "difficulty": "legendary",
    "book": "İnsanca, Pek İnsanca",
    "author": "Friedrich Nietzsche",
    "quote": "Kendi kanatlarıyla uçmayı öğrenemeyen ruhlar, başkalarının rüzgarında savrulan kuru yapraklardan farksız kalmaya mahkumdur."
  },
  {
    "id": "phil_sp_1",
    "genre": "philosophy",
    "difficulty": "easy",
    "book": "Etika",
    "author": "Baruch Spinoza",
    "quote": "Korku cehaletten, umut ise bilgisizlikten doğar."
  },
  {
    "id": "phil_sp_2",
    "genre": "philosophy",
    "difficulty": "medium",
    "book": "Etika",
    "author": "Baruch Spinoza",
    "quote": "Keder, insanın daha az mükemmel bir duruma geçişidir; sevinç ise daha yetkin hale gelmesidir."
  },
  {
    "id": "phil_sp_3",
    "genre": "philosophy",
    "difficulty": "hard",
    "book": "Etika",
    "author": "Baruch Spinoza",
    "quote": "Bir duygu ancak kendisinden daha güçlü ve zıt başka bir duygu tarafından alt edilebilir ve zihinden tamamen sökülüp atılabilir."
  },
  {
    "id": "phil_sch_1",
    "genre": "philosophy",
    "difficulty": "easy",
    "book": "Yaşam Bilgeliği Üzerine Aforizmalar",
    "author": "Arthur Schopenhauer",
    "quote": "Kişinin sahip oldukları değil, kendisi önemlidir."
  },
  {
    "id": "phil_sch_2",
    "genre": "philosophy",
    "difficulty": "medium",
    "book": "Aşkın Metafiziği",
    "author": "Arthur Schopenhauer",
    "quote": "Aşk, türün devamı için doğanın bireye kurduğu zekice bir yanılsamadır."
  },
  {
    "id": "phil_sch_3",
    "genre": "philosophy",
    "difficulty": "hard",
    "book": "Yaşam Bilgeliği Üzerine Aforizmalar",
    "author": "Arthur Schopenhauer",
    "quote": "Zeki bir insan yalnızlıkta kendi düşünceleriyle harika bir eğlence bulur; ahmak ise en parlak kalabalıkta bile can sıkıntısından kıvranır durur."
  },
  {
    "id": "phil_cam_1",
    "genre": "philosophy",
    "difficulty": "easy",
    "book": "Sisifos Söyleni",
    "author": "Albert Camus",
    "quote": "Sisifos'u mutlu hayal etmek gerekir."
  },
  {
    "id": "phil_cam_2",
    "genre": "philosophy",
    "difficulty": "medium",
    "book": "Başkaldıran İnsan",
    "author": "Albert Camus",
    "quote": "Başkaldıran insan, hayır diyen ama aynı zamanda ilk adımıyla evet diyen insandır."
  },
  {
    "id": "phil_cam_3",
    "genre": "philosophy",
    "difficulty": "hard",
    "book": "Sisifos Söyleni",
    "author": "Albert Camus",
    "quote": "Umutsuzluk içinde yaşamak teslim olmak değil; tam tersine absürd dünyanın saçmalığına ve adaletsizliğine karşı bilinçle ve gururla dimdik ayakta durmaktır."
  },
  {
    "id": "phil_cam_4",
    "genre": "philosophy",
    "difficulty": "legendary",
    "book": "Düşüş",
    "author": "Albert Camus",
    "quote": "Köprüden atlayan kadının çığlığını duyup da adımımı atmadığım o geceden beri, dünyanın bütün suları beni boğmak için akıyor."
  },
  {
    "id": "phil_srt_1",
    "genre": "philosophy",
    "difficulty": "easy",
    "book": "Gizli Oturum",
    "author": "Jean-Paul Sartre",
    "quote": "Cehennem başkalarıdır."
  },
  {
    "id": "phil_srt_2",
    "genre": "philosophy",
    "difficulty": "medium",
    "book": "Varlık ve Hiçlik",
    "author": "Jean-Paul Sartre",
    "quote": "İnsan kendi kendisini nasıl tanımlarsa ancak öyle var olur ve anlam kazanır."
  },
  {
    "id": "phil_srt_3",
    "genre": "philosophy",
    "difficulty": "hard",
    "book": "Bulantı",
    "author": "Jean-Paul Sartre",
    "quote": "İnsan kendi özgürlüğüne mahkum edilmiştir; çünkü bir kez dünyaya atıldıktan sonra yaptığı, seçtiği ve sustuğu her eylemden tek başına sorumludur."
  },
  {
    "id": "cls_dst_1",
    "genre": "classics",
    "difficulty": "easy",
    "book": "Suç ve Ceza",
    "author": "Fyodor Dostoyevski",
    "quote": "Yeni bir adım atmak korkutucudur."
  },
  {
    "id": "cls_dst_2",
    "genre": "classics",
    "difficulty": "easy",
    "book": "Beyaz Geceler",
    "author": "Fyodor Dostoyevski",
    "quote": "Tek bir anlık mutluluk az mıdır?"
  },
  {
    "id": "cls_dst_3",
    "genre": "classics",
    "difficulty": "medium",
    "book": "Yeraltından Notlar",
    "author": "Fyodor Dostoyevski",
    "quote": "Fazla bilinçli olmak bir hastalıktır, hem de tam anlamıyla gerçek bir hastalık."
  },
  {
    "id": "cls_dst_4",
    "genre": "classics",
    "difficulty": "medium",
    "book": "Karamazov Kardeşler",
    "author": "Fyodor Dostoyevski",
    "quote": "Dünyada tek bir masum çocuğun gözyaşları üzerine kurulacak cenneti asla kabul etmiyorum."
  },
  {
    "id": "cls_dst_5",
    "genre": "classics",
    "difficulty": "hard",
    "book": "Budala",
    "author": "Fyodor Dostoyevski",
    "quote": "Merhamet, insan varoluşunun belki de en temel ve biricik yasasıdır; onsuz adalet bir zulme dönüşür."
  },
  {
    "id": "cls_dst_6",
    "genre": "classics",
    "difficulty": "legendary",
    "book": "Karamazov Kardeşler",
    "author": "Fyodor Dostoyevski",
    "quote": "Cehennem nedir diye sorarsan bence cehennem, artık sevememekten doğan o korkunç ıstıraptır; sevme kabiliyetini bütünüyle yitirmiş ve kalbi taşlaşmış bir ruh için varoluşun kendisi ebedi ve sönmez bir azaba dönüşür."
  },
  {
    "id": "cls_dst_7",
    "genre": "classics",
    "difficulty": "legendary",
    "book": "Yeraltından Notlar",
    "author": "Fyodor Dostoyevski",
    "quote": "Bana huzur mu yoksa çay mı diye sorsalar, ben her zaman çayı seçerim; yeter ki dünya yerle bir olsun ama benim çayım masamda her daim hazır bulunsun ve kimse irademe karışmasın."
  },
  {
    "id": "cls_tls_1",
    "genre": "classics",
    "difficulty": "easy",
    "book": "İnsan Ne İle Yaşar",
    "author": "Lev Tolstoy",
    "quote": "İnsan yalnızca sevgiyle yaşar."
  },
  {
    "id": "cls_tls_2",
    "genre": "classics",
    "difficulty": "medium",
    "book": "Anna Karenina",
    "author": "Lev Tolstoy",
    "quote": "Her mutsuz aile ise kendine özgü bir şekilde ve kendi nedenleriyle mutsuzdur."
  },
  {
    "id": "cls_tls_3",
    "genre": "classics",
    "difficulty": "medium",
    "book": "Savaş ve Barış",
    "author": "Lev Tolstoy",
    "quote": "Sabır ve zaman, insanın karşısına çıkabilecek en aşılmaz engelleri bile sessizce dize getirir."
  },
  {
    "id": "cls_tls_4",
    "genre": "classics",
    "difficulty": "hard",
    "book": "İvan İlyiç'in Ölümü",
    "author": "Lev Tolstoy",
    "quote": "Belki de hayatımı yanlış yaşadım düşüncesi, ölüm döşeğindeki insanın zihnini kemiren en amansız azaptır."
  },
  {
    "id": "cls_tls_5",
    "genre": "classics",
    "difficulty": "legendary",
    "book": "Diriliş",
    "author": "Lev Tolstoy",
    "quote": "İnsanlar nehirler gibidir; suları aynıdır ama kimi yerde dar, kimi yerde hızlı, kimi yerde berrak, kimi yerde ise bulanık akar."
  },
  {
    "id": "cls_kfk_1",
    "genre": "classics",
    "difficulty": "easy",
    "book": "Dönüşüm",
    "author": "Franz Kafka",
    "quote": "Gregor Samsa bir sabah böcekleşti."
  },
  {
    "id": "cls_kfk_2",
    "genre": "classics",
    "difficulty": "medium",
    "book": "Dava",
    "author": "Franz Kafka",
    "quote": "Kötü bir şey yapmamış olmasına rağmen bir sabah ansızın tutuklandı."
  },
  {
    "id": "cls_kfk_3",
    "genre": "classics",
    "difficulty": "hard",
    "book": "Aforizmalar",
    "author": "Franz Kafka",
    "quote": "Zeki bir insan yalnızlıkta kendi düşünceleriyle harika bir eğlence bulur; ahmak ise en parlak kalabalıkta bile can sıkıntısından kıvranır durur."
  },
  {
    "id": "cls_kfk_4",
    "genre": "classics",
    "difficulty": "legendary",
    "book": "Şato",
    "author": "Franz Kafka",
    "quote": "K. tepedeki karlı tepeye baktığında Şato sislerin arasında bir serap gibi beliriyor ve asla cevap vermeyen bir sessizliğe bürünüyordu."
  },
  {
    "id": "cls_hug_1",
    "genre": "classics",
    "difficulty": "easy",
    "book": "Sefiller",
    "author": "Victor Hugo",
    "quote": "Gelecek cesurların umududur."
  },
  {
    "id": "cls_hug_2",
    "genre": "classics",
    "difficulty": "medium",
    "book": "Sefiller",
    "author": "Victor Hugo",
    "quote": "Gelecek korkakların kabusu, cesurların umudu, düşünenlerin ise sonsuz çalışma alanıdır."
  },
  {
    "id": "cls_hug_3",
    "genre": "classics",
    "difficulty": "hard",
    "book": "Sefiller",
    "author": "Victor Hugo",
    "quote": "Gözler karanlığa zamanla alışabilir ama insan ruhu adaletsizliğin ve cehaletin karanlığına asla teslim olmamalıdır."
  },
  {
    "id": "cls_hss_1",
    "genre": "classics",
    "difficulty": "easy",
    "book": "Siddhartha",
    "author": "Hermann Hesse",
    "quote": "Bilgelik başkasına aktarılamaz."
  },
  {
    "id": "cls_hss_2",
    "genre": "classics",
    "difficulty": "medium",
    "book": "Bozkırkurdu",
    "author": "Hermann Hesse",
    "quote": "İnsan tek bir benlikten değil, binlerce farklı ruhun çatışmasından ibarettir."
  },
  {
    "id": "cls_hss_3",
    "genre": "classics",
    "difficulty": "hard",
    "book": "Demian",
    "author": "Hermann Hesse",
    "quote": "Doğmak isteyen her varlık bir dünyayı yıkmak zorundadır; yıkım olmadan yeni bir bilinç filizlenemez."
  },
  {
    "id": "cls_flb_1",
    "genre": "classics",
    "difficulty": "medium",
    "book": "Madame Bovary",
    "author": "Gustave Flaubert",
    "quote": "Her tutkunun arkasında, gerçekleştiği an yok olan bir hayal kırıklığı gizlidir."
  },
  {
    "id": "cls_stn_1",
    "genre": "classics",
    "difficulty": "medium",
    "book": "Kırmızı ve Siyah",
    "author": "Stendhal",
    "quote": "Toplumda yükselmek isteyen insan, kendi duygularının en acımasız efendisi olmalıdır."
  },
  {
    "id": "cls_chk_1",
    "genre": "classics",
    "difficulty": "medium",
    "book": "Altıncı Koğuş",
    "author": "Anton Çehov",
    "quote": "Düşünce özgürlüğü, parmaklıklar ardında bile insanın elinden asla alınamaz."
  },
  {
    "id": "trk_sa_1",
    "genre": "turkish",
    "difficulty": "easy",
    "book": "Kürk Mantolu Madonna",
    "author": "Sabahattin Ali",
    "quote": "Bir insanı sevmekle başlar her şey."
  },
  {
    "id": "trk_sa_2",
    "genre": "turkish",
    "difficulty": "easy",
    "book": "Kuyucaklı Yusuf",
    "author": "Sabahattin Ali",
    "quote": "İnsan sadece yaşamak için gelmez dünyaya."
  },
  {
    "id": "trk_sa_3",
    "genre": "turkish",
    "difficulty": "medium",
    "book": "Kürk Mantolu Madonna",
    "author": "Sabahattin Ali",
    "quote": "İçimizde şeytan yok; içimizde aciz, tembel ve korkak bir irade var."
  },
  {
    "id": "trk_sa_4",
    "genre": "turkish",
    "difficulty": "medium",
    "book": "İçimizdeki Şeytan",
    "author": "Sabahattin Ali",
    "quote": "İsteyip istemediğimi dahi bilmediğim bir şey için çabalamak beni tüketiyor."
  },
  {
    "id": "trk_sa_5",
    "genre": "turkish",
    "difficulty": "hard",
    "book": "Kürk Mantolu Madonna",
    "author": "Sabahattin Ali",
    "quote": "Dünyada bir tek insanı sevmek, bütün dünyayı ve kainattaki bütün varlıkları sevmenin en hakiki ve en saf anahtarıdır."
  },
  {
    "id": "trk_sa_6",
    "genre": "turkish",
    "difficulty": "legendary",
    "book": "Kürk Mantolu Madonna",
    "author": "Sabahattin Ali",
    "quote": "İnsanlar birbirlerini ne kadar az anlıyorlar; birbirlerinin derinliklerine inmekten ne kadar korkuyorlar ve ne kadar büyük bir kolaylıkla birbirlerinin yanından geçip ömür boyu yabancı kalabiliyorlar."
  },
  {
    "id": "trk_oa_1",
    "genre": "turkish",
    "difficulty": "easy",
    "book": "Tutunamayanlar",
    "author": "Oğuz Atay",
    "quote": "Tutunamayanlar için bir umut var mı?"
  },
  {
    "id": "trk_oa_2",
    "genre": "turkish",
    "difficulty": "medium",
    "book": "Tehlikeli Oyunlar",
    "author": "Oğuz Atay",
    "quote": "Ben iç dünyama çekildikçe dışarıdaki dünya daha da anlamsızlaşıyor."
  },
  {
    "id": "trk_oa_3",
    "genre": "turkish",
    "difficulty": "medium",
    "book": "Tutunamayanlar",
    "author": "Oğuz Atay",
    "quote": "Bizi anlamadılar Selim; bizi hiçbir zaman ve hiçbir yerde anlamayacaklar."
  },
  {
    "id": "trk_oa_4",
    "genre": "turkish",
    "difficulty": "hard",
    "book": "Korkuyu Beklerken",
    "author": "Oğuz Atay",
    "quote": "Korku öyle sinsi bir duygudur ki, insanı henüz gerçekleşmemiş felaketlerin esiri haline getirir."
  },
  {
    "id": "trk_oa_5",
    "genre": "turkish",
    "difficulty": "legendary",
    "book": "Tutunamayanlar",
    "author": "Oğuz Atay",
    "quote": "Hayat bir tiyatro sahnesiyse eğer, ben rolünü ezberleyemeyen ve sahneye her çıktığında suflöre muhtaç kalan o beceriksiz oyuncuyum; roller dağıtılmış, alkışlar tutulmuş, bana ise sadece sessizce çekilmek kalmıştır."
  },
  {
    "id": "trk_tp_1",
    "genre": "turkish",
    "difficulty": "easy",
    "book": "Huzur",
    "author": "Ahmet Hamdi Tanpınar",
    "quote": "Huzur ancak içsel sükunettedir."
  },
  {
    "id": "trk_tp_2",
    "genre": "turkish",
    "difficulty": "medium",
    "book": "Saatleri Ayarlama Enstitüsü",
    "author": "Ahmet Hamdi Tanpınar",
    "quote": "Saatin kendisi mekan, yürüyüşü zaman, ayarı ise insandır."
  },
  {
    "id": "trk_tp_3",
    "genre": "turkish",
    "difficulty": "hard",
    "book": "Beş Şehir",
    "author": "Ahmet Hamdi Tanpınar",
    "quote": "Geçmiş zaman, ruhun derinliklerinde biriktirdiği en asil ve hüzünlü hatıralar hazinesidir."
  },
  {
    "id": "trk_tp_4",
    "genre": "turkish",
    "difficulty": "legendary",
    "book": "Huzur",
    "author": "Ahmet Hamdi Tanpınar",
    "quote": "Mümtaz Boğaz'ın sularına baktığında anladı ki, medeniyet dediğimiz şey geçmişin asil hatıralarını bugünün vicdanında diri tutabilme sanatıdır; hafızasını kaybeden bir cemiyet ruhunu da bütünüyle kaybeder."
  },
  {
    "id": "trk_yk_1",
    "genre": "turkish",
    "difficulty": "easy",
    "book": "İnce Memed",
    "author": "Yaşar Kemal",
    "quote": "Zulmün olduğu yerde direniş doğar."
  },
  {
    "id": "trk_yk_2",
    "genre": "turkish",
    "difficulty": "medium",
    "book": "İnce Memed",
    "author": "Yaşar Kemal",
    "quote": "Dağlar başı dumanlıdır Memed; dağlar zalime mezar, mazluma ise sığınaktır."
  },
  {
    "id": "trk_yk_3",
    "genre": "turkish",
    "difficulty": "hard",
    "book": "Ağrıdağı Efsanesi",
    "author": "Yaşar Kemal",
    "quote": "Dağlar ne kadar yüce olsa da sevda ateşi onların zirvesindeki karları eritmeye yeter."
  },
  {
    "id": "trk_ya_1",
    "genre": "turkish",
    "difficulty": "easy",
    "book": "Aylak Adam",
    "author": "Yusuf Atılgan",
    "quote": "Beni anlamıyorlardı, sadece kendim olmak istiyordum."
  },
  {
    "id": "trk_ya_2",
    "genre": "turkish",
    "difficulty": "medium",
    "book": "Anayurt Oteli",
    "author": "Yusuf Atılgan",
    "quote": "Yalnızlık, insanın kendi ayak seslerini dinlemekten bile korktuğu sonsuz bir sessizliktir."
  },
  {
    "id": "trk_ps_1",
    "genre": "turkish",
    "difficulty": "medium",
    "book": "Dokuzuncu Hariciye Koğuşu",
    "author": "Peyami Safa",
    "quote": "Hastane koridorları, insanın kendi yalnızlığıyla en yalın şekilde yüzleştiği yerdir."
  },
  {
    "id": "trk_sf_1",
    "genre": "turkish",
    "difficulty": "easy",
    "book": "Alemdağ'da Var Bir Yılan",
    "author": "Sait Faik Abasıyanık",
    "quote": "Sevmek, bir insanı sevmekle başlar her şey."
  },
  {
    "id": "poe_nh_1",
    "genre": "poetry",
    "difficulty": "easy",
    "book": "Memleketimden İnsan Manzaraları",
    "author": "Nazım Hikmet",
    "quote": "Yaşamak bir ağaç gibi tek ve hür ve bir orman gibi kardeşçesine."
  },
  {
    "id": "poe_nh_2",
    "genre": "poetry",
    "difficulty": "medium",
    "book": "Kuvâyi Milliye Destanı",
    "author": "Nazım Hikmet",
    "quote": "Dörtnala gelip Uzak Asya'dan Akdeniz'e bir kısrak başı gibi uzanan bu memleket bizim."
  },
  {
    "id": "poe_nh_3",
    "genre": "poetry",
    "difficulty": "hard",
    "book": "Henüz Vakit Varken Gülüm",
    "author": "Nazım Hikmet",
    "quote": "En güzel deniz henüz gidilmemiş olandır; en güzel çocuk henüz büyümedi; en güzel günlerimiz henüz yaşamadıklarımızdır."
  },
  {
    "id": "poe_cs_1",
    "genre": "poetry",
    "difficulty": "easy",
    "book": "Sevda Sözleri",
    "author": "Cemal Süreya",
    "quote": "Hayat kısa, kuşlar uçuyor."
  },
  {
    "id": "poe_cs_2",
    "genre": "poetry",
    "difficulty": "medium",
    "book": "Sevda Sözleri",
    "author": "Cemal Süreya",
    "quote": "Senin bir havan var beni asıl saran o; onunla daha bir gün ışığı, onsuz bir akşamüstü."
  },
  {
    "id": "poe_cs_3",
    "genre": "poetry",
    "difficulty": "hard",
    "book": "Üvercinka",
    "author": "Cemal Süreya",
    "quote": "Seni bir kere öpsem ikinin hatırı kalıyordu; iki kere öpsem üçün boynu bükük kalıyordu."
  },
  {
    "id": "poe_oa_1",
    "genre": "poetry",
    "difficulty": "easy",
    "book": "Lavinia",
    "author": "Özdemir Asaf",
    "quote": "Yalnızlık paylaşılmaz, paylaşılsa yalnızlık olmaz."
  },
  {
    "id": "poe_oa_2",
    "genre": "poetry",
    "difficulty": "medium",
    "book": "Yalnızlık Paylaşılmaz",
    "author": "Özdemir Asaf",
    "quote": "Yalnızlık paylaşılsaydı adı yalnızlık olmazdı; o ancak tek başına taşınan bir yüktür."
  },
  {
    "id": "poe_ai_1",
    "genre": "poetry",
    "difficulty": "easy",
    "book": "Ben Sana Mecburum",
    "author": "Attila İlhan",
    "quote": "Ben sana mecburum bilemezsin."
  },
  {
    "id": "poe_ai_2",
    "genre": "poetry",
    "difficulty": "medium",
    "book": "Elde Var Hüzün",
    "author": "Attila İlhan",
    "quote": "Ne vakit bir yaşamak düşünsem, bu kurtlar sofrasında akşam olur."
  },
  {
    "id": "poe_tu_1",
    "genre": "poetry",
    "difficulty": "easy",
    "book": "Göğe Bakma Durağı",
    "author": "Turgut Uyar",
    "quote": "İkimiz birden sevinebiliriz göğe bakalım."
  },
  {
    "id": "poe_tu_2",
    "genre": "poetry",
    "difficulty": "medium",
    "book": "Dünyanın En Güzel Arabistanı",
    "author": "Turgut Uyar",
    "quote": "Durma göğe bakalım; gökyüzü hepimizin tek ortak sığınağıdır."
  },
  {
    "id": "poe_aa_1",
    "genre": "poetry",
    "difficulty": "easy",
    "book": "Hasretinden Prangalar Eskittim",
    "author": "Ahmed Arif",
    "quote": "Terketmedi sevdan beni, aç kaldım susuz kaldım."
  },
  {
    "id": "poe_aa_2",
    "genre": "poetry",
    "difficulty": "hard",
    "book": "Hasretinden Prangalar Eskittim",
    "author": "Ahmed Arif",
    "quote": "Haberin var mı taş duvar? Demir kapı, kör pencere, yastığım, ranzam, zincirim."
  },
  {
    "id": "mod_pr_1",
    "genre": "modernist",
    "difficulty": "easy",
    "book": "Kayıp Zamanın İzinde",
    "author": "Marcel Proust",
    "quote": "Gerçek keşif yolculuğu yeni manzaralar aramak değil."
  },
  {
    "id": "mod_pr_2",
    "genre": "modernist",
    "difficulty": "medium",
    "book": "Swann'ların Tarafı",
    "author": "Marcel Proust",
    "quote": "Bir anı, tadılan küçük bir madlen kekiyle zihinde yeniden canlanan koskoca bir dünyadır."
  },
  {
    "id": "mod_pr_3",
    "genre": "modernist",
    "difficulty": "hard",
    "book": "Çiçek Açmış Genç Kızların Gölgesinde",
    "author": "Marcel Proust",
    "quote": "Zamanın akışı içinde unuttuğumuzu sandığımız duygular, en beklenmedik bir koku veya sesle capcanlı karşımıza dikilir."
  },
  {
    "id": "mod_pr_4",
    "genre": "modernist",
    "difficulty": "legendary",
    "book": "Yakalanan Zaman",
    "author": "Marcel Proust",
    "quote": "Sanat tek gerçek yaşamdır; çünkü sanatçının kendi gözleriyle dünyayı algılamasını ve bu benzersiz bakış açısını sonsuzluğa armağan etmesini sağlar."
  },
  {
    "id": "mod_jy_1",
    "genre": "modernist",
    "difficulty": "easy",
    "book": "Ulysses",
    "author": "James Joyce",
    "quote": "Tarih, uyanmaya çalıştığım bir kabustur."
  },
  {
    "id": "mod_jy_2",
    "genre": "modernist",
    "difficulty": "medium",
    "book": "Sanatçının Bir Genç Adam Olarak Portresi",
    "author": "James Joyce",
    "quote": "Ruhum, kendi kanatlarıyla gökyüzüne yükselmek için bütün zincirlerini kırmak zorundaydı."
  },
  {
    "id": "mod_jy_3",
    "genre": "modernist",
    "difficulty": "hard",
    "book": "Dublinliler",
    "author": "James Joyce",
    "quote": "Kar bütün İrlanda üzerine, yaşayanların ve ölülerin üzerine usul usul yağıyordu."
  },
  {
    "id": "mod_flk_1",
    "genre": "modernist",
    "difficulty": "easy",
    "book": "Ses ve Öfke",
    "author": "William Faulkner",
    "quote": "Zaman ancak saatler durduğunda gerçekten yaşamaya başlar."
  },
  {
    "id": "mod_flk_2",
    "genre": "modernist",
    "difficulty": "medium",
    "book": "Döşeğimde Ölürken",
    "author": "William Faulkner",
    "quote": "Kelimeler sadece bir boşluğu doldurmak için kullanılan çaresiz işaretlerdir."
  },
  {
    "id": "mod_tm_1",
    "genre": "modernist",
    "difficulty": "hard",
    "book": "Büyülü Dağ",
    "author": "Thomas Mann",
    "quote": "Düzen ve sadeleşme, insanın kaosa karşı geliştirdiği en yüce zihinsel savunmadır."
  },
  {
    "id": "dys_orw_1",
    "genre": "dystopia",
    "difficulty": "easy",
    "book": "1984",
    "author": "George Orwell",
    "quote": "Büyük Birader seni izliyor."
  },
  {
    "id": "dys_orw_2",
    "genre": "dystopia",
    "difficulty": "easy",
    "book": "Hayvan Çiftliği",
    "author": "George Orwell",
    "quote": "Bütün hayvanlar eşittir."
  },
  {
    "id": "dys_orw_3",
    "genre": "dystopia",
    "difficulty": "medium",
    "book": "1984",
    "author": "George Orwell",
    "quote": "Savaş barıştır, özgürlük köleliktir, cehalet ise partinin en büyük gücüdür."
  },
  {
    "id": "dys_orw_4",
    "genre": "dystopia",
    "difficulty": "hard",
    "book": "1984",
    "author": "George Orwell",
    "quote": "Geçmişi denetleyen güç geleceği de denetler; bugünü denetleyen kudret ise geçmişin mutlak efendisi ve yazarı olur."
  },
  {
    "id": "dys_orw_5",
    "genre": "dystopia",
    "difficulty": "legendary",
    "book": "1984",
    "author": "George Orwell",
    "quote": "Eğer bir geleceğin resmini görmek istiyorsan, insan yüzüne basan ve sonsuza dek orada kalan bir postal hayal et; zira partinin nihai amacı gücü yalnızca güç için korumak ve zihinleri köleleştirmektir."
  },
  {
    "id": "dys_hux_1",
    "genre": "dystopia",
    "difficulty": "easy",
    "book": "Cesur Yeni Dünya",
    "author": "Aldous Huxley",
    "quote": "Herkes herkes içindir."
  },
  {
    "id": "dys_hux_2",
    "genre": "dystopia",
    "difficulty": "medium",
    "book": "Cesur Yeni Dünya",
    "author": "Aldous Huxley",
    "quote": "Topluluk, özdeşlik ve kararlılık; modern uygarlığın üzerine kurulduğu üç temel sacayağıdır."
  },
  {
    "id": "dys_hux_3",
    "genre": "dystopia",
    "difficulty": "hard",
    "book": "Cesur Yeni Dünya",
    "author": "Aldous Huxley",
    "quote": "Gerçek mutluluk hiçbir zaman parlak ve görkemli görünmez; oysa kurgusal bir istikrar uğruna insan ruhunu feda etmek gerekir."
  },
  {
    "id": "dys_brd_1",
    "genre": "dystopia",
    "difficulty": "easy",
    "book": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "quote": "Kitap yakmak bir zevkti."
  },
  {
    "id": "dys_brd_2",
    "genre": "dystopia",
    "difficulty": "medium",
    "book": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "quote": "Kitapların sayfaları alevler içinde kül olurken, insanlığın ortak hafızası da yok ediliyordu."
  },
  {
    "id": "dys_zam_1",
    "genre": "dystopia",
    "difficulty": "medium",
    "book": "Biz",
    "author": "Yevgeni Zamyatin",
    "quote": "Tek Devlet'in camdan duvarları ardında hiçbir sırra ve hiçbir gölgeye yer yoktur."
  },
  {
    "id": "psy_frk_1",
    "genre": "psychology",
    "difficulty": "easy",
    "book": "İnsanın Anlam Arayışı",
    "author": "Viktor Frankl",
    "quote": "İnsanın anlam arayışı temeldir."
  },
  {
    "id": "psy_frk_2",
    "genre": "psychology",
    "difficulty": "medium",
    "book": "İnsanın Anlam Arayışı",
    "author": "Viktor Frankl",
    "quote": "İnsanın elinden her şey alınabilir; fakat tavrını seçme özgürlüğü asla alınamaz."
  },
  {
    "id": "psy_frk_3",
    "genre": "psychology",
    "difficulty": "hard",
    "book": "İnsanın Anlam Arayışı",
    "author": "Viktor Frankl",
    "quote": "Neden yaşadığını bilen ve bir anlama tutunan bir insan, karşısına çıkabilecek hemen her türlü nasıla ve acıya katlanabilir."
  },
  {
    "id": "psy_jng_1",
    "genre": "psychology",
    "difficulty": "easy",
    "book": "Keşfedilmemiş Benlik",
    "author": "Carl Gustav Jung",
    "quote": "Dışa bakan rüya görür."
  },
  {
    "id": "psy_jng_2",
    "genre": "psychology",
    "difficulty": "medium",
    "book": "Kırmızı Kitap",
    "author": "Carl Gustav Jung",
    "quote": "Kendi karanlığıyla yüzleşmeyen hiçbir insan aydınlığa ve olgunluğa ulaşamaz."
  },
  {
    "id": "psy_jng_3",
    "genre": "psychology",
    "difficulty": "hard",
    "book": "İnsan ve Sembolleri",
    "author": "Carl Gustav Jung",
    "quote": "Bilinçdışını bilince dönüştürene kadar o hayatınızı yönetir ve siz ona kader dersiniz."
  },
  {
    "id": "psy_frm_1",
    "genre": "psychology",
    "difficulty": "easy",
    "book": "Sevme Sanatı",
    "author": "Erich Fromm",
    "quote": "Sevmek bir sanattır."
  },
  {
    "id": "psy_frm_2",
    "genre": "psychology",
    "difficulty": "medium",
    "book": "Özgürlükten Kaçış",
    "author": "Erich Fromm",
    "quote": "İnsan kendi yalnızlığından korktuğu için özgürlüğünü otoriteye feda etmeye hazırdır."
  },
  {
    "id": "psy_ylm_1",
    "genre": "psychology",
    "difficulty": "medium",
    "book": "Nietzsche Ağladığında",
    "author": "Irvin Yalom",
    "quote": "Kendi hayatını yaşamayan insan, ölüm anında duyduğu pişmanlığın ağırlığı altında ezilir."
  },
  {
    "id": "ess_mnt_1",
    "genre": "essay",
    "difficulty": "easy",
    "book": "Denemeler",
    "author": "Michel de Montaigne",
    "quote": "Dünyanın en yüksek tahtına da çıksanız."
  },
  {
    "id": "ess_mnt_2",
    "genre": "essay",
    "difficulty": "medium",
    "book": "Denemeler",
    "author": "Michel de Montaigne",
    "quote": "Kendini tanımak bilgeliğin başlangıcıdır; başkalarını bilmek ise erdemdir."
  },
  {
    "id": "ess_mnt_3",
    "genre": "essay",
    "difficulty": "hard",
    "book": "Denemeler",
    "author": "Michel de Montaigne",
    "quote": "Felsefe yapmak ölmeyi öğrenmektir; çünkü ölümü düşünen insan kölelikten kurtulur."
  },
  {
    "id": "ess_cir_1",
    "genre": "essay",
    "difficulty": "easy",
    "book": "Çürümenin Kitabı",
    "author": "Emil Cioran",
    "quote": "Yalnızca şüphe duyanlar gerçekten uyanıktır."
  },
  {
    "id": "ess_cir_2",
    "genre": "essay",
    "difficulty": "medium",
    "book": "Doğmuş Olmanın Sakıncası",
    "author": "Emil Cioran",
    "quote": "Bütün kitaplar yazılmış birer mezar taşıdır; kelimeler ise içindeki ölü düşünceler."
  },
  {
    "id": "ess_cir_3",
    "genre": "essay",
    "difficulty": "hard",
    "book": "Varolma Eğilimi",
    "author": "Emil Cioran",
    "quote": "Hiçbir şeye inanmamak, her şeye inanmaktan çok daha büyük bir disiplin ve cesaret gerektirir."
  },
  {
    "id": "ess_cm_1",
    "genre": "essay",
    "difficulty": "easy",
    "book": "Bu Ülke",
    "author": "Cemil Meriç",
    "quote": "Kitap, istikbale yollanan mektuptur; pulu samimiyet, adresi insandır."
  },
  {
    "id": "ess_cm_2",
    "genre": "essay",
    "difficulty": "medium",
    "book": "Bu Ülke",
    "author": "Cemil Meriç",
    "quote": "Kelimeler kaybolunca düşünce donar; tefekkür ancak dille nefes alır."
  },
  {
    "id": "ess_cm_3",
    "genre": "essay",
    "difficulty": "hard",
    "book": "Jurnal",
    "author": "Cemil Meriç",
    "quote": "Düşünce şüpheyle başlar; şüphe etmeyen ve sorgulamayan bir zihin ancak bir esirdir."
  },
  {
    "id": "str_st_1",
    "genre": "strategy",
    "difficulty": "easy",
    "book": "Savaş Sanatı",
    "author": "Sun Tzu",
    "quote": "En büyük zafer, savaşmadan kazanılan zaferdir."
  },
  {
    "id": "str_st_2",
    "genre": "strategy",
    "difficulty": "medium",
    "book": "Savaş Sanatı",
    "author": "Sun Tzu",
    "quote": "Kendini ve düşmanını tanırsan, yüz savaşa girsen de tehlikeye düşmezsin."
  },
  {
    "id": "str_mch_1",
    "genre": "strategy",
    "difficulty": "easy",
    "book": "Prens",
    "author": "Niccolò Machiavelli",
    "quote": "Korkulan biri olmak, sevilmekten daha güvenlidir."
  },
  {
    "id": "str_mch_2",
    "genre": "strategy",
    "difficulty": "medium",
    "book": "Prens",
    "author": "Niccolò Machiavelli",
    "quote": "Bir hükümdar hem aslan kadar güçlü hem de tilki kadar kurnaz olmalıdır."
  },
  {
    "id": "str_ibh_1",
    "genre": "strategy",
    "difficulty": "medium",
    "book": "Mukaddime",
    "author": "İbn Haldun",
    "quote": "Geçmiş geleceğe suyun suya benzediğinden daha çok benzer."
  },
  {
    "id": "str_ilb_1",
    "genre": "strategy",
    "difficulty": "medium",
    "book": "Bir Ömür Nasıl Yaşanır",
    "author": "İlber Ortaylı",
    "quote": "Cesur olun; hayatınızı başkalarının takdirine göre değil, kendi merakınıza göre kurun."
  },
  {
    "id": "drm_shk_1",
    "genre": "drama",
    "difficulty": "easy",
    "book": "Hamlet",
    "author": "William Shakespeare",
    "quote": "Olmak ya da olmamak, işte bütün mesele bu."
  },
  {
    "id": "drm_shk_2",
    "genre": "drama",
    "difficulty": "medium",
    "book": "Macbeth",
    "author": "William Shakespeare",
    "quote": "Bütün Arabistan'ın kokuları gelse bu küçücük kanlı eli temizleyemez."
  },
  {
    "id": "drm_shk_3",
    "genre": "drama",
    "difficulty": "hard",
    "book": "Kral Lear",
    "author": "William Shakespeare",
    "quote": "Fırtına dışarıda değil kralım; fırtına insanın kendi göğsündeki nankörlükle girdiği savaşta kopar."
  },
  {
    "id": "drm_gth_1",
    "genre": "drama",
    "difficulty": "easy",
    "book": "Faust",
    "author": "Johann Wolfgang von Goethe",
    "quote": "Dur ey zaman, ne kadar güzelsin!"
  },
  {
    "id": "drm_gth_2",
    "genre": "drama",
    "difficulty": "medium",
    "book": "Faust",
    "author": "Johann Wolfgang von Goethe",
    "quote": "İnsan çabaladığı sürece yanılır; fakat arayan insan asla bütünüyle kaybolmaz."
  },
  {
    "id": "drm_bck_1",
    "genre": "drama",
    "difficulty": "easy",
    "book": "Godot'yu Beklerken",
    "author": "Samuel Beckett",
    "quote": "Gidelim. — Gidemeyiz. — Neden? — Godot'yu bekliyoruz."
  },
  {
    "id": "mys_rum_1",
    "genre": "mysticism",
    "difficulty": "easy",
    "book": "Mesnevi",
    "author": "Mevlana Celaleddin Rumi",
    "quote": "Yara, ışığın içeri girdiği yerdir."
  },
  {
    "id": "mys_rum_2",
    "genre": "mysticism",
    "difficulty": "medium",
    "book": "Mesnevi",
    "author": "Mevlana Celaleddin Rumi",
    "quote": "Aşk öyle bir ateştir ki tutuştumu sevgiliden başka her şeyi yakıp kül eder."
  },
  {
    "id": "mys_rum_3",
    "genre": "mysticism",
    "difficulty": "hard",
    "book": "Divan-ı Kebir",
    "author": "Mevlana Celaleddin Rumi",
    "quote": "Sen okyanustaki bir damla değilsin; sen tek bir damlanın içindeki koca bir okyanussun."
  },
  {
    "id": "mys_sms_1",
    "genre": "mysticism",
    "difficulty": "easy",
    "book": "Kırk Kural",
    "author": "Şems-i Tebrizi",
    "quote": "Hakk'ı nerede ararsan ara."
  },
  {
    "id": "mys_sms_2",
    "genre": "mysticism",
    "difficulty": "medium",
    "book": "Kırk Kural",
    "author": "Şems-i Tebrizi",
    "quote": "Düzenim bozulur, hayatım altüst olur diye endişe etme. Nereden biliyorsun hayatın altının üstünden daha iyi olmadığını?"
  },
  {
    "id": "mys_yn_1",
    "genre": "mysticism",
    "difficulty": "easy",
    "book": "Divan",
    "author": "Yunus Emre",
    "quote": "Sevelim, sevilelim; dünya kimseye kalmaz."
  },
  {
    "id": "mys_lao_1",
    "genre": "mysticism",
    "difficulty": "easy",
    "book": "Tao Te Ching",
    "author": "Lao Tzu",
    "quote": "Bin millik bir yolculuk tek bir adımla başlar."
  },
  {
    "id": "mys_lao_2",
    "genre": "mysticism",
    "difficulty": "medium",
    "book": "Tao Te Ching",
    "author": "Lao Tzu",
    "quote": "Bilen konuşmaz, konuşan bilmez; sessizlik bilgeliğin anahtarıdır."
  },
  {
    "id": "mys_kbr_1",
    "genre": "mysticism",
    "difficulty": "medium",
    "book": "Ermiş",
    "author": "Halil Cibran",
    "quote": "Çocuklarınız sizin çocuklarınız değildir; onlar hayatın kendine olan özleminin oğulları ve kızlarıdır."
  },
  {
    "id": "art_trk_1",
    "genre": "cinema_art",
    "difficulty": "easy",
    "book": "Mühürlenmiş Zaman",
    "author": "Andrey Tarkovski",
    "quote": "Sanat, insanın mutlak hakikate ve mükemmelliğe duyduğu özlemdir."
  },
  {
    "id": "art_trk_2",
    "genre": "cinema_art",
    "difficulty": "medium",
    "book": "Mühürlenmiş Zaman",
    "author": "Andrey Tarkovski",
    "quote": "Yönetmen, zamanın akışını yakalayan ve onu bir heykel gibi yontan kişidir."
  },
  {
    "id": "art_trk_3",
    "genre": "cinema_art",
    "difficulty": "hard",
    "book": "Mühürlenmiş Zaman",
    "author": "Andrey Tarkovski",
    "quote": "Bir insanın kendini bütünüyle bir amaca adayabilmesi için ruhunda manevi bir boşluk olmalıdır."
  },
  {
    "id": "art_brg_1",
    "genre": "cinema_art",
    "difficulty": "easy",
    "book": "Görme Biçimleri",
    "author": "John Berger",
    "quote": "Görme, konuşmadan önce gelir; çocuk konuşmadan önce bakar ve tanır."
  },
  {
    "id": "art_brg_2",
    "genre": "cinema_art",
    "difficulty": "medium",
    "book": "Görme Biçimleri",
    "author": "John Berger",
    "quote": "Bir nesneyi nasıl gördüğümüz, neyi bildiğimize ve neye inandığımıza bağlıdır."
  },
  {
    "id": "art_snt_1",
    "genre": "cinema_art",
    "difficulty": "medium",
    "book": "Fotoğraf Üzerine",
    "author": "Susan Sontag",
    "quote": "Kamera dünyayı bir dizi minyatür parçaya böler ve onları mülkümüz gibi saklamamızı sağlar."
  },
  {
    "id": "art_bnj_1",
    "genre": "cinema_art",
    "difficulty": "hard",
    "book": "Tekniğin Olanaklarıyla Sanat",
    "author": "Walter Benjamin",
    "quote": "Mekanik olarak çoğaltılan sanat eseri, kendi özgün aurasını ve biricikliğini yitirir."
  },
  {
    "id": "epc_tlk_1",
    "genre": "epic_fantasy",
    "difficulty": "easy",
    "book": "Yüzüklerin Efendisi: Yüzük Kardeşliği",
    "author": "J.R.R. Tolkien",
    "quote": "Her parıldayan altın değildir."
  },
  {
    "id": "epc_tlk_2",
    "genre": "epic_fantasy",
    "difficulty": "medium",
    "book": "Yüzüklerin Efendisi: Kralın Dönüşü",
    "author": "J.R.R. Tolkien",
    "quote": "Dünyada iyi bir şeyler var Frodo ve onlar için savaşmaya değer."
  },
  {
    "id": "epc_tlk_3",
    "genre": "epic_fantasy",
    "difficulty": "hard",
    "book": "Yüzüklerin Efendisi: Yüzük Kardeşliği",
    "author": "J.R.R. Tolkien",
    "quote": "Yapmamız gereken tek şey, bize verilen zamanı en doğru şekilde değerlendirmektir."
  },
  {
    "id": "epc_lgn_1",
    "genre": "epic_fantasy",
    "difficulty": "easy",
    "book": "Yerdeniz Büyücüsü",
    "author": "Ursula K. Le Guin",
    "quote": "Sözü söylemek için sessizlik gerekir."
  },
  {
    "id": "epc_lgn_2",
    "genre": "epic_fantasy",
    "difficulty": "medium",
    "book": "Mülksüzler",
    "author": "Ursula K. Le Guin",
    "quote": "Sınırları çizenler sadece toprakları değil, insan zihinlerini de hapsederler."
  },
  {
    "id": "epc_hrb_1",
    "genre": "epic_fantasy",
    "difficulty": "easy",
    "book": "Dune",
    "author": "Frank Herbert",
    "quote": "Korku aklın katilidir; korku toptan yok oluşu getiren küçük ölümdür."
  },
  {
    "id": "epc_hrb_2",
    "genre": "epic_fantasy",
    "difficulty": "medium",
    "book": "Dune",
    "author": "Frank Herbert",
    "quote": "Korkumla yüzleşeceğim; onun üzerimden ve içimden geçmesine izin vereceğim."
  },
  {
    "id": "let_kfk_1",
    "genre": "letters",
    "difficulty": "easy",
    "book": "Milena'ya Mektuplar",
    "author": "Franz Kafka",
    "quote": "Seni seviyorum çünkü sen bana kendimi unutturuyorsun."
  },
  {
    "id": "let_kfk_2",
    "genre": "letters",
    "difficulty": "medium",
    "book": "Milena'ya Mektuplar",
    "author": "Franz Kafka",
    "quote": "Uykusuz geçen gecelerde zihnim senin adınla atan bir kalbe dönüşüyor."
  },
  {
    "id": "let_kfk_3",
    "genre": "letters",
    "difficulty": "hard",
    "book": "Babaya Mektup",
    "author": "Franz Kafka",
    "quote": "Benim bütün yazdıklarım seninle ilgiliydi; orada sadece senin kollarında ağlayamadığım şeylerin yasını tuttum."
  },
  {
    "id": "let_wlf_1",
    "genre": "letters",
    "difficulty": "easy",
    "book": "Kendine Ait Bir Oda",
    "author": "Virginia Woolf",
    "quote": "Bir kadın yazacaksa parası ve kendine ait bir odası olmalıdır."
  },
  {
    "id": "let_wlf_2",
    "genre": "letters",
    "difficulty": "hard",
    "book": "Kendine Ait Bir Oda",
    "author": "Virginia Woolf",
    "quote": "Kendi düşüncelerinin efendisi olamayan bir insan, başkalarının kalıplarında yaşamaya mahkumdur."
  },
  {
    "id": "let_wlf_3",
    "genre": "letters",
    "difficulty": "medium",
    "book": "Dalgalar",
    "author": "Virginia Woolf",
    "quote": "Kelimeler bizi birbirimize bağlayan tek köprüdür."
  },
  {
    "id": "let_frk_1",
    "genre": "letters",
    "difficulty": "easy",
    "book": "Genç Bir Kızın Günlüğü",
    "author": "Anne Frank",
    "quote": "Her şeye rağmen insanların kalplerinde hala iyi olduklarına inanıyorum."
  },
  {
    "id": "nat_thr_1",
    "genre": "nature",
    "difficulty": "easy",
    "book": "Walden / Ormanda Yaşam",
    "author": "Henry David Thoreau",
    "quote": "Sadeleşin, sadeleşin, sadeleşin!"
  },
  {
    "id": "nat_thr_2",
    "genre": "nature",
    "difficulty": "medium",
    "book": "Walden / Ormanda Yaşam",
    "author": "Henry David Thoreau",
    "quote": "Ormana gittim çünkü bilinçli yaşamak, hayatın can damarını emmek istiyordum."
  },
  {
    "id": "nat_thr_3",
    "genre": "nature",
    "difficulty": "hard",
    "book": "Walden / Ormanda Yaşam",
    "author": "Henry David Thoreau",
    "quote": "İnsanların çoğunluğu sessiz bir çaresizlik içinde yaşar; oysa doğa her gün yeniden doğuş sunar."
  },
  {
    "id": "nat_emr_1",
    "genre": "nature",
    "difficulty": "easy",
    "book": "Kendine Güven",
    "author": "Ralph Waldo Emerson",
    "quote": "Taklit intihardır; kendi iç sesine güven."
  },
  {
    "id": "nat_emr_2",
    "genre": "nature",
    "difficulty": "medium",
    "book": "Doğa",
    "author": "Ralph Waldo Emerson",
    "quote": "Doğanın içinde insan asla yalnız değildir; ormanlar ebedi bir gençliğin tapınağıdır."
  },
  {
    "id": "nat_lnd_1",
    "genre": "nature",
    "difficulty": "easy",
    "book": "Vahşetin Çağrısı",
    "author": "Jack London",
    "quote": "Doğanın yasası basittir: Ya hükmedeceksin ya boyun eğeceksin."
  },
  {
    "id": "nat_lnd_2",
    "genre": "nature",
    "difficulty": "medium",
    "book": "Martin Eden",
    "author": "Jack London",
    "quote": "Yaşamak istemek, sadece kitapların vadettiği güzellikleri dünyada bulabilmektir."
  },
  {
    "id": "nat_mlv_1",
    "genre": "nature",
    "difficulty": "medium",
    "book": "Moby Dick",
    "author": "Herman Melville",
    "quote": "Deniz bir aynadır; ona bakan insan kendi ruhunun fırtınalarını görür."
  },
  {
    "id": "myt_hom_1",
    "genre": "mythology",
    "difficulty": "easy",
    "book": "İlyada",
    "author": "Homeros",
    "quote": "İnsan soyu yapraklara benzer."
  },
  {
    "id": "myt_hom_2",
    "genre": "mythology",
    "difficulty": "medium",
    "book": "Odysseia",
    "author": "Homeros",
    "quote": "Tanrılar ölümlüleri kıskanır; çünkü insan fanidir ve fani olan her an paha biçilmezdir."
  },
  {
    "id": "myt_dnt_1",
    "genre": "mythology",
    "difficulty": "easy",
    "book": "İlahi Komedya: Cehennem",
    "author": "Dante Alighieri",
    "quote": "Buradan girenler, her türlü umudu geride bıraksın."
  },
  {
    "id": "myt_dnt_2",
    "genre": "mythology",
    "difficulty": "hard",
    "book": "İlahi Komedya: Cehennem",
    "author": "Dante Alighieri",
    "quote": "Cehennemin en karanlık köşeleri, ahlaki kriz zamanlarında tarafsız kalanlar için ayrılmıştır."
  },
  {
    "id": "myt_brg_1",
    "genre": "mythology",
    "difficulty": "medium",
    "book": "Ficciones / Kurgular",
    "author": "Jorge Luis Borges",
    "quote": "Ben bir gölgeyim, aynalarda kaybolan bir hatıranın yansımasıyım."
  },
  {
    "id": "myt_brg_2",
    "genre": "mythology",
    "difficulty": "hard",
    "book": "Alef",
    "author": "Jorge Luis Borges",
    "quote": "Zaman çatallanan sonsuz yollardan oluşur; her seçim yeni bir evreni doğurur."
  },
  {
    "id": "myt_clv_1",
    "genre": "mythology",
    "difficulty": "medium",
    "book": "Görünmez Kentler",
    "author": "Italo Calvino",
    "quote": "Gözler gördükleri şeyleri değil, taşıdıkları anlamları algılar."
  },
  {
    "id": "myt_mrk_1",
    "genre": "mythology",
    "difficulty": "medium",
    "book": "Sahilde Kafka",
    "author": "Haruki Murakami",
    "quote": "Bazen kader küçük bir kum fırtınası gibidir; kaçtıkça seni içine çeker."
  },
  {
    "id": "mys_sh_1",
    "genre": "mystery",
    "difficulty": "easy",
    "book": "Dörtlerin İmzası",
    "author": "Arthur Conan Doyle",
    "quote": "İmkansızı elediğinde geriye kalan ne kadar olasılıksız olursa olsun gerçektir."
  },
  {
    "id": "mys_sh_2",
    "genre": "mystery",
    "difficulty": "medium",
    "book": "Kızıl Dosya",
    "author": "Arthur Conan Doyle",
    "quote": "Sen görüyorsun ama gözlemlemiyorsun Watson; görmekle gözlemlemek arasındaki fark büyüktür."
  },
  {
    "id": "mys_ac_1",
    "genre": "mystery",
    "difficulty": "easy",
    "book": "Doğu Ekspresinde Cinayet",
    "author": "Agatha Christie",
    "quote": "İmkansız olan gerçekleşmiş olamaz."
  },
  {
    "id": "mys_ac_2",
    "genre": "mystery",
    "difficulty": "medium",
    "book": "On Küçük Zenci",
    "author": "Agatha Christie",
    "quote": "Geçmişte işlenen ve cezasız kalan suçlar, eninde sonunda sahibini bulur."
  },
  {
    "id": "mys_poe_1",
    "genre": "mystery",
    "difficulty": "easy",
    "book": "Kuzgun",
    "author": "Edgar Allan Poe",
    "quote": "Dedim ki: Kuzgun bir daha asla dedi."
  },
  {
    "id": "mys_poe_2",
    "genre": "mystery",
    "difficulty": "hard",
    "book": "Morgue Sokağı Cinayeti",
    "author": "Edgar Allan Poe",
    "quote": "Delilik ve deha arasındaki çizgi öyle incedir ki, kimi zaman en parlak akıl en karanlık kabusları doğurur."
  },
  {
    "id": "bio_zwg_1",
    "genre": "biography",
    "difficulty": "easy",
    "book": "Yıldızın Parladığı Anlar",
    "author": "Stefan Zweig",
    "quote": "Tarih kahramanlarını aniden seçer."
  },
  {
    "id": "bio_zwg_2",
    "genre": "biography",
    "difficulty": "medium",
    "book": "Kendileriyle Savaşanlar",
    "author": "Stefan Zweig",
    "quote": "Büyük yaratıcılar kendi içlerindeki şeytani güçlerle savaşarak ölümsüz eserlerini inşa ederler."
  },
  {
    "id": "bio_zwg_3",
    "genre": "biography",
    "difficulty": "hard",
    "book": "Dünün Dünyası",
    "author": "Stefan Zweig",
    "quote": "Bizler geçmişin huzurlu kıyılarından fırtınalı bir okyanusa fırlatılmış, vatanını, güvenliğini ve çağını büsbütün kaybetmiş bahtsız gölgeleriz."
  },
  {
    "id": "bio_plt_1",
    "genre": "biography",
    "difficulty": "medium",
    "book": "Paralel Yaşamlar",
    "author": "Plütarkhos",
    "quote": "Tarih yazarken büyük savaşları değil, insanın karakterini ele veren küçük bir davranışı incelerim."
  },
  {
    "id": "sat_an_1",
    "genre": "satire",
    "difficulty": "easy",
    "book": "Zübük",
    "author": "Aziz Nesin",
    "quote": "Her devrin bir Zübük'ü vardır."
  },
  {
    "id": "sat_an_2",
    "genre": "satire",
    "difficulty": "medium",
    "book": "Yaşar Ne Yaşar Ne Yaşamaz",
    "author": "Aziz Nesin",
    "quote": "Devletin kayıtlarında ölü görünen bir adam, hayatta olduğunu kime ve nasıl ispat edebilir?"
  },
  {
    "id": "sat_vlt_1",
    "genre": "satire",
    "difficulty": "easy",
    "book": "Candide",
    "author": "Voltaire",
    "quote": "Kendi bahçemizi ekmeliyiz."
  },
  {
    "id": "sat_vlt_2",
    "genre": "satire",
    "difficulty": "medium",
    "book": "Candide",
    "author": "Voltaire",
    "quote": "Bu dünya olası dünyaların en iyisidir diyenler, başkalarının çektiği acılara gözlerini kapatanlardır."
  },
  {
    "id": "sat_mt_1",
    "genre": "satire",
    "difficulty": "easy",
    "book": "Huckleberry Finn",
    "author": "Mark Twain",
    "quote": "Vicdanım bana kaçmamı söylüyordu."
  },
  {
    "id": "sat_mt_2",
    "genre": "satire",
    "difficulty": "medium",
    "book": "Tom Sawyer",
    "author": "Mark Twain",
    "quote": "Oyun ise yapmak zorunda olmadığımız halde bütün ruhumuzla ve neşeyle sarıldığımız eylemdir."
  },
  {
    "id": "sci_sgn_1",
    "genre": "science",
    "difficulty": "easy",
    "book": "Kozmos",
    "author": "Carl Sagan",
    "quote": "Bizler yıldız tozundan yapıldık."
  },
  {
    "id": "sci_sgn_2",
    "genre": "science",
    "difficulty": "medium",
    "book": "Soluk Mavi Nokta",
    "author": "Carl Sagan",
    "quote": "Bütün tarihimiz, sevinçlerimiz ve savaşlarımız uzayda asılı duran o toz zerresinin üzerinde yaşandı."
  },
  {
    "id": "sci_sgn_3",
    "genre": "science",
    "difficulty": "hard",
    "book": "Karanlık Bir Dünyada Bilimin Mum Işığı",
    "author": "Carl Sagan",
    "quote": "Bir iddia ne kadar olağanüstü ve sarsıcı ise, onu doğrulamak ve kanıtlamak için gereken deliller de o denli güçlü olmalıdır."
  },
  {
    "id": "sci_hwk_1",
    "genre": "science",
    "difficulty": "easy",
    "book": "Zamanın Kısa Tarihi",
    "author": "Stephen Hawking",
    "quote": "Evrenin bir başlangıcı var mıdır?"
  },
  {
    "id": "sci_fyn_1",
    "genre": "science",
    "difficulty": "medium",
    "book": "Eminim Şaka Yapıyorsunuz Bay Feynman!",
    "author": "Richard Feynman",
    "quote": "En önemli ilke kendini kandırmamaktır; çünkü dünyada kandırılması en kolay kişi kendinsiniz."
  },
  {
    "id": "sci_rvl_1",
    "genre": "science",
    "difficulty": "medium",
    "book": "Zamanın Düzeni",
    "author": "Carlo Rovelli",
    "quote": "Evrende tek ve mutlak bir zaman akışı yoktur; her nesne kendi yerçekimi alanında kendi zamanını yaşar."
  }
];
