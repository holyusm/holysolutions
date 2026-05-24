'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ProjectCard } from '@/components/sections/Projects'
import { PROJECTS } from '@/lib/constants'
import type { ServiceType } from '@/types'

type FilterType = ServiceType | 'all'

const FILTERS: { id: FilterType; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'landing', label: 'Landing Page' },
  { id: 'corporate', label: 'Sitio Corporativo' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'software', label: 'Software' },
  { id: 'automation', label: 'IA' },
]

export default function ProyectosPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const filtered =
    activeFilter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.type === activeFilter)

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Todos los proyectos
              </h1>
              <p className="mt-3 text-gray-500">
                Una muestra de lo que hemos construido para nuestros clientes en Chile
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-brand text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>

            {filtered.length === 0 && (
              <div className="text-center py-16 text-gray-400">
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
