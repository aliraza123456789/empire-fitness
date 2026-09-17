import type { Metadata, Viewport } from 'next';
import { Archivo, Inter_Tight } from 'next/font/google';
import { contact, site } from '@/lib/content';
import './globals.css';

/**
 * Archivo is loaded as a variable font so headings can be narrowed to
 * width 85 — athletic and condensed without reaching for a stock gym face.
 */
const display = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Empire Fitness — Premium strength & conditioning club',
    template: '%s | Empire Fitness',
  },
  description: site.description,
  keywords: [
    'Empire Fitness',
    'gym',
    'strength training',
    'personal training',
    'fitness club',
    'Rawalpindi gym',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: 'Empire Fitness — Build your empire',
    description: site.description,
    images: [
      {
        url: '/images/reception.webp',
        width: 1360,
        height: 1020,
        alt: 'The Empire Fitness reception, gold lettering on a fluted charcoal wall',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Empire Fitness — Build your empire',
    description: site.description,
    images: ['/images/reception.webp'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#08090A',
  colorScheme: 'dark',
};

/** Structured data so Google can show hours, location and pricing. */
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HealthClub',
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/images/reception.webp`,
  telephone: contact.phone,
  email: contact.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: contact.address[1],
    addressLocality: 'Rawalpindi',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '05:00',
      closes: '23:00',
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '07:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '08:00', closes: '20:00' },
  ],
  amenityFeature: [
    'Strength training',
    'Cardio zone',
    'Free weights',
    'Functional training',
    'Personal training',
    'Locker rooms',
  ].map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
