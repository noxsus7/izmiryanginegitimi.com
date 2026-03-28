import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Çerez Politikası | İzmir Yangın Eğitimi',
  description: 'İzmir Yangın Eğitimi web sitesi çerez politikası ve kullanımı hakkında bilgilendirme.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://yanginegitimiizmir.com/cerez-politikasi',
  },
};

const lastUpdated = '25 Mart 2026';

export default function CerezPolitikasiPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 md:py-20">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-5">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-slate-200">Çerez Politikası</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Çerez Politikası</h1>
          <p className="text-slate-400 mt-3 text-sm">Son güncelleme: {lastUpdated}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose-custom">

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 mt-0">1. Çerez Nedir?</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              Çerezler (Cookies), web sitemizi ziyaret ettiğinizde tarayıcınız aracılığıyla bilgisayarınıza veya mobil cihazınıza kaydedilen ve genellikle harf ve rakamlardan oluşan küçük metin dosyalarıdır. Çerezler, sitenin düzgün çalışması, tercihlerin hatırlanması, kullanım kolaylığının sağlanması ve web sitesinin genel performansının artırılması amacıyla kullanılmaktadır.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">2. Hangi Tür Çerezler Kullanılır?</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
              <strong>yanginegitimiizmir.com</strong> web sitemizde, sistemin çalışması ve iyileştirilmesi için aşağıda belirtilen türde çerezler kullanılabilmektedir:
            </p>
            <ul className="space-y-4 text-slate-600 text-[0.938rem] mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <strong>Zorunlu Çerezler:</strong> Sitenin temel işlevlerini yerine getirebilmesi, güvenliğin sağlanması ve sayfalar arası dolaşımın mümkün olması için kullanılması zorunlu olan çerezlerdir. Bu çerezler olmadan web sitesi düzgün bir şekilde hizmet veremez. Kişisel veri toplamazlar.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <strong>Performans Çerezleri:</strong> Ziyaretçilerin web sitemizi nasıl kullandığını, hangi sayfalarda daha çok vakit geçirdiğini ölçümleyerek; karşınıza çıkan hata mesajlarını tespit edebilmemizi ve sitemizin yapısını daha hızlı ve akıcı hale getirmemizi sağlayan teknik çerezlerdir.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <strong>Analitik Çerezler:</strong> Sitenin ziyaretçi trafiğini analiz etmek için kullanılan, genel davranış eğilimlerini gösteren ancak ziyaretçilerin kimliğini ifşa edecek kişisel nitelikte veriler saklamayan çerezlerdir. (Örn. hangi ilçelerden daha fazla ziyaret aldığımızı anlamak vb.)
                </div>
              </li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">3. Çerezlerin Kullanım Amaçları</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
              Çerez verileri şirketimiz tarafından aşağıdaki amaçlar doğrultusunda işlenmektedir:
            </p>
            <ul className="space-y-2 text-slate-600 text-[0.938rem] mb-8">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Web sitemizin ana fonksiyonlarının eksiksiz ve güvenli bir şekilde sunulması (Kullanıcı deneyimi sağlama).
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Ziyaretçilerin site içerisindeki dolaşım alışkanlıklarını analiz ederek site mimarisini ve arayüzü kullanıcı dostu hale getirmek (Site performansı ve analiz).
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mt-2 flex-shrink-0" />
                Çeşitli cihaz ekranlarında (mobil, tablet, masaüstü) web sitemizin en uygun formatta yüklenmesini sağlamak.
              </li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">4. Çerezlerin Yönetimi</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              Web sitemizi kullanmaya başladığınızda çerezlerin kullanımını kabul etmiş sayılırsınız. Ancak, dilediğiniz zaman internet tarayıcınızın ayarlar menüsünden çerez tercihlerinizi yönetebilirsiniz. Çerezleri engelleyebilir, tarayıcınızdan tamamen silebilir veya yeni bir çerez kaydedildiğinde uyarılmayı seçebilirsiniz. Çerezlerin tamamen devre dışı bırakılması durumunda web sitemizin bazı form özelliklerinin veya tasarım unsurlarının sağlıklı çalışmayabileceğini lütfen unutmayınız.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">5. Üçüncü Taraf Çerezler</h2>
            <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-8">
              Sitemizin trafiğini analiz etmek ve hizmetlerimizin ölçümlemesini yapabilmek amacıyla güvenilir üçüncü taraf sağlayıcıların (örneğin trafik ölçüm sistemleri veya CDN ağları) analitik ve performans odaklı çerezleri de cihazınızda misafir edilebilir. Bu çerezler tamamen genel trafik dökümleri sağlamak için çalışmakta olup, bu çerezlerle şahsi kimlik verileriniz eşleştirilmemektedir. İletişim, hak talebi ve sorularınız için <strong>info@yanginegitimiizmir.com</strong> adresinden bize dilediğiniz zaman ulaşabilirsiniz.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
