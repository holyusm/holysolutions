import { LAUNCH_OFFER } from '@/lib/constants'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { SobreNosotros } from '@/components/sections/SobreNosotros'
import { PorQue } from '@/components/sections/PorQue'
import { Services } from '@/components/sections/Services'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Projects } from '@/components/sections/Projects'
import { Pricing } from '@/components/sections/Pricing'
import { Comparador } from '@/components/sections/Comparador'
import { Mantencion } from '@/components/sections/Mantencion'
import { FAQTabs } from '@/components/sections/FAQTabs'
import { Cotizador } from '@/components/sections/Cotizador'
import { CtaFinal } from '@/components/sections/CtaFinal'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className={`flex-1 ${LAUNCH_OFFER.active ? 'pt-[108px]' : 'pt-[68px]'}`}>
        <Hero />
        <SobreNosotros />
        <PorQue />
        <Services />
        <HowItWorks />
        <Projects />
        <Pricing />
        <Comparador />
        <Mantencion />
        <FAQTabs />
        <Cotizador />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
