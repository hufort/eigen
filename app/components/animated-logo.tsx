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
        'inline-block rounded-full p-1',
        'cursor-pointer transition-colors',
        'block w-fit',
        'relative -left-1'
      )}
      onMouseEnter={() => setIsTransformed(!isTransformed)}
    >
      <Logo
        size={size}
        className={cn(
          'text-current',
          'transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
          isTransformed && '-translate-x-3 scale-90 -rotate-90'
        )}
      />
    </Link>
  )
}
