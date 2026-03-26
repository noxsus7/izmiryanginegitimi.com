import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getWhatsAppLink } from '@/lib/utils';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schemas';
import FAQSection from '@/components/sections/FAQSection';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Tire Yangın Eğitimi ve Tatbikatı | OSB & Gıda Fabrikaları',
  description:
    'İzmir Tire Organize Sanayi (TOSBİ), süt kooperatifleri ve gıda ambalaj fabrikaları için 6331 SGK uyumlu onaylı, uygulamalı yangın tahliye tatbikatı.',
  keywords: [
    'tire yangın eğitimi',
    'tire osb yangın tatbikatı',
    'süt kooperatifi yangın eğitimi',
    'tire iş güvenliği sertifikası',
    'gıda fabrikası tahliye tatbikatı',
    'tire söndürme ekibi'
  ],
  openGraph: {
    title: 'Tire Tarım ve OSB Fabrikaları Yangın Tatbikatı',
    description:
      'Tire Organize Sanayi Bölgesi ve tarım kooperatifleriniz için üretimi durdurmayan, SGK iş müfettişlerine uygun yasal sertifikalı acil durum eğitimi.',
    url: 'https://yanginegitimiizmir.com/tire-yangin-egitimi',
    type: 'website',
  },
  alternates: {
    canonical: 'https://yanginegitimiizmir.com/tire-yangin-egitimi',
  },
};

const serviceFAQ = [
  {
    question: 'Tire OSB\'deki gıda ve ambalaj fabrikaları için tatbikat içeriği farklı mı?',
    answer:
      'Evet. Gıda tesislerindeki ambalaj stokları (karton/plastik) en hızlı yayılan A ve B sınıfı risklerdir. Üretim bantlarındaki sürtünme kaynaklı kıvılcımlara ve elektrik panolarına karşı karbon gazlı boğma teknikleri işlenerek üretim hattı özelinde eğitim verilir.',
  },
  {
    question: 'Süt kooperatifleri ve et entegre tesislerindeki dev kazanlar/soğutucular için risk analizi yapılıyor mu?',
    answer:
      'Büyük çaplı mandıra ve et tesislerinde soğutma gazları (amonyak) ve buhar kazanları kritik basınç noktalarıdır. Personele patlama riski öncesi şalter kapatma, vanaları kesme ve doğru tahliye rotasından çıkma (Sivil Savunma) disiplini aşılanır.',
  },
  {
    question: 'Eğitimler 3 vardiya çalışan tesislerde üretimi aksatadan nasıl organize ediliyor?',
    answer:
      'Tire OSB gibi 7/24 çalışan fabrikalarda eğitimlerimizi vardiya teslim/değişim aralıklarında (1.5 saatlik periyotlarla) bölümlere ayırarak veriyoruz. Böylece hiçbir makine bandı durmadan tüm fabrika personeli yasal olarak İSG sertifikalandırılmış olur.',
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Üretim Bandı Tehlike Keşfi',
    description: 'OSB ambalaj deponuzun veya kooperatif tanklarınızın yanıcılık yükü İSG uzmanlarımızca analiz edilerek özel senaryo kurgulanır.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Bölümsel Yönlendirme Brifingi',
    description: 'Ambalaj, lojistik veya idari ofis personellerine kendi çalışma alanlarında çıkabilecek farklı yangın tipleri hakkında teorik brifing verilir.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 13H8" /><path d="M16 17H8" /><path d="M16 13h-2" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Açık Saha KKT ve Köpük Pratiği',
    description: 'Fabrikanızın uygun yükleme avlusunda yakılan güvenli ateş tepsisine çalışanlarınız bizzat yangın tüpleriyle müdahale ettirilerek el yatkınlığı kazandırılır.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c1 3 4 6 4 10a4 4 0 0 1-8 0c0-4 3-7 4-10z" /><path d="M12 22v-4" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'SGK ve OSGB Dosya Teslimatı',
    description: 'Devlet denetmenlerinin onayladığı formatta, kurum mühürlü 1 Yıl Vizeli "Söndürme Ekipleri Tatbikat Raporu" klasörünüz yönetime sunulur.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const targetSectors = [
  {
    name: 'Tire OSB Gıda ve Ambalaj',
    detail: 'Organize Sanayi Bölgesindeki üretim ve paketleme tesisleri',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
  },
  {
    name: 'Süt Kooperatif Tesisleri',
    detail: 'Mandıralar ve süt işleme, yoğurt/peynir kazan alanları',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    name: 'Et Entegre Kompleksleri',
    detail: 'Büyükbaş kesim, sucuk, sosis dolum ve soğuk hava depoları',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 6 3 6 3s3 0 6-3v-5" />
      </svg>
    ),
  },
  {
    name: 'Yerel Çarşı İmalathaneleri',
    detail: 'Tire içi mekanik atölyeler ve geleneksel (urgan) imalat noktaları',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: 'ÇSGB İdari Ceza Dokunulmazlığı',
    text: 'Özellikle "Tehlikeli" ve "Çok Tehlikeli" sınıftaki imalat hanelerde 6331 SGK Yasasınca yaptırımı kesinen olan "Acil Durum Tatbikat Raporunuzu" kusursuz şekilde resmiyete döküyoruz.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Ambalaj ve Kağıt İstifi Koruması',
    text: 'Süt ve et ürünlerinin paketlendiği palet alanlarındaki olası A Sınıfı koli yangınlarında ateşin yayılmadan kimyasal tozla saniyeler içinde lokalize edilmesi pratiği kazanılır.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    title: 'Can Güvenliği ve Makine Tahliyesi',
    text: 'Üretim bandı işçilerinizin dumanı çeker çekmez panikle çıkış kapılarında izdiham yaratmasını engelleyerek, komuta zinciri eşliğinde bant şefinin ardında toplanma alanına ilerlemesi kurgulanır.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
  },
  {
    title: 'Soğutma Gazı ve Kazan Tehdidi',
    text: 'Gıda koruma silolarındaki ısı ve amonyak borusu çatlamalarında yanlış yönlendirilecek işçilerin zehirlenmesine karşı doğru rüzgar/baca sirkülasyonu mantığı anlatılır.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7" />
      </svg>
    ),
  },
];

