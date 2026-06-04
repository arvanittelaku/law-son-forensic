"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/site";

const instructionTypes = [
  "Expert Witness (Civil)",
  "Expert Witness (Family)",
  "Expert Witness (Criminal)",
  "Financial Investigation",
  "Preliminary Assessment",
  "Advisory / Litigation Support",
  "SJE Appointment",
  "Other",
];

const practiceAreas = [
  "Commercial Dispute",
  "Fraud & Financial Crime",
  "Family Proceedings",
  "Personal Injury / Clinical Negligence",
  "Insolvency",
  "Regulatory",
  "Other",
];

const referralSources = [
  "Search engine",
  "Referral from solicitor",
  "Referral from colleague",
  "LinkedIn",
  "Professional body",
  "Other",
];

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      fullName: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      organisation: String(fd.get("organisation") || "").trim(),
      instructionType: String(fd.get("instruction_type") || "").trim(),
      practiceArea: String(fd.get("practice_area") || "").trim(),
      deadline: String(fd.get("deadline") || "").trim(),
      message: String(fd.get("message") || "").trim(),
      referral: String(fd.get("referral") || "").trim(),
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push("/thank-you");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-card border border-border px-4 py-3 text-body focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 min-h-touch";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-navy">
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="organisation" className="mb-1 block text-sm font-medium text-navy">
            Law Firm / Organisation <span className="text-gold">*</span>
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-navy">
            Email <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-navy">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClass}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="instruction_type" className="mb-1 block text-sm font-medium text-navy">
            Nature of Instruction
          </label>
          <select id="instruction_type" name="instruction_type" className={inputClass}>
            {instructionTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="practice_area" className="mb-1 block text-sm font-medium text-navy">
            Practice Area
          </label>
          <select id="practice_area" name="practice_area" className={inputClass}>
            {practiceAreas.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="deadline" className="mb-1 block text-sm font-medium text-navy">
          Hearing / deadline date
        </label>
        <input id="deadline" name="deadline" type="date" className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-navy">
          Brief description of the matter <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="referral" className="mb-1 block text-sm font-medium text-navy">
          How did you hear about Lawson Forensic?
        </label>
        <select id="referral" name="referral" className={inputClass}>
          {referralSources.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          Unable to send your enquiry. Please email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="break-all text-gold underline">
            {SITE_EMAIL}
          </a>{" "}
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-touch w-full rounded-card border-2 border-gold bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-60 md:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
