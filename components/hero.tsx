"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { landingHashHref } from "@/lib/locale-path";
import { useLocaleLang } from "@/hooks/use-locale-lang";
import { useLandingCopy } from "@/hooks/use-landing-copy";

const HeroGlobe = dynamic(() => import("./hero-globe").then((mod) => mod.HeroGlobe), {
  ssr: false,
});

export function Hero() {
  const lang = useLocaleLang();
  const t = useLandingCopy();

  return (
    <section
      className="relative overflow-hidden px-3 pb-16 pt-[calc(env(safe-area-inset-top)+4.75rem)] min-[400px]:px-4 sm:px-6 sm:pb-24 sm:pt-[calc(env(safe-area-inset-top)+5.5rem)] md:pb-28 md:pt-[calc(env(safe-area-inset-top)+6rem)] lg:px-8"
      aria-labelledby="hero-heading"
    >
      {/* Wireframe globe - Pendle-style */}
      <HeroGlobe />
      {/* Hero glow - teal orbs */}
      <div className="absolute inset-0 -z-10 overflow-visible">
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-emerald-500/30 blur-[100px]" />
        <div className="absolute right-0 top-1/3 h-[350px] w-[450px] rounded-full bg-emerald-500/20 blur-[90px]" />
        <div className="absolute left-0 bottom-1/4 h-[280px] w-[350px] rounded-full bg-emerald-500/15 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <p className="section-eyebrow mb-6 sm:mb-8">{t.hero.eyebrow}</p>
        <h1
          id="hero-heading"
          className="font-sans text-[1.75rem] font-semibold leading-[1.1] tracking-tight text-foreground min-[400px]:text-[2.15rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.08]"
        >
          <span className="block text-white/95">{t.hero.titleLine1}</span>
          <span className="mt-1.5 block text-gradient-brand sm:mt-2 md:mt-3">
            {t.hero.titleLine2}
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg md:text-xl">
          {t.hero.description}
        </p>

        <div className="mx-auto mt-9 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-5">
          <Link
            href={landingHashHref(lang, "#cta")}
            className="group inline-flex h-12 min-h-[48px] w-full touch-manipulation items-center justify-center rounded-2xl bg-primary px-6 text-base font-semibold text-primary-foreground shadow-[0_0_40px_-8px_rgba(52,211,153,0.55)] transition-all duration-300 hover:bg-primary/92 hover:shadow-[0_0_48px_-6px_rgba(52,211,153,0.65)] active:scale-[0.98] sm:w-auto sm:min-w-[160px] sm:px-8 sm:hover:scale-[1.02]"
          >
            {t.hero.startFree}
          </Link>
          <Link
            href={landingHashHref(lang, "#product")}
            className="inline-flex h-12 min-h-[48px] w-full touch-manipulation items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.04] px-6 text-base font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] sm:w-auto sm:min-w-[160px] sm:px-8"
          >
            {t.hero.viewDemo}
          </Link>
        </div>
        <p className="mt-8 max-w-[19rem] text-balance text-xs leading-relaxed text-muted-foreground/80 sm:mt-10 sm:max-w-none sm:text-sm">
          <span className="sm:hidden">{t.hero.trustLineMobile}</span>
          <span className="hidden sm:inline">{t.hero.trustLineDesktop}</span>
        </p>
      </div>
    </section>
  );
}
