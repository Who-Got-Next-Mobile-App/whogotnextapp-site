import SiteShell from "@/components/SiteShell";

export default function MerchPage() {
  return (
    <SiteShell
      title="Merch"
      subtitle="Rep Who Got Next™. Drops coming soon."
      showHero={true}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {["Hoodie", "Tee", "Hat"].map((item) => (
          <div key={item} className="card rounded-2xl p-6">
            <div className="text-sm text-white/60">Coming soon</div>
            <div className="mt-2 text-xl font-semibold">{item}</div>
            <p className="mt-2 text-sm text-white/70">
              Placeholder product card. Swap in real products when you’re ready.
            </p>
            <button className="mt-5 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
              Notify me
            </button>
          </div>
        ))}
      </div>
    </SiteShell>
  );
}
