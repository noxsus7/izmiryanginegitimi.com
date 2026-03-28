import type { Metadata } from 'next';
import { siteConfig } from '@/data/site-config';
import LeadFormSection from '@/components/sections/LeadFormSection';
import JsonLd from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'İletişim | İzmir Yangın Eğitimi',
  description:
    'İzmir yangın eğitimi ve tatbikat hizmetleri için bizimle iletişime geçin. Ücretsiz teklif alın, sorularınızı sorun. 30 dakika içinde dönüş garantisi.',
  openGraph: {
    title: 'İletişim | İzmir Yangın Eğitimi',
    description:
      'İzmir yangın eğitimi ve tatbikat hizmetleri için bizimle iletişime geçin. Ücretsiz teklif alın.',
    url: 'https://yanginegitimiizmir.com/iletisim',
    type: 'website',
    locale: 'tr_TR',
  },
  alternates: {
    canonical: 'https://yanginegitimiizmir.com/iletisim',
  },
};

export default function IletisimPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'İletişim', url: '/iletisim' },
        ])}
      />

      {/* ───── HERO ───── */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />

        <div className="container-custom relative z-10">
          <div className="py-20 md:py-24 lg:py-28 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm text-slate-200 border border-white/10">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              7/24 İletişim
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
              İletişime{' '}
              <span className="text-red-500">Geçin</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
              Yangın eğitimi, tatbikat veya teklif talepleriniz için bize ulaşın. En geç 30 dakika içinde size dönüş yapıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* ───── CONTACT INFO ───── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {/* Phone */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-7 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:bg-red-600 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-1">Telefon</h3>
              <p className="text-red-600 font-semibold text-lg">{siteConfig.phone}</p>
              <p className="text-slate-400 text-xs mt-2">Mesai saatlerinde ulaşabilirsiniz</p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-7 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:bg-red-600 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-1">E-posta</h3>
              <p className="text-red-600 font-semibold text-sm">{siteConfig.email}</p>
              <p className="text-slate-400 text-xs mt-2">Detaylı talepler için yazabilirsiniz</p>
            </a>

            {/* Location */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:bg-red-600 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-1">Hizmet Bölgesi</h3>
              <p className="text-red-600 font-semibold text-sm">İzmir — Tüm İlçeler</p>
              <p className="text-slate-400 text-xs mt-2">30 ilçeye yerinde eğitim hizmeti</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FORM (reused from homepage) ───── */}
      <LeadFormSection />

      {/* ───── TRUST STRIP ───── */}
      <section className="bg-navy-900 py-12">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            {[
              { text: '30 dk dönüş garantisi', icon: '⚡' },
              { text: 'Ücretsiz teklif', icon: '✓' },
              { text: 'Taahhüt yok', icon: '✓' },
              { text: 'İzmir geneli hizmet', icon: '📍' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-slate-300">
                <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
