'use client'
import { motion } from 'framer-motion'
import { Check, X, Minus } from 'lucide-react'

const ROWS = [
  { feature: 'Precio justo para pymes',        hs: true,       agency: false,      freelancer: 'partial' },
  { feature: 'Stack moderno (Next.js, Vercel)', hs: true,       agency: 'partial',  freelancer: 'partial' },
  { feature: 'Entrega en 5 a 14 días',          hs: true,       agency: false,      freelancer: 'partial' },
  { feature: 'Código tuyo (GitHub)',             hs: true,       agency: false,      freelancer: true },
  { feature: 'Atención directa sin filtros',    hs: true,       agency: false,      freelancer: true },
  { feature: 'Soporte post-entrega',            hs: true,       agency: true,       freelancer: false },
  { feature: 'Factura / boleta',                hs: true,       agency: true,       freelancer: 'partial' },
  { feature: 'Escalable a software',           hs: true,       agency: true,       freelancer: false },
]

type CellVal = boolean | 'partial'

function CellIcon({ val }: { val: CellVal }) {
  if (val === true)      return <span className="hs-compare-check"><Check className="w-4 h-4" /></span>
  if (val === false)     return <span className="hs-compare-x"><X className="w-4 h-4" /></span>
  return <span className="hs-compare-x"><Minus className="w-4 h-4" /></span>
}

export function Comparador() {
  return (
    <section id="comparador" className="hs-section">
      <div className="hs-container">
        <div className="hs-section-head is-center">
          <span className="hs-eyebrow">Comparativa</span>
          <h2 className="hs-h2">¿Por qué Holy Solutions?</h2>
          <p className="hs-lead">Honestamente, estas son las diferencias.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hs-compare"
        >
          <div className="hs-compare-row hs-compare-head">
            <div className="hs-compare-cell">Característica</div>
            <div className="hs-compare-cell is-center hs-compare-popular">Holy Solutions</div>
            <div className="hs-compare-cell is-center">Agencia</div>
            <div className="hs-compare-cell is-center">Freelancer</div>
          </div>
          {ROWS.map((row) => (
            <div key={row.feature} className="hs-compare-row">
              <div className="hs-compare-cell hs-compare-feat">{row.feature}</div>
              <div className="hs-compare-cell is-center"><CellIcon val={row.hs as CellVal} /></div>
              <div className="hs-compare-cell is-center"><CellIcon val={row.agency as CellVal} /></div>
              <div className="hs-compare-cell is-center"><CellIcon val={row.freelancer as CellVal} /></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
