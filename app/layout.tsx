import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Temli Inc. | Hamilton Home Renovation Contractor',
  description: 'Trusted Hamilton home renovation contractor. Cement & interlocking, basement finishing, painting, flooring & kitchens. Quality work, honest pricing. Get a free quote today!',
  keywords: 'Hamilton contractor, home renovation, basement finishing, interlocking, cement work, painting, flooring, kitchen renovation, Ancaster, Stoney Creek, Dundas',
}

export const viewport = {
  themeColor: '#B5553F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
