import Link from "next/link";
import { HeroGlobe } from "./hero-globe";
import { signupUrl, landingHashHref } from "@/lib/locale-path";
import { getLandingCopy } from "@/lib/landing-i18n";

export function Hero({ lang }: { lang: string }) {
  const t = getLandingCopy(lang);

  return (
    <section
      className="relative overflow-hidden px-3 pb-16 pt-[calc(env(safe-area-inset-top)+4.75rem)] min-[400px]:px-4 sm:px-6 sm:pb-24 sm:pt-[calc(env(safe-area-inset-top)+5.5rem)] md:pb-28 md:pt-[calc(env(safe-area-inset-top)+6rem)] lg:px-8"
      aria-labelledby="hero-heading"
    >
      {/* Wireframe globe — own client boundary, so this section stays server. */}
      <HeroGlobe />
      {/* Hero glow — softer on mobile to keep headline readable. */}
      <div className="absolute inset-0 -z-10 overflow-visible">
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-emerald-500/12 blur-[100px] sm:bg-emerald-500/20" />
        <div className="absolute right-0 top-1/3 h-[350px] w-[450px] rounded-full bg-emerald-500/8 blur-[90px] sm:bg-emerald-500/15" />
        <div className="absolute left-0 bottom-1/4 h-[280px] w-[350px] rounded-full bg-emerald-500/6 blur-[80px] sm:bg-emerald-500/12" />
      </div>
      {/* Mobile scrim — gentle dark veil behind text so the globe doesn't
          fight with the headline. Hidden on >= sm where there is more
          breathing room. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_120%_70%_at_50%_45%,rgba(2,4,8,0.55)_0%,rgba(2,4,8,0.3)_45%,transparent_75%)]"
      />

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
            href={signupUrl(lang)}
            className="group inline-flex h-12 min-h-[48px] w-full touch-manipulation items-center justify-center rounded-2xl bg-primary px-6 text-base font-semibold text-primary-foreground shadow-[0_0_40px_-8px_rgba(52,211,153,0.55)] outline-none transition-all duration-300 hover:bg-primary/92 hover:shadow-[0_0_48px_-6px_rgba(52,211,153,0.65)] focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 sm:w-auto sm:min-w-[160px] sm:px-8 sm:hover:scale-[1.02] motion-reduce:sm:hover:scale-100"
          >
            {t.hero.startFree}
          </Link>
          <Link
            href={landingHashHref(lang, "#product")}
            className="inline-flex h-12 min-h-[48px] w-full touch-manipulation items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.04] px-6 text-base font-semibold text-foreground outline-none backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none sm:w-auto sm:min-w-[160px] sm:px-8"
          >
            {t.hero.viewDemo}
          </Link>
        </div>
        <p className="mx-auto mt-8 max-w-[19rem] text-balance text-xs leading-relaxed text-white/60 [text-shadow:0_1px_12px_rgba(0,0,0,0.9)] sm:mt-10 sm:max-w-none sm:text-sm">
          <span className="sm:hidden">{t.hero.trustLineMobile}</span>
          <span className="hidden sm:inline">{t.hero.trustLineDesktop}</span>
        </p>
      </div>
    </section>
  );
}
