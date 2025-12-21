import Script from "next/script";

export default function SubscribePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Subscribe for updates</h1>
      <p className="mt-3 text-gray-600">
        Get product updates, feature drops, and merch releases straight to your inbox.
      </p>

      <div className="mt-8 rounded-xl border p-6">
        <div className="text-sm text-gray-500">Signup form</div>

        <Script
          src="https://js-na2.hsforms.net/forms/embed/243040861.js"
          strategy="afterInteractive"
        />

        <div
          className="hs-form-frame mt-4"
          data-region="na2"
          data-form-id="145f9164-a207-46ec-a684-211da6716f93"
          data-portal-id="243040861"
        />

        <noscript className="mt-4 block text-sm text-gray-500">
          JavaScript is required to load the signup form.
        </noscript>
      </div>

      <div className="mt-8">
        <a href="/updates" className="underline">View changelog</a>
      </div>
    </main>
  );
}
