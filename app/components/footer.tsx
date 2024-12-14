import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer>
      <ul className="font-sm flex flex-col space-y-2 space-x-0 text-zinc-600 lg:flex-row lg:space-y-0 lg:space-x-4 dark:text-zinc-400">
        <li>
          <a
            className="flex items-center text-sm transition-all hover:text-zinc-800 dark:hover:text-zinc-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/hufort"
          >
            <ArrowUpRight size={16} />
            <p className="ml-1">GitHub</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center text-sm transition-all hover:text-zinc-800 dark:hover:text-zinc-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/hufort/eigen"
          >
            <ArrowUpRight size={16} />
            <p className="ml-1">Source</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}