export default function TireYanginEgitimiPage() {
  return (
    <>
      <JsonLd
        data={generateServiceSchema(
          'Tire Yangın Eğitimi ve Tatbikatı',
          '/tire-yangin-egitimi',
          'İzmir Tire Organize Sanayi (TOSBİ), süt kooperatifleri ve gıda ambalaj fabrikaları için 6331 SGK uyumlu onaylı, uygulamalı yangın tahliye tatbikatı.'
        )}
      />
      <JsonLd data={generateFAQSchema(serviceFAQ)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Tire Yangın Eğitimi', url: '/tire-yangin-egitimi' },
        ])}
      />

      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/districts/okul-tahliye-tatbikati.jpg"
            alt="Tire tarım ürünleri ve süt kooperatifi fabrikaları için zorunlu yangın tatbikat eğitimi"
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
              <span className="text-slate-200">Tire Yangın Eğitimi</span>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-5">
              Tire OSB ve Gıda Fabrikalarına <br />
              <span className="text-red-500">Kesintisiz ve Ruhsat Kapsamlı Tatbikatlar</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Tire'nin ekonomik motoru olan Organize Sanayi Bölgesi (TOSBİ), süt kooperatifleri ve et entegre tesisleri için üretimi asla durdurmadan vardiya bazlı, Çalışma Bakanlığı %100 onaylı acil durum eğitimleri.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/#teklif-formu" className="btn-primary text-base px-8 py-4 shadow-lg shadow-red-600/25">
                Fabrikanız İçin Ücret Alın
              </Link>
              <a
                href={getWhatsAppLink('Merhaba, Tire OSB (veya çevresi) bölgesindeki Üretim Tesisimiz/Kooperatifimiz için müfettiş uygunluklu zorunlu yangın eğitimi ve açık alan personel tatbikatı detayları talep ediyorum.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Fabrika Destek Hattı
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">OSB Fabrikaları ve Ambalaj Depoları Riski</h2>
              <div className="prose-custom">
                <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
                  Tire Organize Sanayi (TOSBİ) bölgesindeki gıda tesislerinde, sütün ve etin korunduğu devasa ambalaj antrepoları (karton/plastik) en ufak bir kıvılcımda ateşin kontrolden çıkacağı yerlerdir. Fabrika yönetimi, sadece yangın tüpünün duvarda durmasına güvenemez; çalışan işçinin o tüpü çekip pimini kırması saniyeler içinde olmalıdır.
                </p>
                <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
                  Personelin mesaisini engellemeden vardiya değişim saatlerine organize ettiğimiz uygulamalarımızla, sahada gerçek bir alev tavacığı yakıyoruz. Kendi getirdiğimiz KKT ve CO2 söndürücülerimizle işçilerinize bu ateşi söndürterek "yangın fobisini" yenmelerini sağlıyor, tesisinizi potansiyel milyarlık zararlardan ilk 30 saniye müdahalesiyle kurtarıyoruz.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96">
              <Image
                src="/images/districts/fabrika-yangin-tatbikati.jpg"
                alt="Tire OSB ambalaj gıda sanayisi fabrikaları bant tahliye ve panik tatbikatı"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-semibold text-navy-900">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Makine Bandı Panik İzolesi
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-full lg:min-h-[400px] order-2 lg:order-1">
              <Image
                src="/images/districts/meydan-yangin-sondurme.jpg"
                alt="Tire et entegre ambalajlama ve soğutma tesisleri personel tüp söndürme pratiği"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-semibold text-navy-900">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  ISG Belgesi Onayı Garanti
                </span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Müfettiş Onaylı Acil Durum Evrakları</h2>

              <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-navy-900 font-bold text-base mb-2">Çalışma ve Sosyal Güvenlik Teftişleri (ÇSGB)</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Eğer firmanız Organize Sanayi'de bulunuyor veya "Tehlikeli/Çok Tehlikeli" sınıfta faaliyet gösteriyorsa; yasa gereği her 30 ila 40 personelden 1'ini Söndürme ve Kurtarma Ekibi olarak belgelemek ve 12 ayda bir uygulamalı tatbikat fotoğraflarıyla OSGB dosyanıza işlemek zorundasınız. Olası bir denetimde "Ceza" kapısı ardına kadar bu evrak üzerinden açılır.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-slate-600 text-[0.938rem] leading-relaxed">
                  Kanunun mecbur tuttuğu bu evrak sirkülasyonunu firmamız tamamen üstlenir. Eğitim sonrası hazırlanan mühürlü klasörünüz doğrudan işletme yönetimine (veya OSGB doktorunuza) sunulur.
                </p>
                <p className="text-slate-600 text-[0.938rem] leading-relaxed">
                  Bu sayede fabrikanız olası bir yangın zararı davasında veya rutin <Link href="/acil-durum-arama-kurtarma-egitimi" className="text-red-600 font-semibold hover:underline">Şantiye Ruhsat Denetimlerinde</Link> idari kurumlara karşı tamamen savunmalı ve kanuna "Kusursuz" uymuş kabul edilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Tire Genelinde Tatbikat Verdiğimiz İş Kolları</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              İmalat malzemenize (süt, ambalaj, çelik, et) en uygun reaksiyon teknikleri.
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

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Üretimi Aksatmayan Uygulama Sürecimiz</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Fabrika bantlarınız vardiyadayken bile pürüzsüz yürüyen onaylı 4 aşama.
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

      <section className="section-padding bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Fabrikanıza Katacağımız SGK Güvenceleri</h2>
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

      <FAQSection
        title="Tire OSB ve Gıda Fabrikaları SSS"
        faqs={serviceFAQ}
        className="bg-white"
      />

      <section className="bg-slate-50 border-y border-slate-100">
        <div className="container-custom py-10">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-navy-900 mb-4">Dosyanızı Güçlendirecek Diğer İSG Belgeleri</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <Link href="/yangin-egitimi" className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-navy-900 hover:border-red-600/30 hover:shadow-sm transition-all">
                Bireysel Yangın Sertifikası
              </Link>
              <Link href="/yangin-tatbikati" className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-navy-900 hover:border-red-600/30 hover:shadow-sm transition-all">
                Toplu Bölge Tahliye Sınavı
              </Link>
              <Link href="/deprem-egitimi" className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-navy-900 hover:border-red-600/30 hover:shadow-sm transition-all">
                Üretim Hattı Deprem Bilinci
              </Link>
              <Link href="/acil-durum-arama-kurtarma-egitimi" className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-navy-900 hover:border-red-600/30 hover:shadow-sm transition-all text-xs">
                Acil Durum Arama-Kurtarma
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
