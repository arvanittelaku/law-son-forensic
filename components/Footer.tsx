import Link from "next/link";
import { SITE_NAME, SITE_EMAIL } from "@/lib/site";
import { CookieSettingsButton } from "./cookies/CookieSettingsButton";
import { services, servicePath } from "@/lib/data/services";
import { practiceAreas } from "@/lib/data/practice-areas";

const firmLinks = [
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/qualifications-accreditations", label: "Qualifications" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="container-page py-10 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <p className="font-serif text-lg font-semibold sm:text-xl">
              {SITE_NAME}
            </p>
            <p className="mt-2 text-sm text-white/70">
              Expert Witness &amp; Forensic Accounting
            </p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="mt-4 inline-block break-all text-sm text-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {SITE_EMAIL}
            </a>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={servicePath(s.id)}
                    className="inline-flex min-h-touch items-center text-sm text-white/70 transition hover:text-gold focus:outline-none focus-visible:underline"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">
              Firm
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {firmLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-touch items-center text-sm text-white/70 transition hover:text-gold focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-gold">
              Practice Areas
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {practiceAreas.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/practice-areas/${p.slug}`}
                    className="inline-flex min-h-touch items-center text-sm text-white/70 transition hover:text-gold"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 sm:mt-12">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/60">
            <Link href="/privacy" className="min-h-touch inline-flex items-center hover:text-gold">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline" aria-hidden="true">
              |
            </span>
            <Link href="/terms" className="min-h-touch inline-flex items-center hover:text-gold">
              Terms
            </Link>
            <span className="hidden sm:inline" aria-hidden="true">
              |
            </span>
            <Link href="/cookies" className="min-h-touch inline-flex items-center hover:text-gold">
              Cookie Policy
            </Link>
            <span className="hidden sm:inline" aria-hidden="true">
              |
            </span>
            <CookieSettingsButton className="min-h-touch inline-flex items-center text-white/70 hover:text-gold" />
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/60">
            {SITE_NAME} is an independent forensic accounting practice. We are
            not a law firm and do not provide legal advice.
          </p>
          <p className="mt-2 text-sm text-white/50">
            &copy; {new Date().getFullYear()} {SITE_NAME}. England and Wales.
          </p>
        </div>
      </div>
    </footer>
  );
}
