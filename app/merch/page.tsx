import SiteShell from "../_components/SiteShell";

export default function MerchPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold">Merch</h1>
        <p className="mt-3 text-white/60">
          Rep the brand. Built for hoopers and pickleballers.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <div className="text-sm text-white/60">Coming soon</div>
          <div className="mt-2 text-lg font-semibold">Storefront</div>
          <p className="mt-2 text-sm text-white/55">
            Drop tees, hoodies, and court essentials here.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
