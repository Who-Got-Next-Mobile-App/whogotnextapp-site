type UpdateItem = {
  date: string;
  title: string;
  summary: string;
};

const updates: UpdateItem[] = [
  {
    date: "2025-12-21",
    title: "Website launched",
    summary: "Public changelog + subscribe page are live.",
  },
  {
    date: "2025-12-21",
    title: "Merch section added",
    summary: "Merch page is up. Drops coming soon.",
  },
];

export default function UpdatesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Changelog</h1>
      <p className="mt-3 text-gray-600">
        Everything new with Who Got Next™ in one place.
      </p>

      <div className="mt-10 space-y-4">
        {updates.map((u) => (
          <article key={`${u.date}-${u.title}`} className="rounded-xl border p-6">
            <div className="text-sm text-gray-500">{u.date}</div>
            <h2 className="mt-2 text-xl font-semibold">{u.title}</h2>
            <p className="mt-2 text-gray-700">{u.summary}</p>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <a href="/subscribe" className="underline">
          Subscribe for updates
        </a>
      </div>
    </main>
  );
}
