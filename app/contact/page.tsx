import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { SITE_EMAIL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact Lawson Forensic | UK Forensic Accounting & Expert Witness",
  description:
    "Contact Lawson Forensic to discuss a forensic accounting instruction. Solicitors, businesses, and insurers welcome. Response within one business day.",
  path: "/contact",
});

const trustPoints = [
  "Senior-led engagements",
  "CPR Part 35 | FPR Part 25 | CrPR Part 33",
  "SJE appointments available",
  "Legal Aid accepted where appropriate",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        title="Contact Lawson Forensic"
        subtitle="We respond to all enquiries within one business day. Please provide as much detail as possible about the matter so we can assess whether we are able to assist and confirm there is no conflict of interest."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <Section>
        <div className="grid min-w-0 gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="min-w-0 lg:order-1 lg:col-span-2">
            <ContactForm />
          </div>
          <aside className="min-w-0 rounded-card border border-border bg-section-alt p-5 shadow-card sm:p-6 lg:order-2">
            <h2 className="font-serif text-lg font-semibold text-navy">
              Contact details
            </h2>
            <p className="mt-4 text-body">
              Email:{" "}
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="break-all font-semibold text-gold hover:underline"
              >
                {SITE_EMAIL}
              </a>
            </p>
            <p className="mt-2 text-sm text-body">
              Response within one business day
            </p>
            <h3 className="mt-8 font-serif text-base font-semibold text-navy">
              Why instruct Lawson Forensic
            </h3>
            <ul className="mt-4 space-y-3">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-sm text-body before:text-gold before:content-['✓']"
                >
                  {point}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
