import { baseUrl } from 'app/sitemap'
import { getNotebookNotes } from 'app/notebook/utils'

export async function GET() {
  let allNotes = await getNotebookNotes()

  const itemsXml = allNotes
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1
      }
      return 1
    })
    .map(
      (note) =>
        `<item>
          <title>${note.metadata.title}</title>
          <link>${baseUrl}/notebook/${note.slug}</link>
          <description>${note.metadata.summary || ''}</description>
          <pubDate>${new Date(
            note.metadata.publishedAt
          ).toUTCString()}</pubDate>
        </item>`
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Hugh Forte</title>
        <link>${baseUrl}</link>
        <description>Hugh Forte's personal RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
