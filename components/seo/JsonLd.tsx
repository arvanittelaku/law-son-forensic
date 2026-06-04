import { jsonLdScript } from "@/lib/schema";

/** Renders JSON-LD per docs/SEO-ARCHITECTURE.md §4 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={jsonLdScript(data)}
    />
  );
}

/** Combine multiple schema objects into one @graph document */
export function JsonLdGraph({ graphs }: { graphs: object[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": graphs.flatMap((g) => {
          const node = g as { "@graph"?: object[]; "@context"?: string };
          if (node["@graph"]) return node["@graph"];
          const { "@context": _c, ...rest } = node;
          return [rest];
        }),
      }}
    />
  );
}
