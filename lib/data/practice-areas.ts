import type { FAQ } from "./faq";

export type PracticeArea = {
  slug: string;
  title: string;
  shortDescription: string;
  h1: string;
  paragraphs: string[];
  faqs: FAQ[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "commercial-disputes",
    title: "Commercial Disputes",
    shortDescription:
      "Loss quantification, business valuation, breach of warranty, shareholder disputes, and professional negligence.",
    h1: "Commercial Disputes",
    paragraphs: [
      "Lawson Forensic provides forensic accounting and expert witness services across the full range of commercial disputes where financial evidence is central to the claim or defence. We accept instructions on loss of profits and consequential loss, business and share valuation, breach of warranty and completion accounts disputes, shareholder claims under the Companies Act 2006, partnership and joint venture disputes, intellectual property royalty matters, and professional negligence claims against accountants and advisers.",
      "Our approach is to establish a clear, defensible methodology at the outset and to explain that methodology in terms the court can follow. Whether appointed as a party expert or single joint expert, we apply the valuation or quantification approach appropriate to the specific proceedings and the nature of the business involved.",
      "Typical instructions include quantifying loss following breach of contract, valuing shares in unfair prejudice proceedings, analysing completion accounts adjustments in M&A disputes, and providing expert evidence on accounting standards compliance in professional negligence claims.",
    ],
    faqs: [
      {
        question:
          "What types of commercial disputes does Lawson Forensic handle?",
        answer:
          "Lawson Forensic accepts instructions across the full range of commercial disputes where forensic accounting evidence is needed, including loss of profits claims, breach of warranty in M&A transactions, shareholder disputes under CA 2006 s994, partnership dissolution, IP royalty disputes, and professional negligence claims against accountants or advisers. We accept both party-appointed and single joint expert instructions.",
      },
      {
        question:
          "How does Lawson Forensic approach business valuation in contentious proceedings?",
        answer:
          "We apply the methodology appropriate to the specific proceedings and the nature of the business: maintainable earnings for stable trading businesses, DCF for growth companies, NAV for property or investment vehicles. We clearly explain our methodology choice and the reasoning behind it, so the court understands why we have applied the approach we have.",
      },
    ],
  },
  {
    slug: "fraud-financial-crime",
    title: "Fraud & Financial Crime",
    shortDescription:
      "Fraud investigation, civil recovery, POCA proceedings, asset tracing, and regulatory investigation support.",
    h1: "Fraud & Financial Crime",
    paragraphs: [
      "Lawson Forensic assists solicitors, businesses, and defence teams with fraud investigation, civil fraud recovery support, POCA confiscation proceedings, asset tracing, employee and corporate fraud matters, and support in SFO and FCA investigations. Our investigations are proportionate, evidence-focused, and designed to establish or disprove suspicion through rigorous financial records analysis.",
      "Where instructed via solicitors, investigation reports can be protected by legal professional privilege until the client decides to disclose. We discuss at the outset whether the engagement is an investigation, a shadow expert role, or a testifying expert role, as these require different handling in civil proceedings.",
      "In criminal and confiscation matters, we produce CrPR Part 33 compliant expert reports challenging prosecution benefit calculations, tracing assets, and reconstructing financial records where the quantum of alleged criminal benefit is contested.",
    ],
    faqs: [
      {
        question: "How does Lawson Forensic approach fraud investigations?",
        answer:
          "Our fraud investigations begin with understanding the known facts: what is suspected and what evidence is currently available. We then plan a proportionate investigation aimed at establishing or disproving the suspicion through financial records analysis. Where instructed via solicitors, investigation reports are protected by legal professional privilege until the client decides to disclose.",
      },
      {
        question:
          "Can Lawson Forensic assist with both the investigation and the expert witness report?",
        answer:
          "In civil proceedings, we can assist with both, though the role may need to be clarified at the outset. A shadow expert role (assisting litigation strategy without providing disclosed expert evidence) is distinct from a testifying expert role. We discuss this with instructing solicitors at the start of every engagement.",
      },
    ],
  },
  {
    slug: "family-proceedings",
    title: "Family Proceedings",
    shortDescription:
      "Financial remedy, FPR Part 25 reports, business valuation, Form E review, and hidden asset investigation.",
    h1: "Family Proceedings",
    paragraphs: [
      "Lawson Forensic provides forensic accounting and expert witness services in financial remedy proceedings, including FPR Part 25 compliant business valuations, Form E review, hidden asset and income investigation, add-backs analysis, and Schedule 1 and TOLATA matters. We understand the particular requirements of family court expert evidence and the importance of clear, accessible reporting for judges and parties.",
      "Matrimonial business valuations require specific adjustments compared to commercial valuations, particularly the distinction between personal and transferable goodwill, and liquidity analysis establishing whether the business can fund a lump sum award. We address both in our reports.",
      "We are available for single joint expert appointments under FPR Part 25, jointly instructed by both parties, and understand the joint letter of instruction format and written questions process in financial remedy proceedings.",
    ],
    faqs: [
      {
        question:
          "Does Lawson Forensic accept SJE appointments in family proceedings?",
        answer:
          "Yes. We are available for SJE appointments under FPR Part 25, jointly instructed by both parties. We understand the particular requirements of SJE instructions in financial remedy proceedings, including the joint letter of instruction format and the written questions process.",
      },
      {
        question:
          "How does Lawson Forensic value a business in divorce proceedings?",
        answer:
          "Matrimonial business valuations require specific adjustments compared to commercial valuations, particularly the distinction between personal and transferable goodwill, and the liquidity analysis establishing whether the business can fund a lump sum. We address both in our FPR Part 25 compliant reports.",
      },
    ],
  },
  {
    slug: "personal-injury-clinical-negligence",
    title: "Personal Injury & Clinical Negligence",
    shortDescription:
      "Loss of earnings, pension loss, Ogden Tables methodology, and self-employed earnings analysis.",
    h1: "Personal Injury & Clinical Negligence",
    paragraphs: [
      "Lawson Forensic provides loss of earnings and pension loss expert evidence in personal injury and clinical negligence claims. Our reports cover past loss (net earnings to trial), future loss using Ogden Tables 8th Edition multipliers, pension loss using the Ogden Tables H approach or actuarial methods for complex defined benefit schemes, and Smith v Manchester considerations where appropriate.",
      "Self-employed and owner-managed business earnings require specific forensic analysis: establishing pre-accident maintainable earnings from tax returns and accounts, addressing business trajectory, and analysing any business impact separate from the personal injury. We have extensive experience in self-employed PI quantum.",
      "We work with claimant and defendant solicitors and accept instructions in High Court and County Court proceedings, producing clear reports that translate complex earnings analysis into conclusions the court can apply.",
    ],
    faqs: [
      {
        question:
          "Does Lawson Forensic cover both loss of earnings and pension loss in PI claims?",
        answer:
          "Yes. We provide a comprehensive loss of earnings analysis covering past loss (net earnings to trial), future loss (multiplier and multiplicand using Ogden Tables 8th Edition), and pension loss (Ogden Tables H approach or actuarial method for complex defined benefit schemes). We address whether the conventional future loss approach or a Smith v Manchester award is appropriate.",
      },
      {
        question:
          "Can Lawson Forensic handle self-employed earnings in PI claims?",
        answer:
          "Yes. Self-employed and owner-managed business earnings require specific forensic analysis: establishing pre-accident maintainable earnings from tax returns and business accounts, addressing business trajectory (growth or decline), and analysing any business impact separate from the personal injury. We have extensive experience in self-employed PI quantum.",
      },
    ],
  },
  {
    slug: "insolvency-administration",
    title: "Insolvency & Administration",
    shortDescription:
      "Solvency analysis, transactions at undervalue, preferences, wrongful trading, and misfeasance.",
    h1: "Insolvency & Administration",
    paragraphs: [
      "Lawson Forensic provides independent forensic accounting analysis in insolvency matters, including solvency analysis at key dates, transactions at undervalue under section 238, preferences under section 239, wrongful trading under section 214, misfeasance under section 212, and administrator conduct reviews.",
      "We accept instructions from liquidators, administrators, creditors, and directors' defence teams. Our work typically establishes the company's financial position at relevant dates, supporting wrongful trading claims or defences, asset values for transaction challenges, and comparison of claims in preference proceedings.",
      "Wrongful trading analysis under the Insolvency Act 1986 requires establishing when a director knew or ought to have known there was no reasonable prospect of avoiding insolvent liquidation. We analyse financial records to establish the position at successive dates and identify when the solvency threshold was crossed.",
    ],
    faqs: [
      {
        question:
          "What is Lawson Forensic's role in insolvency proceedings?",
        answer:
          "We provide independent forensic accounting analysis in insolvency matters, typically establishing the company's financial position at relevant dates (solvency analysis for wrongful trading; asset values for transactions at undervalue; comparison of claims for preferences). We accept instructions from liquidators, administrators, creditors, and directors' defence teams.",
      },
      {
        question:
          "How is solvency assessed for wrongful trading purposes?",
        answer:
          "Wrongful trading analysis under Insolvency Act 1986 s214 requires establishing the date when a director knew or ought to have known there was no reasonable prospect of avoiding insolvent liquidation. We analyse the company's financial records to establish the financial position at successive dates, identifying the point at which the solvency threshold was crossed.",
      },
    ],
  },
  {
    slug: "regulatory-proceedings",
    title: "Regulatory Proceedings",
    shortDescription:
      "FCA enforcement, HMRC COP8/COP9, SFO defence support, and expert evidence in regulatory matters.",
    h1: "Regulatory Proceedings",
    paragraphs: [
      "Lawson Forensic assists with forensic accounting in regulatory proceedings, including FCA enforcement challenges, HMRC COP8 and COP9 investigations, SFO defence support, FRC enforcement matters, and expert evidence in Upper Tribunal and related proceedings.",
      "In FCA enforcement, we provide independent analysis challenging the regulator's financial calculations, including market abuse quantification, financial position assessments, and penalty calculation analysis. We support defence teams at Decision Notice stage and produce expert reports for tribunal proceedings.",
      "In HMRC COP9 (Contractual Disclosure Facility) investigations, we assist with forensic reconstruction of financial records, quantification of the tax position, and preparation of disclosure under the CDF process, working alongside specialist tax litigation counsel.",
    ],
    faqs: [
      {
        question:
          "How does Lawson Forensic assist in FCA enforcement proceedings?",
        answer:
          "We provide independent forensic accounting analysis challenging the FCA's financial analysis in enforcement proceedings, including market abuse calculations, financial position assessments, and penalty calculation analysis. We produce expert reports for Upper Tribunal proceedings and support defence teams at the Decision Notice stage.",
      },
      {
        question:
          "Can Lawson Forensic assist with HMRC COP9 investigations?",
        answer:
          "Yes. In HMRC COP9 (Contractual Disclosure Facility) investigations, we assist with forensic reconstruction of the financial records, quantification of the tax position, and preparation of the disclosure required under the CDF process. We work alongside specialist tax litigation counsel.",
      },
    ],
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((p) => p.slug === slug);
}
