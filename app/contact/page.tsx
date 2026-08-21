import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { SITE_EMAIL, SITE_REGION_NOTE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact Lawson Forensic | U.S. Forensic Accounting & Expert Witness",
  description:
    "Contact Lawson Forensic to discuss a forensic accounting instruction. Law firms and businesses across the United States welcome. Response within one business day.",
  path: "/contact",
});

const trustPoints = [
  "Senior-led engagements",
  "Expert witness & forensic accounting",
  "Valuations, disputes & damages",
  "United States clients only",
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
        subtitle={`We respond to all enquiries within one business day. ${SITE_REGION_NOTE}`}
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
          <aside className="min-w-0 rounded-card border border-border bg-stone-dark p-5 shadow-card sm:p-6 lg:order-2">
            <h2 className="font-serif text-lg font-semibold text-ink">
              Contact details
            </h2>
            <p className="mt-4 text-body">
              Email:{" "}
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="break-all font-semibold text-copper hover:underline"
              >
                {SITE_EMAIL}
              </a>
            </p>
            <p className="mt-2 text-sm text-body">
              Response within one business day
            </p>
            <h3 className="mt-8 font-serif text-base font-semibold text-ink">
              Why instruct Lawson Forensic
            </h3>
            <ul className="mt-4 space-y-3">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 text-sm text-body before:text-copper before:content-['✓']"
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
