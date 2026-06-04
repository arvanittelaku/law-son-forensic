import Link from "next/link";

type Breadcrumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  children?: React.ReactNode;
};

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="bg-navy py-12 sm:py-16 md:py-24">
      <div className="container-page">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/60 sm:text-sm">
              {breadcrumbs.map((crumb, i) => (
                <li key={`${crumb.label}-${i}`} className="flex max-w-full items-center gap-2">
                  {i > 0 && <span aria-hidden="true" className="shrink-0">/</span>}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="break-words hover:text-gold focus:outline-none focus-visible:underline"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="break-words text-white/80">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="break-words font-serif text-[1.625rem] font-semibold leading-tight text-white xs:text-3xl sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="hero-cta-group">{children}</div>}
      </div>
    </section>
  );
}
