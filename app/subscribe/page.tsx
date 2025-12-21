import SiteShell from "@/components/SiteShell";

export default function SubscribePage() {
  return (
    <SiteShell
      title="Subscribe"
      subtitle="Get product updates and feature drops first."
      showHero={true}
    >
      <div className="card rounded-2xl p-6 max-w-2xl">
        <h2 className="text-2xl font-bold">Email signup</h2>
        <p className="mt-2 text-white/70">
          Hook this to your email provider later. For now, this is the branded landing page.
        </p>

        <form className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="you@domain.com"
            className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/30"
          />
          <button
            type="button"
            className="rounded-xl bg-black px-5 py-3 font-semibold text-white hover:opacity-90"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-3 text-xs text-white/55">
          No spam. Just updates. Unsubscribe anytime.
        </p>
      </div>
    </SiteShell>
  );
}
