import './globals.css';
import type { Metadata } from 'next';
import { siteMeta } from '@/constants/content';
import Providers from '@/components/common/Providers';

const BASE_URL = 'https://energyex.uk';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: siteMeta.title,
    template: '%s | Energyex',
  },
  description: siteMeta.description,
  openGraph: {
    siteName: 'Energyex',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Energyex',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: '/',
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Energyex',
  url: BASE_URL,
  description:
    'Independent UK energy broker helping businesses save on electricity, gas, water, solar, waste and facility services.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44-203-727-2588',
    email: 'info@energyex.uk',
    contactType: 'Customer Service',
    areaServed: 'GB',
    availableLanguage: 'English',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Suite 7 Airport House, Purley Way',
    addressLocality: 'Croydon',
    postalCode: 'CR0 0XZ',
    addressCountry: 'GB',
  },
  sameAs: ['https://linkedin.com'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
