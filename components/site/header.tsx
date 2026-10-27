'use client'

import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/site/logo'
import { PHONE_DISPLAY, PHONE_HREF, trackCallConversion } from '@/lib/analytics'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our Work' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-card/90 backdrop-blur-md">
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex items-center justify-center px-4 py-2 md:justify-between">
          <p className="hidden text-sm opacity-90 md:block">Proudly serving Vaughan & the GTA</p>
          <a
            href={PHONE_HREF}
            onClick={trackCallConversion}
            className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>Call us today: {PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <nav className="flex h-18 items-center justify-between text-foreground" aria-label="Main">
          <Logo />

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="ml-4 font-semibold shadow-sm">
              <a href="#contact">Free Quote</a>
            </Button>
          </div>

          <button
            type="button"
            className="rounded-md p-2 transition-colors hover:bg-secondary md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div id="mobile-nav" className="border-t border-border py-4 md:hidden animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-3 font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-3 font-semibold" size="lg">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Free Quote
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
