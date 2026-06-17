export type CaseStudy = {
  title: string;
  background: string;
  instruction: string;
  approach: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title:
      "Shareholder Dispute: Quantifying Oppression in an Owner-Managed Business",
    background:
      "A minority shareholder in a closely held retail business alleged oppression, claiming the majority had diverted profits and undervalued the company for a buyout.",
    instruction:
      "Appointed jointly retained expert to value the business at fair value and to assess whether alleged financial misconduct affected the valuation.",
    approach:
      "Analysed five years of financial statements and management information; investigated contested owner compensation and related-party transactions; applied income approach methodology with adjustments for identified add-backs.",
    outcome:
      "The expert report produced a higher valuation than the majority's position had suggested and identified significant unjustified owner compensation treated as an add-back. The matter settled at mediation.",
  },
  {
    title:
      "Marital Dissolution: Business Valuation and Hidden Income",
    background:
      "High-value marital dissolution involving a spouse who owned several businesses in the hospitality sector. The other party suspected significant undisclosed income.",
    instruction:
      "Jointly retained expert appointment to value the businesses and assess income available for support purposes.",
    approach:
      "Reviewed four years of business records, management information, and bank statements; conducted lifestyle analysis benchmarking declared income against identified expenditure; identified multiple add-backs and adjusted the income figure.",
    outcome:
      "The adjusted income figure was substantially higher than the declared position. The valuation and income analysis formed the basis for a settlement reached before trial.",
  },
  {
    title: "Civil Fraud Recovery: Tracing Diverted Corporate Funds",
    background:
      "A company suspected its former controller had systematically diverted funds to related accounts over a three-year period.",
    instruction:
      "Engaged through counsel under attorney-client privilege to investigate financial records and produce an evidence-quality report quantifying the alleged loss.",
    approach:
      "Analysed bank statements, accounting records, and payment approval workflows; traced fund flows from company accounts to related third-party accounts; reconstructed the fraud chronology and quantified total loss.",
    outcome:
      "The investigation identified a total loss significantly larger than initially suspected. The expert report supported a successful TRO application and formed the basis for civil recovery litigation.",
  },
  {
    title:
      "Civil Forfeiture: Challenging the Government's Benefit Calculation",
    background:
      "A defendant convicted in a fraudulent investment scheme faced a civil forfeiture proceeding. The government alleged a benefit figure substantially higher than defence counsel considered accurate.",
    instruction:
      "Retained by defence counsel to review and challenge the government's benefit calculation and asset tracing analysis.",
    approach:
      "Reviewed the government's financial analysis in detail; identified legitimate business receipts incorrectly categorised as criminal proceeds; traced the source of key assets to lawful income; produced an expert report for the forfeiture hearing.",
    outcome:
      "The Lawson Forensic report identified a materially lower benefit figure. The forfeiture order was significantly below the government's initial calculation.",
  },
];
