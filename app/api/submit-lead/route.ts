import { NextResponse } from "next/server";
import { notifyLeadWebhook } from "@/lib/leadNotification";

function sanitize(str: string, maxLen: number): string {
  return str.replace(/<[^>]*>/g, "").trim().slice(0, maxLen);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      fullName?: string;
      email?: string;
      phone?: string;
      formType?: string;
      organisation?: string;
      instructionType?: string;
      practiceArea?: string;
      deadline?: string;
      message?: string;
      referral?: string;
    };

    const fullName = sanitize(body.fullName ?? "", 200);
    const email = sanitize(body.email ?? "", 320).toLowerCase();
    const phone = sanitize(body.phone ?? "", 50);

    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, error: "fullName and email are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const message = sanitize(body.message ?? "", 4000);
    if (body.formType === "contact" && !message) {
      return NextResponse.json(
        { success: false, error: "message is required" },
        { status: 400 }
      );
    }

    const result = await notifyLeadWebhook({ fullName, email, phone });

    if (message || body.organisation || body.instructionType) {
      console.log("Contact enquiry details:", {
        fullName,
        email,
        phone,
        formType: body.formType ?? "contact",
        organisation: sanitize(body.organisation ?? "", 200),
        instructionType: sanitize(body.instructionType ?? "", 100),
        practiceArea: sanitize(body.practiceArea ?? "", 100),
        deadline: sanitize(body.deadline ?? "", 50),
        message,
        referral: sanitize(body.referral ?? "", 100),
      });
    }

    if (!result.ok) {
      return NextResponse.json(
        { success: false, error: "Lead notification dispatch failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, forwarded: result.forwarded });
  } catch (error) {
    console.error("submit-lead error:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
