import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import { getWhatsAppLink } from '@/lib/utils';
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schemas';
import FAQSection from '@/components/sections/FAQSection';
import TrustProof from '@/components/sections/TrustProof';
import LeadFormSection from '@/components/sections/LeadFormSection';
import JsonLd from '@/components/seo/JsonLd';
import StatsBar from '@/components/sections/StatsBar';
import ReviewCarousel from '@/components/sections/ReviewCarousel';

/* ─── Service images ─── */
const serviceImages: Record<string, { src: string; alt: string }> = {
  'yangin-egitimi': {
    src: '/images/service-yangin-egitimi.png',
    alt: 'Profesyonel yangın eğitimi — yangın söndürücü kullanımı gösterimi',
  },
  'yangin-tatbikati': {
    src: '/images/service-yangin-tatbikati.png',
    alt: 'İşletmede yangın tatbikatı ve tahliye tatbikatı',
  },
  'deprem-egitimi': {
    src: '/images/service-deprem-egitimi.png',
    alt: 'Kurumsal deprem eğitimi seminer ortamında',
  },
  'acil-durum-arama-kurtarma-egitimi': {
    src: '/images/service-acil-durum.png',
    alt: 'Acil durum arama kurtarma ekibi tatbikat eğitimi',
  },
};

/* ─── Service audience micro-text ─── */
const serviceAudience: Record<string, string> = {
  'yangin-egitimi': 'Fabrikalar, ofisler, oteller, okullar ve tüm işletmeler için',
  'yangin-tatbikati': 'Yasal zorunluluk kapsamındaki tüm iş yerleri için',
  'deprem-egitimi': 'Yüksek katlı binalar, kampüsler ve sanayi tesisleri için',
  'acil-durum-arama-kurtarma-egitimi': 'Sanayi bölgeleri, depolar ve büyük işletmeler için',
};

/* ─── Hero trust badges ─── */
const heroBadges = [
  {
    label: 'Katılım Belgesi',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'Tatbikat Raporu',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838.838-2.872a2 2 0 0 1 .506-.855z" />
      </svg>
    ),
  },
  {
    label: 'Yerinde Eğitim',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Sertifikalı Eğitmenler',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

/* ─── Why Us ─── */
const whyUs = [
  {
    title: 'İşletmenize Geliyoruz',
    highlight: 'Yerinde — Randevunuza Uygun',
    description: 'Eğitimi sizin ortamınıza göre planlıyor, sahada uyguluyoruz. Ek mekân masrafı yok.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Mevzuata Uygun Belgelendirme',
    highlight: 'Belgeler Eğitim Günü Teslim',
    description: 'Denetimlerde geçerli, eksiksiz belge ve rapor sunuyoruz. 6331 Kanun uyumlu.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Saha Deneyimli Eğitmenler',
    highlight: 'Teorik Değil — Sahada Kanıtlanmış',
    description: 'Gerçek saha tecrübesine sahip, sertifikalı uzman kadro ile eğitim.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Gerçek Senaryolu Tatbikat',
    highlight: 'İşletmenize Özel Kurgu',
    description: 'İşletmenize özel kurgulanan tatbikatlarla gerçek hazırlık sağlıyoruz.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c1 3 4 6 4 10a4 4 0 0 1-8 0c0-4 3-7 4-10z" /><path d="M12 22v-4" />
      </svg>
    ),
  },
  {
    title: '30 Dakikada Teklif',
    highlight: '⚡ Garantili Dönüş Süresi',
    description: 'Form sonrası 30 dakika içinde size özel teklif. Zaman kaybetmezsiniz.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'İzmir Geneli Hizmet',
    highlight: 'Tüm İlçeler — Aynı Kalite',
    description: 'Bornova\'dan Aliağa\'ya, 30 ilçede aynı kalite standartlarında hizmet.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

/* ─── Sectors with micro-descriptions ─── */
const sectors = [
  {
    name: 'Fabrika & Üretim',
    micro: 'Yüksek riskli alanlar, kimyasal depolama, makine güvenliği',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
      </svg>
    ),
  },
  {
    name: 'Otel & Konaklama',
    micro: 'Misafir tahliyesi, mutfak yangını, gece tatbikatı',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" /><path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" /><path d="M8 7h.01" /><path d="M16 7h.01" /><path d="M12 7h.01" /><path d="M12 11h.01" /><path d="M16 11h.01" /><path d="M8 11h.01" />
      </svg>
    ),
  },
  {
    name: 'Okul & Eğitim',
    micro: 'Öğrenci tahliyesi, panik yönetimi, deprem tatbikatı',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 6 3 6 3s3 0 6-3v-5" />
      </svg>
    ),
  },
  {
    name: 'Ofis & İş Merkezi',
    micro: 'Kat tahliyesi, yangın merdiveni, alarm prosedürleri',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" />
      </svg>
    ),
  },
  {
    name: 'Depo & Lojistik',
    micro: 'Raf güvenliği, forklift alanları, yangın riski',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" /><path d="M6 18h12" /><path d="M6 14h12" />
      </svg>
    ),
  },
  {
    name: 'Restoran & Gıda',
    micro: 'Mutfak yangını, tüp güvenliği, tahliye planı',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
      </svg>
    ),
  },
  {
    name: 'Site Yönetimi',
    micro: 'Bina tahliyesi, ortak alan güvenliği, sakin yönetimi',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
  },
  {
    name: 'AVM & Mağaza',
    micro: 'Yoğun kalabalık tahliyesi, asansör prosedürleri',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
];



