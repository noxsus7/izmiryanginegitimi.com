import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | İzmir Yangın Eğitimi',
  description:
    'yanginegitimiizmir.com gizlilik politikası. 6698 Sayılı KVKK kapsamında kişisel verilerin korunması, işlenmesi ve haklarınız hakkında detaylı bilgi.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://yanginegitimiizmir.com/gizlilik-politikasi',
  },
};

const lastUpdated = '25 Mart 2026';

export default function GizlilikPolitikasiPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-navy-900 py-16 md:py-20">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-5">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-slate-200">Gizlilik Politikası</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Gizlilik Politikası</h1>
          <p className="text-slate-400 mt-3 text-sm">Son güncelleme: {lastUpdated}</p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose-custom">

            {/* 1. Giriş */}
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 mt-0">1. Giriş</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
              İşbu Gizlilik Politikası, <strong>yanginegitimiizmir.com</strong> internet sitesi üzerinden toplanan kişisel verilerin; 6698 Sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) ve ilgili mevzuat kapsamında nasıl toplandığını, işlendiğini, saklandığını ve korunduğunu açıklamaktadır.
            </p>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
              Şirketimiz, İzmir merkezli olarak yangın eğitimi, yangın tatbikatı, deprem eğitimi ve acil durum arama kurtarma hizmetleri sunmaktadır. Hizmetlerimiz; fabrikalar, ofisler, oteller, eğitim kurumları, sanayi tesisleri ve kamu kuruluşları başta olmak üzere geniş bir kurumsal müşteri kitlesine yöneliktir.
            </p>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              Web sitemizi ziyaret ederek, formlarımızı doldurarak veya bizimle iletişime geçerek bu Gizlilik Politikası&apos;nda belirtilen koşulları kabul etmiş sayılırsınız.
            </p>

            <hr className="border-slate-200 my-8" />

            {/* 2. Toplanan Kişisel Veriler */}
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">2. Toplanan Kişisel Veriler</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
              Web sitemiz üzerinden aşağıdaki kişisel veriler toplanmaktadır:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
              <h3 className="text-base font-bold text-navy-900 mb-3">Teklif ve İletişim Formları Aracılığıyla:</h3>
              <ul className="space-y-2 text-slate-600 text-[0.938rem]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Ad Soyad</strong> — kimlik tespiti ve iletişim amacıyla</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Telefon Numarası</strong> — teklif ve geri dönüş iletişimi için</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>İlçe Bilgisi</strong> — hizmet planlaması ve lokasyon bazlı fiyatlandırma</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Hizmet Seçimi</strong> — talep edilen hizmetin belirlenmesi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Mesaj İçeriği</strong> — talebin doğru anlaşılması ve uygun çözüm sunulması</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
              <h3 className="text-base font-bold text-navy-900 mb-3">Diğer Kanallar Aracılığıyla:</h3>
              <ul className="space-y-2 text-slate-600 text-[0.938rem]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>WhatsApp iletişimi</strong> — mesaj yoluyla paylaşılan iletişim bilgileri</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Telefon aramaları</strong> — sözlü olarak iletilen ad, telefon ve talep bilgileri</span>
                </li>
              </ul>
            </div>

            <hr className="border-slate-200 my-8" />

            {/* 3. Kişisel Verilerin Toplanma Yöntemi */}
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">3. Kişisel Verilerin Toplanma Yöntemi</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
              Kişisel verileriniz aşağıdaki yöntemlerle toplanmaktadır:
            </p>
            <ul className="space-y-2 text-slate-600 text-[0.938rem] mb-8">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Web sitemizdeki <strong>teklif formu</strong> aracılığıyla (otomatik)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                <strong>WhatsApp</strong> üzerinden gönderilen mesajlarla (yarı otomatik)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                <strong>Telefon görüşmeleri</strong> sırasında sözlü olarak (manuel)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                <strong>Çerezler</strong> aracılığıyla (otomatik — anonim kullanım verileri)
              </li>
            </ul>

            <hr className="border-slate-200 my-8" />

            {/* 4. İşlenme Amaçları */}
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">4. Kişisel Verilerin İşlenme Amaçları</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
              Toplanan kişisel veriler, KVKK&apos;nın 5. ve 6. maddelerinde belirtilen işleme şartlarına uygun olarak aşağıdaki amaçlarla işlenmektedir:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                'Teklif hazırlanması ve iletilmesi',
                'Hizmet öncesi iletişim ve bilgilendirme',
                'Eğitim planlaması ve organizasyon',
                'Sözleşme süreçlerinin yürütülmesi',
                'Müşteri memnuniyeti takibi',
                'Yasal yükümlülüklerin yerine getirilmesi',
                'İstatistiksel analiz ve hizmet iyileştirme',
                'Talep ve şikâyet yönetimi',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <hr className="border-slate-200 my-8" />

            {/* 5. Saklanması */}
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">5. Kişisel Verilerin Saklanması</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
              Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca saklanmaktadır. Saklama süreleri belirlenirken aşağıdaki kriterler göz önünde bulundurulur:
            </p>
            <ul className="space-y-2 text-slate-600 text-[0.938rem] mb-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                İlgili mevzuatın öngördüğü zorunlu saklama süreleri
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Hizmet ilişkisinin devam süresi
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Olası hukuki uyuşmazlıklarda zamanaşımı süreleri
              </li>
            </ul>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              İşleme amacı ortadan kalktığında veya saklama süresi dolduğunda kişisel verileriniz, KVKK&apos;ya uygun şekilde silinir, yok edilir veya anonim hale getirilir.
            </p>

            <hr className="border-slate-200 my-8" />

            {/* 6. Paylaşımı */}
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">6. Kişisel Verilerin Paylaşımı</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
              Kişisel verileriniz, KVKK&apos;nın 8. ve 9. maddelerinde belirtilen şartlara uygun olarak ve yalnızca aşağıdaki durumlar dahilinde üçüncü taraflarla paylaşılabilir:
            </p>
            <ul className="space-y-2 text-slate-600 text-[0.938rem] mb-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                <strong>Yasal zorunluluklar:</strong> Yetkili kamu kurum ve kuruluşlarının talebi halinde
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                <strong>Hizmet sağlayıcılar:</strong> E-posta gönderimi (Resend) gibi teknik hizmet sağlayıcılarla, yalnızca hizmetin ifası için gerekli olduğu ölçüde
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                <strong>Hukuki süreçler:</strong> Dava, soruşturma veya denetim süreçleri kapsamında
              </li>
            </ul>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              Kişisel verileriniz, ticari amaçlarla üçüncü taraflarla paylaşılmaz veya satılmaz.
            </p>

            <hr className="border-slate-200 my-8" />

            {/* 7. KVKK Hakları */}
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">7. KVKK Kapsamındaki Haklarınız</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
              6698 Sayılı KVKK&apos;nın 11. maddesi uyarınca, kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:
            </p>
            <div className="bg-navy-900 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-white text-[0.938rem]">
                {[
                  'Kişisel verilerinizin işlenip işlenmediğini öğrenme',
                  'İşlenmişse buna ilişkin bilgi talep etme',
                  'İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme',
                  'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme',
                  'Eksik veya yanlış işlenmişse düzeltilmesini isteme',
                  'KVKK\'nın 7. maddesi kapsamında silinmesini veya yok edilmesini isteme',
                  'Düzeltme veya silme işlemlerinin aktarılan üçüncü kişilere bildirilmesini isteme',
                  'İşlenen verilerin münhasıran otomatik sistemlerle analiz edilmesi sureti ile aleyhinize bir sonucun ortaya çıkmasına itiraz etme',
                  'Kanuna aykırı işlenmesi sebebiyle zarara uğranılması halinde zararın giderilmesini talep etme',
                ].map((right, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-white/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-white/60">
                      {i + 1}
                    </span>
                    <span className="text-slate-200 leading-relaxed">{right}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              Haklarınızı kullanmak için aşağıda belirtilen iletişim bilgileri üzerinden tarafımıza başvurabilirsiniz. Başvurularınız, talebinizin niteliğine göre en kısa sürede ve en geç <strong>30 gün</strong> içinde ücretsiz olarak sonuçlandırılacaktır.
            </p>

            <hr className="border-slate-200 my-8" />

            {/* 8. Veri Güvenliği */}
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">8. Veri Güvenliği</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
              Kişisel verilerinizin güvenliğini sağlamak amacıyla gerekli teknik ve idari tedbirler alınmaktadır:
            </p>
            <ul className="space-y-2 text-slate-600 text-[0.938rem] mb-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                SSL/TLS şifreleme ile güvenli veri iletimi
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                Yetkisiz erişime karşı sunucu düzeyinde koruma
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                Veri erişim yetkilerinin sınırlandırılması
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                Düzenli güvenlik değerlendirmeleri
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                Çalışanlar için veri güvenliği farkındalık eğitimi
              </li>
            </ul>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              Bu önlemlere rağmen, internet üzerinden yapılan veri iletiminde mutlak güvenlik garanti edilememektedir. Olası bir veri ihlali durumunda, KVKK&apos;nın ilgili hükümleri doğrultusunda Kişisel Verileri Koruma Kurulu&apos;na ve ilgili kişilere bildirimde bulunulacaktır.
            </p>

            <hr className="border-slate-200 my-8" />

            {/* 9. Çerezler */}
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">9. Çerezler (Cookies)</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
              Web sitemiz, kullanıcı deneyimini iyileştirmek ve sitenin düzgün çalışmasını sağlamak amacıyla çerezler kullanmaktadır.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left px-4 py-3 text-navy-900 font-semibold border-b border-slate-200">Çerez Türü</th>
                    <th className="text-left px-4 py-3 text-navy-900 font-semibold border-b border-slate-200">Amaç</th>
                    <th className="text-left px-4 py-3 text-navy-900 font-semibold border-b border-slate-200">Zorunlu</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-medium">Zorunlu Çerezler</td>
                    <td className="px-4 py-3">Sitenin temel işlevselliğinin sağlanması</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">Evet</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-medium">Analiz Çerezleri</td>
                    <td className="px-4 py-3">Anonim ziyaretçi istatistikleri ve kullanım analizi</td>
                    <td className="px-4 py-3 text-slate-500">Hayır</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Performans Çerezleri</td>
                    <td className="px-4 py-3">Sayfa yükleme hızı ve site performansı ölçümü</td>
                    <td className="px-4 py-3 text-slate-500">Hayır</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              Tarayıcı ayarlarınızı değiştirerek çerezleri devre dışı bırakabilirsiniz. Ancak bu durumda web sitemizin bazı bölümleri düzgün çalışmayabilir.
            </p>

            <hr className="border-slate-200 my-8" />

            {/* 10. Üçüncü Taraf Hizmetler */}
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">10. Üçüncü Taraf Hizmetler</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
              Web sitemiz, hizmet kalitesini artırmak amacıyla aşağıdaki üçüncü taraf hizmetlerden yararlanmaktadır:
            </p>
            <ul className="space-y-2 text-slate-600 text-[0.938rem] mb-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                <strong>Resend:</strong> Form üzerinden iletilen taleplerin e-posta olarak yönetilmesi
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                <strong>WhatsApp (Meta):</strong> Anlık mesajlaşma yoluyla müşteri iletişimi
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                <strong>Vercel:</strong> Web sitesi barındırma ve altyapı hizmetleri
              </li>
            </ul>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              Bu hizmet sağlayıcılar, kendi gizlilik politikaları çerçevesinde veri işlemekte olup, verileriniz yalnızca hizmetin ifası için gerekli olan minimum düzeyde paylaşılmaktadır.
            </p>

            <hr className="border-slate-200 my-8" />

            {/* 11. İletişim */}
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">11. İletişim</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-6">
              Gizlilik politikamız veya kişisel verilerinizin işlenmesiyle ilgili her türlü soru, talep ve başvurularınız için aşağıdaki iletişim kanallarını kullanabilirsiniz:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">Telefon</p>
                    <a href="tel:+905395983273" className="text-sm text-red-600 hover:underline font-medium">+90 539 598 32 73</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">E-posta</p>
                    <a href="mailto:info@yanginegitimiizmir.com" className="text-sm text-red-600 hover:underline font-medium">info@yanginegitimiizmir.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">Adres</p>
                    <p className="text-sm text-slate-600">İzmir, Türkiye</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-slate-500 text-xs text-center mb-0">
              Bu gizlilik politikası {lastUpdated} tarihinde güncellenmiştir. Politikamızda yapılacak değişiklikler bu sayfa üzerinden yayımlanacaktır.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
