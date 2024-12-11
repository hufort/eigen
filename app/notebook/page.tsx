import { NotebookNotes } from 'app/components/notes'

export const metadata = {
  title: 'Notebook',
  description: 'A collection of thoughts and things I find interesting.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Notebook</h1>
      <NotebookNotes />
    </section>
  )
}
