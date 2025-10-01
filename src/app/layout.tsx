import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OrviumStudio - Desarrollo Web y Aplicaciones Web",
  description: "Especialistas en desarrollo web y aplicaciones web. Creamos sitios web modernos, e-commerce y aplicaciones web que impulsan tu negocio hacia el éxito digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Dawning+of+a+New+Day&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Limelight&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
