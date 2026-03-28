import { SiteConfig, NavItem } from '@/types';

export const siteConfig: SiteConfig = {
  companyName: 'İzmir Yangın Eğitimi',
  domain: 'https://yanginegitimiizmir.com',
  phone: '+90 539 598 32 73',
  whatsapp: '905395983273',
  email: 'info@yanginegitimiizmir.com',
  address: 'İzmir, Türkiye',
  city: 'İzmir',
  socialMedia: {
    instagram: '#',
    facebook: '#',
    linkedin: '#',
  },
};

export const navigation: NavItem[] = [
  { label: 'Ana Sayfa', href: '/' },
  {
    label: 'Hizmetlerimiz',
    href: '#',
    children: [
      { label: 'Yangın Eğitimi', href: '/yangin-egitimi' },
      { label: 'Yangın Tatbikatı', href: '/yangin-tatbikati' },
      { label: 'Deprem Eğitimi', href: '/deprem-egitimi' },
      { label: 'Acil Durum Arama Kurtarma', href: '/acil-durum-arama-kurtarma-egitimi' },
    ],
  },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'İletişim', href: '/iletisim' },
];

export const employeeCountOptions = [
  '1-10',
  '11-50',
  '51-200',
  '200+',
];

export const sectorOptions = [
  'Fabrika / Üretim',
  'Otel / Konaklama',
  'Okul / Eğitim Kurumu',
  'Ofis / İş Merkezi',
  'Depo / Lojistik',
  'Restoran / Yeme-İçme',
  'Site Yönetimi',
  'AVM / Mağaza',
  'Hastane / Sağlık',
  'Diğer',
];
