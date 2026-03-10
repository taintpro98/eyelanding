import {
  Database,
  ScanSearch,
  Filter,
  Lightbulb,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const steps = [
  {
    icon: Database,
    title: "Market data ingestion",
    description: "Aggregate real-time data from exchanges, dark pools, and alternative sources.",
  },
  {
    icon: ScanSearch,
    title: "Pattern detection",
    description: "AI identifies recurring patterns and anomalies across historical and live data.",
  },
  {
    icon: Filter,
    title: "AI signal filtering",
    description: "Machine learning filters noise and surfaces high-probability opportunities.",
  },
  {
    icon: Lightbulb,
    title: "Trading insights",
    description: "Actionable recommendations with risk-adjusted expected value and timing.",
  },
];

export function ProductPreview() {
  return (
    <section
      id="product"
      className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="product-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="product-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              How ALumiEye works
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our platform transforms raw market data into actionable intelligence through a proven pipeline.
            </p>

            <ul className="mt-10 space-y-6">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <step.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <Card className="overflow-hidden border-white/10 bg-card/80 shadow-2xl shadow-primary/5">
              <CardHeader className="border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500/80" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
                  <div className="h-2 w-2 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-muted-foreground">
                  ALumiEye Dashboard — Live
                </span>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-muted/30 to-muted/10">
                  <div className="flex h-full flex-col gap-4 p-6">
                    <div className="flex gap-4">
                      <div className="h-8 flex-1 rounded bg-white/10" />
                      <div className="h-8 w-24 rounded bg-white/10" />
                    </div>
                    <div className="grid flex-1 grid-cols-3 gap-4">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="rounded-lg border border-white/10 bg-white/5 p-4"
                        >
                          <div className="h-4 w-20 rounded bg-white/20" />
                          <div className="mt-2 h-6 w-16 rounded bg-primary/30" />
                          <div className="mt-1 h-3 w-full rounded bg-white/10" />
                        </div>
                      ))}
                    </div>
                    <div className="h-24 rounded-lg border border-white/10 bg-white/5">
                      <div className="flex gap-2 p-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className="h-16 flex-1 rounded bg-white/10"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
