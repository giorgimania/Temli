'use client'

import { MapPin, Phone } from 'lucide-react'
import { Logo } from '@/components/site/logo'
import { PHONE_DISPLAY, PHONE_HREF, trackCallConversion } from '@/lib/analytics'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our Work' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
]

const services = ['Cement & Interlocking', 'Basement Finishing', 'Painting', 'Flooring & Kitchens']

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <Logo tagline="Vaughan's trusted renovation crew" />
          <p className="max-w-sm text-sm leading-relaxed opacity-70">
            Quality home renovations across Vaughan and the GTA — from driveways and interlocking to basements, paint,
            floors, and kitchens.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider">Explore</h3>
          {links.map((link) => (
            <a key={link.href} href={link.href} className="w-fit text-sm opacity-70 transition-all hover:text-primary hover:opacity-100">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider">Get in Touch</h3>
          <a
            href={PHONE_HREF}
            onClick={trackCallConversion}
            className="flex w-fit items-center gap-2 text-sm opacity-70 transition-all hover:text-primary hover:opacity-100"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <p className="flex items-center gap-2 text-sm opacity-70">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Vaughan, Ontario
          </p>
          <ul className="mt-2 flex flex-col gap-1.5">
            {services.map((service) => (
              <li key={service} className="text-sm opacity-50">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-background/15">
        <p className="container mx-auto px-4 py-6 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Temli Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
