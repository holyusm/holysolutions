'use client'
import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { buildWhatsAppUrl, LAUNCH_OFFER } from '@/lib/constants'

export function CtaFinal() {
  return (
    <section className="hs-section">
      <div className="hs-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hs-cta-final"
        >
          <div className="hs-cta-final-bg" aria-hidden="true" />
          <div className="hs-cta-final-content">
            <span className="hs-eyebrow">¿Listo para empezar?</span>
            <h2 className="hs-h2">Tu próximo proyecto empieza hoy</h2>
            <p className="hs-lead" style={{ maxWidth: '520px' }}>
              Cuéntanos tu idea y en menos de 24 horas tienes una cotización. Sin costo, sin compromiso.
            </p>
            {LAUNCH_OFFER.active && (
              <div
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full"
                style={{ background: 'var(--brand-light)', color: 'var(--brand)' }}
              >
                <Zap className="w-3.5 h-3.5" strokeWidth={2.5} />
                {LAUNCH_OFFER.label}: 25% de descuento hasta el {LAUNCH_OFFER.validUntil}
              </div>
            )}
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="/#cotizador" className="hs-btn hs-btn--primary hs-btn--lg">
                Cotizar gratis
              </a>
              <a
                href={buildWhatsAppUrl('Hola Holy Solutions, quiero cotizar un proyecto.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hs-btn hs-btn--secondary hs-btn--lg"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
