import type { Metadata } from "next";
import Script from "next/script";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { ProductPreview } from "@/components/product-preview";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { ForceDarkTheme } from "@/components/force-dark-theme";
import { getLandingCopy } from "@/lib/landing-i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getLandingCopy(lang);
  return {
    title: t.meta.title,
    description: t.meta.description,
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      locale: lang === "vi" ? "vi_VN" : "en_US",
    },
    twitter: {
      title: t.meta.title,
      description: t.meta.description,
    },
    alternates: {
      languages: {
        en: "/",
        vi: "/vi",
      },
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = getLandingCopy(lang);

  // FAQPage JSON-LD for richer search results.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="dark relative min-h-screen min-w-0 overflow-x-clip font-sans">
      {/* Pin <html> to dark while on the landing page so docs theme toggling
          can't bleed in (background, muted text, etc. read from <html>). */}
      <ForceDarkTheme />

      {/* Skip link — visible on keyboard focus, hidden otherwise. */}
      <a
        href="#hero-heading"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
      >
        Skip to content
      </a>

      {/* Fancy background - base + effects (no solid layer on top) */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#030306]">
        {/* Aurora-style orbs — depth + color variety */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[40%] h-[720px] w-[1100px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.22)_0%,rgba(34,197,94,0.08)_45%,transparent_68%)] blur-[2px]" />
        <div className="absolute -right-32 top-[15%] h-[520px] w-[620px] rounded-full bg-[radial-gradient(ellipse,rgba(45,212,191,0.14)_0%,rgba(16,185,129,0.06)_50%,transparent_70%)]" />
        <div className="absolute -left-24 bottom-[10%] h-[480px] w-[520px] rounded-full bg-[radial-gradient(ellipse,rgba(99,102,241,0.12)_0%,transparent_65%)]" />
        <div className="absolute right-1/4 bottom-0 h-[380px] w-[440px] translate-y-1/4 rounded-full bg-[radial-gradient(ellipse,rgba(34,197,94,0.1)_0%,transparent_60%)]" />
        {/* Grid — fades at edges for softer focus */}
        <div
          className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,black,transparent)]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />
        {/* Vignette + vertical depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(255,255,255,0.04),transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.07] via-transparent to-[#020204]/90" />
        {/* Film grain */}
        <div className="absolute inset-0 bg-noise opacity-[0.22] mix-blend-overlay" aria-hidden />
      </div>
      <Navbar lang={lang} />
      <main id="main-content">
        <Hero lang={lang} />
        <Features lang={lang} />
        <ProductPreview lang={lang} />
        <Pricing lang={lang} />
        <FAQ lang={lang} />
        <CTA lang={lang} />
        <Footer lang={lang} />
      </main>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
