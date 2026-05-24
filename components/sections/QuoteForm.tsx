'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutTemplate, Building2, ShoppingBag, Code2, Bot, HelpCircle, ChevronLeft } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/constants'
import type { ServiceType } from '@/types'

const DEADLINE_LABELS: Record<string, string> = {
  asap: 'Lo antes posible',
  '1month': 'Dentro de 1 mes',
  '2-3months': '2 a 3 meses',
  noRush: 'Sin apuro',
}

const SERVICE_OPTIONS: { id: ServiceType | 'unsure'; label: string; icon: React.ReactNode }[] = [
  { id: 'landing', label: 'Landing Page', icon: <LayoutTemplate className="w-6 h-6" /> },
  { id: 'corporate', label: 'Sitio Corporativo', icon: <Building2 className="w-6 h-6" /> },
  { id: 'ecommerce', label: 'Tienda Online', icon: <ShoppingBag className="w-6 h-6" /> },
  { id: 'software', label: 'Software a Medida', icon: <Code2 className="w-6 h-6" /> },
  { id: 'automation', label: 'Automatización con IA', icon: <Bot className="w-6 h-6" /> },
  { id: 'unsure', label: 'No estoy seguro aún', icon: <HelpCircle className="w-6 h-6" /> },
]

const step2Schema = z.object({
  businessName: z.string().min(1, 'El nombre es requerido'),
  businessDescription: z
    .string()
    .min(1, 'La descripción es requerida')
    .max(200, 'Máximo 200 caracteres'),
  deadline: z.enum(['asap', '1month', '2-3months', 'noRush']),
  reference: z.string().optional(),
})

const step3Schema = z.object({
  contactName: z.string().min(1, 'Tu nombre es requerido'),
  contactPhone: z
    .string()
    .min(8, 'Ingresa un número válido')
    .max(12, 'Número demasiado largo')
    .regex(/^\d+$/, 'Solo números'),
})

type Step2Data = z.infer<typeof step2Schema>
type Step3Data = z.infer<typeof step3Schema>

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex-1 flex flex-col gap-1.5">
          <div
            className={`h-1.5 rounded-full transition-all duration-300 ${
              s <= step ? 'bg-brand' : 'bg-gray-200'
            }`}
          />
          <span className={`text-xs ${s <= step ? 'text-brand font-medium' : 'text-gray-400'}`}>
            {s === 1 ? '¿Qué necesitas?' : s === 2 ? 'Tu proyecto' : 'Tus datos'}
          </span>
        </div>
      ))}
    </div>
  )
}

