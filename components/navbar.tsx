"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  docsPath,
  landingHashHref,
  localePrefix,
  signupLinkProps,
} from "@/lib/locale-path";
import { getLandingCopy } from "@/lib/landing-i18n";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Navbar({ lang }: { lang: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = getLandingCopy(lang);
  const p = localePrefix(lang);
  const homeHref = p ? `${p}/` : "/";
  const h = (fragment: string) => landingHashHref(lang, fragment);
  const ctaProps = signupLinkProps(lang);

  const navLinks = [
    { href: h("#features"), label: t.nav.features },
    { href: h("#product"), label: t.nav.product },
    { href: h("#pricing"), label: t.nav.pricing },
    { href: h("#faq"), label: t.nav.faq },
    { href: docsPath(lang), label: t.nav.docs },
  ];

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
            className="group flex min-w-0 max-w-[65%] items-center gap-2 rounded-md outline-none transition-opacity duration-200 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none sm:gap-2.5 md:max-w-none"
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
                  "relative rounded-md px-4 py-2 text-base font-medium text-muted-foreground outline-none transition-colors duration-200",
                  "hover:text-foreground",
                  "focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  "before:absolute before:inset-x-2 before:bottom-1 before:h-px before:scale-x-0 before:bg-primary before:transition-transform before:duration-200 before:content-[''] hover:before:scale-x-100 motion-reduce:before:transition-none motion-reduce:hover:before:scale-x-0"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <Link
              {...ctaProps}
              className={cn(
                "hidden h-11 items-center justify-center rounded-xl px-6 text-base font-semibold outline-none sm:inline-flex",
                "bg-primary text-primary-foreground",
                "transition-colors duration-200 hover:bg-primary/90 active:scale-[0.98]",
                "focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:active:scale-100"
              )}
            >
              {t.nav.startFree}
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex min-h-11 min-w-11 shrink-0 touch-manipulation items-center justify-center rounded-lg text-muted-foreground outline-none transition-colors hover:bg-white/5 hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
              className="rounded-lg px-3 py-2.5 text-lg font-medium text-muted-foreground outline-none transition-colors hover:bg-white/5 hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
            >
              {link.label}
            </Link>
          ))}
          <Link
            {...ctaProps}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 flex h-12 items-center justify-center rounded-xl bg-primary text-base font-semibold text-primary-foreground outline-none transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
          >
            {t.nav.startFree}
          </Link>
        </div>
      </div>
    </header>
  );
}
