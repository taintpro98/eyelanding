"use client";

import {
  Database,
  ScanSearch,
  Filter,
  Lightbulb,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLandingCopy } from "@/hooks/use-landing-copy";

const icons = [Database, ScanSearch, Filter, Lightbulb];

export function ProductPreview() {
  const t = useLandingCopy();
  const steps = t.product.steps;

  return (
    <section
      id="product"
      className="relative border-t border-white/[0.06] px-3 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="product-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="grid min-w-0 items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <p className="section-eyebrow mb-5">{t.product.eyebrow}</p>
            <h2
              id="product-heading"
              className="font-sans text-[1.65rem] font-semibold tracking-tight text-foreground min-[400px]:text-3xl sm:text-4xl md:text-[2.5rem]"
            >
              {t.product.heading}
            </h2>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.product.subheading}
            </p>

            <ul className="relative mt-8 space-y-0 sm:mt-12">
              {steps.map((step, index) => {
                const Icon = icons[index]!;
                return (
                  <li
                    key={step.title}
                    className="relative flex gap-3 pb-8 last:pb-0 sm:gap-5 sm:pb-10"
                  >
                    {index < steps.length - 1 && (
                      <div
                        className="absolute left-[1.375rem] top-11 bottom-0 w-px bg-gradient-to-b from-primary/40 to-transparent sm:left-5 sm:top-12"
                        aria-hidden
                      />
                    )}
                    <div className="relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 text-primary ring-1 ring-white/10 shadow-lg shadow-black/20 sm:h-11 sm:w-11 sm:rounded-2xl">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="pt-0.5">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/80">
                        {t.product.stepLabel(index + 1)}
                      </span>
                      <h3 className="mt-1 font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative min-w-0 lg:pl-4">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-indigo-500/10 opacity-60 blur-3xl sm:-inset-4 sm:rounded-[1.75rem]" aria-hidden />
            <Card className="relative w-full min-w-0 overflow-hidden rounded-xl border-white/[0.1] bg-gradient-to-b from-card/95 to-card/70 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.06)_inset] ring-1 ring-white/[0.06] sm:rounded-2xl">
              <CardHeader className="border-b border-white/[0.06] bg-black/20 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] shadow-sm" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e] shadow-sm" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#28c840] shadow-sm" />
                </div>
                <span className="mt-2 block text-xs font-medium tracking-wide text-muted-foreground">
                  {t.product.dashboardLabel}
                </span>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video min-h-[12rem] bg-gradient-to-br from-emerald-950/40 via-card to-zinc-950/50 sm:min-h-0">
                  <div className="flex h-full min-h-0 flex-col gap-2 p-3 sm:gap-4 sm:p-6">
                    <div className="flex min-w-0 gap-2 sm:gap-3">
                      <div className="h-8 min-w-0 flex-1 rounded-md bg-white/[0.07] ring-1 ring-white/10 sm:h-9 sm:rounded-lg" />
                      <div className="h-8 w-20 shrink-0 rounded-md bg-gradient-to-r from-primary/25 to-primary/5 ring-1 ring-primary/20 sm:h-9 sm:w-28 sm:rounded-lg" />
                    </div>
                    <div className="grid min-h-0 flex-1 grid-cols-3 gap-1.5 sm:gap-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="min-w-0 rounded-lg border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent p-2 ring-1 ring-white/[0.04] sm:rounded-xl sm:p-4"
                        >
                          <div className="h-2.5 max-w-[4rem] rounded bg-white/15 sm:h-3 sm:w-16" />
                          <div className="mt-2 h-5 max-w-[2.5rem] rounded-md bg-gradient-to-r from-primary/40 to-primary/15 sm:mt-3 sm:h-7 sm:w-14" />
                          <div className="mt-1.5 h-2 w-full rounded bg-white/[0.08] sm:mt-2 sm:h-2.5" />
                        </div>
                      ))}
                    </div>
                    <div className="h-20 shrink-0 rounded-lg border border-white/[0.08] bg-black/30 p-2 ring-1 ring-inset ring-white/[0.04] sm:h-28 sm:rounded-xl sm:p-3">
                      <div className="flex h-full items-end gap-1 sm:gap-1.5">
                        {[40, 65, 45, 80, 55].map((pct, i) => (
                          <div
                            key={i}
                            className="min-h-[20%] flex-1 rounded-md bg-gradient-to-t from-primary/35 to-emerald-500/10 ring-1 ring-white/5"
                            style={{ height: `${pct}%` }}
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
