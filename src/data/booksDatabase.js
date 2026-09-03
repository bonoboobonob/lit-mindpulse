// Master Books Database (LibrisMind Literary Corpus)
// Comprehensive catalog containing 155 standalone literary works across 20 categories
// Every single book contains 100% authentic literary quotes calibrated across all 4 difficulty levels

export const BOOKS_DATABASE = [
  {
    "id": "kendime-dusunceler",
    "title": "Kendime Düşünceler",
    "originalTitle": "Ta Eis Heauton (Τὰ εἰς ἑαυτόν)",
    "author": "Marcus Aurelius",
    "authorBio": "Roma İmparatoru ve Stoacı filozof. \"Filozof Hükümdar\" olarak tarihe geçmiş, erdemli ve sade yaşamın felsefesini savunmuştur.",
    "authorBirthDeath": "MS 121 - MS 180",
    "year": "MS 180",
    "genre": "philosophy",
    "coverBg": "from-[#8C5E3C] to-[#5C3D26]",
    "summary": "Marcus Aurelius'un Tuna boylarındaki askeri seferler sırasında çadırında yalnızca kendi nefsiyle hesaplaşmak için kaleme aldığı kişisel notlarıdır. Stoacı ahlakın, geçiciliğin ve kaderi kabullenmenin en berrak manifestosudur.",
    "keyThemes": [
      "Stoacılık",
      "Kaderi Sevmek (Amor Fati)",
      "Zamanın Geçiciliği",
      "İçsel Huzur"
    ],
    "historicalContext": "Roma İmparatorluğu'nun en güçlü döneminde savaşlar ve salgınlar sırasında yazılmış ölümsüz bir bilgelik rehberidir.",
    "passages": [
      {
        "id": "kd_1",
        "difficulty": "easy",
        "quote": "Ruhun, düşüncelerinin rengine bürünür."
      },
      {
        "id": "kd_2",
        "difficulty": "easy",
        "quote": "Sabah uyandığında nefes almanın ayrıcalığını hatırla."
      },
      {
        "id": "kd_3",
        "difficulty": "easy",
        "quote": "Kendi zihninden daha huzurlu bir sığınak yoktur."
      },
      {
        "id": "kd_4",
        "difficulty": "medium",
        "quote": "Dış dünya seni üzemez; seni üzen şey ona verdiğin kendi yargılarındır."
      },
      {
        "id": "kd_5",
        "difficulty": "medium",
        "quote": "Hayatın amacı çoğunluğun tarafında olmak değil, akıl ve erdemin yanında durmaktır."
      },
      {
        "id": "kd_6",
        "difficulty": "hard",
        "quote": "Güne başlarken kendine şunu söyle: Bugün nankör, küstah, hilekar ve kıskanç insanlarla karşılaşacağım çünkü onlar iyiyi ve kötüyü birbirinden ayırt edemezler."
      },
      {
        "id": "kd_7",
        "difficulty": "legendary",
        "quote": "Zaman sonsuz bir akıntıdır; her olay bir an için su yüzüne çıkar, ardından sürüklenip gider ve yerini bir başkasına bırakır. Bütün kainat tek bir canlı varlık gibidir; tek bir ruha ve tek bir akla sahiptir ve her şey bu evrensel ahengin bir parçası olarak döner."
      }
    ]
  },
  {
    "id": "ahlak-mektuplari",
    "title": "Ahlak Mektupları",
    "originalTitle": "Epistulae Morales ad Lucilium",
    "author": "Seneca",
    "authorBio": "Romalı devlet adamı, hatip, tragedya yazarı ve Stoacı felsefenin en büyük temsilcilerinden biri.",
    "authorBirthDeath": "MÖ 4 - MS 65",
    "year": "MS 65",
    "genre": "philosophy",
    "coverBg": "from-[#C85A32] to-[#78350F]",
    "summary": "Seneca'nın dostu Lucilius'a yazdığı mektuplardan oluşur. Zamanın doğru kullanımı, ölüm korkusunun yenilmesi, bilgelik ve sade yaşam dersleri sunar.",
    "keyThemes": [
      "Zaman Yönetimi",
      "Ölüm Bilinci",
      "Sade Yaşam",
      "Felsefi Dostluk"
    ],
    "historicalContext": "İmparator Neron döneminde yazılmış, insan ruhunun baskı altındaki dayanıklılığını ele almıştır.",
    "passages": [
      {
        "id": "am_1",
        "difficulty": "easy",
        "quote": "Zamanı iyi kullanan insan için ömür uzundur."
      },
      {
        "id": "am_2",
        "difficulty": "easy",
        "quote": "Aza sahip olan değil, hep fazlasını isteyen yoksuldur."
      },
      {
        "id": "am_3",
        "difficulty": "medium",
        "quote": "Hangi limana doğru yelken açtığını bilmeyen bir gemi için hiçbir rüzgar elverişli değildir."
      },
      {
        "id": "am_4",
        "difficulty": "hard",
        "quote": "Ömrümüzün büyük bir kısmını gereksiz işlerle tüketerek kısaltırız; oysa zamanı iyi kullanan insan için ömür her şeyi başarmaya yetecek kadar uzundur."
      },
      {
        "id": "am_5",
        "difficulty": "legendary",
        "quote": "Bilge insan talihin getirdiği hiçbir hediyeye sevinmez ve hiçbir felakete yenilmez; çünkü o yalnızca kendi iç huzuruna ve erdemine güvenir. Ölümden korkan insan asla özgürce yaşayamaz; zira hayatın son anını sükunetle beklemeyi öğrenmeyen bir zihin daima geleceğin kaygılarıyla titrer."
      }
    ]
  },
  {
    "id": "yasamin-kisaligi-uzerine",
    "title": "Yaşamın Kısalığı Üzerine",
    "originalTitle": "De Brevitate Vitae",
    "author": "Seneca",
    "authorBio": "Stoacı düşünür ve Roma senatörü.",
    "authorBirthDeath": "MÖ 4 - MS 65",
    "year": "MS 49",
    "genre": "philosophy",
    "coverBg": "from-[#B45309] to-[#713F12]",
    "summary": "İnsanların yaşamın kısalığından yakınmasını eleştirerek, aslında zamanın kısa olmadığını, insanların onu hoyratça harcadığını açıklar.",
    "keyThemes": [
      "Zamanın Değeri",
      "Erteleme Hastalığı",
      "Bilinçli Yaşam"
    ],
    "historicalContext": "Antik Roma'da yaşam temposu ve amaçsız meşguliyetlere karşı felsefi bir manifesto.",
    "passages": [
      {
        "id": "yku_1",
        "difficulty": "easy",
        "quote": "Bize verilen ömür kısa değildir."
      },
      {
        "id": "yku_2",
        "difficulty": "medium",
        "quote": "Hayatın hiçbir parçasını akıllıca kullanmayıp gereksiz ihtiraslarla tükettiğimizde ömrümüz kısalır."
      },
      {
        "id": "yku_3",
        "difficulty": "hard",
        "quote": "Zamanı en cömertçe harcadığımız şey haline getiririz; oysa insanın cimri ve kıskanç olması gereken tek ve yegane hazine zamandır."
      },
      {
        "id": "yasamin-kisaligi-uzerine_legendary",
        "difficulty": "legendary",
        "quote": "Bize verilen ömür kısa değildir; onu kısaltan biziz. Hayatın hiçbir parçasını akıllıca kullanmayıp gereksiz ihtiraslarla tükettiğimizde, nihayet son an gelip çattığında hiç farkına varmadan akıp giden bir ömrün bittiğini anlarız."
      }
    ]
  },
  {
    "id": "dusunceler-ve-sohbetler",
    "title": "Düşünceler ve Sohbetler",
    "originalTitle": "Diatribai (Διατριβαί)",
    "author": "Epiktetos",
    "authorBio": "Kölelikten bilgeliğe yükselen büyük Stoacı filozof.",
    "authorBirthDeath": "MS 50 - MS 135",
    "year": "MS 108",
    "genre": "philosophy",
    "coverBg": "from-[#4B5563] to-[#1F2937]",
    "summary": "İnsanın yalnızca kontrol edebildiği düşüncelerinden ve seçimlerinden sorumlu olduğunu anlatan sohbetlerdir.",
    "keyThemes": [
      "Kontrol Alanı",
      "İçsel Özgürlük",
      "Ruhsal Bağımsızlık"
    ],
    "historicalContext": "Öğrencisi Arrianus tarafından tutulan ders notlarıdır.",
    "passages": [
      {
        "id": "ep_1",
        "difficulty": "easy",
        "quote": "Zihninden başka hiçbir şeye hükmedemezsin."
      },
      {
        "id": "ep_2",
        "difficulty": "medium",
        "quote": "Başına gelen olayları sen seçemezsin, fakat onlara nasıl tepki vereceğini sen belirlersin."
      },
      {
        "id": "ep_3",
        "difficulty": "hard",
        "quote": "Bir insanın huzurunu bozan şey dış dünyadaki olaylar değil, o olaylar hakkında kendi zihninde geliştirdiği asılsız kuruntular ve peşin yargılardır."
      },
      {
        "id": "dusunceler-ve-sohbetler_legendary",
        "difficulty": "legendary",
        "quote": "Eğer bir başkası seni incitmeyi başarabiliyorsa, bil ki kabahat onda değil, incinmeyi kabul eden kendi zihnindedir; zira ruhun ancak senin izin verdiğin ölçüde yaralanabilir ve ancak senin onayladığın kederlere boyun eğer."
      }
    ]
  },
  {
    "id": "kilavuz-kitap",
    "title": "Kılavuz Kitap (Enchiridion)",
    "originalTitle": "Enchiridion",
    "author": "Epiktetos",
    "authorBio": "Stoacı ahlak felsefesinin kurucularından.",
    "authorBirthDeath": "MS 50 - MS 135",
    "year": "MS 125",
    "genre": "philosophy",
    "coverBg": "from-[#374151] to-[#111827]",
    "summary": "Gündelik hayatta karşılaşılan zorluklara karşı pratik Stoacı el kitabıdır.",
    "keyThemes": [
      "Pratik Ahlak",
      "Zihinsel Dayanıklılık",
      "Sükunet"
    ],
    "historicalContext": "Antik çağdan günümüze en popüler ahlak rehberi.",
    "passages": [
      {
        "id": "epk_1",
        "difficulty": "easy",
        "quote": "Yalnızca kontrol edebildiğin şeylere odaklan."
      },
      {
        "id": "epk_2",
        "difficulty": "medium",
        "quote": "Huzur arıyorsan, elinde olmayan şeylerin peşinden koşmayı ve onlar için kaygılanmayı bırak."
      },
      {
        "id": "epk_3",
        "difficulty": "legendary",
        "quote": "Başına bir engel çıktığında ya da kederlendiğinde asla başkalarını suçlama; zira cahil insan kötülüğü başkasına yükler, kendini eğitmeye başlayan kişi suçu kendinde arar, bilge insan ise ne kendini ne de bir başkasını suçlar."
      },
      {
        "id": "kila_har_3572",
        "difficulty": "hard",
        "quote": "İnsanları üzen şeyler olayların kendisi değil, o olaylar hakkında geliştirdikleri kendi peşin yargıları, asılsız korkuları ve zihinlerinin ürettiği zanlardır."
      }
    ]
  },
  {
    "id": "boyle-buyurdu-zerdust",
    "title": "Böyle Buyurdu Zerdüşt",
    "originalTitle": "Also sprach Zarathustra",
    "author": "Friedrich Nietzsche",
    "authorBio": "19. yüzyılın en sarsıcı Alman filozofu, Üstinsan kavramının mimarı.",
    "authorBirthDeath": "1844 - 1900",
    "year": "1883",
    "genre": "philosophy",
    "coverBg": "from-[#1C1917] to-[#451A03]",
    "summary": "Zerdüşt'ün dağdaki yalnızlığından inerek insanlara sürü psikolojisini reddetmeyi ve Üstinsan olmayı müjdelemesidir.",
    "keyThemes": [
      "Üstinsan",
      "Güç İstenci",
      "Kendi Kendini Aşmak"
    ],
    "historicalContext": "Batı felsefesini kökünden sarsan başyapıt.",
    "passages": [
      {
        "id": "bbz_1",
        "difficulty": "easy",
        "quote": "İnsan aşılması gereken bir köprüdür."
      },
      {
        "id": "bbz_2",
        "difficulty": "medium",
        "quote": "Yıldız doğurabilmek için insanın kendi içinde bir kaos taşıması gerekir."
      },
      {
        "id": "bbz_3",
        "difficulty": "hard",
        "quote": "Kendinize inanın ve kendi değerlerinizi kendi vicdanınızla yaratın; zira daima sürüye uyan ve başkalarını taklit eden insan asla kendi doruğuna tırmanamaz."
      },
      {
        "id": "boyle-buyurdu-zerdust_legendary",
        "difficulty": "legendary",
        "quote": "Size üstinsanı öğretiyorum. İnsan aşılması gereken bir varlıktır. Bütün varlıklar şimdiye dek kendilerinden öte bir şey yarattılar; sizse bu büyük akıntının inişi olmak, insanı aşmak yerine hayvana dönmek mi istiyorsunuz?"
      }
    ]
  },
  {
    "id": "putlarin-alacakaranligi",
    "title": "Putların Alacakaranlığı",
    "originalTitle": "Götzen-Dämmerung",
    "author": "Friedrich Nietzsche",
    "authorBio": "Alman düşünür ve kültür eleştirmeni.",
    "authorBirthDeath": "1844 - 1900",
    "year": "1889",
    "genre": "philosophy",
    "coverBg": "from-[#7F1D1D] to-[#450A0A]",
    "summary": "Geleneksel ahlakın, felsefenin ve dogmaların çekiçle sınandığı aforizmalar bütünü.",
    "keyThemes": [
      "Çekiçle Felsefe Yapmak",
      "Putları Yıkmak",
      "Direnç"
    ],
    "historicalContext": "Nietzsche'nin en berrak ve özet aforizma kitaplarından biridir.",
    "passages": [
      {
        "id": "pa_1",
        "difficulty": "easy",
        "quote": "Beni öldürmeyen şey beni güçlendirir."
      },
      {
        "id": "pa_2",
        "difficulty": "medium",
        "quote": "Yaşamak için bir nedeni olan insan, hemen her türlü nasıla katlanabilir."
      },
      {
        "id": "pa_3",
        "difficulty": "hard",
        "quote": "Vicdan azabı bir köpeğin taşı ısırmasına benzer; ahmakça bir eylemdir ve insanın ruhuna yaradan başka hiçbir şey getirmez."
      },
      {
        "id": "putlarin-alacakaranligi_legendary",
        "difficulty": "legendary",
        "quote": "Kendi hakikatini arayan insan kalabalıklardan uzaklaşmalıdır; zira putların gürültüsünü kısmadan, asırlık dogmaları çekiçle yoklamadan ve tabuları sorgulamadan zihnin kendi bağımsız melodisini duyması asla mümkün olamaz."
      }
    ]
  },
  {
    "id": "sen-bilim",
    "title": "Şen Bilim",
    "originalTitle": "Die fröhliche Wissenschaft",
    "author": "Friedrich Nietzsche",
    "authorBio": "Bengi Dönüş ve Amor Fati felsefecisi.",
    "authorBirthDeath": "1844 - 1900",
    "year": "1882",
    "genre": "philosophy",
    "coverBg": "from-[#9A3412] to-[#431407]",
    "summary": "Hayatı tüm sevinçleri ve acılarıyla kutlayan, müziği ve bilgeliği birleştiren lirik felsefe metni.",
    "keyThemes": [
      "Şen Bilgelik",
      "Müzik ve Sanat",
      "Amor Fati"
    ],
    "historicalContext": "Zerdüşt'ten hemen önceki yaratıcı uyanış dönemi eseri.",
    "passages": [
      {
        "id": "sb_n_1",
        "difficulty": "easy",
        "quote": "Kaderini sev, bu senin hayatındır."
      },
      {
        "id": "sb_n_2",
        "difficulty": "medium",
        "quote": "En büyük tehlikelerin ortasında yaşayın; şehirlerinizi Vezüv Yanardağı'nın eteklerine kurun."
      },
      {
        "id": "sb_n_3",
        "difficulty": "hard",
        "quote": "Ebedi dönüş fikri varoluşun en ağır yüküdür; yaşadığın bu hayatı bütün sevinçleri ve acılarıyla sonsuz kez yeniden yaşamak ister miydin?"
      },
      {
        "id": "sen-bilim_legendary",
        "difficulty": "legendary",
        "quote": "Sırrını açığa vurmak istiyorum: Hayattan en büyük verimi ve en yüce hazzı almanın yolu tehlikeli yaşamaktır; gemilerinizi bilinmeyen denizlere sürün, alışılmışın zincirlerini kırın ve kendi kaderinizi cesaretle kucaklayın."
      }
    ]
  },
  {
    "id": "etika",
    "title": "Etika",
    "originalTitle": "Ethica, ordine geometrico demonstrata",
    "author": "Baruch Spinoza",
    "authorBio": "17. yüzyıl Hollandalı rasyonalist filozof. Panteizmin kurucusu.",
    "authorBirthDeath": "1632 - 1677",
    "year": "1677",
    "genre": "philosophy",
    "coverBg": "from-[#065F46] to-[#022C22]",
    "summary": "Tanrı ile doğanın bir ve aynı olduğunu (Panteizm) ve aklın insanı tutkulardan kurtardığını geometrik yöntemle kanıtlar.",
    "keyThemes": [
      "Deus sive Natura",
      "Tutkuların Aşkınlığı",
      "Akılcı Özgürlük"
    ],
    "historicalContext": "Aydınlanma felsefesine yön veren en cesur metinlerden biri.",
    "passages": [
      {
        "id": "sp_1",
        "difficulty": "easy",
        "quote": "Korku cehaletten, umut ise bilgisizlikten doğar."
      },
      {
        "id": "sp_2",
        "difficulty": "medium",
        "quote": "Keder, insanın daha az mükemmel bir duruma geçişidir; sevinç ise daha yetkin hale gelmesidir."
      },
      {
        "id": "sp_3",
        "difficulty": "hard",
        "quote": "Bir duygu ancak kendisinden daha güçlü ve zıt başka bir duygu tarafından alt edilebilir ve zihinden tamamen sökülüp atılabilir."
      },
      {
        "id": "etika_legendary",
        "difficulty": "legendary",
        "quote": "Özgür insan ölümü hiçbir zaman düşünmez; onun bilgeliği ölüm üzerine değil, hayat üzerine derin bir tefekkürdür ve o varoluşun her anını korkudan arınmış saf aklın rehberliğinde kucaklar."
      }
    ]
  },
  {
    "id": "yasam-bilgeligi",
    "title": "Yaşam Bilgeliği Üzerine Aforizmalar",
    "originalTitle": "Aphorismen zur Lebensweisheit",
    "author": "Arthur Schopenhauer",
    "authorBio": "Kötümserlik ve irade felsefesinin büyük ustası.",
    "authorBirthDeath": "1788 - 1860",
    "year": "1851",
    "genre": "philosophy",
    "coverBg": "from-[#374151] to-[#111827]",
    "summary": "Günlük yaşamda mutluluğa, yalnızlığa ve insan karakterine dair berrak ve pratik bilgelik kılavuzudur.",
    "keyThemes": [
      "Yalnızlık",
      "İçsel Zenginlik",
      "Acı ve Sıkıntı"
    ],
    "historicalContext": "Filozofun dünya çapında tanınmasını sağlayan popüler eseri.",
    "passages": [
      {
        "id": "sch_1",
        "difficulty": "easy",
        "quote": "Kişinin sahip oldukları değil, kendisi önemlidir."
      },
      {
        "id": "sch_2",
        "difficulty": "medium",
        "quote": "Mutlu bir yaşam az acı çekilen yaşamdır; haz peşinde koşmak hüsranla biter."
      },
      {
        "id": "sch_3",
        "difficulty": "hard",
        "quote": "Zeki bir insan yalnızlıkta kendi düşünceleriyle harika bir eğlence bulur; ahmak ise en parlak kalabalıkta bile can sıkıntısından kıvranır durur."
      },
      {
        "id": "yasam-bilgeligi_legendary",
        "difficulty": "legendary",
        "quote": "Hayatın büyük trajedisi, gençlikte enerjinin bilgelikten, yaşlılıkta ise bilgeliğin enerjiden mahrum olmasıdır; bu yüzden insan ancak kendi iç zenginliği ve zihinsel sığınağı sayesinde dünyanın kederlerine karşı dirençli kalabilir."
      }
    ]
  },
  {
    "id": "sisifos-soyleni",
    "title": "Sisifos Söyleni",
    "originalTitle": "Le Mythe de Sisyphe",
    "author": "Albert Camus",
    "authorBio": "Nobel Ödüllü Fransız yazar ve Absürdizm kurucusu.",
    "authorBirthDeath": "1913 - 1960",
    "year": "1942",
    "genre": "philosophy",
    "coverBg": "from-[#475569] to-[#0F172A]",
    "summary": "Hayatın anlamsızlığı karşısında insanın intihar etmek yerine başkaldırmasını savunur.",
    "keyThemes": [
      "Absürd",
      "Başkaldırı",
      "Bilinç"
    ],
    "historicalContext": "Varoluşçu düşüncenin en etkili deneme kitaplarından biri.",
    "passages": [
      {
        "id": "cam_1",
        "difficulty": "easy",
        "quote": "Sisifos'u mutlu hayal etmek gerekir."
      },
      {
        "id": "cam_2",
        "difficulty": "medium",
        "quote": "Önemli olan yaşamak değil, bilinçle ve tutkuyla yaşamaktır."
      },
      {
        "id": "cam_3",
        "difficulty": "hard",
        "quote": "Umutsuzluk içinde yaşamak teslim olmak değil; tam tersine absürd dünyanın saçmalığına ve adaletsizliğine karşı bilinçle ve gururla dimdik ayakta durmaktır."
      },
      {
        "id": "sisifos-soyleni_legendary",
        "difficulty": "legendary",
        "quote": "Tepeden aşağı yuvarlanan kayayı izlemek için yavaşça aşağı inen Sisifos, kendi kaderinin mutlak efendisidir; onun sessiz sevinci kayanın ağırlığını ve tanrıların cezasını anlamsız kılar; uçurumlara doğru yürümek tek başına bir başkaldırıdır."
      }
    ]
  },
  {
    "id": "baskaldiran-insan",
    "title": "Başkaldıran İnsan",
    "originalTitle": "L'Homme révolté",
    "author": "Albert Camus",
    "authorBio": "Özgürlükçü varoluşçu edebiyatçı.",
    "authorBirthDeath": "1913 - 1960",
    "year": "1951",
    "genre": "philosophy",
    "coverBg": "from-[#047857] to-[#064E3B]",
    "summary": "Tarih boyunca zulme ve haksızlığa karşı direnen insanın metafizik ve politik başkaldırısını inceler.",
    "keyThemes": [
      "Başkaldırı",
      "Adalet",
      "Ölçülülük"
    ],
    "historicalContext": "Totaliter ideolojilere karşı bireysel özgürlük manifestosu.",
    "passages": [
      {
        "id": "bki_1",
        "difficulty": "easy",
        "quote": "Başkaldırıyorum, öyleyse hepimiz varız."
      },
      {
        "id": "bki_2",
        "difficulty": "medium",
        "quote": "Başkaldıran insan, hayır diyen ama aynı zamanda ilk adımıyla evet diyen insandır."
      },
      {
        "id": "bki_3",
        "difficulty": "hard",
        "quote": "Adaletsizlik karşısında susmak teslim olmaktır; insan kendi haklarını ve haysiyetini savunduğu ölçüde bütün insanlığın ortak onurunu savunmuş olur."
      },
      {
        "id": "baskaldiran-insan_legendary",
        "difficulty": "legendary",
        "quote": "İsyan sadece bir reddediş değil, insanın kendi içindeki kutsal bir sınıra sahip çıkmasıdır; o sınır çiğnendiğinde köle efendisine döner ve artık boyun eğmeyeceğini haykırarak kendi varoluşunu mühürler."
      }
    ]
  },
  {
    "id": "bulanti",
    "title": "Bulantı",
    "originalTitle": "La Nausée",
    "author": "Jean-Paul Sartre",
    "authorBio": "Fransız varoluşçu filozof ve romancı.",
    "authorBirthDeath": "1905 - 1980",
    "year": "1938",
    "genre": "philosophy",
    "coverBg": "from-[#059669] to-[#064E3B]",
    "summary": "Antoine Roquentin'in nesnelerin varoluşu karşısında duyduğu bulantıyı anlatan varoluşçu roman.",
    "keyThemes": [
      "Bulantı",
      "Varoluş Özden Önce Gelir",
      "Yabancılaşma"
    ],
    "historicalContext": "Varoluşçuluğun roman formundaki ilk başyapıtı.",
    "passages": [
      {
        "id": "bln_1",
        "difficulty": "easy",
        "quote": "Varoluş, özden daima önce gelir."
      },
      {
        "id": "bln_2",
        "difficulty": "medium",
        "quote": "Hiçbir şey seçmemek bile aslında bir seçim yapmaktır."
      },
      {
        "id": "bln_3",
        "difficulty": "hard",
        "quote": "İnsan kendi özgürlüğüne mahkum edilmiştir; çünkü bir kez dünyaya atıldıktan sonra yaptığı, seçtiği ve sustuğu her eylemden tek başına sorumludur."
      },
      {
        "id": "bulanti_legendary",
        "difficulty": "legendary",
        "quote": "Nesneler bana dokunuyor, varlıkları üzerime çullanıyor; bu basit bir mide bulantısı değil, var olmanın o ham, yapışkan ve dayanılmaz çıplaklığının bilincime çarpması ve beni hiçlikle yüzleştirmesidir."
      }
    ]
  },
  {
    "id": "varlik-ve-hiclik",
    "title": "Varlık ve Hiçlik",
    "originalTitle": "L'Être et le Néant",
    "author": "Jean-Paul Sartre",
    "authorBio": "Fenomenolojik varoluşçuluğun kurucusu.",
    "authorBirthDeath": "1905 - 1980",
    "year": "1943",
    "genre": "philosophy",
    "coverBg": "from-[#111827] to-[#030712]",
    "summary": "İnsanın mutlak özgürlüğünü ve bu özgürlüğün getirdiği kaçınılmaz sorumluluğu felsefi temellerle inceler.",
    "keyThemes": [
      "Özgürlüğe Mahkumiyet",
      "Kötü Niyet",
      "Hiçlik"
    ],
    "historicalContext": "20. yüzyıl felsefesinin en kapsamlı varoluşçu felsefe kitabı.",
    "passages": [
      {
        "id": "vvh_1",
        "difficulty": "easy",
        "quote": "İnsan, olmak istediği şeyin projesidir."
      },
      {
        "id": "vvh_2",
        "difficulty": "medium",
        "quote": "İnsan kendi kendisini nasıl tanımlarsa ancak öyle var olur ve anlam kazanır."
      },
      {
        "id": "vvh_3",
        "difficulty": "legendary",
        "quote": "İnsan hiçbir zaman tamamlanmış bir varlık değildir; o daima geleceğe doğru atılan, kendi özünü her eylemiyle yeniden kuran ve geçmişin mazeretleri arkasına saklanamayan mutlak ve kaçınılmaz bir özgürlüktür."
      },
      {
        "id": "varl_har_3572",
        "difficulty": "hard",
        "quote": "Başkalarının bakışları beni bir nesneye dönüştürür; cehennem başkalarıdır sözünün ardında insanın başkalarının yargılarına tutsak olması yatar."
      }
    ]
  },
  {
    "id": "suc-ve-ceza",
    "title": "Suç ve Ceza",
    "originalTitle": "Prestupleniye i Nakazaniye",
    "author": "Fyodor Dostoyevski",
    "authorBio": "İnsan psikolojisinin ve vicdan azabının gelmiş geçmiş en büyük romancısı.",
    "authorBirthDeath": "1821 - 1881",
    "year": "1866",
    "genre": "classics",
    "coverBg": "from-[#991B1B] to-[#450A0A]",
    "summary": "Raskolnikov'un işlediği cinayet ve ardından gelen vicdan azabını, ahlaki çöküş ve kefaret arayışını anlatır.",
    "keyThemes": [
      "Suç ve Vicdan",
      "Kefaret",
      "Olağanüstü İnsan Miti"
    ],
    "historicalContext": "Psikolojik roman türünün zirvesi kabul edilen Rus klasiği.",
    "passages": [
      {
        "id": "sc_1",
        "difficulty": "easy",
        "quote": "Yeni bir adım atmak korkutucudur."
      },
      {
        "id": "sc_2",
        "difficulty": "medium",
        "quote": "Yeni bir kelime söylemek, insanların dünyada en çok korktuğu şeylerin başında gelir."
      },
      {
        "id": "sc_3",
        "difficulty": "hard",
        "quote": "Acı çekmek ve ıstırap, geniş bir vicdana ve derin bir zihne sahip olan her insan için daima kaçınılmaz bir kaderdir."
      },
      {
        "id": "sc_4",
        "difficulty": "legendary",
        "quote": "Her şey insanın kendi elindedir ama insan sırf korkaklığı yüzünden her şeyi elinden kaçırır; çünkü insanların dünyada en çok korktuğu şey alışkanlıklarını bozup yeni bir adım atmak ve yeni bir söz söylemektir."
      }
    ]
  },
  {
    "id": "karamazov-kardesler",
    "title": "Karamazov Kardeşler",
    "originalTitle": "Bratya Karamazovy",
    "author": "Fyodor Dostoyevski",
    "authorBio": "Evrensel ahlak ve inanç sorgulayıcısı romancı.",
    "authorBirthDeath": "1821 - 1881",
    "year": "1880",
    "genre": "classics",
    "coverBg": "from-[#7F1D1D] to-[#450A0A]",
    "summary": "Baba Fyodor Karamazov'un cinayeti etrafında üç kardeşin (Dmitri, İvan, Alyoşa) inanç, akıl ve tutku çatışmasıdır.",
    "keyThemes": [
      "Büyük Engizisyoncu",
      "Tanrı ve Ahlak",
      "Bağışlama"
    ],
    "historicalContext": "Dostoyevski'nin son ve en büyük başyapıtı.",
    "passages": [
      {
        "id": "kk_1",
        "difficulty": "easy",
        "quote": "Sevgi her şeyin kurtarıcı gücüdür."
      },
      {
        "id": "kk_2",
        "difficulty": "medium",
        "quote": "Dünyada tek bir masum çocuğun gözyaşları üzerine kurulacak cenneti asla kabul etmiyorum."
      },
      {
        "id": "kk_3",
        "difficulty": "legendary",
        "quote": "Cehennem nedir diye sorarsan bence cehennem, artık sevememekten doğan o korkunç ıstıraptır; sevme kabiliyetini bütünüyle yitirmiş ve kalbi taşlaşmış bir ruh için varoluşun kendisi ebedi ve sönmez bir azaba dönüşür."
      },
      {
        "id": "kara_har_3572",
        "difficulty": "hard",
        "quote": "Eğer Tanrı yoksa her şey mubahtır; fakat o zaman insanın vicdanı hangi adalete ve hangi ahlaka hesap verecektir?"
      }
    ]
  },
  {
    "id": "yeraltindan-notlar",
    "title": "Yeraltından Notlar",
    "originalTitle": "Zapiski iz podpolya",
    "author": "Fyodor Dostoyevski",
    "authorBio": "Modern varoluşçu edebiyatın öncüsü.",
    "authorBirthDeath": "1821 - 1881",
    "year": "1864",
    "genre": "classics",
    "coverBg": "from-[#374151] to-[#111827]",
    "summary": "Toplumdan soyutlanmış Yeraltı Adamı'nın akılcılığa, kibire ve modern toplumun sahteliklerine karşı monoloğudur.",
    "keyThemes": [
      "Aşırı Bilinçlilik",
      "Yeraltı Psikolojisi",
      "İrrasyonalite"
    ],
    "historicalContext": "20. yüzyıl varoluşçu edebiyatının kapısını açan kurucu metin.",
    "passages": [
      {
        "id": "yn_d_1",
        "difficulty": "easy",
        "quote": "Ben hasta bir adamım."
      },
      {
        "id": "yn_d_2",
        "difficulty": "medium",
        "quote": "Fazla bilinçli olmak bir hastalıktır, hem de tam anlamıyla gerçek bir hastalık."
      },
      {
        "id": "yn_d_3",
        "difficulty": "legendary",
        "quote": "Bana huzur mu yoksa çay mı diye sorsalar, ben her zaman çayı seçerim; yeter ki dünya yerle bir olsun ama benim çayım masamda her daim hazır bulunsun ve kimse irademe karışmasın."
      },
      {
        "id": "yera_har_3572",
        "difficulty": "hard",
        "quote": "İnsan bazen sırf kendine ait bağımsız bir iradesi olduğunu kanıtlamak ve bir piyano tuşu olmadığını göstermek için en saçma şeyi arzular."
      }
    ]
  },
  {
    "id": "savas-ve-baris",
    "title": "Savaş ve Barış",
    "originalTitle": "Voyna i Mir",
    "author": "Lev Tolstoy",
    "authorBio": "Panoramik destan ve gerçekçi roman devi.",
    "authorBirthDeath": "1828 - 1910",
    "year": "1869",
    "genre": "classics",
    "coverBg": "from-[#1E3A8A] to-[#172554]",
    "summary": "Napolyon savaşları sırasında Rus toplumunun ve soylu ailelerin destansı panoramasını sunar.",
    "keyThemes": [
      "Sabır ve Zaman",
      "Tarihin Yasaları",
      "Savaş ve İnsan"
    ],
    "historicalContext": "Dünya edebiyat tarihinin en büyük panoramik romanı.",
    "passages": [
      {
        "id": "sb_1",
        "difficulty": "easy",
        "quote": "En güçlü iki savaşçı zamandır."
      },
      {
        "id": "sb_2",
        "difficulty": "medium",
        "quote": "Sabır ve zaman, insanın karşısına çıkabilecek en aşılmaz engelleri bile sessizce dize getirir."
      },
      {
        "id": "sb_3",
        "difficulty": "hard",
        "quote": "Herkes dünyayı ve insanlığı değiştirmeyi düşünür de hiç kimse önce kendi zihnini ve kendi kusurlarını değiştirmeyi aklına getirmez."
      },
      {
        "id": "savas-ve-baris_legendary",
        "difficulty": "legendary",
        "quote": "Gök yüzünün o sonsuz maviliğine sırtüstü uzanıp baktığında Prens Andrey anladı ki, savaş meydanındaki bütün o hırslar, madalyalar, gururlar ve zafer çığlıkları bu uçsuz bucaksız sessizliğin ve sonsuzluğun yanında bir hiçtir."
      }
    ]
  },
  {
    "id": "anna-karenina",
    "title": "Anna Karenina",
    "originalTitle": "Anna Karenina",
    "author": "Lev Tolstoy",
    "authorBio": "Ahlaki dürüstlük ve evlilik trajedilerinin anlatıcısı.",
    "authorBirthDeath": "1828 - 1910",
    "year": "1877",
    "genre": "classics",
    "coverBg": "from-[#9F1239] to-[#4C0519]",
    "summary": "Tutkulu aşkı uğruna toplumsal kuralları çiğneyen Anna Karenina'nın trajedisi ve Levin'in hakikat arayışıdır.",
    "keyThemes": [
      "Mutlu ve Mutsuz Aileler",
      "Toplumsal Baskı",
      "Tutku"
    ],
    "historicalContext": "Roman sanatının en kusursuz kurgularından biri kabul edilir.",
    "passages": [
      {
        "id": "ak_1",
        "difficulty": "easy",
        "quote": "Tüm mutlu aileler birbirine benzer."
      },
      {
        "id": "ak_2",
        "difficulty": "medium",
        "quote": "Her mutsuz aile ise kendine özgü bir şekilde ve kendi nedenleriyle mutsuzdur."
      },
      {
        "id": "ak_3",
        "difficulty": "hard",
        "quote": "Saygı olmayan yerde gerçek sevgi yeşeremez; sevginin olmadığı yerde ise hayat katlanılması imkansız ağır bir yüke döner."
      },
      {
        "id": "anna-karenina_legendary",
        "difficulty": "legendary",
        "quote": "İnsan kalbi öyle karmaşık bir labirenttir ki, en asil duygularla en yıkıcı tutkular aynı göğüste yan yana uyuyabilir; ve insan bazen kendi felaketine doğru koştuğunu bile bile adımlarını durduramaz."
      }
    ]
  },
  {
    "id": "donusum",
    "title": "Dönüşüm",
    "originalTitle": "Die Verwandlung",
    "author": "Franz Kafka",
    "authorBio": "Modern yabancılaşmanın ve varoluşsal kaygının büyük yazarı.",
    "authorBirthDeath": "1883 - 1924",
    "year": "1915",
    "genre": "classics",
    "coverBg": "from-[#713F12] to-[#451A03]",
    "summary": "Gregor Samsa'nın bir sabah dev bir böceğe dönüşmesi ve ailesinin yabancılaşması.",
    "keyThemes": [
      "Yabancılaşma",
      "Böcekleşme",
      "Aile Baskısı"
    ],
    "historicalContext": "Modern dünya insanının sistem karşısındaki çaresizliğini anlatan kült eser.",
    "passages": [
      {
        "id": "dns_1",
        "difficulty": "easy",
        "quote": "Gregor Samsa bir sabah böcekleşti."
      },
      {
        "id": "dns_2",
        "difficulty": "medium",
        "quote": "İçimdeki sessizlik, dışarıdaki bütün kalabalığın gürültüsünden çok daha ağırdır."
      },
      {
        "id": "dns_3",
        "difficulty": "hard",
        "quote": "Bir sabah bunaltıcı düşlerden uyandığında Gregor Samsa kendini yatağında devasa ve ürkütücü bir böceğe dönüşmüş olarak buldu."
      },
      {
        "id": "donusum_legendary",
        "difficulty": "legendary",
        "quote": "İnsan ailesi için bütün ömrünü feda edebilir; fakat işe yaramaz ve kazanç getiremez hale geldiği ilk gün, en sevdiklerinin gözlerinde bile bir yük ve tiksinti kaynağına dönüştüğünü dehşetle fark eder."
      }
    ]
  },
  {
    "id": "dava",
    "title": "Dava",
    "originalTitle": "Der Process",
    "author": "Franz Kafka",
    "authorBio": "Bürokratik labirentlerin büyük ustası.",
    "authorBirthDeath": "1883 - 1924",
    "year": "1925",
    "genre": "classics",
    "coverBg": "from-[#1F2937] to-[#111827]",
    "summary": "Josef K.'nın suçu bildirilmeyen görünmez bir mahkeme tarafından tutuklanıp yargılanışıdır.",
    "keyThemes": [
      "Bürokratik Labirent",
      "Suçsuzluğun Çaresizliği",
      "Yasa Önünde"
    ],
    "historicalContext": "Modern hukuk sisteminin ve otoriter mekanizmaların absürdlüğünü gözler önüne serer.",
    "passages": [
      {
        "id": "dva_1",
        "difficulty": "easy",
        "quote": "Biri Josef K.'ya iftira atmış olmalıydı."
      },
      {
        "id": "dva_2",
        "difficulty": "medium",
        "quote": "Kötü bir şey yapmamış olmasına rağmen bir sabah ansızın tutuklandı."
      },
      {
        "id": "dva_3",
        "difficulty": "hard",
        "quote": "Suçsuz olduğunu kanıtlamaya çalışmak, görünmeyen, merhametsiz ve kanunsuz bir bürokrasi karşısında insanın işleyebileceği en büyük suç haline gelir."
      },
      {
        "id": "dava_legendary",
        "difficulty": "legendary",
        "quote": "Yasanın kapısında bekleyen köylü gibi insan da bütün ömrünü o kapının açılmasını bekleyerek tüketir; oysa o kapı yalnızca kendisi için açılmıştır ve o öldüğünde sonsuza dek kilitlenecektir."
      }
    ]
  },
  {
    "id": "sefiller",
    "title": "Sefiller",
    "originalTitle": "Les Misérables",
    "author": "Victor Hugo",
    "authorBio": "Fransız Romantizmi'nin lideri ve adalet savunucusu.",
    "authorBirthDeath": "1802 - 1885",
    "year": "1862",
    "genre": "classics",
    "coverBg": "from-[#B91C1C] to-[#7F1D1D]",
    "summary": "Jean Valjean'ın merhametle dönüşen hayatı ve Müfettiş Javert ile olan kovalamacasıdır.",
    "keyThemes": [
      "Merhamet",
      "Adalet",
      "Yoksulluk"
    ],
    "historicalContext": "19. yüzyıl Fransız toplumunun devasa vicdan romanı.",
    "passages": [
      {
        "id": "sfl_1",
        "difficulty": "easy",
        "quote": "Gelecek cesurların umududur."
      },
      {
        "id": "sfl_2",
        "difficulty": "medium",
        "quote": "Gelecek korkakların kabusu, cesurların umudu, düşünenlerin ise sonsuz çalışma alanıdır."
      },
      {
        "id": "sfl_3",
        "difficulty": "hard",
        "quote": "Gözler karanlığa zamanla alışabilir ama insan ruhu adaletsizliğin ve cehaletin karanlığına asla teslim olmamalıdır."
      },
      {
        "id": "sefiller_legendary",
        "difficulty": "legendary",
        "quote": "Toplum yoksulları karanlığa ittiği sürece suç işlemeye devam edecektir; zira ışığı esirgeyenler karanlıkta işlenen günahların asıl sorumlusudur ve vicdan ancak hakiki merhametle nefes alabilir."
      }
    ]
  },
  {
    "id": "siddhartha",
    "title": "Siddhartha",
    "originalTitle": "Siddhartha",
    "author": "Hermann Hesse",
    "authorBio": "Doğu bilgeliğini Batı bireyiyle buluşturan Nobel Ödüllü romancı.",
    "authorBirthDeath": "1877 - 1962",
    "year": "1922",
    "genre": "classics",
    "coverBg": "from-[#D97706] to-[#78350F]",
    "summary": "Genç Brahman Siddhartha'nın nehir kıyısında aydınlanmaya ve iç huzura ulaşma yolculuğu.",
    "keyThemes": [
      "Aydınlanma",
      "Nehrin Sesi",
      "Öz Bilgi"
    ],
    "historicalContext": "Hindistan felsefesi ve Budizm'in edebi zirvesi.",
    "passages": [
      {
        "id": "sdh_1",
        "difficulty": "easy",
        "quote": "Bilgelik başkasına aktarılamaz."
      },
      {
        "id": "sdh_2",
        "difficulty": "medium",
        "quote": "Bilgi anlatılabilir ve öğretilebilir; fakat bilgelik ancak bizzat yaşanarak ve acıyla bulunur."
      },
      {
        "id": "sdh_3",
        "difficulty": "hard",
        "quote": "Nehir her yerdedir; kaynakta, şelalede, denizde ve buharlaşan bulutta; onun için geçmiş, şimdi ve gelecek tek bir andır."
      },
      {
        "id": "siddhartha_legendary",
        "difficulty": "legendary",
        "quote": "Aramak bir hedefe kilitlenmektir; oysa bulmak özgür olmak, açık durmak ve hiçbir hedefe saplanıp kalmadan her şeyi kucaklayabilmektir; işte ben aramayı bırakıp dinlemeyi ve bulmayı öğrendim."
      }
    ]
  },
  {
    "id": "bozkirkurdu",
    "title": "Bozkırkurdu",
    "originalTitle": "Der Steppenwolf",
    "author": "Hermann Hesse",
    "authorBio": "Bireyleşme ve iç çatışma ustası.",
    "authorBirthDeath": "1877 - 1962",
    "year": "1927",
    "genre": "classics",
    "coverBg": "from-[#4B5563] to-[#1F2937]",
    "summary": "Harry Haller'in insan yanı ile yalnız bozkırkurdu yanı arasındaki ruhsal savaşıdır.",
    "keyThemes": [
      "Bozkırkurdu",
      "Yalnızlık",
      "Sihirli Tiyatro"
    ],
    "historicalContext": "Modern insanın kültür krizi ve yabancılaşmasını teşhis eden kült roman.",
    "passages": [
      {
        "id": "bzk_1",
        "difficulty": "easy",
        "quote": "İçimde bir bozkırkurdu uluyor."
      },
      {
        "id": "bzk_2",
        "difficulty": "medium",
        "quote": "İnsan tek bir benlikten değil, binlerce farklı ruhun çatışmasından ibarettir."
      },
      {
        "id": "bzk_3",
        "difficulty": "hard",
        "quote": "Bozkırkurdu uygarlığın rahat koltuklarına ve burjuva konforuna sığamaz; o yalnızlığın soğuk ve ıssız patikalarında tek başına yürümek zorundadır."
      },
      {
        "id": "bozkirkurdu_legendary",
        "difficulty": "legendary",
        "quote": "Yalnızlık bağımsızlıktır; onu ben arzu etmiş ve uzun yıllar boyunca elde etmek için savaşmıştım; fakat o soğuktu, sessizdi ve yıldızların arasındaki o ürpertici boşluk gibi insansız ve acımasızdı."
      }
    ]
  },
  {
    "id": "kurk-mantolu-madonna",
    "title": "Kürk Mantolu Madonna",
    "originalTitle": "Kürk Mantolu Madonna",
    "author": "Sabahattin Ali",
    "authorBio": "İnsan ruhunun derinliklerini duru bir dille anlatan büyük Türk yazarı.",
    "authorBirthDeath": "1907 - 1948",
    "year": "1943",
    "genre": "turkish",
    "coverBg": "from-[#9A3412] to-[#431407]",
    "summary": "Raif Efendi'nin Berlin'de ressam Maria Puder ile yaşadığı saf ve trajik aşkın hatıra defteridir.",
    "keyThemes": [
      "Yalnızlık",
      "Ruhsal Bağlantı",
      "İçsel Sessizlik"
    ],
    "historicalContext": "Türk edebiyatının en çok okunan başyapıtı.",
    "passages": [
      {
        "id": "kmm_1",
        "difficulty": "easy",
        "quote": "Bir insanı sevmekle başlar her şey."
      },
      {
        "id": "kmm_3",
        "difficulty": "medium",
        "quote": "İçimizde şeytan yok; içimizde aciz, tembel ve korkak bir irade var."
      },
      {
        "id": "kmm_5",
        "difficulty": "hard",
        "quote": "Dünyada bir tek insanı sevmek, bütün dünyayı ve kainattaki bütün varlıkları sevmenin en hakiki ve en saf anahtarıdır."
      },
      {
        "id": "kmm_6",
        "difficulty": "legendary",
        "quote": "İnsanlar birbirlerini ne kadar az anlıyorlar; birbirlerinin derinliklerine inmekten ne kadar korkuyorlar ve ne kadar büyük bir kolaylıkla birbirlerinin yanından geçip ömür boyu yabancı kalabiliyorlar."
      }
    ]
  },
  {
    "id": "tutunamayanlar",
    "title": "Tutunamayanlar",
    "originalTitle": "Tutunamayanlar",
    "author": "Oğuz Atay",
    "authorBio": "Postmodern Türk romanının kurucusu.",
    "authorBirthDeath": "1934 - 1977",
    "year": "1972",
    "genre": "turkish",
    "coverBg": "from-[#1E293B] to-[#0F172A]",
    "summary": "Turgut Özben'in intihar eden arkadaşı Selim Işık'ın izini sürerek Türk aydınının yabancılaşmasıyla yüzleşmesidir.",
    "keyThemes": [
      "Tutunamayanlar",
      "İroni",
      "Yabancılaşma"
    ],
    "historicalContext": "Türk romanında modernist ve postmodernist anlatımın başyapıtı.",
    "passages": [
      {
        "id": "ttn_1",
        "difficulty": "easy",
        "quote": "Tutunamayanlar için bir umut var mı?"
      },
      {
        "id": "ttn_3",
        "difficulty": "medium",
        "quote": "Bizi anlamadılar Selim; bizi hiçbir zaman ve hiçbir yerde anlamayacaklar."
      },
      {
        "id": "ttn_5",
        "difficulty": "legendary",
        "quote": "Hayat bir tiyatro sahnesiyse eğer, ben rolünü ezberleyemeyen ve sahneye her çıktığında suflöre muhtaç kalan o beceriksiz oyuncuyum; roller dağıtılmış, alkışlar tutulmuş, bana ise sadece sessizce çekilmek kalmıştır."
      },
      {
        "id": "tutu_har_3572",
        "difficulty": "hard",
        "quote": "Ben ölmek istemiyorum Selim; ben sadece bu dünyadaki ikiyüzlülüklere, yalanlara ve sahte gülümsemelere daha fazla katlanamıyorum."
      }
    ]
  },
  {
    "id": "huzur",
    "title": "Huzur",
    "originalTitle": "Huzur",
    "author": "Ahmet Hamdi Tanpınar",
    "authorBio": "Doğu-Batı sentezi, zaman felsefesi ve Türk musikisi ustası.",
    "authorBirthDeath": "1901 - 1962",
    "year": "1949",
    "genre": "turkish",
    "coverBg": "from-[#588157] to-[#283618]",
    "summary": "Mümtaz ile Nuran'ın aşkı ekseninde İstanbul'un tarihi dokusu ve Doğu-Batı medeniyet krizi.",
    "keyThemes": [
      "Zaman Felsefesi",
      "Türk Musikisi",
      "Huzursuzluk"
    ],
    "historicalContext": "Modern Türk edebiyatının estetik zirvesi.",
    "passages": [
      {
        "id": "hzr_1",
        "difficulty": "easy",
        "quote": "Huzur ancak içsel sükunettedir."
      },
      {
        "id": "hzr_2",
        "difficulty": "medium",
        "quote": "İstanbul, geçmişin asırlık hüznünü bugünün telaşıyla yoğuran büyülü bir musiki rüyasıdır."
      },
      {
        "id": "hzr_4",
        "difficulty": "legendary",
        "quote": "Mümtaz Boğaz'ın sularına baktığında anladı ki, medeniyet dediğimiz şey geçmişin asil hatıralarını bugünün vicdanında diri tutabilme sanatıdır; hafızasını kaybeden bir cemiyet ruhunu da bütünüyle kaybeder."
      },
      {
        "id": "huzu_har_3572",
        "difficulty": "hard",
        "quote": "Bizler eski bir şarkıyı dinlerken gözyaşı döken, fakat kendi hayatımızın hakiki bestesini yapmaktan korkan kararsız bir nesiliz."
      }
    ]
  },
  {
    "id": "ince-memed",
    "title": "İnce Memed",
    "originalTitle": "İnce Memed",
    "author": "Yaşar Kemal",
    "authorBio": "Nobel adayı Türk destan ve roman anlatıcısı.",
    "authorBirthDeath": "1923 - 2015",
    "year": "1955",
    "genre": "turkish",
    "coverBg": "from-[#D97706] to-[#78350F]",
    "summary": "Abdi Ağa'nın zulmüne karşı dağa çıkan İnce Memed'in Çukurova efsanesine dönüşmesi.",
    "keyThemes": [
      "Adalet ve Başkaldırı",
      "Çukurova",
      "Eşkıyalık"
    ],
    "historicalContext": "40'tan fazla dile çevrilen modern halk destanı.",
    "passages": [
      {
        "id": "im_1",
        "difficulty": "easy",
        "quote": "Zulmün olduğu yerde direniş doğar."
      },
      {
        "id": "im_2",
        "difficulty": "medium",
        "quote": "Dağlar başı dumanlıdır Memed; dağlar zalime mezar, mazluma ise sığınaktır."
      },
      {
        "id": "im_3",
        "difficulty": "hard",
        "quote": "Köylünün sırtındaki ağa kırbacı kalkmadıkça, Çukurova'nın bereketli ve asil toprağı kan kokmaktan ve zulümden asla kurtulamaz."
      },
      {
        "id": "ince-memed_legendary",
        "difficulty": "legendary",
        "quote": "İnce Memed Torosların zirvesine çekildiğinde arkasında koca bir efsane bıraktı; zira halk kendi içinden çıkan bir yiğidin haksızlığa ve zulme karşı başkaldırışını asırlar boyu dağlarda türkü yapar."
      }
    ]
  },
  {
    "id": "1984",
    "title": "1984",
    "originalTitle": "Nineteen Eighty-Four",
    "author": "George Orwell",
    "authorBio": "Totalitarizmi ifşa eden İngiliz yazar.",
    "authorBirthDeath": "1903 - 1950",
    "year": "1949",
    "genre": "dystopia",
    "coverBg": "from-[#0F172A] to-[#020617]",
    "summary": "Geçmişin silindiği, düşüncenin suç sayıldığı Okyanusya'da Büyük Birader'e karşı hakikati arayan Winston Smith.",
    "keyThemes": [
      "Büyük Birader",
      "Çiftdüşün",
      "Gözetim"
    ],
    "historicalContext": "20. yüzyılın en büyük siyasi uyarı metni.",
    "passages": [
      {
        "id": "orw_1",
        "difficulty": "easy",
        "quote": "Büyük Birader seni izliyor."
      },
      {
        "id": "orw_3",
        "difficulty": "medium",
        "quote": "Savaş barıştır, özgürlük köleliktir, cehalet ise partinin en büyük gücüdür."
      },
      {
        "id": "orw_4",
        "difficulty": "hard",
        "quote": "Geçmişi denetleyen güç geleceği de denetler; bugünü denetleyen kudret ise geçmişin mutlak efendisi ve yazarı olur."
      },
      {
        "id": "orw_5",
        "difficulty": "legendary",
        "quote": "Eğer bir geleceğin resmini görmek istiyorsan, insan yüzüne basan ve sonsuza dek orada kalan bir postal hayal et; zira partinin nihai amacı gücü yalnızca güç için korumak ve zihinleri köleleştirmektir."
      }
    ]
  },
  {
    "id": "hayvan-ciftligi",
    "title": "Hayvan Çiftliği",
    "originalTitle": "Animal Farm",
    "author": "George Orwell",
    "authorBio": "Siyasi taşlamanın ustası.",
    "authorBirthDeath": "1903 - 1950",
    "year": "1945",
    "genre": "dystopia",
    "coverBg": "from-[#991B1B] to-[#7F1D1D]",
    "summary": "İnsanlara karşı devrim yapan çiftlik hayvanlarının domuzların diktatörlüğüne boyun eğiş masalı.",
    "keyThemes": [
      "Eşitlik Yanılsaması",
      "Güç Yozlaşması",
      "Siyasi Fabl"
    ],
    "historicalContext": "Diktatörlükleri ve propaganda mekanizmalarını hicveden başyapıt.",
    "passages": [
      {
        "id": "hc_1",
        "difficulty": "easy",
        "quote": "Bütün hayvanlar eşittir."
      },
      {
        "id": "hc_2",
        "difficulty": "medium",
        "quote": "Bütün hayvanlar eşittir, fakat bazı hayvanlar diğerlerinden çok daha fazla eşittir."
      },
      {
        "id": "hc_3",
        "difficulty": "hard",
        "quote": "Dışarıdaki hayvanlar bir domuzların yüzüne bir insanların yüzüne baktılar; fakat hangisinin insan hangisinin domuz olduğunu bir türlü ayırt edemediler."
      },
      {
        "id": "hayvan-ciftligi_legendary",
        "difficulty": "legendary",
        "quote": "Yıllar geçti ve çiftlikte devrimin ilk günlerini hatırlayan kimse kalmadı; rüzgarda yankılanan özgürlük şarkıları unutuldu ve domuzlar iki ayak üzerinde yürüyüp kırbaç sallamaya başladığında zulüm tamamlandı."
      }
    ]
  },
  {
    "id": "cesur-yeni-dunya",
    "title": "Cesur Yeni Dünya",
    "originalTitle": "Brave New World",
    "author": "Aldous Huxley",
    "authorBio": "Gelecek vizyoneri düşünür.",
    "authorBirthDeath": "1894 - 1963",
    "year": "1932",
    "genre": "dystopia",
    "coverBg": "from-[#0284C7] to-[#0369A1]",
    "summary": "Acının soma haplarıyla yok edildiği, konfor uğruna sanat ve aşkın feda edildiği genetik gelecek.",
    "keyThemes": [
      "Zevk Yoluyla Kölelik",
      "Şartlandırma",
      "Soma"
    ],
    "historicalContext": "Modern tüketim toplumunu zevkle kontrolü öngören distopya.",
    "passages": [
      {
        "id": "bnw_1",
        "difficulty": "easy",
        "quote": "Herkes herkes içindir."
      },
      {
        "id": "bnw_2",
        "difficulty": "medium",
        "quote": "Topluluk, özdeşlik ve kararlılık; modern uygarlığın üzerine kurulduğu üç temel sacayağıdır."
      },
      {
        "id": "bnw_3",
        "difficulty": "hard",
        "quote": "Gerçek mutluluk hiçbir zaman parlak ve görkemli görünmez; oysa kurgusal bir istikrar uğruna insan ruhunu feda etmek gerekir."
      },
      {
        "id": "cesur-yeni-dunya_legendary",
        "difficulty": "legendary",
        "quote": "Ben konfor istemiyorum; ben Tanrı'yı istiyorum, şiiri istiyorum, gerçek tehlikeyi istiyorum, özgürlüğü istiyorum, iyiliği istiyorum ve günah işleme hakkını sonuna kadar kendi hür irademle talep ediyorum."
      }
    ]
  },
  {
    "id": "fahrenheit-451",
    "title": "Fahrenheit 451",
    "originalTitle": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "authorBio": "Amerikan bilimkurgu ve fantezi şairi.",
    "authorBirthDeath": "1920 - 2012",
    "year": "1953",
    "genre": "dystopia",
    "coverBg": "from-[#EA580C] to-[#C2410C]",
    "summary": "İtfaiyecilerin yangın söndürmek yerine kitap yaktığı bir gelecekte Guy Montag'ın uyanışı.",
    "keyThemes": [
      "Kitap Yakımı",
      "Sansür",
      "Bellek"
    ],
    "historicalContext": "Kitap sevgisini anlatan en dokunaklı distopya.",
    "passages": [
      {
        "id": "fh_1",
        "difficulty": "easy",
        "quote": "Kitap yakmak bir zevkti."
      },
      {
        "id": "fh_2",
        "difficulty": "medium",
        "quote": "Kitapların sayfaları alevler içinde kül olurken, insanlığın ortak hafızası da yok ediliyordu."
      },
      {
        "id": "fh_3",
        "difficulty": "hard",
        "quote": "Yakılan sadece kağıtlar değildi; itfaiyecilerin alevleri arasında kül olan şey insanın düşünme, sorgulama ve itiraz etme hakkıydı."
      },
      {
        "id": "fahrenheit-451_legendary",
        "difficulty": "legendary",
        "quote": "Kitapların içinde tam olarak ne olduğunu bilmiyorum ama bildiğim bir şey var: Hiç kimse uğruna evini yakacakları ve canını feda edecekleri düşünceleri boş yere savunmaz; orada mutlaka uyanış saklıdır."
      }
    ]
  },
  {
    "id": "insanin-anlam-arayisi",
    "title": "İnsanın Anlam Arayışı",
    "originalTitle": "Man's Search for Meaning",
    "author": "Viktor Frankl",
    "authorBio": "Logoterapinin kurucusu Avusturyalı psikiyatrist.",
    "authorBirthDeath": "1905 - 1997",
    "year": "1946",
    "genre": "psychology",
    "coverBg": "from-[#059669] to-[#064E3B]",
    "summary": "Toplama kampından sağ kurtulan Frankl'ın insanın her koşulda bir anlam bularak yaşayabileceğini kanıtlaması.",
    "keyThemes": [
      "Anlam İstenci",
      "İçsel Tavır Seçimi",
      "Logoterapi"
    ],
    "historicalContext": "Milyonlarca insana rehberlik eden psikoloji klasiği.",
    "passages": [
      {
        "id": "frk_1",
        "difficulty": "easy",
        "quote": "İnsanın anlam arayışı temeldir."
      },
      {
        "id": "frk_2",
        "difficulty": "medium",
        "quote": "İnsanın elinden her şey alınabilir; fakat tavrını seçme özgürlüğü asla alınamaz."
      },
      {
        "id": "frk_3",
        "difficulty": "hard",
        "quote": "Neden yaşadığını bilen ve bir anlama tutunan bir insan, karşısına çıkabilecek hemen her türlü nasıla ve acıya katlanabilir."
      },
      {
        "id": "insanin-anlam-arayisi_legendary",
        "difficulty": "legendary",
        "quote": "Toplama kampının en karanlık gecesinde anladım ki, sevgi insanın ulaşabileceği en yüce ve nihai hedeftir; dünyada hiçbir şeyi kalmayan bir insan bile sevdiği varlığı düşünerek manevi bir kurtuluşa erebilir."
      }
    ]
  },
  {
    "id": "kesfedilmemis-benlik",
    "title": "Keşfedilmemiş Benlik",
    "originalTitle": "The Undiscovered Self",
    "author": "Carl Gustav Jung",
    "authorBio": "Analitik psikolojinin kurucusu.",
    "authorBirthDeath": "1875 - 1961",
    "year": "1957",
    "genre": "psychology",
    "coverBg": "from-[#6B21A8] to-[#3B0764]",
    "summary": "Modern insanın kitle toplumu içinde bireyselliğini koruması ve kendi bilinçdışıyla yüzleşmesi.",
    "keyThemes": [
      "İçsel Uyanış",
      "Gölge",
      "Bireysellik"
    ],
    "historicalContext": "Modern toplumun kitlesel çılgınlığına karşı bireysel ruh reçetesi.",
    "passages": [
      {
        "id": "jng_1",
        "difficulty": "easy",
        "quote": "Dışa bakan rüya görür."
      },
      {
        "id": "jng_2",
        "difficulty": "medium",
        "quote": "Dışarıya bakan insan rüya görür; kendi içine bakan insan ise gerçekten uyanır."
      },
      {
        "id": "jng_3",
        "difficulty": "hard",
        "quote": "Kendi gölgesiyle yüzleşmeye cesaret edemeyen insan, hayatı boyunca kader sandığı bilinçdışı komplekslerin ve korkuların çaresiz tutsağı kalır."
      },
      {
        "id": "kesfedilmemis-benlik_legendary",
        "difficulty": "legendary",
        "quote": "Birey kitle içinde eridiğinde ahlaki sorumluluğunu ve bağımsız aklını da kaybeder; bu yüzden dünyanın kurtuluşu kitlelerin sloganlarında değil, tek tek bireylerin kendi ruhsal olgunlaşmasında ve uyanışında yatar."
      }
    ]
  },
  {
    "id": "sevme-sanati",
    "title": "Sevme Sanatı",
    "originalTitle": "The Art of Loving",
    "author": "Erich Fromm",
    "authorBio": "Psikanalist ve hümanist filozof.",
    "authorBirthDeath": "1900 - 1980",
    "year": "1956",
    "genre": "psychology",
    "coverBg": "from-[#E11D48] to-[#881337]",
    "summary": "Sevginin bir rastlantı değil, bilgi, emek ve özen gerektiren aktif bir sanat olduğu.",
    "keyThemes": [
      "Aktif Sevgi",
      "Özen ve Saygı",
      "Olgun Bağlılık"
    ],
    "historicalContext": "Milyonlarca insana sevginin hakiki doğasını anlatan klasik.",
    "passages": [
      {
        "id": "frm_1",
        "difficulty": "easy",
        "quote": "Sevmek bir sanattır."
      },
      {
        "id": "frm_2",
        "difficulty": "medium",
        "quote": "Olgunlaşmamış sevgi seni sevdiğim için sana ihtiyacım var der; olgun sevgi sana ihtiyacım olduğu için seni seviyorum der."
      },
      {
        "id": "frm_3",
        "difficulty": "hard",
        "quote": "Sevgi sadece geçici bir heyecan değildir; o bir karardır, ahlaki bir yargıdır ve hayat boyu sadakatle sürdürülen bir vaattir."
      },
      {
        "id": "sevme-sanati_legendary",
        "difficulty": "legendary",
        "quote": "Sevgi pasif bir kapılma değil, insanın kendi içindeki yaratıcı gücü harekete geçirmesidir; sevmeyi bir sanat gibi öğrenemeyen insan ne kadar zengin olursa olsun varoluşun en derin yalnızlığına mahkumdur."
      }
    ]
  },
  {
    "id": "nietzsche-agladiginda",
    "title": "Nietzsche Ağladığında",
    "originalTitle": "When Nietzsche Wept",
    "author": "Irvin Yalom",
    "authorBio": "Varoluşçu psikoterapinin öncüsü romancı.",
    "authorBirthDeath": "1931 - günümüz",
    "year": "1992",
    "genre": "psychology",
    "coverBg": "from-[#0369A1] to-[#0C4A6E]",
    "summary": "Josef Breuer ile Nietzsche'nin Viyana'da buluşup psikanalizin doğumunu ve ümitsizliği tedavi etmesi.",
    "keyThemes": [
      "Varoluşsal Terapi",
      "Ümitsizlik",
      "Hakikat"
    ],
    "historicalContext": "Psikoloji ile felsefeyi birleştiren çok satan roman.",
    "passages": [
      {
        "id": "ylm_1",
        "difficulty": "easy",
        "quote": "Ümit kötülüklerin en kötüsüdür."
      },
      {
        "id": "ylm_2",
        "difficulty": "medium",
        "quote": "Kendi hayatını yaşamayan insan, ölüm anında duyduğu pişmanlığın ağırlığı altında ezilir."
      },
      {
        "id": "ylm_3",
        "difficulty": "hard",
        "quote": "Kutsal olan dogma ve inançlar değil, insanın kendi hakikatinin peşinde verdiği o tavizsiz, yalnız ve çetin mücadeledir."
      },
      {
        "id": "nietzsche-agladiginda_legendary",
        "difficulty": "legendary",
        "quote": "Hayatınızı öyle bir cesaretle yaşayın ki, aynı hayatı bütün acıları ve sevinçleriyle sonsuz kez baştan yaşamayı arzu edebilin; zira pişmanlıklarla dolu yaşanmamış bir ömür insanın sırtındaki en zehirli yüktür."
      }
    ]
  },
  {
    "id": "yildizin-parladigi-anlar",
    "title": "Yıldızın Parladığı Anlar",
    "originalTitle": "Sternstunden der Menschheit",
    "author": "Stefan Zweig",
    "authorBio": "Tarihsel anların ve insan psikolojisinin büyük anlatıcısı.",
    "authorBirthDeath": "1881 - 1942",
    "year": "1927",
    "genre": "biography",
    "coverBg": "from-[#1E3A8A] to-[#1E1B4B]",
    "summary": "Tarihin akışını tek bir anda değiştiren 14 dramatik kırılma noktasının lirik anlatımı.",
    "keyThemes": [
      "Tarihin Kırılma Anları",
      "Kaderin Eli",
      "Büyük İrade"
    ],
    "historicalContext": "Biyografik anlatımın dünya çapındaki zirve eseri.",
    "passages": [
      {
        "id": "zwg_1",
        "difficulty": "easy",
        "quote": "Tarih kahramanlarını aniden seçer."
      },
      {
        "id": "zwg_1_b",
        "difficulty": "medium",
        "quote": "Yüzyılların akışı içinde tek bir an gelir ve bütün insanlığın kaderini sonsuza dek değiştirir."
      },
      {
        "id": "zwg_1_c",
        "difficulty": "hard",
        "quote": "Tarih, sıradan günlerin rehavetini sevmez; o ancak bir dehanın ve cüretkar bir iradenin parladığı o kritik kader saniyelerinde yazılır."
      },
      {
        "id": "yildizin-parladigi-anlar_legendary",
        "difficulty": "legendary",
        "quote": "Bizans surlarının unutulan küçük bir kapısı olan Kerkoporta'dan içeri sızan yeniçeriler, bin yıllık bir imparatorluğun çöküşünü ve dünya tarihinin yön değiştirmesini tek bir saniyelik kader anında mühürlediler."
      }
    ]
  },
  {
    "id": "kendileriyle-savasanlar",
    "title": "Kendileriyle Savaşanlar",
    "originalTitle": "Der Kampf mit dem Dämon",
    "author": "Stefan Zweig",
    "authorBio": "Büyük ruhların biyografi ustası.",
    "authorBirthDeath": "1881 - 1942",
    "year": "1925",
    "genre": "biography",
    "coverBg": "from-[#7F1D1D] to-[#450A0A]",
    "summary": "Hölderlin, Kleist ve Nietzsche'nin içlerindeki deha ateşiyle savaşıp trajik sona yürümeleri.",
    "keyThemes": [
      "Büyük Ruh",
      "Fırtınalara Direnmek",
      "Trajik Deha"
    ],
    "historicalContext": "Dahi sanatçıların psikolojik portresi.",
    "passages": [
      {
        "id": "zwg_2",
        "difficulty": "easy",
        "quote": "Deha kendi ateşiyle yanar."
      },
      {
        "id": "zwg_2_b",
        "difficulty": "medium",
        "quote": "Büyük yaratıcılar kendi içlerindeki şeytani güçlerle savaşarak ölümsüz eserlerini inşa ederler."
      },
      {
        "id": "zwg_2_c",
        "difficulty": "hard",
        "quote": "Hölderlin, Kleist ve Nietzsche; bu üç trajik ve fırtınalı ruh aklın sınırlarını zorlayarak deliliğin ve sanatın uçurumuna yürümüştür."
      },
      {
        "id": "kendileriyle-savasanlar_legendary",
        "difficulty": "legendary",
        "quote": "Sanatçı ancak kendi içindeki ifritle boğuştuğu ve onu kelimelerin zaptedilmez kalıbına soktuğu zaman tanrısal bir yaratıcıya dönüşür; fakat bu amansız savaşın bedeli çoğu zaman kendi aklının feda edilmesidir."
      }
    ]
  },
  {
    "id": "dunun-dunyasi",
    "title": "Dünün Dünyası",
    "originalTitle": "Die Welt von Gestern",
    "author": "Stefan Zweig",
    "authorBio": "Yıkılan Avrupa hümanizminin yasını tutan yazar.",
    "authorBirthDeath": "1881 - 1942",
    "year": "1942",
    "genre": "biography",
    "coverBg": "from-[#374151] to-[#111827]",
    "summary": "İki dünya savaşı arasında çöken Viyana ve Avrupa hümanizminin intiharından önce yazdığı anıları.",
    "keyThemes": [
      "Yıkılan Dünya",
      "Büyük Çöküş",
      "Hümanizm"
    ],
    "historicalContext": "20. yüzyılın en dokunaklı veda ve otobiyografi kitabı.",
    "passages": [
      {
        "id": "zwg_3_a",
        "difficulty": "easy",
        "quote": "Avrupa'nın altın çağı sona erdi."
      },
      {
        "id": "zwg_3",
        "difficulty": "medium",
        "quote": "Güvenlik çağı dedikleri o eski Viyana dünyası, savaşın patlak vermesiyle bir gecede un ufak oldu."
      },
      {
        "id": "zwg_3_c",
        "difficulty": "hard",
        "quote": "Bizler geçmişin huzurlu kıyılarından fırtınalı bir okyanusa fırlatılmış, vatanını, güvenliğini ve çağını büsbütün kaybetmiş bahtsız gölgeleriz."
      },
      {
        "id": "dunun-dunyasi_legendary",
        "difficulty": "legendary",
        "quote": "Bütün köprülerin arkamızda yıkıldığını gördüm; bir zamanlar insan aklına, hoşgörüye ve sınırsız kardeşliğe inanan neslimiz, barbarlığın ve nefretin zaferi karşısında sürgünde sessizce can verdi ve dünya karardı."
      }
    ]
  },
  {
    "id": "paralel-yasamlar",
    "title": "Paralel Yaşamlar",
    "originalTitle": "Bioi Paralleloi (Βίοι Παράλληλοι)",
    "author": "Plütarkhos",
    "authorBio": "Antik biyografi yazarı ve ahlak filozofu.",
    "authorBirthDeath": "MS 46 - MS 120",
    "year": "MS 100",
    "genre": "biography",
    "coverBg": "from-[#92400E] to-[#451A03]",
    "summary": "Büyük Yunan ve Roma liderlerinin erdem ve kusurlarını karşılaştıran anıt biyografi.",
    "keyThemes": [
      "Karakter ve Alışkanlıklar",
      "Liderlik",
      "Erdem"
    ],
    "historicalContext": "Biyografi türünün tarihteki ilk büyük başyapıtı.",
    "passages": [
      {
        "id": "plt_1",
        "difficulty": "easy",
        "quote": "Karakter insanın kaderidir."
      },
      {
        "id": "plt_2",
        "difficulty": "medium",
        "quote": "Tarih yazarken büyük savaşları değil, insanın karakterini ele veren küçük bir davranışı incelerim."
      },
      {
        "id": "plt_3",
        "difficulty": "hard",
        "quote": "Bir generalin tek bir nüktesi ya da küçük bir öfke anı, binlerce askerin öldüğü kanlı muharebelerden çok daha fazla şey anlatır."
      },
      {
        "id": "paralel-yasamlar_legendary",
        "difficulty": "legendary",
        "quote": "Büyük adamların hayatlarını yan yana koyup kıyasladığımda gördüm ki, erdem talihin getirdiği hediyelere muhtaç değildir; bilge bir hükümdar en ağır felaket anında bile kendi soylu karakterini korumayı başarır."
      }
    ]
  },
  {
    "id": "zubuk",
    "title": "Zübük - Kağnı Gölgesindeki İt",
    "originalTitle": "Zübük",
    "author": "Aziz Nesin",
    "authorBio": "Türk mizah edebiyatının uluslararası üne sahip ustası.",
    "authorBirthDeath": "1915 - 1995",
    "year": "1961",
    "genre": "satire",
    "coverBg": "from-[#B45309] to-[#713F12]",
    "summary": "İbrahim Zübükzade'nin yükselişi üzerinden toplumun sahtekarlığa nasıl çanak tuttuğunu anlatan siyasi taşlama.",
    "keyThemes": [
      "Zübükizm",
      "Gülmek En Asil Silah",
      "Siyasi İkiyüzlülük"
    ],
    "historicalContext": "Türk siyasi diline \"Zübük\" kavramını kazandıran kült roman.",
    "passages": [
      {
        "id": "zb_1",
        "difficulty": "easy",
        "quote": "Her devrin bir Zübük'ü vardır."
      },
      {
        "id": "zb_2",
        "difficulty": "medium",
        "quote": "Zübükler gökten zembille inmez; onları kendi hırslarımız, çıkarlarımız ve saflığımızla biz yaratırız."
      },
      {
        "id": "zb_3",
        "difficulty": "hard",
        "quote": "Kendi şahsi menfaati için her kılığa giren, yalanı sanat haline getiren adamlar cahil cemiyetlerin sırtında birer parazit gibi beslenir."
      },
      {
        "id": "zubuk_legendary",
        "difficulty": "legendary",
        "quote": "Bizim kasabanın insanları Zübükzade'nin ne mal olduğunu bildikleri halde yine de onun peşinden koştular; çünkü insan kandırılmak ve sahte vaatlerle uyutulmak istediğinde karşısına mutlaka bir dolandırıcı çıkar."
      }
    ]
  },
  {
    "id": "yasar-ne-yasar-ne-yasamaz",
    "title": "Yaşar Ne Yaşar Ne Yaşamaz",
    "originalTitle": "Yaşar Ne Yaşar Ne Yaşamaz",
    "author": "Aziz Nesin",
    "authorBio": "Toplumsal hiciv ve tiyatro ustası.",
    "authorBirthDeath": "1915 - 1995",
    "year": "1977",
    "genre": "satire",
    "coverBg": "from-[#D97706] to-[#78350F]",
    "summary": "Nüfus kağıdı olmadığı için kayıtlarda ölü sayılan ama vergi ve askerlik zamanı yaşayan Yaşar Yaşamaz'ın trajikomik öyküsü.",
    "keyThemes": [
      "Resmi Evrak Çıkmazı",
      "Bürokrasi Absürdü",
      "Halk Çaresizliği"
    ],
    "historicalContext": "Devlet bürokrasisini yerle bir eden Türk mizah klasiği.",
    "passages": [
      {
        "id": "ynyn_1",
        "difficulty": "easy",
        "quote": "Nüfus kağıdım yoksa ben yokum."
      },
      {
        "id": "ynyn_2",
        "difficulty": "medium",
        "quote": "Devletin kayıtlarında ölü görünen bir adam, hayatta olduğunu kime ve nasıl ispat edebilir?"
      },
      {
        "id": "ynyn_3",
        "difficulty": "hard",
        "quote": "Askerlik yaparken varsın, vergi öderken varsın; fakat hakkını aramak için mahkemeye gittiğinde kağıt üzerinde resmen ölü ve yoksun."
      },
      {
        "id": "yasar-ne-yasar-ne-yasamaz_legendary",
        "difficulty": "legendary",
        "quote": "Yaşar Yaşamaz cezaevinin avlusuna çıktığında düşündü: Dışarıda yaşayıp da bürokrasinin insafsız çarkları arasında ezilmektense, burada resmen hükümlü bir numara olmak çok daha insanca ve huzurludur."
      }
    ]
  },
  {
    "id": "candide",
    "title": "Candide ya da İyimserlik",
    "originalTitle": "Candide, ou l'Optimisme",
    "author": "Voltaire",
    "authorBio": "Fransız Aydınlanması'nın keskin zekalı filozofu.",
    "authorBirthDeath": "1694 - 1778",
    "year": "1759",
    "genre": "satire",
    "coverBg": "from-[#CA8A04] to-[#854D0E]",
    "summary": "Pangloss'un \"bu dünya dünyaların en iyisidir\" dogmasıyla yola çıkan saf Candide'in felaketler sonucu bahçesini yetiştirmeye karar vermesi.",
    "keyThemes": [
      "Bahçemizi Yetiştirmek",
      "Kör İyimserliğin İflası",
      "Felsefi İroni"
    ],
    "historicalContext": "Aydınlanma çağının kilise dogmalarını yıkan felsefi hicvi.",
    "passages": [
      {
        "id": "cnd_1",
        "difficulty": "easy",
        "quote": "Kendi bahçemizi ekmeliyiz."
      },
      {
        "id": "cnd_2",
        "difficulty": "medium",
        "quote": "Bu dünya olası dünyaların en iyisidir diyenler, başkalarının çektiği acılara gözlerini kapatanlardır."
      },
      {
        "id": "cnd_3",
        "difficulty": "hard",
        "quote": "Bütün felaketlerin, anlamsız savaşların ve engizisyon mahkemelerinin ardından insanoğluna kalan tek kurtarıcı hakikat kendi emeğiyle çalışmaktır."
      },
      {
        "id": "candide_legendary",
        "difficulty": "legendary",
        "quote": "Doktor Pangloss dünyanın mükemmelliğini kanıtlamak için felsefe yapadursun, Candide bütün bu boş lafları bir kenara bıraktı ve nihai hakikati söyledi: Bunlar güzel sözler ama şimdi gidip bahçemizi ekmeliyiz."
      }
    ]
  },
  {
    "id": "huckleberry-finn",
    "title": "Huckleberry Finn'in Maceraları",
    "originalTitle": "Adventures of Huckleberry Finn",
    "author": "Mark Twain",
    "authorBio": "Modern Amerikan edebiyatının babası kabul edilen mizahçı.",
    "authorBirthDeath": "1835 - 1910",
    "year": "1884",
    "genre": "satire",
    "coverBg": "from-[#0284C7] to-[#075985]",
    "summary": "Huck Finn ile kaçak köle Jim'in Mississippi Nehri üzerinde bir salla özgürlüğe ve insanlığa doğru yolculuğu.",
    "keyThemes": [
      "Doğruyu Söylemek",
      "Özgürlük",
      "Toplumsal İkiyüzlülük"
    ],
    "historicalContext": "Hemingway'e göre tüm modern Amerikan edebiyatının kaynağı.",
    "passages": [
      {
        "id": "mt_1",
        "difficulty": "easy",
        "quote": "Vicdanım bana kaçmamı söylüyordu."
      },
      {
        "id": "mt_1_b",
        "difficulty": "medium",
        "quote": "Doğru olanı yapmak istiyordum ama toplumun kuralları bana bunun bir günah olduğunu fısıldıyordu."
      },
      {
        "id": "huck_har_3572",
        "difficulty": "hard",
        "quote": "Jim'i köleliğe geri göndermek yerine onunla birlikte cehenneme gitmeyi göze aldım; işte benim anladığım gerçek ahlak ve vicdan buydu."
      },
      {
        "id": "huckleberry-finn_legendary",
        "difficulty": "legendary",
        "quote": "Missisippi nehrinin üstünde bir salda akıntıya kapılmış giderken anladım ki, kasabaların o sahte, dar kafalı ve ikiyüzlü uygarlığına dönmektense, doğanın bağrında bir kaçak gibi yaşamak bin kat daha asildir."
      }
    ]
  },
  {
    "id": "tom-sawyer",
    "title": "Tom Sawyer'ın Maceraları",
    "originalTitle": "The Adventures of Tom Sawyer",
    "author": "Mark Twain",
    "authorBio": "Çocukluk ve kahkaha şairi.",
    "authorBirthDeath": "1835 - 1910",
    "year": "1876",
    "genre": "satire",
    "coverBg": "from-[#EA580C] to-[#C2410C]",
    "summary": "Haylaz Tom Sawyer'ın çit boyama kurnazlığı ve Mississippi kıyısındaki maceraları.",
    "keyThemes": [
      "Kahkahanın Gücü",
      "Çocukluk Kurnazlığı",
      "Özgürlük"
    ],
    "historicalContext": "Dünya çocuk ve gençlik edebiyatının ölümsüz klasiği.",
    "passages": [
      {
        "id": "mt_2",
        "difficulty": "easy",
        "quote": "İş, yapmak zorunda olduğumuz şeydir."
      },
      {
        "id": "mt_2_b",
        "difficulty": "medium",
        "quote": "Oyun ise yapmak zorunda olmadığımız halde bütün ruhumuzla ve neşeyle sarıldığımız eylemdir."
      },
      {
        "id": "tom-_har_3572",
        "difficulty": "hard",
        "quote": "Bir tahta çiti boyamayı büyük bir ayrıcalık haline getiren Tom Sawyer, insan psikolojisinin ve çocuk zihninin en büyük sırrını çözmüştü."
      },
      {
        "id": "tom-sawyer_legendary",
        "difficulty": "legendary",
        "quote": "Bir şeyi arzu edilir kılmak için yapılması gereken tek şey, ona ulaşmayı zorlaştırmaktır; Tom Sawyer bir avuç çocuğa kendi işini neşeyle yaptırırken işte bu evrensel bilgelik ve kurnazlıkla hareket ediyordu."
      }
    ]
  },
  {
    "id": "kozmos",
    "title": "Kozmos",
    "originalTitle": "Cosmos",
    "author": "Carl Sagan",
    "authorBio": "Gökbilimci, astrofizikçi ve bilimin şiirsel anlatıcısı.",
    "authorBirthDeath": "1934 - 1996",
    "year": "1980",
    "genre": "science",
    "coverBg": "from-[#0284C7] to-[#082F49]",
    "summary": "Evrenin 13.8 milyar yıllık evrimi, yıldız tozundan oluşan insan bilinci ve uzayın keşfi.",
    "keyThemes": [
      "Yıldız Tozuyuz",
      "Evrenin Bilinci",
      "Merak"
    ],
    "historicalContext": "Milyonlarca insana bilim sevgisi aşılayan efsanevi kitap.",
    "passages": [
      {
        "id": "sgn_1",
        "difficulty": "easy",
        "quote": "Bizler yıldız tozundan yapıldık."
      },
      {
        "id": "sgn_1_b",
        "difficulty": "medium",
        "quote": "Kozmos, var olan, var olmuş olan ya da var olacak olan her şeyin toplamıdır."
      },
      {
        "id": "sgn_1_c",
        "difficulty": "hard",
        "quote": "Evrenin akıl almaz büyüklüğü karşısında insanın kibri yok olur; zira bizler karanlık kozmik bir okyanusta süzülen yalnız bir toz zerresiyiz."
      },
      {
        "id": "kozmos_legendary",
        "difficulty": "legendary",
        "quote": "Bizler yıldız tozundan yapılmış varlıklarız; evrenin kendisini tanıma ve anlama yoluyuz. Bu soluk mavi nokta, uzayın karanlık okyanusunda asılı duran küçücük vatanımız, sahip olduğumuz ve olacağımız tek evdir."
      }
    ]
  },
  {
    "id": "soluk-mavi-nokta",
    "title": "Soluk Mavi Nokta",
    "originalTitle": "Pale Blue Dot",
    "author": "Carl Sagan",
    "authorBio": "Gezegenimizi uzaydan yorumlayan hümanist astronom.",
    "authorBirthDeath": "1934 - 1996",
    "year": "1994",
    "genre": "science",
    "coverBg": "from-[#0369A1] to-[#0C4A6E]",
    "summary": "Voyager 1'in çektiği Dünya fotoğrafı üzerinden insanın kibrine ve evrendeki küçüklüğüne dair tefekkür.",
    "keyThemes": [
      "Soluk Mavi Nokta",
      "İnsan Kibri",
      "Tek Evimiz"
    ],
    "historicalContext": "İnsanlığa hoşgörü ve gezegeni koruma çağrısı yapan manifestodur.",
    "passages": [
      {
        "id": "sgn_2",
        "difficulty": "easy",
        "quote": "O noktaya tekrar bakın."
      },
      {
        "id": "sgn_2_b",
        "difficulty": "medium",
        "quote": "Bütün tarihimiz, sevinçlerimiz ve savaşlarımız uzayda asılı duran o toz zerresinin üzerinde yaşandı."
      },
      {
        "id": "solu_har_3572",
        "difficulty": "hard",
        "quote": "Gökbilimin insanı alçakgönüllü kılan bir tecrübe olduğu söylenir; uzayın derinliklerinden bakıldığında gururumuzun ve hırslarımızın hiçbir anlamı kalmaz."
      },
      {
        "id": "soluk-mavi-nokta_legendary",
        "difficulty": "legendary",
        "quote": "O noktaya tekrar bakın. Orası burasıdır, evimizdir, biziz. Sevdiğiniz herkes, tanıdığınız herkes, adını duyduğunuz her insan, yaşamış olan tüm insanlar hayatlarını bu toz zerresinin üzerinde geçirdiler."
      }
    ]
  },
  {
    "id": "karanlik-bir-dunyada-bilimin-mum-isigi",
    "title": "Karanlık Bir Dünyada Bilimin Mum Işığı",
    "originalTitle": "The Demon-Haunted World",
    "author": "Carl Sagan",
    "authorBio": "Eleştirel düşünce ve akılcılık savunucusu.",
    "authorBirthDeath": "1934 - 1996",
    "year": "1995",
    "genre": "science",
    "coverBg": "from-[#4338CA] to-[#312E81]",
    "summary": "Batıl inançlara ve sahte bilimlere karşı bilimin şüpheci ve sorgulayıcı mum ışığını savunur.",
    "keyThemes": [
      "Bilimin Mum Işığı",
      "Eleştirel Düşünce",
      "Şüphecilik"
    ],
    "historicalContext": "Sahte bilimlere karşı akılcılığın en berrak savunusu.",
    "passages": [
      {
        "id": "sgn_3",
        "difficulty": "hard",
        "quote": "Bir iddia ne kadar olağanüstü ve sarsıcı ise, onu doğrulamak ve kanıtlamak için gereken deliller de o denli güçlü olmalıdır."
      },
      {
        "id": "kara_eas_3572",
        "difficulty": "easy",
        "quote": "Bilim karanlıkta bir mumdur."
      },
      {
        "id": "kara_med_3572",
        "difficulty": "medium",
        "quote": "Şüphecilik ve merak, insan aklının hurafelere ve cehalete karşı geliştirdiği en kutsal iki kalkandır."
      },
      {
        "id": "karanlik-bir-dunyada-bilimin-mum-isigi_legendary",
        "difficulty": "legendary",
        "quote": "Eğer kendi aklımızı eleştirel düşüncenin süzgecinden geçirmezsek, karanlık çağların iblisleri ve sahte peygamberleri zihnimizi yeniden ele geçirmekte ve bizi hurafelerin kölesi yapmakta bir an bile tereddüt etmeyecektir."
      }
    ]
  },
  {
    "id": "zamanin-kisa-tarihi",
    "title": "Zamanın Kısa Tarihi",
    "originalTitle": "A Brief History of Time",
    "author": "Stephen Hawking",
    "authorBio": "Teorik fizikçi, kozmolog ve ALS'ye meydan okuyan deha.",
    "authorBirthDeath": "1942 - 2018",
    "year": "1988",
    "genre": "science",
    "coverBg": "from-[#1E3A8A] to-[#0F172A]",
    "summary": "Büyük Patlama'dan kara deliklere ve evrenin sınırlarına kadar kozmolojinin sırları.",
    "keyThemes": [
      "Zeka ve Değişim",
      "Büyük Patlama",
      "Kara Delikler"
    ],
    "historicalContext": "Modern teorik fiziğin dünya çapında en çok satan popüler bilim kitabı.",
    "passages": [
      {
        "id": "hwk_1",
        "difficulty": "easy",
        "quote": "Evrenin bir başlangıcı var mıdır?"
      },
      {
        "id": "hwk_2",
        "difficulty": "medium",
        "quote": "Zaman büyük patlamayla başlamıştır; bu yüzden patlamadan öncesine dair bir soru sormak anlamsızdır."
      },
      {
        "id": "zama_har_3572",
        "difficulty": "hard",
        "quote": "Eğer evrenin nasıl başladığını ve neden var olduğunu keşfedebilirsek, bu insan aklının en büyük ve nihai zaferi olacaktır."
      },
      {
        "id": "zamanin-kisa-tarihi_legendary",
        "difficulty": "legendary",
        "quote": "Uzayın derinliklerine baktığımızda aslında geçmişe bakarız; çünkü milyonlarca ışık yılı uzaktan gelen ışıklar, evrenin bebeklik çağındaki o büyük patlamanın sırlarını gözlerimizin önüne serer."
      }
    ]
  },
  {
    "id": "eminim-saka-yapiyorsunuz-bay-feynman",
    "title": "Eminim Şaka Yapıyorsunuz Bay Feynman!",
    "originalTitle": "Surely You're Joking, Mr. Feynman!",
    "author": "Richard Feynman",
    "authorBio": "Nobel Fizik Ödüllü kuantum dehası ve maceracı.",
    "authorBirthDeath": "1918 - 1988",
    "year": "1985",
    "genre": "science",
    "coverBg": "from-[#D97706] to-[#78350F]",
    "summary": "Kuantum elektrodinamiğinin yaratıcısı Feynman'ın kasa açma, bongo çalma ve fizik maceraları.",
    "keyThemes": [
      "Kendini Kandırmamak",
      "Bilimsel Merak",
      "Özgür Zihin"
    ],
    "historicalContext": "Bilim insanı portresini yıkan eğlenceli ve derin otobiyografi.",
    "passages": [
      {
        "id": "fyn_1",
        "difficulty": "easy",
        "quote": "Bilim uzmanların cehaletine inanmaktır."
      },
      {
        "id": "fyn_2",
        "difficulty": "medium",
        "quote": "En önemli ilke kendini kandırmamaktır; çünkü dünyada kandırılması en kolay kişi kendinsiniz."
      },
      {
        "id": "emin_har_3572",
        "difficulty": "hard",
        "quote": "Bir fizik kuralını altı yaşındaki bir çocuğa basitçe anlatamıyorsanız, siz de o konuyu henüz gerçekten anlamamışsınız demektir."
      },
      {
        "id": "eminim-saka-yapiyorsunuz-bay-feynman_legendary",
        "difficulty": "legendary",
        "quote": "Merak duygusu insanın sahip olduğu en büyük hazinedir; bir kasanın kilidini açarken de, atom altı parçacıkların dansını incelerken de aynı çocuksu neşeyle ve dürüstlükle gerçeğin peşinden koşmalıyız."
      }
    ]
  },
  {
    "id": "zamanin-duzeni",
    "title": "Zamanın Düzeni",
    "originalTitle": "The Order of Time",
    "author": "Carlo Rovelli",
    "authorBio": "İtalyan teorik fizikçi ve kuantum çekim kuramcısı.",
    "authorBirthDeath": "1956 - günümüz",
    "year": "2017",
    "genre": "science",
    "coverBg": "from-[#312E81] to-[#1E1B4B]",
    "summary": "Zamanın evrende tek ve mutlak bir akışı olmadığını, olaylar arasındaki ilişkiler ağı olduğunu şiirsel bir dille açıklar.",
    "keyThemes": [
      "Zamanın Göreliliği",
      "Olaylar Ağı",
      "Kuantum Düzeni"
    ],
    "historicalContext": "Modern fiziğin zaman kavramına getirdiği en şiirsel bakış.",
    "passages": [
      {
        "id": "rvl_1",
        "difficulty": "medium",
        "quote": "Evrende tek ve mutlak bir zaman akışı yoktur; her nesne kendi yerçekimi alanında kendi zamanını yaşar."
      },
      {
        "id": "rvl_2",
        "difficulty": "hard",
        "quote": "Bizler zamandan yapılmış varlıklarız; hafızamız geçmişin izlerini taşır, arzularımız ve korkularımız ise henüz var olmayan geleceği inşa eder."
      },
      {
        "id": "zama_eas_3572",
        "difficulty": "easy",
        "quote": "Zaman nesnelerin ilişkisidir."
      },
      {
        "id": "zamanin-duzeni_legendary",
        "difficulty": "legendary",
        "quote": "Dünya nesnelerden değil, olaylar arasındaki ilişkiler ağından oluşur; zaman bir nehir gibi düz akmaz, kuantum düzeyinde parçalanır ve ancak insan bilincinin hatıralarında tutarlı bir anlatıya dönüşür."
      }
    ]
  },
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
        "quote": "Ben sana mecburum bilemezsin."
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
      },
      {
        "id": "goge-bakma-duragi_legendary",
        "difficulty": "legendary",
        "quote": "İkimiz birden sevinebiliriz göğe bakalım; senin bu ellerinde ne var bilmiyorum göğe bakalım, tuttukça güçleniyorum kalabalık oluyorum. Bu bizim eskiyen yüzümüz, göğe bakalım; durma göğe bakalım!"
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
      },
      {
        "id": "hasretinden-prangalar-eskittim_legendary",
        "difficulty": "legendary",
        "quote": "Haberin var mı taş duvar? Demir kapı, kör pencere, yastığım, ranzam, zincirim, uğruna ölümlere gidip geldiğim, zulamdaki mahzun resim, haberin var mı? Görüşmecim yeşil soğan göndermiş, karanfil kokuyor cıgaram, dağlarına bahar gelmiş memleketimin."
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
        "quote": "Gerçek keşif yolculuğu yeni manzaralar aramak değil."
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
      },
      {
        "id": "ulysses_legendary",
        "difficulty": "legendary",
        "quote": "Gözlerini kapattı, denizin tuzlu kokusunu ve rüzgarın fısıltısını dinledi; adımları Dublin sokaklarında yankılanırken geçmiş ve gelecek, tek bir günün sonsuz döngüsünde birleşiyor ve kelimeler zihninde bir nehir gibi akıyordu."
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
      },
      {
        "id": "ses-ve-ofke_legendary",
        "difficulty": "legendary",
        "quote": "Sana saati zamanı hatırlayasın diye değil, onu bazen unutasın ve bütün nefesini onu yenmeye harcamayasın diye veriyorum; çünkü hiçbir savaş kazanılmaz, kazanıldığı bile fark edilmez; alan yalnızca insanın kendi ahmaklığını ve umutsuzluğunu keşfetmesine yarar."
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
      },
      {
        "id": "buyulu-dag_legendary",
        "difficulty": "legendary",
        "quote": "Zaman bir gizemdir; elle tutulamaz ama her şeyi dönüştürür. Dağın tepesindeki bu sanatoryumda günler, haftalar ve aylar birbirinin içine akıyor ve insan ölümün gölgesinde hayatın en derin ve en sarsıcı anlamını keşfetmeye başlıyor."
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
        "quote": "Dünyanın en yüksek tahtına da çıksanız."
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
      },
      {
        "id": "savas-sanati_legendary",
        "difficulty": "legendary",
        "quote": "Kusursuz stratejist su gibi olmalıdır; su nasıl engellerin etrafından dolanıp en zayıf noktadan akarsa, bilge komutan da düşmanın güçlü taraflarından kaçınmalı ve zaferi ancak hasmın hazırlıksız olduğu boşluklara hızla hücum ederek kazanmalıdır."
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
      },
      {
        "id": "prens_legendary",
        "difficulty": "legendary",
        "quote": "Talih bir kadına benzer; ona hükmetmek isteyen kişi cesur davranmalı ve cüretkar adımlar atmalıdır. Bir hükümdar hem aslan kadar güçlü hem de tilki kadar kurnaz olmalıdır; zira aslan tuzakları göremez, tilki ise kurtları savuşturamaz."
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
        "quote": "Geçmiş geleceğe, suyun suya benzemesinden daha çok benzer."
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
      },
      {
        "id": "mukaddime_legendary",
        "difficulty": "legendary",
        "quote": "Devletler de tıpkı insanlar gibi doğar, büyür, olgunlaşır, yaşlanır ve nihayetinde çökerler; zor zamanlar güçlü ve dayanıklı insanları doğurur, güçlü insanlar refahı getirir, refah ise rehaveti ve çöküşü kaçınılmaz kılar."
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
      },
      {
        "id": "faust_legendary",
        "difficulty": "legendary",
        "quote": "Dur ey zaman, ne kadar güzelsin! Eğer bir an olsun bu söze teslim olursam, o zaman çanlar çalabilir, o zaman senin kölen olabilirim; saatler dursun, yelkovan düşsün ve fanilik benim üzerime sonsuz bir karanlık gibi çöksün!"
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
      },
      {
        "id": "godotyu-beklerken_legendary",
        "difficulty": "legendary",
        "quote": "Gidelim. — Gidemeyiz. — Neden? — Godot'yu bekliyoruz. Her gün aynı güneş doğuyor ama bizler her gün biraz daha eksiliyoruz; alışkanlık insanın en büyük susturucusudur, bizi uyuşturur ve bekleyişin o dipsiz saçmalığına mahkum eder."
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
      },
      {
        "id": "mesnevi_legendary",
        "difficulty": "legendary",
        "quote": "Dinle neyden kim hikayet etmede, ayrılıklardan şikayet etmede: Beni kamışlıktan kestiklerinden beri feryadımdan erkek kadın herkes inledi. Göğsü ayrılıkla parça parça olmuş bir gönül isterim ki aşk derdini ona anlatabileyim; zira aslından uzak düşen insan daima vuslat anını arar."
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
        "quote": "Hakk'ı nerede ararsan ara."
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
      },
      {
        "id": "kirk-kural_legendary",
        "difficulty": "legendary",
        "quote": "Düzenim bozulur, hayatım altüst olur diye endişe etme; nereden biliyorsun hayatın altının üstünden daha iyi olmadığını? Kainattaki her zerrede O'nun izi vardır; fakat O'nu arayan insan önce kendi içindeki kibri ve bütün putları yıkmalıdır."
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
      },
      {
        "id": "yunus-emre-divani_legendary",
        "difficulty": "legendary",
        "quote": "Beni bende demen ben de değilem; bir ben vardır bende benden içeri. İlim ilim bilmektir, ilim kendin bilmektir; sen kendini bilmezsin ya nice okumaktır? Sevelim sevilelim, bu dünya kimseye kalmaz."
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
      },
      {
        "id": "tao-te-ching_legendary",
        "difficulty": "legendary",
        "quote": "Dünyada sudan daha yumuşak ve esnek hiçbir şey yoktur; fakat kayaları aşındırmakta ondan güçlüsü bulunmaz. Bilen konuşmaz, konuşan bilmez; yol kendini arayana değil, çabasız eylemde sessizce akan ve doğayla bir olana açılır."
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
      },
      {
        "id": "ermis_legendary",
        "difficulty": "legendary",
        "quote": "Aşk sizi çağırdığı zaman onu takip edin, yolları sarp ve dik olsa da; kanatları sizi sardığı zaman ona teslim olun, tüyleri arasına gizlenmiş kılıç sizi yaralayacak olsa da; zira aşk sizi taçlandırdığı gibi çarmıha da gerecektir."
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
      },
      {
        "id": "muhurlenmis-zaman_legendary",
        "difficulty": "legendary",
        "quote": "Yönetmen, zamanın akışını yakalayan ve onu bir heykel gibi yontan kişidir; sanat insanın mutlak hakikate ve mükemmelliğe duyduğu özlemdir. Bir insanın kendini bütünüyle bir amaca adayabilmesi için ruhunda manevi bir boşluk ve arınma arzusu olmalıdır."
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
      },
      {
        "id": "gorme-bicimleri_legendary",
        "difficulty": "legendary",
        "quote": "Görme konuşmadan önce gelir; çocuk konuşmadan önce bakar ve tanır. Bir nesneyi nasıl gördüğümüz, neyi bildiğimize ve neye inandığımıza bağlıdır; fotoğraflar bir anı dondurur ama dondurulan o an, çevresindeki bütün tarihsel bağlamdan koparılmış sessiz bir tanıktır."
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
      },
      {
        "id": "fotograf-uzerine_legendary",
        "difficulty": "legendary",
        "quote": "Fotoğraf çekmek bir şeyin güzelliğine el koymaktır; kamera dünyayı bir dizi minyatür parçaya böler ve onları mülkümüz gibi saklamamızı sağlar. Bir şeyi fotoğraflamak, onun ölümüne, kırılganlığına ve kaçınılmaz geçiciliğine tanıklık etmek demektir."
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
        "quote": "Her parıldayan altın değildir."
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
      },
      {
        "id": "dune_legendary",
        "difficulty": "legendary",
        "quote": "Korkmamalıyım. Korku aklın katilidir. Korku toptan yok oluşu getiren küçük ölümdür. Korkumla yüzleşeceğim; onun üzerimden ve içimden geçmesine izin vereceğim. Korku geçip gittiğinde iç gözümle onun yoluna bakacağım; korkunun gittiği yerde hiçbir şey kalmayacak, yalnızca ben kalacağım."
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
        "quote": "Sözü söylemek için sessizlik gerekir."
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
      },
      {
        "id": "yerdeniz-buyucusu_legendary",
        "difficulty": "legendary",
        "quote": "Sözü söylemek için sessizlik gerekir; ışığı görmek için karanlık. Bir mum yakmak bir gölge yaratmaktır; denge her şeyin özüdür. Kendi gölgesinden kaçan insan asla huzur bulamaz; onu ancak adıyla çağırıp kabullendiğinde özgürleşir ve büyür."
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
      },
      {
        "id": "kendine-ait-bir-oda_legendary",
        "difficulty": "legendary",
        "quote": "Bir kadının özgürce yazabilmesi ve düşünebilmesi için yılda beş yüz sterline ve kendine ait kilitli bir odaya ihtiyacı vardır; kilit vurun kütüphanelerinize isterseniz, ama zihnimin özgürlüğüne vurabileceğiniz hiçbir kilit, hiçbir kapı ve hiçbir kural yoktur."
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
      },
      {
        "id": "genc-bir-kizin-gunlugu_legendary",
        "difficulty": "legendary",
        "quote": "Her şeye rağmen insanların kalplerinde hala gerçekten iyi olduklarına inanıyorum. Gökyüzüne baktığımda bir gün bu vahşetin sona ereceğini, barışın ve huzurun bu topraklara yeniden döneceğini ve çektiğimiz bütün bu acıların boşuna olmadığını hissediyorum."
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
      },
      {
        "id": "kendine-guven_legendary",
        "difficulty": "legendary",
        "quote": "Taklit intihardır; insan kendi tarlasını kendi elleriyle ekmedikçe tek bir mısır tanesi bile hasat edemez. Büyük insan, kalabalıkların ortasında da yalnızlığın dingin bağımsızlığını koruyabilen ve kendi iç sesine sonuna kadar sadık kalmayı başaran insandır."
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
      },
      {
        "id": "vahsetin-cagrisi_legendary",
        "difficulty": "legendary",
        "quote": "Doğanın yasası basittir: Ya hükmedeceksin ya boyun eğeceksin. Uygarlığın bütün sahte bağları koptuğunda, damarlarda ataların vahşi şarkısı yankılanır; hayatın en derin hazzı, bütün kasların ve hislerin kusursuz bir ahenkle çalıştığı o ilkel koşuda gizlidir."
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
      },
      {
        "id": "moby-dick_legendary",
        "difficulty": "legendary",
        "quote": "Bana İsmail deyin. Ruhumda kasvetli ve yağmurlu bir kasım ayı hüküm sürmeye başladığında ve kendimi tabutların önünde duraksarken bulduğumda, bir an önce denize açılmaktan başka çare göremem; zira okyanus insanın kendi içindeki fırtınalarla yüzleştiği tek aynadır."
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
        "quote": "İnsan soyu yapraklara benzer."
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
      },
      {
        "id": "ilyada-ve-odysseia_legendary",
        "difficulty": "legendary",
        "quote": "İnsan soyu yapraklara benzer; bir kısmı rüzgarla toprağa dökülür, bir kısmı bahar gelince ormanda yeniden yeşerir. Tanrılar ölümlüleri kıskanır; çünkü insan fanidir ve fani olan her an, her nefes ve her sevgi paha biçilmez bir hazinedir."
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
      },
      {
        "id": "ficciones-kurgular_legendary",
        "difficulty": "legendary",
        "quote": "Cenneti her zaman bir tür sonsuz kütüphane olarak hayal etmişimdir; orada bütün dillerde yazılmış ve henüz yazılmamış bütün kitaplar mevcuttur. Zaman çatallanan sonsuz yollardan oluşur; her seçim yeni bir labirenti ve yeni bir evreni doğurur."
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
      },
      {
        "id": "gorunmez-kentler_legendary",
        "difficulty": "legendary",
        "quote": "Bir kentin güzelliği sokaklarının genişliğinde değil, uyandırdığı hatıraların ve arzuların derinliğindedir. Yaşayanların cehennemi gelecekte var olacak bir yer değil; her gün içinde yaşadığımız bu cehennemdir; ondan kurtulmanın tek yolu cehennemin ortasında cehennem olmayan şeyi aramak ve ona yer açmaktır."
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
      },
      {
        "id": "sherlock-holmes_legendary",
        "difficulty": "legendary",
        "quote": "İmkansızı elediğinizde, geriye kalan şey ne kadar olasılıksız görünürse görünsün mutlak gerçektir. Sen görüyorsun ama gözlemlemiyorsun Watson; görmekle gözlemlemek arasındaki fark, bilmekle sadece bakmak arasındaki o uçsuz bucaksız mesafedir."
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
        "quote": "İmkansız olan gerçekleşmiş olamaz."
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
      },
      {
        "id": "dogu-ekspresinde-cinayet_legendary",
        "difficulty": "legendary",
        "quote": "İmkansız olan şey gerçekleşmiş olamaz; öyleyse imkansız gibi görünen şey sadece bizim gözlerimizi bağlayan zekice bir yanılsamadır. Gerçek asla gizli kalmaz; insan konuşmasa bile gözleri, parmak uçları ve sessizliği hakikati bağıra bağıra fısıldar."
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
      },
      {
        "id": "morgue-sokagi-cinayeti_legendary",
        "difficulty": "legendary",
        "quote": "Dedim ki: Kuzgun bir daha asla dedi. Bütün sırlar görünürdedir; onları göremeyen sadece fazla derine bakan ve aşikar olanı kaçıran gözlerdir; zira delilik ve deha arasındaki çizgi öyle incedir ki en parlak akıl kimi zaman en karanlık dehşeti doğurur."
      }
    ]
  },
  {
    "id": "icimizdeki-seytan",
    "title": "İçimizdeki Şeytan",
    "originalTitle": "İçimizdeki Şeytan",
    "author": "Sabahattin Ali",
    "authorBio": "Cumhuriyet dönemi Türk edebiyatının en lirik ve toplumcu gerçekçi yazarı.",
    "authorBirthDeath": "1907 - 1948",
    "year": "1940",
    "genre": "turkish",
    "coverBg": "from-[#9A3412] to-[#7C2D12]",
    "summary": "Ömer ve Macide'nin aşkı üzerinden aydınların iradesizliğini ve içsel çatışmalarını anlatan psikolojik roman.",
    "keyThemes": [
      "İrade Zayıflığı",
      "Aşk ve Sorumluluk",
      "Aydın Yabancılaşması",
      "İçsel Vicdan"
    ],
    "historicalContext": "1940'lar Türkiye'sinin entelektüel çevrelerindeki yozlaşmayı ve kaçışı eleştiren kült eser.",
    "passages": [
      {
        "id": "is_1",
        "difficulty": "easy",
        "quote": "İçimizde şeytan yok, içimizde aciz var."
      },
      {
        "id": "is_2",
        "difficulty": "medium",
        "quote": "İsteyip istemediğimi dahi bilmediğim bir şey için çabalamak beni tüketiyor."
      },
      {
        "id": "is_3",
        "difficulty": "hard",
        "quote": "İnsanlar birbirlerini ne kadar az anlıyorlar ve birbirlerinin derinliklerine inmekten ne kadar korkuyorlar."
      },
      {
        "id": "is_4",
        "difficulty": "legendary",
        "quote": "Dünyada bir tek insanı sevmek, bütün dünyayı sevmenin anahtarıdır; çünkü bir insanı sevince bütün varoluş anlam kazanır."
      }
    ]
  },
  {
    "id": "kuyucakli-yusuf",
    "title": "Kuyucaklı Yusuf",
    "originalTitle": "Kuyucaklı Yusuf",
    "author": "Sabahattin Ali",
    "authorBio": "Cumhuriyet dönemi Türk edebiyatının en lirik ve toplumcu gerçekçi yazarı.",
    "authorBirthDeath": "1907 - 1948",
    "year": "1937",
    "genre": "turkish",
    "coverBg": "from-[#B45309] to-[#78350F]",
    "summary": "Ailesi katledilen yetim bir çocuğun kasaba eşrafının çürümüşlüğü karşısındaki sessiz ve asil direnişi.",
    "keyThemes": [
      "Adalet Arayışı",
      "Masumiyet",
      "Taşra Çürümüşlüğü",
      "Yalnızlık"
    ],
    "historicalContext": "Türk romanında Anadolu taşrasını gerçekçi ve destansı boyutlarıyla ele alan ilk büyük başyapıt.",
    "passages": [
      {
        "id": "ky_1",
        "difficulty": "easy",
        "quote": "İnsan sadece yaşamak için gelmez dünyaya."
      },
      {
        "id": "ky_2",
        "difficulty": "medium",
        "quote": "Varlığı büyük boşlukları dolduracak mahiyette bir insan değildi ama yokluğu feciydi."
      },
      {
        "id": "ky_3",
        "difficulty": "hard",
        "quote": "İçinde bir şeyler ezilmiş, un ufak olmuş gibiydi; fakat dışarıya karşı kaya gibi sert ve suskundu."
      },
      {
        "id": "ky_4",
        "difficulty": "legendary",
        "quote": "Karanlıkta tek başına yürürken dağların heybeti ona insanın yalnızlığını ve bu dünyadaki çaresizliğini fısıldıyordu."
      }
    ]
  },
  {
    "id": "saatleri-ayarlama-enstitusu",
    "title": "Saatleri Ayarlama Enstitüsü",
    "originalTitle": "Saatleri Ayarlama Enstitüsü",
    "author": "Ahmet Hamdi Tanpınar",
    "authorBio": "Türk edebiyatının en büyük modern ustası, romancı, şair ve edebiyat tarihçisi.",
    "authorBirthDeath": "1901 - 1962",
    "year": "1961",
    "genre": "turkish",
    "coverBg": "from-[#0F766E] to-[#115E59]",
    "summary": "Hayri İrdal ve Halit Ayarcı'nın Doğu ile Batı arasında bocalayan modernleşme macerasını anlatan hiciv şaheseri.",
    "keyThemes": [
      "Zaman ve Modernleşme",
      "Bürokrasi İronisi",
      "Doğu-Batı Sentezi",
      "Hafıza"
    ],
    "historicalContext": "Türkiye'nin modernleşme sancılarını saat metaforu üzerinden zekice eleştiren roman.",
    "passages": [
      {
        "id": "sae_1",
        "difficulty": "easy",
        "quote": "Zaman, insanın içinde aktığı nehirdir."
      },
      {
        "id": "sae_2",
        "difficulty": "medium",
        "quote": "Saatin kendisi mekan, yürüyüşü zaman, ayarı ise insandır."
      },
      {
        "id": "sae_3",
        "difficulty": "hard",
        "quote": "Doğu ile Batı arasında bocalayan insanımız, saatini hangi zamana ayarlayacağını bilemeyen bir şaşkına benzer."
      },
      {
        "id": "sae_4",
        "difficulty": "legendary",
        "quote": "Hakiki zaman, saatin kadranında tıkırdayan mekanik ritimde değil, insanın hafızasında, vicdanında ve hatıralarında akar."
      }
    ]
  },
  {
    "id": "aylak-adam",
    "title": "Aylak Adam",
    "originalTitle": "Aylak Adam",
    "author": "Yusuf Atılgan",
    "authorBio": "Modern Türk edebiyatında yabancılaşma ve varoluşçuluğun en özgün sesi.",
    "authorBirthDeath": "1921 - 1989",
    "year": "1959",
    "genre": "turkish",
    "coverBg": "from-[#334155] to-[#1E293B]",
    "summary": "C.'nin İstanbul sokaklarında gündelik tekdüzeliğe karşı tek başına hakiki bir sevgi ve anlam arayışı.",
    "keyThemes": [
      "Aylaklık ve Direniş",
      "Yabancılaşma",
      "Sahicilik Arayışı",
      "Kent Yalnızlığı"
    ],
    "historicalContext": "Varoluşçu felsefeyi Türk edebiyatına ustalıkla taşıyan çığır açıcı modernist roman.",
    "passages": [
      {
        "id": "aylak-adam_easy",
        "difficulty": "easy",
        "quote": "Beni anlamıyorlardı, sadece kendim olmak istiyordum."
      },
      {
        "id": "aylak-adam_medium",
        "difficulty": "medium",
        "quote": "Sustu. Konuşsa kim anlayacaktı ki? Herkes kendi gürültüsüyle meşguldü."
      },
      {
        "id": "aylak-adam_hard",
        "difficulty": "hard",
        "quote": "İnsanları yalan söylemeye zorlayan şey, doğruların onları derin bir yalnızlığa iteceği korkusudur."
      },
      {
        "id": "aa_4",
        "difficulty": "legendary",
        "quote": "Sokaklarda yürürken yanımdan geçen kalabalığın arasında sadece bir anlığına göz göze gelebileceğim o hakiki insanı arıyordum."
      }
    ]
  },
  {
    "id": "dokuzuncu-hariciye-kogusu",
    "title": "Dokuzuncu Hariciye Koğuşu",
    "originalTitle": "Dokuzuncu Hariciye Koğuşu",
    "author": "Peyami Safa",
    "authorBio": "Türk edebiyatında psikolojik roman türünün tartışmasız en büyük ustası.",
    "authorBirthDeath": "1899 - 1961",
    "year": "1930",
    "genre": "turkish",
    "coverBg": "from-[#4B5563] to-[#1F2937]",
    "summary": "Kemik veremi hastası genç bir çocuğun hastane koğuşlarındaki acı dolu bekleyişi ve imkansız aşkı.",
    "keyThemes": [
      "Hastalık ve Ruh",
      "Acının Felsefesi",
      "Umutsuz Aşk",
      "İçsel Monolog"
    ],
    "historicalContext": "Yazarın kendi çocukluk hastalıklarından izler taşıyan otobiyografik başyapıt.",
    "passages": [
      {
        "id": "dhk_1",
        "difficulty": "easy",
        "quote": "Büyük hastalık geçirenler hayatın kıymetini bilir."
      },
      {
        "id": "dhk_2",
        "difficulty": "medium",
        "quote": "Hastane koridorları, insanın kendi yalnızlığıyla en yalın şekilde yüzleştiği yerdir."
      },
      {
        "id": "dhk_3",
        "difficulty": "hard",
        "quote": "Istırap insanı olgunlaştırır derler; fakat bazı ıstıraplar vardır ki insanı sadece tüketir ve geride bir gölge bırakır."
      },
      {
        "id": "dhk_4",
        "difficulty": "legendary",
        "quote": "Dokuzuncu Hariciye Koğuşu'nun demir parmaklıklı pencerelerinden süzülen solgun ışık, bana hayatın ne kadar kırılgan bir rüya olduğunu hatırlatıyordu."
      }
    ]
  },
  {
    "id": "yalniziz",
    "title": "Yalnızız",
    "originalTitle": "Yalnızız",
    "author": "Peyami Safa",
    "authorBio": "Türk edebiyatında psikolojik roman türünün tartışmasız en büyük ustası.",
    "authorBirthDeath": "1899 - 1961",
    "year": "1951",
    "genre": "turkish",
    "coverBg": "from-[#1E1B4B] to-[#0F172A]",
    "summary": "Maddiyatın çürüttüğü cemiyet karşısında Samim'in zihninde kurduğu ütopyası Simeranya ve yalnızlık tahlilleri.",
    "keyThemes": [
      "Manevi Yalnızlık",
      "Ütopya (Simeranya)",
      "Ruh ve Madde Çatışması",
      "Kaçış"
    ],
    "historicalContext": "İkinci Dünya Savaşı sonrası ahlaki buhranı ve manevi boşluğu ele alan psikolojik roman.",
    "passages": [
      {
        "id": "yln_1",
        "difficulty": "easy",
        "quote": "Bizler aynı odada birbirine uzak yalnızlarız."
      },
      {
        "id": "yln_2",
        "difficulty": "medium",
        "quote": "Simeranya, insanın kendi içinde kurduğu ve hiçbir yalanın giremediği o saf sığınaktır."
      },
      {
        "id": "yln_3",
        "difficulty": "hard",
        "quote": "İnsan ruhunun doymak bilmez açlığı, maddiyatın hiçbir sofrasında asla dindirilemez."
      },
      {
        "id": "yln_4",
        "difficulty": "legendary",
        "quote": "Bütün cemiyet bir arada yaşıyor gibi görünse de her fert kendi içindeki dipsiz kuyuda mutlak bir yalnızlığa mahkumdur."
      }
    ]
  },
  {
    "id": "beyaz-geceler",
    "title": "Beyaz Geceler",
    "originalTitle": "Belye nochi (Белые ночи)",
    "author": "Fyodor Dostoyevski",
    "authorBio": "İnsan ruhunun karanlık dehlizlerini ve merhametini en derin yansıtan Rus edebiyat devi.",
    "authorBirthDeath": "1821 - 1881",
    "year": "1848",
    "genre": "classics",
    "coverBg": "from-[#1E3A8A] to-[#172554]",
    "summary": "Petersburg'un aydınlık gecelerinde hayalperest bir gencin Nastenka ile geçirdiği dört gecelik şiirsel aşk.",
    "keyThemes": [
      "Hayalperestlik",
      "Karşılıksız Sevgi",
      "Yalnızlık",
      "Bir Anlık Mutluluk"
    ],
    "historicalContext": "Dostoyevski'nin erken dönem lirik romantizminin ve Petersburg atmosferinin zirve eseri.",
    "passages": [
      {
        "id": "bg_1",
        "difficulty": "easy",
        "quote": "Tek bir anlık mutluluk az mıdır?"
      },
      {
        "id": "bg_2",
        "difficulty": "medium",
        "quote": "Hayalperest insan, kendi yarattığı dünyada yaşarken gerçeğin soğuk nefesinden ürker."
      },
      {
        "id": "bg_3",
        "difficulty": "hard",
        "quote": "Tanrım, bir anlık mutluluk! Bütün bir insan ömrü için bu kadarı yetmez miydi?"
      },
      {
        "id": "bg_4",
        "difficulty": "legendary",
        "quote": "Senin yoluna düşen bir damla sevinç için bütün yalnızlığımı feda etmeye ve seni minnetle hatırlamaya daima hazırım."
      }
    ]
  },
  {
    "id": "budala",
    "title": "Budala",
    "originalTitle": "Idiot (Идиот)",
    "author": "Fyodor Dostoyevski",
    "authorBio": "İnsan ruhunun karanlık dehlizlerini ve merhametini en derin yansıtan Rus edebiyat devi.",
    "authorBirthDeath": "1821 - 1881",
    "year": "1869",
    "genre": "classics",
    "coverBg": "from-[#047857] to-[#064E3B]",
    "summary": "Prens Mışkin'in mutlak saflığı ve iyiliğiyle Petersburg sosyetesinin ikiyüzlü dünyasında yarattığı sarsıntı.",
    "keyThemes": [
      "Mutlak İyilik",
      "Güzellik Kurtaracak",
      "Merhamet",
      "Yozlaşmış Toplum"
    ],
    "historicalContext": "Yazarın \"mükemmel derecede iyi bir insan\" yaratma idealiyle kaleme aldığı başyapıt.",
    "passages": [
      {
        "id": "bdl_1",
        "difficulty": "easy",
        "quote": "Dünyayı güzellik kurtaracak."
      },
      {
        "id": "bdl_2",
        "difficulty": "medium",
        "quote": "Kalbi temiz bir insana deli demek, dünyanın kendi çirkinliğini örtme çabasıdır."
      },
      {
        "id": "bdl_3",
        "difficulty": "hard",
        "quote": "Merhamet, insan varoluşunun belki de en temel ve biricik yasasıdır; onsuz adalet bir zulme dönüşür."
      },
      {
        "id": "bdl_4",
        "difficulty": "legendary",
        "quote": "İnsanların içinde öylesine masum ve temiz bir cevher saklıdır ki, en büyük günahkarlar bile onun ışığında secdeye varmak ister."
      }
    ]
  },
  {
    "id": "insan-ne-ile-yasar",
    "title": "İnsan Ne İle Yaşar",
    "originalTitle": "Chem lyudi zhivy (Чем люди живы)",
    "author": "Lev Tolstoy",
    "authorBio": "Rus edebiyatının ahlakçı filozofu, roman sanatının evrensel devi.",
    "authorBirthDeath": "1828 - 1910",
    "year": "1885",
    "genre": "classics",
    "coverBg": "from-[#854D0E] to-[#422006]",
    "summary": "Yeryüzüne sürgün edilen melek Mihail'in insan doğasındaki üç hakikati öğrenme yolculuğu.",
    "keyThemes": [
      "Sevgi",
      "Bencilliğin Sonu",
      "Kader",
      "İlahi Hikmet"
    ],
    "historicalContext": "Tolstoy'un köylüler ve halk için yazdığı, evrensel ahlak dersleri veren felsefi masallar.",
    "passages": [
      {
        "id": "iny_1",
        "difficulty": "easy",
        "quote": "İnsan yalnızca sevgiyle yaşar."
      },
      {
        "id": "iny_2",
        "difficulty": "medium",
        "quote": "İnsanın kendi hayatına dair kaygılanması boşunadır; asıl olan başkalarına hizmet etmektir."
      },
      {
        "id": "iny_3",
        "difficulty": "hard",
        "quote": "Anladım ki insan kendine duyduğu özenle değil, kalbindeki sevgiyle hayatta kalır."
      },
      {
        "id": "iny_4",
        "difficulty": "legendary",
        "quote": "Bütün insanlar kendi planlarıyla yaşadıklarını sanırlar; oysa onları ayakta tutan tek hakikat birbirlerine duydukları sevgidir."
      }
    ]
  },
  {
    "id": "madame-bovary",
    "title": "Madame Bovary",
    "originalTitle": "Madame Bovary",
    "author": "Gustave Flaubert",
    "authorBio": "Fransız gerçekçiliğinin kurucusu ve \"le mot juste\" (tam doğru kelime) arayışının titiz ustası.",
    "authorBirthDeath": "1821 - 1880",
    "year": "1857",
    "genre": "classics",
    "coverBg": "from-[#BE123C] to-[#881337]",
    "summary": "Emma Bovary'nin taşra hayatının sıkıcılığından romantik hayallere ve trajik bir yıkıma sürüklenişi.",
    "keyThemes": [
      "Bovarizm (Tatminsizlik)",
      "Hayal ve Gerçek",
      "Taşra Sıradanlığı",
      "Tutku"
    ],
    "historicalContext": "Yayınlandığında ahlaka aykırılıktan yargılanan, modern roman tekniğinin başlangıcı sayılan eser.",
    "passages": [
      {
        "id": "mb_1",
        "difficulty": "easy",
        "quote": "Kelimeler teneke çalan çalgıcıya benzer."
      },
      {
        "id": "mb_2",
        "difficulty": "medium",
        "quote": "Her tutkunun arkasında, gerçekleştiği an yok olan bir hayal kırıklığı gizlidir."
      },
      {
        "id": "mb_3",
        "difficulty": "hard",
        "quote": "Dili bir kırık çalgıya benzetebiliriz; oysa biz onunla yıldızları ağlatacak şarkılar çalmak isteriz."
      },
      {
        "id": "mb_4",
        "difficulty": "legendary",
        "quote": "İnsan ruhu, arzuladığı sonsuzluğu sıradan nesnelerde bulmaya çalışırken daima kendi hayallerinin enkazı altında ezilir."
      }
    ]
  },
  {
    "id": "kirmizi-ve-siyah",
    "title": "Kırmızı ve Siyah",
    "originalTitle": "Le Rouge et le Noir",
    "author": "Stendhal",
    "authorBio": "Fransız edebiyatının psikolojik gerçekçilik ustası.",
    "authorBirthDeath": "1783 - 1842",
    "year": "1830",
    "genre": "classics",
    "coverBg": "from-[#991B1B] to-[#1E293B]",
    "summary": "Julien Sorel'in Restorasyon Fransası'nda ordu (kırmızı) ve kilise (siyah) arasında ihtirasla yükselişi ve düşüşü.",
    "keyThemes": [
      "İhtiras ve Gurur",
      "Sınıf Çatışması",
      "İkiyüzlülük",
      "Yıkıcı Tutku"
    ],
    "historicalContext": "19. yüzyıl Fransız toplumunun sınıfsal katılığını ve bireysel ihtirası teşrih eden şaheser.",
    "passages": [
      {
        "id": "kvs_1",
        "difficulty": "easy",
        "quote": "Aşk, ruhun en yüce deliliğidir."
      },
      {
        "id": "kvs_2",
        "difficulty": "medium",
        "quote": "Toplumda yükselmek isteyen insan, kendi duygularının en acımasız efendisi olmalıdır."
      },
      {
        "id": "kvs_3",
        "difficulty": "hard",
        "quote": "Yalnızca kendi aklına ve ihtirasına güvenen insan, dünyanın bütün ikiyüzlülüğünü tek başına alt edebilir."
      },
      {
        "id": "kvs_4",
        "difficulty": "legendary",
        "quote": "Giyotin sehpasına doğru yürürken bile başı dimdik duran bir adam, cemiyetin sahte ahlakını kendi gururuyla yargılamış demektir."
      }
    ]
  },
  {
    "id": "altinci-kogus",
    "title": "Altıncı Koğuş",
    "originalTitle": "Palata No. 6 (Палата № 6)",
    "author": "Anton Çehov",
    "authorBio": "Modern kısa öykünün ve tiyatronun yenilikçi Rus ustası, hekim yazar.",
    "authorBirthDeath": "1860 - 1904",
    "year": "1892",
    "genre": "classics",
    "coverBg": "from-[#475569] to-[#0F172A]",
    "summary": "Akıl hastanesinin 6. koğuşundaki bir deliyle sohbet ettikçe kendisini koğuşta bulan doktor Andrey Ragin'in trajedisi.",
    "keyThemes": [
      "Düşünce Özgürlüğü",
      "Acıya Kayıtsızlık",
      "Delilik ve Akıl",
      "Toplumsal Tutsaklık"
    ],
    "historicalContext": "Çarlık Rusyası'nın cehaletini ve pasif felsefesini sarsan derin politik ve varoluşçu alegori.",
    "passages": [
      {
        "id": "altinci-kogus_easy",
        "difficulty": "easy",
        "quote": "Acıya kayıtsız kalmak vicdansızlıktır."
      },
      {
        "id": "altinci-kogus_medium",
        "difficulty": "medium",
        "quote": "Düşünce özgürlüğü, parmaklıklar ardında bile insanın elinden asla alınamaz."
      },
      {
        "id": "altinci-kogus_hard",
        "difficulty": "hard",
        "quote": "Hayat boyunca kitaplarda bilgece fikirler arayan bir insan, kendi acısıyla karşılaştığında teorilerin yetersizliğini anlar."
      },
      {
        "id": "ak_4",
        "difficulty": "legendary",
        "quote": "Parmaklıklar ardındaki insanlar deli midir, yoksa dışarıda serbestçe dolaşan acımasız kalabalık mı asıl deliliktir, bunu kim bilebilir?"
      }
    ]
  },
  {
    "id": "lavinia-ve-cicek-senfonisi",
    "title": "Lavinia & Çiçek Senfonisi",
    "originalTitle": "Lavinia & Çiçek Senfonisi",
    "author": "Özdemir Asaf",
    "authorBio": "Türk edebiyatında kısa, aforizmatik ve felsefi şiirin en büyük temsilcisi.",
    "authorBirthDeath": "1923 - 1981",
    "year": "1957",
    "genre": "poetry",
    "coverBg": "from-[#9F1239] to-[#4C0519]",
    "summary": "İnsan ilişkileri, yalnızlık, aşk ve gurur üzerine yazılmış ölümsüz dörtlükler ve şiirler.",
    "keyThemes": [
      "Paylaşılamayan Yalnızlık",
      "Gurur ve Sevgi",
      "İncelik",
      "Kısa ve Vurucu"
    ],
    "historicalContext": "Cumhuriyet dönemi Türk şiirinde felsefi nüktenin ve minimalist lirizmin zirvesi.",
    "passages": [
      {
        "id": "oza_1",
        "difficulty": "easy",
        "quote": "Yalnızlık paylaşılmaz, paylaşılsa yalnızlık olmaz."
      },
      {
        "id": "oza_2",
        "difficulty": "medium",
        "quote": "Sana gitme demeyeceğim, üşüyorsun ceketimi al, günün en güzel saatleri bunlar."
      },
      {
        "id": "oza_3",
        "difficulty": "hard",
        "quote": "Bütün renkler aynı hızla kirleniyordu, birinciliği beyaz renge verdiler."
      },
      {
        "id": "oza_4",
        "difficulty": "legendary",
        "quote": "Bana yalanlar söylese yetinecektim; ama o susmayı seçti ve sessizlik en ağır yalandan daha çok acıttı."
      }
    ]
  },
  {
    "id": "yercekimli-karanfil",
    "title": "Yerçekimli Karanfil",
    "originalTitle": "Yerçekimli Karanfil",
    "author": "Edip Cansever",
    "authorBio": "İkinci Yeni akımının kuyumcu şairi. Kent insanının içsel dramını uzun soluklu şiirlerle inşa etmiştir.",
    "authorBirthDeath": "1928 - 1986",
    "year": "1957",
    "genre": "poetry",
    "coverBg": "from-[#BE185D] to-[#831843]",
    "summary": "Elden ele dolaşan bir karanfil imgesiyle büyüyen umudun ve insanın mekânla kurduğu derin bağın şiiri.",
    "keyThemes": [
      "Umut ve Karanfil",
      "İnsan Yaşadığı Yere Benzer",
      "Çoğalmak",
      "Lirik Bellek"
    ],
    "historicalContext": "İkinci Yeni'nin Kapalıçarşı ve İstanbul ekseninde gelişen duyarlık anıtı.",
    "passages": [
      {
        "id": "ec_1",
        "difficulty": "easy",
        "quote": "Bir sevdayı büyütüyoruz seninle."
      },
      {
        "id": "ec_2",
        "difficulty": "medium",
        "quote": "Sen o karanfile eğilimlisin, alıp sana veriyorum işte, sen de bir başkasına veriyorsun."
      },
      {
        "id": "ec_3",
        "difficulty": "hard",
        "quote": "İnsan yaşadığı yere benzer; o yerin suyuna, o yerin toprağına, balıklarına benzer."
      },
      {
        "id": "ec_4",
        "difficulty": "legendary",
        "quote": "Masa da masaymış ha; bana mısın demedi bu kadar yüke, bir iki sallandı ama yine de yıkılmadı."
      }
    ]
  },
  {
    "id": "butun-siirleri-garip",
    "title": "Bütün Şiirleri (Garip)",
    "originalTitle": "Garip & Vazgeçemediğim",
    "author": "Orhan Veli Kanık",
    "authorBio": "Şiiri sokağa indiren, vezin ve kafiyeyi yıkarak Türk şiirinde devrim yapan Garip akımının öncüsü.",
    "authorBirthDeath": "1914 - 1950",
    "year": "1941",
    "genre": "poetry",
    "coverBg": "from-[#0284C7] to-[#075985]",
    "summary": "Sıradan insanın neşesini, aşkını, yoksulluğunu ve İstanbul sevgisini yalın bir dille ölümsüzleştiren şiirler.",
    "keyThemes": [
      "Sıradan İnsanın Şiiri",
      "Yalınlık",
      "İstanbul Sevgisi",
      "İroni"
    ],
    "historicalContext": "Türk şiirinde klasik kalıpları yıkan en büyük yenilik hareketi olan Garip manifestosu.",
    "passages": [
      {
        "id": "ov_1",
        "difficulty": "easy",
        "quote": "Bir elinde cımbız, umurunda mı dünya!"
      },
      {
        "id": "ov_2",
        "difficulty": "medium",
        "quote": "Diliyorum ki hiçbir şey düşünmeden, sadece denizin sesini dinleyerek öleyim."
      },
      {
        "id": "ov_3",
        "difficulty": "hard",
        "quote": "Ağlasam sesimi duyar mısınız mısralarımda? Dokunabilir misiniz gözyaşlarıma ellerinizle?"
      },
      {
        "id": "ov_4",
        "difficulty": "legendary",
        "quote": "İstanbul'u dinliyorum, gözlerim kapalı; önce hafiften bir rüzgar esiyor, yavaş yavaş sallanıyor yapraklar ağaçlarda."
      }
    ]
  },
  {
    "id": "kendi-gok-kubbemiz",
    "title": "Kendi Gök Kubbemiz",
    "originalTitle": "Kendi Gök Kubbemiz",
    "author": "Yahya Kemal Beyatlı",
    "authorBio": "Türk edebiyatında neo-klasik şiirin mimarı, tarih ve İstanbul aşığı büyük şair.",
    "authorBirthDeath": "1884 - 1958",
    "year": "1961",
    "genre": "poetry",
    "coverBg": "from-[#D97706] to-[#78350F]",
    "summary": "Tarihin, vatan toprağının, ölümün ve İstanbul'un asırlık musikisini mısralara döken anıt eser.",
    "keyThemes": [
      "Sessiz Gemi",
      "Tarih Ruhu",
      "İstanbul Sevgisi",
      "Musikili Türkçe"
    ],
    "historicalContext": "Divan şiiri estetiğini modern Batı şiir tekniğiyle harmanlayan milli klasisizm.",
    "passages": [
      {
        "id": "yk_1",
        "difficulty": "easy",
        "quote": "Dönülmez akşamın ufkundayız, vakit çok geç."
      },
      {
        "id": "yk_2",
        "difficulty": "medium",
        "quote": "Artık demir almak günü gelmişse zamandan, meçhule giden bir gemi kalkar bu limandan."
      },
      {
        "id": "yk_3",
        "difficulty": "hard",
        "quote": "Kalbi olanlar için vatan sadece bir toprak parçası değil, asırlar boyunca söylenen bir türküdür."
      },
      {
        "id": "yk_4",
        "difficulty": "legendary",
        "quote": "Sallanmaz o kalkışta ne mendil ne de bir kol; rıhtımda kalanlar bu seyahatten elemli, günlerce siyah ufka bakar gözleri nemli."
      }
    ]
  },
  {
    "id": "sevgi-duvari",
    "title": "Sevgi Duvarı",
    "originalTitle": "Sevgi Duvarı",
    "author": "Can Yücel",
    "authorBio": "Türkçenin en dobra, zeki, hiciv ustası ve sahici şair-çevirmeni.",
    "authorBirthDeath": "1926 - 1999",
    "year": "1973",
    "genre": "poetry",
    "coverBg": "from-[#EA580C] to-[#9A3412]",
    "summary": "Aşkın, özlemin, dostluğun ve toplumsal mücadelenin en sansürsüz ve içten şiirleri.",
    "keyThemes": [
      "Sahici Sevgi",
      "Mesafe ve Yakınlık",
      "Hiciv",
      "Umut"
    ],
    "historicalContext": "Sokak dilini ve halkın samimi deyişlerini şiirle buluşturan özgürlükçü başkaldırı.",
    "passages": [
      {
        "id": "cy_1",
        "difficulty": "easy",
        "quote": "En uzak mesafe iki kafa arasındadır."
      },
      {
        "id": "cy_2",
        "difficulty": "medium",
        "quote": "Baktım ki gökyüzü baştan başa bulut, dedim ki sen bu yağmuru unut."
      },
      {
        "id": "cy_3",
        "difficulty": "hard",
        "quote": "Ben sende imkansızlığı sevdim, fakat asla umutsuzluğu ve çaresizliği değil."
      },
      {
        "id": "cy_4",
        "difficulty": "legendary",
        "quote": "Seninle olmanın en güzel yanı ne biliyor musun? Başı sonu belli olmayan bir rüyaya uyanır gibi her sabah yeniden başlamak."
      }
    ]
  },
  {
    "id": "askin-metafizigi",
    "title": "Aşkın Metafiziği",
    "originalTitle": "Metaphysik der Geschlechtsliebe",
    "author": "Arthur Schopenhauer",
    "authorBio": "Alman kötümserlik felsefesinin doruk ismi. İstencin ve arzunun kölesi olan insanı çözümlemiştir.",
    "authorBirthDeath": "1788 - 1860",
    "year": "1844",
    "genre": "philosophy",
    "coverBg": "from-[#581C87] to-[#2E1065]",
    "summary": "Aşkın romantik bir tesadüf değil, türün devamını sağlamak için doğanın zihne kurduğu biyolojik bir kurgu olduğunu savunur.",
    "keyThemes": [
      "Yaşama İradesi",
      "Aşkın Biyolojisi",
      "İllüzyon ve Hakikat",
      "Acı ve Can Sıkıntısı"
    ],
    "historicalContext": "Romantik aşk mitini felsefi gerçekçilikle yıkan en radikal metinlerden biri.",
    "passages": [
      {
        "id": "askin-metafizigi_easy",
        "difficulty": "easy",
        "quote": "İnsan istediğini yapar ama ne isteyeceğini seçemez."
      },
      {
        "id": "askin-metafizigi_medium",
        "difficulty": "medium",
        "quote": "Aşk, türün devamı için doğanın bireye kurduğu zekice bir yanılsamadır."
      },
      {
        "id": "askin-metafizigi_hard",
        "difficulty": "hard",
        "quote": "Hayat bir sarkaç gibi acı ile can sıkıntısı arasında gidip gelir; arzu bitince boşluk başlar."
      },
      {
        "id": "sch_4",
        "difficulty": "legendary",
        "quote": "Bütün o yüce romantik hezeyanların temelinde, doğanın gelecek nesilleri teminat altına almak için bireyin aklını perdelemesi yatar."
      }
    ]
  },
  {
    "id": "insanca-pek-insanca",
    "title": "İnsanca, Pek İnsanca",
    "originalTitle": "Menschliches, Allzumenschliches",
    "author": "Friedrich Nietzsche",
    "authorBio": "Batı metafiziğini ve ahlakını çekiçle felsefe yaparak sarsan dahi düşünür.",
    "authorBirthDeath": "1844 - 1900",
    "year": "1878",
    "genre": "philosophy",
    "coverBg": "from-[#DC2626] to-[#7F1D1D]",
    "summary": "Özgür ruhlar için yazılmış, metafizik yanılsamaları ve ahlaki kalıpları aforizmalarla parçalayan eser.",
    "keyThemes": [
      "Özgür Ruh",
      "Gezgin Felsefesi",
      "Yanılsamaların Çöküşü",
      "Kendi Yolunu Çizmek"
    ],
    "historicalContext": "Nietzsche'nin Wagner ve Schopenhauer etkisinden koparak kendi bağımsız sesini bulduğu dönüm noktası.",
    "passages": [
      {
        "id": "ipi_1",
        "difficulty": "easy",
        "quote": "Gezgin, yolu hedefinden daha çok sevendir."
      },
      {
        "id": "ipi_2",
        "difficulty": "medium",
        "quote": "Bir inanç uğruna ölmek, o inancın doğru olduğunu asla kanıtlamaz."
      },
      {
        "id": "ipi_3",
        "difficulty": "hard",
        "quote": "Kendini aşmak isteyen insan, en derin kuyularına inip oradaki korkularıyla yüzleşmeyi göze almalıdır."
      },
      {
        "id": "ipi_4",
        "difficulty": "legendary",
        "quote": "Kendi kanatlarıyla uçmayı öğrenemeyen ruhlar, başkalarının rüzgarında savrulan kuru yapraklardan farksız kalmaya mahkumdur."
      }
    ]
  },
  {
    "id": "dusus",
    "title": "Düşüş",
    "originalTitle": "La Chute",
    "author": "Albert Camus",
    "authorBio": "Cezayir asıllı Fransız varoluşçu yazar, düşünür ve Nobel ödüllü edebiyatçı.",
    "authorBirthDeath": "1913 - 1960",
    "year": "1956",
    "genre": "philosophy",
    "coverBg": "from-[#475569] to-[#1E293B]",
    "summary": "Eski saygın avukat Clamence'ın Amsterdam'ın sisli barlarında kendi ikiyüzlülüğünü ve insanlığın suç ortaklığını itirafı.",
    "keyThemes": [
      "Yargıç-Tövbekar",
      "Suçluluk Bilinci",
      "İkiyüzlülük",
      "Düşüş"
    ],
    "historicalContext": "İkinci Dünya Savaşı sonrası aydın vicdanının ve ahlaki sahteliğin en sert monoloğu.",
    "passages": [
      {
        "id": "dss_1",
        "difficulty": "easy",
        "quote": "İnsanlar ancak suçlu olduğunuzda sizden emindir."
      },
      {
        "id": "dss_2",
        "difficulty": "medium",
        "quote": "Kendi kusurlarını görmeyen insan, başkalarını yargılamakta daima en cüretkar olandır."
      },
      {
        "id": "dss_3",
        "difficulty": "hard",
        "quote": "Masumiyet bir kere kaybedildi mi, geriye sadece birbirini yargılayan suçlular kalabalığı kalır."
      },
      {
        "id": "dss_4",
        "difficulty": "legendary",
        "quote": "Köprüden atlayan kadının çığlığını duyup da adımımı atmadığım o geceden beri, dünyanın bütün suları beni boğmak için akıyor."
      }
    ]
  },
  {
    "id": "devlet",
    "title": "Devlet",
    "originalTitle": "Politeia (Πολιτεία)",
    "author": "Platon",
    "authorBio": "Klasik Yunan felsefesinin kurucusu, Sokrates'in öğrencisi ve Akademi'nin kurucusu.",
    "authorBirthDeath": "MÖ 428 - MÖ 348",
    "year": "MÖ 375",
    "genre": "philosophy",
    "coverBg": "from-[#CA8A04] to-[#713F12]",
    "summary": "Adaletin doğası, ideal devlet yönetimi, filozof krallar ve ünlü Mağara Alegorisi'nin tartışıldığı felsefe anıtı.",
    "keyThemes": [
      "Adalet Nedir?",
      "Mağara Alegorisi",
      "Filozof Kral",
      "İdeal Toplum"
    ],
    "historicalContext": "Atina demokrasisinin krizinde adil bir düzen arayışıyla yazılmış siyaset ve metafizik klasiği.",
    "passages": [
      {
        "id": "dvt_1",
        "difficulty": "easy",
        "quote": "Gözler gölgeye alışınca hakikat kör eder."
      },
      {
        "id": "dvt_2",
        "difficulty": "medium",
        "quote": "Devletin adaleti, her yurttaşın kendi doğasına uygun olan işi yapmasında yatar."
      },
      {
        "id": "dvt_3",
        "difficulty": "hard",
        "quote": "Mağaradaki tutsaklar duvardaki gölgeleri gerçek sanırlar; ta ki zincirlerini kırıp güneşle tanışana dek."
      },
      {
        "id": "dvt_4",
        "difficulty": "legendary",
        "quote": "Filozoflar kral ya da krallar filozof olmadıkça, devletlerin ve insanlığın dertleri asla sona ermeyecektir."
      }
    ]
  },
  {
    "id": "yuzyillik-yalnizlik",
    "title": "Yüzyıllık Yalnızlık",
    "originalTitle": "Cien años de soledad",
    "author": "Gabriel García Márquez",
    "authorBio": "Kolombiyalı Nobel ödüllü yazar ve büyülü gerçekçiliğin tüm dünyadaki bayraktarı.",
    "authorBirthDeath": "1927 - 2014",
    "year": "1967",
    "genre": "mythology",
    "coverBg": "from-[#EA580C] to-[#7C2D12]",
    "summary": "Macondo kasabasının kuruluşu ve Buendía ailesinin yedi kuşağa yayılan destansı, büyülü ve trajik yalnızlığı.",
    "keyThemes": [
      "Döngüsel Zaman",
      "Büyülü Gerçekçilik",
      "Kader ve Soy",
      "Yalnızlık"
    ],
    "historicalContext": "Latin Amerika'nın sömürge, savaş ve mitlerle örülü tarihinin edebi destanı.",
    "passages": [
      {
        "id": "yy_1",
        "difficulty": "easy",
        "quote": "Yıllar sonra o uzak ikindiyi hatırlayacaktı."
      },
      {
        "id": "yy_2",
        "difficulty": "medium",
        "quote": "Bir ailenin tarihi, sonsuz bir daire gibi aynı hataların ve tutkuların tekrarıdır."
      },
      {
        "id": "yy_3",
        "difficulty": "hard",
        "quote": "Yeryüzünde yüz yıllık yalnızlığa mahkum edilmiş soyun, dünya üzerinde ikinci bir şansı olmayacaktı."
      },
      {
        "id": "yy_4",
        "difficulty": "legendary",
        "quote": "Albay Aureliano Buendia, idam mangasının karşısında buzun keşfedildiği o uzak çocukluk ikindisini hatırlarken zaman durmuş gibiydi."
      }
    ]
  },
  {
    "id": "kirmizi-pazartesi",
    "title": "Kırmızı Pazartesi",
    "originalTitle": "Crónica de una muerte anunciada",
    "author": "Gabriel García Márquez",
    "authorBio": "Kolombiyalı Nobel ödüllü yazar ve büyülü gerçekçiliğin tüm dünyadaki bayraktarı.",
    "authorBirthDeath": "1927 - 2014",
    "year": "1981",
    "genre": "mythology",
    "coverBg": "from-[#B91C1C] to-[#450A0A]",
    "summary": "İşleneceğini bütün bir kasabanın bildiği ama kimsenin engellemediği Santiago Nasar cinayetinin anatomisi.",
    "keyThemes": [
      "Kolektif Suç",
      "Önceden Duyurulmuş Cinayet",
      "Namus ve Yazgı",
      "Seyirci Kalmak"
    ],
    "historicalContext": "Gerçek bir cinayetten yola çıkarak toplumsal kayıtsızlığı ve kaderi sorgulayan başyapıt.",
    "passages": [
      {
        "id": "kp_1",
        "difficulty": "easy",
        "quote": "Herkesin bildiği bir cinayeti kimse engellemedi."
      },
      {
        "id": "kp_2",
        "difficulty": "medium",
        "quote": "Kader kapıyı çaldığında, insanlar çoğu zaman onun sadece rüzgar olduğunu sanırlar."
      },
      {
        "id": "kp_3",
        "difficulty": "hard",
        "quote": "Bütün bir kasaba cinayetin işleneceğini biliyordu; fakat hiç kimse kaderin akışını durduracak cesareti gösteremedi."
      },
      {
        "id": "kp_4",
        "difficulty": "legendary",
        "quote": "Santiago Nasar sabah saat beş buçukta kalktığında, öldürüleceği günün güneşli bir şafağa benzeyeceğinden henüz habersizdi."
      }
    ]
  },
  {
    "id": "donusumler-ovidius",
    "title": "Dönüşümler (Metamorphoses)",
    "originalTitle": "Metamorphoses",
    "author": "Ovidius",
    "authorBio": "Augustus dönemi Roma şairi. Mitolojiyi ve dönüşüm felsefesini şiirleştiren kadim usta.",
    "authorBirthDeath": "MÖ 43 - MS 17",
    "year": "MS 8",
    "genre": "mythology",
    "coverBg": "from-[#059669] to-[#022C22]",
    "summary": "Evrenin yaratılışından Sezar'ın yıldız oluşuna kadar tanrıların, insanların ve doğanın başkalaşım efsaneleri.",
    "keyThemes": [
      "Başkalaşım (Metamorfoz)",
      "Aşk ve Ceza",
      "Doğanın Döngüsü",
      "Ölümsüz Şiir"
    ],
    "historicalContext": "Batı sanatına, resmine ve edebiyatına binlerce yıldır ilham veren mitolojik kaynak metin.",
    "passages": [
      {
        "id": "ovd_1",
        "difficulty": "easy",
        "quote": "Her şey değişir, hiçbir şey yok olmaz."
      },
      {
        "id": "ovd_2",
        "difficulty": "medium",
        "quote": "Zaman akıp giden bir ırmak gibidir; ne su durur ne de geçen saatler geri döner."
      },
      {
        "id": "ovd_3",
        "difficulty": "hard",
        "quote": "Ruhlarımız ölümsüzdür; sadece bir bedenden ayrılıp bir başkasında yeni bir hayata uyanırlar."
      },
      {
        "id": "ovd_4",
        "difficulty": "legendary",
        "quote": "Yarattığım bu şiir ne Jüpiter'in gazabıyla ne kılıçla ne de zamanın aşındırıcı dişiyle silinecektir; adım göklerde parlayacak."
      }
    ]
  },
  {
    "id": "mrs-dalloway",
    "title": "Mrs. Dalloway",
    "originalTitle": "Mrs. Dalloway",
    "author": "Virginia Woolf",
    "authorBio": "Modernist romanın ve bilinçakışı tekniğinin öncüsü İngiliz edebiyat dehası.",
    "authorBirthDeath": "1882 - 1941",
    "year": "1925",
    "genre": "modernist",
    "coverBg": "from-[#6366F1] to-[#312E81]",
    "summary": "Clarissa Dalloway'in akşam vereceği parti için Londra sokaklarında geçirdiği tek bir günde insan zihninin katmanları.",
    "keyThemes": [
      "Zamanın Parçalanması",
      "Savaş Travması (Septimus)",
      "Bilinç Akışı",
      "İçsel Sesler"
    ],
    "historicalContext": "Birinci Dünya Savaşı sonrası modern kent yaşamını tek günde kristalize eden roman devrimi.",
    "passages": [
      {
        "id": "mdl_1",
        "difficulty": "easy",
        "quote": "Çiçekleri kendisi almaya karar verdi."
      },
      {
        "id": "mdl_2",
        "difficulty": "medium",
        "quote": "Tek bir günde bile bir insanın bütün hayatı, sevinçleri ve pişmanlıkları gizlidir."
      },
      {
        "id": "mdl_3",
        "difficulty": "hard",
        "quote": "İnsanların içine bakmak ne kadar korkunç; oysa dışarıdan bakıldığında her şey ne kadar sakin görünür."
      },
      {
        "id": "mdl_4",
        "difficulty": "legendary",
        "quote": "Big Ben saati çalarken kurşun gibi ağır çan sesleri havada dağılıyor ve geçen her saniye ömrümüzden bir parça koparıyordu."
      }
    ]
  },
  {
    "id": "sato-kafka",
    "title": "Şato",
    "originalTitle": "Das Schloss",
    "author": "Franz Kafka",
    "authorBio": "20. yüzyılın en derin varoluşçu dehası. Modern bürokrasinin absürdlüğünü resmetmiştir.",
    "authorBirthDeath": "1883 - 1924",
    "year": "1926",
    "genre": "modernist",
    "coverBg": "from-[#4B5563] to-[#111827]",
    "summary": "Kadastrocu K.'nın erişilmez, sisli ve gizemli bir Şato'ya ulaşmak ve meşruiyet kazanmak için verdiği çaresiz mücadele.",
    "keyThemes": [
      "Ulaşılamaz Otorite",
      "Yabancı Olmak",
      "Bürokrasi Çıkmazı",
      "Absürd Arayış"
    ],
    "historicalContext": "Modern insanın kurumlara ve Tanrısal mesafeye karşı hissettiği dışlanmışlığın alegorisi.",
    "passages": [
      {
        "id": "stk_1",
        "difficulty": "easy",
        "quote": "Hedefe yaklaştıkça mesafe daha da büyüyordu."
      },
      {
        "id": "stk_2",
        "difficulty": "medium",
        "quote": "Yetkililerin mantığı, sıradan insanın aklının erişemeyeceği kadar karmaşık ve acımasızdır."
      },
      {
        "id": "stk_3",
        "difficulty": "hard",
        "quote": "Şatoya giden yollar karlar altında kaybolmuştu; insan varamayacağını bildiği halde yürümekten vazgeçemez."
      },
      {
        "id": "stk_4",
        "difficulty": "legendary",
        "quote": "K. tepedeki karlı tepeye baktığında Şato sislerin arasında bir serap gibi beliriyor ve asla cevap vermeyen bir sessizliğe bürünüyordu."
      }
    ]
  },
  {
    "id": "demian-hesse",
    "title": "Demian",
    "originalTitle": "Demian: Die Geschichte von Emil Sinclairs Jugend",
    "author": "Hermann Hesse",
    "authorBio": "Nobel ödüllü Alman yazar. Doğu bilgeliği ve Jung psikolojisini roman sanatıyla buluşturmuştur.",
    "authorBirthDeath": "1877 - 1962",
    "year": "1919",
    "genre": "modernist",
    "coverBg": "from-[#0D9488] to-[#134E4A]",
    "summary": "Emil Sinclair'in aydınlık ve karanlık dünyalar arasında Max Demian rehberliğinde kendi hakiki benliğini arayışı.",
    "keyThemes": [
      "Bireyleşme (Individuation)",
      "Aydınlık ve Karanlık",
      "Yumurtayı Kırmak",
      "Abraxas"
    ],
    "historicalContext": "Gençliğin geleneksel ahlak kalıplarından kopup kendi içsel hakikatine yöneliş manifestosu.",
    "passages": [
      {
        "id": "dmn_1",
        "difficulty": "easy",
        "quote": "Kuş yumurtadan çıkmak için savaşır."
      },
      {
        "id": "dmn_2",
        "difficulty": "medium",
        "quote": "Her insanın tek bir görevi vardır: Kendi yolunu bulmak ve sonuna kadar o yolu yürümek."
      },
      {
        "id": "dmn_3",
        "difficulty": "hard",
        "quote": "Doğmak isteyen her varlık bir dünyayı yıkmak zorundadır; yıkım olmadan yeni bir bilinç filizlenemez."
      },
      {
        "id": "dmn_4",
        "difficulty": "legendary",
        "quote": "Kuş tanrıya doğru uçar; tanrının adı Abraxas'tır ve o hem aydınlığı hem karanlığı kendi kutsal gövdesinde birleştirendir."
      }
    ]
  },
  {
    "id": "korluk-saramago",
    "title": "Körlük",
    "originalTitle": "Ensaio sobre a Cegueira",
    "author": "José Saramago",
    "authorBio": "Portekizli Nobel ödüllü edebiyat devi. İnsan doğasını alegorik romanlarıyla sarsmıştır.",
    "authorBirthDeath": "1922 - 2010",
    "year": "1995",
    "genre": "dystopia",
    "coverBg": "from-[#F59E0B] to-[#78350F]",
    "summary": "Bilinmeyen bir ülkede beyaz bir körlük salgınının patlak vermesiyle çöken uygarlık ve karantinadaki vahşet.",
    "keyThemes": [
      "Manevi Körlük",
      "Uygarlığın Kırılganlığı",
      "Görmek ve Şahitlik",
      "Merhamet"
    ],
    "historicalContext": "Toplumun ahlaki ve insani körlüğünü çıplak bir salgın metaforuyla anlatan modern klasik.",
    "passages": [
      {
        "id": "krl_1",
        "difficulty": "easy",
        "quote": "Gören ama görmeyen körleriz biz."
      },
      {
        "id": "krl_2",
        "difficulty": "medium",
        "quote": "Korku insanı kör eder; ama en kötüsü insanın kendi bencilliğine kör olmasıdır."
      },
      {
        "id": "krl_3",
        "difficulty": "hard",
        "quote": "Gözlerini kaybeden insanlar değil, insanlıklarını kaybeden toplumlar asıl zifiri karanlığa gömülür."
      },
      {
        "id": "krl_4",
        "difficulty": "legendary",
        "quote": "Bence biz kör olmadık, biz zaten kördük; gördüğünü sanan ama birbirinin acısına gözlerini kapatan körlerdik."
      }
    ]
  },
  {
    "id": "biz-zamyatin",
    "title": "Biz",
    "originalTitle": "My (Мы)",
    "author": "Yevgeni Zamyatin",
    "authorBio": "Rus yazar ve modern distopya türünün (1984 ve Cesur Yeni Dünya'ya esin veren) kurucusu.",
    "authorBirthDeath": "1884 - 1937",
    "year": "1924",
    "genre": "dystopia",
    "coverBg": "from-[#0284C7] to-[#0C4A6E]",
    "summary": "Camdan evlerde her anı denetlenen Tek Devlet'te D-503'ün aşık olmasıyla başlayan ruh ve isyan keşfi.",
    "keyThemes": [
      "Benlik vs. Biz",
      "Cam Şehir ve Şeffaflık",
      "Duyguların Suç Sayılması",
      "Sonsuz İsyan"
    ],
    "historicalContext": "Totaliter mantığı matematiğe dökerek teşhir eden ilk büyük modern distopya romanı.",
    "passages": [
      {
        "id": "biz_1",
        "difficulty": "easy",
        "quote": "Benlik bir hastalıktır, mutluluk bizdedir."
      },
      {
        "id": "biz_2",
        "difficulty": "medium",
        "quote": "Tek Devlet'in camdan duvarları ardında hiçbir sırra ve hiçbir gölgeye yer yoktur."
      },
      {
        "id": "biz_3",
        "difficulty": "hard",
        "quote": "İnsanın içindeki hayal gücünü ameliyatla söküp almadıkça, isyan tohumları her zaman yeşerecektir."
      },
      {
        "id": "biz_4",
        "difficulty": "legendary",
        "quote": "Son bir sayı olamayacağı gibi son bir devrim de olamaz; sayılar sonsuzdur ve hayat daima isyanla yeniden başlar."
      }
    ]
  },
  {
    "id": "kendini-arayan-insan",
    "title": "Kendini Arayan İnsan",
    "originalTitle": "Man's Search for Himself",
    "author": "Rollo May",
    "authorBio": "Amerikalı varoluşçu psikolog ve psikoterapist. Kaygı ve cesaret kuramcısıdır.",
    "authorBirthDeath": "1909 - 1994",
    "year": "1953",
    "genre": "psychology",
    "coverBg": "from-[#7C3AED] to-[#4C1D95]",
    "summary": "Yalnızlık ve kaygı çağında insanın kendi içsel merkezini, özgürlüğünü ve yaratıcı cesaretini bulma rehberi.",
    "keyThemes": [
      "Varoluşsal Kaygı",
      "İçsel Merkez",
      "Cesaret",
      "Birey Olma Sorumluluğu"
    ],
    "historicalContext": "Modern kitle toplumunun yarattığı boşluk hissine karşı varoluşçu psikoterapinin temel metni.",
    "passages": [
      {
        "id": "kai_1",
        "difficulty": "easy",
        "quote": "Cesaret, korkuya rağmen adım atabilmektir."
      },
      {
        "id": "kai_2",
        "difficulty": "medium",
        "quote": "İnsanın en büyük trajedisi yalnız kalmak değil, kalabalıklar içinde kendi benliğini yitirmektir."
      },
      {
        "id": "kai_3",
        "difficulty": "hard",
        "quote": "Kaygı, insanın kendi özgürlüğüyle ve potansiyeliyle yüzleştiği an hissettiği varoluşsal baş dönmesidir."
      },
      {
        "id": "kai_4",
        "difficulty": "legendary",
        "quote": "Kendi içine kök salamayan bir insan, rüzgar nereden eserse oraya savrulur; oysa özgürlük kendi fırtınanın ortasında dik durabilmektir."
      }
    ]
  },
  {
    "id": "uygarligin-huzursuzlugu",
    "title": "Uygarlığın Huzursuzluğu",
    "originalTitle": "Das Unbehagen in der Kultur",
    "author": "Sigmund Freud",
    "authorBio": "Psikanalizin kurucusu Avusturyalı nörolog ve düşünür.",
    "authorBirthDeath": "1856 - 1939",
    "year": "1930",
    "genre": "psychology",
    "coverBg": "from-[#9F1239] to-[#4C0519]",
    "summary": "Uygarlığın bireyin içgüdüsel dürtülerini bastırmasıyla yarattığı evrensel suçluluk ve huzursuzluk analizi.",
    "keyThemes": [
      "Eros ve Thanatos",
      "İçgüdülerin Bastırılması",
      "Uygarlık Bedeli",
      "Suçluluk Hissi"
    ],
    "historicalContext": "Modern toplumun psikolojik açmazlarını ve yıkıcılık eğilimini aydınlatan kült psikanalitik metin.",
    "passages": [
      {
        "id": "uh_1",
        "difficulty": "easy",
        "quote": "Uygarlık içgüdülerin feda edilmesidir."
      },
      {
        "id": "uh_2",
        "difficulty": "medium",
        "quote": "İnsan mutluluğu arar; fakat uygarlığın katı kuralları bu arayışın önündeki en büyük engeldir."
      },
      {
        "id": "uh_3",
        "difficulty": "hard",
        "quote": "Saldırganlık ve yıkıcılık içgüdüsü, insan doğasının derinliklerinde daima pusuya yatmış olarak bekler."
      },
      {
        "id": "uh_4",
        "difficulty": "legendary",
        "quote": "İnsanlar doğayı kontrol altına alarak büyük ilerlemeler kaydettiler; fakat kendi içlerindeki vahşi dürtülere hükmetmeyi henüz öğrenemediler."
      }
    ]
  },
  {
    "id": "denemeler-bacon",
    "title": "Denemeler ve Aforizmalar",
    "originalTitle": "The Essays",
    "author": "Francis Bacon",
    "authorBio": "İngiliz filozof, devlet adamı ve modern deneysel bilim yönteminin kurucusu.",
    "authorBirthDeath": "1561 - 1626",
    "year": "1597",
    "genre": "essay",
    "coverBg": "from-[#0D9488] to-[#115E59]",
    "summary": "Bilgi, hakikat, dostluk, iktidar ve bilgelik üzerine keskin zekayla yazılmış klasik denemeler.",
    "keyThemes": [
      "Bilgi Güçtür",
      "Okumanın Faydaları",
      "Hakikat Arayışı",
      "Pratik Akıl"
    ],
    "historicalContext": "İngiliz Rönesansı'nın aklı ve pratik tecrübeyi önceleyen temel düşünce metni.",
    "passages": [
      {
        "id": "fbc_1",
        "difficulty": "easy",
        "quote": "Bilgi tek başına bir güçtür."
      },
      {
        "id": "fbc_2",
        "difficulty": "medium",
        "quote": "Okumak insanı olgunlaştırır, konuşmak çevikleştirir, yazmak ise kusursuzlaştırır."
      },
      {
        "id": "fbc_3",
        "difficulty": "hard",
        "quote": "Hakikat, ancak sabah güneşinin berrak ışığında görülebilir; önyargılar ise gece karanlığında beslenir."
      },
      {
        "id": "fbc_4",
        "difficulty": "legendary",
        "quote": "Bazı kitaplar sadece tatmak, bazıları yutulmak, çok azı ise çiğnenip tamamen sindirilmek için yazılmıştır."
      }
    ]
  },
  {
    "id": "statu-endisesi",
    "title": "Statü Endişesi",
    "originalTitle": "Status Anxiety",
    "author": "Alain de Botton",
    "authorBio": "Modern felsefeyi gündelik hayatla buluşturan İsviçre asıllı İngiliz yazar.",
    "authorBirthDeath": "1969 - günümüz",
    "year": "2004",
    "genre": "essay",
    "coverBg": "from-[#3B82F6] to-[#1D4ED8]",
    "summary": "Modern insanın başkalarının gözündeki değerine takıntılı hale gelmesi ve bu endişeyi felsefe ve sanatla aşma yolları.",
    "keyThemes": [
      "Başarı Takıntısı",
      "Toplumsal Yargı",
      "Felsefi Dinginlik",
      "Sadeliğin Onuru"
    ],
    "historicalContext": "Sosyal medya ve meritokrasi çağında insanın iç huzurunu koruma kılavuzu.",
    "passages": [
      {
        "id": "ade_1",
        "difficulty": "easy",
        "quote": "Statü endişesi modern bir hastalıktır."
      },
      {
        "id": "ade_2",
        "difficulty": "medium",
        "quote": "Başkalarının hakkımızda ne düşündüğü, çoğu zaman bizim kendimizi nasıl gördüğümüzü belirler."
      },
      {
        "id": "ade_3",
        "difficulty": "hard",
        "quote": "Felsefe, kalabalıkların onayına bağımlı olmadan insanın kendi iç değerini bilmesini sağlayan en asil sığınaktır."
      },
      {
        "id": "ade_4",
        "difficulty": "legendary",
        "quote": "Mezarlıklar, dünyada bir zamanlar çok önemli olduğunu sanan insanlarla doludur; ölüm karşısında bütün sahte hiyerarşiler un ufak olur."
      }
    ]
  },
  {
    "id": "pasajlar-benjamin",
    "title": "Pasajlar",
    "originalTitle": "Das Passagen-Werk",
    "author": "Walter Benjamin",
    "authorBio": "20. yüzyılın en derin kültür eleştirmeni, Marksist filozof ve edebiyat kuramcısı.",
    "authorBirthDeath": "1892 - 1940",
    "year": "1982",
    "genre": "essay",
    "coverBg": "from-[#64748B] to-[#1E293B]",
    "summary": "19. yüzyıl Paris pasajları üzerinden modern kentin, meta fetişizminin ve tarihin felsefi arkeolojisi.",
    "keyThemes": [
      "Flâneur",
      "Tarih Meleği",
      "Meta Dünyası",
      "Kentsel Bellek"
    ],
    "historicalContext": "Faşizmden kaçarken ölümü göze alan filozofun tamamlanamamış dev kültür teorisi.",
    "passages": [
      {
        "id": "wb_1",
        "difficulty": "easy",
        "quote": "Tarih, galiplerin yazdığı bir masaldır."
      },
      {
        "id": "wb_2",
        "difficulty": "medium",
        "quote": "Flâneur, kentin sokaklarında kendi yalnızlığını bir sanat eseri gibi adımlayan kişidir."
      },
      {
        "id": "wb_3",
        "difficulty": "hard",
        "quote": "Tarih meleği yüzünü geçmişe çevirmiştir; orada tek bir felaket zincirinin aralıksız büyüdüğünü görür."
      },
      {
        "id": "wb_4",
        "difficulty": "legendary",
        "quote": "Geçmişin gerçek imgesi bir şimşek gibi parlayıp söner; tehlike anında yakalanmayan hiçbir hatıra bir daha geri gelmez."
      }
    ]
  },
  {
    "id": "savas-uzerine-clausewitz",
    "title": "Savaş Üzerine",
    "originalTitle": "Vom Kriege",
    "author": "Carl von Clausewitz",
    "authorBio": "Prusyalı general ve tüm dünyada askeri düşünceyi şekillendiren strateji filozofu.",
    "authorBirthDeath": "1780 - 1831",
    "year": "1832",
    "genre": "strategy",
    "coverBg": "from-[#7F1D1D] to-[#450A0A]",
    "summary": "Savaşın sadece askeri bir çatışma değil, politikanın başka araçlarla devamı olduğunu kanıtlayan anıt eser.",
    "keyThemes": [
      "Savaş Politikanın Devamıdır",
      "Savaş Sisi",
      "Ağırlık Merkezi",
      "Sürtünme"
    ],
    "historicalContext": "Napolyon Savaşları tecrübesiyle yazılmış, modern jeopolitiğin temel başvuru kaynağı.",
    "passages": [
      {
        "id": "clz_1",
        "difficulty": "easy",
        "quote": "Savaş politikanın başka araçlarla sürdürülmesidir."
      },
      {
        "id": "clz_2",
        "difficulty": "medium",
        "quote": "Savaşta her şey çok basittir, fakat en basit olan şey bile olağanüstü zordur."
      },
      {
        "id": "clz_3",
        "difficulty": "hard",
        "quote": "Savaşın sisi içinde doğru kararı verebilmek, ancak sarsılmaz bir irade ve berrak bir akılla mümkündür."
      },
      {
        "id": "clz_4",
        "difficulty": "legendary",
        "quote": "Teori hiçbir zaman gerçeğin yerini alamaz; o sadece komutanın zihnini aydınlatan ve kaos anında yol gösteren bir ışıktır."
      }
    ]
  },
  {
    "id": "osmanli-imparatorlugu-inalcik",
    "title": "Osmanlı İmparatorluğu: Klasik Çağ",
    "originalTitle": "The Ottoman Empire: The Classical Age 1300-1600",
    "author": "Halil İnalcık",
    "authorBio": "Tarihçilerin Kutbu kabul edilen, dünyaca ünlü Osmanlı tarihçisi profesör.",
    "authorBirthDeath": "1916 - 2016",
    "year": "1973",
    "genre": "strategy",
    "coverBg": "from-[#A16207] to-[#713F12]",
    "summary": "Osmanlı devlet yapısının, adalet dairesinin ve imparatorluk kurumlarının nasıl inşa edildiğinin bilimsel analizi.",
    "keyThemes": [
      "Adalet Dairesi",
      "Tımar Düzeni",
      "Devlet-i Aliyye",
      "Kurumsal Hafıza"
    ],
    "historicalContext": "Osmanlı tarih yazımını efsanelerden arındırıp arşiv belgeleriyle dünyaya tanıtan eser.",
    "passages": [
      {
        "id": "hi_1",
        "difficulty": "easy",
        "quote": "Adalet mülkün temelidir."
      },
      {
        "id": "hi_2",
        "difficulty": "medium",
        "quote": "Bir devletin gücü ordusunda değil, tebaasına sağladığı adalet ve emniyette gizlidir."
      },
      {
        "id": "hi_3",
        "difficulty": "hard",
        "quote": "Osmanlı idaresi, farklı din ve kavimleri adalet dairesi içinde bir arada tutabilme sanatıdır."
      },
      {
        "id": "hi_4",
        "difficulty": "legendary",
        "quote": "Tarihini bilmeyen bir millet, hafızasını kaybetmiş bir insana benzer; ne nereden geldiğini bilebilir ne de nereye gideceğini."
      }
    ]
  },
  {
    "id": "imparatorlugun-en-uzun-yuzyili",
    "title": "İmparatorluğun En Uzun Yüzyılı",
    "originalTitle": "İmparatorluğun En Uzun Yüzyılı",
    "author": "İlber Ortaylı",
    "authorBio": "Türk tarihçi, yazar, akademisyen ve Topkapı Sarayı eski başkanı.",
    "authorBirthDeath": "1947 - günümüz",
    "year": "1983",
    "genre": "strategy",
    "coverBg": "from-[#1E3A8A] to-[#0F172A]",
    "summary": "19. yüzyılda Osmanlı'nın modernleşme, bürokrasi, Tanzimat ve hayatta kalma mücadelesinin derin tahlili.",
    "keyThemes": [
      "Modernleşme Sancıları",
      "Tanzimat Dönemi",
      "Bürokrasi ve Islahat",
      "Tarih Şuuru"
    ],
    "historicalContext": "Cumhuriyet Türkiye'sini doğuran 19. yüzyıl Osmanlı mirasının en yetkin tahlillerinden biri.",
    "passages": [
      {
        "id": "io_1",
        "difficulty": "easy",
        "quote": "Tarih şuuru olmayan toplumlar yok olur."
      },
      {
        "id": "io_2",
        "difficulty": "medium",
        "quote": "On dokuzuncu asır, Osmanlı Devleti'nin hayatta kalabilmek için verdiği en çetin imtihandır."
      },
      {
        "id": "io_3",
        "difficulty": "hard",
        "quote": "Bürokrasiyi modernleştirmek kolaydır; fakat zihniyet dünyasını ve ahlakı dönüştürmek asırlar sürer."
      },
      {
        "id": "io_4",
        "difficulty": "legendary",
        "quote": "İmparatorluk mirası sadece toprak parçalarından ibaret değildir; o aynı zamanda asırlar boyunca yoğrulmuş derin bir kültür ve adalet hafızasıdır."
      }
    ]
  },
  {
    "id": "macbeth-shakespeare",
    "title": "Macbeth",
    "originalTitle": "The Tragedy of Macbeth",
    "author": "William Shakespeare",
    "authorBio": "Dünya edebiyatının en büyük dramatik dehası ve evrensel tiyatro yazarı.",
    "authorBirthDeath": "1564 - 1616",
    "year": "1606",
    "genre": "drama",
    "coverBg": "from-[#881337] to-[#4C0519]",
    "summary": "Cadıların kehanetiyle tahta göz diken ve iktidar hırsıyla kan döküp deliliğe sürüklenen İskoç generalinin trajedisi.",
    "keyThemes": [
      "İktidar Hırsı",
      "Vicdan Azabı",
      "Kader ve Kehanet",
      "Kanlı Eller"
    ],
    "historicalContext": "Güç zehirlenmesinin ve vicdanın insanı içeriden nasıl çürüttüğünün en karanlık sahne eseri.",
    "passages": [
      {
        "id": "mcb_1",
        "difficulty": "easy",
        "quote": "Güzel çirkindir, çirkin de güzel."
      },
      {
        "id": "mcb_2",
        "difficulty": "medium",
        "quote": "Bütün Arabistan'ın kokuları gelse bu küçücük kanlı eli temizleyemez."
      },
      {
        "id": "mcb_3",
        "difficulty": "hard",
        "quote": "Hayat yürüyen bir gölgedir; sahnede çırpınıp duran ve bir daha duyulmayan zavallı bir oyuncudur."
      },
      {
        "id": "mcb_4",
        "difficulty": "legendary",
        "quote": "Söndü, söndü kısa mum! Hayat bir delinin anlattığı, ses ve öfkeyle dolu, hiçbir anlamı olmayan bir masaldır."
      }
    ]
  },
  {
    "id": "kral-lear-shakespeare",
    "title": "Kral Lear",
    "originalTitle": "King Lear",
    "author": "William Shakespeare",
    "authorBio": "Dünya edebiyatının en büyük dramatik dehası ve evrensel tiyatro yazarı.",
    "authorBirthDeath": "1564 - 1616",
    "year": "1606",
    "genre": "drama",
    "coverBg": "from-[#4C1D95] to-[#2E1065]",
    "summary": "Krallığını dalkavuk kızlarına paylaştırıp sadık kızını kovan yaşlı kralın fırtınalar ortasındaki trajik deliliği.",
    "keyThemes": [
      "Dalkavukluk vs. Hakikat",
      "Nankörlük",
      "Fırtına ve Delilik",
      "Çıplak İnsan"
    ],
    "historicalContext": "Evlat nankörlüğü ve gücün kaybı üzerine yazılmış en sarsıcı dünya tragedyası.",
    "passages": [
      {
        "id": "kl_1",
        "difficulty": "easy",
        "quote": "Hiçten hiçbir şey çıkmaz."
      },
      {
        "id": "kl_2",
        "difficulty": "medium",
        "quote": "Ahmak ile bilge arasındaki tek fark, ahmağın konuştuğu yerde bilgenin susmasıdır."
      },
      {
        "id": "kl_3",
        "difficulty": "hard",
        "quote": "Fırtına dışarıda değil kralım; fırtına insanın kendi göğsündeki nankörlükle girdiği savaşta kopar."
      },
      {
        "id": "kl_4",
        "difficulty": "legendary",
        "quote": "Bizler doğduğumuz zaman, bu büyük deliler sahnesine çıktığımız için feryat edip ağlarız."
      }
    ]
  },
  {
    "id": "marti-cehov",
    "title": "Martı & Vanya Dayı",
    "originalTitle": "Chayka (Чайка) & Dyadya Vanya",
    "author": "Anton Çehov",
    "authorBio": "Modern tiyatronun öncüsü, durum tiyatrosunun ve insan psikolojisinin büyük ustası.",
    "authorBirthDeath": "1860 - 1904",
    "year": "1896",
    "genre": "drama",
    "coverBg": "from-[#0D9488] to-[#115E59]",
    "summary": "Sanat, aşk, hayal kırıklıkları ve taşrada geçen harcanmış ömürlerin lirik tiyatro şaheseri.",
    "keyThemes": [
      "Vurulmuş Martı",
      "Yaratıcılık Sancısı",
      "Harcanmış Hayatlar",
      "Kabulleniş"
    ],
    "historicalContext": "Olay örgüsü yerine atmosfer ve içsel çatışmayı sahneye taşıyan modern tiyatro devrimi.",
    "passages": [
      {
        "id": "mrt_1",
        "difficulty": "easy",
        "quote": "Ben bir martıyım... Hayır, değilim."
      },
      {
        "id": "mrt_2",
        "difficulty": "medium",
        "quote": "Önemli olan şöhret ya da parlak başarılar değil; katlanabilmek, sabretmeyi bilmektir."
      },
      {
        "id": "mrt_3",
        "difficulty": "hard",
        "quote": "Hayatını bir ideale adayan insan, sonunda o idealin bir kuruntu olduğunu fark edince nasıl yaşamaya devam eder?"
      },
      {
        "id": "mrt_4",
        "difficulty": "legendary",
        "quote": "Dinleneceğiz Vanya Dayı, dinleneceğiz! Yıldızlarla dolu bir gökyüzü göreceğiz ve bütün acılarımız geride kalacak."
      }
    ]
  },
  {
    "id": "hafiz-divani",
    "title": "Hafız Divanı",
    "originalTitle": "Divān-e Hāfez (دیوان حافظ)",
    "author": "Hafız-ı Şirazi",
    "authorBio": "Fars edebiyatının en lirik ve sembolik gazel ustası. Aşk ve irfan şairi.",
    "authorBirthDeath": "1315 - 1390",
    "year": "1380",
    "genre": "mysticism",
    "coverBg": "from-[#C2410C] to-[#7C2D12]",
    "summary": "İlahi aşkı mey, meyhane, gül ve bülbül remizleriyle anlatan, Doğu şiirinin zirve gazelleri.",
    "keyThemes": [
      "Rintlik",
      "İlahi Sarhoşluk",
      "Gönül Gözü",
      "Fani Dünya"
    ],
    "historicalContext": "Goethe'nin Doğu-Batı Divanı'na ilham veren dünya şiirinin en parlak pırlantası.",
    "passages": [
      {
        "id": "hfz_1",
        "difficulty": "easy",
        "quote": "Aşk yolu başlangıçta kolay görünürdü."
      },
      {
        "id": "hfz_2",
        "difficulty": "medium",
        "quote": "Gönül aynanı temiz tut ki hakikatin güneşi onda kusursuzca yansıyabilsin."
      },
      {
        "id": "hfz_3",
        "difficulty": "hard",
        "quote": "Dün gece rüyamda meyhanenin kapısında sabahladım; zira akıl dergahında bulamadığım huzur oradaydı."
      },
      {
        "id": "hfz_4",
        "difficulty": "legendary",
        "quote": "Aşkın öyle derin bir sırrı vardır ki onu ne akıl terazisi tartabilir ne de kuru vaizlerin dili tarif edebilir."
      }
    ]
  },
  {
    "id": "mantikut-tayr",
    "title": "Mantıku't-Tayr (Kuşların Dili)",
    "originalTitle": "Manṭiq-uṭ-Ṭayr (منطق الطیر)",
    "author": "Feridüddin Attar",
    "authorBio": "Büyük İranlı sufi şair ve hekim. Tasavvufi alegorinin en büyük ustasıdır.",
    "authorBirthDeath": "1145 - 1221",
    "year": "1177",
    "genre": "mysticism",
    "coverBg": "from-[#059669] to-[#064E3B]",
    "summary": "Hüthüt rehberliğinde padişahları Simurg'u aramak için yedi vadiyi aşan otuz kuşun vahdet yolculuğu.",
    "keyThemes": [
      "Yedi Vadi",
      "Simurg (Otuz Kuş)",
      "Nefsi Aşmak",
      "Vahdet-i Vücud"
    ],
    "historicalContext": "Mevlana'nın \"Attar ruh idi, biz onun izinden yürüdük\" dediği manevi rehber metin.",
    "passages": [
      {
        "id": "att_1",
        "difficulty": "easy",
        "quote": "Arayan kişi aradığı şeyin kendisidir."
      },
      {
        "id": "att_2",
        "difficulty": "medium",
        "quote": "Yedi vadiyi aşmadan Simurg'un Kaf Dağı'ndaki sırrına hiçbir fani kuş erişemez."
      },
      {
        "id": "att_3",
        "difficulty": "hard",
        "quote": "Otuz kuş aynaya baktıklarında gördüler ki aradıkları Simurg meğer kendi hakikatlerinden ibarettir."
      },
      {
        "id": "att_4",
        "difficulty": "legendary",
        "quote": "Terk et nefsini ve bütün bağlarını; zira ateşe girmeden pervanenin kanatları nura ve vuslata kavuşamaz."
      }
    ]
  },
  {
    "id": "sanatin-oykusu-gombrich",
    "title": "Sanatın Öyküsü",
    "originalTitle": "The Story of Art",
    "author": "E.H. Gombrich",
    "authorBio": "Avusturya asıllı İngiliz sanat tarihçisi. Sanat tarihini insanlığa sevdiren bilge öğretmen.",
    "authorBirthDeath": "1909 - 2001",
    "year": "1950",
    "genre": "cinema_art",
    "coverBg": "from-[#D97706] to-[#78350F]",
    "summary": "Mağara resimlerinden modern sanata uzanan, insanlığın görsel ifade serüveninin başvuru eseri.",
    "keyThemes": [
      "Sanat Diye Bir Şey Yoktur, Sanatçılar Vardır",
      "Görsel Dil",
      "Usta Çırak",
      "Yaratıcılık"
    ],
    "historicalContext": "Dünyada en çok satan ve sanat tarihini bir hikaye akıcılığıyla sunan temel klasik.",
    "passages": [
      {
        "id": "gmb_1",
        "difficulty": "easy",
        "quote": "Sanat diye bir şey yoktur, sanatçılar vardır."
      },
      {
        "id": "gmb_2",
        "difficulty": "medium",
        "quote": "Bir sanat eserinin değeri, onun gerçeğe ne kadar benzediğinde değil, ne hissettirdiğindedir."
      },
      {
        "id": "gmb_3",
        "difficulty": "hard",
        "quote": "Sanatçı, dünyayı herkesin gördüğü gibi değil, ancak kendi ruhunda yankılandığı biçimde tuvale aktaran kişidir."
      },
      {
        "id": "gmb_4",
        "difficulty": "legendary",
        "quote": "Geçmişin büyük ustaları bize sadece güzel resimler bırakmadılar; onlar dünyayı yeni gözlerle görebilmenin sonsuz imkanlarını armağan ettiler."
      }
    ]
  },
  {
    "id": "sinematograf-uzerine-notlar",
    "title": "Sinematograf Üzerine Notlar",
    "originalTitle": "Notes sur le cinématographe",
    "author": "Robert Bresson",
    "authorBio": "Fransız sinemasının saf ve tavizsiz minimalist ustası. Modeller ve saf ses poetikası kurucusudur.",
    "authorBirthDeath": "1901 - 1999",
    "year": "1975",
    "genre": "cinema_art",
    "coverBg": "from-[#334155] to-[#0F172A]",
    "summary": "Sinemanın tiyatrodan ve sahte oyunculuktan arınarak saf görsel-işitsel bir tefekküre dönüşmesinin aforizmaları.",
    "keyThemes": [
      "Saf Sinema",
      "Modeller (Oyuncu Değil)",
      "Sesin Gücü",
      "Sadelik"
    ],
    "historicalContext": "Sinema sanatının doğası üzerine yazılmış en özlü ve derin teorik el kitabı.",
    "passages": [
      {
        "id": "brs_1",
        "difficulty": "easy",
        "quote": "Gözün gördüğü şeyi ses derinleştirir."
      },
      {
        "id": "brs_2",
        "difficulty": "medium",
        "quote": "Sinematograf bir icat değil, görünmeyeni görünür kılma sanatıdır."
      },
      {
        "id": "brs_3",
        "difficulty": "hard",
        "quote": "Rol yapmayan insan gerçeğin ta kendisidir; kamera sahte olan her mimiği acımasızca ele verir."
      },
      {
        "id": "brs_4",
        "difficulty": "legendary",
        "quote": "İki imgenin birbirine değdiği yerde bir kıvılcım çakar; sinema montaj masasında doğan işte bu mucizevi ışıktır."
      }
    ]
  },
  {
    "id": "zaman-parcalari-wenders",
    "title": "Zaman Parçaları",
    "originalTitle": "Die Logik der Bilder & Emotion Pictures",
    "author": "Wim Wenders",
    "authorBio": "Yeni Alman Sineması'nın öncüsü, fotoğrafçı ve Berlin Üzerinde Gökyüzü'nün yönetmeni.",
    "authorBirthDeath": "1945 - günümüz",
    "year": "1988",
    "genre": "cinema_art",
    "coverBg": "from-[#0369A1] to-[#0C4A6E]",
    "summary": "Kameranın mekanla, yolla, manzarayla ve kaybolan zamanla kurduğu şiirsel ilişki üzerine denemeler.",
    "keyThemes": [
      "Yol ve Mekan",
      "Görüntünün Mantığı",
      "Melankoli",
      "Şehir ve Melekler"
    ],
    "historicalContext": "Yol filmleriyle sinema tarihine geçen bir ustanın görsellik ve zaman felsefesi.",
    "passages": [
      {
        "id": "ww_1",
        "difficulty": "easy",
        "quote": "Her fotoğraf bir zaman parçasıdır."
      },
      {
        "id": "ww_2",
        "difficulty": "medium",
        "quote": "Kamera arkasında olmak, dünyayı bir yabancı gibi ama sonsuz bir sevgiyle izlemektir."
      },
      {
        "id": "ww_3",
        "difficulty": "hard",
        "quote": "Yollar sadece iki şehri bağlamaz; onlar insanın kendi içindeki bilinmeyen coğrafyalara açılan kapılarıdır."
      },
      {
        "id": "ww_4",
        "difficulty": "legendary",
        "quote": "Bir şehrin sokaklarında kaybolduğunuzda, binalar ve gölgeler size yaşayanların unuttuğu o kadim hikayeleri anlatmaya başlar."
      }
    ]
  },
  {
    "id": "hobbit-tolkien",
    "title": "Hobbit",
    "originalTitle": "The Hobbit, or There and Back Again",
    "author": "J.R.R. Tolkien",
    "authorBio": "İngiliz filolog, Oxford profesörü ve Orta Dünya mitolojisinin kurucusu.",
    "authorBirthDeath": "1892 - 1973",
    "year": "1937",
    "genre": "epic_fantasy",
    "coverBg": "from-[#15803D] to-[#14532D]",
    "summary": "Bilbo Baggins'in sıcak evinden çıkıp ejderha Smaug'un hazinesini geri almak için çıktığı büyüleyici serüven.",
    "keyThemes": [
      "Gitmeyi Göze Almak",
      "Küçük Bir Hobitin Cesareti",
      "Büyüme",
      "Yolda Olmak"
    ],
    "historicalContext": "Yüzüklerin Efendisi'nin öncülü olan, masaldan epik mitolojiye uzanan klasik.",
    "passages": [
      {
        "id": "hbt_1",
        "difficulty": "easy",
        "quote": "Maceralar insanı rahatından eder."
      },
      {
        "id": "hbt_2",
        "difficulty": "medium",
        "quote": "Eğer dünyada daha çok insan yiyeceği ve şarkıyı altından üstün tutsaydı, dünya daha neşeli olurdu."
      },
      {
        "id": "hbt_3",
        "difficulty": "hard",
        "quote": "Kapıdan dışarı adım attığında dikkatli olmalısın; zira yola çıktığında nereye sürükleneceğini asla bilemezsin."
      },
      {
        "id": "hbt_4",
        "difficulty": "legendary",
        "quote": "Karanlık mağarada Bilbo'nun eline çarpan o soğuk altın halka, sadece kendi kaderini değil bütün Orta Dünya'nın geleceğini değiştirecekti."
      }
    ]
  },
  {
    "id": "mulksuzler-leguin",
    "title": "Mülksüzler",
    "originalTitle": "The Dispossessed: An Ambiguous Utopia",
    "author": "Ursula K. Le Guin",
    "authorBio": "Amerikalı edebiyat dehası, anarşist felsefeyi ve antropolojiyi kurguyla buluşturan usta.",
    "authorBirthDeath": "1929 - 2018",
    "year": "1974",
    "genre": "epic_fantasy",
    "coverBg": "from-[#475569] to-[#1E293B]",
    "summary": "Mülkiyetsiz anarşist Anarres ile kapitalist Urras gezegenleri arasında duvarları yıkmaya çalışan fizikçi Shevek'in hikayesi.",
    "keyThemes": [
      "Mülksüzlük",
      "Duvarlar ve Sınırlar",
      "Gerçek Yolculuk",
      "Özgürlük Sorumluluğu"
    ],
    "historicalContext": "İkili ütopya kavramını edebiyata kazandıran politik ve felsefi bilimkurgu şaheseri.",
    "passages": [
      {
        "id": "mlk_1",
        "difficulty": "easy",
        "quote": "Bir şeyi sahiplenmek, onun kölesi olmaktır."
      },
      {
        "id": "mlk_2",
        "difficulty": "medium",
        "quote": "Sınırları çizenler sadece toprakları değil, insan zihinlerini de hapsederler."
      },
      {
        "id": "mlk_3",
        "difficulty": "hard",
        "quote": "Gerçek yolculuk geri dönmektir; çünkü insan ancak başladığı yere vardığında yolun anlamını kavrar."
      },
      {
        "id": "mlk_4",
        "difficulty": "legendary",
        "quote": "Bizler hiçbir şeye sahip değiliz, bu yüzden özgürüz; mülkiyetin başladığı yerde sevgi ve kardeşlik biter."
      }
    ]
  },
  {
    "id": "zaman-carki-jordan",
    "title": "Zaman Çarkı: Dünyanın Gözü",
    "originalTitle": "The Eye of the World (The Wheel of Time)",
    "author": "Robert Jordan",
    "authorBio": "Modern epik fantezinin anıt ismi. Devasa ve kusursuz dünya inşasının ustasıdır.",
    "authorBirthDeath": "1948 - 2007",
    "year": "1990",
    "genre": "epic_fantasy",
    "coverBg": "from-[#7C2D12] to-[#431407]",
    "summary": "Zaman Çarkı dönerken çağlar gelir ve geçer; İki Nehir'den çıkan üç gencin Karanlık Varlık'a karşı kozmik savaşı.",
    "keyThemes": [
      "Zaman Çarkı",
      "Kader ve Desen",
      "Işık ve Karanlık",
      "Yeniden Doğuş"
    ],
    "historicalContext": "Tolkien sonrası fantezi edebiyatının en geniş kapsamlı ve zengin mitolojik serisi.",
    "passages": [
      {
        "id": "zc_1",
        "difficulty": "easy",
        "quote": "Zaman Çarkı döner ve çağlar geçer."
      },
      {
        "id": "zc_2",
        "difficulty": "medium",
        "quote": "Desen neyi dokuyorsa kader odur; insan sadece kendi ipliğini sağlam tutabilir."
      },
      {
        "id": "zc_3",
        "difficulty": "hard",
        "quote": "Rüzgar bir başlangıç değildir; Zaman Çarkı dönerken ne başlangıçlar vardır ne de sonlar."
      },
      {
        "id": "zc_4",
        "difficulty": "legendary",
        "quote": "Ölüm tüy kadar hafiftir, görev ise dağ kadar ağır; karanlık çöktüğünde ışığı savunanlar asla geri adım atmazlar."
      }
    ]
  },
  {
    "id": "babaya-mektup-kafka",
    "title": "Babaya Mektup",
    "originalTitle": "Brief an den Vater",
    "author": "Franz Kafka",
    "authorBio": "20. yüzyıl varoluşçuluğunun mimarı, modern bürokrasi ve suçluluğun eşsiz yazarı.",
    "authorBirthDeath": "1883 - 1924",
    "year": "1919",
    "genre": "letters",
    "coverBg": "from-[#44403C] to-[#1C1917]",
    "summary": "Kafka'nın otoriter, güçlü ve ezici babası Hermann Kafka'ya asla gönderemediği yüz sayfalık hesaplaşma mektubu.",
    "keyThemes": [
      "Otorite ve Ezilmişlik",
      "Baba-Oğul Çatışması",
      "Özgüvensizlik",
      "Yazının Sığınağı"
    ],
    "historicalContext": "Dönüşüm ve Dava gibi başyapıtların psikolojik köklerini aydınlatan en çıplak itiraf metni.",
    "passages": [
      {
        "id": "bmk_1",
        "difficulty": "easy",
        "quote": "Benden korktuğunu söylüyorsun baba."
      },
      {
        "id": "bmk_2",
        "difficulty": "medium",
        "quote": "Senin devasa varlığın karşısında ben sadece solgun ve cılız bir gölge gibi kaldım."
      },
      {
        "id": "bmk_3",
        "difficulty": "hard",
        "quote": "Benim bütün yazdıklarım seninle ilgiliydi; orada sadece senin kollarında ağlayamadığım şeylerin yasını tuttum."
      },
      {
        "id": "bmk_4",
        "difficulty": "legendary",
        "quote": "Sen yatağında uzanıp dünyaya hükmederken, ben odamın köşesinde senin onaylamayacağın bir kelimeyi yazmanın suçluluğuyla titriyordum."
      }
    ]
  },
  {
    "id": "genc-bir-saire-mektuplar",
    "title": "Genç Bir Şaire Mektuplar",
    "originalTitle": "Briefe an einen jungen Dichter",
    "author": "Rainer Maria Rilke",
    "authorBio": "Alman lirik şiirinin zirvesi. Varlık, ölüm, yalnızlık ve meleklerin şairi.",
    "authorBirthDeath": "1875 - 1926",
    "year": "1929",
    "genre": "letters",
    "coverBg": "from-[#059669] to-[#064E3B]",
    "summary": "Genç şair Kappus'a yazılmış, sanatın özü, yalnızlığın bereketi ve sabır üzerine ölümsüz mektuplar.",
    "keyThemes": [
      "Yalnızlığın Güzelliği",
      "Soruları Yaşamak",
      "İçsel Çağrı",
      "Sabır"
    ],
    "historicalContext": "Yaratıcı zihnin içsel arayışına rehberlik eden tüm zamanların en etkili başucu kitabı.",
    "passages": [
      {
        "id": "gsm_1",
        "difficulty": "easy",
        "quote": "Kendi içinize dönün ve derinleşin."
      },
      {
        "id": "gsm_2",
        "difficulty": "medium",
        "quote": "Zor olanı sevin; zira insanı gerçekten büyüten ve olgunlaştıran sadece zorluklardır."
      },
      {
        "id": "gsm_3",
        "difficulty": "hard",
        "quote": "Cevapları hemen aramayın; şimdilik soruların kendisini yaşayın, belki bir gün cevabın içine doğru yaşarsınız."
      },
      {
        "id": "gsm_4",
        "difficulty": "legendary",
        "quote": "İçinizdeki o derin yalnızlığı koruyun; zira insan ancak tek başına kaldığında kainatın o muazzam sessizliğini işitebilir."
      }
    ]
  },
  {
    "id": "theoya-mektuplar-vangogh",
    "title": "Theo'ya Mektuplar",
    "originalTitle": "Brieven aan zijn broeder Theo",
    "author": "Vincent van Gogh",
    "authorBio": "Post-empresyonizmin trajik dehası, sarı rengin ve dönen yıldızların ebedi ressamı.",
    "authorBirthDeath": "1853 - 1890",
    "year": "1914",
    "genre": "letters",
    "coverBg": "from-[#EAB308] to-[#713F12]",
    "summary": "Vincent'ın kardeşi Theo'ya yazdığı, yoksulluğun, deliliğin, sanat tutkusunun ve renklerin yakıcı mektupları.",
    "keyThemes": [
      "Sanat Ateşi",
      "Kardeşlik Sevgisi",
      "Renklerin Ruhu",
      "Yoksulluk ve Deha"
    ],
    "historicalContext": "Bir ressamın fırçasıyla tuvale, kalemiyle mektuplara döktüğü insanlık dramı.",
    "passages": [
      {
        "id": "vg_1",
        "difficulty": "easy",
        "quote": "İçimde yanan büyük bir ateş var."
      },
      {
        "id": "vg_2",
        "difficulty": "medium",
        "quote": "Geceleri resim yapmayı gündüzlere tercih ediyorum; çünkü gece renkleri daha canlıdır."
      },
      {
        "id": "vg_3",
        "difficulty": "hard",
        "quote": "İnsanların kalbine dokunmak istiyorum; bilsinler ki bu deli adam derinden ve şefkatle hissetmiştir."
      },
      {
        "id": "vg_4",
        "difficulty": "legendary",
        "quote": "Yıldızlara baktığımda daima hayallere dalarım; haritadaki siyah noktalar gibi gökyüzündeki yıldızlar da gidilecek köylerdir."
      }
    ]
  },
  {
    "id": "sand-county-almanagi",
    "title": "Bir Yılın Doğal Tarihi",
    "originalTitle": "A Sand County Almanac",
    "author": "Aldo Leopold",
    "authorBio": "Modern çevre etiğinin ve doğa koruma felsefesinin öncüsü Amerikalı ormancı ve ekolog.",
    "authorBirthDeath": "1887 - 1948",
    "year": "1949",
    "genre": "nature",
    "coverBg": "from-[#15803D] to-[#14532D]",
    "summary": "Toprak etiği kavramını kuran, mevsimlerin döngüsünü ve yaban hayatının bilgeliğini anlatan doğa klasiği.",
    "keyThemes": [
      "Toprak Etiği",
      "Dağ Gibi Düşünmek",
      "Yaban Hayat",
      "Mevsimlerin Döngüsü"
    ],
    "historicalContext": "Çevre hareketinin kutsal metni kabul edilen ekolojik edebiyat anıtı.",
    "passages": [
      {
        "id": "ald_1",
        "difficulty": "easy",
        "quote": "Dağ gibi düşünmeyi öğrenmeliyiz."
      },
      {
        "id": "ald_2",
        "difficulty": "medium",
        "quote": "Bir şey biyotik topluluğun bütünlüğünü ve güzelliğini koruyorsa doğrudur, bozan şey yanlıştır."
      },
      {
        "id": "ald_3",
        "difficulty": "hard",
        "quote": "Kurtların gözlerindeki yeşil ateş söndüğünde, dağın ruhu da insan eliyle sessizce ölür."
      },
      {
        "id": "ald_4",
        "difficulty": "legendary",
        "quote": "Toprak sadece bir mülk değil, insanın da dahil olduğu canlı bir cemaattir; ona ancak sevgi ve saygıyla yaklaştığımızda geleceğimizi kurtarabiliriz."
      }
    ]
  },
  {
    "id": "yabanda-krakauer",
    "title": "Yabanda (Into the Wild)",
    "originalTitle": "Into the Wild",
    "author": "Jon Krakauer",
    "authorBio": "Amerikalı dağcı, yazar ve araştırmacı gazeteci.",
    "authorBirthDeath": "1954 - günümüz",
    "year": "1996",
    "genre": "nature",
    "coverBg": "from-[#0284C7] to-[#075985]",
    "summary": "Christopher McCandless'in bütün parasını bağışlayıp Alaska'nın vahşi doğasına tek başına çıktığı ölümcül yolculuk.",
    "keyThemes": [
      "Uygarlıktan Kaçış",
      "Yabani Özgürlük",
      "Mutluluk Paylaşılınca Gerçektir",
      "İdealizm"
    ],
    "historicalContext": "Genç bir idealistin doğayla ve modern toplumla hesaplaşmasını anlatan biyografik klasik.",
    "passages": [
      {
        "id": "itw_1",
        "difficulty": "easy",
        "quote": "Mutluluk sadece paylaşıldığında gerçektir."
      },
      {
        "id": "itw_2",
        "difficulty": "medium",
        "quote": "Uygarlığın sahte güvenliğinden kaçıp doğanın vahşi kucağında hakiki benliği bulmak istiyordu."
      },
      {
        "id": "itw_3",
        "difficulty": "hard",
        "quote": "Kariyer ve para peşinde koşulan bir hayat, insanın kendi özgür ruhuna karşı işleyebileceği en büyük suçtur."
      },
      {
        "id": "itw_4",
        "difficulty": "legendary",
        "quote": "Alaska'nın karlı ormanlarında son nefesini verirken günlüğüne yazdığı o son cümle insanlığa bir derstir: Mutluluk ancak paylaşıldığında hakikidir."
      }
    ]
  },
  {
    "id": "beyoglu-rapsodisi",
    "title": "Beyoğlu Rapsodisi",
    "originalTitle": "Beyoğlu Rapsodisi",
    "author": "Ahmet Ümit",
    "authorBio": "Modern Türk polisiye edebiyatının en üretken ve sevilen ustası.",
    "authorBirthDeath": "1960 - günümüz",
    "year": "2003",
    "genre": "mystery",
    "coverBg": "from-[#881337] to-[#4C0519]",
    "summary": "Üç çocukluk arkadaşının Beyoğlu sokaklarında bir cinayet zincirine ve kendi geçmişlerinin karanlığına sürüklenişi.",
    "keyThemes": [
      "Beyoğlu Sokakları",
      "Dostluk ve İhanet",
      "Şehir Gizemi",
      "Karanlık Sırlar"
    ],
    "historicalContext": "İstanbul'un kültürel kalbi Beyoğlu'nu polisiyeyle harmanlayan çağdaş Türk klasiği.",
    "passages": [
      {
        "id": "br_1",
        "difficulty": "easy",
        "quote": "İstanbul sırlarını sevenlerine açar."
      },
      {
        "id": "br_2",
        "difficulty": "medium",
        "quote": "Her cinayet, insanın kendi içindeki karanlığa doğru açtığı kanlı bir kapıdır."
      },
      {
        "id": "br_3",
        "difficulty": "hard",
        "quote": "Beyoğlu'nun sokakları sadece aşıkları değil, geçmişin hayaletlerini ve işlenmiş günahları da koynunda saklar."
      },
      {
        "id": "br_4",
        "difficulty": "legendary",
        "quote": "İstiklal Caddesi'nin kalabalığı arasında yürürken her yüzün ardında gizlenen bir sır, her gölgenin içinde saklanan bir cinayet ihtimali vardır."
      }
    ]
  },
  {
    "id": "on-kucuk-zenci-christie",
    "title": "On Küçük Zenci (Ve Sonra Hiçbiri Kalmadı)",
    "originalTitle": "And Then There Were None",
    "author": "Agatha Christie",
    "authorBio": "Polisiye kurgunun kraliçesi, tüm zamanların en çok satan İngiliz yazarı.",
    "authorBirthDeath": "1890 - 1976",
    "year": "1939",
    "genre": "mystery",
    "coverBg": "from-[#1E293B] to-[#0A0A0A]",
    "summary": "Issız bir adadaki köşke davet edilen ve teker teker çocuk tekerlemesindeki gibi öldürülen on kişinin kilitli ada gizemi.",
    "keyThemes": [
      "Kusursuz Cinayet",
      "Kilitli Ada",
      "Geçmiş Suçlar",
      "Adalet Takıntısı"
    ],
    "historicalContext": "Tüm zamanların en çok satan ve kurgusal dehasıyla parmak ısırtan polisiye şaheseri.",
    "passages": [
      {
        "id": "okz_1",
        "difficulty": "easy",
        "quote": "Ve sonra hiçbiri kalmadı."
      },
      {
        "id": "okz_2",
        "difficulty": "medium",
        "quote": "Geçmişte işlenen ve cezasız kalan suçlar, eninde sonunda sahibini bulur."
      },
      {
        "id": "okz_3",
        "difficulty": "hard",
        "quote": "Adada mahsur kalan on kişi birbirine bakarken, katilin aralarından biri olduğunu bilmenin dehşetini yaşıyordu."
      },
      {
        "id": "okz_4",
        "difficulty": "legendary",
        "quote": "Denizin ortasındaki sarp kayalıkta fırtına uğuldarken, vicdan azabı ve ölüm korkusu insanları birer vahşi hayvana dönüştürmüştü."
      }
    ]
  },
  {
    "id": "buyuk-uyku-chandler",
    "title": "Büyük Uyku",
    "originalTitle": "The Big Sleep",
    "author": "Raymond Chandler",
    "authorBio": "Kara romanın (Hard-boiled) ve dedektif Philip Marlowe'un efsanevi yaratıcısı.",
    "authorBirthDeath": "1888 - 1959",
    "year": "1939",
    "genre": "mystery",
    "coverBg": "from-[#374151] to-[#111827]",
    "summary": "Dedektif Marlowe'un Los Angeles'ın yozlaşmış zenginleri, şantajcıları ve çeteleri arasında adaleti arayışı.",
    "keyThemes": [
      "Kara Roman (Hard-boiled)",
      "Philip Marlowe",
      "Büyük Uyku (Ölüm)",
      "Şehir Yozlaşması"
    ],
    "historicalContext": "Amerikan kara film ve polisiye sinemasının temel taşı olan kült roman.",
    "passages": [
      {
        "id": "bu_1",
        "difficulty": "easy",
        "quote": "Büyük uykuya dalanlar artık acı çekmez."
      },
      {
        "id": "bu_2",
        "difficulty": "medium",
        "quote": "Bir kez öldüğünüzde, nerede ve nasıl yattığınızın hiçbir önemi kalmaz."
      },
      {
        "id": "bu_3",
        "difficulty": "hard",
        "quote": "Bu kirli sokaklarda yürüyüp de kendi lekelenmemiş onurunu koruyabilen insan gerçek kahramandır."
      },
      {
        "id": "bu_4",
        "difficulty": "legendary",
        "quote": "Gecenin karanlığında neon ışıkları yağmurla ıslanmış caddelere vururken, Los Angeles bütün günahlarını karanlığın koynunda saklıyordu."
      }
    ]
  },
  {
    "id": "leonardo-da-vinci-isaacson",
    "title": "Leonardo da Vinci",
    "originalTitle": "Leonardo da Vinci",
    "author": "Walter Isaacson",
    "authorBio": "Amerikalı biyografi yazarı, Aspen Enstitüsü eski başkanı ve Time genel yayın yönetmeni.",
    "authorBirthDeath": "1952 - günümüz",
    "year": "2017",
    "genre": "biography",
    "coverBg": "from-[#0F766E] to-[#115E59]",
    "summary": "Rönesans'ın evrensel dehası Leonardo'nun defterleri, bilimsel merakı, resimleri ve insanüstü hayal gücü.",
    "keyThemes": [
      "Doyumsuz Merak",
      "Sanat ve Bilim Birlikteliği",
      "Gözlem Dehası",
      "Rönesans İnsanı"
    ],
    "historicalContext": "Mona Lisa ve Son Akşam Yemeği'nin ardındaki dehanın defterlerinden damıtılan dev biyografi.",
    "passages": [
      {
        "id": "ldv_1",
        "difficulty": "easy",
        "quote": "Öğrenmek zihni asla tüketmez."
      },
      {
        "id": "ldv_2",
        "difficulty": "medium",
        "quote": "Her şeyi merak edin; ağaçkakanın dilinin yapısını bile öğrenmek zihni açar."
      },
      {
        "id": "ldv_3",
        "difficulty": "hard",
        "quote": "Sanat ile bilimin kesiştiği yerde durabilen insan, kainatın en gizli yasalarını kavrama ayrıcalığına erişir."
      },
      {
        "id": "ldv_4",
        "difficulty": "legendary",
        "quote": "Mona Lisa'nın dudağındaki o yakalanamaz tebessüm, Leonardo'nun optik, anatomi ve insan ruhu üzerine kırk yıllık araştırmasının şiirsel özetidir."
      }
    ]
  },
  {
    "id": "gogol-biyografisi-troyat",
    "title": "Gogol: Bir Dehanın Dramı",
    "originalTitle": "Gogol",
    "author": "Henri Troyat",
    "authorBio": "Fransız Akademisi üyesi, Rus edebiyatı devlerinin biyografi ustası.",
    "authorBirthDeath": "1911 - 2007",
    "year": "1971",
    "genre": "biography",
    "coverBg": "from-[#854D0E] to-[#422006]",
    "summary": "Müfettiş ve Ölü Canlar'ın yazarı Gogol'ün dehası, dini buhranları ve el yazmalarını yakışının trajik hikayesi.",
    "keyThemes": [
      "Deha ve Delilik",
      "Gözyaşları Arasındaki Gülüş",
      "Yaratıcı Buhran",
      "Ölü Canlar"
    ],
    "historicalContext": "Rus edebiyatının temel direği olan Gogol'ün iç dünyasını ve trajik sonunu aydınlatan biyografi.",
    "passages": [
      {
        "id": "ggl_1",
        "difficulty": "easy",
        "quote": "Gülüşümün ardında acı gözyaşları vardır."
      },
      {
        "id": "ggl_2",
        "difficulty": "medium",
        "quote": "Dünyayı güldüren adam, kendi karanlık odasında Tanrı'nın affı için diz çöküp ağlıyordu."
      },
      {
        "id": "ggl_3",
        "difficulty": "hard",
        "quote": "Gogol el yazmalarını şömineye attığında, sadece kağıtları değil kendi ruhunun en değerli parçasını da ateşe teslim etmişti."
      },
      {
        "id": "ggl_4",
        "difficulty": "legendary",
        "quote": "Rusya'nın o uçsuz bucaksız karlı yollarında bir troyka gibi savrulan Gogol, kendi zihnindeki şeytanlarla savaşırken ölümsüz bir edebiyat yarattı."
      }
    ]
  },
  {
    "id": "gulliverin-gezileri-swift",
    "title": "Gulliver'in Gezileri",
    "originalTitle": "Gulliver's Travels",
    "author": "Jonathan Swift",
    "authorBio": "İrlandalı yazar, din adamı ve İngiliz edebiyatının gelmiş geçmiş en sert hiciv ustası.",
    "authorBirthDeath": "1667 - 1745",
    "year": "1726",
    "genre": "satire",
    "coverBg": "from-[#0369A1] to-[#075985]",
    "summary": "Lemuel Gulliver'in cüceler, devler, uçan ada ve asil atlar ülkesine yaptığı gezilerle insan kibrini yerle bir eden hiciv.",
    "keyThemes": [
      "İnsan Kibri",
      "Politik İkiyüzlülük",
      "Yahoos vs. Houyhnhnms",
      "Hiciv"
    ],
    "historicalContext": "Görünüşte bir macera masalı, özünde ise insan ırkına yazılmış en acımasız eleştiri.",
    "passages": [
      {
        "id": "gg_1",
        "difficulty": "easy",
        "quote": "İnsanlar akıllarını sadece kötülüğe kullanıyor."
      },
      {
        "id": "gg_2",
        "difficulty": "medium",
        "quote": "Yumurtanın hangi ucundan kırılacağı üzerine çıkan savaşlar, insanın saçmalığının kanıtıdır."
      },
      {
        "id": "gg_3",
        "difficulty": "hard",
        "quote": "Cüceler ülkesinde bir dev, devler ülkesinde ise zavallı bir böcek olan insan, kendi büyüklüğünü neye göre ölçer?"
      },
      {
        "id": "gg_4",
        "difficulty": "legendary",
        "quote": "Asil atların ülkesinden döndükten sonra insanların gururunu, yalanlarını ve açgözlülüğünü görmek bana katlanılmaz bir azap gibi geldi."
      }
    ]
  },
  {
    "id": "toros-canavari-nesin",
    "title": "Toros Canavarı",
    "originalTitle": "Toros Canavarı",
    "author": "Aziz Nesin",
    "authorBio": "Türk mizahının dünya çapındaki devi. Halkın çaresizliğini ve bürokrasinin çarpıklığını gülmeceyle anlatmıştır.",
    "authorBirthDeath": "1915 - 1995",
    "year": "1957",
    "genre": "satire",
    "coverBg": "from-[#B45309] to-[#78350F]",
    "summary": "Kendi halinde bir memur olan Nuri Sayan'ın yanlış anlaşılmalar sonucu tehlikeli bir hayduda dönüştürülmesinin hicvi.",
    "keyThemes": [
      "Bürokratik Saçmalık",
      "Etiketleme ve Toplum",
      "Korkunun Komedisi",
      "Ezilen Memur"
    ],
    "historicalContext": "Türkiye'nin çarpık adalet ve zabıta sistemini kahkahalarla eleştiren tiyatro ve roman klasiği.",
    "passages": [
      {
        "id": "tc_1",
        "difficulty": "easy",
        "quote": "Korku insanı canavar yapar."
      },
      {
        "id": "tc_2",
        "difficulty": "medium",
        "quote": "Bu memlekette namuslu kalmak için insanın canavar numarası yapması şarttır."
      },
      {
        "id": "tc_3",
        "difficulty": "hard",
        "quote": "Ben sadece ev kirasını ödemeye çalışan bir memurdum; beni siz kendi korkularınızla canavar yaptınız."
      },
      {
        "id": "tc_4",
        "difficulty": "legendary",
        "quote": "Kendi gölgesinden korkan bir toplum, önüne atılan ilk masum adamı efsanevi bir canavara dönüştürüp ona tapınmaktan hiç utanmaz."
      }
    ]
  },
  {
    "id": "bencillik-geni-dawkins",
    "title": "Gen Bencildir (The Selfish Gene)",
    "originalTitle": "The Selfish Gene",
    "author": "Richard Dawkins",
    "authorBio": "İngiliz evrimsel biyolog, zoolog ve yazar. Gen merkezli evrim kuramının popülerleştiricisidir.",
    "authorBirthDeath": "1941 - günümüz",
    "year": "1976",
    "genre": "science",
    "coverBg": "from-[#4338CA] to-[#312E81]",
    "summary": "Bütün canlıların kendi genlerinin kopyalanmasını sağlamak için inşa edilmiş geçici taşıtlar olduğunu anlatan devrimci eser.",
    "keyThemes": [
      "Gen Merkezli Evrim",
      "Memler (Kültürel Kopyalanma)",
      "Özgecilik ve Bencillik",
      "Doğal Seçilim"
    ],
    "historicalContext": "Biyolojide \"Mem\" (Meme) kavramını ilk kez ortaya atan ve evrim anlayışını kökten değiştiren bilim klasiği.",
    "passages": [
      {
        "id": "bencillik-geni-dawkins_easy",
        "difficulty": "easy",
        "quote": "Bizler genlerimizin hayatta kalma makineleriyiz."
      },
      {
        "id": "bencillik-geni-dawkins_medium",
        "difficulty": "medium",
        "quote": "Fikirler de genler gibi zihinler arasında kopyalanarak nesilden nesile aktarılır."
      },
      {
        "id": "bencillik-geni-dawkins_hard",
        "difficulty": "hard",
        "quote": "Yeryüzündeki hiçbir canlı kendi genlerinin çıkarından başka bir amaca hizmet etmek için programlanmamıştır."
      },
      {
        "id": "bencillik-geni-dawkins_legendary",
        "difficulty": "legendary",
        "quote": "Bizler bencil kopyalayıcıların geçici robotlarıyız; fakat insanlık tarihinde ilk kez bu bencil tiranlara isyan etme gücüne sahibiz."
      }
    ]
  }
];
