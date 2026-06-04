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
    title: "Instructing a Forensic Accountant: What Solicitors Should Know",
    description:
      "A practical guide for solicitors on choosing a forensic accountant, drafting letters of instruction, and working effectively with experts.",
    excerpt:
      "How to choose the right forensic accountant, what to include in a letter of instruction, and when to appoint a single joint expert.",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
    sections: [
      {
        paragraphs: [
          "Instructing the right forensic accountant can materially affect the trajectory of a dispute. The expert's methodology, independence, and ability to communicate complex financial analysis to the court are often as important as the underlying numbers. This guide sets out what UK solicitors should consider when selecting and instructing a forensic accounting expert.",
        ],
      },
      {
        heading: "Choosing the right expert",
        paragraphs: [
          "Look for a chartered accountant with specific forensic experience, not general audit or tax practice. ICAEW Forensic Accreditation, Certified Fraud Examiner (CFE) status, and membership of the Academy of Experts or Expert Witness Institute are useful indicators of court-facing expertise.",
          "Confirm the expert has experience in your specific type of matter: a commercial loss quantification expert may not be the right appointment for a POCA confiscation hearing or a matrimonial business valuation. Ask directly about comparable instructions and whether they accept single joint expert appointments if that is under consideration.",
          "Responsiveness matters in litigation. Establish at the outset whether a senior practitioner will lead the engagement, what the conflicts check process involves, and typical timelines for your type of instruction.",
        ],
      },
      {
        heading: "The letter of instruction",
        paragraphs: [
          "A clear letter of instruction is the foundation of effective expert evidence. It should set out the proceedings, the issues for the expert to address, the documents provided (and any further documents to follow), the procedural framework (CPR Part 35, FPR Part 25, or CrPR Part 33), and the timetable.",
          "Avoid instructing the expert to reach a particular conclusion. The expert's duty is to the court. Questions should be framed to elicit independent analysis: for example, 'What was the maintainable earnings of the business in the year before the breach?' rather than 'Confirm that profits were understated.'",
          "For joint instructions, both parties should agree the letter of instruction before the expert begins substantive work. Disputes over scope at the draft report stage are costly and avoidable.",
        ],
      },
      {
        heading: "Party-appointed vs single joint expert",
        paragraphs: [
          "A party-appointed expert is instructed by one side and owes a duty to the court notwithstanding. A single joint expert (SJE) is jointly instructed under CPR 35.7 or FPR 25.11 and must demonstrate independence throughout.",
          "SJE appointments reduce costs and expert divergence where the issues are suitable for a single opinion. They are common in family financial remedy and many commercial disputes. They are less appropriate where the parties' positions on methodology are fundamentally opposed before any expert analysis is undertaken.",
          "If two party experts are appointed, consider whether a joint expert meeting is likely to narrow issues and whether written questions under CPR Part 35.6 are anticipated.",
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
          "For SJE appointments, agree how costs will be shared and what happens if one party fails to provide documents on time.",
          "At Lawson Forensic, every engagement is senior-led from instruction through to report and oral evidence. To discuss an instruction, visit our contact page or email info@lawsonforensic.com.",
        ],
      },
    ],
  },
  {
    slug: "business-valuation-divorce-guide",
    title: "Business Valuation in Divorce: The Key Issues for Family Law Solicitors",
    description:
      "Personal vs transferable goodwill, add-backs, income analysis, and liquidity in matrimonial business valuations.",
    excerpt:
      "The key forensic accounting issues in financial remedy business valuations and income analysis.",
    datePublished: "2025-02-10",
    dateModified: "2025-06-01",
    sections: [
      {
        paragraphs: [
          "Business valuation in financial remedy proceedings raises issues that do not arise in commercial valuations. The distinction between personal and transferable goodwill, the treatment of add-backs to income, and liquidity analysis (whether the business can actually fund a lump sum) are central. Family law solicitors instructing forensic accountants should ensure these issues are explicitly addressed in the expert's remit.",
        ],
      },
      {
        heading: "Personal and transferable goodwill",
        paragraphs: [
          "A business may have significant value on paper, but much of that value may attach to the spouse personally rather than to the business as a transferable asset. Personal goodwill does not survive the departure of the owner in the same way as transferable goodwill tied to systems, staff, and customer contracts.",
          "The expert should explain how they have separated personal and transferable elements and the impact on the valuation conclusion. Failure to address this can produce a valuation that overstates the realisable value of the business interest.",
        ],
      },
      {
        heading: "Add-backs and income analysis",
        paragraphs: [
          "Declared income from owner-managed businesses is often an unreliable guide to resources available for maintenance and capital claims. Forensic review of accounts, management information, and bank statements may identify add-backs: excessive remuneration, personal expenses through the business, related-party transactions, and unexplained cash movements.",
          "Lifestyle analysis benchmarking declared income against identified expenditure remains a valuable cross-check where disclosure is contested.",
        ],
      },
      {
        heading: "Liquidity",
        paragraphs: [
          "A high valuation is of limited practical use if the business cannot fund a lump sum without jeopardising operations or triggering tax consequences. Liquidity analysis should address working capital requirements, distributable reserves, banking covenants, and the realistic timing of any extraction of value.",
        ],
      },
      {
        heading: "Tax and structure",
        paragraphs: [
          "Corporate structure, shareholder agreements, and tax planning can affect both valuation and liquidity. The expert should understand how shares are held and whether extraction of value triggers tax charges that reduce the net benefit of a lump sum order.",
          "Where multiple businesses exist, consider whether they should be valued together or separately, and whether cross-guarantees or shared overheads distort maintainable earnings.",
        ],
      },
      {
        heading: "Lawson Forensic's approach",
        paragraphs: [
          "We produce FPR Part 25 compliant reports addressing valuation methodology, income analysis, and liquidity in clear terms for the family court. We accept single joint expert appointments and party appointments.",
          "Our reports explain methodology choices so the judge understands why a particular approach was applied. See our Family Proceedings practice area or contact us to discuss an instruction.",
        ],
      },
    ],
  },
  {
    slug: "poca-benefit-calculation-guide",
    title: "POCA Benefit Calculations: Common Issues in Defence Expert Evidence",
    description:
      "How criminal benefit is calculated under POCA, common prosecution errors, and the role of defence forensic accounting.",
    excerpt:
      "Common issues in POCA benefit and available amount calculations and how defence experts can assist.",
    datePublished: "2025-03-05",
    dateModified: "2025-06-01",
    sections: [
      {
        paragraphs: [
          "Proceeds of Crime Act confiscation proceedings often turn on financial analysis that is complex, contested, and highly consequential for the defendant. Defence solicitors frequently instruct forensic accountants to review the prosecution's benefit calculation, challenge available amount assessments, and provide CrPR Part 33 compliant expert evidence for Newton hearings.",
        ],
      },
      {
        heading: "How benefit is calculated",
        paragraphs: [
          "The prosecution will typically assert a benefit figure based on the criminal conduct proved or admitted, often using assumptions about turnover, profit margins, or the value of assets acquired during the relevant period. The defence expert's role is to test those assumptions against the underlying financial records and to identify receipts that are legitimately explained by lawful business activity.",
          "Common issues include double counting, inclusion of third-party receipts, failure to deduct legitimate costs, and categorisation of inter-account transfers as criminal benefit.",
        ],
      },
      {
        heading: "Available amount",
        paragraphs: [
          "The available amount assessment determines what the defendant can realistically pay. Tracing the source of assets to lawful income, identifying jointly held property interests, and challenging overstatement of tainted gifts are recurring themes.",
        ],
      },
      {
        heading: "Newton hearings",
        paragraphs: [
          "Where the parties dispute facts relevant to benefit or available amount, the court may determine issues at a Newton hearing. The defence expert report must be clear, methodical, and capable of withstanding cross-examination. Early instruction allows the expert to review the prosecution's case statement and financial schedules before positions harden.",
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
          "We review prosecution schedules in detail, reconstruct financial flows from primary records, and produce independent expert reports for defence teams.",
          "Early instruction allows us to influence the issues before the prosecution's position crystallises. See our Fraud & Financial Crime practice area or contact us to discuss a POCA instruction.",
        ],
      },
    ],
  },
  {
    slug: "choosing-single-joint-expert",
    title: "Choosing a Single Joint Expert in Commercial Disputes: A Practical Guide",
    description:
      "When to appoint an SJE, agreeing the expert, joint letters of instruction, and managing the written questions process.",
    excerpt:
      "When an SJE is appropriate, how to agree the expert, and practical tips on joint instructions.",
    datePublished: "2025-04-20",
    dateModified: "2025-06-01",
    sections: [
      {
        paragraphs: [
          "Single joint expert (SJE) appointments are a valuable tool in commercial litigation where the court expects parties to cooperate on expert evidence. Appointed under CPR 35.7, the SJE is jointly instructed and must demonstrate independence throughout. This guide covers when an SJE is appropriate and how to manage the process effectively.",
        ],
      },
      {
        heading: "When is an SJE appropriate?",
        paragraphs: [
          "An SJE works well where the parties agree that expert evidence is needed but wish to avoid the cost and complexity of two competing experts. Typical examples include business valuation in shareholder disputes, loss quantification where methodology is not fundamentally contested at the outset, and accounting standards compliance issues.",
          "An SJE is less suitable where each party intends to advance a materially different methodological framework and wants their own expert to develop that framework without constraint.",
        ],
      },
      {
        heading: "Agreeing the expert",
        paragraphs: [
          "Parties should agree an expert with relevant forensic experience, availability, and no conflicts. If agreement cannot be reached, the court may select the expert. Instructing firms should conduct conflicts checks before nominating an expert.",
          "Lawson Forensic accepts SJE appointments in commercial and family matters nationwide.",
        ],
      },
      {
        heading: "Joint letter of instruction",
        paragraphs: [
          "The joint letter should define the issues, list documents, set timetables, and address costs sharing. Both parties should sign off before substantive work begins. Scope disputes after the draft report is delivered are difficult to resolve without further cost.",
        ],
      },
      {
        heading: "Written questions and joint meetings",
        paragraphs: [
          "CPR Part 35.6 allows parties to put written questions to the expert. Questions should be focused and not amount to cross-examination by correspondence. Joint expert meetings can narrow issues before trial and should be considered where two party experts remain appointed in parallel proceedings.",
        ],
      },
      {
        heading: "Costs of SJE appointments",
        paragraphs: [
          "Parties typically share the SJE's fees equally unless the court orders otherwise. Agree payment terms and what happens if one party instructs supplemental advisers: the SJE remains independent and is not an advocate for either side.",
        ],
      },
      {
        heading: "SJE vs two party experts",
        paragraphs: [
          "Two party experts may be necessary in high-value disputes with fundamental methodological disagreement. Even then, a pre-trial joint meeting can reduce the issues for trial.",
          "The court may encourage SJE appointment under CPR 35.7 where expert evidence is needed but costs must be controlled. We advise instructing solicitors on scope at the outset.",
          "Contact Lawson Forensic to discuss whether an SJE or party appointment is appropriate for your matter.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string): InsightArticle | undefined {
  return insights.find((i) => i.slug === slug);
}
