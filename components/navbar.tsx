"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { docsPath, landingHashHref, localePrefix } from "@/lib/locale-path";
import { getLandingCopy } from "@/lib/landing-i18n";
import { useLocaleLang } from "@/hooks/use-locale-lang";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lang = useLocaleLang();

  const { homeHref, navLinks, t } = useMemo(() => {
    const tr = getLandingCopy(lang);
    const p = localePrefix(lang);
    const home = p ? `${p}/` : "/";
    const h = (fragment: string) => landingHashHref(lang, fragment);
    return {
      t: tr,
      homeHref: home,
      navLinks: [
        { href: h("#features"), label: tr.nav.features },
        { href: h("#product"), label: tr.nav.product },
        { href: h("#pricing"), label: tr.nav.pricing },
        { href: h("#faq"), label: tr.nav.faq },
        { href: docsPath(lang), label: tr.nav.docs },
      ],
    };
  }, [lang]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)]">
      {/* Glass navbar with subtle gradient border */}
      <div className="relative border-b border-white/[0.06] bg-black/50 backdrop-blur-2xl supports-[backdrop-filter]:bg-black/35">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
        <nav
          className="relative mx-auto flex h-14 min-h-14 max-w-7xl items-center justify-between gap-2 px-3 sm:h-16 sm:min-h-16 sm:px-6 lg:px-8"
          aria-label={t.nav.mainNavLabel}
        >
          <Link
            href={homeHref}
            className="group flex min-w-0 max-w-[65%] items-center gap-2 sm:gap-2.5 transition-all duration-200 hover:opacity-90 md:max-w-none"
          >
            <span className="flex h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10 transition-shadow duration-200 group-hover:ring-white/20 sm:h-10 sm:w-10">
              <Image
                src="/logo.png"
                alt="ALumiEye"
                width={40}
                height={40}
                className="h-full w-full object-cover"
                priority
              />
            </span>
            <span className="font-sans truncate text-2xl font-semibold tracking-wide text-foreground sm:text-3xl">
              ALumiEye
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label + link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-4 py-2 text-base font-medium text-muted-foreground transition-all duration-200",
                  "hover:text-foreground",
                  "before:absolute before:inset-x-2 before:bottom-1 before:h-px before:scale-x-0 before:bg-primary before:transition-transform before:duration-200 before:content-[''] hover:before:scale-x-100"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <Link
              href={landingHashHref(lang, "#cta")}
              className={cn(
                "hidden h-11 items-center justify-center rounded-xl px-6 text-base font-semibold sm:inline-flex",
                "bg-primary text-primary-foreground",
                "shadow-[0_0_20px_-5px_rgba(34,197,94,0.4)]",
                "transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_0_25px_-5px_rgba(34,197,94,0.5)] hover:scale-[1.02] active:scale-[0.98]"
              )}
            >
              {t.nav.startFree}
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex min-h-11 min-w-11 shrink-0 touch-manipulation items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden />
              ) : (
                <Menu className="h-5 w-5" aria-hidden />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "max-h-[min(70vh,calc(100dvh-3.5rem))] overflow-y-auto overscroll-y-contain border-t border-white/[0.06] bg-black/70 backdrop-blur-2xl md:hidden",
          mobileMenuOpen ? "block animate-in fade-in slide-in-from-top-2" : "hidden"
        )}
      >
        <div className="flex flex-col gap-0.5 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          {navLinks.map((link) => (
            <Link
              key={link.label + link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-lg font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={landingHashHref(lang, "#cta")}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 flex h-12 items-center justify-center rounded-xl bg-primary text-base font-semibold text-primary-foreground shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)] transition-all hover:bg-primary/90"
          >
            {t.nav.startFree}
          </Link>
        </div>
      </div>
    </header>
  );
}
