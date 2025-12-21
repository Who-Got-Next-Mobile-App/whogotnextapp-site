import SiteShell from "../_components/SiteShell";

export default function UpdatesPage() {
  return (
    <SiteShell title="Updates" subtitle="Product drops, fixes, and announcements." showHero>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-white/70">
          Drop your changelog content here (or hook it to a CMS later).
        </div>
      </div>
    </SiteShell>
  );
}
