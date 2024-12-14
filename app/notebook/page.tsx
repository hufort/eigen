import { NotebookNotes } from 'app/components/notes'

export const metadata = {
  title: 'Notebook',
  description: 'A collection of thoughts and things I find interesting.',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Notebook</h1>
      <NotebookNotes />
    </section>
  )
}
