import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getWhatsAppLink } from '@/lib/utils';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schemas';
import FAQSection from '@/components/sections/FAQSection';
import JsonLd from '@/components/seo/JsonLd';

/* ─── SEO Metadata ─── */
export const metadata: Metadata = {
  title: 'Bornova Yangın Eğitimi ve Tatbikatı | İşletmelere Özel',
  description:
    'İzmir Bornova organize sanayi, fabrika ve işletmelerine özel profesyonel yangın eğitimi ve uygulamalı tatbikat. 6331 Sayılı Kanun uyumlu raporlu eğitim.',
  keywords: [
    'bornova yangın eğitimi',
    'bornova yangın tatbikatı',
    'izmir bornova yangın eğitimi',
    'işletmeler için yangın eğitimi',
    'bornova isg eğitimi',
    'fabrika yangın eğitimi bornova'
  ],
  openGraph: {
    title: 'Bornova Yangın Eğitimi ve Tatbikatı | Profesyonel Hizmet',
    description:
      'Bornova\'daki tesisiniz için yasal zorunluluklara uygun uygulamalı yangın eğitimi ve tahliye tatbikatı. Hemen teklif alın.',
    url: 'https://yanginegitimiizmir.com/bornova-yangin-egitimi',
    type: 'website',
  },
  alternates: {
    canonical: 'https://yanginegitimiizmir.com/bornova-yangin-egitimi',
  },
};

/* ─── Page-specific FAQ ─── */
const serviceFAQ = [
  {
    question: 'Bornova organize sanayi bölgesindeki fabrikamızda eğitim ne kadar sürer?',
    answer:
      'Eğitimler, mevzuattaki tehlike sınıflarına ve katılımcı sayısına bağlı olarak 4 ila 8 saat arasında planlanır. Vardiyalı sisteminize uygun olarak hafta sonu eğitimleri de verilebilmektedir.',
  },
  {
    question: 'Pınarbaşı\'ndaki depomuzda tatbikat yapabilir misiniz?',
    answer:
      'Evet. Tesisinizin yapısına zarar vermeyecek şekilde, güvenli alanlarda duman jeneratörleri ve kontrollü ateş tavaları kullanarak gerçeğe en yakın yangın tatbikatını gerçekleştiriyoruz.',
  },
  {
    question: 'Eğitim sonrası denetim belgeleri yasal olarak geçerli mi?',
    answer:
      'Tüm eğitimlerimiz Çalışma Bakanlığı kurallarına ve 6331 sayılı İSG kanununa %100 uyumludur. Tarafınıza verilen katılım sertifikaları ve tatbikat raporları tüm resmi denetimlerde geçerlidir.',
  }
];

/* ─── Process steps with icons ─── */
const processSteps = [
  {
    step: '01',
    title: 'Risk Analizi',
    description: 'Uzman eğitmenlerimiz Bornova\'daki tesisinize gelerek mevcut acil durum donanımlarınızı ve risk potansiyelini inceler.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Eğitim Planlaması',
    description: 'Tesisinize özel, vardiya saatlerinizi aksatmayacak, üretim sürecini durdurmayan bir eğitim takvimi oluşturulur.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 13H8" /><path d="M16 17H8" /><path d="M16 13h-2" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Teorik ve Pratik Eğitim',
    description: 'Çalışanlarınıza interaktif sunumlar eşliğinde teori anlatılır, ardından kontrollü alanda yangın söndürme uygulaması yaptırılır.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c1 3 4 6 4 10a4 4 0 0 1-8 0c0-4 3-7 4-10z" /><path d="M12 22v-4" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Sertifikasyon',
    description: 'Eğitimi tamamlayan personelinize katılım sertifikası, firmanıza ise yasal denetimlerde geçerli eğitim raporları sunulur.',
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
    name: 'Sanayi Siteleri (Pınarbaşı, Işıkkent)',
    detail: 'Kimyasal depolama ve büyük üretim fabrikaları',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
      </svg>
    ),
  },
  {
    name: 'Lojistik Firmaları & Depolar',
    detail: 'Geniş hacimli raflı depo ve antrep oalanları',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" /><path d="M6 18h12" /><path d="M6 14h12" />
      </svg>
    ),
  },
  {
    name: 'Kampüsler ve Eğitim Merkezleri',
    detail: 'Üniversiteler, okullar, yüksek insan kapasiteli noktalar',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 6 3 6 3s3 0 6-3v-5" />
      </svg>
    ),
  },
  {
    name: 'Büyük Ofisler & Ticaret Merkezleri',
    detail: 'Çok katlı iş merkezleri ve plazalar',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" />
      </svg>
    ),
  },
];

