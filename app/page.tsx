import SiteShell from "@/components/SiteShell";
import Link from "next/link";

export default function HomePage() {
  return (
    <SiteShell
      title="Who Got Next™"
      subtitle="Find the people. Run the court. Own the game."
      showHero={true}
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div className="card rounded-2xl p-6">
          <div className="text-sm text-white/70">Updates</div>
          <div className="mt-2 text-xl font-semibold">See what’s new</div>
          <p className="mt-2 text-sm text-white/70">
            Feature drops, fixes, and announcements in one place.
          </p>
          <Link className="mt-5 inline-flex items-center gap-2 link-accent font-semibold" href="/updates">
            See what’s new →
          </Link>
        </div>

        <div className="card rounded-2xl p-6">
          <div className="text-sm text-white/70">Email</div>
          <div className="mt-2 text-xl font-semibold">Get drops first</div>
          <p className="mt-2 text-sm text-white/70">
            Subscribe for product updates. No spam. Just heat.
          </p>
          <Link className="mt-5 inline-flex items-center gap-2 link-accent font-semibold" href="/subscribe">
            Get drops →
          </Link>
        </div>

        <div className="card rounded-2xl p-6">
          <div className="text-sm text-white/70">Merch</div>
          <div className="mt-2 text-xl font-semibold">Rep the brand</div>
          <p className="mt-2 text-sm text-white/70">
            Clean gear. Fast shipping. Built for hoopers and pickleballers.
          </p>
          <Link className="mt-5 inline-flex items-center gap-2 link-accent font-semibold" href="/merch">
            Shop merch →
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
