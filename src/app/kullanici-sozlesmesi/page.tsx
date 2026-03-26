import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kullanıcı Sözleşmesi | İzmir Yangın Eğitimi',
  description: 'İzmir Yangın Eğitimi kullanıcı sözleşmesi ve hizmet kullanım koşulları.',
  robots: { index: true, follow: true },
};

const lastUpdated = '25 Mart 2026';

export default function KullaniciSozlesmesiPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 md:py-20">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-5">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-slate-200">Kullanıcı Sözleşmesi</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Kullanıcı Sözleşmesi</h1>
          <p className="text-slate-400 mt-3 text-sm">Son güncelleme: {lastUpdated}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose-custom">

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 mt-0">1. Taraflar</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              İşbu Kullanıcı Sözleşmesi (&quot;Sözleşme&quot;), yanginegitimiizmir.com internet sitesini (&quot;Site&quot;) ziyaret eden veya Site üzerinden hizmet talebinde bulunan gerçek veya tüzel kişiler (&quot;Kullanıcı&quot;) ile Site&apos;nin sahibi ve işletmecisi olan İzmir Yangın Eğitimi (&quot;Hizmet Veren&quot;) arasında kabul edilmiş sayılır. Site&apos;yi kullanan her Kullanıcı, bu Sözleşme&apos;de yer alan koşulları hiçbir itiraza mahal vermeden kabul etmiş sayılır.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">2. Hizmet Tanımı</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              Hizmet Veren; kurumsal firmalara (fabrika, ofis, otel, eğitim kurumları, vb.) yönelik yangın eğitimi, yangın tatbikatı, deprem eğitimi ve acil durum arama kurtarma eğitimlerinin organizasyonu, planlanması ve icrası konusunda danışmanlık ve eğitim hizmetleri sunmaktadır. Site, bu hizmetlerin tanıtımını yapmak ve Kullanıcıların teklif taleplerini toplamak amacıyla faaliyet göstermektedir.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">3. Kullanım Koşulları</h2>
            <ul className="space-y-2 text-slate-600 text-[0.938rem] mb-8">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                Kullanıcı, Site üzerinden ilgili formları doldururken verdiği tüm kimlik, iletişim ve iletişim detayları (ad soyad, telefon, ilçe vb.) bilgilerinin doğru ve eksiksiz olduğunu beyan ve taahhüt eder.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                Web sitesi üzerinden alınan teklifler, tarafınıza sağlanan bir ön bilgilendirme niteliği taşır. Hizmet Veren, web sitesi üzerinden talep edilen her hizmeti sağlama zorunluluğu altında değildir.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                Resmi hizmet süreci, taraflar arasında fiziki veya dijital ortamda karşılıklı anlaşılarak imzalanacak asıl hizmet sözleşmesi ile başlar.
              </li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">4. Kullanıcı Yükümlülükleri</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              Kullanıcı, Siteyi yalnızca hukuka ve ahlaka uygun ve meşru amaçlarla kullanabilir. Site altyapısına, sunuculara veya diğer kullanıcıların güvenliğine zarar verecek nitelikte hiçbir donanımsal veya yazılımsal müdahalede bulunamaz. Site üzerinden gönderilen mesajlarda tehdit, hakaret içerikli, yanıltıcı veya genel ahlaka aykırı ibareler kullanılamaz.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">5. Sorumluluğun Sınırlandırılması</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              Sitede yer alan eğitim ve güvenlik bilgilendirmeleri, genel kültür ve bilinçlendirme amaçlıdır. Bu bilgilerin doğrudan acil bir durumda profesyonel bir kurtarma talimatı olarak yorumlanması veya uzman denetimi dışındaki uygulamalarından kaynaklanabilecek maddi/manevi zararlardan Hizmet Veren sorumlu tutulamaz. Hizmet Veren, Site&apos;nin kesintisiz olarak çalışacağını garanti etmez. Planlı bakımlar veya mücbir sebepler dolayısıyla sistemde oluşabilecek erişim kesintilerinden sorumlu değildir.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">6. Fikri Mülkiyet Hakları</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              Site içerisinde yer alan tüm logo, tasarım, metin, grafik, arayüz, görseller ile yazılım kodlarının telif ve her türlü mülkiyet hakları Hizmet Veren’e aittir. Kullanıcılar, Site içeriğini kopyalayamaz, çoğaltamaz, dağıtamaz veya ticari bir amaçla kullanamazlar.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">7. Hizmet Değişiklikleri</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              Hizmet Veren, sunduğu hizmetlerin içeriklerini, eğitim programlarını, fiyatlandırma süreçlerini veya Site&apos;nin operasyonel özelliklerini önceden bildirimde bulunmaksızın dilediği zaman değiştirme, askıya alma veya tamamen durdurma hakkını saklı tutar.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">8. Sözleşme Değişiklikleri</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              Hizmet Veren, hukuki gereksinimler, operasyonel değişiklikler veya mevzuat güncellemeleri doğrultusunda işbu Kullanıcı Sözleşmesi hükümlerinde değişiklik yapma hakkına sahiptir. Yapılan güncellemeler Site’de yayımlandığı an itibarıyla yürürlüğe girer. Kullanıcıların Site&apos;yi kullanmaya devam etmeleri, değiştirilmiş sözleşme hükümlerini kabul ettikleri anlamına gelir.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">9. Uyuşmazlıkların Çözümü</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              İşbu Sözleşme&apos;nin uygulanmasından ve yorumlanmasından doğacak her türlü ihtilafın çözümünde Türkiye Cumhuriyeti kanunları uygulanacak olup, ortaya çıkabilecek her türlü hukuki uyuşmazlık durumunda İzmir Mahkemeleri ve İcra Daireleri yetkilidir.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
