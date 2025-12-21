import Link from "next/link";

export default function SiteShell({
  title,
  subtitle,
  children,
  showHero = true,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  showHero?: boolean;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Who Got Next logo"
              className="h-10 w-10 rounded-2xl ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">
                Who Got Next<span className="align-super text-[10px]">™</span>
              </div>
              <div className="text-xs text-white/60">Basketball + Pickleball</div>
            </div>
          </Link>

          <nav className="flex items-center gap-2 text-sm">
            <Link className="rounded-lg px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white" href="/updates">
              Updates
            </Link>
            <Link className="rounded-lg px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white" href="/subscribe">
              Subscribe
            </Link>
            <Link className="rounded-lg px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white" href="/merch">
              Merch
            </Link>
          </nav>
        </div>
      </header>

      {showHero ? (
        <section className="hero-gradient relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-30 hero-noise" />
          <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-14 text-center">
            <img
              src="/logo.png"
              alt="Who Got Next logo"
              className="mb-6 h-24 w-24 rounded-[28px] ring-1 ring-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.45)] animate-float"
            />

            {title ? <h1 className="text-5xl font-extrabold tracking-tight">{title}</h1> : null}
            {subtitle ? <p className="mt-4 max-w-2xl text-base text-white/85">{subtitle}</p> : null}

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/updates" className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-90">
                See updates
              </Link>
              <Link href="/subscribe" className="rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15">
                Subscribe
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-white/60">
          © {new Date().getFullYear()} Who Got Next<span className="align-super text-[10px]">™</span>
        </div>
      </footer>
    </div>
  );
}
