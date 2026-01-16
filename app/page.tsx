import Link from "next/link";
import SiteShell from "./_components/SiteShell";

export default function HomePage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        {/* Gradient hero */}
        <div className="bg-gradient-to-b from-[#F78A3A] to-[#EE3D2C]">
          <div className="mx-auto max-w-6xl px-6 py-24">
            {/* Floating logo */}
            <img
              src="/logo.png"
              alt="Who Got Next logo"
              className="pointer-events-none absolute left-10 top-16 h-28 w-28 rounded-2xl opacity-25 drop-shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
            />

            <div className="max-w-2xl">
              <h1 className="text-5xl font-extrabold tracking-tight text-white">
                Who Got Next™
              </h1>
              <p className="mt-4 text-white/90">
                Find the people. Run the court. Own the game.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/updates"
                  className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/90"
                >
                  See updates
                </Link>
                <Link
                  href="/subscribe"
                  className="rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cards section */}
        <div className="bg-black">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card
                title="Updates"
                headline="See what’s new"
                desc="Feature drops, fixes, and announcements — all in one place."
                href="/updates"
                cta="See what’s new →"
              />
              <Card
                title="Email"
                headline="Get drops first"
                desc="Subscribe for product updates. No spam. Just heat."
                href="/subscribe"
                cta="Get drops →"
              />
              <Card
                title="Merch"
                headline="Rep the brand"
                desc="Clean gear. Fast shipping. Built for hoopers and pickleballers."
                href="/merch"
                cta="Shop merch →"
              />
              <Card
                title="Support"
                headline="Get help"
                desc="Need assistance? Our support team is here to help you get back on the court."
                href="/support"
                cta="Get support →"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Card({
  title,
  headline,
  desc,
  href,
  cta,
}: {
  title: string;
  headline: string;
  desc: string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition hover:bg-white/[0.06]"
    >
      <div className="text-sm text-white/60">{title}</div>
      <div className="mt-2 text-xl font-bold">{headline}</div>
      <p className="mt-2 text-sm text-white/55">{desc}</p>
      <div className="mt-6 text-sm font-semibold text-[#F78A3A] group-hover:text-[#EE3D2C]">
        {cta}
      </div>
    </Link>
  );
}
