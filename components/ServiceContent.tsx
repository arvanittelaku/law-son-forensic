import type { ServiceContentBlock } from "@/lib/data/services";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";

export function ServiceContent({ blocks }: { blocks: ServiceContentBlock[] }) {
  return (
    <div className="prose-lawson max-w-none space-y-8">
      {blocks.map((block, i) => {
        if (block.type === "prose") {
          return (
            <div key={i}>
              {block.heading && (
                <h2 className="font-serif text-xl font-semibold text-navy sm:text-2xl">
                  {block.heading}
                </h2>
              )}
              <div className={block.heading ? "mt-4 space-y-4" : "space-y-4"}>
                {block.paragraphs.map((p, j) => (
                  <p key={j} className="text-base leading-relaxed text-body">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          );
        }
        if (block.type === "list") {
          return (
            <div key={i}>
              <h2 className="font-serif text-xl font-semibold text-navy sm:text-2xl">
                {block.heading}
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-body sm:pl-6">
                {block.items.map((item) => (
                  <li key={item} className="break-words">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        return (
          <ResponsiveTable
            key={i}
            heading={block.heading}
            columns={block.columns}
            rows={block.rows}
          />
        );
      })}
    </div>
  );
}
