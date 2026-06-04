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
      "Shareholder Dispute: Quantifying Unfair Prejudice in an Owner-Managed Business",
    background:
      "A minority shareholder in an SME retailing business alleged unfair prejudice, claiming the majority had diverted profits and undervalued the company for a buyout.",
    instruction:
      "Appointed single joint expert to value the business at fair value under Companies Act 2006 s994, and to assess whether the alleged financial misconduct affected the valuation.",
    approach:
      "Analysed five years of accounts and management information; investigated the contested director remuneration and related-party transactions; applied maintainable earnings methodology with adjustments for the identified add-backs.",
    outcome:
      "The SJE report produced a higher valuation than the majority's own expert had suggested, and identified significant unjustified director remuneration that the tribunal treated as an add-back. The matter settled at the joint expert meeting stage.",
  },
  {
    title:
      "Financial Remedy: Business Valuation and Hidden Income in Divorce Proceedings",
    background:
      "High-value financial remedy proceedings involving a spouse who owned several businesses in the hospitality sector. The other party suspected significant undisclosed income.",
    instruction:
      "FPR Part 25 SJE appointment to value the businesses and assess the income available for maintenance purposes.",
    approach:
      "Reviewed four years of business accounts, management information, and bank statements; conducted lifestyle analysis benchmarking declared income against identified expenditure; identified multiple add-backs and adjusted the income figure.",
    outcome:
      "The adjusted income figure was substantially higher than the declared position. The valuation and income analysis formed the basis for the consent order reached at the FDR hearing.",
  },
  {
    title: "Civil Fraud Recovery: Tracing Diverted Corporate Funds",
    background:
      "A company suspected its former financial controller had systematically diverted funds to connected accounts over a three-year period.",
    instruction:
      "Instructed via solicitors under legal professional privilege to investigate the financial records and produce an evidence-quality report quantifying the alleged loss.",
    approach:
      "Analysed bank statements, accounting records, and payment approval workflows; traced the fund flows from company accounts to connected third-party accounts; reconstructed the fraud chronology and quantified the total loss.",
    outcome:
      "The investigation identified a total loss significantly larger than initially suspected. The expert report supported a successful freezing injunction application and formed the basis for civil recovery proceedings.",
  },
  {
    title:
      "POCA Confiscation: Challenging the Prosecution's Benefit Calculation",
    background:
      "A defendant convicted of a series of fraudulent investment scheme offences faced a POCA confiscation hearing. The prosecution alleged a benefit figure substantially higher than the defendant's counsel considered accurate.",
    instruction:
      "Instructed by defence solicitors to review and challenge the prosecution's POCA benefit calculation and available assets assessment.",
    approach:
      "Reviewed the prosecution's financial analysis in detail; identified legitimate business receipts incorrectly categorised as criminal benefit; traced the source of key assets to legitimate income; produced a CrPR Part 33 compliant expert report.",
    outcome:
      "The Lawson Forensic report identified a materially lower benefit figure. The Newton hearing concluded with a confiscation order significantly below the prosecution's initial calculation.",
  },
];
