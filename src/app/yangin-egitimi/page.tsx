import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getWhatsAppLink } from '@/lib/utils';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schemas';
import CTABand from '@/components/sections/CTABand';
import FAQSection from '@/components/sections/FAQSection';
import JsonLd from '@/components/seo/JsonLd';

/* ─── SEO Metadata ─── */
export const metadata: Metadata = {
  title: 'Yangın Eğitimi İzmir | Yerinde Uygulamalı Yangın Güvenliği Eğitimi',
  description:
    'İzmir\'de işletmelere özel profesyonel yangın eğitimi. Yerinde eğitim, uygulamalı tatbikat, katılım belgesi ve tatbikat raporu dahil. 6331 Sayılı Kanun uyumlu. Hemen teklif alın.',
  keywords: [
    'yangın eğitimi',
    'yangın eğitimi izmir',
    'yangın eğitimi zorunlu mu',
    'yangın eğitimi fiyatları',
    'işletmeler için yangın eğitimi',
    'yangın güvenliği eğitimi',
    'yangın söndürücü eğitimi',
    'iş güvenliği yangın eğitimi',
  ],
  openGraph: {
    title: 'Yangın Eğitimi İzmir | Yerinde Uygulamalı Eğitim',
    description:
      'İzmir\'de işletmelere özel yangın eğitimi. Söndürücü kullanımı, tahliye prosedürleri, katılım belgesi dahil.',
    url: 'https://yanginegitimiizmir.com/yangin-egitimi',
    type: 'website',
  },
  alternates: {
    canonical: 'https://yanginegitimiizmir.com/yangin-egitimi',
  },
};

/* ─── Page-specific FAQ ─── */
const serviceFAQ = [
  {
    question: 'Yangın eğitimi zorunlu mu?',
    answer:
      '6331 Sayılı İş Sağlığı ve Güvenliği Kanunu gereği, tüm işverenler çalışanlarına yangın güvenliği eğitimi vermekle yükümlüdür. Tehlike sınıfına göre belirlenen periyotlarla eğitimlerin yenilenmesi zorunludur. Eğitim verilmemesi halinde işveren hakkında idari para cezası uygulanır.',
  },
  {
    question: 'Yangın eğitimi ne kadar sürer?',
    answer:
      'Standart bir yangın eğitimi programı yaklaşık 2-4 saat sürmektedir. Teorik eğitim ve uygulamalı tatbikat birlikte gerçekleştirilir. Çalışan sayısına ve işletme büyüklüğüne göre süre ayarlanabilir.',
  },
  {
    question: 'Yangın eğitimi fiyatları nasıl belirleniyor?',
    answer:
      'Fiyatlandırma; çalışan sayısı, eğitim kapsamı (teori + uygulama), lokasyon ve işletme türüne göre yapılır. Her işletmeye özel teklif hazırlıyoruz. Teklif formunu doldurarak 30 dakika içinde fiyat bilgisi alabilirsiniz.',
  },
  {
    question: 'Eğitim sonrası hangi belgeler veriliyor?',
    answer:
      'Eğitim sonrasında her katılımcıya kişisel katılım belgesi, işletmeye tatbikat raporu ve gerekli durumlarda eğitmenlik sertifikası düzenliyoruz. Tüm belgeler eğitim günü dijital ve basılı olarak teslim edilir.',
  },
  {
    question: 'Yangın eğitiminde neler öğretiliyor?',
    answer:
      'Eğitim programı kapsamında: yangın türleri ve nedenleri, yangın söndürücü kullanımı, tahliye prosedürleri, alarm ve ihbar yöntemleri, ilk müdahale teknikleri ve panik yönetimi konuları işlenmektedir. Tüm konular uygulamalı olarak pekiştirilir.',
  },
];

