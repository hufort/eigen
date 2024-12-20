export default function SimplePage() {
  return (
    <div className="prose prose-stone dark:prose-invert">
      <h1>Simple Layout</h1>
      <p>This page uses the minimal root layout by living outside the (main) route group.</p>
      <p>Compare these pages:</p>
      <ul>
        <li><a href="/s">/s - This page (minimal layout)</a></li>
        <li><a href="/">/ - Home page (main layout with grid structure)</a></li>
      </ul>
    </div>
  )
}
