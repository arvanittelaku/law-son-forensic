import {
  CONSENT_MAX_AGE_DAYS,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  type ConsentState,
} from "./types";

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== CONSENT_VERSION) return null;
    const ageMs = Date.now() - parsed.timestamp;
    const maxAgeMs = CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;
    if (ageMs > maxAgeMs) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(state: ConsentState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
    document.cookie = `${CONSENT_STORAGE_KEY}=1; path=/; max-age=${CONSENT_MAX_AGE_DAYS * 24 * 60 * 60}; SameSite=Lax`;
  } catch {
    // Storage unavailable
  }
}

export function clearConsent(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CONSENT_STORAGE_KEY);
  document.cookie = `${CONSENT_STORAGE_KEY}=; path=/; max-age=0; SameSite=Lax`;
}
