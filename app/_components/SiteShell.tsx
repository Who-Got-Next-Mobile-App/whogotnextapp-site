import Link from "next/link";
import Image from "next/image";

export default function SiteShell({
  children,
  title,
  subtitle,
  showHero = true,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  showHero?: boolean;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-white/15 bg-white/5">
              <Image
                src="/logo.png"
                alt="Who Got Next"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="font-semibold">Who Got Next™</div>
              <div className="text-xs text-white/60">
                Basketball + Pickleball
              </div>
            </div>
          </Link>

          <nav className="flex items-center gap-5 text-sm">
            <Link className="text-white/75 hover:text-white" href="/updates">
              Updates
            </Link>
            <Link className="text-white/75 hover:text-white" href="/subscribe">
              Subscribe
            </Link>
            <Link className="text-white/75 hover:text-white" href="/merch">
              Merch
            </Link>
          </nav>
        </div>
      </header>

      {showHero && (
        <section
          className="relative overflow-hidden border-b border-white/10"
          style={{
            background:
              "linear-gradient(180deg, #F78A3A 0%, #EE3D2C 100%)",
          }}
        >
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="relative">
              <div className="pointer-events-none absolute -left-8 -top-10 hidden md:block opacity-20">
                <div className="relative h-56 w-56">
                  <Image
                    src="/logo.png"
                    alt=""
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                {title ?? "Who Got Next™"}
              </h1>
              <p className="mt-4 max-w-2xl text-white/90">
                {subtitle ?? "Find the people. Run the court. Own the game."}
              </p>
            </div>
          </div>
        </section>
      )}

      <main className="mx-auto max-w-6xl px-6 py-16">{children}</main>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Who Got Next™
      </footer>
    </div>
  );
}
