'use client'
import { motion } from 'framer-motion'
import { STEPS, buildWhatsAppUrl } from '@/lib/constants'

export function HowItWorks() {
  return (
    <section id="how" className="hs-section">
      <div className="hs-container">
        <div className="hs-section-head is-center">
          <span className="hs-eyebrow">Cómo trabajamos</span>
          <h2 className="hs-h2">Simple y sin vueltas</h2>
          <p className="hs-lead">De la idea al lanzamiento en tres pasos.</p>
        </div>
        <div className="hs-steps">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="hs-step"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="hs-step-num">{step.number}</span>
              <h3 className="hs-h4">{step.title}</h3>
              <p className="hs-p-sm">{step.description}</p>
              <span className="hs-step-line" aria-hidden="true" />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={buildWhatsAppUrl('Hola Holy Solutions, quiero empezar un proyecto.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hs-btn hs-btn--primary"
          >
            Empezar ahora
          </a>
        </motion.div>
      </div>
    </section>
  )
}
