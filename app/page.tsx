import Link from "next/link";
import SiteShell from "./_components/SiteShell";

export default function HomePage() {
  return (
    <SiteShell
      title="Who Got Next™"
      subtitle="Find the people. Run the court. Own the game."
      showHero
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-white/60">Updates</div>
          <div className="mt-2 text-xl font-semibold">See what’s new</div>
          <p className="mt-2 text-sm text-white/65">
            Feature drops, fixes, and announcements — all in one place.
          </p>
          <Link
            className="mt-5 inline-block text-sm text-[#F78A3A] hover:underline"
            href="/updates"
          >
            See what’s new →
          </Link>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-white/60">Email</div>
          <div className="mt-2 text-xl font-semibold">Get drops first</div>
          <p className="mt-2 text-sm text-white/65">
            Subscribe for product updates. No spam. Just heat.
          </p>
          <Link
            className="mt-5 inline-block text-sm text-[#F78A3A] hover:underline"
            href="/subscribe"
          >
            Get drops →
          </Link>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-white/60">Merch</div>
          <div className="mt-2 text-xl font-semibold">Rep the brand</div>
          <p className="mt-2 text-sm text-white/65">
            Clean gear. Fast shipping. Built for hoopers and pickleballers.
          </p>
          <Link
            className="mt-5 inline-block text-sm text-[#F78A3A] hover:underline"
            href="/merch"
          >
            Shop merch →
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
