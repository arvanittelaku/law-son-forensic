/**
 * Verifies built HTML includes canonical and title (post-build check).
 * Run: npm run build && npm run seo:verify:ssr
 */
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { buildPublicUrlInventory } from "../lib/seo/publicUrlInventory";
import { SITE_URL } from "../lib/site";

const SERVER_APP = join(process.cwd(), ".next", "server", "app");

function htmlPathForRoute(path: string): string | null {
  if (path === "/") return join(SERVER_APP, "index.html");
  const segments = path.split("/").filter(Boolean);
  const asSegmentHtml = join(SERVER_APP, ...segments) + ".html";
  if (existsSync(asSegmentHtml)) return asSegmentHtml;
  const nestedPage = join(SERVER_APP, ...segments, "page.html");
  if (existsSync(nestedPage)) return nestedPage;
  return null;
}

function main() {
  const inventory = buildPublicUrlInventory();
  const failures: string[] = [];

  for (const path of inventory.allPaths) {
    const file = htmlPathForRoute(path);
    if (!file) {
      failures.push(`Missing build output for ${path}`);
      continue;
    }
    const html = readFileSync(file, "utf8");
    const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
    if (!html.includes(canonical) && !html.includes(`canonical`)) {
      failures.push(`${path}: canonical not found (${canonical})`);
    }
    if (!html.includes("<title")) {
      failures.push(`${path}: missing <title>`);
    }
  }

  if (failures.length) {
    console.error("seo:verify:ssr failures:");
    failures.forEach((f) => console.error(" -", f));
    process.exit(1);
  }

  console.log(`seo:verify:ssr OK (${inventory.allPaths.length} routes)`);
}

main();
