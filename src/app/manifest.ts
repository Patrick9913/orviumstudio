import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OrviumStudio - Desarrollo Web y Aplicaciones Web',
    short_name: 'OrviumStudio',
    description: 'Desarrollo web profesional en Buenos Aires. Creamos sitios web modernos, e-commerce y aplicaciones web personalizadas.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e40af',
  icons: [
    {
      src: '/icon-192.svg',
      sizes: '192x192',
      type: 'image/svg+xml',
      purpose: 'maskable'
    },
    {
      src: '/icon-512.svg',
      sizes: '512x512', 
      type: 'image/svg+xml',
      purpose: 'maskable'
    },
    {
      src: '/favicon.svg',
      sizes: 'any',
      type: 'image/svg+xml',
      purpose: 'any'
    },
  ],
    categories: ['business', 'productivity', 'technology'],
    lang: 'es',
    scope: '/',
  }
}
