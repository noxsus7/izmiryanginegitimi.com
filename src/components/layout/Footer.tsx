import Link from 'next/link';
import { siteConfig } from '@/data/site-config';
import { services } from '@/data/services';

const priorityDistricts = [
  { name: 'Bornova', slug: 'bornova-yangin-egitimi' },
  { name: 'Karşıyaka', slug: 'karsiyaka-yangin-egitimi' },
  { name: 'Konak', slug: 'konak-yangin-egitimi' },
  { name: 'Gaziemir', slug: 'gaziemir-yangin-egitimi' },
  { name: 'Torbalı', slug: 'torbali-yangin-egitimi' },
  { name: 'Aliağa', slug: 'aliaga-yangin-egitimi' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2c1 3 4 6 4 10a4 4 0 0 1-8 0c0-4 3-7 4-10z" />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="block font-bold text-lg">İzmir Yangın</span>
                <span className="block text-slate-400 text-xs font-medium tracking-wide">EĞİTİM & GÜVENLİK</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              İzmir ve tüm ilçelerinde profesyonel yangın eğitimi, tatbikat, deprem ve acil durum eğitimi hizmetleri sunuyoruz. Güvenliğiniz bizim önceliğimiz.
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2.5">
              <h3 className="text-white font-semibold text-base">Kurumsal</h3>
              <ul className="space-y-2.5">
                <li><Link href="/hakkimizda" className="text-slate-400 hover:text-white text-sm transition-colors">Hakkımızda</Link></li>
                <li><Link href="/iletisim" className="text-slate-400 hover:text-white text-sm transition-colors">İletişim</Link></li>
              </ul>
            </div>
            <div className="mt-6 space-y-2.5">
              <h3 className="text-white font-semibold text-base">Yasal</h3>
              <ul className="space-y-2.5">
                <li><Link href="/kvkk-aydinlatma-metni" className="text-slate-400 hover:text-white text-sm transition-colors">KVKK Aydınlatma Metni</Link></li>
                <li><Link href="/kullanici-sozlesmesi" className="text-slate-400 hover:text-white text-sm transition-colors">Kullanıcı Sözleşmesi</Link></li>
                <li><Link href="/cerez-politikasi" className="text-slate-400 hover:text-white text-sm transition-colors">Çerez Politikası</Link></li>
                <li><Link href="/gizlilik-politikasi" className="text-slate-400 hover:text-white text-sm transition-colors">Gizlilik Politikası</Link></li>
              </ul>
            </div>
          </div>

          {/* Districts */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Hizmet Bölgelerimiz</h3>
            <ul className="space-y-2.5">
              {priorityDistricts.map((district) => (
                <li key={district.slug}>
                  <Link href={`/${district.slug}`} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {district.name} Yangın Eğitimi
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/#ilceler" className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 text-sm mt-4 transition-colors">
              Tüm ilçeleri görüntüle
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* CTA Column */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Hemen Teklif Alın</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              İşletmeniz için yangın eğitimi ve tatbikat teklifi almak ister misiniz? En geç 30 dakika içinde size dönüş yapıyoruz.
            </p>
            <Link href="/#teklif-formu" className="btn-primary w-full text-center text-sm">
              Ücretsiz Teklif Alın
            </Link>
            <div className="mt-4 flex items-center gap-2 text-slate-400 text-xs">
              <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span>30 dakika içinde dönüş garantisi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {siteConfig.companyName}. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-500 text-sm">
            <Link href="/kvkk-aydinlatma-metni" className="hover:text-white transition-colors">KVKK</Link>
            <Link href="/kullanici-sozlesmesi" className="hover:text-white transition-colors">Kullanıcı Sözleşmesi</Link>
            <Link href="/cerez-politikasi" className="hover:text-white transition-colors">Çerez Politikası</Link>
            <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
