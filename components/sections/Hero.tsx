'use client'

import { motion } from 'framer-motion'
import { Zap, Check, Clock } from 'lucide-react'
import Link from 'next/link'
import { buildWhatsAppUrl } from '@/lib/constants'

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const TRUST_ITEMS = [
  'Stack moderno',
  'Precio en CLP',
  '100% remoto',
  'Sansanos USM',
] as const

type TermLine =
  | { type: 'blank' }
  | { type: 'code'; nodes: React.ReactNode }

function G({ n }: { n: number }) {
  return <span className="hs-term-gutter">{n}</span>
}

function TerminalCode() {
  const lines: TermLine[] = [
    {
      type: 'code',
      nodes: (
        <>
          <span className="hs-syn-key">import</span>
          {' { '}
          <span className="hs-syn-fn">HolySolutions</span>
          {' } '}
          <span className="hs-syn-key">from</span>
          {' '}
          <span className="hs-syn-str">'./stack'</span>
        </>
      ),
    },
    {
      type: 'code',
      nodes: (
        <>
          <span className="hs-syn-key">import</span>
          {' '}
          <span className="hs-syn-key">type</span>
          {' { '}
          <span className="hs-syn-fn">Proyecto</span>
          {' } '}
          <span className="hs-syn-key">from</span>
          {' '}
          <span className="hs-syn-str">'./types'</span>
        </>
      ),
    },
    { type: 'blank' },
    {
      type: 'code',
      nodes: (
        <>
          <span className="hs-syn-key">const</span>
          {' config: '}
          <span className="hs-syn-fn">Proyecto</span>
          {' = {'}
        </>
      ),
    },
    {
      type: 'code',
      nodes: (
        <>
          {'  '}
          <span className="hs-syn-prop">tipo</span>
          {':     '}
          <span className="hs-syn-str">'landing'</span>
          {','}
        </>
      ),
    },
    {
      type: 'code',
      nodes: (
        <>
          {'  '}
          <span className="hs-syn-prop">plazo</span>
          {':    '}
          <span className="hs-syn-str">'7 días hábiles'</span>
          {','}
        </>
      ),
    },
    {
      type: 'code',
      nodes: (
        <>
          {'  '}
          <span className="hs-syn-prop">precio</span>
          {':   '}
          <span className="hs-syn-str">'$150.000 CLP'</span>
          {','}
        </>
      ),
    },
    {
      type: 'code',
      nodes: (
        <>
          {'  '}
          <span className="hs-syn-prop">cliente</span>
          {':  '}
          <span className="hs-syn-str">'Mi Empresa SpA'</span>
          {','}
        </>
      ),
    },
    {
      type: 'code',
      nodes: <>{'}'}</>,
    },
    { type: 'blank' },
    {
      type: 'code',
      nodes: (
        <>
          <span className="hs-syn-com">{'// Lanzamos en producción'}</span>
        </>
      ),
    },
    {
      type: 'code',
      nodes: (
        <>
          <span className="hs-syn-key">const</span>
          {' sitio = '}
          <span className="hs-syn-key">await</span>
          {' '}
          <span className="hs-syn-fn">HolySolutions</span>
        </>
      ),
    },
    {
      type: 'code',
      nodes: (
        <>
          {'  .'}
          <span className="hs-syn-fn">build</span>
          {'(config)'}
        </>
      ),
    },
    { type: 'blank' },
    {
      type: 'code',
      nodes: (
        <>
          <span className="hs-syn-com">{'// ✓ Deploy → holysolutions.cl'}</span>
          <span className="hs-term-cursor" />
        </>
      ),
    },
  ]

  return (
    <div className="hs-term-body">
      {lines.map((line, i) => (
        <div className="hs-term-line" key={i}>
          <G n={i + 1} />
          {line.type === 'code' ? <span>{line.nodes}</span> : null}
        </div>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section className="hs-hero">
      <div className="hs-hero-bg" aria-hidden="true" />
      <div className="hs-hero-grid" aria-hidden="true" />

      <div className="hs-container">
        <div className="hs-hero-inner">

          {/* LEFT: copy */}
          <motion.div
            className="hs-hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <span className="hs-eyebrow">
              <span
                className="hs-pulse-dot"
                style={{
                  display: 'inline-block',
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: 'var(--success)',
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
              Disponible para nuevos proyectos
            </span>

            {/* Headline */}
            <h1 className="hs-h1">
              Tu negocio, online y funcionando
            </h1>

            {/* Lead */}
            <p className="hs-lead">
              Somos sansanos USM. Construimos páginas web, tiendas online y software a medida para
              pymes y emprendimientos en Chile. Rápido, profesional y sin letras chicas.
            </p>

            {/* CTAs */}
            <div className="hs-hero-ctas">
              <Link href="/#cotizador" className="hs-btn hs-btn--primary hs-btn--lg">
                <Zap className="w-4 h-4" aria-hidden="true" />
                Cotizar gratis
              </Link>
              <a
                href={buildWhatsAppUrl('Hola Holy Solutions, quiero cotizar mi proyecto.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hs-btn hs-btn--secondary hs-btn--lg"
              >
                {WA_ICON}
                Hablar por WhatsApp
              </a>
            </div>

            {/* Trustbar */}
            <div className="hs-trustbar">
              {TRUST_ITEMS.map((item, i) => (
                <>
                  {i > 0 && <span className="hs-trustbar-dot" aria-hidden="true" />}
                  <span className="hs-trustbar-item" key={item}>
                    <span className="hs-trustbar-icon">
                      <Check className="w-3 h-3" aria-hidden="true" />
                    </span>
                    {item}
                  </span>
                </>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: terminal */}
          <motion.div
            className="hs-terminal-wrap hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hs-terminal">
              <div className="hs-term-tabbar">
                <div className="hs-term-dots">
                  <span className="hs-term-dot" />
                  <span className="hs-term-dot" />
                  <span className="hs-term-dot" />
                </div>
                <span className="hs-term-tab is-active">proyecto.ts</span>
              </div>
              <TerminalCode />
            </div>

            {/* Stat: top-right */}
            <motion.div
              className="hs-hero-stat hs-hero-stat--tr"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="hs-hero-stat-icon">
                <Clock className="w-4 h-4" aria-hidden="true" />
              </span>
              <div>
                <p className="hs-hero-stat-title">Respuesta</p>
                <p className="hs-hero-stat-val">{'< 24 horas'}</p>
              </div>
            </motion.div>

            {/* Stat: bottom-left */}
            <motion.div
              className="hs-hero-stat hs-hero-stat--bl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="hs-hero-stat-icon">
                <Check className="w-4 h-4" aria-hidden="true" />
              </span>
              <div>
                <p className="hs-hero-stat-title">Proyectos entregados</p>
                <p className="hs-hero-stat-val">En tiempo</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
