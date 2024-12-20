export default function SimpleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">{children}</div>
}