/* ─── All 30 İzmir districts ─── */
const allDistricts = [
  { name: 'Bornova', slug: 'bornova-yangin-egitimi' },
  { name: 'Karşıyaka', slug: 'karsiyaka-yangin-egitimi' },
  { name: 'Konak', slug: 'konak-yangin-egitimi' },
  { name: 'Buca', slug: 'buca-yangin-egitimi' },
  { name: 'Bayraklı', slug: 'bayrakli-yangin-egitimi' },
  { name: 'Çiğli', slug: 'cigli-yangin-egitimi' },
  { name: 'Gaziemir', slug: 'gaziemir-yangin-egitimi' },
  { name: 'Torbalı', slug: 'torbali-yangin-egitimi' },
  { name: 'Kemalpaşa', slug: 'kemalpasa-yangin-egitimi' },
  { name: 'Karabağlar', slug: 'karabaglar-yangin-egitimi' },
  { name: 'Aliağa', slug: 'aliaga-yangin-egitimi' },
  { name: 'Menemen', slug: 'menemen-yangin-egitimi' },
  { name: 'Bergama', slug: 'bergama-yangin-egitimi' },
  { name: 'Ödemiş', slug: 'odemis-yangin-egitimi' },
  { name: 'Tire', slug: 'tire-yangin-egitimi' },
  { name: 'Urla', slug: 'urla-yangin-egitimi' },
  { name: 'Çeşme', slug: 'cesme-yangin-egitimi' },
  { name: 'Seferihisar', slug: 'seferihisar-yangin-egitimi' },
  { name: 'Menderes', slug: 'menderes-yangin-egitimi' },
  { name: 'Balçova', slug: 'balcova-yangin-egitimi' },
  { name: 'Narlıdere', slug: 'narlidere-yangin-egitimi' },
  { name: 'Güzelbahçe', slug: 'guzelbahce-yangin-egitimi' },
  { name: 'Foça', slug: 'foca-yangin-egitimi' },
  { name: 'Dikili', slug: 'dikili-yangin-egitimi' },
  { name: 'Kınık', slug: 'kinik-yangin-egitimi' },
  { name: 'Kiraz', slug: 'kiraz-yangin-egitimi' },
  { name: 'Beydağ', slug: 'beydag-yangin-egitimi' },
  { name: 'Bayındır', slug: 'bayindir-yangin-egitimi' },
  { name: 'Selçuk', slug: 'selcuk-yangin-egitimi' },
  { name: 'Karaburun', slug: 'karaburun-yangin-egitimi' },
];

