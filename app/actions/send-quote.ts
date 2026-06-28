'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const SERVICE_LABELS: Record<string, string> = {
  cement: 'Cement & Interlocking',
  basement: 'Basement Finishing',
  painting: 'Painting',
  flooring: 'Flooring & Kitchens',
  other: 'Other',
}

export type QuoteState = {
  success: boolean
  message: string
}

export async function sendQuote(_prevState: QuoteState, formData: FormData): Promise<QuoteState> {
  const name = (formData.get('name') as string)?.trim()
  const phone = (formData.get('phone') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const service = (formData.get('service') as string)?.trim()
  const message = (formData.get('message') as string)?.trim()

  if (!name || !phone || !email) {
    return { success: false, message: 'Please fill in your name, phone, and email.' }
  }

  const serviceLabel = service ? (SERVICE_LABELS[service] ?? service) : 'Not specified'

  try {
    const { error } = await resend.emails.send({
      // Resend's shared sender works without domain verification.
      // Replace with an address on your verified domain later if you like.
      from: 'Temli Quote Requests <onboarding@resend.dev>',
      to: 'temliinc2025@gmail.com',
      replyTo: email,
      subject: `New quote request from ${name} — ${serviceLabel}`,
      text: [
        'New quote request from the Temli Inc. website:',
        '',
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Service needed: ${serviceLabel}`,
        '',
        'Project details:',
        message || '(none provided)',
      ].join('\n'),
    })

    if (error) {
      console.log('[v0] Resend error:', error)
      return { success: false, message: 'Something went wrong sending your request. Please call us instead.' }
    }

    return { success: true, message: 'Thank you! We will get back to you within 24 hours.' }
  } catch (err) {
    console.log('[v0] Send quote exception:', err)
    return { success: false, message: 'Something went wrong sending your request. Please call us instead.' }
  }
}
