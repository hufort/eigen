import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Logo } from './components/logo'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'HF',
    template: '%s | HF',
  },
  description: 'Explore possibility. Embrace simplicity.',
  openGraph: {
    title: 'Hugh Forte',
    description: 'Explore possibility. Embrace simplicity.',
    url: baseUrl,
    siteName: 'eigensite',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-neutral-800 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-900',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <div className="mb-8">
            <div className="group inline-block p-1 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
              <Logo
                size={40}
                className="text-neutral-800 dark:text-neutral-200 group-hover:scale-90 group-hover:-rotate-90 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-x-3 [transition-delay:50ms]"
              />
            </div>
          </div>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
