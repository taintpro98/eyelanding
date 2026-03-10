import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description: "For individual traders getting started",
    price: "Free",
    period: "forever",
    features: ["Basic AI signals", "5-asset watchlist", "Daily market brief", "Email support"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "For active traders who need more",
    price: "$99",
    period: "/month",
    features: [
      "Advanced AI signals",
      "Unlimited watchlist",
      "Portfolio analytics",
      "Real-time alerts",
      "Priority support",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Institutional",
    description: "For funds and professional teams",
    price: "Custom",
    period: "",
    features: [
      "API access",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2
            id="pricing-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Choose the plan that fits your trading style. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "flex flex-col border-white/10",
                plan.highlighted &&
                  "border-primary/50 bg-primary/5 ring-2 ring-primary/20"
              )}
            >
              <CardHeader>
                {plan.highlighted && (
                  <span className="mb-2 inline-block w-fit rounded-full bg-primary/20 px-3 py-0.5 text-xs font-medium text-primary">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">
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
              <CardFooter>
                <a
                  href="#cta"
                  className={cn(
                    "flex h-10 w-full items-center justify-center rounded-lg border px-4 text-base font-medium transition-colors",
                    plan.highlighted
                      ? "border-transparent bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-white/20 bg-white/5 hover:bg-white/10"
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
