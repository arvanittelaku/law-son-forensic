import { SITE_EMAIL, SITE_REGION } from "@/lib/site";

export function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-ink pt-safe sm:block">
      <div className="container-page flex items-center justify-between gap-4 py-2 text-xs text-white/70">
        <p>
          Forensic Accounting &amp; Expert Witness Services &mdash;{" "}
          <span className="font-medium text-copper">{SITE_REGION} Only</span>
        </p>
        <a
          href={`mailto:${SITE_EMAIL}`}
          className="shrink-0 font-medium text-white/90 transition hover:text-copper focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
        >
          {SITE_EMAIL}
        </a>
      </div>
    </div>
  );
}
