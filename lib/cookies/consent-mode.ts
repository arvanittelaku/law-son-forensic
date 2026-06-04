import type { ConsentPreferences } from "./types";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Push Google Consent Mode v2 defaults and updates */
export function updateGoogleConsentMode(prefs: ConsentPreferences): void {
  if (typeof window === "undefined") return;

  const granted = "granted" as const;
  const denied = "denied" as const;

  const analytics = prefs.analytics ? granted : denied;
  const marketing = prefs.marketing ? granted : denied;
  const preferences = prefs.preferences ? granted : denied;

  window.dataLayer = window.dataLayer || [];

  const payload = {
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
    functionality_storage: preferences,
    personalization_storage: preferences,
    security_storage: granted,
  };

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", payload);
  } else {
    window.dataLayer.push(["consent", "update", payload]);
  }
}

/** Set default denied state before any scripts load */
export function setDefaultConsentDenied(): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push([
    "consent",
    "default",
    {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      functionality_storage: "denied",
      personalization_storage: "denied",
      security_storage: "granted",
      wait_for_update: 500,
    },
  ]);
}
