import { siteConfig } from '@/data/site-config';
import { FAQ } from '@/types';

/**
 * Generate Organization schema (site-wide, in root layout)
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.companyName,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      areaServed: 'TR',
      availableLanguage: 'Turkish',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.city,
      addressCountry: 'TR',
    },
    sameAs: [],
  };
}

/**
 * Generate LocalBusiness schema (homepage)
 * ProfessionalService subtype for fire safety training
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.companyName,
    url: siteConfig.domain,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    description:
      'İzmir\'de profesyonel yangın eğitimi, yangın tatbikatı, deprem eğitimi ve acil durum arama kurtarma eğitimi hizmetleri.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.city,
      addressRegion: 'İzmir',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.4192,
      longitude: 27.1287,
    },
    areaServed: {
      '@type': 'City',
      name: 'İzmir',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Yangın Güvenliği Eğitim Hizmetleri',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Yangın Eğitimi',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Yangın Eğitimi',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Yangın Tatbikatı',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Yangın Tatbikatı',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Deprem Eğitimi',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Deprem Eğitimi',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Acil Durum Arama Kurtarma Eğitimi',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Acil Durum Arama Kurtarma Eğitimi',
              },
            },
          ],
        },
      ],
    },
  };
}

/**
 * Generate FAQPage schema from FAQ items
 */
export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Service schema for service pages
 */
export function generateServiceSchema(serviceName: string, serviceUrl: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    name: serviceName,
    url: `${siteConfig.domain}${serviceUrl}`,
    description,
    provider: {
      '@type': 'ProfessionalService',
      name: siteConfig.companyName,
      url: siteConfig.domain,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.city,
        addressRegion: 'İzmir',
        addressCountry: 'TR',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'İzmir',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${siteConfig.domain}${serviceUrl}`,
      servicePhone: siteConfig.phone,
    },
  };
}

/**
 * Generate Service schema for district pages (local SEO variant)
 */
export function generateDistrictServiceSchema(
  districtName: string,
  districtSlug: string,
  description: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Yangın Eğitimi ve Tatbikatı',
    name: `${districtName} Yangın Eğitimi ve Tatbikatı`,
    url: `${siteConfig.domain}/${districtSlug}`,
    description,
    provider: {
      '@type': 'ProfessionalService',
      name: siteConfig.companyName,
      url: siteConfig.domain,
      telephone: siteConfig.phone,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: districtName,
      containedInPlace: {
        '@type': 'City',
        name: 'İzmir',
      },
    },
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.domain}${item.url}`,
    })),
  };
}
