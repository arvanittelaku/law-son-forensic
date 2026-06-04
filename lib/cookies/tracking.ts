import { GA_MEASUREMENT_ID } from "../site";
import type { ConsentPreferences } from "./types";

type ScriptLoader = {
  id: string;
  category: keyof Omit<ConsentPreferences, "necessary">;
  load: () => void;
  unload?: () => void;
};

const loadedScripts = new Set<string>();

/** Registry of third-party scripts gated by consent */
const scriptRegistry: ScriptLoader[] = [
  {
    id: "google-analytics",
    category: "analytics",
    load: () => {
      if (!GA_MEASUREMENT_ID || loadedScripts.has("google-analytics"))
        return;
      loadedScripts.add("google-analytics");

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      };
      window.gtag("js", new Date());
      window.gtag("config", GA_MEASUREMENT_ID, {
        anonymize_ip: true,
      });
    },
  },
  // Example placeholders: load only when env vars / IDs are configured
  {
    id: "google-tag-manager",
    category: "marketing",
    load: () => {
      const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
      if (!gtmId || loadedScripts.has("google-tag-manager")) return;
      loadedScripts.add("google-tag-manager");
      const script = document.createElement("script");
      script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`;
      document.head.appendChild(script);
    },
  },
  {
    id: "meta-pixel",
    category: "marketing",
    load: () => {
      const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
      if (!pixelId || loadedScripts.has("meta-pixel")) return;
      loadedScripts.add("meta-pixel");
      // Meta Pixel stub - extend when ID is configured
      void pixelId;
    },
  },
  {
    id: "linkedin-insight",
    category: "marketing",
    load: () => {
      const partnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
      if (!partnerId || loadedScripts.has("linkedin-insight")) return;
      loadedScripts.add("linkedin-insight");
      void partnerId;
    },
  },
  {
    id: "hotjar",
    category: "analytics",
    load: () => {
      const hjid = process.env.NEXT_PUBLIC_HOTJAR_ID;
      if (!hjid || loadedScripts.has("hotjar")) return;
      loadedScripts.add("hotjar");
      void hjid;
    },
  },
];

export function applyTrackingPreferences(prefs: ConsentPreferences): void {
  for (const entry of scriptRegistry) {
    const allowed = prefs[entry.category];
    if (allowed) {
      entry.load();
    }
  }
}
