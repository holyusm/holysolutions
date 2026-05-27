import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { LaunchBanner } from '@/components/LaunchBanner'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Holy Solutions',
  url: 'https://holysolutions.cl',
  email: 'holysolutions.cl@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Valparaíso',
    addressCountry: 'CL',
  },
  areaServed: 'CL',
  description: 'Desarrollo web y software a medida para pymes y emprendimientos en Chile.',
  priceRange: '$$$',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
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
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-flash: apply saved theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('hs_theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        {/* JSON-LD: LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* GA4 — only injected when NEXT_PUBLIC_GA_ID is set */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col">
        <LaunchBanner />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
