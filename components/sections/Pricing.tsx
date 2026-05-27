'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'
import { PRICING_TABS, LAUNCH_OFFER, getDiscountedPrice, buildPlanWhatsAppUrl } from '@/lib/constants'
import type { PricingPlan, PricingTab } from '@/types'

function PlanCard({ plan, serviceLabel }: { plan: PricingPlan; serviceLabel: string }) {
  const discountedPrice =
    LAUNCH_OFFER.active && plan.priceNumeric
      ? getDiscountedPrice(plan.priceNumeric)
      : undefined

  const whatsappUrl = buildPlanWhatsAppUrl(
    plan.name,
    serviceLabel,
    plan.price,
    discountedPrice,
  )

  return (
    <div className={`hs-plan${plan.popular ? ' hs-plan--popular' : ''}`}>
      <div className="hs-plan-badges">
        {plan.popular && (
          <span className="hs-plan-badge-popular">Más popular</span>
        )}
        {LAUNCH_OFFER.active && !plan.customQuote && (
          <span className={`hs-plan-badge-offer${plan.popular ? ' is-inverted' : ''}`}>
            <Zap className="w-3 h-3" strokeWidth={2.5} />
            25% off
          </span>
        )}
      </div>

      <div className="hs-plan-head">
        <h3>{plan.name}</h3>
        {plan.customQuote ? (
          <p className="hs-plan-custom">Cotización personalizada</p>
        ) : discountedPrice ? (
          <div>
            <span className="hs-plan-strike">{plan.price} CLP</span>
            <div className="hs-plan-price-row">
              <span className="hs-plan-price">{discountedPrice}</span>
              <span className="hs-plan-clp">CLP</span>
            </div>
          </div>
        ) : (
          <div className="hs-plan-price-row">
            <span className="hs-plan-price">{plan.price}</span>
            <span className="hs-plan-clp">CLP</span>
          </div>
        )}
      </div>

      <ul className="hs-plan-features">
        {plan.features.map((feature) => (
          <li key={feature}>
            <Check className="hs-plan-check w-4 h-4" strokeWidth={2.5} />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hs-plan-cta"
      >
        {plan.customQuote ? 'Cotizar este plan' : 'Elegir este plan'}
      </a>
    </div>
  )
}

function TabBtn({ tab, active, onClick }: { tab: PricingTab; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`hs-tab${active ? ' is-active' : ''}`}
    >
      {tab.label}
    </button>
  )
}

export function Pricing() {
  const [activeTab, setActiveTab] = useState<string>(PRICING_TABS[0].id)
  const currentTab = PRICING_TABS.find((t) => t.id === activeTab) ?? PRICING_TABS[0]

  return (
    <section id="pricing" className="hs-section hs-section--soft">
      <div className="hs-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hs-section-head is-center"
        >
          <span className="hs-eyebrow">Precios</span>
          <h2 className="hs-h2">Planes y precios</h2>
          {LAUNCH_OFFER.active ? (
            <div className="flex flex-col items-center gap-2">
              <div className="inline-flex items-center gap-2 bg-[var(--brand-light)] text-[var(--brand)] text-sm font-medium px-4 py-1.5 rounded-full">
                <Zap className="w-3.5 h-3.5" strokeWidth={2.5} />
                Oferta de lanzamiento: 25% de descuento para los primeros {LAUNCH_OFFER.spotsTotal} clientes
              </div>
              <p style={{ fontSize: '12px', color: 'var(--fg-soft)' }}>Válido hasta el {LAUNCH_OFFER.validUntil}</p>
            </div>
          ) : (
            <p className="hs-lead">Elige el plan que se adapta a tu negocio.</p>
          )}
        </motion.div>

        <div className="hs-tabs-wrap">
          <div className="hs-tabs">
            {PRICING_TABS.map((tab) => (
              <TabBtn
                key={tab.id}
                tab={tab}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="hs-plans-grid"
        >
          {currentTab.plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} serviceLabel={currentTab.label} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
