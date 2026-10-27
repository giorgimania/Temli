import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { Services } from '@/components/site/services'
import { Trust } from '@/components/site/trust'
import { Gallery } from '@/components/site/gallery'
import { Testimonials } from '@/components/site/testimonials'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Trust />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
