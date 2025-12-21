import SiteShell from "../_components/SiteShell";

export default function UpdatesPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold">Updates</h1>
        <p className="mt-3 text-white/60">
          Product updates, feature drops, fixes, and announcements.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <div className="text-sm text-white/60">Coming soon</div>
          <div className="mt-2 text-lg font-semibold">Changelog feed</div>
          <p className="mt-2 text-sm text-white/55">
            You can post updates here and keep the culture in the loop.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
