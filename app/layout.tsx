import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Temli Inc. | Vaughan Home Renovation Contractor',
  description: 'Trusted Vaughan home renovation contractor. Cement & interlocking, basement finishing, painting, flooring & kitchens. Quality work, honest pricing. Get a free quote today!',
  keywords: 'Vaughan contractor, home renovation, basement finishing, interlocking, cement work, painting, flooring, kitchen renovation, Woodbridge, Maple, Concord, Thornhill',
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18240008778"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18240008778');
          `}
        </Script>
      </head>
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
