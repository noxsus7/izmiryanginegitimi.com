import { Service } from '@/types';

export const services: Service[] = [
  {
    slug: 'yangin-egitimi',
    title: 'Yangın Eğitimi',
    shortTitle: 'Yangın Eğitimi',
    description:
      'Personelinizin yangın anında doğru müdahale edebilmesini sağlayan uygulamalı eğitim programı. Söndürücü kullanımı, tahliye prosedürleri ve ilk müdahale becerileri kazandırılır.',
    icon: 'fire',
    metaTitle: 'Yangın Eğitimi İzmir | Yerinde Uygulamalı Yangın Güvenliği Eğitimi',
    metaDescription:
      'İzmir\'de işletmelere özel profesyonel yangın eğitimi. Yerinde eğitim, katılım belgesi ve tatbikat raporu dahil. 6331 Sayılı Kanun uyumlu. Hemen teklif alın.',
  },
  {
    slug: 'yangin-tatbikati',
    title: 'Yangın Tatbikatı',
    shortTitle: 'Yangın Tatbikatı',
    description:
      'İşletmenizin tahliye sürecindeki eksikleri ortaya çıkaran ve çözüm üreten gerçek senaryo tatbikatları. Detaylı tatbikat raporu ve iyileştirme planı ile denetimlere hazır olun.',
    icon: 'shield',
    metaTitle: 'Yangın Tatbikatı İzmir | Gerçek Senaryolu Tahliye Tatbikatı',
    metaDescription:
      'İzmir\'de profesyonel yangın tatbikatı hizmeti. Gerçek senaryolarla tahliye tatbikatı, tatbikat raporu ve iyileştirme planı dahil. Hemen teklif alın.',
  },
  {
    slug: 'deprem-egitimi',
    title: 'Deprem Eğitimi',
    shortTitle: 'Deprem Eğitimi',
    description:
      'Deprem anında paniğe kapılmadan doğru hareket edebilen, tahliye prosedürlerini bilen ve ilk yardım uygulayabilen personel yetiştirin. Katılım belgesi dahil.',
    icon: 'tremor',
    metaTitle: 'Deprem Eğitimi İzmir | Kurumsal Deprem Hazırlık Eğitimi',
    metaDescription:
      'İzmir\'de kurumsal deprem eğitimi. Deprem anında doğru davranış, tahliye ve ilk yardım eğitimi. Katılım belgesi ve tatbikat raporu dahil.',
  },
  {
    slug: 'acil-durum-arama-kurtarma-egitimi',
    title: 'Acil Durum Arama Kurtarma Eğitimi',
    shortTitle: 'Arama Kurtarma',
    description:
      'Afet veya endüstriyel kaza sonrası ilk müdahale kapasitesine sahip ekipler oluşturun. Kurtarma teknikleri, ekipman kullanımı ve koordinasyon becerileri kazandırılır.',
    icon: 'rescue',
    metaTitle: 'Acil Durum Arama Kurtarma Eğitimi İzmir | Saha Uygulamalı',
    metaDescription:
      'İzmir\'de acil durum arama kurtarma eğitimi. Afet müdahale, ekipman kullanımı ve kurtarma teknikleri. Uzman kadro ve sertifika dahil.',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
