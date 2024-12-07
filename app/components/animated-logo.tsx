'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Logo } from './logo'
import { cn } from '../utils'

export function AnimatedLogo({ size = 40 }: { size?: number }) {
  const [isTransformed, setIsTransformed] = useState(false)

  return (
    <Link
      href="/"
      className={cn(
        'inline-block p-1 rounded-full',
        'hover:bg-neutral-50 dark:hover:bg-neutral-900',
        'transition-colors cursor-pointer',
        'block w-fit'
      )}
      onMouseEnter={() => setIsTransformed(!isTransformed)}
    >
      <Logo
        size={size}
        className={cn(
          'text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-neutral-50',
          'transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
          isTransformed && 'scale-90 -rotate-90 -translate-x-3'
        )}
      />
    </Link>
  )
}
