'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { MAINTENANCE_PLANS, formatCLP } from '@/lib/constants'
import type { MaintPlan } from '@/types'

function MaintCard({ plan }: { plan: MaintPlan }) {
  return (
    <div className={`hs-maint-card${plan.popular ? ' hs-maint-card--popular' : ''}`}>
      {plan.popular && (
        <span
          className="hs-plan-badge-popular"
          style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}
        >
          Más popular
        </span>
      )}
      <span className="hs-maint-name">{plan.name}</span>
      <div className="hs-maint-price">
        {formatCLP(plan.priceNumeric)}<span className="hs-maint-price-unit">/mes</span>
      </div>
      <ul className="hs-plan-features">
        {plan.features.map((f) => (
          <li key={f}><Check className="hs-plan-check w-4 h-4" strokeWidth={2.5} />{f}</li>
        ))}
      </ul>
      <a href="#cotizador" className="hs-plan-cta">Contratar mantención</a>
    </div>
  )
}

export function Mantencion() {
  return (
    <section id="mantencion" className="hs-section">
      <div className="hs-container">
        <div className="hs-section-head is-center">
          <span className="hs-eyebrow">Mantención</span>
          <h2 className="hs-h2">Tu sitio siempre funcionando</h2>
          <p className="hs-lead">Hosting, cambios y soporte mensual. Tú te preocupas del negocio, nosotros del sitio.</p>
        </div>
        <div className="hs-grid-3">
          {MAINTENANCE_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <MaintCard plan={plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
