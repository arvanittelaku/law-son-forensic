import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Section, Prose } from "@/components/Section";
import { CTASection } from "@/components/CTASection";

export const metadata = buildMetadata({
  title: "About Lawson Forensic | UK Boutique Forensic Accounting Practice",
  description:
    "Lawson Forensic is a specialist UK forensic accounting practice. Senior-led engagements, CPR Part 35 compliance, and a track record across civil, family, and criminal proceedings.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        title="About Lawson Forensic"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <Section>
        <Prose>
          <h2>The Practice</h2>
          <p>
            Lawson Forensic is an independent boutique forensic accounting
            practice founded on a single principle: that every client deserves
            direct access to senior expertise, not a relationship partner who
            passes work to a junior team.
          </p>
          <p>
            We work with solicitors across the UK on expert witness instructions
            in civil, family, and criminal proceedings. We also work directly
            with businesses and insurers who need independent forensic accounting
            support without the overhead of a large firm.
          </p>

          <h2>Our Approach</h2>
          <p>
            We do not take instructions we cannot serve well. Before accepting
            any engagement, we assess whether we have the specific expertise the
            case requires, and if not, we say so.
          </p>
          <p>
            Every expert report produced by Lawson Forensic reflects our honest,
            independent view of the financial issues, consistent with our duty to
            the court under CPR Part 35, regardless of which party has instructed
            us.
          </p>

          <h2>Qualifications &amp; Accreditations</h2>
          <ul>
            <li>ACA / FCA (ICAEW)</li>
            <li>CFE (Certified Fraud Examiner)</li>
            <li>ICAEW Forensic &amp; Expert Witness Accreditation</li>
            <li>Member: Academy of Experts</li>
            <li>Member: Expert Witness Institute</li>
          </ul>
          <p>
            <Link href="/qualifications-accreditations" className="text-gold hover:underline">
              View full qualifications and accreditations
            </Link>
          </p>

          <h2>Scope of Practice</h2>
          <p>We accept instructions across:</p>
          <ul>
            <li>Civil proceedings (High Court, County Court)</li>
            <li>Family proceedings (FPR Part 25, Financial Remedy)</li>
            <li>Criminal proceedings (CrPR Part 33, POCA)</li>
            <li>Arbitration (LCIA, ICC)</li>
            <li>Regulatory proceedings (FCA, HMRC, SFO support)</li>
            <li>Private and pre-litigation investigations</li>
          </ul>
        </Prose>
      </Section>

      <CTASection
        title="Discuss Your Instruction"
        buttonText="Discuss Your Instruction"
      />
    </>
  );
}
