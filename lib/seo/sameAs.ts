import { LINKEDIN_URL } from "../site";

/** Merges LinkedIn + optional comma-separated directory URLs (SEO architecture §3). */
export function getOrganizationSameAs(): string[] {
  const extra = process.env.NEXT_PUBLIC_SAME_AS_URLS;
  const fromEnv = extra
    ? extra
        .split(",")
        .map((u) => u.trim())
        .filter(Boolean)
    : [];
  return [...new Set([LINKEDIN_URL, ...fromEnv])];
}
