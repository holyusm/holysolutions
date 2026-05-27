'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Zap, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { NAV_LINKS, LAUNCH_OFFER, buildWhatsAppUrl } from '@/lib/constants'
import { ThemeToggle } from './ThemeToggle'

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const topOffset = LAUNCH_OFFER.active ? 40 : 0

  return (
    <header
      className={`hs-nav${scrolled ? ' is-scrolled' : ''}`}
      style={{ top: topOffset }}
    >
      <div className="hs-nav-inner">
        <Link href="/" className="hs-nav-brand">
          <span className="hs-logo-mark">
            <Zap className="w-4 h-4" strokeWidth={2.5} />
          </span>
          <span className="hs-nav-wordmark">Holy Solutions</span>
        </Link>

        <nav className="hs-nav-links" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hs-nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hs-nav-end">
          <ThemeToggle />
          <a
            href={buildWhatsAppUrl('Hola Holy Solutions, quiero cotizar un proyecto.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hs-btn hs-btn--primary hs-nav-cta"
          >
            {WA_ICON}
            Cotizar
          </a>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="hs-icon-btn hs-nav-burger"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="hs-mobile-menu">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="hs-mobile-link"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={buildWhatsAppUrl('Hola Holy Solutions, quiero cotizar un proyecto.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="hs-btn hs-btn--primary mt-2"
              >
                {WA_ICON}
                Cotizar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
