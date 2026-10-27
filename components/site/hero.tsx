'use client'

import { ArrowRight, CheckCircle2, Phone, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PHONE_DISPLAY, PHONE_HREF, trackCallConversion } from '@/lib/analytics'

const highlights = ['Free, no-pressure estimates', 'Our own local crew', 'Clean, on-time job sites']

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <img
        src="/hero-renovation.png"
        alt="Temli Inc. contractor installing oak hardwood flooring in a renovated open-concept home"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/95 via-background/85 to-background/70 md:bg-gradient-to-r md:from-background md:via-background/85 md:to-background/0"
      />

      <div className="container mx-auto flex min-h-[560px] items-center px-4 py-20 md:min-h-[640px] md:py-28">
        <div className="flex max-w-2xl flex-col gap-7 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-card/80 px-4 py-1.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm">
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
              ))}
            </span>
            Rated 5 stars by Vaughan homeowners
          </span>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl">
            Your Home, <span className="text-primary">Done Right.</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
            From your front driveway to your basement — Temli Inc. handles it all. Quality work, honest pricing, and a
            crew that treats your home like their own.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-14 px-8 text-base font-semibold shadow-lg shadow-primary/25">
              <a href="#contact">
                Get a Free Quote
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 border-foreground/15 bg-card/80 px-8 text-base font-semibold backdrop-blur-sm hover:bg-card"
            >
              <a href={PHONE_HREF} onClick={trackCallConversion}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </Button>
          </div>

          <ul className="flex flex-col gap-x-6 gap-y-2 pt-2 sm:flex-row sm:flex-wrap">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
