import type { FAQ } from "./faq";

export type ServiceContentBlock =
  | { type: "prose"; heading?: string; paragraphs: string[] }
  | { type: "list"; heading: string; items: string[] }
  | {
      type: "table";
      heading: string;
      columns: string[];
      rows: string[][];
    };

export type Service = {
  id: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  blocks: ServiceContentBlock[];
};

export const services: Service[] = [
  {
    id: "expert-witness",
    title: "Expert Witness Reports",
    description:
      "CPR Part 35, FPR Part 25, and CrPR Part 33 compliant reports for civil, family, and criminal proceedings.",
    metaTitle: "Expert Witness Reports | Lawson Forensic UK",
    metaDescription:
      "CPR Part 35 and FPR Part 25 compliant expert witness reports for civil, family, and criminal proceedings. SJE appointments available nationwide.",
    blocks: [
      {
        type: "prose",
        heading: "CPR Part 35 & FPR Part 25 Compliant Expert Reports",
        paragraphs: [
          "All Lawson Forensic expert reports comply with the relevant procedural framework: CPR Part 35 for civil proceedings, FPR Part 25 for family proceedings, CrPR Part 33 for criminal matters. Our reports include a statement of truth and reflect our primary duty to the court.",
        ],
      },
      {
        type: "prose",
        heading: "Single Joint Expert (SJE) Appointments",
        paragraphs: [
          "We are available for SJE appointments in appropriate cases, jointly instructed by both parties under CPR 35.7 or FPR 25.11. We understand the particular importance of demonstrating independence in SJE roles and the different dynamic of joint instruction letters.",
        ],
      },
      {
        type: "list",
        heading: "What Our Expert Reports Cover",
        items: [
          "Loss of profits and consequential loss",
          "Business and share valuation",
          "Forensic accounting opinions (GAAP, IFRS, accounting standards compliance)",
          "Fraud loss quantification",
          "POCA benefit and available assets analysis",
          "Family financial proceedings (Form E review, business valuation, income analysis, add-backs)",
          "Loss of earnings (personal injury, ET)",
          "Insolvency analysis (solvency, transactions, misfeasance)",
        ],
      },
      {
        type: "table",
        heading: "The Expert Report Process",
        columns: ["Stage", "Lawson Forensic Action", "Typical Timeline"],
        rows: [
          ["Initial enquiry", "Assess scope, check conflicts, confirm availability", "Same day"],
          ["Letter of instruction", "Review, raise queries if needed", "Within 2 days"],
          ["Document review", "Analyse financial records and supporting materials", "1 to 4 weeks"],
          ["Draft report", "Prepare CPR/FPR compliant draft", "2 to 4 weeks"],
          ["Finalise", "Incorporate comments (factual only), finalise", "1 to 2 weeks"],
          ["Written questions", "Respond to CPR Part 35.6 questions", "Within directed timetable"],
          ["Oral evidence", "Attend hearing, give evidence", "As directed"],
        ],
      },
      {
        type: "prose",
        heading: "Ikarian Reefer & Our Duty to the Court",
        paragraphs: [
          "Our duty is to the court, not to the party instructing us. This shapes every opinion we give and every report we write. We will advise instructing solicitors promptly if our preliminary view may be adverse to the instructing party.",
        ],
      },
    ],
  },
  {
    id: "fraud-investigation",
    title: "Fraud Investigation",
    description:
      "Independent forensic investigations into suspected fraud and financial misconduct.",
    metaTitle: "Fraud Investigation | Lawson Forensic UK",
    metaDescription:
      "Independent forensic fraud investigations for solicitors and businesses, with evidence-quality reporting and LPP where instructed via solicitors.",
    blocks: [
      {
        type: "prose",
        heading: "Independent Forensic Investigations",
        paragraphs: [
          "Lawson Forensic conducts independent financial investigations for solicitors, businesses, and insurers, working under legal professional privilege where required to protect findings from premature disclosure.",
        ],
      },
      {
        type: "list",
        heading: "What We Investigate",
        items: [
          "Suspected employee fraud or financial misconduct",
          "Unexplained financial transactions or irregularities",
          "Business disputes where financial records are contested",
          "Pre-litigation fact-finding to assess claim strength",
          "Insurance claim investigation (fraud or quantum)",
          "Internal investigations prior to self-reporting or regulatory engagement",
        ],
      },
      {
        type: "prose",
        heading: "Legal Professional Privilege",
        paragraphs: [
          "Where instructed via a solicitor, investigation reports attract legal professional privilege until the client decides to disclose, protecting the ability to assess position before committing to a course of action.",
        ],
      },
      {
        type: "prose",
        heading: "Preliminary Assessments",
        paragraphs: [
          "In urgent situations, particularly where a freezing injunction is being considered, we can provide a rapid preliminary assessment of the financial evidence to support the application.",
        ],
      },
    ],
  },
  {
    id: "asset-tracing",
    title: "Asset Tracing",
    description:
      "Tracing diverted funds and reconstructing financial flows to support recovery proceedings.",
    metaTitle: "Asset Tracing | Lawson Forensic UK",
    metaDescription:
      "Forensic asset tracing and fund flow reconstruction for civil fraud recovery, insolvency, and dispute support.",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Lawson Forensic traces diverted funds and reconstructs financial flows from primary records, supporting freezing injunction applications, civil recovery, and insolvency claims.",
          "Our work includes bank statement analysis, identification of connected-party transfers, and chronologies linking transactions to alleged misconduct.",
        ],
      },
      {
        type: "list",
        heading: "Typical instructions",
        items: [
          "Tracing corporate funds diverted to connected accounts",
          "Identifying assets acquired with misappropriated funds",
          "Supporting civil fraud and recovery proceedings",
          "Insolvency preference and transaction claims",
        ],
      },
    ],
  },
  {
    id: "business-valuation",
    title: "Business Valuation",
    description:
      "Contentious and matrimonial valuations with clear, court-ready methodology.",
    metaTitle: "Business Valuation | Lawson Forensic UK",
    metaDescription:
      "Contentious and matrimonial business and share valuations with transparent, court-ready methodology.",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "We provide business and share valuations for commercial disputes, shareholder claims, and family financial remedy proceedings.",
          "Methodology is selected for the specific proceedings and business type: maintainable earnings, DCF, or NAV as appropriate, with clear explanation for the court.",
        ],
      },
      {
        type: "list",
        heading: "Matters we value",
        items: [
          "Owner-managed and SME trading businesses",
          "Shareholder and unfair prejudice disputes",
          "Matrimonial business interests (FPR Part 25)",
          "Completion accounts and breach of warranty disputes",
        ],
      },
    ],
  },
  {
    id: "loss-quantification",
    title: "Loss Quantification",
    description:
      "Loss of profits, consequential loss, and commercial dispute quantum analysis.",
    metaTitle: "Loss Quantification | Lawson Forensic UK",
    metaDescription:
      "Loss of profits and consequential loss quantification for commercial disputes and insurance claims.",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Lawson Forensic quantifies financial loss in commercial disputes, including loss of profits, consequential loss, and additional costs arising from breach of contract or tort.",
          "Analysis is based on financial records, counterfactual scenarios, and assumptions stated transparently so the court can follow the reasoning.",
        ],
      },
      {
        type: "list",
        heading: "Common instructions",
        items: [
          "Loss of profits following breach of contract",
          "Business interruption and consequential loss",
          "Shareholder and partnership dispute quantum",
          "Professional negligence loss quantification",
        ],
      },
    ],
  },
  {
    id: "family-matrimonial",
    title: "Family & Matrimonial Accounting",
    description:
      "Financial remedy, Form E review, business valuation, and income analysis.",
    metaTitle: "Family & Matrimonial Accounting | Lawson Forensic UK",
    metaDescription:
      "FPR Part 25 forensic accounting for financial remedy: Form E review, business valuation, income analysis, and add-backs.",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "We provide forensic accounting in financial remedy proceedings, including Form E review, business valuation, hidden asset and income investigation, add-backs, and liquidity analysis.",
          "We accept party-appointed and single joint expert appointments under FPR Part 25.",
        ],
      },
      {
        type: "list",
        heading: "Services in family proceedings",
        items: [
          "Matrimonial business valuation",
          "Income analysis and add-backs",
          "Form E review",
          "Schedule 1 and TOLATA matters",
        ],
      },
    ],
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function servicePath(id: string): string {
  return `/services/${id}`;
}
