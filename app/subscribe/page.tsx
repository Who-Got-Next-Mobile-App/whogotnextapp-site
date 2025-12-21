"use client";

import { useEffect } from "react";

export default function SubscribePage() {
  useEffect(() => {
    // If HubSpot is already loaded, just render the form
    if ((window as any).hbspt) {
      (window as any).hbspt.forms.create({
        region: "na2",
        portalId: "243040861",
        formId: "145f9164-a207-46ec-a684-211da6716f93",
        target: "#hubspot-form",
      });
      return;
    }

    // Load HubSpot forms script once, then render
    const script = document.createElement("script");
    script.src = "https://js-na2.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => {
      (window as any).hbspt.forms.create({
        region: "na2",
        portalId: "243040861",
        formId: "145f9164-a207-46ec-a684-211da6716f93",
        target: "#hubspot-form",
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <main className="mx-auto max-w-xl px-6 py-24 text-white">
      <h1 className="text-4xl font-bold mb-4">Subscribe</h1>
      <p className="mb-8 text-white/80">
        Get product drops, feature updates, and early access.
      </p>

      <div id="hubspot-form" className="rounded-xl bg-white p-6 text-black" />
    </main>
  );
}
