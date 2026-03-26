import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getWhatsAppLink } from '@/lib/utils';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schemas';
import FAQSection from '@/components/sections/FAQSection';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Selçuk Yangın Eğitimi ve Tatbikatı | Oteller & Otantik Tesisler',
  description:
    'İzmir Selçuk ve Şirince bölgesi butik oteller, şarap evleri ve tarım depoları için Turizm Bakanlığı ve SGK uyumlu, sertifikalı yangın tahliye tatbikatı.',
  keywords: [
    'selçuk yangın eğitimi',
    'şirince yangın tatbikatı',
    'şirince otel yangın eğitimi',
    'efes bölgesi iş güvenliği tatbikatı',
    'selçuk otel tahliye tatbikatı',
    'selçuk yangın sertifikası'
  ],
  openGraph: {
    title: 'Selçuk Şirince Butik Tesisleri Yangın Tatbikatı',
    description:
      'Selçuk ve Şirince\'deki bağ eviniz, pansiyonunuz veya tarım deponuz için misafir güvenliğini sağlayan, yasal onaylı uygulamalı acil durum eğitimi.',
    url: 'https://yanginegitimiizmir.com/selcuk-yangin-egitimi',
    type: 'website',
  },
  alternates: {
    canonical: 'https://yanginegitimiizmir.com/selcuk-yangin-egitimi',
  },
};

const serviceFAQ = [
  {
    question: 'Şirince taş ve ahşap konaklarında (dar sokaklarda) tahliye tatbikatı yapabiliyor musunuz?',
    answer:
      'Evet. Şirince gibi itfaiye girişinin zor olduğu eski yerleşimlerde asıl eğitim "yangını büyümeden yerinde boğmak" ve "komşu evlere sıçramadan tahliye etmektir." KKT ve Köpüklü tüplerle bu senaryoyu personelinize bizzat uygulatıyoruz.',
  },
  {
    question: 'Efes Antik Kenti çevresindeki sezonluk kafeterya ve restoranların mutfak eğitimi nasıl oluyor?',
    answer:
      'Yaz sezonunda artan turist yoğunluğu ve mutfak fritöz yangınları en büyük riskimizdir. Restoran personelinize yağ yangınlarında (F Sınıfı) kesinlikle su sıkmamayı öğretiyor, ateş üstüne yangın battaniyesi atma deneyimi kazandırıyoruz.',
  },
  {
    question: 'Zeytin, incir depolarında veya şarap üretim hanelerinde İSG belgesi zorunlu mu?',
    answer:
      'Kesinlikle zorunlu. Tarım ve Orman Bakanlığı ile SGK iş müfettişleri bu tür imalathaneleri "Tehlikeli" veya "Az Tehlikeli" sınıfta değerlendirerek en az yılda 1 kez kurum mühürlü Tatbikat Raporu talep etmektedir.',
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Mekan Dokusu Risk Analizi',
    description: 'Uzmanlarımız otelinizin ahşap (A sınıfı), restoranınızın mutfak (F Sınıfı) veya deponuzun yangın yükünü yerinde haritalar.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Misafir ve İşçi Yönlendirme Brifingi',
    description: 'Personelinize panikleyen turistleri sakinleştirme, "Yangın Üçgenini" kırma ve toplanma alanını organize etme teorisi anlatılır.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 13H8" /><path d="M16 17H8" /><path d="M16 13h-2" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Güvenli Alanda Gerçek Ateş Pratiği',
    description: 'İşletmenizin otoparkında veya boş arazisinde kendi ekipmanlarımızla yakılan ateşe tüm ekibinizin tüple (bas-söndür) müdahale etmesi test edilir.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c1 3 4 6 4 10a4 4 0 0 1-8 0c0-4 3-7 4-10z" /><path d="M12 22v-4" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Bakanlık/Turizm Belgesi Hazırlığı',
    description: 'Turizm, Tarım veya Çalışma Bakanlığı teftişlerinde hiçbir pürüz yaşamayacağınız Islak İmzalı ve Kaşeli Yangın Tatbikat Raporunuz teslim edilir.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const targetSectors = [
  {
    name: 'Turistik Pansiyon & Butik Oteller',
    detail: 'Şirince ve Efes güzergahındaki taş veya ahşap konaklar',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 2.2 1.8 4 4 4h0c2.2 0 4-1.8 4-4V2" /><path d="M7 2v20" /><path d="M21 15v-6" /><path d="M17 15h4v-1a5 5 0 0 0-5-5v0c-1.1 0-2 .9-2 2v4z" /><path d="M17 22v-7" />
      </svg>
    ),
  },
  {
    name: 'Şarap Evleri ve Mahzenler',
    detail: 'Şirince bölgesindeki butik meyve şarabı imalathane ve tadım noktaları',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    name: 'Tarım ve Paketleme Depoları',
    detail: 'Zeytin, incir ve narenciye istiflenen soğuk hava siloları',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
  },
  {
    name: 'Çarşı Çevresi Perakende Mutfakları',
    detail: 'Efes Müzesi ve Selçuk merkezindeki lokantalar, hediyelik eşya atölyeleri',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: 'ÇSGB ve Turizm Denetimlerine Tam Uyum',
    text: 'Sadece "bizde yangın tüpü var" diyerek müfettişlerden geçemezsiniz. Her 30 ila 50 personele bir "Destek Elemanı" atanması ve tatbikatın bizzat (resimli ispatlı) yaptırıldığını gösteren raporları sunarak işletmenizi fahiş yasal cezalardan koruyoruz.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Ahşap Konaklarda Saniyelerle Yarış',
    text: 'Özellikle Şirince sivil mimarisindeki ahşap yapılar A sınıfı yoğun tutuşma karakterindedir. İtfaiyenin tırmanmasının zaman aldığı bu bölgelerde otel kadronuza anında "tüp çekerek alevi boğma" refleksini uygulamalı yaşatıyoruz.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    title: 'Yerli/Yabancı Turist Panik Yönetimi',
    text: 'Otelde çıkan duman karşısında bağırıp kaçan bir personel yerine, İngilizce/Türkçe "Sakin olun bu taraftan" komutuyla tahliyeyi yürüten vizyoner bir kadro oluşturuyoruz.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
  },
  {
    title: 'Alkol, Tarım ve Fritöz Riski Pratiği',
    text: 'Şarap imalathanelerindeki B sınıfı fermantasyon buharlarına ve balık-köfte restoranlarındaki F sınıfı yağ tavalarına sulu müdahale etmeme bilincini ezberletiyoruz.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7" />
      </svg>
    ),
  },
];

