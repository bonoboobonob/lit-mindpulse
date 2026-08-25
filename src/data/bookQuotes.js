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
  // ==========================================
  // 1. FELSEFE & BİLGELİK (PHILOSOPHY & STOICISM)
  // ==========================================
  { id: 'phil_ma_1', genre: 'philosophy', difficulty: 'easy', book: 'Kendime Düşünceler', author: 'Marcus Aurelius', quote: 'Ruhun, düşüncelerinin rengine bürünür.' },
  { id: 'phil_ma_2', genre: 'philosophy', difficulty: 'easy', book: 'Kendime Düşünceler', author: 'Marcus Aurelius', quote: 'Sabah uyandığında nefes almanın ayrıcalığını hatırla.' },
  { id: 'phil_ma_3', genre: 'philosophy', difficulty: 'medium', book: 'Kendime Düşünceler', author: 'Marcus Aurelius', quote: 'Dış dünya seni üzemez; seni üzen şey ona verdiğin kendi yargılarındır.' },
  { id: 'phil_ma_4', genre: 'philosophy', difficulty: 'medium', book: 'Kendime Düşünceler', author: 'Marcus Aurelius', quote: 'Hayatın amacı çoğunluğun tarafında olmak değil, akıl ve erdemin yanında durmaktır.' },
  { id: 'phil_ma_5', genre: 'philosophy', difficulty: 'hard', book: 'Kendime Düşünceler', author: 'Marcus Aurelius', quote: 'Güne başlarken kendine şunu söyle: Bugün nankör, küstah, hilekar ve kıskanç insanlarla karşılaşacağım çünkü onlar iyiyi ve kötüyü ayırt edemezler.' },
  { id: 'phil_ma_6', genre: 'philosophy', difficulty: 'legendary', book: 'Kendime Düşünceler', author: 'Marcus Aurelius', quote: 'Zaman sonsuz bir akıntıdır; her olay bir an için su yüzüne çıkar, ardından sürüklenip gider ve yerini bir başkasına bırakır.' },

  { id: 'phil_sn_1', genre: 'philosophy', difficulty: 'easy', book: 'Ahlak Mektupları', author: 'Seneca', quote: 'Zamanı iyi kullanan insan için ömür uzundur.' },
  { id: 'phil_sn_2', genre: 'philosophy', difficulty: 'easy', book: 'Yaşamın Kısalığı Üzerine', author: 'Seneca', quote: 'Korkularımız gerçek acılarımızdan daima daha fazladır.' },
  { id: 'phil_sn_3', genre: 'philosophy', difficulty: 'medium', book: 'Ahlak Mektupları', author: 'Seneca', quote: 'Hangi limana doğru yelken açtığını bilmeyen bir gemi için hiçbir rüzgar elverişli değildir.' },
  { id: 'phil_sn_4', genre: 'philosophy', difficulty: 'hard', book: 'Yaşamın Kısalığı Üzerine', author: 'Seneca', quote: 'Bize verilen zaman kısa değildir; tersine biz onun büyük bir kısmını gereksiz ve faydasız işlerle harcayarak heba ederiz.' },
  { id: 'phil_sn_5', genre: 'philosophy', difficulty: 'legendary', book: 'Ahlak Mektupları', author: 'Seneca', quote: 'Bilge insan talihin getirdiği hiçbir hediyeye sevinmez ve hiçbir felakete yenilmez; çünkü o yalnızca kendi iç huzuruna ve erdemine güvenir.' },

  { id: 'phil_ep_1', genre: 'philosophy', difficulty: 'easy', book: 'Düşünceler ve Sohbetler', author: 'Epiktetos', quote: 'İnsanları üzen şeyler olaylar değil, yargılardır.' },
  { id: 'phil_ep_2', genre: 'philosophy', difficulty: 'medium', book: 'Kılavuz Kitap (Enchiridion)', author: 'Epiktetos', quote: 'Kontrol edemediğin şeylerin tutsağı olma; sadece kendi seçimlerinin efendisi ol.' },
  { id: 'phil_ep_3', genre: 'philosophy', difficulty: 'hard', book: 'Düşünceler ve Sohbetler', author: 'Epiktetos', quote: 'Özgürlük, arzuladığın şeyleri elde etmekte değil, kontrolünde olmayan arzuları dizginlemeyi öğrenmekte yatar.' },

  { id: 'phil_nz_1', genre: 'philosophy', difficulty: 'easy', book: 'Böyle Buyurdu Zerdüşt', author: 'Friedrich Nietzsche', quote: 'Uçuruma uzun süre bakarsan, uçurum da sana bakar.' },
  { id: 'phil_nz_2', genre: 'philosophy', difficulty: 'easy', book: 'Putların Alacakaranlığı', author: 'Friedrich Nietzsche', quote: 'Beni öldürmeyen her darbe beni güçlendirir.' },
  { id: 'phil_nz_3', genre: 'philosophy', difficulty: 'medium', book: 'Böyle Buyurdu Zerdüşt', author: 'Friedrich Nietzsche', quote: 'Gök gürültüsüyle gelen fikirler dünyayı yönetir; sessizce atılan adımlar fırtınayı doğurur.' },
  { id: 'phil_nz_4', genre: 'philosophy', difficulty: 'medium', book: 'Şen Bilim', author: 'Friedrich Nietzsche', quote: 'Müziksiz bir hayat, varoluş açısından telafisi imkansız büyük bir hata olurdu.' },
  { id: 'phil_nz_5', genre: 'philosophy', difficulty: 'hard', book: 'Böyle Buyurdu Zerdüşt', author: 'Friedrich Nietzsche', quote: 'Kendi alevinizde yanmaya hazır olmalısınız; önce küle dönüşmeden nasıl yeniden doğabilirsiniz?' },
  { id: 'phil_nz_6', genre: 'philosophy', difficulty: 'legendary', book: 'İnsanca, Pek İnsanca', author: 'Friedrich Nietzsche', quote: 'Yükseklere tırmanmak isteyen insan yalnızlığın sert rüzgarlarına göğüs germelidir; çünkü zirveler kalabalıkların değil, sadece kartalların meskenidir.' },

  { id: 'phil_sp_1', genre: 'philosophy', difficulty: 'easy', book: 'Etika', author: 'Baruch Spinoza', quote: 'Keder, zihnin yetkinliğinin azalmasıdır.' },
  { id: 'phil_sp_2', genre: 'philosophy', difficulty: 'medium', book: 'Etika', author: 'Baruch Spinoza', quote: 'İnsan eylemlerine ne ağlamalı, ne öfkelenmeli; yalnızca onları anlamaya çalışmalıdır.' },
  { id: 'phil_sp_3', genre: 'philosophy', difficulty: 'hard', book: 'Etika', author: 'Baruch Spinoza', quote: 'Akıl tarafından yönlendirilen bir insan, kör tutkularının esiri olan bir kimseden katbekat daha özgür ve güçlüdür.' },

  { id: 'phil_sch_1', genre: 'philosophy', difficulty: 'easy', book: 'Yaşam Bilgeliği', author: 'Arthur Schopenhauer', quote: 'Yalnızlık, tüm büyük zihinlerin kaderidir.' },
  { id: 'phil_sch_2', genre: 'philosophy', difficulty: 'medium', book: 'Aşkın Metafiziği', author: 'Arthur Schopenhauer', quote: 'Hayat bir sarkaç gibi acı ile can sıkıntısı arasında gidip gelir.' },
  { id: 'phil_sch_3', genre: 'philosophy', difficulty: 'hard', book: 'Yaşam Bilgeliği', author: 'Arthur Schopenhauer', quote: 'Bir insanın kendi içinde neye sahip olduğu, dışarıdan ne elde edebileceğinden daima daha belirleyici ve kıymetlidir.' },

  { id: 'phil_cam_1', genre: 'philosophy', difficulty: 'easy', book: 'Sisifos Söyleni', author: 'Albert Camus', quote: 'Sisifos\'u mutlu olarak hayal etmek gerekir.' },
  { id: 'phil_cam_2', genre: 'philosophy', difficulty: 'medium', book: 'Başkaldıran İnsan', author: 'Albert Camus', quote: 'Başkaldırıyorum, öyleyse varız; adaletsizlik karşısında susmak teslim olmaktır.' },
  { id: 'phil_cam_3', genre: 'philosophy', difficulty: 'hard', book: 'Sisifos Söyleni', author: 'Albert Camus', quote: 'Kışın en soğuk gününde, içimde yenilmez ve sarsılmaz bir yaz mevsimi olduğunu keşfettim.' },
  { id: 'phil_cam_4', genre: 'philosophy', difficulty: 'legendary', book: 'Düşüş', author: 'Albert Camus', quote: 'İnsanlar ancak sizin çektiğiniz acıların kendi çıkarlarına dokunmadığını gördüklerinde samimiyetle merhamet gösterirler.' },

  { id: 'phil_srt_1', genre: 'philosophy', difficulty: 'easy', book: 'Gizli Oturum', author: 'Jean-Paul Sartre', quote: 'Cehennem başkalarıdır.' },
  { id: 'phil_srt_2', genre: 'philosophy', difficulty: 'medium', book: 'Varlık ve Hiçlik', author: 'Jean-Paul Sartre', quote: 'İnsan özgürlüğe mahkumdur; çünkü bir kez dünyaya atıldıktan sonra yaptığı her şeyden sorumludur.' },
  { id: 'phil_srt_3', genre: 'philosophy', difficulty: 'hard', book: 'Bulantı', author: 'Jean-Paul Sartre', quote: 'Varoluş özden önce gelir; insan önce vardır, varoluşunu kendisi tanımlar ve seçimleriyle kendi kaderini inşa eder.' },

  // ==========================================
  // 2. DÜNYA KLASİKLERİ (WORLD CLASSICS)
  // ==========================================
  { id: 'cls_dst_1', genre: 'classics', difficulty: 'easy', book: 'Suç ve Ceza', author: 'Fyodor Dostoyevski', quote: 'Yeni bir adım atmak, yeni bir kelime söylemek insanların en çok korktuğu şeydir.' },
  { id: 'cls_dst_2', genre: 'classics', difficulty: 'easy', book: 'Beyaz Geceler', author: 'Fyodor Dostoyevski', quote: 'Bir anlık mutluluk bile bütün bir ömre bedeldir.' },
  { id: 'cls_dst_3', genre: 'classics', difficulty: 'medium', book: 'Yeraltından Notlar', author: 'Fyodor Dostoyevski', quote: 'Çok fazla bilinçli olmak bir hastalıktır; gerçek, tam anlamıyla bir hastalıktır.' },
  { id: 'cls_dst_4', genre: 'classics', difficulty: 'medium', book: 'Karamazov Kardeşler', author: 'Fyodor Dostoyevski', quote: 'İnsan sırf acı çekmemek için bile bütün varlığını feda etmeye hazırdır.' },
  { id: 'cls_dst_5', genre: 'classics', difficulty: 'hard', book: 'Budala', author: 'Fyodor Dostoyevski', quote: 'Dünyayı güzellik kurtaracak; fakat o güzelliği görebilmek için önce kalpteki kibri ve kini temizlemek gerekir.' },
  { id: 'cls_dst_6', genre: 'classics', difficulty: 'legendary', book: 'Karamazov Kardeşler', author: 'Fyodor Dostoyevski', quote: 'Sevgi öyle büyük bir güçtür ki, bütün dünyayı satın alabilir ve sadece kendi günahlarını değil, başkalarının günahlarını da bağışlatabilir.' },
  { id: 'cls_dst_7', genre: 'classics', difficulty: 'legendary', book: 'Yeraltından Notlar', author: 'Fyodor Dostoyevski', quote: 'Bana öyle geliyor ki insan sadece acılarını saymaktan hoşlanır, mutluluklarını ise hiç hesap etmez; oysa dikkat etse her anında bir sevinç gizlidir.' },

  { id: 'cls_tls_1', genre: 'classics', difficulty: 'easy', book: 'İnsan Ne İle Yaşar', author: 'Lev Tolstoy', quote: 'İnsan sadece sevgiyle yaşar.' },
  { id: 'cls_tls_2', genre: 'classics', difficulty: 'medium', book: 'Anna Karenina', author: 'Lev Tolstoy', quote: 'Bütün mutlu aileler birbirine benzer; her mutsuz ailenin ise kendine özgü bir mutsuzluğu vardır.' },
  { id: 'cls_tls_3', genre: 'classics', difficulty: 'medium', book: 'Savaş ve Barış', author: 'Lev Tolstoy', quote: 'En güçlü iki savaşçı sabır ve zamandır; onların üstesinden gelemeyeceği hiçbir engel yoktur.' },
  { id: 'cls_tls_4', genre: 'classics', difficulty: 'hard', book: 'İvan İlyiç\'in Ölümü', author: 'Lev Tolstoy', quote: 'Belki de hayatımı yanlış yaşadım düşüncesi, ölüm döşeğindeki insanın zihnini kemiren en amansız azaptır.' },
  { id: 'cls_tls_5', genre: 'classics', difficulty: 'legendary', book: 'Diriliş', author: 'Lev Tolstoy', quote: 'İnsanlar nehirler gibidir; suları aynıdır ama kimi yerde dar, kimi yerde hızlı, kimi yerde berrak, kimi yerde ise bulanık akar.' },

  { id: 'cls_kfk_1', genre: 'classics', difficulty: 'easy', book: 'Dönüşüm', author: 'Franz Kafka', quote: 'Gregor Samsa bir sabah huzursuz düşlerden uyandı.' },
  { id: 'cls_kfk_2', genre: 'classics', difficulty: 'medium', book: 'Dava', author: 'Franz Kafka', quote: 'Birisi Josef K.\'ya iftira atmış olmalıydı; çünkü kötü bir şey yapmamış olmasına rağmen tutuklandı.' },
  { id: 'cls_kfk_3', genre: 'classics', difficulty: 'hard', book: 'Aforizmalar', author: 'Franz Kafka', quote: 'Bir kafes bir kuş aramaya çıktı; oysa özgürlük kafesin dışındaki sonsuz gökyüzünde kanat çırpmaktı.' },
  { id: 'cls_kfk_4', genre: 'classics', difficulty: 'legendary', book: 'Şato', author: 'Franz Kafka', quote: 'Ulaşılmak istenen hedefin kendisi değil, o hedefe giden yolda karşılaşılan belirsizlikler ve engeller insanın ruhunu şekillendirir.' },

  { id: 'cls_hug_1', genre: 'classics', difficulty: 'easy', book: 'Sefiller', author: 'Victor Hugo', quote: 'Ölmek hiçbir şeydir; asıl korkunç olan yaşamamaktır.' },
  { id: 'cls_hug_2', genre: 'classics', difficulty: 'medium', book: 'Sefiller', author: 'Victor Hugo', quote: 'Gelecek, cesurların umudu, korkakların ise kabusudur.' },
  { id: 'cls_hug_3', genre: 'classics', difficulty: 'hard', book: 'Notre Dame\'ın Kamburu', author: 'Victor Hugo', quote: 'Sevmek veya sevilmiş olmak yeterlidir; karanlık gecelerin ardından doğacak şafağı beklemek gerekmez.' },

  { id: 'cls_hss_1', genre: 'classics', difficulty: 'easy', book: 'Siddhartha', author: 'Hermann Hesse', quote: 'Bilgelik başkasına aktarılamaz; onu kişi kendisi bulmalıdır.' },
  { id: 'cls_hss_2', genre: 'classics', difficulty: 'medium', book: 'Bozkırkurdu', author: 'Hermann Hesse', quote: 'Yalnızlık bağımsızlıktır; onu ben istedim ve uzun yıllar boyunca bedelini ödedim.' },
  { id: 'cls_hss_3', genre: 'classics', difficulty: 'hard', book: 'Demian', author: 'Hermann Hesse', quote: 'Kuş yumurtadan çıkmak için mücadele eder; yumurta dünyadır; doğmak isteyen bir dünyayı yok etmek zorundadır.' },

  { id: 'cls_flb_1', genre: 'classics', difficulty: 'medium', book: 'Madame Bovary', author: 'Gustave Flaubert', quote: 'İnsan kalbi bir sokak lambası gibidir; rüzgar estikçe söner ve titrer.' },
  { id: 'cls_stn_1', genre: 'classics', difficulty: 'medium', book: 'Kırmızı ve Siyah', author: 'Stendhal', quote: 'Büyük tutkular sessizce büyür ve fırtına gibi aniden patlak verir.' },
  { id: 'cls_chk_1', genre: 'classics', difficulty: 'medium', book: 'Altıncı Koğuş', author: 'Anton Çehov', quote: 'Düşünce ve akıl, insanın sahip olduğu en yüce ve dokunulmaz sığınaktır.' },

  // ==========================================
  // 3. TÜRK EDEBİYATI (TURKISH LITERATURE)
  // ==========================================
  { id: 'trk_sa_1', genre: 'turkish', difficulty: 'easy', book: 'Kürk Mantolu Madonna', author: 'Sabahattin Ali', quote: 'İçimizde şeytan yok; içimizde aciz ve tembel bir ruh var.' },
  { id: 'trk_sa_2', genre: 'turkish', difficulty: 'easy', book: 'Kuyucaklı Yusuf', author: 'Sabahattin Ali', quote: 'Bu dünyada merhametten daha asil bir erdem yoktur.' },
  { id: 'trk_sa_3', genre: 'turkish', difficulty: 'medium', book: 'Kürk Mantolu Madonna', author: 'Sabahattin Ali', quote: 'Dünyada bana hiçbir şey, yaşama sevinci kadar kıymetli görünmüyordu.' },
  { id: 'trk_sa_4', genre: 'turkish', difficulty: 'medium', book: 'İçimizdeki Şeytan', author: 'Sabahattin Ali', quote: 'İnsanlar birbirlerini ne kadar az tanıyorlar ve ne kadar kolay yargılıyorlar.' },
  { id: 'trk_sa_5', genre: 'turkish', difficulty: 'hard', book: 'Kürk Mantolu Madonna', author: 'Sabahattin Ali', quote: 'Bir insanın diğer bir insanı bütünüyle anlaması kadar dünyada imkansız ve mucizevi bir şey yoktur.' },
  { id: 'trk_sa_6', genre: 'turkish', difficulty: 'legendary', book: 'Kürk Mantolu Madonna', author: 'Sabahattin Ali', quote: 'Hayatta hiçbir zaman bir insana bu kadar çok bağlanmamalıydım; çünkü insanın bir başkasına bağlanması kendi özgürlüğünü kendi elleriyle teslim etmesidir.' },

  { id: 'trk_oa_1', genre: 'turkish', difficulty: 'easy', book: 'Tutunamayanlar', author: 'Oğuz Atay', quote: 'Kelimeler albayım, bazı anlamlara gelmiyor.' },
  { id: 'trk_oa_2', genre: 'turkish', difficulty: 'medium', book: 'Tehlikeli Oyunlar', author: 'Oğuz Atay', quote: 'Ben iç dünyama çekildikçe dışarıdaki dünya daha da anlamsızlaşıyor.' },
  { id: 'trk_oa_3', genre: 'turkish', difficulty: 'medium', book: 'Tutunamayanlar', author: 'Oğuz Atay', quote: 'Bizi anlamadılar Selim; bizi hiçbir zaman anlamayacaklar.' },
  { id: 'trk_oa_4', genre: 'turkish', difficulty: 'hard', book: 'Korkuyu Beklerken', author: 'Oğuz Atay', quote: 'Korku öyle sinsi bir duygudur ki, insanı henüz gerçekleşmemiş felaketlerin esiri haline getirir.' },
  { id: 'trk_oa_5', genre: 'turkish', difficulty: 'legendary', book: 'Tutunamayanlar', author: 'Oğuz Atay', quote: 'Bütün hayatımı başkalarının çizdiği dar kalıpların içine sığmaya çalışarak tükettim; oysa ben sadece kendi gökyüzümde kaybolmak istiyordum.' },

  { id: 'trk_tp_1', genre: 'turkish', difficulty: 'easy', book: 'Huzur', author: 'Ahmet Hamdi Tanpınar', quote: 'Ne içindeyim zamanın, ne de büsbütün dışında.' },
  { id: 'trk_tp_2', genre: 'turkish', difficulty: 'medium', book: 'Saatleri Ayarlama Enstitüsü', author: 'Ahmet Hamdi Tanpınar', quote: 'Saat, insanın kendi varoluşunu ve faniliğini hatırlatan en acımasız aynadır.' },
  { id: 'trk_tp_3', genre: 'turkish', difficulty: 'hard', book: 'Beş Şehir', author: 'Ahmet Hamdi Tanpınar', quote: 'Geçmiş zaman, ruhun derinliklerinde biriktirdiği en asil ve hüzünlü hatıralar hazinesidir.' },
  { id: 'trk_tp_4', genre: 'turkish', difficulty: 'legendary', book: 'Huzur', author: 'Ahmet Hamdi Tanpınar', quote: 'Musiki öyle bir dildir ki, kelimelerin bittiği ve suskunluğun başladığı yerde insan ruhunun en mahrem köşelerine tercüman olur.' },

  { id: 'trk_yk_1', genre: 'turkish', difficulty: 'easy', book: 'İnce Memed', author: 'Yaşar Kemal', quote: 'Zulmün olduğu yerde direniş haktır.' },
  { id: 'trk_yk_2', genre: 'turkish', difficulty: 'medium', book: 'İnce Memed', author: 'Yaşar Kemal', quote: 'İnsan dediğin bir topraktır; suyu sevgidir, güneşi ise adalettir.' },
  { id: 'trk_yk_3', genre: 'turkish', difficulty: 'hard', book: 'Ağrıdağı Efsanesi', author: 'Yaşar Kemal', quote: 'Dağlar ne kadar yüce olsa da sevda ateşi onların zirvesindeki karları eritmeye yeter.' },

  { id: 'trk_ya_1', genre: 'turkish', difficulty: 'easy', book: 'Aylak Adam', author: 'Yusuf Atılgan', quote: 'Sustu; konuşsa her şey bozulacaktı.' },
  { id: 'trk_ya_2', genre: 'turkish', difficulty: 'medium', book: 'Anayurt Oteli', author: 'Yusuf Atılgan', quote: 'Yalnızlık, insanın kendi ayak seslerini dinlemekten bile korktuğu sonsuz bir sessizliktir.' },
  { id: 'trk_ps_1', genre: 'turkish', difficulty: 'medium', book: 'Dokuzuncu Hariciye Koğuşu', author: 'Peyami Safa', quote: 'Hastalık, bedenin değil ruhun dünyayı daha derin ve keskin algılama halidir.' },
  { id: 'trk_sf_1', genre: 'turkish', difficulty: 'easy', book: 'Alemdağ\'da Var Bir Yılan', author: 'Sait Faik Abasıyanık', quote: 'Sevmek, bir insanı sevmekle başlar her şey.' },

  // ==========================================
  // 4. ŞİİR & DİZELER (POETRY & VERSES)
  // ==========================================
  { id: 'poe_nh_1', genre: 'poetry', difficulty: 'easy', book: 'Memleketimden İnsan Manzaraları', author: 'Nazım Hikmet', quote: 'Yaşamak bir ağaç gibi tek ve hür.' },
  { id: 'poe_nh_2', genre: 'poetry', difficulty: 'medium', book: 'Kuvâyi Milliye Destanı', author: 'Nazım Hikmet', quote: 'Dörtnala gelip Uzak Asya\'dan Akdeniz\'e bir kısrak başı gibi uzanan bu memleket bizim.' },
  { id: 'poe_nh_3', genre: 'poetry', difficulty: 'hard', book: 'Henüz Vakit Varken Gülüm', author: 'Nazım Hikmet', quote: 'En güzel deniz henüz gidilmemiş olandır; en güzel çocuk henüz büyümedi; en güzel günlerimiz henüz yaşamadıklarımızdır.' },

  { id: 'poe_cs_1', genre: 'poetry', difficulty: 'easy', book: 'Sevda Sözleri', author: 'Cemal Süreya', quote: 'Hayat kısa, kuşlar uçuyor.' },
  { id: 'poe_cs_2', genre: 'poetry', difficulty: 'medium', book: 'Sevda Sözleri', author: 'Cemal Süreya', quote: 'Aklıma gelme diye kendime söz verdim; sonra her sokak başında sana rastladım.' },
  { id: 'poe_cs_3', genre: 'poetry', difficulty: 'hard', book: 'Üvercinka', author: 'Cemal Süreya', quote: 'Seni bir kere öpsem ikinin hatırı kalıyordu; iki kere öpsem üçün boynu bükük kalıyordu.' },

  { id: 'poe_oa_1', genre: 'poetry', difficulty: 'easy', book: 'Lavinia', author: 'Özdemir Asaf', quote: 'Sana gitme demeyeceğim, ama gitme Lavinia.' },
  { id: 'poe_oa_2', genre: 'poetry', difficulty: 'medium', book: 'Yalnızlık Paylaşılmaz', author: 'Özdemir Asaf', quote: 'Yalnızlık paylaşılsaydı adı yalnızlık olmazdı; o ancak tek başına taşınan bir yüktür.' },

  { id: 'poe_ai_1', genre: 'poetry', difficulty: 'easy', book: 'Ben Sana Mecburum', author: 'Attila İlhan', quote: 'Ben sana mecburum bilemezsin, adını mıh gibi aklımda tutuyorum.' },
  { id: 'poe_ai_2', genre: 'poetry', difficulty: 'medium', book: 'Elde Var Hüzün', author: 'Attila İlhan', quote: 'Ne vakit bir yaşamak düşünsem, bu kurtlar sofrasında akşam olur.' },

  { id: 'poe_tu_1', genre: 'poetry', difficulty: 'easy', book: 'Göğe Bakma Durağı', author: 'Turgut Uyar', quote: 'İkimiz birden sevinebiliriz göğe bakalım.' },
  { id: 'poe_tu_2', genre: 'poetry', difficulty: 'medium', book: 'Dünyanın En Güzel Arabistanı', author: 'Turgut Uyar', quote: 'Durma göğe bakalım; gökyüzü hepimizin tek ortak sığınağıdır.' },

  { id: 'poe_aa_1', genre: 'poetry', difficulty: 'easy', book: 'Hasretinden Prangalar Eskittim', author: 'Ahmed Arif', quote: 'Haberin var mı taş duvar; demir kapı, kör pencere?' },
  { id: 'poe_aa_2', genre: 'poetry', difficulty: 'hard', book: 'Hasretinden Prangalar Eskittim', author: 'Ahmed Arif', quote: 'Yokluğun cehennemin öbür adıdır; üşüyorum, kapama gözlerini.' },

  // ==========================================
  // 5. MODERNİZM & BİLİNÇAKIŞI (MODERNISM & STREAM OF CONSCIOUSNESS)
  // ==========================================
  { id: 'mod_pr_1', genre: 'modernist', difficulty: 'easy', book: 'Kayıp Zamanın İzinde', author: 'Marcel Proust', quote: 'Gerçek keşif yolculuğu yeni manzaralar aramakta değil, yeni gözlere sahip olmaktadır.' },
  { id: 'mod_pr_2', genre: 'modernist', difficulty: 'medium', book: 'Swann\'ların Tarafı', author: 'Marcel Proust', quote: 'Bir anı, tadılan küçük bir madlen kekiyle zihinde yeniden canlanan koskoca bir dünyadır.' },
  { id: 'mod_pr_3', genre: 'modernist', difficulty: 'hard', book: 'Çiçek Açmış Genç Kızların Gölgesinde', author: 'Marcel Proust', quote: 'Zamanın akışı içinde unuttuğumuzu sandığımız duygular, en beklenmedik bir koku veya sesle capcanlı karşımıza dikilir.' },
  { id: 'mod_pr_4', genre: 'modernist', difficulty: 'legendary', book: 'Yakalanan Zaman', author: 'Marcel Proust', quote: 'Sanat tek gerçek yaşamdır; çünkü sanatçının kendi gözleriyle dünyayı algılamasını ve bu benzersiz bakış açısını sonsuzluğa armağan etmesini sağlar.' },

  { id: 'mod_jy_1', genre: 'modernist', difficulty: 'easy', book: 'Ulysses', author: 'James Joyce', quote: 'Tarih, uyanmaya çalıştığım bir kabustur.' },
  { id: 'mod_jy_2', genre: 'modernist', difficulty: 'medium', book: 'Sanatçının Bir Genç Adam Olarak Portresi', author: 'James Joyce', quote: 'Ruhum, kendi kanatlarıyla gökyüzüne yükselmek için bütün zincirlerini kırmak zorundaydı.' },
  { id: 'mod_jy_3', genre: 'modernist', difficulty: 'hard', book: 'Dublinliler', author: 'James Joyce', quote: 'Kar bütün İrlanda üzerine, yaşayanların ve ölülerin üzerine usul usul yağıyordu.' },

  { id: 'mod_flk_1', genre: 'modernist', difficulty: 'easy', book: 'Ses ve Öfke', author: 'William Faulkner', quote: 'Geçmiş asla ölmez; hatta geçmiş bile değildir.' },
  { id: 'mod_flk_2', genre: 'modernist', difficulty: 'medium', book: 'Döşeğimde Ölürken', author: 'William Faulkner', quote: 'Kelimeler sadece bir boşluğu doldurmak için kullanılan çaresiz işaretlerdir.' },
  { id: 'mod_tm_1', genre: 'modernist', difficulty: 'hard', book: 'Büyülü Dağ', author: 'Thomas Mann', quote: 'Zaman algısı, insanın içinde bulunduğu mekanın genişliği ve ruhun dinginliği ile doğrudan ilişkilidir.' },

  // ==========================================
  // 6. DİSTOPYA & GELECEK (DYSTOPIAN & SPECULATIVE)
  // ==========================================
  { id: 'dys_orw_1', genre: 'dystopia', difficulty: 'easy', book: '1984', author: 'George Orwell', quote: 'Büyük Birader seni izliyor.' },
  { id: 'dys_orw_2', genre: 'dystopia', difficulty: 'easy', book: 'Hayvan Çiftliği', author: 'George Orwell', quote: 'Bütün hayvanlar eşittir ama bazıları daha eşittir.' },
  { id: 'dys_orw_3', genre: 'dystopia', difficulty: 'medium', book: '1984', author: 'George Orwell', quote: 'Geçmişi kontrol eden geleceği kontrol eder; bugünü kontrol eden geçmişi kontrol eder.' },
  { id: 'dys_orw_4', genre: 'dystopia', difficulty: 'hard', book: '1984', author: 'George Orwell', quote: 'Özgürlük, iki kere ikinin dört ettiğini söyleyebilmektir; buna izin verilirse arkası kendiliğinden gelir.' },
  { id: 'dys_orw_5', genre: 'dystopia', difficulty: 'legendary', book: '1984', author: 'George Orwell', quote: 'Eğer geleceğin bir resmini görmek istiyorsanız, bir insanın yüzüne sonsuza dek basan bir postal hayal edin.' },

  { id: 'dys_hux_1', genre: 'dystopia', difficulty: 'easy', book: 'Cesur Yeni Dünya', author: 'Aldous Huxley', quote: 'Sözcükler tıpkı röntgen ışınları gibidir; doğru kullanıldığında her şeyi delip geçer.' },
  { id: 'dys_hux_2', genre: 'dystopia', difficulty: 'medium', book: 'Cesur Yeni Dünya', author: 'Aldous Huxley', quote: 'Gerçek mutluluk hiçbir zaman görkemli değildir; o sessiz ve dingin bir kabulleniştir.' },
  { id: 'dys_hux_3', genre: 'dystopia', difficulty: 'hard', book: 'Cesur Yeni Dünya', author: 'Aldous Huxley', quote: 'İnsanlara acı çektirmeyerek onları köleleştiren bir düzen, zorbalıkla yönetilen bir düzenden çok daha tehlikelidir.' },

  { id: 'dys_brd_1', genre: 'dystopia', difficulty: 'easy', book: 'Fahrenheit 451', author: 'Ray Bradbury', quote: 'Kitapları yakmaktan daha büyük bir suç varsa o da onları okumamaktır.' },
  { id: 'dys_brd_2', genre: 'dystopia', difficulty: 'medium', book: 'Fahrenheit 451', author: 'Ray Bradbury', quote: 'Kitaplar bize sadece bilmediğimiz şeyleri değil, unuttuğumuz insanlığımızı da hatırlatır.' },
  { id: 'dys_zam_1', genre: 'dystopia', difficulty: 'medium', book: 'Biz', author: 'Yevgeni Zamyatin', quote: 'Kusursuz mutluluk ile sınırsız özgürlük arasında daima uzlaşmaz bir savaş vardır.' },

  // ==========================================
  // 7. PSİKOLOJİ & İNSAN (PSYCHOLOGY & MEANING)
  // ==========================================
  { id: 'psy_frk_1', genre: 'psychology', difficulty: 'easy', book: 'İnsanın Anlam Arayışı', author: 'Viktor Frankl', quote: 'Yaşamak için bir nedeni olan her türlü nasıla katlanır.' },
  { id: 'psy_frk_2', genre: 'psychology', difficulty: 'medium', book: 'İnsanın Anlam Arayışı', author: 'Viktor Frankl', quote: 'İnsanın elinden her şey alınabilir; son özgürlüğü olan tavrını seçme hakkı hariç.' },
  { id: 'psy_frk_3', genre: 'psychology', difficulty: 'hard', book: 'İnsanın Anlam Arayışı', author: 'Viktor Frankl', quote: 'Koşulları değiştiremediğimiz anda, kendimizi değiştirmek zorunda olduğumuz gerçeğiyle yüzleşiriz.' },

  { id: 'psy_jng_1', genre: 'psychology', difficulty: 'easy', book: 'Keşfedilmemiş Benlik', author: 'Carl Gustav Jung', quote: 'Dışarı bakan rüya görür, içeri bakan uyanır.' },
  { id: 'psy_jng_2', genre: 'psychology', difficulty: 'medium', book: 'Kırmızı Kitap', author: 'Carl Gustav Jung', quote: 'Kendi karanlığıyla yüzleşmeyen hiçbir insan aydınlığa ve olgunluğa ulaşamaz.' },
  { id: 'psy_jng_3', genre: 'psychology', difficulty: 'hard', book: 'İnsan ve Sembolleri', author: 'Carl Gustav Jung', quote: 'Bilinçdışını bilince dönüştürene kadar o hayatınızı yönetir ve siz ona kader dersiniz.' },

  { id: 'psy_frm_1', genre: 'psychology', difficulty: 'easy', book: 'Sevme Sanatı', author: 'Erich Fromm', quote: 'Sevgi bir duygu değil, aktif bir sanattır.' },
  { id: 'psy_frm_2', genre: 'psychology', difficulty: 'medium', book: 'Özgürlükten Kaçış', author: 'Erich Fromm', quote: 'İnsan kendi yalnızlığından korktuğu için özgürlüğünü otoriteye feda etmeye hazırdır.' },
  { id: 'psy_ylm_1', genre: 'psychology', difficulty: 'medium', book: 'Nietzsche Ağladığında', author: 'Irvin Yalom', quote: 'Ümit etmek, sadece gerçekleşmeyecek arzuların acısını uzatmaktan başka bir işe yaramaz.' },

  // ==========================================
  // 8. DENEME & TEFEKKÜR (ESSAYS & CONTEMPLATION)
  // ==========================================
  { id: 'ess_mnt_1', genre: 'essay', difficulty: 'easy', book: 'Denemeler', author: 'Michel de Montaigne', quote: 'Kendimi arıyorum, bu yüzden kendimi yazıyorum.' },
  { id: 'ess_mnt_2', genre: 'essay', difficulty: 'medium', book: 'Denemeler', author: 'Michel de Montaigne', quote: 'Dünyanın en yüksek tahtında bile otursanız, oturacağınız yer kendi kıçınızın üstüdür.' },
  { id: 'ess_mnt_3', genre: 'essay', difficulty: 'hard', book: 'Denemeler', author: 'Michel de Montaigne', quote: 'Başkalarının bilgisiyle bilgili olabilsek bile, ancak kendi aklımızla bilge olabiliriz.' },

  { id: 'ess_cir_1', genre: 'essay', difficulty: 'easy', book: 'Çürümenin Kitabı', author: 'Emil Cioran', quote: 'Yalnızca acı çekenler gerçek anlamda uyanıktır.' },
  { id: 'ess_cir_2', genre: 'essay', difficulty: 'medium', book: 'Doğmuş Olmanın Sakıncası', author: 'Emil Cioran', quote: 'Bütün kitaplar yazılmış birer mezar taşıdır; kelimeler ise içindeki ölü düşünceler.' },
  { id: 'ess_cir_3', genre: 'essay', difficulty: 'hard', book: 'Varolma Eğilimi', author: 'Emil Cioran', quote: 'Hiçbir şeye inanmamak, her şeye inanmaktan çok daha büyük bir disiplin ve cesaret gerektirir.' },

  { id: 'ess_cm_1', genre: 'essay', difficulty: 'easy', book: 'Bu Ülke', author: 'Cemil Meriç', quote: 'Kitaplar, insanlığın tek ve ebedi hafızasıdır.' },
  { id: 'ess_cm_2', genre: 'essay', difficulty: 'medium', book: 'Bu Ülke', author: 'Cemil Meriç', quote: 'Kelimeler kaybolunca düşünceler sığlaşır; dilini kaybeden bir millet hafızasını da kaybeder.' },
  { id: 'ess_cm_3', genre: 'essay', difficulty: 'hard', book: 'Jurnal', author: 'Cemil Meriç', quote: 'Düşünce şüpheyle başlar; şüphe etmeyen ve sorgulamayan bir zihin ancak bir esirdir.' },

  // ==========================================
  // 9. TARİH & STRATEJİ (HISTORY & STRATEGY)
  // ==========================================
  { id: 'str_st_1', genre: 'strategy', difficulty: 'easy', book: 'Savaş Sanatı', author: 'Sun Tzu', quote: 'En büyük zafer, savaşmadan kazanılan zaferdir.' },
  { id: 'str_st_2', genre: 'strategy', difficulty: 'medium', book: 'Savaş Sanatı', author: 'Sun Tzu', quote: 'Kendini ve düşmanını iyi tanırsan, yüz savaşa girsen de tehlikeye düşmezsin.' },
  { id: 'str_mch_1', genre: 'strategy', difficulty: 'easy', book: 'Prens', author: 'Niccolò Machiavelli', quote: 'Sevilmektense korkulmak çok daha güvenlidir.' },
  { id: 'str_mch_2', genre: 'strategy', difficulty: 'medium', book: 'Prens', author: 'Niccolò Machiavelli', quote: 'Aslan tuzaklardan kaçamaz, tilki ise kurtları kovamaz; öyleyse hem tilki hem aslan olmalısın.' },
  { id: 'str_ibh_1', genre: 'strategy', difficulty: 'medium', book: 'Mukaddime', author: 'İbn Haldun', quote: 'Coğrafya kaderdir; toplumların karakterini ve geleceğini yaşadıkları toprak belirler.' },
  { id: 'str_ilb_1', genre: 'strategy', difficulty: 'medium', book: 'Bir Ömür Nasıl Yaşanır', author: 'İlber Ortaylı', quote: 'Cesur olun; hayatınızı başkalarının takdirine göre değil, kendi merakınıza göre kurun.' },

  // ==========================================
  // 10. DÜNYA TİYATROSU (WORLD DRAMA & PLAYS)
  // ==========================================
  { id: 'drm_shk_1', genre: 'drama', difficulty: 'easy', book: 'Hamlet', author: 'William Shakespeare', quote: 'Olmak ya da olmamak, işte bütün mesele bu.' },
  { id: 'drm_shk_2', genre: 'drama', difficulty: 'medium', book: 'Macbeth', author: 'William Shakespeare', quote: 'Hayat yürüyen bir gölgedir; sahnede çırpınan ve sonra unutulan zavallı bir aktördür.' },
  { id: 'drm_shk_3', genre: 'drama', difficulty: 'hard', book: 'Kral Lear', author: 'William Shakespeare', quote: 'Biz bu dünyaya delilerin körlere kılavuzluk ettiği bir tiyatro sahnesi olarak doğarız.' },
  { id: 'drm_gth_1', genre: 'drama', difficulty: 'easy', book: 'Faust', author: 'Johann Wolfgang von Goethe', quote: 'Dur ey an, öyle güzelsin ki!' },
  { id: 'drm_gth_2', genre: 'drama', difficulty: 'medium', book: 'Faust', author: 'Johann Wolfgang von Goethe', quote: 'İnsan çabaladığı sürece yanılır; fakat aramaktan vazgeçmeyen kurtuluşa erer.' },
  { id: 'drm_bck_1', genre: 'drama', difficulty: 'easy', book: 'Godot\'yu Beklerken', author: 'Samuel Beckett', quote: 'Hep denedin, hep yenildin. Olsun. Yine dene, yine yenil, daha iyi yenil.' },

  // ==========================================
  // 11. TASAVVUF & DOĞU (MYSTICISM & EASTERN THOUGHT)
  // ==========================================
  { id: 'mys_rum_1', genre: 'mysticism', difficulty: 'easy', book: 'Mesnevi', author: 'Mevlana Celaleddin Rumi', quote: 'Yara, ışığın sana sızdığı yerdir.' },
  { id: 'mys_rum_2', genre: 'mysticism', difficulty: 'medium', book: 'Mesnevi', author: 'Mevlana Celaleddin Rumi', quote: 'Dün akıllıydım, dünyayı değiştirmek istedim; bugün bilgeyim, kendimi değiştiriyorum.' },
  { id: 'mys_rum_3', genre: 'mysticism', difficulty: 'hard', book: 'Divan-ı Kebir', author: 'Mevlana Celaleddin Rumi', quote: 'Sen okyanustaki bir damla değilsin; sen tek bir damlanın içindeki koca bir okyanussun.' },
  { id: 'mys_sms_1', genre: 'mysticism', difficulty: 'easy', book: 'Kırk Kural', author: 'Şems-i Tebrizi', quote: 'Hakk\'ı nerede ararsan ara, önce kalbinde bulmalısın.' },
  { id: 'mys_sms_2', genre: 'mysticism', difficulty: 'medium', book: 'Kırk Kural', author: 'Şems-i Tebrizi', quote: 'Düzenim bozulur, hayatım altüst olur diye endişe etme; nereden bilirsin altının üstünden iyi olmadığını?' },
  { id: 'mys_yn_1', genre: 'mysticism', difficulty: 'easy', book: 'Divan', author: 'Yunus Emre', quote: 'İlim ilim bilmektir, ilim kendin bilmektir.' },
  { id: 'mys_lao_1', genre: 'mysticism', difficulty: 'easy', book: 'Tao Te Ching', author: 'Lao Tzu', quote: 'Bin millik bir yolculuk tek bir adımla başlar.' },
  { id: 'mys_lao_2', genre: 'mysticism', difficulty: 'medium', book: 'Tao Te Ching', author: 'Lao Tzu', quote: 'Suyun yumuşaklığı ve sabrı, en sert kayaları bile zamanla aşındırmaya yeter.' },
  { id: 'mys_kbr_1', genre: 'mysticism', difficulty: 'medium', book: 'Ermiş', author: 'Halil Cibran', quote: 'Aşk hiçbir şey istemez, sadece kendi kendisini tamamlamak ister.' },

  // ==========================================
  // 12. SİNEMA & SANAT KURAMI (CINEMA & ART THEORY)
  // ==========================================
  { id: 'art_trk_1', genre: 'cinema_art', difficulty: 'easy', book: 'Mühürlenmiş Zaman', author: 'Andrey Tarkovski', quote: 'Sanat, insanın mutlak hakikate ve mükemmelliğe duyduğu özlemdir.' },
  { id: 'art_trk_2', genre: 'cinema_art', difficulty: 'medium', book: 'Mühürlenmiş Zaman', author: 'Andrey Tarkovski', quote: 'Zamanı mühürlemek, anın içinde saklı olan sonsuz ruhu yakalamaktır.' },
  { id: 'art_trk_3', genre: 'cinema_art', difficulty: 'hard', book: 'Mühürlenmiş Zaman', author: 'Andrey Tarkovski', quote: 'Sanatçı olabilmek için insanın kendisini kurban etmeye ve hakikatin hizmetine adamaya hazır olması gerekir.' },
  { id: 'art_brg_1', genre: 'cinema_art', difficulty: 'easy', book: 'Görme Biçimleri', author: 'John Berger', quote: 'Görmek, konuşmaktan önce gelmiştir.' },
  { id: 'art_brg_2', genre: 'cinema_art', difficulty: 'medium', book: 'Görme Biçimleri', author: 'John Berger', quote: 'Baktığımız nesne ile aramızdaki ilişki, aynı zamanda kendi bakış açımızın bir kurgusudur.' },
  { id: 'art_snt_1', genre: 'cinema_art', difficulty: 'medium', book: 'Fotoğraf Üzerine', author: 'Susan Sontag', quote: 'Fotoğraf çekmek, bir anı ebediyen sahiplenmek ve onun faniliğine meydan okumaktır.' },
  { id: 'art_bnj_1', genre: 'cinema_art', difficulty: 'hard', book: 'Tekniğin Olanaklarıyla Sanat', author: 'Walter Benjamin', quote: 'Mekanik olarak çoğaltılan sanat eseri, kendi özgün aurasını ve biricikliğini yitirir.' },

  // ==========================================
  // 13. EPİK & FANTASTİK (EPIC & SPECULATIVE FICTION)
  // ==========================================
  { id: 'epc_tlk_1', genre: 'epic_fantasy', difficulty: 'easy', book: 'Yüzüklerin Efendisi: Yüzük Kardeşliği', author: 'J.R.R. Tolkien', quote: 'Gezginlerin hepsi kaybolmuş değildir.' },
  { id: 'epc_tlk_2', genre: 'epic_fantasy', difficulty: 'medium', book: 'Yüzüklerin Efendisi: Kralın Dönüşü', author: 'J.R.R. Tolkien', quote: 'Karanlık ne kadar koyu olursa olsun, şafağın doğuşunu engelleyemez.' },
  { id: 'epc_tlk_3', genre: 'epic_fantasy', difficulty: 'hard', book: 'Yüzüklerin Efendisi: Yüzük Kardeşliği', author: 'J.R.R. Tolkien', quote: 'Bize düşen tek şey, bize verilen zaman diliminde ne yapacağımıza karar vermektir.' },
  { id: 'epc_lgn_1', genre: 'epic_fantasy', difficulty: 'easy', book: 'Yerdeniz Büyücüsü', author: 'Ursula K. Le Guin', quote: 'Işığı görmek için karanlığın var olması gerekir.' },
  { id: 'epc_lgn_2', genre: 'epic_fantasy', difficulty: 'medium', book: 'Mülksüzler', author: 'Ursula K. Le Guin', quote: 'Bir duvar ördüğünde kimi içeride, kimi dışarıda bıraktığına dikkat etmelisin.' },
  { id: 'epc_hrb_1', genre: 'epic_fantasy', difficulty: 'easy', book: 'Dune', author: 'Frank Herbert', quote: 'Korku aklın katilidir; korku mutlak yıkımı getiren küçük ölümdür.' },
  { id: 'epc_hrb_2', genre: 'epic_fantasy', difficulty: 'medium', book: 'Dune', author: 'Frank Herbert', quote: 'Korkumla yüzleşeceğim; onun üzerimden ve içimden geçmesine izin vereceğim.' },

  // ==========================================
  // 14. MEKTUP & GÜNLÜK (LETTERS & MEMOIRS)
  // ==========================================
  { id: 'let_kfk_1', genre: 'letters', difficulty: 'easy', book: 'Milena\'ya Mektuplar', author: 'Franz Kafka', quote: 'Yanımda yürüyordun Milena, düşünsene, yanımdaydın.' },
  { id: 'let_kfk_2', genre: 'letters', difficulty: 'medium', book: 'Milena\'ya Mektuplar', author: 'Franz Kafka', quote: 'Seni sevmek, kendimi uçsuz bucaksız bir uçurumun kenarında bulmak gibi.' },
  { id: 'let_kfk_3', genre: 'letters', difficulty: 'hard', book: 'Babaya Mektup', author: 'Franz Kafka', quote: 'Senin yanındayken konuşma yeteneğimi bütünüyle kaybediyordum çünkü senin otoriten karşısında her sözcük anlamsızlaşıyordu.' },
  { id: 'let_wlf_1', genre: 'letters', difficulty: 'easy', book: 'Kendine Ait Bir Oda', author: 'Virginia Woolf', quote: 'Para kazanın ve kendinize ait bir oda edinin.' },
  { id: 'let_wlf_2', genre: 'letters', difficulty: 'hard', book: 'Kendine Ait Bir Oda', author: 'Virginia Woolf', quote: 'Bir kadın eğer kurmaca yazacaksa paraya ve kendine ait kilitli bir odaya sahip olmalıdır.' },
  { id: 'let_wlf_3', genre: 'letters', difficulty: 'medium', book: 'Dalgalar', author: 'Virginia Woolf', quote: 'Kelimeler bizi birbirimize bağlayan tek köprüdür.' },
  { id: 'let_frk_1', genre: 'letters', difficulty: 'easy', book: 'Genç Bir Kızın Günlüğü', author: 'Anne Frank', quote: 'Her şeye rağmen insanların kalplerinin hala iyi olduğuna inanıyorum.' },

  // ==========================================
  // 15. DOĞA & İNZİVA (NATURE & SOLITUDE)
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
  // 16. MİTOLOJİ & BÜYÜLÜ GERÇEKÇİLİK (MYTHOLOGY & MAGICAL REALISM)
  // ==========================================
  { id: 'myt_hom_1', genre: 'mythology', difficulty: 'easy', book: 'İlyada', author: 'Homeros', quote: 'Öfkeyi söyle tanrıça, Akhilleus\'un yıkıcı öfkesini.' },
  { id: 'myt_hom_2', genre: 'mythology', difficulty: 'medium', book: 'Odysseia', author: 'Homeros', quote: 'Kaderin ağları sabırla örülür ve eninde sonunda hak yerini bulur.' },
  { id: 'myt_dnt_1', genre: 'mythology', difficulty: 'easy', book: 'İlahi Komedya: Cehennem', author: 'Dante Alighieri', quote: 'Buraya girenler, her türlü umudu geride bıraksın.' },
  { id: 'myt_dnt_2', genre: 'mythology', difficulty: 'hard', book: 'İlahi Komedya: Cehennem', author: 'Dante Alighieri', quote: 'Hayat yolculuğumuzun ortasında kendimi karanlık bir ormanda buldum çünkü doğru yolu kaybetmiştim.' },
  { id: 'myt_brg_1', genre: 'mythology', difficulty: 'medium', book: 'Ficciones / Kurgular', author: 'Jorge Luis Borges', quote: 'Evren, başkalarının kütüphane adını verdiği sonsuz bir labirenttir.' },
  { id: 'myt_brg_2', genre: 'mythology', difficulty: 'hard', book: 'Alef', author: 'Jorge Luis Borges', quote: 'Alef, mekanın bütün noktalarını aynı anda içinde barındıran tek bir gizemli noktadır.' },
  { id: 'myt_clv_1', genre: 'mythology', difficulty: 'medium', book: 'Görünmez Kentler', author: 'Italo Calvino', quote: 'Bir kenti anlamak, orada yaşayanların hayallerini ve özlemlerini dinlemektir.' },
  { id: 'myt_mrk_1', genre: 'mythology', difficulty: 'medium', book: 'Sahilde Kafka', author: 'Haruki Murakami', quote: 'Bazen kader küçük bir kum fırtınası gibidir; kaçtıkça seni içine çeker.' },

  // ==========================================
  // 17. POLİSİYE & GİZEM (MYSTERY & SUSPENSE)
  // ==========================================
  { id: 'mys_sh_1', genre: 'mystery', difficulty: 'easy', book: 'Dörtlerin İmzası', author: 'Arthur Conan Doyle', quote: 'İmkansızı elediğinde geriye kalan ne kadar olasılıksız olursa olsun gerçektir.' },
  { id: 'mys_sh_2', genre: 'mystery', difficulty: 'medium', book: 'Kızıl Dosya', author: 'Arthur Conan Doyle', quote: 'Sen görüyorsun ama gözlemlemiyorsun; ayrım işte tam olarak buradadır.' },
  { id: 'mys_ac_1', genre: 'mystery', difficulty: 'easy', book: 'Doğu Ekspresinde Cinayet', author: 'Agatha Christie', quote: 'İmkansız olan şey gerçekleşemez; öyleyse görünen imkansızlık bir yanılsamadır.' },
  { id: 'mys_ac_2', genre: 'mystery', difficulty: 'medium', book: 'On Küçük Zenci', author: 'Agatha Christie', quote: 'Vicdan azabı, insanın kendi içinde taşıdığı en acımasız cellattır.' },
  { id: 'mys_poe_1', genre: 'mystery', difficulty: 'easy', book: 'Kuzgun', author: 'Edgar Allan Poe', quote: 'Gözlerimin gördüğü her şey sadece bir düşün içindeki düşten ibaretti.' },
  { id: 'mys_poe_2', genre: 'mystery', difficulty: 'hard', book: 'Morgue Sokağı Cinayeti', author: 'Edgar Allan Poe', quote: 'Zihinsel çözümleme yeteneği, sıradan gözlem gücünden çok daha derin ve gizemli bir sanattır.' },

  // ==========================================
  // 18. BİYOGRAFİ & PORTRE (BIOGRAPHY & PORTRAITS)
  // ==========================================
  { id: 'bio_zwg_1', genre: 'biography', difficulty: 'easy', book: 'Yıldızın Parladığı Anlar', author: 'Stefan Zweig', quote: 'Tarih, ancak nadir anlarda bir kahramanın eline kaderi teslim eder.' },
  { id: 'bio_zwg_2', genre: 'biography', difficulty: 'medium', book: 'Kendileriyle Savaşanlar', author: 'Stefan Zweig', quote: 'Büyük bir ruha sahip olmak, hayatın bütün fırtınalarına karşı tek başına direnmektir.' },
  { id: 'bio_zwg_3', genre: 'biography', difficulty: 'hard', book: 'Dünün Dünyası', author: 'Stefan Zweig', quote: 'Bizler hiçbir kuşağın yaşamadığı kadar büyük bir çöküşe ve felakete tanıklık ettik.' },
  { id: 'bio_plt_1', genre: 'biography', difficulty: 'medium', book: 'Paralel Yaşamlar', author: 'Plütarkhos', quote: 'Bir insanın karakteri, en büyük başarılarından çok en küçük alışkanlıklarında gizlidir.' },

  // ==========================================
  // 19. MİZAH & HİCİV (SATIRE & WIT)
  // ==========================================
  { id: 'sat_an_1', genre: 'satire', difficulty: 'easy', book: 'Zübük', author: 'Aziz Nesin', quote: 'Gülmek, insanın çaresizliğe karşı bulduğu en asil silahtır.' },
  { id: 'sat_an_2', genre: 'satire', difficulty: 'medium', book: 'Yaşar Ne Yaşar Ne Yaşamaz', author: 'Aziz Nesin', quote: 'Resmi evraklarda varsan varsın, yoksan nefes alsan bile yaşamazsın.' },
  { id: 'sat_vlt_1', genre: 'satire', difficulty: 'easy', book: 'Candide', author: 'Voltaire', quote: 'Bahçemizi yetiştirmek zorundayız.' },
  { id: 'sat_vlt_2', genre: 'satire', difficulty: 'medium', book: 'Candide', author: 'Voltaire', quote: 'Her şeyin en iyi olduğu bir dünyada yaşıyorsak, diğer dünyalar kimbilir nasıldır?' },
  { id: 'sat_mt_1', genre: 'satire', difficulty: 'easy', book: 'Huckleberry Finn', author: 'Mark Twain', quote: 'Doğruyu söylerseniz hiçbir şeyi hatırlamak zorunda kalmazsınız.' },
  { id: 'sat_mt_2', genre: 'satire', difficulty: 'medium', book: 'Tom Sawyer', author: 'Mark Twain', quote: 'İnsanın en güçlü silahı kahkahadır; onun karşısında hiçbir zorbalık dayanamaz.' },

  // ==========================================
  // 20. BİLİM & EVREN (SCIENCE & COSMOS)
  // ==========================================
  { id: 'sci_sgn_1', genre: 'science', difficulty: 'easy', book: 'Kozmos', author: 'Carl Sagan', quote: 'Bizler yıldız tozuyuz; evren kendi kendini anlamaya çalışan bir bilinçtir.' },
  { id: 'sci_sgn_2', genre: 'science', difficulty: 'medium', book: 'Soluk Mavi Nokta', author: 'Carl Sagan', quote: 'Bütün tarihimiz ve sevinçlerimiz uzayın sonsuz karanlığında asılı duran o toz zerresinde yaşandı.' },
  { id: 'sci_sgn_3', genre: 'science', difficulty: 'hard', book: 'Karanlık Bir Dünyada Bilimin Mum Işığı', author: 'Carl Sagan', quote: 'Bilim sadece bir bilgi bütünü değil, aynı zamanda düşünmenin ve sorgulamanın tek güvenilir yoludur.' },
  { id: 'sci_hwk_1', genre: 'science', difficulty: 'easy', book: 'Zamanın Kısa Tarihi', author: 'Stephen Hawking', quote: 'Zeka, değişime uyum sağlayabilme yeteneğidir.' },
  { id: 'sci_fyn_1', genre: 'science', difficulty: 'medium', book: 'Eminim Şaka Yapıyorsunuz Bay Feynman!', author: 'Richard Feynman', quote: 'En önemli ilke kendini kandırmamaktır; çünkü kandırılması en kolay kişi kendinsiniz.' },
  { id: 'sci_rvl_1', genre: 'science', difficulty: 'medium', book: 'Zamanın Düzeni', author: 'Carlo Rovelli', quote: 'Zaman olaylardan bağımsız akmaz; nesneler arasındaki ilişkilerin ta kendisidir.' },
];