/* ─── FAQ (expanded, SEO-optimized) ─── */
const homepageFAQ = [
  {
    question: 'Yangın eğitimi zorunlu mu?',
    answer: 'Evet, yangın eğitimi yasal bir zorunluluktur. 6331 Sayılı İş Sağlığı ve Güvenliği Kanunu gereği, tüm işverenler çalışanlarına düzenli olarak yangın güvenliği eğitimi vermekle yükümlüdür. Tehlike sınıfına göre az tehlikeli işyerlerinde 3 yılda bir, tehlikeli işyerlerinde 2 yılda bir, çok tehlikeli işyerlerinde ise yılda bir eğitim yenilenmesi zorunludur. Eğitim verilmemesi halinde her çalışan başına idari para cezası uygulanmakta ve tekrarlayan ihlallerde iş durdurma yaptırımı gündeme gelebilmektedir.',
  },
  {
    question: 'Yangın eğitimi fiyatları nasıl belirleniyor?',
    answer: 'Yangın eğitimi fiyatları; çalışan sayısı, eğitim türü (teori + uygulama), işletmenin lokasyonu, sektörü ve eğitim kapsamına göre belirlenir. Örneğin, 50 kişilik bir ofis eğitimi ile 200 kişilik bir fabrika tatbikatının maliyeti farklıdır. Her işletmeye özel teklif hazırlıyoruz. Teklif formunu doldurduktan sonra 30 dakika içinde size özel fiyat bilgisi sunuyoruz. Teklif almak tamamen ücretsizdir ve herhangi bir taahhüt gerektirmez.',
  },
  {
    question: 'Eğitim sonrasında hangi belgeler veriliyor?',
    answer: 'Eğitim sonrasında katılımcıların her birine kişisel katılım belgesi düzenlenmektedir. İşletmeye özel olarak hazırlanan tatbikat raporu, eğitim değerlendirme formu ve gerekli durumlarda yangın söndürücü kullanım sertifikası da teslim edilmektedir. Tüm belgeler 6331 Sayılı Kanun ve ilgili yönetmeliklere uygun olarak hazırlanır ve denetimlerde geçerlidir. Belgeler eğitim günü hem dijital hem basılı olarak teslim edilir.',
  },
  {
    question: 'Eğitimleri nerede veriyorsunuz?',
    answer: 'Tüm eğitimlerimizi işletmenize gelerek yerinde veriyoruz. İzmir\'in 30 ilçesine hizmet götürüyoruz — Bornova\'dan Aliağa\'ya, Konak\'tan Torbalı\'ya kadar. Eğitim için ayrı bir mekan kiralamanıza gerek yoktur. Eğitmenlerimiz sizin çalışma ortamınıza gelir, risk analizini yerinde yapar ve eğitimi sizin sahanıza uygun şekilde planlar. Bu sayede hem zamandan tasarruf edersiniz hem de çalışanlarınız kendi çalışma ortamında pratik yapar.',
  },
  {
    question: 'Teklif ne kadar sürede gelir?',
    answer: 'Teklif formunu doldurduktan sonra en geç 30 dakika içinde tarafınıza dönüş yapıyoruz — bu garanti bir dönüş süresidir. Acil ihtiyaçlar için WhatsApp üzerinden anlık iletişim kurabilirsiniz. Teklif; eğitim kapsamı, süre, katılımcı sayısı ve fiyat bilgisini içerir. Teklif almak tamamen ücretsiz ve bağlayıcı değildir.',
  },
];

