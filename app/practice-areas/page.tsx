import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { practiceAreas } from "@/lib/data/practice-areas";

export const metadata = buildMetadata({
  title: "Practice Areas | Lawson Forensic UK Forensic Accounting",
  description:
    "Lawson Forensic's practice areas: commercial disputes, fraud, family law, personal injury, insolvency, and regulatory matters. Specialist forensic accounting across all major litigation types.",
  path: "/practice-areas",
});

export default function PracticeAreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Practice Areas", path: "/practice-areas" },
        ])}
      />
      <PageHero
        title="Practice Areas"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Practice Areas" },
        ]}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              className="group rounded-card border border-border bg-white p-8 shadow-card transition hover:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <h2 className="font-serif text-xl font-semibold text-navy group-hover:text-gold">
                {area.title}
              </h2>
              <p className="mt-3 text-body leading-relaxed">
                {area.shortDescription}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-gold">
                View practice area
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
