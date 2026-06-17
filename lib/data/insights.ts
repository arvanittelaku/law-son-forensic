import { SITE_EMAIL } from "../site";

export type InsightSection = {
  heading?: string;
  paragraphs: string[];
};

export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  sections: InsightSection[];
};

export const insights: InsightArticle[] = [
  {
    slug: "instructing-forensic-accountant-guide",
    title: "Instructing a Forensic Accountant: What Attorneys Should Know",
    description:
      "A practical guide for U.S. attorneys on choosing a forensic accountant, drafting engagement letters, and working effectively with experts.",
    excerpt:
      "How to choose the right forensic accountant, what to include in an engagement letter, and when to use a jointly retained expert.",
    datePublished: "2025-01-15",
    dateModified: "2025-06-04",
    sections: [
      {
        paragraphs: [
          "Instructing the right forensic accountant can materially affect the trajectory of a dispute. The expert's methodology, independence, and ability to communicate complex financial analysis to the court are often as important as the underlying numbers. This guide sets out what U.S. attorneys should consider when selecting and instructing a forensic accounting expert.",
        ],
      },
      {
        heading: "Choosing the right expert",
        paragraphs: [
          "Look for a CPA or forensic accountant with specific litigation experience, not general audit or tax practice. Certified in Financial Forensics (CFF), Certified Fraud Examiner (CFE) status, and business valuation credentials (such as ABV or CVA) are useful indicators of court-facing expertise.",
          "Confirm the expert has experience in your specific type of matter: a commercial damages expert may not be the right appointment for a civil forfeiture hearing or a marital business valuation. Ask directly about comparable instructions and whether they accept jointly retained appointments if that is under consideration.",
          "Responsiveness matters in litigation. Establish at the outset whether a senior practitioner will lead the engagement, what the conflicts check process involves, and typical timelines for your type of instruction.",
        ],
      },
      {
        heading: "The engagement letter",
        paragraphs: [
          "A clear engagement letter is the foundation of effective expert evidence. It should set out the case, the issues for the expert to address, the documents provided (and any further documents to follow), applicable procedural rules, and the timetable.",
          "Avoid instructing the expert to reach a particular conclusion. Questions should be framed to elicit independent analysis: for example, 'What were the maintainable earnings of the business in the year before the breach?' rather than 'Confirm that profits were understated.'",
          "For joint instructions, both parties should agree the scope before the expert begins substantive work. Disputes over scope at the draft report stage are costly and avoidable.",
        ],
      },
      {
        heading: "Party-retained vs jointly retained expert",
        paragraphs: [
          "A party-retained expert is engaged by one side and must remain objective and independent. A jointly retained expert is agreed by both parties and must demonstrate independence throughout.",
          "Joint appointments reduce costs and expert divergence where the issues are suitable for a single opinion. They are common in marital dissolution and many commercial disputes. They are less appropriate where the parties' positions on methodology are fundamentally opposed before any expert analysis is undertaken.",
          "If two party experts are appointed, consider whether an expert conference is likely to narrow issues and whether depositions are anticipated.",
        ],
      },
      {
        heading: "Working effectively with your expert",
        paragraphs: [
          "Provide complete financial documentation early. Incomplete records extend timelines and may limit the expert's ability to form a preliminary view. If urgent relief is sought, ask whether a preliminary assessment is available before a full report.",
          "Maintain a single point of contact where possible and respond promptly to requests for further documents. Experts cannot opine on records they have not seen.",
          "If the expert's preliminary view may be adverse, you need to know promptly. Reputable experts will advise at an early stage. This is not a weakness; it allows realistic case assessment and negotiation strategy.",
        ],
      },
      {
        heading: "Costs and proportionality",
        paragraphs: [
          "Discuss budget and scope at the outset. A proportionate report addressing the issues the court must decide is preferable to an unnecessarily comprehensive report that increases costs without improving outcomes.",
          "For jointly retained appointments, agree how costs will be shared and what happens if one party fails to provide documents on time.",
          `At Lawson Forensic, every engagement is senior-led from instruction through to report and testimony. To discuss an instruction, visit our contact page or email ${SITE_EMAIL}.`,
        ],
      },
    ],
  },
  {
    slug: "business-valuation-divorce-guide",
    title: "Business Valuation in Divorce: Key Issues for Family Law Attorneys",
    description:
      "Personal vs enterprise goodwill, add-backs, income analysis, and liquidity in marital business valuations.",
    excerpt:
      "The key forensic accounting issues in marital dissolution business valuations and income analysis.",
    datePublished: "2025-02-10",
    dateModified: "2025-06-04",
    sections: [
      {
        paragraphs: [
          "Business valuation in marital dissolution raises issues that do not arise in commercial valuations. The distinction between personal and enterprise goodwill, the treatment of add-backs to income, and liquidity analysis (whether the business can actually fund a distribution) are central. Family law attorneys instructing forensic accountants should ensure these issues are explicitly addressed in the expert's scope.",
        ],
      },
      {
        heading: "Personal and enterprise goodwill",
        paragraphs: [
          "A business may have significant value on paper, but much of that value may attach to the spouse personally rather than to the business as a transferable asset. Personal goodwill does not survive the departure of the owner in the same way as enterprise goodwill tied to systems, staff, and customer contracts.",
          "The expert should explain how they have separated personal and enterprise elements and the impact on the valuation conclusion. Failure to address this can produce a valuation that overstates the realisable value of the business interest.",
        ],
      },
      {
        heading: "Add-backs and income analysis",
        paragraphs: [
          "Declared income from owner-managed businesses is often an unreliable guide to resources available for support and property division. Forensic review of accounts, management information, and bank statements may identify add-backs: excessive compensation, personal expenses through the business, related-party transactions, and unexplained cash movements.",
          "Lifestyle analysis benchmarking declared income against identified expenditure remains a valuable cross-check where disclosure is contested.",
        ],
      },
      {
        heading: "Liquidity",
        paragraphs: [
          "A high valuation is of limited practical use if the business cannot fund a distribution without jeopardising operations or triggering tax consequences. Liquidity analysis should address working capital requirements, distributable reserves, banking covenants, and the realistic timing of any extraction of value.",
        ],
      },
      {
        heading: "Tax and structure",
        paragraphs: [
          "Corporate structure, operating agreements, and tax planning can affect both valuation and liquidity. The expert should understand how ownership is held and whether extraction of value triggers tax charges that reduce the net benefit of a distribution.",
          "Where multiple businesses exist, consider whether they should be valued together or separately, and whether shared overheads distort maintainable earnings.",
        ],
      },
      {
        heading: "Lawson Forensic's approach",
        paragraphs: [
          "We produce expert reports addressing valuation methodology, income analysis, and liquidity in clear terms for family court. We accept jointly retained and party-retained appointments.",
          "Our reports explain methodology choices so the court understands why a particular approach was applied. See our Marital Dissolution practice area or contact us to discuss an instruction.",
        ],
      },
    ],
  },
  {
    slug: "poca-benefit-calculation-guide",
    title: "Civil Forfeiture Calculations: Common Issues in Defence Expert Evidence",
    description:
      "How criminal proceeds are calculated in civil forfeiture, common government errors, and the role of defence forensic accounting.",
    excerpt:
      "Common issues in forfeiture benefit calculations and how defence experts can assist.",
    datePublished: "2025-03-05",
    dateModified: "2025-06-04",
    sections: [
      {
        paragraphs: [
          "Civil forfeiture proceedings often turn on financial analysis that is complex, contested, and highly consequential for the defendant. Defence counsel frequently instruct forensic accountants to review the government's benefit calculation, challenge asset tracing, and provide expert evidence for forfeiture hearings.",
        ],
      },
      {
        heading: "How benefit is calculated",
        paragraphs: [
          "The government will typically assert a benefit figure based on the criminal conduct proved or admitted, often using assumptions about revenue, profit margins, or the value of assets acquired during the relevant period. The defence expert's role is to test those assumptions against the underlying financial records and to identify receipts that are legitimately explained by lawful business activity.",
          "Common issues include double counting, inclusion of third-party receipts, failure to deduct legitimate costs, and categorisation of inter-account transfers as criminal proceeds.",
        ],
      },
      {
        heading: "Asset tracing",
        paragraphs: [
          "The available asset assessment determines what can realistically be forfeited. Tracing the source of assets to lawful income, identifying jointly held property interests, and challenging overstatement of tainted transfers are recurring themes.",
        ],
      },
      {
        heading: "Forfeiture hearings",
        paragraphs: [
          "Where the parties dispute facts relevant to benefit or available assets, the court may determine issues at a forfeiture hearing. The defence expert report must be clear, methodical, and capable of withstanding cross-examination. Early instruction allows the expert to review the government's case and financial schedules before positions harden.",
        ],
      },
      {
        heading: "Expert evidence at the hearing",
        paragraphs: [
          "The expert must be able to defend the analysis under cross-examination. Clear schedules linking each element of benefit to underlying transactions assist the court and reduce hearing time.",
          "Coordinate with counsel on which issues require expert evidence and which are legal characterisation of agreed facts.",
        ],
      },
      {
        heading: "Lawson Forensic's approach",
        paragraphs: [
          "We review government schedules in detail, reconstruct financial flows from primary records, and produce independent expert reports for defence teams.",
          "Early instruction allows us to influence the issues before the government's position crystallises. See our Fraud & Financial Crime practice area or contact us to discuss a forfeiture instruction.",
        ],
      },
    ],
  },
  {
    slug: "choosing-single-joint-expert",
    title: "Choosing a Jointly Retained Expert in Commercial Disputes: A Practical Guide",
    description:
      "When to appoint a jointly retained expert, agreeing the expert, joint engagement letters, and managing discovery.",
    excerpt:
      "When a jointly retained expert is appropriate, how to agree the expert, and practical tips on joint instructions.",
    datePublished: "2025-04-20",
    dateModified: "2025-06-04",
    sections: [
      {
        paragraphs: [
          "Jointly retained expert appointments are a valuable tool in commercial litigation where the court expects parties to cooperate on expert evidence. The expert is agreed by both sides and must demonstrate independence throughout. This guide covers when a joint appointment is appropriate and how to manage the process effectively.",
        ],
      },
      {
        heading: "When is a joint expert appropriate?",
        paragraphs: [
          "A jointly retained expert works well where the parties agree that expert evidence is needed but wish to avoid the cost and complexity of two competing experts. Typical examples include business valuation in shareholder disputes, damages quantification where methodology is not fundamentally contested at the outset, and accounting standards compliance issues.",
          "A joint expert is less suitable where each party intends to advance a materially different methodological framework and wants their own expert to develop that framework without constraint.",
        ],
      },
      {
        heading: "Agreeing the expert",
        paragraphs: [
          "Parties should agree an expert with relevant forensic experience, availability, and no conflicts. If agreement cannot be reached, the court may appoint the expert. Instructing firms should conduct conflicts checks before nominating an expert.",
          "Lawson Forensic accepts jointly retained appointments in commercial and family matters nationwide.",
        ],
      },
      {
        heading: "Joint engagement letter",
        paragraphs: [
          "The joint engagement should define the issues, list documents, set timetables, and address cost sharing. Both parties should sign off before substantive work begins. Scope disputes after the draft report is delivered are difficult to resolve without further cost.",
        ],
      },
      {
        heading: "Depositions and expert conferences",
        paragraphs: [
          "Parties may depose the expert under applicable rules. Questions should be focused. Expert conferences can narrow issues before trial and should be considered where two party experts remain appointed in parallel proceedings.",
        ],
      },
      {
        heading: "Costs of joint appointments",
        paragraphs: [
          "Parties typically share the expert's fees equally unless the court orders otherwise. Agree payment terms and what happens if one party instructs supplemental advisers: the expert remains independent and is not an advocate for either side.",
        ],
      },
      {
        heading: "Joint expert vs two party experts",
        paragraphs: [
          "Two party experts may be necessary in high-value disputes with fundamental methodological disagreement. Even then, a pre-trial expert conference can reduce the issues for trial.",
          "The court may encourage joint expert appointment where expert evidence is needed but costs must be controlled. We advise instructing counsel on scope at the outset.",
          "Contact Lawson Forensic to discuss whether a jointly retained or party-retained appointment is appropriate for your matter.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string): InsightArticle | undefined {
  return insights.find((i) => i.slug === slug);
}
