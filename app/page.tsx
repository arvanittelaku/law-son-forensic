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

export const metadata = buildMetadata({
  title: HOME_TITLE,
  description:
    "Lawson Forensic is a UK boutique forensic accounting practice providing expert witness reports, financial investigations, and dispute support for solicitors, businesses, and insurers. CPR Part 35 compliant.",
  path: "/",
});

const pillars = [
  {
    title: "Senior-led",
    text: "Every engagement is led by a senior chartered accountant with direct forensic accounting experience, not delegated to junior staff after instruction.",
  },
  {
    title: "Court-ready",
    text: "Reports are drafted for judges, not accountants. Clear methodology, transparent reasoning, and conclusions that withstand rigorous cross-examination.",
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
        subtitle="A UK boutique forensic accounting practice providing independent expert witness reports, financial investigations, and dispute support, with senior forensic accountant involvement from instruction to testimony."
      >
        <h2 className="sr-only">Expert Witness &amp; Forensic Accounting Services</h2>
        <Button href="/contact">Contact Us</Button>
        <Button href="/services" variant="secondary">
          Our Services
        </Button>
      </PageHero>

      <Section>
        <p className="font-serif text-sm font-semibold uppercase tracking-wide text-gold">
          Expert Witness &amp; Forensic Accounting Services
        </p>
        <h2 className="mt-2 break-words font-serif text-xl font-semibold text-navy sm:text-2xl md:text-3xl">
          Who We Are
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-body sm:text-lg">
          Lawson Forensic is an independent forensic accounting practice
          providing expert witness reports and financial investigation services
          to solicitors, barristers, businesses, and insurers across the UK.
          Every engagement is led by a senior forensic accountant, not handed
          to a junior team after the first call.
        </p>
      </Section>

      <Section alt>
        <h2 className="break-words font-serif text-xl font-semibold text-navy sm:text-2xl md:text-3xl">
          What We Do
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-body sm:text-lg">
          We work across commercial disputes, fraud and financial crime, family
          financial proceedings, personal injury, insolvency, and regulatory
          investigations. Whether you need a CPR Part 35 compliant expert report
          for the High Court, an FPR Part 25 business valuation for the Family
          Division, or an urgent preliminary assessment before a freezing
          injunction application, we respond quickly and advise clearly.
        </p>
      </Section>

      <Section>
        <h2 className="break-words font-serif text-xl font-semibold text-navy sm:text-2xl md:text-3xl">
          Why Solicitors Instruct Us
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

      <Section alt>
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

      <Section>
        <h2 className="break-words font-serif text-xl font-semibold text-navy sm:text-2xl md:text-3xl">
          Who We Help
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-lg font-semibold text-navy">
              For Solicitors
            </h3>
            <p className="mt-3 text-body leading-relaxed">
              Trusted forensic accounting and expert witness support across civil,
              family, and criminal proceedings. CPR, FPR, and CrPR compliant
              reports with senior-led delivery.
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

      <Section alt>
        <InternalLinksSection
          title="Explore our practice"
          links={[
            ...links.services,
            ...links.practiceAreas,
            { href: "/contact", label: "Contact us" },
          ]}
        />
      </Section>

      <Section className="!py-16">
        <blockquote className="mx-auto max-w-3xl border-l-4 border-gold pl-4 sm:pl-6">
          <p className="break-words font-serif text-lg italic leading-relaxed text-navy sm:text-xl md:text-2xl">
            Forensic accounting is as much about communication as calculation.
            The best expert report means nothing if it cannot be understood by
            the judge who reads it.
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
