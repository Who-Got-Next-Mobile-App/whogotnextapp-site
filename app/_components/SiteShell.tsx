import Link from "next/link";
import type { ReactNode } from "react";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Who Got Next"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Who Got Next™</div>
              <div className="text-xs text-white/60">Basketball + Pickleball</div>
            </div>
          </Link>

          <nav className="flex items-center gap-6 text-sm text-white/70">
            <Link className="hover:text-white" href="/updates">
              Updates
            </Link>
            <Link className="hover:text-white" href="/subscribe">
              Subscribe
            </Link>
            <Link className="hover:text-white" href="/merch">
              Merch
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Who Got Next™
      </footer>
    </div>
  );
}
