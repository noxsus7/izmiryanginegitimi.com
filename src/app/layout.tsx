import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import MobileStickyBar from '@/components/ui/MobileStickyBar';
import JsonLd from '@/components/seo/JsonLd';
import { generateOrganizationSchema } from '@/lib/schemas';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'İzmir Yangın Eğitimi | Yangın Tatbikatı ve Acil Durum Eğitimi',
    template: '%s | İzmir Yangın Eğitimi',
  },
  description:
    'İzmir\'de profesyonel yangın eğitimi, yangın tatbikatı, deprem eğitimi ve acil durum arama kurtarma eğitimi. Yerinde eğitim, katılım belgesi ve tatbikat raporu dahil. Hemen teklif alın.',
  keywords: [
    'yangın eğitimi',
    'yangın tatbikatı',
    'İzmir yangın eğitimi',
    'deprem eğitimi',
    'acil durum eğitimi',
    'yangın güvenliği',
    'iş güvenliği eğitimi',
  ],
  authors: [{ name: 'İzmir Yangın Eğitimi' }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://yanginegitimiizmir.com',
    siteName: 'İzmir Yangın Eğitimi',
    title: 'İzmir Yangın Eğitimi | Yangın Tatbikatı ve Acil Durum Eğitimi',
    description:
      'İzmir ve tüm ilçelerinde profesyonel yangın eğitimi, tatbikat ve acil durum eğitimi hizmetleri.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İzmir Yangın Eğitimi',
    description:
      'İzmir\'de profesyonel yangın eğitimi ve tatbikat hizmeti. Hemen teklif alın.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://yanginegitimiizmir.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col pb-[70px] md:pb-0">
        <JsonLd data={generateOrganizationSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileStickyBar />
      </body>
    </html>
  );
}
