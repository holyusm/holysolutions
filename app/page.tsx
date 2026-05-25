import { LAUNCH_OFFER } from '@/lib/constants'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Projects } from '@/components/sections/Projects'
import { Pricing } from '@/components/sections/Pricing'
import { QuoteForm } from '@/components/sections/QuoteForm'
import { FAQ } from '@/components/sections/FAQ'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className={`flex-1 ${LAUNCH_OFFER.active ? 'pt-[104px]' : 'pt-16'}`}>
        <Hero />
        <Services />
        <HowItWorks />
        <Projects />
        <Pricing />
        <QuoteForm />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
