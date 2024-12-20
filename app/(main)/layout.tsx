import { AnimatedLogo } from '../components/animated-logo'
import { Navbar } from '../components/nav'
import Footer from '../components/footer'
import { cn } from '../utils'

const SECTION_PADDING = 'p-8 sm:py-10 lg:p-12'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid h-full min-h-[100dvh] w-full grid-rows-[auto_1fr] md:h-[100dvh] md:min-h-0 md:grid-rows-[1fr_4fr]">
      {/* Top section */}
      <div className="grid h-full grid-cols-[1fr_auto] md:grid-cols-[1fr_3fr] xl:grid-cols-[3fr_2fr]">
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
      <div className="grid h-full min-h-0 grid-flow-dense grid-cols-1 grid-rows-[1fr_auto] md:grid-cols-[1fr_3fr] xl:grid-cols-[3fr_2fr]">
        <div
          className={cn(
            SECTION_PADDING,
            'flex-1 overflow-y-auto border-t border-dashed border-stone-300 md:col-start-2 md:border-l dark:border-zinc-300/10'
          )}
        >
          <div className="max-w-2xl">{children}</div>
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
    </div>
  )
}