/* ─── Process steps with icons ─── */
const processSteps = [
  {
    step: '01',
    title: 'İhtiyaç Analizi',
    description: 'İşletmenizin sektörü, çalışan sayısı, risk profili ve mevcut güvenlik durumu değerlendirilir.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Eğitim Planlama',
    description: 'İşletmenize özel eğitim programı hazırlanır. İçerik, süre ve uygulama detayları belirlenir.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 13H8" /><path d="M16 17H8" /><path d="M16 13h-2" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Yerinde Eğitim & Tatbikat',
    description: 'Sertifikalı eğitmenlerimiz işletmenize gelerek teorik eğitim ve uygulamalı tatbikat gerçekleştirir.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c1 3 4 6 4 10a4 4 0 0 1-8 0c0-4 3-7 4-10z" /><path d="M12 22v-4" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Belgelendirme & Raporlama',
    description: 'Katılım belgeleri, tatbikat raporu ve sertifikalar eğitim günü eksiksiz teslim edilir.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

/* ─── Sectors with icons ─── */
const targetSectors = [
  {
    name: 'Fabrika & Üretim Tesisleri',
    detail: 'Kimyasal maddeler, makine alanları, depo bölgeleri',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
      </svg>
    ),
  },
  {
    name: 'Otel & Konaklama Tesisleri',
    detail: 'Misafir tahliyesi, mutfak yangını, gece senaryoları',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" /><path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" /><path d="M8 7h.01" /><path d="M16 7h.01" /><path d="M12 7h.01" /><path d="M12 11h.01" /><path d="M16 11h.01" /><path d="M8 11h.01" />
      </svg>
    ),
  },
  {
    name: 'Ofis & İş Merkezleri',
    detail: 'Kat tahliyesi, yangın merdiveni kullanımı, alarm prosedürleri',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" />
      </svg>
    ),
  },
  {
    name: 'Okul & Eğitim Kurumları',
    detail: 'Öğrenci güvenliği, panik yönetimi, sınıf tahliyesi',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 6 3 6 3s3 0 6-3v-5" />
      </svg>
    ),
  },
  {
    name: 'Depo & Lojistik Merkezleri',
    detail: 'Raf güvenliği, forklift alanları, geniş alan tahliyesi',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" /><path d="M6 18h12" /><path d="M6 14h12" />
      </svg>
    ),
  },
  {
    name: 'AVM, Restoran & Perakende',
    detail: 'Kalabalık tahliyesi, mutfak güvenliği, asansör prosedürleri',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
];

