'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ProjectCard } from '@/components/sections/Projects'
import { PROJECTS, LAUNCH_OFFER } from '@/lib/constants'
import type { ServiceType } from '@/types'

type FilterType = ServiceType | 'all'

const FILTERS: { id: FilterType; label: string }[] = [
  { id: 'all',         label: 'Todos' },
  { id: 'landing',     label: 'Landing Page' },
  { id: 'corporate',   label: 'Sitio Corporativo' },
  { id: 'ecommerce',   label: 'E-commerce' },
  { id: 'software',    label: 'Software' },
  { id: 'automation',  label: 'IA' },
]

export default function ProyectosPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const visible = PROJECTS.filter((p) => p.visible !== false)
  const filtered = activeFilter === 'all' ? visible : visible.filter((p) => p.type === activeFilter)

  return (
    <>
      <Navbar />
      <main className={`flex-1 ${LAUNCH_OFFER.active ? 'pt-[108px]' : 'pt-[68px]'}`}>
        <section className="hs-section">
          <div className="hs-container">
            <div className="hs-section-head">
              <span className="hs-eyebrow">Portafolio</span>
              <h1 className="hs-h2">Todos los proyectos</h1>
              <p className="hs-lead">Una muestra de lo que hemos construido para nuestros clientes en Chile.</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`hs-tab${activeFilter === filter.id ? ' is-active' : ''}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="hs-grid-3"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>

            {filtered.length === 0 && (
              <div className="text-center py-16" style={{ color: 'var(--fg-soft)' }}>
                No hay proyectos en esta categoría todavía.
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
