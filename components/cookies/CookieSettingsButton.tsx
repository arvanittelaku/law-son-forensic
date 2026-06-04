"use client";

import { useCookieConsent } from "./CookieConsentProvider";

export function CookieSettingsButton({
  className = "",
}: {
  className?: string;
}) {
  const { openSettings } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={openSettings}
      className={`text-sm underline-offset-2 transition hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${className}`}
    >
      Cookie Settings
    </button>
  );
}
