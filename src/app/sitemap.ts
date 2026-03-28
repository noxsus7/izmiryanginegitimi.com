import type { MetadataRoute } from 'next';

const BASE_URL = 'https://yanginegitimiizmir.com';

/* All 30 İzmir district slugs */
const districtSlugs = [
  'aliaga-yangin-egitimi',
  'balcova-yangin-egitimi',
  'bayindir-yangin-egitimi',
  'bayrakli-yangin-egitimi',
  'bergama-yangin-egitimi',
  'beydag-yangin-egitimi',
  'bornova-yangin-egitimi',
  'buca-yangin-egitimi',
  'cesme-yangin-egitimi',
  'cigli-yangin-egitimi',
  'dikili-yangin-egitimi',
  'foca-yangin-egitimi',
  'gaziemir-yangin-egitimi',
  'guzelbahce-yangin-egitimi',
  'karabaglar-yangin-egitimi',
  'karaburun-yangin-egitimi',
  'karsiyaka-yangin-egitimi',
  'kemalpasa-yangin-egitimi',
  'kinik-yangin-egitimi',
  'kiraz-yangin-egitimi',
  'konak-yangin-egitimi',
  'menderes-yangin-egitimi',
  'menemen-yangin-egitimi',
  'narlidere-yangin-egitimi',
  'odemis-yangin-egitimi',
  'seferihisar-yangin-egitimi',
  'selcuk-yangin-egitimi',
  'tire-yangin-egitimi',
  'torbali-yangin-egitimi',
  'urla-yangin-egitimi',
];

/* Service page slugs */
const serviceSlugs = [
  'yangin-egitimi',
  'yangin-tatbikati',
  'deprem-egitimi',
  'acil-durum-arama-kurtarma-egitimi',
];

/* Legal page slugs */
const legalSlugs = [
  'kvkk-aydinlatma-metni',
  'kullanici-sozlesmesi',
  'cerez-politikasi',
  'gizlilik-politikasi',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  /* ── Core pages (highest priority) ── */
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/hakkimizda`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/iletisim`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  /* ── Service pages (high priority) ── */
  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  /* ── District pages (medium-high priority, local SEO) ── */
  const districtPages: MetadataRoute.Sitemap = districtSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  /* ── Legal pages (low priority) ── */
  const legalPages: MetadataRoute.Sitemap = legalSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  return [...corePages, ...servicePages, ...districtPages, ...legalPages];
}
