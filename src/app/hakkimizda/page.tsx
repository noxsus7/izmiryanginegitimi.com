import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LeadFormSection from '@/components/sections/LeadFormSection';
import CTABand from '@/components/sections/CTABand';
import JsonLd from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'Hakkımızda | İzmir Yangın Eğitimi',
  description:
    'İzmir\'de profesyonel yangın eğitimi ve tatbikat hizmetleri sunan güvenilir çözüm ortağınız. 6331 Sayılı Kanun\'a uygun, sertifikalı eğitmenler ile saha deneyimli uygulamalı eğitim.',
  openGraph: {
    title: 'Hakkımızda | İzmir Yangın Eğitimi',
    description:
      'İzmir\'de profesyonel yangın eğitimi ve tatbikat hizmetleri sunan güvenilir çözüm ortağınız.',
    url: 'https://yanginegitimiizmir.com/hakkimizda',
    type: 'website',
    locale: 'tr_TR',
  },
  alternates: {
    canonical: 'https://yanginegitimiizmir.com/hakkimizda',
  },
};

/* ─── Neden Biz? Cards ─── */
const nedenBiz = [
  {
    title: 'Saha Deneyimli Eğitmenler',
    description: 'Tüm eğitmenlerimiz gerçek saha deneyimine sahip, sertifikalı uzmanlardır. Teorik değil, sahada kanıtlanmış bilgiyle eğitim veriyoruz.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: '6331 Kanun Uyumlu Belgelendirme',
    description: 'Eğitim sonrası tüm belgeler aynı gün teslim edilir. Denetimlerde geçerli, mevzuata tam uyumlu resmi belgeler sunuyoruz.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'İşletmenize Geliyoruz',
    description: 'Eğitimi sizin ortamınızda, sizin programınıza uygun şekilde veriyoruz. Ek mekân masrafı yok, zaman kaybı yok.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'İşletmenize Özel Senaryo',
    description: 'Her eğitim, işletmenizin risk profiline göre kurgulanan gerçek senaryolarla zenginleştirilir. Standart değil, size özel çözüm.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c1 3 4 6 4 10a4 4 0 0 1-8 0c0-4 3-7 4-10z" /><path d="M12 22v-4" />
      </svg>
    ),
  },
  {
    title: '30 Dakikada Dönüş Garantisi',
    description: 'Teklif talebinize en geç 30 dakika içinde dönüş yapıyoruz. Hızlı, profesyonel ve güvenilir iletişim.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'İzmir Geneli 30 İlçe',
    description: 'Bornova\'dan Aliağa\'ya, Konak\'tan Torbalı\'ya — İzmir\'in tüm ilçelerine aynı kalite standartlarında hizmet veriyoruz.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Hakkımızda', url: '/hakkimizda' },
        ])}
      />

      {/* ───── HERO ───── */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hakkimizda-saha-egitimi.png"
            alt="İzmir yangın eğitimi uygulamalı saha çalışması"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/60" />
        </div>

        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />

        <div className="container-custom relative z-10">
          <div className="py-24 md:py-28 lg:py-36 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm text-slate-200 border border-white/10">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              Kurumsal Çözüm Ortağınız
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-5">
              İzmir Yangın Eğitiminde{' '}
              <span className="text-red-500">Güvenilir Çözüm Ortağınız</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
              Profesyonel kadromuz ve sahada kanıtlanmış deneyimimizle, işletmenizin yangın güvenliği altyapısını en üst seviyeye taşıyoruz.
            </p>

            <Link href="/iletisim#teklif-formu" className="btn-primary text-base px-8 py-4 shadow-lg shadow-red-600/25">
              Ücretsiz Teklif Alın — 30 dk Dönüş
            </Link>
          </div>
        </div>
      </section>

      {/* ───── BİZ KİMİZ? ───── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Biz Kimiz?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">
              İzmir&apos;in Güvenlik Eğitimi Ortağı
            </h2>

            <div className="space-y-4 text-slate-600 text-[0.938rem] leading-relaxed">
              <p>
                İzmir Yangın Eğitimi olarak, işletmelerin yangın güvenliği altyapısını güçlendirmek ve çalışanlarını olası acil durumlara hazırlamak amacıyla faaliyet gösteriyoruz. 6331 Sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında, yasal zorunlulukları karşılayan ve ötesine geçen eğitim programları sunuyoruz.
              </p>
              <p>
                Ekibimiz, yılların saha deneyimine sahip sertifikalı yangın güvenliği uzmanlarından oluşmaktadır. Teorik bilginin ötesinde, gerçek iş ortamlarında uygulanan pratik eğitimlerle çalışanlarınızın acil durum müdahale kapasitesini en üst seviyeye çıkarıyoruz. Fabrikalardan otellere, okullardan ofis binalarına kadar her sektöre özel eğitim planları hazırlıyoruz.
              </p>
              <p>
                İzmir&apos;in 30 ilçesinde faaliyet gösteren ekibimiz, işletmenize gelerek yerinde eğitim ve tatbikat hizmeti sunmaktadır. Eğitim sonrası tüm yasal belgeler, tatbikat raporları ve katılım sertifikaları aynı gün teslim edilir — denetimlere her zaman hazır olun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── MİSYON & VİZYON ───── */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Değerlerimiz</p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Misyon & Vizyon</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Misyon */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center text-white mb-5">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Misyonumuz</h3>
              <p className="text-slate-600 text-[0.938rem] leading-relaxed">
                İşletmelerin yangın güvenliği farkındalığını en üst seviyeye çıkarmak, çalışanları olası acil durumlara karşı hazırlıklı kılmak ve yasal yükümlülüklerin eksiksiz yerine getirilmesini sağlamak. Her eğitimi, hayat kurtarma potansiyeli taşıyan bir yatırım olarak görüyoruz.
              </p>
            </div>

            {/* Vizyon */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white mb-5">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Vizyonumuz</h3>
              <p className="text-slate-600 text-[0.938rem] leading-relaxed">
                Ege Bölgesi&apos;nde yangın güvenliği eğitiminde referans kuruluş olmak. Sürekli gelişen eğitim metodolojimiz, teknoloji destekli tatbikat senaryolarımız ve müşteri odaklı yaklaşımımızla sektörün standartlarını belirlemek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── NEDEN BİZ? ───── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Farkımız</p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Ucuz eğitim değil, gerçekten işe yarayan ve denetimlerde sizi koruyan eğitim veriyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {nedenBiz.map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-slate-300 transition-all duration-200 group">
                <div className="w-11 h-11 bg-navy-900 rounded-lg flex items-center justify-center text-white mb-4 group-hover:bg-red-600 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── GÖRSEL + TEXT ───── */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            {/* Left: Image */}
            <div className="relative rounded-2xl overflow-hidden min-h-[350px] lg:min-h-[450px]">
              <Image
                src="/images/hakkimizda-egitmen.png"
                alt="İzmir yangın eğitimi — eğitmen uygulamalı söndürücü gösterimi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-semibold text-navy-900">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  Uygulamalı Saha Eğitimi
                </span>
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Eğitim Yaklaşımımız</p>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-5">
                Teori Değil, Sahada Kanıtlanmış Eğitim
              </h2>
              <div className="space-y-4 text-slate-600 text-[0.938rem] leading-relaxed">
                <p>
                  Eğitimlerimiz, sınıf ortamında sunumla sınırlı kalmaz. İşletmenizin sahada gerçek risk analizi yapılır, çalışanlarınız yangın söndürücü kullanımını birebir pratiğe döker ve tahliye senaryoları gerçek koşullarda tatbikat edilir.
                </p>
                <p>
                  Her işletmenin risk profili farklıdır. Fabrikadaki kimyasal depolama riski ile oteldeki misafir tahliye senaryosu tamamen farklı yaklaşımlar gerektirir. Biz eğitimi sizin sektörünüze, sizin riskinize göre planlıyoruz.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {['Katılım Belgesi', 'Tatbikat Raporu', 'Yerinde Eğitim'].map((label) => (
                  <span key={label} className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 rounded-lg px-4 py-2 text-xs font-medium text-navy-900">
                    <svg className="w-3.5 h-3.5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/iletisim#teklif-formu" className="btn-primary text-sm px-6 py-3">
                  Ücretsiz Teklif Alın
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <CTABand
        title="İşletmeniz İçin Yangın Eğitimi Planlayalım"
        subtitle="Formu doldurun, uzman ekibimiz en geç 30 dakika içinde sizinle iletişime geçsin."
        buttonText="Ücretsiz Teklif Alın"
        buttonHref="/iletisim#teklif-formu"
      />
    </>
  );
}
