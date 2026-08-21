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
      "Independent forensic accounting expert witness reports for federal and state litigation, arbitration, and dispute resolution.",
    metaTitle: "Expert Witness Reports | Lawson Forensic USA",
    metaDescription:
      "Forensic accounting expert witness reports for U.S. civil, commercial, and family litigation. Daubert-ready methodology and clear courtroom testimony.",
    blocks: [
      {
        type: "prose",
        heading: "Court-Ready Expert Witness Reports",
        paragraphs: [
          "Lawson Forensic provides independent forensic accounting expert witness services for matters in U.S. federal and state courts. Our reports follow applicable procedural rules, including Federal Rule of Evidence 702 and state expert evidence standards, with transparent methodology and conclusions designed to withstand Daubert scrutiny and cross-examination.",
        ],
      },
      {
        type: "prose",
        heading: "Jointly Retained & Court-Appointed Experts",
        paragraphs: [
          "We accept party-retained and jointly retained expert appointments, as well as court-appointed expert roles where appropriate. In jointly retained matters, we maintain independence throughout and work from a clearly agreed scope of engagement.",
        ],
      },
      {
        type: "list",
        heading: "What Our Expert Reports Cover",
        items: [
          "Forensic accounting opinions and financial reconstruction",
          "Business and share valuation",
          "Shareholder and partnership dispute analysis",
          "Loss of profits and damages quantification",
          "Fraud loss and asset tracing support",
          "Marital dissolution business valuation and income analysis",
          "Lost earnings and economic damages (personal injury)",
          "Bankruptcy and solvency analysis",
        ],
      },
      {
        type: "table",
        heading: "The Expert Report Process",
        columns: ["Stage", "Lawson Forensic Action", "Typical Timeline"],
        rows: [
          ["Initial enquiry", "Assess scope, check conflicts, confirm availability", "Same day"],
          ["Engagement letter", "Review scope, raise queries if needed", "Within 2 days"],
          ["Document review", "Analyze financial records and supporting materials", "1 to 4 weeks"],
          ["Draft report", "Prepare expert report for review", "2 to 4 weeks"],
          ["Finalize", "Incorporate factual corrections, finalize", "1 to 2 weeks"],
          ["Deposition & trial", "Testify and respond to discovery as directed", "As scheduled"],
        ],
      },
      {
        type: "prose",
        heading: "Independence & Objectivity",
        paragraphs: [
          "Our opinions reflect our honest independent view of the financial issues. We advise retaining counsel promptly if our preliminary view may be adverse to the retaining party, because early clarity supports better case strategy.",
        ],
      },
    ],
  },
  {
    id: "fraud-investigation",
    title: "Fraud Investigation",
    description:
      "Independent forensic investigations into suspected fraud, embezzlement, and financial misconduct for U.S. counsel and businesses.",
    metaTitle: "Fraud Investigation | Lawson Forensic USA",
    metaDescription:
      "Independent forensic fraud investigations for law firms and businesses, with evidence-quality reporting and attorney-client privilege where engaged through counsel.",
    blocks: [
      {
        type: "prose",
        heading: "Independent Forensic Investigations",
        paragraphs: [
          "Lawson Forensic conducts independent financial investigations for law firms, businesses, and insurers across the United States, working under attorney-client privilege where engaged through counsel to protect findings from premature disclosure.",
        ],
      },
      {
        type: "list",
        heading: "What We Investigate",
        items: [
          "Suspected employee fraud or embezzlement",
          "Unexplained financial transactions or irregularities",
          "Business disputes where financial records are contested",
          "Pre-litigation fact-finding to assess claim strength",
          "Insurance claim investigation (fraud or quantum)",
          "Internal investigations prior to regulatory or government engagement",
        ],
      },
      {
        type: "prose",
        heading: "Attorney-Client Privilege",
        paragraphs: [
          "Where engaged through counsel, investigation work may be protected by attorney-client privilege until the client decides to disclose, supporting informed strategy before litigation is filed.",
        ],
      },
      {
        type: "prose",
        heading: "Preliminary Assessments",
        paragraphs: [
          "In urgent situations, particularly where a temporary restraining order or preliminary injunction is being considered, we can provide a rapid preliminary assessment of the financial evidence.",
        ],
      },
    ],
  },
  {
    id: "asset-tracing",
    title: "Asset Tracing",
    description:
      "Tracing diverted funds and reconstructing financial flows to support recovery and forfeiture proceedings.",
    metaTitle: "Asset Tracing | Lawson Forensic USA",
    metaDescription:
      "Forensic asset tracing and fund flow reconstruction for civil fraud recovery, bankruptcy, and commercial disputes in the United States.",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Lawson Forensic traces diverted funds and reconstructs financial flows from primary records, supporting TRO and preliminary injunction applications, civil recovery actions, and bankruptcy-related claims.",
          "Our work includes bank statement analysis, identification of related-party transfers, and chronologies linking transactions to alleged misconduct.",
        ],
      },
      {
        type: "list",
        heading: "Typical retentions",
        items: [
          "Tracing corporate funds diverted to related accounts",
          "Identifying assets acquired with misappropriated funds",
          "Supporting civil fraud and recovery litigation",
          "Bankruptcy fraudulent transfer and preference analysis",
        ],
      },
    ],
  },
  {
    id: "business-valuation",
    title: "Business Valuation",
    description:
      "Contentious business and equity valuations with clear, litigation-ready methodology for disputes and marital dissolution.",
    metaTitle: "Business Valuation | Lawson Forensic USA",
    metaDescription:
      "Contentious business, share, and partnership valuations with transparent, court-ready methodology for U.S. litigation.",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "We provide business and equity valuations for commercial disputes, shareholder and partnership claims, and marital dissolution proceedings across the United States.",
          "Methodology is selected for the specific matter and business type: income approach, discounted cash flow, or asset-based methods as appropriate, with clear explanation for the trier of fact.",
        ],
      },
      {
        type: "list",
        heading: "Matters we value",
        items: [
          "Closely held and owner-managed businesses",
          "Shareholder, oppression, and derivative disputes",
          "Marital dissolution business interests",
          "Purchase price adjustment and breach of warranty disputes",
          "Partnership buyout and dissolution matters",
        ],
      },
    ],
  },
  {
    id: "loss-quantification",
    title: "Loss & Damages Quantification",
    description:
      "Loss of profits, business interruption, consequential damages, and commercial dispute quantum analysis.",
    metaTitle: "Loss & Damages Quantification | Lawson Forensic USA",
    metaDescription:
      "Loss of profits, business interruption, and damages quantification for commercial disputes and insurance claims in the United States.",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Lawson Forensic quantifies financial loss and damages in commercial disputes, including loss of profits, business interruption, consequential damages, and additional costs arising from breach of contract or tort.",
          "Analysis is based on financial records, counterfactual scenarios, and assumptions stated transparently so the court or arbitrator can follow the reasoning.",
        ],
      },
      {
        type: "list",
        heading: "Common instructions",
        items: [
          "Loss of profits following breach of contract",
          "Business interruption and consequential damages",
          "Shareholder and partnership dispute quantum",
          "Professional negligence damages quantification",
          "Insurance policy quantum and coverage disputes",
        ],
      },
    ],
  },
  {
    id: "family-matrimonial",
    title: "Family & Marital Dissolution Accounting",
    description:
      "Marital dissolution financial analysis, business valuation, income reconstruction, and hidden asset investigation.",
    metaTitle: "Marital Dissolution Forensic Accounting | Lawson Forensic USA",
    metaDescription:
      "Forensic accounting for marital dissolution: business valuation, income analysis, lifestyle review, and hidden asset investigation.",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "We provide forensic accounting in marital dissolution proceedings, including business valuation, income reconstruction, hidden asset and income investigation, add-backs analysis, and liquidity assessment.",
          "We accept party-retained and jointly retained expert appointments in family court matters.",
        ],
      },
      {
        type: "list",
        heading: "Services in family matters",
        items: [
          "Marital business valuation",
          "Income analysis and add-backs",
          "Financial disclosure review",
          "Lifestyle and cash flow analysis",
          "Liquidity and distribution planning support",
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
