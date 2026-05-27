'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, ArrowLeft, Send } from 'lucide-react'
import { WIZARD_OPTIONS, buildWhatsAppUrl } from '@/lib/constants'

const schema = z.object({
  servicio:    z.string().min(1, 'Selecciona un servicio'),
  presupuesto: z.string().min(1, 'Selecciona un presupuesto'),
  cuando:      z.string().min(1, 'Selecciona cuándo lo necesitas'),
  nombre:      z.string().min(2, 'Ingresa tu nombre (mínimo 2 caracteres)'),
  telefono:    z.string().min(8, 'Ingresa tu teléfono (mínimo 8 dígitos)'),
  nota:        z.string().optional(),
})

type FormData = z.infer<typeof schema>

const STEP_LABELS = ['Proyecto', 'Contacto', 'Resumen']

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="hs-wizard-progress">
      {STEP_LABELS.map((label, i) => (
        <div key={label} className="contents">
          <div className={`hs-wizard-step${i === step ? ' is-active' : i < step ? ' is-done' : ''}`}>
            <span className="hs-wizard-num">
              {i < step ? <Check className="w-3.5 h-3.5" strokeWidth={2.5} /> : i + 1}
            </span>
            <span className="hidden sm:inline">{label}</span>
          </div>
          {i < STEP_LABELS.length - 1 && <span className="hs-wizard-line" />}
        </div>
      ))}
    </div>
  )
}

function RadioGrid({
  options,
  value,
  onChange,
  error,
}: {
  options: { id: string; label: string }[]
  value: string
  onChange: (val: string) => void
  error?: string
}) {
  return (
    <div>
      <div className="hs-radio-grid">
        {options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={`hs-radio-card${value === opt.id ? ' is-active' : ''}`}
          >
            <span
              className="hs-checkbox-box"
              style={value === opt.id ? { background: 'var(--brand)', borderColor: 'var(--brand)', color: 'var(--fg-on-brand)' } : undefined}
            >
              {value === opt.id && <Check className="w-3 h-3" strokeWidth={3} />}
            </span>
            <span className="hs-radio-card-text">{opt.label}</span>
          </button>
        ))}
      </div>
      {error && <p className="hs-wizard-error mt-1.5">{error}</p>}
    </div>
  )
}

function buildMessage(data: FormData): string {
  const srv = WIZARD_OPTIONS.servicio.find(o => o.id === data.servicio)?.label ?? data.servicio
  const pre = WIZARD_OPTIONS.presupuesto.find(o => o.id === data.presupuesto)?.label ?? data.presupuesto
  const cnd = WIZARD_OPTIONS.cuando.find(o => o.id === data.cuando)?.label ?? data.cuando

  const lines = [
    'Hola Holy Solutions, quiero cotizar un proyecto:',
    '',
    `• Servicio: ${srv}`,
    `• Presupuesto: ${pre}`,
    `• Cuándo: ${cnd}`,
    '',
    `Mi nombre: ${data.nombre}`,
    `Teléfono: ${data.telefono}`,
  ]
  if (data.nota?.trim()) lines.push(`Nota: ${data.nota.trim()}`)
  return lines.join('\n')
}

