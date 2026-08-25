import { SITE_URL } from "./site";

/** Hostname from NEXT_PUBLIC_SITE_URL, without www (standard n8n `domain` field). */
export function getSiteDomain(): string {
  try {
    const hostname = new URL(SITE_URL).hostname;
    return hostname.replace(/^www\./, "");
  } catch {
    return "lawsonforensic.com";
  }
}
