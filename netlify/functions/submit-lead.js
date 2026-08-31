/**
 * Netlify backup for /api/submit-lead — soft webhook + soft Sheets.
 * Kept if an old redirect is still active on a deploy.
 */

const { google } = require("googleapis");

const BRAND_NAME = "Lawson Forensic";

function getLeadWebhookUrl() {
  return (
    process.env.Lead_notification_url ||
    process.env.LEAD_NOTIFICATION_URL ||
    ""
  );
}

function getSiteDomain() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.lawsonforensic.com";
  try {
    const hostname = new URL(siteUrl).hostname;
    return hostname.replace(/^www\./, "");
  } catch {
    return "lawsonforensic.com";
  }
}

function normalizePrivateKey(raw) {
  if (!raw) return undefined;
  let key = String(raw).trim();
  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1);
  }
  return key.replace(/\\n/g, "\n");
}

function isGoogleSheetsConfigured() {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY &&
      process.env.GOOGLE_SHEET_ID
  );
}

function sanitize(str) {
  return String(str || "")
    .replace(/<[^>]*>/g, "")
    .trim();
}

async function appendLeadToSheet(payload) {
  if (!isGoogleSheetsConfigured()) {
    console.warn("[submit-lead fn] Sheets not configured — skip");
    return false;
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const sheetName = (process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1").trim();
  const formType =
    String(payload.formType || "contact").toLowerCase() === "instruct"
      ? "Instruct"
      : "Contact";

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:L`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          BRAND_NAME,
          sanitize(payload.fullName),
          String(payload.email || "").toLowerCase().trim(),
          sanitize(payload.phone),
          formType,
          sanitize(payload.message),
          sanitize(payload.organisation),
          sanitize(payload.instructionType),
          sanitize(payload.practiceArea),
          sanitize(payload.deadline),
          sanitize(payload.referral),
        ],
      ],
    },
  });

  return true;
}

exports.handler = async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid JSON body" }),
    };
  }

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";

  if (!fullName || !email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "fullName and email are required" }),
    };
  }

  let forwarded = false;
  const webhookUrl = getLeadWebhookUrl();

  if (webhookUrl) {
    try {
      const outbound = {
        "Full Name": fullName,
        Email: email,
        "Phone Number": phone,
        "Brand name": BRAND_NAME,
        domain: getSiteDomain(),
      };
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(outbound),
      });
      if (!response.ok) {
        console.error(
          "Webhook POST failed:",
          response.status,
          await response.text()
        );
      } else {
        forwarded = true;
      }
    } catch (error) {
      console.error("Webhook POST error:", error);
    }
  } else {
    console.warn(
      "Lead_notification_url not configured — continuing with Sheets fallback"
    );
  }

  let writtenToSheet = false;
  try {
    writtenToSheet = await appendLeadToSheet(body);
  } catch (err) {
    console.error("Google Sheets error (submit-lead fn):", {
      message: err && err.message,
      tab: (process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1").trim(),
    });
  }

  if (!forwarded && !writtenToSheet) {
    return {
      statusCode: 502,
      body: JSON.stringify({ message: "Failed to save your enquiry" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      forwarded,
      writtenToSheet,
    }),
  };
};
