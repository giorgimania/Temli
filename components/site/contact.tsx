'use client'

import { useActionState, useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react'
import { sendQuote, type QuoteState } from '@/app/actions/send-quote'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { PHONE_DISPLAY, PHONE_HREF, trackCallConversion, trackQuoteConversion } from '@/lib/analytics'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="lg" disabled={pending} className="h-13 w-full text-base font-semibold shadow-lg shadow-primary/20">
      {pending ? 'Sending...' : 'Send My Request'}
      {!pending && <ArrowRight className="h-5 w-5" aria-hidden="true" />}
    </Button>
  )
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}

const inputClass = 'h-12 bg-background'

export function Contact() {
  const initialState: QuoteState = { success: false, message: '' }
  const [state, formAction] = useActionState(sendQuote, initialState)
  const [service, setService] = useState('')

  useEffect(() => {
    if (state.success) trackQuoteConversion()
  }, [state.success])

  return (
    <section id="contact" className="scroll-mt-28 bg-card py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-2xl border border-border shadow-xl lg:grid-cols-5">
          <div className="flex flex-col justify-between gap-10 bg-foreground p-8 text-background md:p-10 lg:col-span-2">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Free Quote</span>
              <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">Get Your Free Quote Today</h2>
              <p className="leading-relaxed opacity-75">
                Tell us about your project and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <Phone className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm opacity-70">Prefer to call?</span>
                  <a href={PHONE_HREF} onClick={trackCallConversion} className="font-semibold hover:text-primary">
                    {PHONE_DISPLAY}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <Clock className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm opacity-70">Response time</span>
                  <span className="font-semibold">Within 24 hours</span>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <MapPin className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm opacity-70">Service area</span>
                  <span className="font-semibold leading-relaxed">
                    Vaughan, Woodbridge, Maple, Concord, Thornhill & surrounding GTA
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 md:p-10 lg:col-span-3">
            <form action={formAction} className="flex flex-col gap-5">
              <Field label="Full Name" htmlFor="name">
                <Input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" required className={inputClass} />
              </Field>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Phone Number" htmlFor="phone">
                  <Input id="phone" name="phone" type="tel" placeholder="(289) 000-0000" autoComplete="tel" required className={inputClass} />
                </Field>
                <Field label="Email Address" htmlFor="email">
                  <Input id="email" name="email" type="email" placeholder="you@email.com" autoComplete="email" required className={inputClass} />
                </Field>
              </div>

              <Field label="Service Needed" htmlFor="service">
                <Select name="service" value={service} onValueChange={setService}>
                  <SelectTrigger id="service" className="h-12 w-full bg-background">
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
              </Field>

              <Field label="Tell us about your project (optional)" htmlFor="message">
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe your project, timeline, and any specific requirements..."
                  rows={5}
                  className="bg-background"
                />
              </Field>

              <SubmitButton />

              {state.message && (
                <p
                  role="status"
                  className={`rounded-lg px-4 py-3 text-center text-sm font-medium ${
                    state.success ? 'bg-primary/10 text-primary' : 'bg-destructive/10 text-destructive'
                  }`}
                >
                  {state.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