/* ─── Benefits with titles ─── */
const benefits = [
  {
    title: 'Doğru Müdahale Kapasitesi',
    text: 'Çalışanlarınız yangın anında paniğe kapılmadan doğru müdahale eder',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
  },
  {
    title: 'Denetim Koruması',
    text: '6331 Sayılı Kanun\'a uygun belgelendirme ile denetim cezalarından korunursunuz',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Pratik Deneyim',
    text: 'Gerçek senaryolu tatbikatlarla teorik bilgi pratiğe dönüşür',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c1 3 4 6 4 10a4 4 0 0 1-8 0c0-4 3-7 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Risk Analizi',
    text: 'İşletmenize özel risk analizi ile zayıf noktalar belirlenir ve güçlendirilir',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: 'Eksiksiz Belgelendirme',
    text: 'Katılım belgesi ve tatbikat raporu ile yasal yükümlülükler eksiksiz karşılanır',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838.838-2.872a2 2 0 0 1 .506-.855z" />
      </svg>
    ),
  },
  {
    title: 'Kapsamlı Beceri Kazanımı',
    text: 'Yangın söndürücü kullanımı, tahliye prosedürleri ve ilk müdahale becerileri kazandırılır',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Yerinde Hizmet',
    text: 'Tüm eğitimler yerinde verilir — ek mekân masrafı veya zaman kaybı yoktur',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Sürekli Gelişim',
    text: 'Eğitim sonrası iyileştirme önerileri ile sürekli gelişim sağlanır',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

/* ════════════════════════════════════════════
   YANGIN EĞİTİMİ SERVICE PAGE
   ════════════════════════════════════════════ */
export default function YanginEgitimiPage() {
  return (
    <>
      <JsonLd
        data={generateServiceSchema(
          'Yangın Eğitimi',
          '/yangin-egitimi',
          'İzmir\'de işletmelere özel profesyonel yangın eğitimi. Yerinde eğitim, uygulamalı tatbikat, katılım belgesi ve tatbikat raporu dahil.'
        )}
      />
      <JsonLd data={generateFAQSchema(serviceFAQ)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Yangın Eğitimi', url: '/yangin-egitimi' },
        ])}
      />

      {/* ───── HERO ───── */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/service-yangin-egitimi.png"
            alt="İzmir yangın eğitimi — söndürücü kullanımı uygulaması"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/60" />
        </div>

        <div className="container-custom relative z-10 py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <span className="text-slate-200">Yangın Eğitimi</span>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-5">
              İşletmenize Özel{' '}
              <span className="text-red-500">Yangın Güvenliği Eğitimi</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Personelinizin yangın anında doğru müdahale edebilmesini sağlayan, uygulamalı ve
              6331 Sayılı Kanun&apos;a uygun profesyonel yangın eğitimi. Katılım belgesi ve tatbikat raporu dahil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/#teklif-formu" className="btn-primary text-base px-8 py-4 shadow-lg shadow-red-600/25">
                Ücretsiz Teklif Alın
              </Link>
              <a
                href={getWhatsAppLink('Merhaba, yangın eğitimi hakkında bilgi almak istiyorum.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp ile Bilgi Alın
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Katılım Belgesi', 'Tatbikat Raporu', 'Yerinde Eğitim', '6331 Uyumlu'].map((label) => (
                <div key={label} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg px-4 py-2 text-sm text-white">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── WHAT IS THIS SERVICE (with image) ───── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Yangın Eğitimi Nedir?</h2>
              <div className="prose-custom">
                <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
                  Yangın eğitimi, işletmelerdeki çalışanların yangın tehlikelerine karşı bilinçlendirilmesini, yangın çıkması halinde doğru müdahale yöntemlerini öğrenmesini ve tahliye prosedürlerini uygulamalı olarak kavramasını sağlayan profesyonel eğitim programıdır.
                </p>
                <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
                  İzmir yangın eğitimi hizmetimiz kapsamında, uzman eğitmenlerimiz işletmenize gelerek <strong>yerinde eğitim</strong> vermektedir. Eğitim programı; yangın türleri ve nedenleri, <strong>yangın söndürücü kullanımı</strong>, tahliye prosedürleri, alarm ve ihbar yöntemleri, ilk müdahale teknikleri gibi kritik konuları kapsamaktadır.
                </p>
                <p className="text-slate-600 text-[0.938rem] leading-relaxed">
                  Her eğitim teorik sunum ve <strong>uygulamalı tatbikat</strong> olmak üzere iki aşamadan oluşur. Çalışanlarınız sadece bilgi edinmekle kalmaz, öğrendiklerini sahada uygulayarak pekiştirir. Eğitim sonrası katılım belgesi ve tatbikat raporu teslim edilir.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96">
              <Image
                src="/images/yangin-egitimi-sinif.png"
                alt="Yangın güvenliği eğitimi — sınıf ortamında teorik sunum"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-semibold text-navy-900">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Teorik Eğitim
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── WHY IT MATTERS (with image) ───── */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
            {/* Image side */}
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-full lg:min-h-[400px] order-2 lg:order-1">
              <Image
                src="/images/yangin-egitimi-tatbikat.png"
                alt="Yangın tatbikatı — açık alanda söndürücü kullanımı uygulaması"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-semibold text-navy-900">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  Uygulamalı Tatbikat
                </span>
              </div>
            </div>

            {/* Content side */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Yangın Eğitimi Neden Önemli?</h2>

              <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-navy-900 font-bold text-base mb-2">Yasal Zorunluluk — 6331 Sayılı Kanun</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      6331 Sayılı İş Sağlığı ve Güvenliği Kanunu gereği, tüm işverenler çalışanlarına yangın güvenliği eğitimi vermekle yükümlüdür. Eğitim verilmemesi veya belgelerinin eksik olması halinde <strong>idari para cezası</strong> ve <strong>iş durdurma</strong> yaptırımları uygulanır.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-slate-600 text-[0.938rem] leading-relaxed">
                  Türkiye&apos;de her yıl binlerce işyeri yangını meydana gelmektedir. Yangın eğitimi almış personel, yangın çıkış anında <strong>paniğe kapılmadan</strong> doğru müdahaleyi yapabilir.
                </p>
                <p className="text-slate-600 text-[0.938rem] leading-relaxed">
                  Özellikle fabrika, otel, AVM, depo gibi yüksek riskli işletmelerde yangın eğitimi hayati önem taşır. İzmir&apos;de faaliyet gösteren işletmeler için düzenli yangın eğitimi ve <Link href="/yangin-tatbikati" className="text-red-600 font-semibold hover:underline">yangın tatbikatı</Link> hem yasal uyumluluk hem de çalışan güvenliği açısından vazgeçilmezdir.
                </p>
                <p className="text-[0.938rem] leading-relaxed font-semibold text-navy-900">
                  Denetim öncesi hazırlıksız yakalanmayın. Geç kalmadan eğitim planlayın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── WHO IS IT FOR (with icons) ───── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Kimler İçin Uygun?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Her sektörün yangın riski farklıdır. İşletmenizin ihtiyacına özel program hazırlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {targetSectors.map((sector) => (
              <div key={sector.name} className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-slate-300 transition-all duration-200 group">
                <div className="w-12 h-12 bg-navy-900/5 rounded-xl flex items-center justify-center text-navy-900 mb-4 group-hover:bg-navy-900 group-hover:text-white transition-colors">
                  {sector.icon}
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">{sector.name}</h3>
                <p className="text-slate-500 text-sm">{sector.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── HOW WE DELIVER (with icons + visual) ───── */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Eğitim Sürecimiz</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Baştan sona planlı, profesyonel ve sonuç odaklı bir eğitim süreci yürütüyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            {/* Steps */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {processSteps.map((item) => (
                <div key={item.step} className="bg-white border border-slate-200 rounded-xl p-7 h-full group hover:shadow-md hover:border-slate-300 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-2xl font-extrabold text-red-600/15">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Side visual */}
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden h-64 lg:h-full lg:min-h-[420px]">
              <Image
                src="/images/hero-training.png"
                alt="Yangın eğitimi sahada uygulama"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 space-y-2">
                <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-semibold text-navy-900">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Profesyonel Uygulama
                </span>
                <p className="text-white text-sm font-medium">
                  Eğitmenlerimiz sahada, sizin ortamınızda eğitim verir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── WHAT YOU GET ───── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Eğitim Sonrası Ne Alırsınız?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto bg-navy-900 rounded-xl flex items-center justify-center text-white mb-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="m9 15 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">Katılım Belgesi</h3>
                <p className="text-slate-600 text-sm">Her katılımcıya kişisel katılım belgesi düzenlenir.</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto bg-navy-900 rounded-xl flex items-center justify-center text-white mb-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838.838-2.872a2 2 0 0 1 .506-.855z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">Tatbikat Raporu</h3>
                <p className="text-slate-600 text-sm">İşletmenize özel detaylı tatbikat ve değerlendirme raporu.</p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto bg-navy-900 rounded-xl flex items-center justify-center text-white mb-4">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">Uygulama Sertifikası</h3>
                <p className="text-slate-600 text-sm">Yangın söndürücü kullanım yeterliliği sertifikası.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── BENEFITS (premium redesign) ───── */}
      <section className="section-padding bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">Somut Faydalar</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Yangın Eğitiminin İşletmenize Katkıları</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Eğitim sadece yasal zorunluluk değil — iş sürekliliği, çalışan güvenliği ve kurumsal itibar için kritik bir yatırımdır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-navy-800/60 border border-navy-700/40 rounded-xl px-6 py-5 flex items-start gap-4 hover:bg-navy-800/90 hover:border-navy-600/50 transition-all duration-200 group">
                <div className="w-10 h-10 bg-red-600/15 rounded-lg flex items-center justify-center text-red-400 flex-shrink-0 group-hover:bg-red-600/25 transition-colors">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">{benefit.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <FAQSection
        title="Yangın Eğitimi Hakkında Sık Sorulan Sorular"
        faqs={serviceFAQ}
        className="bg-white"
      />

      {/* ───── INTERNAL LINKS ───── */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="container-custom py-10">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-navy-900 mb-4">İlgili Hizmetlerimiz</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link href="/yangin-tatbikati" className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-navy-900 hover:border-red-600/30 hover:shadow-sm transition-all">
                <svg className="w-4 h-4 text-red-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                Yangın Tatbikatı
              </Link>
              <Link href="/deprem-egitimi" className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-navy-900 hover:border-red-600/30 hover:shadow-sm transition-all">
                <svg className="w-4 h-4 text-red-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                Deprem Eğitimi
              </Link>
              <Link href="/acil-durum-arama-kurtarma-egitimi" className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-navy-900 hover:border-red-600/30 hover:shadow-sm transition-all">
                <svg className="w-4 h-4 text-red-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                Arama Kurtarma
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <CTABand
        title="Yangın Eğitimi İçin Hemen Teklif Alın"
        subtitle="İşletmenize özel yangın eğitimi planı hazırlayalım. Formu doldurun, 30 dakika içinde size dönüş yapalım."
        buttonText="Ücretsiz Teklif Alın"
      />
    </>
  );
}
