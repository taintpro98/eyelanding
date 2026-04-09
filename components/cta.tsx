"use client";

import Link from "next/link";
import { landingHashHref } from "@/lib/locale-path";
import { useLocaleLang } from "@/hooks/use-locale-lang";
import { useLandingCopy } from "@/hooks/use-landing-copy";

export function CTA() {
  const lang = useLocaleLang();
  const t = useLandingCopy();

  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-white/[0.06] px-3 py-20 sm:px-6 sm:py-32 md:py-36 lg:px-8"
      aria-labelledby="cta-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.12] via-transparent to-indigo-500/[0.04]" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-48 w-[80%] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-3xl rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent px-4 py-10 text-center shadow-[0_40px_100px_-60px_rgba(52,211,153,0.25)] ring-1 ring-white/[0.05] backdrop-blur-md sm:rounded-[2rem] sm:px-12 sm:py-16">
        <h2
          id="cta-heading"
          className="font-sans text-[1.65rem] font-semibold tracking-tight text-foreground min-[400px]:text-3xl sm:text-4xl md:text-5xl"
        >
          {t.cta.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
          {t.cta.description}
        </p>
        <Link
          href={landingHashHref(lang, "#cta")}
          className="mx-auto mt-8 inline-flex h-12 min-h-[48px] w-full max-w-xs touch-manipulation items-center justify-center rounded-2xl bg-primary px-6 text-base font-semibold text-primary-foreground shadow-[0_0_40px_-8px_rgba(52,211,153,0.55)] transition-all duration-300 hover:bg-primary/92 hover:shadow-[0_0_52px_-6px_rgba(52,211,153,0.65)] active:scale-[0.98] sm:mt-10 sm:w-auto sm:min-w-[200px] sm:px-8 sm:hover:scale-[1.02]"
        >
          {t.cta.button}
        </Link>
      </div>
    </section>
  );
}