export function QuoteForm() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<ServiceType | 'unsure' | null>(null)
  const [step2Data, setStep2Data] = useState<Step2Data | null>(null)

  const form2 = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: { deadline: 'asap' },
  })

  const form3 = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
  })

  function handleStep1(service: ServiceType | 'unsure') {
    setSelectedService(service)
    setStep(2)
  }

  function handleStep2(data: Step2Data) {
    setStep2Data(data)
    setStep(3)
  }

  function handleStep3(data: Step3Data) {
    if (!selectedService || !step2Data) return

    const serviceLabel =
      SERVICE_OPTIONS.find((s) => s.id === selectedService)?.label ?? selectedService
    const deadlineLabel = DEADLINE_LABELS[step2Data.deadline] ?? step2Data.deadline

    const message = `Hola Holy Solutions! Mi nombre es ${data.contactName}.
Necesito: ${serviceLabel}
Mi negocio: ${step2Data.businessName} — ${step2Data.businessDescription}
Plazo: ${deadlineLabel}
Mi WhatsApp: +56${data.contactPhone}
¿Pueden ayudarme?`

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir * 40,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir * -40,
      opacity: 0,
    }),
  }

  return (
    <section id="quote" className="py-20 md:py-28 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            ¿No sabes qué necesitas? Te ayudamos
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Cuéntanos tu idea y te enviamos una propuesta en menos de 24 horas
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <ProgressBar step={step} />

          <AnimatePresence mode="wait" custom={step}>
            {step === 1 && (
              <motion.div
                key="step1"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-5">¿Qué necesitas?</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {SERVICE_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleStep1(opt.id)}
                      className="flex flex-col items-center gap-2.5 p-4 rounded-xl border border-gray-100 hover:border-brand hover:bg-brand-light text-gray-700 hover:text-brand transition-all duration-200 text-center"
                    >
                      <span className="text-gray-500 group-hover:text-brand">{opt.icon}</span>
                      <span className="text-xs font-medium leading-tight">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-5">Cuéntanos más</h3>
                <form onSubmit={form2.handleSubmit(handleStep2)} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nombre de tu negocio o proyecto *
                    </label>
                    <input
                      {...form2.register('businessName')}
                      type="text"
                      placeholder="Ej: Ferretería Los Andes"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors"
                    />
                    {form2.formState.errors.businessName && (
                      <p className="mt-1 text-xs text-red-500">
                        {form2.formState.errors.businessName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      ¿A qué se dedica tu negocio? *
                    </label>
                    <textarea
                      {...form2.register('businessDescription')}
                      rows={3}
                      maxLength={200}
                      placeholder="Describe brevemente tu negocio..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors resize-none"
                    />
                    <div className="flex justify-between mt-1">
                      {form2.formState.errors.businessDescription ? (
                        <p className="text-xs text-red-500">
                          {form2.formState.errors.businessDescription.message}
                        </p>
                      ) : (
                        <span />
                      )}
                      <span className="text-xs text-gray-400">
                        {form2.watch('businessDescription')?.length ?? 0}/200
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ¿Tienes un plazo?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {(
                        [
                          { value: 'asap', label: 'Lo antes posible' },
                          { value: '1month', label: 'Dentro de 1 mes' },
                          { value: '2-3months', label: '2 a 3 meses' },
                          { value: 'noRush', label: 'Sin apuro' },
                        ] as const
                      ).map((opt) => (
                        <label
                          key={opt.value}
                          className="flex items-center gap-2.5 p-3 rounded-xl border border-gray-100 cursor-pointer hover:border-brand/50 has-[:checked]:border-brand has-[:checked]:bg-brand-light transition-all"
                        >
                          <input
                            type="radio"
                            value={opt.value}
                            {...form2.register('deadline')}
                            className="accent-brand w-4 h-4"
                          />
                          <span className="text-sm text-gray-700">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      ¿Tienes algún sitio de referencia?{' '}
                      <span className="text-gray-400 font-normal">(opcional)</span>
                    </label>
                    <input
                      {...form2.register('reference')}
                      type="text"
                      placeholder="https://ejemplo.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors"
                    />
                  </div>

                  <div className="flex gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Anterior
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-5 py-2.5 rounded-xl bg-brand hover:bg-brand-hover text-white text-sm font-medium transition-colors"
                    >
                      Siguiente
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 3 && step2Data && (
              <motion.div
                key="step3"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-5">Último paso</h3>

                <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 mb-5">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2.5">
                    Resumen de tu consulta
                  </p>
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <span className="text-gray-500">Servicio:</span>
                    <span className="font-medium text-gray-900">
                      {SERVICE_OPTIONS.find((s) => s.id === selectedService)?.label}
                    </span>
                    <span className="text-gray-500">Negocio:</span>
                    <span className="font-medium text-gray-900">{step2Data.businessName}</span>
                    <span className="text-gray-500">Plazo:</span>
                    <span className="font-medium text-gray-900">
                      {DEADLINE_LABELS[step2Data.deadline]}
                    </span>
                  </div>
                </div>

                <form onSubmit={form3.handleSubmit(handleStep3)} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Tu nombre *
                    </label>
                    <input
                      {...form3.register('contactName')}
                      type="text"
                      placeholder="María González"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors"
                    />
                    {form3.formState.errors.contactName && (
                      <p className="mt-1 text-xs text-red-500">
                        {form3.formState.errors.contactName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Tu WhatsApp *
                    </label>
                    <div className="flex">
                      <span className="flex items-center px-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-sm text-gray-500 font-medium">
                        +56
                      </span>
                      <input
                        {...form3.register('contactPhone')}
                        type="tel"
                        placeholder="9 1234 5678"
                        className="flex-1 px-4 py-2.5 rounded-r-xl border border-gray-200 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors"
                      />
                    </div>
                    {form3.formState.errors.contactPhone && (
                      <p className="mt-1 text-xs text-red-500">
                        {form3.formState.errors.contactPhone.message}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Anterior
                    </button>
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#22c55e] text-white text-sm font-semibold transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Enviar consulta por WhatsApp
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
