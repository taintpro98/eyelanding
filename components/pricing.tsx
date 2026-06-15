import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { signupLinkProps } from "@/lib/locale-path";
import { getLandingCopy } from "@/lib/landing-i18n";

export function Pricing({ lang }: { lang: string }) {
  const t = getLandingCopy(lang);
  const ctaProps = signupLinkProps(lang);
  const plans = t.pricing.plans;

  return (
    <section
      id="pricing"
      className="relative border-t border-white/[0.06] px-3 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="pricing-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="section-eyebrow mb-5">{t.pricing.eyebrow}</p>
          <h2
            id="pricing-heading"
            className="font-sans text-[1.65rem] font-semibold tracking-tight text-foreground min-[400px]:text-3xl sm:text-4xl md:text-[2.5rem]"
          >
            {t.pricing.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            {t.pricing.subheading}
          </p>
        </div>

        <div className="mt-12 grid gap-5 pt-4 sm:mt-16 sm:gap-6 lg:grid-cols-3 lg:gap-5">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent transition-colors duration-300",
                plan.highlighted
                  ? "overflow-visible border-primary/40 bg-gradient-to-b from-primary/[0.12] to-primary/[0.02] shadow-[0_32px_64px_-32px_rgba(52,211,153,0.35)] ring-2 ring-primary/30 lg:scale-[1.02] lg:z-10"
                  : "hover:border-white/15"
              )}
              aria-label={`${plan.name} plan: ${plan.price}${plan.period}`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-primary/30 bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground shadow-[0_8px_24px_-8px_rgba(52,211,153,0.6)]">
                  {t.pricing.mostPopular}
                </span>
              )}
              <CardHeader>
                <h3 className="text-xl font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-sans text-4xl font-semibold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="bg-transparent">
                <a
                  {...ctaProps}
                  className={cn(
                    "flex h-11 w-full items-center justify-center rounded-xl border px-4 text-base font-semibold outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none",
                    plan.highlighted
                      ? "border-transparent bg-primary text-primary-foreground hover:bg-primary/92 active:scale-[0.99] motion-reduce:active:scale-100"
                      : "border-white/[0.12] bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.08]"
                  )}
                >
                  {plan.cta}
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
