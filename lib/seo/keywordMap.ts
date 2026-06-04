/**
 * Keyword-to-URL mapping from docs/SEO-ARCHITECTURE.md §1
 * Used for internal linking hints and content planning (not meta keywords stuffing).
 */

export type KeywordTier = "branded" | "transactional" | "informational" | "practice-area";

export type KeywordMapping = {
  tier: KeywordTier;
  keywords: string[];
  primaryUrls: string[];
  secondaryUrls: string[];
};

export const KEYWORD_MAPPINGS: KeywordMapping[] = [
  {
    tier: "branded",
    keywords: [
      "Lawson Forensic",
      "Lawson Forensic expert witness",
      "Lawson Forensic forensic accountant",
      "lawsonforensic.com",
    ],
    primaryUrls: ["/"],
    secondaryUrls: ["/about", "/services", "/contact"],
  },
  {
    tier: "transactional",
    keywords: [
      "forensic accountant expert witness UK",
      "forensic accounting expert witness UK",
      "boutique forensic accounting UK",
      "forensic accountant SJE UK",
    ],
    primaryUrls: ["/services/expert-witness", "/services"],
    secondaryUrls: ["/practice-areas", "/contact"],
  },
  {
    tier: "informational",
    keywords: [
      "how to instruct forensic accountant expert witness",
      "forensic accountant CPR Part 35 UK",
      "single joint expert forensic accountant UK",
    ],
    primaryUrls: [
      "/insights/instructing-forensic-accountant-guide",
      "/insights/choosing-single-joint-expert",
      "/faq",
      "/how-we-work",
    ],
    secondaryUrls: ["/services/expert-witness"],
  },
  {
    tier: "practice-area",
    keywords: ["forensic accountant commercial dispute UK"],
    primaryUrls: ["/practice-areas/commercial-disputes"],
    secondaryUrls: ["/services/loss-quantification", "/case-studies"],
  },
  {
    tier: "practice-area",
    keywords: ["forensic accountant divorce valuation UK"],
    primaryUrls: ["/practice-areas/family-proceedings"],
    secondaryUrls: ["/insights/business-valuation-divorce-guide"],
  },
  {
    tier: "practice-area",
    keywords: ["POCA expert witness forensic accountant UK"],
    primaryUrls: ["/practice-areas/fraud-financial-crime"],
    secondaryUrls: ["/insights/poca-benefit-calculation-guide"],
  },
];

export function getUrlsForPracticeAreaSlug(slug: string): {
  primary: string;
  services: string[];
  insights: string[];
} {
  const map: Record<
    string,
    { services: string[]; insights: string[] }
  > = {
    "commercial-disputes": {
      services: ["loss-quantification", "business-valuation"],
      insights: ["choosing-single-joint-expert"],
    },
    "fraud-financial-crime": {
      services: ["fraud-investigation", "asset-tracing"],
      insights: ["poca-benefit-calculation-guide"],
    },
    "family-proceedings": {
      services: ["family-matrimonial", "expert-witness"],
      insights: ["business-valuation-divorce-guide"],
    },
    "personal-injury-clinical-negligence": {
      services: ["expert-witness", "loss-quantification"],
      insights: [],
    },
    "insolvency-administration": {
      services: ["expert-witness", "business-valuation"],
      insights: [],
    },
    "regulatory-proceedings": {
      services: ["fraud-investigation", "expert-witness"],
      insights: [],
    },
  };

  const entry = map[slug] ?? { services: ["expert-witness"], insights: [] };
  return {
    primary: `/practice-areas/${slug}`,
    services: entry.services.map((id) => `/services/${id}`),
    insights: entry.insights.map((s) => `/insights/${s}`),
  };
}
