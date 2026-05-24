'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { PROJECTS } from '@/lib/constants'
import type { Project } from '@/types'

const SERVICE_LABELS: Record<string, string> = {
  landing: 'Landing Page',
  corporate: 'Sitio Corporativo',
  ecommerce: 'Tienda Online',
  software: 'Software a Medida',
  automation: 'Automatización IA',
}

const BADGE_COLORS: Record<string, string> = {
  landing: 'bg-blue-50 text-blue-700',
  corporate: 'bg-purple-50 text-purple-700',
  ecommerce: 'bg-green-50 text-green-700',
  software: 'bg-indigo-50 text-indigo-700',
  automation: 'bg-amber-50 text-amber-700',
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-lg transition-all duration-300">
      <div
        className="h-44 flex items-center justify-center"
        style={{ backgroundColor: project.bgColor }}
        aria-hidden="true"
      >
        <div className="w-32 h-20 rounded-lg bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm">
          <div className="w-20 h-3 rounded-full bg-white/80" />
        </div>
      </div>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">{project.name}</h3>
            <p className="text-xs text-gray-400 mt-0.5">{project.client}</p>
          </div>
          <span
            className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${BADGE_COLORS[project.type]}`}
          >
            {SERVICE_LABELS[project.type]}
          </span>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded-md border border-gray-100"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          disabled
          className="mt-2 flex items-center gap-1.5 text-sm font-medium text-gray-400 cursor-not-allowed"
          aria-disabled="true"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Ver proyecto
        </button>
      </div>
    </div>
  )
}

export function Projects() {
  const featured = PROJECTS.slice(0, 6)

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Proyectos recientes
            </h2>
            <p className="mt-2 text-gray-500">Algunos de los proyectos que hemos construido</p>
          </div>
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:gap-2.5 transition-all duration-200 shrink-0"
          >
            Ver todos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 border border-gray-200 hover:border-brand hover:text-brand text-gray-700 font-medium px-6 py-3 rounded-xl transition-colors duration-200"
          >
            Ver todos los proyectos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
