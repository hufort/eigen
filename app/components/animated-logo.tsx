'use client'

import { useState } from 'react'
import { Logo } from './logo'
import { cx } from '../utils'

export function AnimatedLogo({ size = 40 }: { size?: number }) {
  const [isTransformed, setIsTransformed] = useState(false)

  return (
    <div
      className="inline-block p-1 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
      onClick={() => setIsTransformed(!isTransformed)}
    >
      <Logo
        size={size}
        className={cx(
          'text-neutral-800 dark:text-neutral-200',
          'transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
          isTransformed && 'scale-90 -rotate-90 -translate-x-3'
        )}
      />
    </div>
  )
}