/* ════════════════════════════════════════════
   HOMEPAGE COMPONENT
   ════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateFAQSchema(homepageFAQ)} />

      {/* ───── HERO (rewritten: strong promise, SEO, aggressive) ───── */}
      <section className="relative bg-navy-900 overflow-hidden min-h-[600px] lg:min-h-[700px]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-training.png"
            alt="İzmir yangın eğitimi — sertifikalı eğitmen gözetiminde yangın söndürücü uygulaması"
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
              İzmir&apos;de 500+ Eğitim Tamamlandı
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-5">
              İzmir Yangın Eğitimi {' '}
              <span className="text-red-500">Personeliniz Doğru Müdahaleyi Yapabilsin</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
              İşletmeler için <strong className="text-white">uygulamalı yangın eğitimi</strong> ve{' '}
              <strong className="text-white">yangın tatbikatı </strong> hizmeti. Sertifikalı eğitmenler,
              yerinde uygulama, katılım belgesi ve tatbikat raporu dahil.
              6331 Sayılı Kanun&apos;a tam uyumlu — denetimlere hazır olun.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/#teklif-formu" className="btn-primary text-base px-8 py-4 shadow-lg shadow-red-600/25">
                Ücretsiz Teklif Alın — 30 dk Dönüş
              </Link>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp ile Hemen Yazın
              </a>
            </div>

            {/* Trust proof chips */}
            <div className="flex flex-wrap gap-3">
              {heroBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white"
                >
                  <span className="text-red-400 flex-shrink-0">{badge.icon}</span>
                  <span className="font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── STATS ───── */}
      <StatsBar />

      {/* ───── SERVICES (with internal links) ───── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Profesyonel Çözümler</p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">İşletmeler İçin Yangın Eğitimi ve Tatbikat Hizmetleri</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Her işletmenin risk profili farklıdır. Size özel eğitim programı hazırlıyoruz.
              <Link href="/#teklif-formu" className="text-red-600 font-semibold hover:underline ml-1">
                Ücretsiz teklif alın →
              </Link>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const img = serviceImages[service.slug];
              const audience = serviceAudience[service.slug];
              return (
                <Link key={service.slug} href={`/${service.slug}`} className="group">
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-slate-300/40 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                    <div className="relative h-56 overflow-hidden flex-shrink-0">
                      {img && (
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent" />
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-red-600 transition-colors">
                        {service.title}
                      </h3>
                      {audience && (
                        <p className="text-xs font-medium text-red-600/80 uppercase tracking-wider mb-3">
                          Kimler için: {audience}
                        </p>
                      )}
                      <p className="text-slate-600 text-[0.938rem] leading-relaxed mb-5 flex-1">{service.description}</p>
                      <span className="inline-flex items-center gap-1.5 bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg group-hover:bg-red-700 transition-colors self-start mt-auto">
                        Detaylı Bilgi Al
                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Internal links to services */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/yangin-egitimi" className="text-sm text-slate-500 hover:text-red-600 transition-colors">Yangın Eğitimi →</Link>
            <Link href="/yangin-tatbikati" className="text-sm text-slate-500 hover:text-red-600 transition-colors">Yangın Tatbikatı →</Link>
            <Link href="/deprem-egitimi" className="text-sm text-slate-500 hover:text-red-600 transition-colors">Deprem Eğitimi →</Link>
            <Link href="/acil-durum-arama-kurtarma-egitimi" className="text-sm text-slate-500 hover:text-red-600 transition-colors">Arama Kurtarma →</Link>
          </div>
        </div>
      </section>

      {/* ───── WHY US (with visual) ───── */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start mb-14 lg:mb-0">
            {/* Left: visual */}
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden h-64 lg:h-full lg:min-h-[420px]">
              <Image
                src="/images/service-yangin-tatbikati.png"
                alt="Yangın tatbikatı — tahliye senaryosu uygulaması"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-semibold text-navy-900">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  Gerçek Saha Uygulaması
                </span>
              </div>
            </div>

            {/* Right: content */}
            <div className="lg:col-span-3">
              <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Farkımız</p>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Neden Yüzlerce İşletme Bizi Tercih Ediyor?</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Ucuz eğitim değil, gerçekten işe yarayan ve denetimlerde sizi koruyan eğitim veriyoruz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyUs.map((item) => (
                  <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-slate-300 transition-all duration-200 group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:bg-red-600 transition-colors">
                        {item.icon}
                      </div>
                      <h3 className="text-sm font-bold text-navy-900">{item.title}</h3>
                    </div>
                    <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">{item.highlight}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTORS (with visual) ───── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Sektörel Uzmanlık</p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Her Sektöre Özel Eğitim Programı</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Fabrikadan otele, ofisten depoya — her işletmenin riski farklıdır. Biz buna göre eğitim planları oluştururuz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Visual card */}
            <div className="lg:col-span-2 lg:row-span-2 relative rounded-2xl overflow-hidden min-h-[280px]">
              <Image
                src="/images/hero-training.png"
                alt="Yangın söndürücü eğitimi — saha uygulaması"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-lg mb-1">Sahada, Gerçek Eğitim</p>
                <p className="text-slate-300 text-sm">Her sektöre özel risk analizi ve eğitim programı hazırlıyoruz.</p>
              </div>
            </div>

            {sectors.map((sector) => (
              <div key={sector.name} className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center hover:border-navy-900/30 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                <div className="w-12 h-12 mx-auto bg-navy-900/5 rounded-xl flex items-center justify-center text-navy-900 mb-3 group-hover:bg-navy-900 group-hover:text-white transition-colors">
                  {sector.icon}
                </div>
                <span className="block text-sm font-semibold text-navy-900 mb-1">{sector.name}</span>
                <span className="block text-[0.688rem] text-slate-400 leading-snug">{sector.micro}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── TRUST / PROOF ───── */}
      <TrustProof />

      {/* ───── REVIEW CAROUSEL ───── */}
      <ReviewCarousel />

      {/* ───── DISTRICTS (compact, all 30) ───── */}
      <section id="ilceler" className="section-padding bg-navy-900">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">İzmir Geneli</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">İzmir&apos;in 30 İlçesinde Yangın Eğitimi</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Tüm ilçelere yerinde profesyonel eğitim ve tatbikat hizmeti götürüyoruz.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {allDistricts.map((district) => (
              <Link
                key={district.slug}
                href={`/${district.slug}`}
                className="flex items-center gap-2 bg-navy-800/60 hover:bg-navy-700 border border-navy-700/40 rounded-lg px-3 py-2.5 transition-all duration-200 group"
              >
                <svg className="w-3 h-3 text-red-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-xs font-medium group-hover:text-red-400 transition-colors truncate">
                  {district.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <FAQSection faqs={homepageFAQ} className="bg-white" />

      {/* ───── LEAD FORM ───── */}
      <LeadFormSection />

      {/* ───── SINGLE MERGED CTA ───── */}
      <section className="bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <div className="container-custom py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Yangın Eğitimi İhtiyacınızı Bugün Çözün
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
              Formu doldurun, en geç 30 dakika içinde size özel teklif sunalım. Hiçbir ücret veya taahhüt yok.
            </p>
            <p className="text-slate-400 text-sm mb-10">
              Sorunuz mu var? Uzman ekibimiz yangın eğitimi, tatbikat ve belgelendirme hakkında tüm sorularınızı yanıtlar.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/#teklif-formu" className="btn-primary text-base px-10 py-4 shadow-lg shadow-red-600/25">
                Ücretsiz Teklif Alın — 30 dk Dönüş
              </Link>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp ile Hemen Yazın
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {['30 dk dönüş garantisi', 'Ücretsiz teklif', 'Taahhüt yok'].map((text) => (
                <div key={text} className="flex items-center gap-2 text-slate-400">
                  <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
