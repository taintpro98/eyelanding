"use client";

import {
  Activity,
  TrendingUp,
  Sparkles,
  BarChart3,
  LineChart,
  Shield,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLandingCopy } from "@/hooks/use-landing-copy";

const icons = [Activity, TrendingUp, Sparkles, BarChart3, LineChart, Shield];

export function Features() {
  const t = useLandingCopy();

  return (
    <section
      id="features"
      className="relative border-t border-white/[0.06] px-3 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="features-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="section-eyebrow mb-5">{t.features.eyebrow}</p>
          <h2
            id="features-heading"
            className="font-sans text-[1.65rem] font-semibold tracking-tight text-foreground min-[400px]:text-3xl sm:text-4xl md:text-[2.5rem]"
          >
            {t.features.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">
            {t.features.subheading}
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((feature, index) => {
            const Icon = icons[index]!;
            return (
              <Card
                key={feature.title}
                className="group border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent shadow-[0_24px_48px_-32px_rgba(0,0,0,0.8)] ring-1 ring-white/[0.04] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_32px_64px_-28px_rgba(52,211,153,0.12)]"
              >
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-primary/5 text-primary shadow-inner shadow-primary/10 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
