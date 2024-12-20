import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { formatDate, getNotebookNotes } from '@/(main)/notebook/utils'
import { baseUrl } from 'app/sitemap'
import { CustomMDX } from 'app/components/mdx'

export async function generateStaticParams() {
  let notes = getNotebookNotes()

  return notes.map((note) => ({
    slug: note.slug,
  }))
}

export async function generateMetadata({ params }): Promise<Metadata> {
  let note = getNotebookNotes().find((note) => note.slug === params.slug)
  if (!note) {
    return {}
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = note.metadata

  let ogImage = image ? `${baseUrl}${image}` : `${baseUrl}/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/notebook/${note.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Note({ params }) {
  let note = getNotebookNotes().find((note) => note.slug === params.slug)

  if (!note) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: note.metadata.title,
            datePublished: note.metadata.publishedAt,
            dateModified: note.metadata.publishedAt,
            description: note.metadata.summary,
            image: note.metadata.image
              ? `${baseUrl}${note.metadata.image}`
              : `${baseUrl}/og?title=${note.metadata.title}`,
            url: `${baseUrl}/notebook/${note.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title max-w-[650px] text-2xl font-medium tracking-tighter">
        {note.metadata.title}
      </h1>
      <div className="mt-2 mb-8 flex max-w-[650px] items-center justify-between text-sm"></div>
      <article className="prose prose-stone dark:prose-invert">
        <CustomMDX source={note.content} />
      </article>
    </section>
  )
}
