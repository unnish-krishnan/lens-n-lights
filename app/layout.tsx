import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#2D6A4F',
}

export const metadata: Metadata = {
  title: 'Lens & Light | Photography Portfolio',
  description:
    'A curated collection of nature, landscape, and wildlife photography — moments framed with intention.',
  openGraph: {
    title: 'Lens & Light | Photography Portfolio',
    description: 'Moments. Framed.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body className="font-body bg-off-white text-dark-text">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
