function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer>
      <ul className="font-sm flex flex-col space-y-2 space-x-0 text-zinc-600 md:flex-row md:space-y-0 md:space-x-4 dark:text-zinc-400">
        <li>
          <a
            className="flex items-center transition-all hover:text-zinc-800 dark:hover:text-zinc-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/hufort"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">GitHub</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-zinc-800 dark:hover:text-zinc-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/hufort/eigen"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">View source</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}
