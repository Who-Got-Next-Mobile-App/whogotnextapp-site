export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold">Who Got Next™</h1>
      <p className="mt-4 text-lg text-gray-600">
        Product updates, feature drops, and merch for the culture.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href="/updates" className="rounded-lg bg-black px-4 py-2 text-white">
          View changelog
        </a>
        <a href="/subscribe" className="rounded-lg border px-4 py-2">
          Subscribe
        </a>
        <a href="/merch" className="rounded-lg border px-4 py-2">
          Merch
        </a>
      </div>

      <div className="mt-12 rounded-xl border p-6">
        <div className="text-sm text-gray-500">Quick links</div>
        <ul className="mt-3 list-disc pl-5 text-gray-700">
          <li>
            <a className="underline" href="/updates">Updates</a>
          </li>
          <li>
            <a className="underline" href="/subscribe">Email signup</a>
          </li>
          <li>
            <a className="underline" href="/merch">Merch</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
