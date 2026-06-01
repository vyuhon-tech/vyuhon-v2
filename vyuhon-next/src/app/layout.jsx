import { Plus_Jakarta_Sans, Manrope } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/layout/ClientLayout'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800'],
  variable: '--font-heading',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Vyuhon — AI Engineering',
  description: 'Vyuhon — AI Engineering for the Modern Enterprise. Production-grade AI systems from strategy to deployment.',
  metadataBase: new URL('https://vyuhon.com'),
  openGraph: {
    siteName: 'Vyuhon',
    type: 'website',
    images: [{ url: '/social-preview.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vyuhon',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
