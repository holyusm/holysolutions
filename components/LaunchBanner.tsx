'use client'

import { useState, useEffect } from 'react'
import { X, Zap } from 'lucide-react'
import { LAUNCH_OFFER, buildWhatsAppUrl } from '@/lib/constants'

const STORAGE_KEY = 'hs_launch_banner_dismissed'

export function LaunchBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!LAUNCH_OFFER.active || !visible) return null

  return (
    <div className="hs-banner">
      <div className="hs-banner-inner">
        <Zap className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} />
        <span className="hs-banner-prefix">{LAUNCH_OFFER.label}:</span>
        <span>
          <span className="hs-banner-bold">25% de descuento</span>
          {' '}para los primeros {LAUNCH_OFFER.spotsTotal} clientes — válido hasta el {LAUNCH_OFFER.validUntil}
        </span>
        <a
          href={buildWhatsAppUrl('Hola Holy Solutions, quiero aprovechar la oferta de lanzamiento del 25% de descuento.')}
          target="_blank"
          rel="noopener noreferrer"
          className="hs-banner-cta"
        >
          Cotizar ahora →
        </a>
      </div>
      <button onClick={dismiss} className="hs-banner-close" aria-label="Cerrar banner">
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
