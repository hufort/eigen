import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <header>
        <h1 className="text-2xl font-semibold tracking-tighter">Hey hey.</h1>
      </header>
      <article className="prose">
        <p className="text-lg font-semibold">
          My name's Hugh and I love making things – especially software.
        </p>
        <p>
          I’m a front end engineer at{' '}
          <Link
            href="https://planningcenter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Planning Center
          </Link>
          , where I’m currently working on our cross-app chat feature.
        </p>
        <p>
          I range across the full stack when working on Sprouted Kitchen{' '}
          <Link
            href="https://sproutedkitchen.cc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cooking Club
          </Link>{' '}
          (I happen to be{' '}
          <Link
            href="https://instagram.com/sproutedkitchen"
            target="_blank"
            rel="noopener noreferrer"
          >
            @sproutedkitchen
          </Link>
          ’s husband. Lucky guy.) and I make the pictures over there, as well.{' '}
        </p>
        <p className="text-sm">
          In another branch of the multiverse I’m still working as a
          photographer, but the only artifact left in this timeline is{' '}
          <Link
            href="https://instagram.com/hufort"
            target="_blank"
            rel="noopener noreferrer"
          >
            @hufort
          </Link>
          's old instagram account.
        </p>
      </article>
    </section>
  )
}
