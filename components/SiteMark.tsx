import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

type SiteMarkProps = {
  size?: "sm" | "md";
  showText?: boolean;
  inverted?: boolean;
};

export function SiteMark({ size = "md", showText = true, inverted = false }: SiteMarkProps) {
  const boxSize = size === "sm" ? "h-9 w-9 text-[10px]" : "h-11 w-11 text-xs";
  const nameSize = size === "sm" ? "text-base" : "text-lg sm:text-xl";
  const tagSize = size === "sm" ? "text-[0.6rem]" : "text-[0.65rem] xs:text-xs";

  return (
    <span className="flex min-w-0 items-center gap-3">
      <span
        className={`flex shrink-0 items-center justify-center border-2 font-serif font-bold tracking-widest ${boxSize} ${
          inverted
            ? "border-copper bg-ink text-copper"
            : "border-copper bg-copper/10 text-copper"
        }`}
        aria-hidden="true"
      >
        LF
      </span>
      {showText && (
        <span className="min-w-0 leading-tight">
          <span
            className={`block truncate font-serif font-bold tracking-tight ${nameSize} ${
              inverted ? "text-white" : "text-ink"
            }`}
          >
            {SITE_NAME}
          </span>
          <span
            className={`mt-0.5 block truncate font-semibold uppercase tracking-[0.14em] ${tagSize} ${
              inverted ? "text-white/60" : "text-sage"
            }`}
          >
            Forensic Accounting
          </span>
        </span>
      )}
    </span>
  );
}

export function SiteMarkLink({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`group min-h-touch shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${className}`}
    >
      <SiteMark size={size} inverted />
    </Link>
  );
}
