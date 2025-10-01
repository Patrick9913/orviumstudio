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
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'productivity', 'technology'],
    lang: 'es',
    scope: '/',
  }
}
