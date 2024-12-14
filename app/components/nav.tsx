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
          className="fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto"
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
                    'relative m-1 flex py-1 px-2 align-middle font-medium transition-all hover:text-zinc-800 dark:hover:text-zinc-200',
                    isActive
                      ? 'text-zinc-800 dark:text-zinc-300'
                      : 'text-zinc-600 dark:text-zinc-400'
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
