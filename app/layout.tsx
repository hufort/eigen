import './global.css'
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { AnimatedLogo } from './components/animated-logo'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { cn } from './utils'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#D6D3D1' }, // stone-300
    { media: '(prefers-color-scheme: dark)', color: '#27272A' }, // zinc-800
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Hugh Forte',
    template: '%s | Hugh Forte',
  },
  description: 'Explore possibility. Embrace simplicity.',
  icons: {
    icon: [
      { url: '/favicon-light.ico', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-dark.ico', media: '(prefers-color-scheme: dark)' },
      { url: '/favicon-light.svg', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-dark.svg', media: '(prefers-color-scheme: dark)' },
      { url: '/favicon-light.ico' }, // fallback for browsers that don't support media queries
    ],
    apple: [
      {
        url: '/apple-touch-icon-light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/apple-touch-icon-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
      { url: '/apple-touch-icon-light.png' }, // fallback
    ],
    other: [
      {
        rel: 'manifest',
        url: '/manifest.json',
      },
    ],
  },
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

const SECTION_PADDING = 'p-8 sm:py-10 lg:p-12'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        'bg-stone-200 text-stone-700 dark:bg-zinc-800 dark:text-zinc-300',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="h-min-[100dvh] antialiased md:h-[100dvh]">
        <main className="grid h-full min-h-[100dvh] w-full grid-rows-[auto_1fr] md:min-h-0 md:grid-rows-[1fr_4fr]">
          {/* Top section */}
          <div className="grid h-full grid-cols-[1fr_auto] md:grid-cols-[2fr_3fr] xl:grid-cols-[3fr_2fr]">
            <div className={cn(SECTION_PADDING, 'md:col-start-1')}>
              <AnimatedLogo size={40} />
            </div>
            <div
              className={cn(
                SECTION_PADDING,
                'border-dashed border-stone-300 md:col-start-2 md:border-l dark:border-zinc-300/10'
              )}
            >
              <Navbar />
            </div>
          </div>

          {/* bottom section */}
          <div className="grid h-full min-h-0 grid-flow-dense grid-cols-1 grid-rows-[1fr_auto] md:grid-cols-[2fr_3fr] xl:grid-cols-[3fr_2fr]">
            <div
              className={cn(
                SECTION_PADDING,
                'flex-1 overflow-y-auto border-t border-dashed border-stone-300 md:col-start-2 md:border-l dark:border-zinc-300/10'
              )}
            >
              <div className="max-w-4xl">{children}</div>
            </div>
            <div
              className={cn(
                SECTION_PADDING,
                'flex items-end border-t border-dashed border-stone-300 md:col-start-1 dark:border-zinc-300/10'
              )}
            >
              <Footer />
            </div>
          </div>

          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
