"use client";

import { useEffect } from "react";
import SiteShell from "../_components/SiteShell";

export default function SubscribePage() {
  useEffect(() => {
    const renderForm = () => {
      (window as any).hbspt.forms.create({
        region: "na2",
        portalId: "243040861",
        formId: "145f9164-a207-46ec-a684-211da6716f93",
        target: "#hubspot-form",
      });
    };

    if ((window as any).hbspt) {
      renderForm();
      return;
    }

    const scriptId = "hubspot-forms-script";
    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (existing) {
      existing.addEventListener("load", renderForm);
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://js-na2.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = renderForm;
    document.body.appendChild(script);
  }, []);

  return (
    <SiteShell>
      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold">Subscribe</h1>
        <p className="mt-3 text-white/60">
          Get product drops, feature updates, and early access.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white p-6 text-black">
          <div id="hubspot-form" />
        </div>
      </section>
    </SiteShell>
  );
}
