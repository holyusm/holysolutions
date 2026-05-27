'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight, Plus } from 'lucide-react'
import Link from 'next/link'
import { PROJECTS } from '@/lib/constants'
import type { Project } from '@/types'

export function ProjectCard({ project }: { project: Project }) {
  if (project.visible === false) {
    return (
      <div className="hs-project-placeholder">
        <Plus className="w-5 h-5 opacity-40" />
        <span>Próximo proyecto</span>
      </div>
    )
  }

  return (
    <div className="hs-project-card">
      <div className="hs-project-thumb" style={{ background: project.bgColor }}>
        <span style={{ fontSize: '13px', fontWeight: 700, color: project.accent ?? '#374151', letterSpacing: '-0.01em', textAlign: 'center', padding: '0 16px' }}>
          {project.name}
        </span>
      </div>
      <div className="hs-project-body">
        <div className="flex items-center justify-between gap-2">
          <h3 className="hs-h4">{project.name}</h3>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="hs-icon-btn shrink-0" aria-label="Ver proyecto">
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
        <p className="hs-p-sm" style={{ marginTop: 4 }}>{project.description}</p>
        <div className="flex flex-wrap gap-1.5" style={{ marginTop: 8 }}>
          {project.technologies.map(t => (
            <span key={t} className="hs-tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const featured = PROJECTS.find(p => p.featured)
  const rest = PROJECTS.filter(p => !p.featured)

  return (
    <section id="projects" className="hs-section">
      <div className="hs-container">
        <div className="hs-section-head">
          <span className="hs-eyebrow">Proyectos</span>
          <h2 className="hs-h2">Lo que hemos construido</h2>
          <p className="hs-lead">Una muestra real de nuestro trabajo.</p>
        </div>

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <div className="hs-project-featured">
              <div className="hs-project-featured-body">
                <span className="hs-tag">Proyecto destacado</span>
                <h3 className="hs-h3">{featured.name}</h3>
                <p className="hs-p">{featured.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {featured.technologies.map(t => (
                    <span key={t} className="hs-tech-tag">{t}</span>
                  ))}
                </div>
                {featured.url && (
                  <a href={featured.url} target="_blank" rel="noopener noreferrer" className="hs-btn hs-btn--secondary" style={{ width: 'fit-content' }}>
                    Ver sitio <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
              <div className="hs-project-featured-visual">
                <div>
                  <div className="hs-tjt-logo">TAJ<br />TAJ</div>
                  <div className="hs-tjt-sub">Transportes · Carga Pesada</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="hs-grid-3">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <Link href="/proyectos" className="hs-btn hs-btn--secondary">
            Ver todos los proyectos
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
