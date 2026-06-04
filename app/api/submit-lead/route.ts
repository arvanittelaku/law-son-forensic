import { NextResponse } from "next/server";
import {
  appendContactLeadToSheet,
  notifyLeadWebhook,
  type ContactLeadPayload,
} from "@/lib/leads/contactLead";
import { isGoogleSheetsConfigured } from "@/lib/google-sheets";

export async function POST(request: Request) {
  let body: ContactLeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = String(body.fullName || "").trim();
  const email = String(body.email || "").trim();

  if (!fullName || !email) {
    return NextResponse.json(
      { error: "fullName and email are required" },
      { status: 400 }
    );
  }

  const payload: ContactLeadPayload = {
    fullName,
    email,
    phone: String(body.phone || "").trim(),
    organisation: String(body.organisation || "").trim(),
    instructionType: String(body.instructionType || "").trim(),
    practiceArea: String(body.practiceArea || "").trim(),
    deadline: String(body.deadline || "").trim(),
    message: String(body.message || "").trim(),
    referral: String(body.referral || "").trim(),
  };

  if (!isGoogleSheetsConfigured()) {
    return NextResponse.json(
      { error: "Google Sheets is not configured" },
      { status: 500 }
    );
  }

  try {
    await appendContactLeadToSheet(payload);
  } catch (error) {
    console.error("Google Sheets write failed:", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return NextResponse.json(
      { error: "Failed to save your enquiry" },
      { status: 500 }
    );
  }

  try {
    await notifyLeadWebhook(payload);
  } catch (error) {
    console.error("Lead webhook failed (non-blocking):", error);
  }

  return NextResponse.json({ ok: true });
}
