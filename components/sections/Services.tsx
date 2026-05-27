'use client'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

export function Services() {
  return (
    <section id="services" className="hs-section hs-section--soft">
      <div className="hs-container">
        <div className="hs-section-head">
          <span className="hs-eyebrow">Servicios</span>
          <h2 className="hs-h2">Todo lo que necesita tu negocio</h2>
          <p className="hs-lead">Desde una landing page hasta software empresarial a medida.</p>
        </div>
        <div className="hs-grid-3">
          {SERVICES.map((service, i) => {
            const Icon = ((Icons as unknown) as Record<string, LucideIcon>)[service.iconName] ?? Icons.Zap
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <a href="/#pricing" className="hs-service-card">
                  <div className="hs-service-head">
                    <div className="hs-service-icon">
                      <Icon className="w-6 h-6" strokeWidth={1.75} />
                    </div>
                    <span className="hs-service-price">{service.startingPrice}</span>
                  </div>
                  <h3 className="hs-h4">{service.name}</h3>
                  <p className="hs-p-sm">{service.description}</p>
                  <span className="hs-link hs-service-cta">
                    Ver planes <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
