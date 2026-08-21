import Link from "next/link";
import { SITE_NAME, SITE_EMAIL, SITE_REGION } from "@/lib/site";
import { CookieSettingsButton } from "./cookies/CookieSettingsButton";
import { services, servicePath } from "@/lib/data/services";
import { practiceAreas } from "@/lib/data/practice-areas";

const firmLinks = [
  { href: "/about", label: "About" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/qualifications-accreditations", label: "Qualifications" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="border-t-4 border-copper bg-white">
        <div className="container-page py-12 sm:py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-3">
              <p className="font-serif text-2xl font-bold text-ink">{SITE_NAME}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-muted">
                Independent forensic accounting, expert witness testimony, business
                valuations, and damages analysis for litigation nationwide.
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-sage">
                {SITE_REGION} Only
              </p>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="mt-4 inline-block break-all text-sm font-medium text-copper hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
              >
                {SITE_EMAIL}
              </a>
            </div>

            <div className="lg:col-span-3">
              <p className="section-label">Expert Services</p>
              <ul className="mt-4 space-y-2">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={servicePath(s.id)}
                      className="inline-flex min-h-touch items-center text-sm text-body transition hover:text-copper focus:outline-none focus-visible:underline"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <p className="section-label">Practice Areas</p>
              <ul className="mt-4 space-y-2">
                {practiceAreas.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/practice-areas/${p.slug}`}
                      className="inline-flex min-h-touch items-center text-sm text-body transition hover:text-copper focus:outline-none focus-visible:underline"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <p className="section-label">The Firm</p>
              <ul className="mt-4 space-y-2">
                {firmLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-touch items-center text-sm text-body transition hover:text-copper focus:outline-none focus-visible:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-stone-dark">
        <div className="container-page py-6 sm:py-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-muted">
            <Link href="/privacy" className="min-h-touch inline-flex items-center hover:text-copper">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline text-border" aria-hidden="true">
              |
            </span>
            <Link href="/terms" className="min-h-touch inline-flex items-center hover:text-copper">
              Terms of Use
            </Link>
            <span className="hidden sm:inline text-border" aria-hidden="true">
              |
            </span>
            <Link href="/cookies" className="min-h-touch inline-flex items-center hover:text-copper">
              Cookie Policy
            </Link>
            <span className="hidden sm:inline text-border" aria-hidden="true">
              |
            </span>
            <CookieSettingsButton className="min-h-touch inline-flex items-center text-slate-muted hover:text-copper" />
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-muted">
            {SITE_NAME} is an independent forensic accounting practice. We are not
            a law firm and do not provide legal advice. Our services are available
            to clients in the {SITE_REGION} only.
          </p>
        </div>
      </div>

      <div className="bg-ink py-4 text-center">
        <p className="text-sm text-white/60">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
