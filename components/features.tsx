import {
  Activity,
  TrendingUp,
  Sparkles,
  BarChart3,
  LineChart,
  Shield,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const features = [
  {
    icon: Activity,
    title: "Real-time Market Intelligence",
    description:
      "Stay ahead with live market data, order flow, and institutional activity across multiple asset classes.",
  },
  {
    icon: TrendingUp,
    title: "Smart Money Tracking",
    description:
      "Follow the flow of institutional capital and identify where the smart money is moving before the crowd.",
  },
  {
    icon: Sparkles,
    title: "AI Signal Detection",
    description:
      "Machine learning models analyze patterns and generate actionable trading signals with quantified confidence.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Analytics",
    description:
      "Comprehensive portfolio insights, risk metrics, and performance attribution to optimize your strategy.",
  },
  {
    icon: LineChart,
    title: "Advanced Charting",
    description:
      "Professional-grade charts with custom indicators, drawing tools, and seamless multi-timeframe analysis.",
  },
  {
    icon: Shield,
    title: "Risk Insights",
    description:
      "Real-time risk exposure, position sizing recommendations, and scenario analysis to protect your capital.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Everything you need to trade smarter
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Powerful tools designed for serious traders who demand an edge.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-white/10 bg-card/50 transition-all hover:border-primary/30 hover:bg-card/80"
            >
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <feature.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
