'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/constants'

function BrowserMockup() {
  return (
    <svg
      viewBox="0 0 480 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect width="480" height="320" rx="12" fill="#F8F9FA" />
      <rect width="480" height="32" rx="12" fill="#E5E7EB" />
      <rect y="20" width="480" height="12" fill="#E5E7EB" />
      <circle cx="16" cy="16" r="5" fill="#FF5F57" />
      <circle cx="32" cy="16" r="5" fill="#FEBC2E" />
      <circle cx="48" cy="16" r="5" fill="#28C840" />
      <rect x="72" y="9" width="280" height="14" rx="7" fill="#FFFFFF" />
      <rect x="80" y="48" width="320" height="14" rx="4" fill="#4F46E5" opacity="0.15" />
      <rect x="80" y="70" width="240" height="10" rx="3" fill="#E5E7EB" />
      <rect x="80" y="88" width="200" height="10" rx="3" fill="#E5E7EB" />
      <rect x="80" y="112" width="96" height="28" rx="6" fill="#4F46E5" />
      <rect x="184" y="112" width="80" height="28" rx="6" fill="#EEF2FF" />
      <rect x="80" y="156" width="320" height="120" rx="8" fill="#EEF2FF" />
      <rect x="96" y="172" width="288" height="8" rx="3" fill="#C7D2FE" />
      <rect x="96" y="188" width="240" height="8" rx="3" fill="#C7D2FE" />
      <rect x="96" y="204" width="200" height="8" rx="3" fill="#C7D2FE" />
      <circle cx="320" cy="220" r="28" fill="#4F46E5" opacity="0.08" />
      <rect x="96" y="220" width="160" height="8" rx="3" fill="#C7D2FE" />
      <rect x="96" y="236" width="120" height="8" rx="3" fill="#C7D2FE" />
      <rect x="80" y="292" width="320" height="6" rx="3" fill="#E5E7EB" />
    </svg>
  )
}

const fadeUpProps = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #eef2ff 0%, transparent 60%), radial-gradient(circle at 80% 20%, #f0fdf4 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(to right, #4f46e5 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <motion.div
              {...fadeUpProps(0)}
              className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-medium px-3 py-1.5 rounded-full w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              Desarrollo web para pymes chilenas
            </motion.div>

            <motion.h1
              {...fadeUpProps(0.1)}
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight"
            >
              Llevamos tu negocio
              <span className="text-brand"> al mundo digital</span>
            </motion.h1>

            <motion.p
              {...fadeUpProps(0.2)}
              className="text-lg text-gray-500 leading-relaxed"
            >
              Creamos páginas web, tiendas online y software a medida para
              empresas y emprendimientos en Chile. Rápido, profesional y sin complicaciones.
            </motion.p>

            <motion.div
              {...fadeUpProps(0.3)}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-white font-medium px-6 py-3 rounded-xl transition-colors duration-200"
              >
                Ver servicios
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={buildWhatsAppUrl('Hola Holy Solutions, quiero cotizar mi proyecto.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-brand hover:text-brand text-gray-700 font-medium px-6 py-3 rounded-xl transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                Cotizar ahora
              </a>
            </motion.div>

            <motion.div
              {...fadeUpProps(0.4)}
              className="flex items-center gap-4 pt-2"
            >
              <div className="flex -space-x-2">
                {['#4F46E5', '#059669', '#DC2626', '#D97706'].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-900">+40 clientes</span> satisfechos en Chile
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand/10 border border-gray-100">
              <BrowserMockup />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-brand/5 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-green-500/5 blur-2xl" />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="absolute -bottom-4 -left-6 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="#059669" className="w-4 h-4" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">Proyecto entregado</p>
                <p className="text-xs text-gray-500">en 7 días hábiles</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="absolute -top-4 -right-6 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3"
            >
              <p className="text-xs font-semibold text-gray-900">Respuesta en</p>
              <p className="text-lg font-bold text-brand">24 horas</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
