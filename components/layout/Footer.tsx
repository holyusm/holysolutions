import type { ReactElement } from 'react'
import Link from 'next/link'
import { Zap } from 'lucide-react'
import {
  NAV_LINKS,
  SOCIALS,
  EMAIL,
  HOURS,
  LOCATION,
  LEGAL_OPERATOR,
  LEGAL_RUT,
  WHATSAPP_DISPLAY,
  buildWhatsAppUrl,
} from '@/lib/constants'

const SOCIAL_ICONS: Record<string, ReactElement> = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.91a8.16 8.16 0 0 0 4.77 1.52V7c-.01 0-1.65-.09-3-.31z" />
    </svg>
  ),
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="hs-footer">
      <div className="hs-container">
        <div className="hs-footer-grid">
          {/* Brand col */}
          <div className="hs-footer-col">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <span className="hs-logo-mark">
                <Zap className="w-4 h-4" strokeWidth={2.5} />
              </span>
              <span style={{ fontSize: '15.5px', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--fg)' }}>
                Holy Solutions
              </span>
            </Link>
            <p className="hs-footer-info">
              Desarrollo web y software para pymes y emprendimientos en Chile.
              <br />
              <strong>{LOCATION}</strong> · {HOURS}
            </p>
            <div className="hs-footer-social">
              {SOCIALS.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {SOCIAL_ICONS[s.id]}
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div className="hs-footer-col">
            <h4>Servicios</h4>
            <ul className="hs-footer-list">
              <li><Link href="/#services">Landing Page</Link></li>
              <li><Link href="/#services">Sitio Corporativo</Link></li>
              <li><Link href="/#services">Tienda Online</Link></li>
              <li><Link href="/#services">Software a Medida</Link></li>
              <li><Link href="/#services">Automatización IA</Link></li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="hs-footer-col">
            <h4>Empresa</h4>
            <ul className="hs-footer-list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              <li><Link href="/proyectos">Proyectos</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="hs-footer-col">
            <h4>Contacto</h4>
            <ul className="hs-footer-list">
              <li>
                <a
                  href={buildWhatsAppUrl('Hola Holy Solutions, necesito ayuda.')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hs-footer-bottom">
          <span>© {year} Holy Solutions — {LEGAL_OPERATOR} · RUT {LEGAL_RUT}</span>
          <div className="hs-footer-legal">
            <Link href="/terminos">Términos de servicio</Link>
            <Link href="/privacidad">Política de privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
