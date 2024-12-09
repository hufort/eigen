import Link from 'next/link'
import { formatDate, getNotebookNotes } from 'app/notebook/utils'

export function NotebookNotes() {
  let allNotes = getNotebookNotes()

  return (
    <div>
      {allNotes
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((note, idx) => (
          <Link
            key={note.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/notebook/${note.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 items-baseline">
              <p className="text-neutral-600 dark:text-neutral-400 w-8 font-mono text-sm">
                {String(idx + 1).padStart(3, '0')}
              </p>
              <p className="text-neutral-900 dark:text-neutral-200 tracking-tight">
                {note.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
