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
      "Loss and damages quantification, business valuation, breach of contract, shareholder disputes, and professional negligence.",
    h1: "Commercial Disputes",
    paragraphs: [
      "Lawson Forensic provides forensic accounting and expert witness services across commercial disputes where financial evidence is central to the claim or defence. We accept instructions on loss of profits and damages, business and equity valuation, breach of contract and warranty claims, shareholder oppression and derivative actions, partnership disputes, intellectual property royalty matters, and professional negligence claims against accountants and advisers.",
      "Our approach is to establish a clear, defensible methodology at the outset and to explain that methodology in terms the court or arbitrator can follow. Whether retained by one party or jointly, we apply the valuation or quantification approach appropriate to the specific proceedings and the nature of the business involved.",
      "Typical instructions include quantifying damages following breach of contract, valuing equity in shareholder disputes, analysing purchase price adjustments in M&A disputes, and providing expert evidence on accounting standards compliance in professional negligence claims.",
    ],
    faqs: [
      {
        question:
          "What types of commercial disputes does Lawson Forensic handle?",
        answer:
          "Lawson Forensic accepts instructions across commercial disputes where forensic accounting evidence is needed, including loss of profits and damages claims, breach of contract and warranty in M&A transactions, shareholder oppression and derivative actions, partnership dissolution, IP royalty disputes, and professional negligence claims against accountants or advisers. We accept party-retained and jointly retained expert instructions.",
      },
      {
        question:
          "How does Lawson Forensic approach business valuation in contentious proceedings?",
        answer:
          "We apply the methodology appropriate to the specific matter and the nature of the business: income approach for stable operating companies, discounted cash flow for growth businesses, asset-based methods for holding companies or asset-heavy entities. We clearly explain our methodology choice and the reasoning behind it.",
      },
    ],
  },
  {
    slug: "fraud-financial-crime",
    title: "Fraud & Financial Crime",
    shortDescription:
      "Fraud investigation, civil recovery, asset tracing, civil forfeiture support, and white-collar defence.",
    h1: "Fraud & Financial Crime",
    paragraphs: [
      "Lawson Forensic assists law firms, businesses, and defence teams with fraud investigation, civil fraud recovery support, asset tracing, employee and corporate fraud matters, civil forfeiture analysis, and support in DOJ and SEC investigations. Our investigations are proportionate, evidence-focused, and designed to establish or disprove suspicion through rigorous financial records analysis.",
      "Where engaged through counsel, investigation reports may be protected by attorney-client privilege until the client decides to disclose. We discuss at the outset whether the engagement is an investigation, consulting expert role, or testifying expert role.",
      "In criminal and forfeiture matters, we produce expert reports challenging government benefit calculations, tracing assets, and reconstructing financial records where the quantum of alleged criminal proceeds is contested.",
    ],
    faqs: [
      {
        question: "How does Lawson Forensic approach fraud investigations?",
        answer:
          "Our fraud investigations begin with understanding the known facts: what is suspected and what evidence is currently available. We then plan a proportionate investigation aimed at establishing or disproving the suspicion through financial records analysis. Where engaged through counsel, work may be protected by attorney-client privilege until disclosure is decided.",
      },
      {
        question:
          "Can Lawson Forensic assist with both the investigation and the expert witness report?",
        answer:
          "In civil proceedings, we can assist with both, though the role may need to be clarified at the outset. A consulting expert role (assisting litigation strategy without providing disclosed expert evidence) is distinct from a testifying expert role. We discuss this with instructing counsel at the start of every engagement.",
      },
    ],
  },
  {
    slug: "family-proceedings",
    title: "Marital Dissolution",
    shortDescription:
      "Business valuation, income analysis, financial disclosure review, and hidden asset investigation.",
    h1: "Marital Dissolution",
    paragraphs: [
      "Lawson Forensic provides forensic accounting and expert witness services in marital dissolution proceedings, including business valuations, financial disclosure review, hidden asset and income investigation, add-backs analysis, and liquidity assessment. We understand the particular requirements of family court expert evidence and the importance of clear, accessible reporting for judges and parties.",
      "Marital business valuations require specific adjustments compared to commercial valuations, particularly the distinction between personal and enterprise goodwill, and liquidity analysis establishing whether the business can fund a distribution without jeopardising operations.",
      "We are available for jointly retained expert appointments, as well as party-retained roles, and understand the joint engagement letter and discovery processes common in family court matters.",
    ],
    faqs: [
      {
        question:
          "Does Lawson Forensic accept jointly retained appointments in family matters?",
        answer:
          "Yes. We are available for jointly retained expert appointments where both parties agree on a single forensic accountant. We understand the particular requirements of joint instructions in marital dissolution proceedings, including agreed scope and discovery timelines.",
      },
      {
        question:
          "How does Lawson Forensic value a business in divorce proceedings?",
        answer:
          "Marital business valuations require specific adjustments compared to commercial valuations, particularly the distinction between personal and enterprise goodwill, and liquidity analysis establishing whether the business can fund a distribution. We address both in our expert reports.",
      },
    ],
  },
  {
    slug: "personal-injury-clinical-negligence",
    title: "Personal Injury & Medical Malpractice",
    shortDescription:
      "Lost earnings, future economic loss, self-employed income analysis, and vocational damages support.",
    h1: "Personal Injury & Medical Malpractice",
    paragraphs: [
      "Lawson Forensic provides lost earnings and economic damages expert evidence in personal injury and medical malpractice claims. Our reports cover past wage loss, future earning capacity using appropriate present-value methodology, fringe benefits and retirement loss, and analysis of self-employed and business-owner earnings.",
      "Self-employed and owner-managed business earnings require specific forensic analysis: establishing pre-incident maintainable earnings from tax returns and accounts, addressing business trajectory, and analysing any business impact separate from the personal injury. We have extensive experience in self-employed damages quantification.",
      "We work with plaintiff and defence counsel in state and federal proceedings, producing clear reports that translate complex earnings analysis into conclusions the trier of fact can apply.",
    ],
    faqs: [
      {
        question:
          "Does Lawson Forensic cover both lost earnings and future economic loss in PI claims?",
        answer:
          "Yes. We provide comprehensive lost earnings analysis covering past wage loss, future earning capacity, fringe benefits, and retirement loss where applicable. We address the appropriate present-value methodology and assumptions for the jurisdiction and facts of the case.",
      },
      {
        question:
          "Can Lawson Forensic handle self-employed earnings in PI claims?",
        answer:
          "Yes. Self-employed and owner-managed business earnings require specific forensic analysis: establishing pre-incident maintainable earnings from tax returns and business records, addressing business trajectory, and analysing any business impact separate from the personal injury.",
      },
    ],
  },
  {
    slug: "insolvency-administration",
    title: "Bankruptcy & Insolvency",
    shortDescription:
      "Solvency analysis, fraudulent transfers, preferences, fiduciary duty, and bankruptcy litigation support.",
    h1: "Bankruptcy & Insolvency",
    paragraphs: [
      "Lawson Forensic provides independent forensic accounting analysis in bankruptcy and insolvency matters, including solvency analysis at key dates, fraudulent transfer claims under the Bankruptcy Code, preference actions, fiduciary duty and breach of duty analysis, and trustee or creditor committee support.",
      "We accept instructions from trustees, creditors' committees, creditors, and debtor defence teams. Our work typically establishes the entity's financial position at relevant dates, supporting fraudulent transfer claims or defences, asset values for transaction challenges, and comparison of claims in preference proceedings.",
      "Solvency analysis for fiduciary duty claims requires establishing the company's financial position at successive dates and identifying when insolvency thresholds were crossed under applicable state and federal law.",
    ],
    faqs: [
      {
        question:
          "What is Lawson Forensic's role in bankruptcy proceedings?",
        answer:
          "We provide independent forensic accounting analysis in bankruptcy matters, typically establishing financial position at relevant dates (solvency for fiduciary claims; asset values for fraudulent transfer actions; comparison of claims for preferences). We accept instructions from trustees, creditors, and debtor defence teams.",
      },
      {
        question:
          "How is solvency assessed for fiduciary duty purposes?",
        answer:
          "Solvency analysis requires establishing the date when directors or managers knew or should have known the entity could not meet obligations as they came due. We analyse financial records to establish the financial position at successive dates, identifying when the solvency threshold was crossed.",
      },
    ],
  },
  {
    slug: "regulatory-proceedings",
    title: "Regulatory Proceedings",
    shortDescription:
      "SEC enforcement, DOJ white-collar defence, IRS matters, and expert evidence in regulatory disputes.",
    h1: "Regulatory Proceedings",
    paragraphs: [
      "Lawson Forensic assists with forensic accounting in regulatory proceedings, including SEC enforcement challenges, DOJ white-collar defence support, IRS civil and criminal tax matters, and expert evidence in administrative and federal court proceedings.",
      "In SEC enforcement, we provide independent analysis challenging the regulator's financial calculations, including disgorgement quantification, financial position assessments, and penalty calculation analysis. We support defence teams and produce expert reports for hearing and trial proceedings.",
      "In complex tax matters, we assist with forensic reconstruction of financial records, quantification of disputed positions, and preparation of financial disclosure, working alongside specialist tax counsel.",
    ],
    faqs: [
      {
        question:
          "How does Lawson Forensic assist in SEC enforcement proceedings?",
        answer:
          "We provide independent forensic accounting analysis challenging the SEC's financial analysis in enforcement proceedings, including disgorgement calculations, financial position assessments, and penalty analysis. We produce expert reports for administrative hearings and federal court proceedings.",
      },
      {
        question:
          "Can Lawson Forensic assist with IRS investigations?",
        answer:
          "Yes. In IRS civil and criminal investigations, we assist with forensic reconstruction of financial records, quantification of disputed tax positions, and preparation of financial analysis required for disclosure and defence strategy. We work alongside specialist tax counsel.",
      },
    ],
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((p) => p.slug === slug);
}
