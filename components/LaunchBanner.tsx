'use client'

import { useState, useEffect } from 'react'
import { X, Zap } from 'lucide-react'
import { LAUNCH_OFFER, buildWhatsAppUrl } from '@/lib/constants'

const STORAGE_KEY = 'hs_launch_banner_dismissed'

export function LaunchBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (!dismissed) setVisible(true)
  }, [])

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!LAUNCH_OFFER.active || !visible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-10 bg-brand flex items-center justify-center px-4">
      <div className="flex items-center gap-2 text-white text-sm">
        <Zap className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} />
        <span className="font-medium hidden sm:inline">
          Oferta de lanzamiento:
        </span>
        <span>
          <span className="font-bold">25% de descuento</span> para los primeros{' '}
          {LAUNCH_OFFER.spotsTotal} clientes — válido hasta el {LAUNCH_OFFER.validUntil}
        </span>
        <a
          href={buildWhatsAppUrl('Hola Holy Solutions, quiero aprovechar la oferta de lanzamiento del 25% de descuento.')}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity ml-1"
        >
          Cotizar ahora →
        </a>
      </div>
      <button
        onClick={dismiss}
        aria-label="Cerrar banner"
        className="absolute right-3 text-white/70 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
