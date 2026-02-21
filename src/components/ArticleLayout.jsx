export default function ArticleLayout({
  title,
  updated,
  children,
}) {
  return (
    <main className="py-24 lg:py-32 bg-white text-neutral-900">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">

        <h1 className="text-3xl sm:text-4xl font-semibold mb-6 leading-tight">
          {title}
        </h1>

        <p className="text-sm text-neutral-500 mb-12">
          Research Education Series • Updated {updated}
        </p>

        <div className="space-y-8 text-neutral-700 leading-relaxed">
          {children}
        </div>

      </div>
    </main>
  )
}