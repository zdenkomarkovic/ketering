import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tesasomi Solution - Profesionalni Ketering za Firme",
  description: "Specijalizovani smo za ishranu zaposlenih na terenu i u firmama. Dostavljamo obilne, sveže obroke u unapred dogovoreno vreme za sve tri smene.",
  keywords: [
    "ketering Aranđelovac",
    "ketering za firme",
    "ishrana zaposlenih",
    "dostava obroka",
    "ketering servis",
    "ketering na terenu",
    "ketering smene",
    "ketering Aranđelovac cene",
    "ketering firma",
    "ketering usluge",
    "ketering dostava",
    "ketering obroci",
    "ketering za zaposlene",
    "ketering teren",
    "ketering noćna smena",
    "ketering jutarnja smena",
    "ketering popodnevna smena",
    "ketering tradicionalna jela",
    "ketering salate",
    "ketering sendviči",
    "ketering zdravi obroci",
    "ketering kvalitet",
    "ketering sveže namirnice",
    "ketering fleksibilnost",
    "ketering dogovor",
    "ketering raspored",
    "ketering energija",
    "ketering produktivnost",
    "ketering Janka Kostića",
    "ketering Aranđelovac telefon",
    "ketering Aranđelovac kontakt",
    "Tesasomi Solution",
    "ketering Srbija",
    "ketering Šumadija",
    "ketering okolina Beograda"
  ],
  authors: [{ name: "Tesasomi Solution" }],
  creator: "Tesasomi Solution",
  publisher: "Tesasomi Solution",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tesasomi-solution.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Tesasomi Solution - Profesionalni Ketering za Firme",
    description: "Specijalizovani smo za ishranu zaposlenih na terenu i u firmama. Dostavljamo obilne, sveže obroke u unapred dogovoreno vreme za sve tri smene.",
    url: 'https://tesasomi-solution.com',
    siteName: 'Tesasomi Solution',
    locale: 'sr_RS',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tesasomi Solution - Profesionalni Ketering za Firme',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tesasomi Solution - Profesionalni Ketering za Firme",
    description: "Specijalizovani smo za ishranu zaposlenih na terenu i u firmama. Dostavljamo obilne, sveže obroke u unapred dogovoreno vreme za sve tri smene.",
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodService",
              "name": "Tesasomi Solution",
              "description": "Profesionalni ketering za firme i zaposlene na terenu. Dostavljamo obilne, sveže obroke u unapred dogovoreno vreme za sve tri smene.",
              "url": "https://tesasomi-solution.com",
              "logo": "https://tesasomi-solution.com/images/71906441_9756133.png",
              "image": "https://tesasomi-solution.com/images/og-image.jpg",
              "telephone": "+381-11-123-4567",
              "email": "info@tesasomi-solution.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Janka Kostića 123",
                "addressLocality": "Aranđelovac",
                "postalCode": "34300",
                "addressCountry": "RS"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.3069,
                "longitude": 20.5600
              },
              "openingHours": "Mo-Su 06:00-22:00",
              "priceRange": "$$",
              "servesCuisine": ["Traditional Serbian", "International", "Healthy"],
              "hasMenu": "https://tesasomi-solution.com/cenovnik",
              "sameAs": [
                "https://facebook.com/tesasomi",
                "https://instagram.com/tesasomi"
              ]
            })
          }}
        />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
