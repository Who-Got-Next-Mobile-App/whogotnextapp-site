import SiteShell from "@/components/SiteShell";

export default function UpdatesPage() {
  return (
    <SiteShell
      title="Updates"
      subtitle="Product drops, fixes, and announcements."
      showHero={true}
    >
      <div className="card rounded-2xl p-6">
        <div className="text-sm text-white/60">Latest</div>
        <h2 className="mt-2 text-2xl font-bold">What’s new</h2>
        <p className="mt-2 text-white/70">
          This page is ready for your changelog entries. Add posts whenever you ship.
        </p>

        <ul className="mt-6 space-y-3 text-white/75">
          <li className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm text-white/60">Coming next</div>
            <div className="mt-1 font-semibold">Launch updates, merch drops, and app milestones</div>
          </li>
        </ul>
      </div>
    </SiteShell>
  );
}
