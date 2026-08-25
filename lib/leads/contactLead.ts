import { appendRow, isGoogleSheetsConfigured } from "@/lib/google-sheets";

export type ContactLeadPayload = {
  fullName: string;
  email: string;
  phone?: string;
  organisation?: string;
  instructionType?: string;
  practiceArea?: string;
  deadline?: string;
  message?: string;
  referral?: string;
};

const BRAND_NAME = "Lawson Forensic";

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

export async function appendContactLeadToSheet(
  payload: ContactLeadPayload
): Promise<void> {
  if (!isGoogleSheetsConfigured()) {
    throw new Error("Google Sheets is not configured");
  }

  const timestamp = new Date().toISOString();

  await appendRow([
    timestamp,
    sanitize(payload.fullName),
    sanitize(payload.organisation || ""),
    payload.email.toLowerCase().trim(),
    sanitize(payload.phone || ""),
    sanitize(payload.instructionType || ""),
    sanitize(payload.practiceArea || ""),
    payload.deadline || "",
    sanitize(payload.message || ""),
    sanitize(payload.referral || ""),
    BRAND_NAME,
  ]);
}
