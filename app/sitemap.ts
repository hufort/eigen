import { getNotebookNotes } from '@/(main)/notebook/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let notes = getNotebookNotes().map((note) => ({
    url: `${baseUrl}/notebook/${note.slug}`,
    lastModified: note.metadata.publishedAt,
  }))

  let routes = ['', '/notebook'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...notes]
}
