import SiteShell from "../_components/SiteShell";
import ShopifyProducts from "@/components/ShopifyProducts";

export default function MerchPage() {
  // TODO: Replace with your actual Storefront API access token
  // Get this from: Shopify Admin > Settings > Apps and sales channels > Develop apps
  const STOREFRONT_ACCESS_TOKEN = "df8ad174fe181008a9f598c23853d577";
  const STORE_DOMAIN = "who-got-next-app.myshopify.com";

  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold">Merch</h1>
        <p className="mt-3 text-white/60">
          Rep the brand. Built for hoopers and pickleballers.
        </p>

        <div className="mt-10">
          <ShopifyProducts
            storeDomain={STORE_DOMAIN}
            storefrontAccessToken={STOREFRONT_ACCESS_TOKEN}
          />
        </div>
      </section>
    </SiteShell>
  );
}
