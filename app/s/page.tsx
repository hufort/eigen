export default function SimplePage() {
  return (
    <div className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
      <div className="prose prose-stone">
        <h1>Simple Layout</h1>
        <p>
          This page uses the minimal root layout by living outside the (main)
          route group.
        </p>
        <p>Compare these pages:</p>
        <ul>
          <li>
            <a href="/s">/s - This page (minimal layout)</a>
          </li>
          <li>
            <a href="/">/ - Home page (main layout with grid structure)</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
