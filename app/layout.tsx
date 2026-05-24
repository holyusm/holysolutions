import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Holy Solutions — Desarrollo web y software para empresas en Chile',
  description:
    'Páginas web, tiendas online y software a medida para pymes y emprendimientos en Chile. Cotiza en minutos por WhatsApp.',
  metadataBase: new URL('https://holysolutions.cl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Holy Solutions — Desarrollo web y software para empresas en Chile',
    description:
      'Páginas web, tiendas online y software a medida para pymes y emprendimientos en Chile.',
    url: 'https://holysolutions.cl',
    siteName: 'Holy Solutions',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Holy Solutions — Desarrollo web y software para empresas en Chile',
    description:
      'Páginas web, tiendas online y software a medida para pymes y emprendimientos en Chile.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
