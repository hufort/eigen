import Link from 'next/link'
import { formatDate, getNotebookNotes } from '@/(main)/notebook/utils'

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
            className="mb-4 flex flex-col space-y-1"
            href={`/notebook/${note.slug}`}
          >
            <div className="flex w-full flex-col items-baseline space-x-0 md:flex-row md:space-x-2">
              <p className="w-10 font-mono text-sm text-zinc-600 dark:text-zinc-400">
                {note.noteNumber}
              </p>
              <p className="tracking-tight text-zinc-900 dark:text-zinc-200">
                {note.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
