'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { FAQ_TABS } from '@/lib/constants'

export function FAQTabs() {
  const [activeTab, setActiveTab] = useState(FAQ_TABS[0].id)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const currentItems = FAQ_TABS.find((t) => t.id === activeTab)?.items ?? []

  return (
    <section id="faq" className="hs-section hs-section--soft">
      <div className="hs-container" style={{ maxWidth: '860px' }}>
        <div className="hs-section-head is-center">
          <span className="hs-eyebrow">Preguntas frecuentes</span>
          <h2 className="hs-h2">Todo lo que necesitas saber</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hs-faq-card"
        >
          <div className="hs-faq-tabs">
            {FAQ_TABS.map((tab) => (
              <button
                key={tab.id}
                className={`hs-faq-tab${activeTab === tab.id ? ' is-active' : ''}`}
                onClick={() => { setActiveTab(tab.id); setOpenIndex(null) }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="hs-faq-list">
            {currentItems.map((item, i) => (
              <div key={i} className={`hs-faq-item${openIndex === i ? ' is-open' : ''}`}>
                <button
                  className="hs-faq-toggle"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  {item.q}
                  <Plus className="hs-faq-icon w-4 h-4" strokeWidth={2} />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="hs-faq-answer">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
