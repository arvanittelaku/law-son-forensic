import Link from "next/link";
import { buildMetadata, HOME_TITLE } from "@/lib/metadata";
import { getHomepageInternalLinks } from "@/lib/seo/internalLinks";
import { InternalLinksSection } from "@/components/seo/InternalLinksSection";
import { homepageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/Button";
import { services, servicePath } from "@/lib/data/services";
import { coreCapabilities } from "@/lib/data/core-capabilities";
import { SITE_REGION, SITE_REGION_NOTE } from "@/lib/site";

export const metadata = buildMetadata({
  title: HOME_TITLE,
  description:
    "Lawson Forensic is a U.S. boutique forensic accounting practice providing expert witness reports, business valuation, loss and damages quantification, shareholder dispute analysis, and litigation support for law firms and businesses nationwide.",
  path: "/",
});

const pillars = [
  {
    title: "Senior-led",
    text: "Every engagement is led by a senior forensic accountant with direct experience, not delegated to junior staff after instruction.",
  },
  {
    title: "Court-ready",
    text: "Reports are drafted for judges and juries, not accountants. Clear methodology, transparent reasoning, and conclusions that withstand rigorous cross-examination.",
  },
  {
    title: "Responsive",
    text: "We understand that litigation has deadlines. We respond within one business day and can provide urgent preliminary assessments where proceedings require it.",
  },
];

export default function HomePage() {
  const links = getHomepageInternalLinks();

  return (
    <>
      <JsonLd data={homepageSchema()} />
      <PageHero
        title="Lawson Forensic"
        subtitle="A U.S. boutique forensic accounting practice providing expert witness reports, business valuation, loss and damages quantification, and dispute support, with senior forensic accountant involvement from instruction to testimony."
      >
        <h2 className="sr-only">Expert Witness &amp; Forensic Accounting Services</h2>
        <Button href="/contact">Contact Us</Button>
        <Button href="/services" variant="secondary">
          Our Services
        </Button>
      </PageHero>

      <Section>
        <p className="rounded-card border border-gold/40 bg-gold/5 px-4 py-3 text-sm font-medium text-navy sm:text-base">
          <span className="font-semibold text-gold">United States only.</span>{" "}
          {SITE_REGION_NOTE}
        </p>
        <p className="mt-6 font-serif text-sm font-semibold uppercase tracking-wide text-gold">
          Expert Witness &amp; Forensic Accounting Services
        </p>
        <h2 className="mt-2 break-words font-serif text-xl font-semibold text-navy sm:text-2xl md:text-3xl">
          Who We Are
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-body sm:text-lg">
          Lawson Forensic is an independent forensic accounting practice serving
          clients across the {SITE_REGION}. We provide expert witness reports,
          forensic accounting, business valuation, shareholder dispute analysis,
          and loss and damages quantification for law firms, businesses, and
          insurers. Every engagement is led by a senior forensic accountant, not
          handed to a junior team after the first call.
        </p>
      </Section>

      <Section alt>
        <h2 className="break-words font-serif text-xl font-semibold text-navy sm:text-2xl md:text-3xl">
          Core Capabilities
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-body sm:text-lg">
          We specialize in the forensic accounting matters most commonly
          instructed in U.S. litigation: expert witness testimony, disputes,
          valuations, shareholder claims, and damages quantification.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreCapabilities.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-card border border-border bg-white p-6 shadow-card transition hover:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <h3 className="break-words font-serif text-lg font-semibold text-navy group-hover:text-gold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-body">{item.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="break-words font-serif text-xl font-semibold text-navy sm:text-2xl md:text-3xl">
          What We Do
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-body sm:text-lg">
          We work across commercial disputes, shareholder and partnership
          claims, fraud and financial crime, marital dissolution, personal
          injury damages, bankruptcy, and regulatory investigations. Whether you
          need an expert report for federal or state court, a business valuation
          in a shareholder dispute, or damages quantification following breach
          of contract, we respond quickly and advise clearly.
        </p>
      </Section>

      <Section alt>
        <h2 className="break-words font-serif text-xl font-semibold text-navy sm:text-2xl md:text-3xl">
          Why Law Firms Instruct Us
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-card border border-border border-t-4 border-t-gold bg-white p-6 shadow-card"
            >
              <h3 className="break-words font-serif text-lg font-semibold text-navy sm:text-xl">
                {pillar.title}
              </h3>
              <p className="mt-3 text-body leading-relaxed">{pillar.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="break-words font-serif text-xl font-semibold text-navy sm:text-2xl md:text-3xl">
          Our Forensic Accounting Services
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={servicePath(service.id)}
              className="group rounded-card border border-border bg-white p-6 shadow-card transition hover:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <h3 className="break-words font-serif text-lg font-semibold text-navy group-hover:text-gold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-body">{service.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="break-words font-serif text-xl font-semibold text-navy sm:text-2xl md:text-3xl">
          Who We Help
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-lg font-semibold text-navy">
              For Law Firms
            </h3>
            <p className="mt-3 text-body leading-relaxed">
              Trusted forensic accounting and expert witness support across
              commercial, family, and white-collar matters. Daubert-ready reports
              with senior-led delivery.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-navy">
              For Businesses
            </h3>
            <p className="mt-3 text-body leading-relaxed">
              Independent fraud investigations, dispute support, and pre-litigation
              assessments when financial records are contested or misconduct is
              suspected.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-navy">
              For Insurers
            </h3>
            <p className="mt-3 text-body leading-relaxed">
              Independent forensic analysis on claim fraud, quantum disputes, and
              complex financial policy matters.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <InternalLinksSection
          title="Explore our practice"
          links={[
            ...links.services,
            ...links.practiceAreas,
            { href: "/contact", label: "Contact us" },
          ]}
        />
      </Section>

      <Section alt className="!py-16">
        <blockquote className="mx-auto max-w-3xl border-l-4 border-gold pl-4 sm:pl-6">
          <p className="break-words font-serif text-lg italic leading-relaxed text-navy sm:text-xl md:text-2xl">
            Forensic accounting is as much about communication as calculation.
            The best expert report means nothing if it cannot be understood by
            the judge or jury who reads it.
          </p>
          <footer className="mt-4 text-sm font-semibold text-charcoal">
            Lawson Forensic
          </footer>
        </blockquote>
      </Section>

      <CTASection />
    </>
  );
}
