"use client";

import { useEffect } from "react";
import SiteShell from "../_components/SiteShell";

export default function SubscribePage() {
  useEffect(() => {
    if ((window as any).hbspt) {
      (window as any).hbspt.forms.create({
        region: "na2",
        portalId: "243040861",
        formId: "145f9164-a207-46ec-a684-211da6716f93",
        target: "#hubspot-form",
      });
      return;
    }

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
    <SiteShell title="Subscribe" subtitle="Get product drops, updates, and early access." showHero>
      <div className="mx-auto max-w-xl">
        <div id="hubspot-form" className="rounded-2xl bg-white p-6 text-black" />
      </div>
    </SiteShell>
  );
}
