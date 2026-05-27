'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { PORQUE } from '@/lib/constants'
import type { LucideIcon } from 'lucide-react'

export function PorQue() {
  return (
    <section id="porque" className="hs-section">
      <div className="hs-container">
        <div className="hs-section-head is-center">
          <span className="hs-eyebrow">Por qué elegirnos</span>
          <h2 className="hs-h2">Construido diferente</h2>
          <p className="hs-lead">No somos una agencia tradicional. Somos el equipo técnico que necesitas.</p>
        </div>
        <div className="hs-grid-4">
          {PORQUE.map((item, i) => {
            const Icon = ((Icons as unknown) as Record<string, LucideIcon>)[item.iconName] ?? Icons.Zap
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="hs-feature"
              >
                <div className="hs-feature-icon">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="hs-h4">{item.title}</h3>
                <p className="hs-p-sm">{item.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
