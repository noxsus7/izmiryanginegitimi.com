import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni | İzmir Yangın Eğitimi',
  description: 'İzmir Yangın Eğitimi 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) aydınlatma metni.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://yanginegitimiizmir.com/kvkk-aydinlatma-metni',
  },
};

const lastUpdated = '25 Mart 2026';

export default function KvkkPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 md:py-20">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-5">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-slate-200">KVKK Aydınlatma Metni</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white">KVKK Aydınlatma Metni</h1>
          <p className="text-slate-400 mt-3 text-sm">Son güncelleme: {lastUpdated}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose-custom">

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 mt-0">1. Veri Sorumlusu</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, <strong>yanginegitimiizmir.com</strong> (&quot;İzmir Yangın Eğitimi&quot; veya &quot;Şirket&quot;) olarak, veri sorumlusu sıfatıyla kişisel verilerinizi aşağıda açıklanan amaçlar kapsamında ve mevzuata uygun olarak işlemekteyiz. Şirketimiz, kişisel verilerinizin güvenliğine en üst düzeyde önem vermekte ve bu kapsamda gerekli teknik ve idari tedbirleri almaktadır.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">2. İşlenen Kişisel Veriler</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
              Tarafımızca, sunduğumuz hizmetlerin niteliğine göre aşağıdaki kişisel verileriniz işlenmektedir:
            </p>
            <ul className="space-y-2 text-slate-600 text-[0.938rem] mb-8">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                <strong>Kimlik Bilgileri:</strong> Adınız ve soyadınız.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                <strong>İletişim Bilgileri:</strong> Telefon numaranız ve ilçe bilginiz.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                <strong>Talep ve İşlem Bilgileri:</strong> Tercih ettiğiniz hizmet türü (yangın eğitimi, tatbikat, deprem eğitimi vb.) ve iletişim formları ile WhatsApp üzerinden ilettiğiniz mesaj içerikleri.
              </li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">3. Kişisel Verilerin İşlenme Amaçları</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
              Toplanan kişisel verileriniz, KVKK&apos;nın 5. ve 6. maddelerinde belirtilen işleme şartları dâhilinde aşağıdaki amaçlarla işlenmektedir:
            </p>
            <ul className="space-y-2 text-slate-600 text-[0.938rem] mb-8">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Taleplerinize uygun eğitim ve acil durum hizmeti tekliflerinin hazırlanıp tarafınıza sunulması,
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Talep ettiğiniz hizmetlerin planlanması, organizasyonu ve sözleşme süreçlerinin yürütülmesi,
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                İletişim formları, telefon veya WhatsApp kanalıyla gelen sorularınızın yanıtlanması ve yönlendirmelerin yapılması,
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Müşteri memnuniyetinin ölçülmesi ve sunduğumuz hizmet kalitesinin artırılması,
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Yasal yükümlülüklerimizin yerine getirilmesi.
              </li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
              Kişisel verileriniz, tamamen veya kısmen otomatik yollarla (web sitemizdeki teklif formu, WhatsApp iletişim kanalı) veya fiziksel/sözlü yöntemlerle (telefon aramaları) toplanmaktadır. İşlemeye dayanak olan hukuki sebepler şunlardır:
            </p>
            <ul className="space-y-2 text-slate-600 text-[0.938rem] mb-8">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması (Teklif sunumu ve hizmet ifası),
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması,
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması.
              </li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">5. Kişisel Verilerin Aktarılması</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              Toplanan kişisel verileriniz; kural olarak üçüncü kişilerle paylaşılmamaktadır. Ancak KVKK&apos;nın 8. ve 9. maddelerinde belirtilen şartlara uygun olarak, yalnızca hizmetin ifası için zorunlu olan hallerde ve sınırlı olarak iş ortaklarımızla (örn. e-posta iletişimini sağlayan altyapı servisleri) veya kanunen yetkili kamu kurum ve kuruluşları ile yasal zorunluluklar kapsamında paylaşılabilecektir. Verileriniz hiçbir şekilde ticari amaçla satılmaz veya kiralanmaz.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">6. Veri Sahibi Olarak Haklarınız (KVKK Madde 11)</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
              KVKK&apos;nın 11. maddesi uyarınca veri sahipleri olarak aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="space-y-2 text-slate-600 text-[0.938rem] mb-8">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Kişisel verilerinizin işlenip işlenmediğini öğrenme,
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Kişisel verilerinizin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme,
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Yapılan düzeltme, silme ve yok edilme işlemlerinin, kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme,
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.
              </li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">7. Başvuru Yöntemi</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              Yukarıda belirtilen haklarınızı kullanmakla ilgili taleplerinizi; +90 539 598 32 73 numaralı telefon hattımızdan arayarak veya <strong>info@yanginegitimiizmir.com</strong> e-posta adresine yazılı olarak iletebilirsiniz. Talepleriniz, niteliğine göre en kısa sürede ve en geç 30 (otuz) gün içerisinde ücretsiz olarak sonuçlandırılacaktır.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
