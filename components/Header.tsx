"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SITE_NAME } from "@/lib/site";
import { TopBar } from "./TopBar";
import { NavDropdown } from "./NavDropdown";
import { services, servicePath } from "@/lib/data/services";
import { practiceAreas } from "@/lib/data/practice-areas";

const simpleNavLinks = [
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
];

const serviceDropdownItems = services.map((s) => ({
  href: servicePath(s.id),
  label: s.title,
}));

const practiceAreaDropdownItems = practiceAreas.map((p) => ({
  href: `/practice-areas/${p.slug}`,
  label: p.title,
}));

const mobileGroups = [
  {
    label: "About the Firm",
    links: [
      { href: "/about", label: "About" },
      { href: "/how-we-work", label: "How We Work" },
      { href: "/qualifications-accreditations", label: "Qualifications" },
    ],
  },
  {
    label: "Services",
    links: [
      { href: "/services", label: "All Services" },
      ...serviceDropdownItems,
    ],
  },
  {
    label: "Practice Areas",
    links: [
      { href: "/practice-areas", label: "All Practice Areas" },
      ...practiceAreaDropdownItems,
    ],
  },
  {
    label: "Experience & Resources",
    links: [
      { href: "/case-studies", label: "Case Studies" },
      { href: "/insights", label: "Insights" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-copper bg-white shadow-sm">
      <TopBar />

      <div className="container-page flex items-center justify-between gap-4 py-3 sm:py-4">
        <Link
          href="/"
          className="group min-h-touch shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
        >
          <span className="block font-serif text-xl font-bold tracking-tight text-ink transition group-hover:text-copper xs:text-2xl nav:text-[1.65rem]">
            {SITE_NAME}
          </span>
          <span className="mt-0.5 block text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-sage xs:text-xs">
            Forensic Accounting &amp; Litigation Support
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 nav:flex xl:gap-3"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="inline-flex min-h-touch items-center rounded px-2 py-2 text-sm font-medium text-body transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-copper xl:px-3"
          >
            Home
          </Link>
          {simpleNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-touch items-center rounded px-2 py-2 text-sm font-medium text-body transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-copper xl:px-3"
            >
              {link.label}
            </Link>
          ))}
          <NavDropdown
            label="Services"
            href="/services"
            items={serviceDropdownItems}
            align="left"
          />
          <NavDropdown
            label="Practice Areas"
            href="/practice-areas"
            items={practiceAreaDropdownItems}
            align="right"
          />
          <Link
            href="/contact"
            className="ml-2 inline-flex min-h-touch shrink-0 items-center rounded-card bg-copper px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 xl:ml-3 xl:px-5"
          >
            Request Consultation
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-touch min-w-touch shrink-0 flex-col items-center justify-center gap-1.5 rounded nav:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-0.5 w-6 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-border bg-white nav:hidden"
          aria-label="Mobile navigation"
        >
          <div className="container-page space-y-6 py-6 pb-safe">
            <Link
              href="/"
              className="flex min-h-touch items-center font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            {mobileGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-sage">
                  {group.label}
                </p>
                <ul className="space-y-1">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex min-h-touch items-center break-words text-body hover:text-ink"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              href="/contact"
              className="flex min-h-touch w-full items-center justify-center rounded-card bg-copper text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Request Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
