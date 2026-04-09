"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { Facebook, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import { docsPath, landingHashHref, localePrefix } from "@/lib/locale-path";
import { getLandingCopy } from "@/lib/landing-i18n";
import { useLocaleLang } from "@/hooks/use-locale-lang";

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61567715214647",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://www.youtube.com/@alumieye",
    label: "YouTube",
    icon: Youtube,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const lang = useLocaleLang();

  const { homeHref, footerNav, t } = useMemo(() => {
    const tr = getLandingCopy(lang);
    const p = localePrefix(lang);
    const home = p ? `${p}/` : "/";
    const h = (frag: string) => landingHashHref(lang, frag);
    return {
      t: tr,
      homeHref: home,
      footerNav: [
        {
          title: tr.footer.groups.product,
          links: [
            { href: h("#features"), label: tr.footer.links.features },
            { href: h("#product"), label: tr.footer.links.product },
            { href: h("#pricing"), label: tr.footer.links.pricing },
            { href: docsPath(lang), label: tr.footer.links.docs },
          ],
        },
        {
          title: tr.footer.groups.company,
          links: [
            { href: "#", label: tr.footer.links.about },
            { href: "#", label: tr.footer.links.blog },
            { href: "#", label: tr.footer.links.careers },
          ],
        },
        {
          title: tr.footer.groups.legal,
          links: [
            { href: "#", label: tr.footer.links.privacy },
            { href: "#", label: tr.footer.links.terms },
          ],
        },
      ],
    };
  }, [lang]);

  return (
    <footer className="relative border-t border-white/[0.06] bg-gradient-to-b from-transparent to-black/40 px-4 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-12 md:py-14 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="mx-auto max-w-md text-center sm:mx-0 sm:max-w-xs sm:text-left">
            <Link
              href={homeHref}
              className="inline-flex items-center justify-center gap-2 sm:justify-start"
            >
              <span className="flex h-8 w-8 shrink-0 overflow-hidden rounded-full sm:h-7 sm:w-7">
                <Image
                  src="/logo.png"
                  alt="ALumiEye"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="font-sans text-lg font-semibold tracking-wide text-foreground">
                ALumiEye
              </span>
            </Link>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
            <div className="mt-3 flex justify-center gap-2 sm:justify-start sm:gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 touch-manipulation items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground sm:h-9 sm:w-9"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" aria-hidden />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid w-full min-w-0 grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-0">
            {footerNav.map((section, index) => {
              const isLegal = index === footerNav.length - 1;
              return (
                <div
                  key={section.title}
                  className={cn(
                    "min-w-0",
                    isLegal &&
                      "col-span-2 flex flex-col border-t border-white/[0.06] pt-6 sm:col-span-1 sm:border-t-0 sm:pt-0"
                  )}
                >
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/90 sm:text-sm sm:normal-case sm:tracking-normal">
                    {section.title}
                  </h3>
                  <ul
                    className={cn(
                      "mt-2 sm:mt-3",
                      isLegal
                        ? "flex flex-row flex-wrap gap-x-6 gap-y-1 sm:flex-col sm:gap-x-0 sm:gap-y-2"
                        : "space-y-2 sm:space-y-2.5"
                    )}
                  >
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 sm:mt-10 sm:pt-8">
          <p className="text-center text-xs text-muted-foreground sm:text-sm">
            {t.footer.copyright(currentYear)}
          </p>
        </div>
      </div>
    </footer>
  );
}
