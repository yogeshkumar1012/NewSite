import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'

const inter = Inter({ variable: '--font-geist-sans', subsets: ['latin'] })
const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Padmas Technologies — Scalable Digital Solutions',
  description:
    'Padmas Technologies is a digital transformation partner helping businesses build web apps, mobile apps, AI solutions, and enterprise software.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} bg-background scroll-smooth`}
    >
      <body className="font-sans antialiased">
        <SiteNavbar />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