export function Cotizador() {
  const [step, setStep] = useState(0)
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { servicio: '', presupuesto: '', cuando: '', nombre: '', telefono: '', nota: '' },
  })

  const values = watch()

  async function nextStep() {
    const fields: (keyof FormData)[] =
      step === 0 ? ['servicio', 'presupuesto', 'cuando'] : ['nombre', 'telefono']
    const ok = await trigger(fields)
    if (ok) setStep((s) => s + 1)
  }

  function onSubmit(data: FormData) {
    const url = buildWhatsAppUrl(buildMessage(data))
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <section id="cotizador" className="hs-section hs-section--soft">
      <div className="hs-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hs-section-head is-center"
        >
          <span className="hs-eyebrow">Cotizador</span>
          <h2 className="hs-h2">Cotiza en menos de un minuto</h2>
          <p className="hs-lead">Sin formularios eternos. Te enviamos la propuesta en menos de 24 horas.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="hs-wizard"
        >
          {sent ? (
            <div className="text-center py-8 flex flex-col gap-4 items-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: 'var(--brand-light)' }}
              >
                <Check className="w-7 h-7" style={{ color: 'var(--brand)' }} strokeWidth={2.5} />
              </div>
              <h3 className="hs-h3">¡Cotización enviada!</h3>
              <p className="hs-p">Abrimos WhatsApp con tu mensaje listo. Responderemos en menos de 24 horas.</p>
              <button
                type="button"
                className="hs-btn hs-btn--secondary"
                onClick={() => { setStep(0); setSent(false) }}
              >
                Hacer otra cotización
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <ProgressBar step={step} />

              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="hs-wizard-body"
                  >
                    <div>
                      <label className="hs-wizard-label block mb-2">¿Qué necesitas?</label>
                      <RadioGrid
                        options={WIZARD_OPTIONS.servicio}
                        value={values.servicio}
                        onChange={(v) => setValue('servicio', v, { shouldValidate: true })}
                        error={errors.servicio?.message}
                      />
                    </div>
                    <div>
                      <label className="hs-wizard-label block mb-2">¿Cuánto presupuesto manejas?</label>
                      <RadioGrid
                        options={WIZARD_OPTIONS.presupuesto}
                        value={values.presupuesto}
                        onChange={(v) => setValue('presupuesto', v, { shouldValidate: true })}
                        error={errors.presupuesto?.message}
                      />
                    </div>
                    <div>
                      <label className="hs-wizard-label block mb-2">¿Cuándo lo necesitas?</label>
                      <RadioGrid
                        options={WIZARD_OPTIONS.cuando}
                        value={values.cuando}
                        onChange={(v) => setValue('cuando', v, { shouldValidate: true })}
                        error={errors.cuando?.message}
                      />
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="hs-wizard-body"
                  >
                    <div>
                      <label className="hs-wizard-label block mb-1.5" htmlFor="nombre">Tu nombre</label>
                      <input
                        id="nombre"
                        type="text"
                        autoComplete="name"
                        placeholder="Ej: María González"
                        className="hs-wizard-input"
                        {...register('nombre')}
                      />
                      {errors.nombre && <p className="hs-wizard-error mt-1">{errors.nombre.message}</p>}
                    </div>
                    <div>
                      <label className="hs-wizard-label block mb-1.5" htmlFor="telefono">Teléfono (WhatsApp)</label>
                      <input
                        id="telefono"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+56 9 XXXX XXXX"
                        className="hs-wizard-input"
                        {...register('telefono')}
                      />
                      {errors.telefono && <p className="hs-wizard-error mt-1">{errors.telefono.message}</p>}
                    </div>
                    <div>
                      <label className="hs-wizard-label block mb-1.5" htmlFor="nota">
                        Cuéntanos más <span style={{ color: 'var(--fg-soft)', fontWeight: 400 }}>(opcional)</span>
                      </label>
                      <textarea
                        id="nota"
                        placeholder="Nombre de tu negocio, qué vendes, referencia de sitios que te gusten..."
                        className="hs-wizard-textarea"
                        {...register('nota')}
                      />
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="hs-wizard-body"
                  >
                    <div
                      className="rounded-2xl p-5 flex flex-col gap-3"
                      style={{ background: 'var(--bg-soft)', border: '1px solid var(--border)' }}
                    >
                      <p className="hs-wizard-label">Resumen de tu cotización</p>
                      {[
                        { label: 'Servicio',    val: WIZARD_OPTIONS.servicio.find(o => o.id === values.servicio)?.label },
                        { label: 'Presupuesto', val: WIZARD_OPTIONS.presupuesto.find(o => o.id === values.presupuesto)?.label },
                        { label: 'Cuándo',      val: WIZARD_OPTIONS.cuando.find(o => o.id === values.cuando)?.label },
                        { label: 'Nombre',      val: values.nombre },
                        { label: 'Teléfono',    val: values.telefono },
                        ...(values.nota?.trim() ? [{ label: 'Nota', val: values.nota }] : []),
                      ].map(({ label, val }) => (
                        <div key={label} className="flex justify-between gap-4 text-sm">
                          <span style={{ color: 'var(--fg-soft)' }}>{label}</span>
                          <span style={{ color: 'var(--fg)', fontWeight: 500, textAlign: 'right' }}>{val}</span>
                        </div>
                      ))}
                    </div>
                    <p className="hs-p-sm text-center">
                      Al hacer clic se abrirá WhatsApp con tu cotización lista para enviar.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="hs-wizard-nav">
                <div>
                  {step > 0 && (
                    <button
                      type="button"
                      onClick={() => setStep((s) => s - 1)}
                      className="hs-btn hs-btn--ghost"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Atrás
                    </button>
                  )}
                </div>
                <div>
                  {step < 2 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="hs-btn hs-btn--primary"
                    >
                      Siguiente
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button type="submit" className="hs-btn hs-btn--primary">
                      <Send className="w-4 h-4" />
                      Enviar por WhatsApp
                    </button>
                  )}
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
