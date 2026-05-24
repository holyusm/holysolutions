'use client'

import { motion } from 'framer-motion'
import { LayoutTemplate, Building2, ShoppingBag, Code2, Bot, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import type { Service } from '@/types'

const ICONS: Record<string, React.ReactNode> = {
  LayoutTemplate: <LayoutTemplate className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Bot: <Bot className="w-6 h-6" />,
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group flex flex-col gap-4 bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-light text-brand">
          {ICONS[service.iconName]}
        </div>
        <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">
          {service.startingPrice}
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="font-semibold text-gray-900 text-base">{service.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
      </div>

      <a
        href="#pricing"
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:gap-2.5 transition-all duration-200"
      >
        Ver planes
        <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            ¿Qué hacemos?
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Soluciones digitales completas para cada etapa de tu negocio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
