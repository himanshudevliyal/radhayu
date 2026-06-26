// app/layout.js
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

import QueryProvider from "@/providers/query-client-provider";
import Providers from "@/lib/povider";
import { NuqsProvider } from "@/providers/nuqs-provider";
import Layout from "@/components/layout/layout";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "700"],
});

const BASE_URL = "https://radhayuherbals.com";

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Radhayu Herbals – Authentic Ayurvedic Products Online India",
    template: "%s | Radhayu Herbals",
  },

  description:
    "Shop authentic Ayurvedic products at Radhayu Herbals — Churna, Capsules, Taila & Syrups crafted from 100% natural herbs. Trusted Ayurvedic solutions for digestion, piles, liver care & overall wellness. Free shipping above ₹1000.",

  keywords: [
    "Ayurvedic products online India",
    "herbal medicine online",
    "Radhayu Herbals",
    "natural Ayurvedic remedies",
    "Piles Taila",
    "Piles Care Capsule",
    "Swadisht Virechan Churna",
    "Avipattikar Churna",
    "Ayurvedic medicine for digestion",
    "liver care Ayurveda",
    "herbal wellness products",
    "buy Ayurvedic products",
    "Ayurveda India",
    "100% natural herbal products",
  ],

  authors: [{ name: "Radhayu Herbals", url: BASE_URL }],
  creator: "Radhayu Herbals",
  publisher: "Radhayu Herbals",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Radhayu Herbals",
    title: "Radhayu Herbals – Authentic Ayurvedic Products Online India",
    description:
      "Explore Radhayu Herbals' range of 100% natural Ayurvedic products — Churna, Capsules, Taila & more. Traditional herbal formulations for digestion, piles & holistic wellness.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Radhayu Herbals – Authentic Ayurvedic Products",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Radhayu Herbals – Authentic Ayurvedic Products Online India",
    description:
      "Shop 100% natural Ayurvedic Churna, Capsules, Taila & Syrups at Radhayu Herbals. Traditional herbal wellness solutions. Free shipping above ₹1000.",
    images: ["/logo.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Radhayu Herbals",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Radhayu Herbals offers authentic Ayurvedic products crafted from 100% natural herbal ingredients for holistic wellness.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "DPT 808B, F79 & 80, DLF Prime Tower, Industrial Area, Okhla Phase-1",
    addressLocality: "New Delhi",
    postalCode: "110020",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-97119-75094",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  email: "radhayuherbals@gmail.com",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Radhayu Herbals",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/products?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        <QueryProvider>
          <Providers>
            <NuqsProvider>
              <Layout>{children}</Layout>
            </NuqsProvider>
          </Providers>
        </QueryProvider>
      </body>
    </html>
  );
}
