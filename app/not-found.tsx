export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-gray-600">
        That page doesn’t exist. Try the changelog or subscribe page.
      </p>

      <div className="mt-8 flex gap-3">
        <a href="/updates" className="rounded-lg bg-black px-4 py-2 text-white">
          Changelog
        </a>
        <a href="/subscribe" className="rounded-lg border px-4 py-2">
          Subscribe
        </a>
      </div>
    </main>
  );
}
