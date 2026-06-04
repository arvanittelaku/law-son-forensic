/**
 * Local connection test: npx tsx scripts/test-sheets.ts
 * Requires .env.local with Google credentials.
 */
import { config } from "dotenv";
import { appendRow } from "../lib/google-sheets";

config({ path: ".env.local" });

async function test() {
  console.log("Testing Google Sheets connection...\n");

  try {
    const result = await appendRow([
      new Date().toISOString(),
      "Test Entry",
      "Test Organisation",
      "test@example.com",
      "",
      "Test",
      "Commercial Dispute",
      "",
      "Test message from scripts/test-sheets.ts",
      "Other",
      "Lawson Forensic",
    ]);
    console.log("Row written:", result.updatedRange);
    console.log("\nAll tests passed.");
  } catch (error) {
    console.error("Failed:", error);
    process.exit(1);
  }
}

test();