export default function SelcukYanginEgitimiPage() {
  return (
    <>
      <JsonLd
        data={generateServiceSchema(
          'Selçuk Yangın Eğitimi ve Tatbikatı',
          '/selcuk-yangin-egitimi',
          'İzmir Selçuk ve Şirince bölgesi butik oteller, şarap evleri ve tarım depoları için Turizm Bakanlığı ve SGK uyumlu, sertifikalı yangın tahliye tatbikatı.'
        )}
      />
      <JsonLd data={generateFAQSchema(serviceFAQ)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Selçuk Yangın Eğitimi', url: '/selcuk-yangin-egitimi' },
        ])}
      />

      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/districts/okul-tahliye-tatbikati.jpg"
            alt="Selçuk Şirince taş ev butik otelleri şarap mahzenleri için uygulamalı yangın tatbikatı"
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
              <span className="text-slate-200">Selçuk Yangın Eğitimi</span>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-5">
              Selçuk-Şirince Turizm Tesislerine <br />
              <span className="text-red-500">Mevzuat Uyumlu Kritik Yangın Tatbikatları</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Şirince'nin eski ahşap mimarili otelleri, şarap üretim evleri ve Selçuk ovasındaki tarım siloları için misafir paniğini çözen, devlet denetimlerine kusursuz uyum sağlayan zorunlu acil durum eğitimleri.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/#teklif-formu" className="btn-primary text-base px-8 py-4 shadow-lg shadow-red-600/25">
                Otel/Tesisiniz İçin Fiyat Alın
              </Link>
              <a
                href={getWhatsAppLink('Merhaba, Selçuk (veya Şirince) bölgesindeki Tesisimiz/Otelimiz/Depomuz için müfettiş onaylı periyodik yangın eğitimi ve zorunlu tahliye tatbikatı fiyatlandırması rica ediyorum.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp İletişim Hattı
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Şirince Dokusu ve Otel Turizmi Riskleri</h2>
              <div className="prose-custom">
                <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
                  Şirince ve Selçuk merkezin sivil mimari yapısında ahşap konaklar (A sınıfı yangın) ve dar yokuşlar çoğunluktadır. Olası bir pansiyon dumanında itfaiyenin konuma varması için geçen dakikalar belirleyicidir. İşletmecilerin personeline "tüp duvarda duruyor, itfaiyeyi bekle" talimatı vermesi, komşu evlere sıçrayacak dev bir felakete davetiye çıkarır.
                </p>
                <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-4">
                  Sadece video izletmekle yetinmiyor; otel avlunuzda veya uygun zeytinlik kıyısında yaktığımız gerçek ateşi (çevreye zararsız), resepsiyonistten oda görevlisine kadar tüm personelinize birebir kapattırıyoruz. Eli yangın tüpüne alışan personel, kriz anında bir müşteriyi dahi ezilmeden çıkışa yürütmenin sorumluluğunu üstlenip, tesise on milyarlarca liralık hasar kalkanı oluşturur.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96">
              <Image
                src="/images/districts/hastane-acil-durum.jpg"
                alt="Selçuk Efes otelleri kamp alanları misafir tahliye ve güvenli toplanma tatbikatı"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-semibold text-navy-900">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Psikolojik Otel Tahliyesi Planı
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
                src="/images/districts/fabrika-yangin-tatbikati.jpg"
                alt="Selçuk ovası tarım depoları zeytin incir siloları ambalaj yangını söndürme pratiği"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-semibold text-navy-900">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  Müfettiş Tam Not Garantisi
                </span>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Müfettiş Onaylı Acil Durum Tatbikat Raporu</h2>

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
                      Eğer otel/depo işletiyorsanız veya gıda işliyorsanız 6331 SGK yasasına tabisiniz. Yılda 1 defa personeliniz ile zorunlu İSG Tahliye Tatbikatı yapıp bunu fotoğraflı şekilde belgeleyerek, kurumiçi "Kurtarma" listelerinizi hazırlamalısınız. Bakanlık iş kaza ve ruhsat incelemelerinde ağır idari cezayı doğrudan bu dosyanın eksikliğinden keser.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-slate-600 text-[0.938rem] leading-relaxed">
                  Kanunun mecbur tuttuğu bu yorucu evrak sürecini tesisten tamamen devralıyoruz. Eğitim sonrası hazırladığımız 1 Yıl Vizeli, Mühürlü klasörünüzü tesis yönetimine doğrudan teslim ediyoruz.
                </p>
                <p className="text-slate-600 text-[0.938rem] leading-relaxed">
                  Bu hizmet sayesinde tesisiniz olası can/mal kaybı sonrası savcılık kovuşturmalarında veya <Link href="/acil-durum-arama-kurtarma-egitimi" className="text-red-600 font-semibold hover:underline">Turizm/Tarım Bakanlığı Mevzuatlarında</Link> tam güvence oluşturup "gerekli ihtimamı kusursuz sağladı" statüsüne çıkartılır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Selçuk Bölgesinde Tatbikat Sunduğumuz Kurumlar</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Tehlike sınıfına (Gıda, Ahşap, Paketleme) göre daraltılmış pratik programlar.
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
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Mekanınızın Ahengini Bozmayan İşleyiş</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Turistlerin ve üretimin huzurunu gözeterek yaptığımız adım adım SGK uyumu.
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Selçuk Yatırımlarına Katacağımız Güvenceler</h2>
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
        title="Selçuk Otel ve Fabrika İşletmeleri SSS"
        faqs={serviceFAQ}
        className="bg-white"
      />

      <section className="bg-slate-50 border-y border-slate-100">
        <div className="container-custom py-10">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-navy-900 mb-4">Mekanınızın Sicilini Güçlendirecek Diğer Eğitimler</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <Link href="/yangin-egitimi" className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-navy-900 hover:border-red-600/30 hover:shadow-sm transition-all">
                Müfettiş Onaylı Yangın Dosyası
              </Link>
              <Link href="/yangin-tatbikati" className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-navy-900 hover:border-red-600/30 hover:shadow-sm transition-all">
                Otel Tahliye ve Çıkış Pratiği
              </Link>
              <Link href="/deprem-egitimi" className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-navy-900 hover:border-red-600/30 hover:shadow-sm transition-all">
                Sit Alanı Deprem Önlemi
              </Link>
              <Link href="/acil-durum-arama-kurtarma-egitimi" className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-navy-900 hover:border-red-600/30 hover:shadow-sm transition-all text-xs">
                Acil Durum Kurtarma Personeli
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
