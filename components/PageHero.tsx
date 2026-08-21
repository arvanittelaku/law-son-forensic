import Link from "next/link";

type Breadcrumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  children?: React.ReactNode;
  compact?: boolean;
};

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  children,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-ink ${compact ? "py-10 sm:py-12" : "py-14 sm:py-20 md:py-28"}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-hero-pattern bg-pattern opacity-60"
        aria-hidden="true"
      />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-copper" aria-hidden="true" />

      <div className="container-page relative">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/50 sm:text-sm">
                  {breadcrumbs.map((crumb, i) => (
                    <li
                      key={`${crumb.label}-${i}`}
                      className="flex max-w-full items-center gap-2"
                    >
                      {i > 0 && (
                        <span aria-hidden="true" className="shrink-0">
                          /
                        </span>
                      )}
                      {crumb.href ? (
                        <Link
                          href={crumb.href}
                          className="break-words hover:text-copper focus:outline-none focus-visible:underline"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="break-words text-white/70">{crumb.label}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <div className="accent-bar mb-5" />
            <h1 className="break-words font-serif text-[1.75rem] font-bold leading-tight text-white xs:text-3xl sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                {subtitle}
              </p>
            )}
            {children && <div className="hero-cta-group">{children}</div>}
          </div>

          {!compact && (
            <div className="hidden lg:col-span-4 lg:block">
              <div className="rounded-card border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="section-label !text-copper/80">Practice Focus</p>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                    Expert witness reports &amp; testimony
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                    Forensic accounting &amp; fraud analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                    Business valuations &amp; shareholder disputes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                    Loss &amp; damages quantification
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
