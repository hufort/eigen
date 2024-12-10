'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils'

const navItems = {
  '/': {
    name: 'Hey',
  },
  '/notebook': {
    name: 'Notes',
  },
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <aside className="-ml-3 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path
              return (
                <Link
                  key={path}
                  href={path}
                  className={cn(
                    'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 font-medium ',
                    isActive
                      ? 'text-neutral-800 dark:text-neutral-300'
                      : 'text-neutral-600 dark:text-neutral-400'
                  )}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
