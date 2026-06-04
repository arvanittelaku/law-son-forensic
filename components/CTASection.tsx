import { Button } from "./ui/Button";

type CTASectionProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

export function CTASection({
  title = "Discuss your instruction",
  description = "Contact Lawson Forensic to discuss expert witness or forensic accounting support. We respond within one business day.",
  buttonText = "Contact Us",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="border-y-2 border-gold bg-navy py-12 sm:py-16 md:py-20">
      <div className="container-page text-center">
        <h2 className="font-serif text-xl font-semibold text-white sm:text-2xl md:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          {description}
        </p>
        <div className="mt-8 flex justify-center px-2">
          <Button
            href={buttonHref}
            variant="primary"
            className="w-full max-w-sm border-gold bg-gold text-navy hover:bg-white sm:w-auto"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
