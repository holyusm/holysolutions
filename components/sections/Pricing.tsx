'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { PRICING_TABS, buildPlanWhatsAppUrl } from '@/lib/constants'
import type { PricingPlan, PricingTab } from '@/types'

function PlanCard({ plan, serviceLabel }: { plan: PricingPlan; serviceLabel: string }) {
  const whatsappUrl = buildPlanWhatsAppUrl(plan.name, serviceLabel, plan.price)

  return (
    <div
      className={`relative flex flex-col gap-6 rounded-2xl border p-7 transition-all duration-200 ${
        plan.popular
          ? 'border-brand bg-brand text-white shadow-xl shadow-brand/20'
          : 'border-gray-100 bg-white hover:border-brand/30 hover:shadow-md'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-amber-400 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            Más popular
          </span>
        </div>
      )}

      <div>
        <h3 className={`font-semibold text-base ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>
          {plan.name}
        </h3>
        {plan.customQuote ? (
          <p className={`mt-2 text-2xl font-bold tracking-tight ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
            Cotización personalizada
          </p>
        ) : (
          <div className="mt-2 flex items-baseline gap-1">
            <span className={`text-3xl font-bold tracking-tight ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
              {plan.price}
            </span>
            <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-gray-400'}`}>CLP</span>
          </div>
        )}
      </div>

      <ul className="flex flex-col gap-2.5 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <Check
              className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? 'text-white/80' : 'text-brand'}`}
              strokeWidth={2.5}
            />
            <span className={`text-sm leading-relaxed ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-2 flex items-center justify-center gap-2 font-medium text-sm px-5 py-2.5 rounded-xl transition-colors duration-200 ${
          plan.popular
            ? 'bg-white text-brand hover:bg-white/90'
            : 'bg-brand text-white hover:bg-brand-hover'
        }`}
      >
        {plan.customQuote ? 'Cotizar este plan' : 'Elegir este plan'}
      </a>
    </div>
  )
}

function TabButton({
  tab,
  active,
  onClick,
}: {
  tab: PricingTab
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
        active
          ? 'bg-brand text-white shadow-sm'
          : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
      }`}
    >
      {tab.label}
    </button>
  )
}

export function Pricing() {
  const [activeTab, setActiveTab] = useState<string>(PRICING_TABS[0].id)
  const currentTab = PRICING_TABS.find((t) => t.id === activeTab) ?? PRICING_TABS[0]

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Planes y precios
          </h2>
          <p className="mt-3 text-gray-500">Elige el plan que se adapta a tu negocio</p>
        </motion.div>

        <div className="flex items-center justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-1.5 bg-gray-100 p-1.5 rounded-xl">
            {PRICING_TABS.map((tab) => (
              <TabButton
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
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
        >
          {currentTab.plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} serviceLabel={currentTab.label} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
