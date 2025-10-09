import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StructuredData } from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "OrviumStudio - Desarrollo Web y Aplicaciones Web | Buenos Aires",
    template: "%s | OrviumStudio"
  },
  description: "Desarrollo web profesional en Buenos Aires. Creamos sitios web modernos, e-commerce y aplicaciones web personalizadas. Especialistas en React, Next.js y tecnologías de vanguardia.",
  keywords: [
    "desarrollo web",
    "aplicaciones web", 
    "sitios web",
    "e-commerce",
    "React",
    "Next.js",
    "Buenos Aires",
    "Argentina",
    "diseño web",
    "programación web",
    "OrviumStudio"
  ],
  authors: [{ name: "OrviumStudio" }],
  creator: "OrviumStudio",
  publisher: "OrviumStudio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://orviumstudio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://orviumstudio.com',
    title: 'OrviumStudio - Desarrollo Web y Aplicaciones Web',
    description: 'Desarrollo web profesional en Buenos Aires. Creamos sitios web modernos, e-commerce y aplicaciones web personalizadas.',
    siteName: 'OrviumStudio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OrviumStudio - Desarrollo Web Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OrviumStudio - Desarrollo Web y Aplicaciones Web',
    description: 'Desarrollo web profesional en Buenos Aires. Creamos sitios web modernos y aplicaciones web personalizadas.',
    images: ['/og-image.jpg'],
    creator: '@orviumstudio',
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
  verification: {
    google: 'google3a206e99a2b5d286',
    other: {
      'google-site-verification': 'google3a206e99a2b5d286'
    }
  },
  category: 'technology',
  classification: 'Business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
      {/* Favicon */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <link rel="apple-touch-icon" href="/icon-192.svg" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Meta tags adicionales para mejor soporte */}
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Dawning+of+a+New+Day&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Limelight&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}





