export default function MerchPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Merch</h1>
      <p className="mt-3 text-gray-600">
        Drops coming soon. Subscribe so you don’t miss the first release.
      </p>

      <div className="mt-8 rounded-xl border p-6">
        <a
          href="/subscribe"
          className="inline-block rounded-lg bg-black px-4 py-2 text-white"
        >
          Get notified
        </a>
      </div>
    </main>
  );
}
