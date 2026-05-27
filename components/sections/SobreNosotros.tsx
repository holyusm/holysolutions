'use client'

import { motion } from 'framer-motion'
import { SOBRE } from '@/lib/constants'

export function SobreNosotros() {
  return (
    <section id="sobre" className="hs-section hs-section--soft">
      <div className="hs-container">
        <div className="hs-two-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hs-eyebrow">Quiénes somos</span>
            <h2 className="hs-h2">{SOBRE.title}</h2>
            <p className="hs-p">{SOBRE.body}</p>
            <div className="hs-pill-row">
              {SOBRE.pills.map((pill) => (
                <span key={pill} className="hs-pill">
                  <span className="hs-pill-dot" />
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hs-info-card">
              <div className="hs-info-stat">
                <span className="hs-info-stat-label">Ubicación</span>
                <span className="hs-info-stat-value">Valparaíso, Chile</span>
              </div>
              <div className="hs-info-stat">
                <span className="hs-info-stat-label">Universidad</span>
                <span className="hs-info-stat-value">USM</span>
              </div>
              <div className="hs-info-stat">
                <span className="hs-info-stat-label">Modalidad</span>
                <span className="hs-info-stat-value">100% remoto</span>
              </div>
              <div className="hs-info-stat">
                <span className="hs-info-stat-label">Atención</span>
                <span className="hs-info-stat-value">10:00 – 22:00 hrs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
