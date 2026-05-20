'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Phone, MapPin, Star, CheckCircle2, Menu, X, Home } from 'lucide-react'

// Logo Component
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
        <Home className="w-6 h-6 text-primary-foreground" />
      </div>
      <span className="text-xl font-semibold text-foreground">Temli Inc.</span>
    </div>
  )
}

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-center md:justify-end">
          <a href="tel:905-555-5555" className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4" />
            <span>Call us today — Hamilton & GTA: (905) 555-5555</span>
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-medium">Services</a>
            <a href="#work" className="text-muted-foreground hover:text-primary transition-colors font-medium">Our Work</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">About Us</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#work" className="text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Our Work</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>About Us</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-secondary to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Your Home, Done Right.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            From your front driveway to your basement — Temli Inc. handles it all. Trusted by Hamilton homeowners for quality work, honest pricing, and a crew that treats your home like their own.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg">
            <a href="#contact">Get a Free Quote →</a>
          </Button>
        </div>
      </div>
      {/* Decorative Element */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full bg-primary/5 -z-10 hidden lg:block" />
    </section>
  )
}

// Services Data
const services = [
  {
    icon: '🧱',
    title: 'Cement & Interlocking',
    description: 'Transform your front yard, backyard, or driveway with custom cement work and interlocking stone. Built to last through every Ontario winter — and beautiful year-round.',
  },
  {
    icon: '🏠',
    title: 'Basement Finishing',
    description: 'Turn your unfinished basement into a space your family will actually use. From framing and drywall to full makeovers, we bring your vision to life.',
  },
  {
    icon: '🎨',
    title: 'Painting',
    description: 'Fresh walls make a world of difference. We handle interior painting for every room — clean lines, no mess, and a finish that lasts.',
  },
  {
    icon: '🪵',
    title: 'Flooring & Kitchens',
    description: 'New floors and updated kitchens add value and beauty to your home. We work with a range of materials to match your style and budget.',
  },
]

function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">What We Do</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Quality craftsmanship for every corner of your home
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Trust Points Section
const trustPoints = [
  {
    icon: MapPin,
    title: 'Local Hamilton Crew',
    description: 'We live and work in this community. No subcontracting — just our own trusted team on every job.',
  },
  {
    icon: CheckCircle2,
    title: 'Free Estimates',
    description: "No surprises. We walk through your project, give you a clear quote, and stick to it.",
  },
  {
    icon: Star,
    title: 'Quality Guaranteed',
    description: "We don't consider a job done until you're happy. Every project is finished with care and attention to detail.",
  },
]

function TrustSection() {
  return (
    <section id="about" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Why Choose Us?</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Hamilton homeowners trust Temli Inc. for a reason
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                <point.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Gallery Section
function GallerySection() {
  const placeholders = Array(6).fill(null)

  return (
    <section id="work" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Our Work Speaks for Itself</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Take a look at some of the projects we&apos;ve completed for Hamilton homeowners just like you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholders.map((_, index) => (
            <div
              key={index}
              className="aspect-[4/3] bg-muted rounded-lg overflow-hidden flex items-center justify-center group hover:bg-primary/10 transition-colors cursor-pointer"
            >
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📷</span>
                </div>
                <p className="text-muted-foreground text-sm">Project Photo {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
const testimonials = [
  {
    quote: "Temli did our entire backyard interlocking and it turned out incredible. They were on time, cleaned up every day, and the price was exactly what they quoted. Couldn't ask for more.",
    author: 'Sarah M.',
    location: 'Hamilton',
  },
  {
    quote: "We had our basement fully finished and two rooms painted. The team was professional and friendly the whole way through. We'll definitely be calling Temli again for our kitchen.",
    author: 'James & Lisa T.',
    location: 'Ancaster',
  },
  {
    quote: "Best decision we made for our home. The front yard cement work is flawless. Neighbours keep asking who did it!",
    author: 'Roberto P.',
    location: 'Stoney Creek',
  },
]

function TestimonialsSection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">What Our Customers Say</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real reviews from Hamilton homeowners
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-muted-foreground font-medium">
                  — {testimonial.author}, {testimonial.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Form Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you! We will get back to you within 24 hours.')
  }

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Get Your Free Quote Today</h2>
          <p className="text-center text-muted-foreground mb-8">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>

          <Card className="bg-background border-border">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-card"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(905) 555-5555"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-card"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-card"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Needed
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="bg-card">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cement">Cement & Interlocking</SelectItem>
                      <SelectItem value="basement">Basement Finishing</SelectItem>
                      <SelectItem value="painting">Painting</SelectItem>
                      <SelectItem value="flooring">Flooring & Kitchens</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your project
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Describe your project, timeline, and any specific requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-card"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Send My Request →
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center space-y-2">
            <p className="text-muted-foreground">
              <Phone className="inline w-4 h-4 mr-2" />
              Prefer to call? Reach us at{' '}
              <a href="tel:905-555-5555" className="text-primary hover:underline font-medium">
                (905) 555-5555
              </a>
            </p>
            <p className="text-muted-foreground">
              <MapPin className="inline w-4 h-4 mr-2" />
              Serving Hamilton, Ancaster, Stoney Creek, Dundas & surrounding GTA areas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <Home className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <span className="text-lg font-semibold">Temli Inc.</span>
              <p className="text-sm opacity-70">Hamilton&apos;s trusted home renovation crew.</p>
            </div>
          </div>

          <div className="flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#work" className="hover:text-primary transition-colors">Our Work</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Temli Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