/* ─── Benefits with titles ─── */
const benefits = [
  {
    title: 'Doğru Müdahale Kapasitesi',
    text: 'Çalışanlarınız yangın anında paniğe kapılmadan doğru müdahale eder.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
  },
  {
    title: 'Denetim Koruması',
    text: '6331 Sayılı Kanun\'a uygun belgelendirme ile denetim cezalarından korunursunuz.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Pratik Deneyim',
    text: 'Gerçek senaryolu tatbikatlarla teorik bilgi pratiğe dönüşür.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c1 3 4 6 4 10a4 4 0 0 1-8 0c0-4 3-7 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Risk Analizi',
    text: 'Bornova\'daki işletmenize özel risk analizi ile zayıf noktalar belirlenir.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
];

export default function BornovaYanginEgitimiPage() {
  return (
    <>
      <JsonLd
        data={generateServiceSchema(
          'Bornova Yangın Eğitimi ve Tatbikatı',
          '/bornova-yangin-egitimi',
          'İzmir Bornova organize sanayi, fabrika ve işletmelerine özel profesyonel yangın eğitimi ve uygulamalı tatbikat.'
        )}
      />
      <JsonLd data={generateFAQSchema(serviceFAQ)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Bornova Yangın Eğitimi', url: '/bornova-yangin-egitimi' },
        ])}
      />

      {/* ───── HERO ───── */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/districts/bornova-yangin-egitimi-sanayi.jpg"
            alt="Bornova organize sanayi bölgesinde uygulamalı yangın eğitimi ve söndürme tatbikatı"
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
              <span className="text-slate-200">Bornova Yangın Eğitimi</span>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-5">
              Bornova İşletmeleri İçin <br />
              <span className="text-red-500">Yangın Eğitimi & Tatbikat</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Bornova, İzmir’in en büyük ve en hızlı gelişen ilçelerinden biridir. Pınarbaşı ve Işıkkent sanayi sitelerindeki fabrikanız, tesisiniz veya kampüsünüz için 6331 Sayılı Kanun&apos;a tam uyumlu, kurumunuza özel yangın eğitimi sağlıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/#teklif-formu" className="btn-primary text-base px-8 py-4 shadow-lg shadow-red-600/25">
                Ücretsiz Teklif Alın
              </Link>
              <a
                href={getWhatsAppLink('Merhaba, Bornova\'daki işletmemiz için yangın eğitimi hakkında bilgi ve fiyat almak istiyorum.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp ile Bilgi Alın
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───── WHAT IS THIS SERVICE (with image) ───── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Bornova'ya Özel Güvenlik Çözümleri</h2>
              <div className="prose-custom">
                <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
                  Bornova, sanayi siteleri, dev üretim tesisleri, üniversite kampüsleri ve yoğun yerleşim alanlarıyla yangın riskinin yüksek olduğu bir metropol ilçesidir. Özellikle Kemalpaşa yolu üzerindeki fabrikalar, Işıkkent ve Pınarbaşı sanayi havzaları dikkate alındığında işletmelerin afetlere karşı %100 hazırlıklı olması yasal bir zorunluluktur.
                </p>
                <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
                  İzmir Yangın Eğitimi olarak, Bornova'da yer alan üretim ve hizmet tesislerine özel olarak geliştirdiğimiz endüstriyel tabanlı senaryolarla eğitim yapıyoruz. Tesisinizin risk yapısına (kimyasal depolama alanları, ağır sanayi makinaları, tekstil tozu patlaması riski vb.) tam uygun yerinde müdahale teknikleri öğretiyoruz.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96">
              <Image
                src="/images/districts/bornova-acil-durum-arama-kurtarma.jpg"
                alt="Bornova işletmeleri için acil durum arama kurtarma ve tahliye eğitimi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-semibold text-navy-900">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Lokal Risk Analizi
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
                src="/images/districts/bornova-is-yeri-yangin-tatbikati.jpg"
                alt="Bornova'da fabrika ortamında işçi sağlığı ve güvenliği yangın tatbikatı"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-semibold text-navy-900">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  Pınarbaşı & Işıkkent Tatbikatları
                </span>
              </div>
            </div>

            {/* Content side */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Lokal Riskleri Neden Ciddiye Almalısınız?</h2>

              <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-navy-900 font-bold text-base mb-2">Sanayi ve Kimyasal Depolama Kaynaklı Risk</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Işıkkent ve Pınarbaşı bölgelerindeki fabrikalarda kullanılan yanıcı, patlayıcı kimyasallar ve ağır sanayi makineleri, elektriksel kıvılcımlar veya ısınma kaynaklı yangın riskini doruğa çıkarır.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-slate-600 text-[0.938rem] leading-relaxed">
                  Lojistik ve raf alanlarındaki yoğunluk dikey yangın büyüme tehlikesi yaratır (Baca etkisi). Ayrıca AVM ve geniş kampüslerde panik yönetimi yapılamazsa tahliye süreci ezilmelerle sonuçlanabilir.
                </p>
                <p className="text-slate-600 text-[0.938rem] leading-relaxed">
                  Sektörümüzdeki yıllara dayanan tecrübemiz ve İSG profesyonellerimizle yasal <Link href="/yangin-egitimi" className="text-red-600 font-semibold hover:underline">Sertifikalı Yangın Eğitimi</Link> vererek tüm resmi süreçlerde denetim firmalarına eksiksiz bir yasal hazırlık sağlıyoruz.
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
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Kimler İçin Zorunlu?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Tehlike sınıfına göre tüm işletmeler acil durumlara hazırlanmalıdır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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

      {/* ───── HOW WE DELIVER ───── */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Bornova Süreci Nasıl İşler?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Fabrika üretim hızını yavaşlatmadan akılcı ve esnek eğitim modelleri sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
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
        </div>
      </section>

      {/* ───── BENEFITS ───── */}
      <section className="section-padding bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Neden İzmir Yangın Eğitimi?</h2>
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
        title="Bornova İşletmeleri İçin Sık Sorulan Sorular"
        faqs={serviceFAQ}
        className="bg-white"
      />

      {/* ───── INTERNAL LINKS ───── */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="container-custom py-10">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-navy-900 mb-4">Ana Hizmetlerimize Göz Atın</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <Link href="/yangin-egitimi" className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-navy-900 hover:border-red-600/30 hover:shadow-sm transition-all">
                Yangın Eğitimi
              </Link>
              <Link href="/yangin-tatbikati" className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-navy-900 hover:border-red-600/30 hover:shadow-sm transition-all">
                Yangın Tatbikatı
              </Link>
              <Link href="/deprem-egitimi" className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-navy-900 hover:border-red-600/30 hover:shadow-sm transition-all">
                Deprem Eğitimi
              </Link>
              <Link href="/acil-durum-arama-kurtarma-egitimi" className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-navy-900 hover:border-red-600/30 hover:shadow-sm transition-all text-xs">
                Acil Durum Kurtarma
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
