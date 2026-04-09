"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { withLocalePath } from "@/lib/locale-path";
import { useLandingCopy } from "@/hooks/use-landing-copy";
import { useLocaleLang } from "@/hooks/use-locale-lang";

type Props = {
  className?: string;
  /** Compact: icon + EN | VI. Full: labeled buttons. */
  variant?: "compact" | "inline";
};

export function LanguageSwitcher({ className, variant = "compact" }: Props) {
  const pathname = usePathname() ?? "/";
  const lang = useLocaleLang();
  const t = useLandingCopy();

  const { enHref, viHref } = useMemo(() => {
    const hash =
      typeof window !== "undefined" ? window.location.hash ?? "" : "";
    const en = `${withLocalePath(pathname, "en")}${hash}`;
    const vi = `${withLocalePath(pathname, "vi")}${hash}`;
    return { enHref: en, viHref: vi };
  }, [pathname]);

  if (variant === "inline") {
    return (
      <div
        className={cn(
          "flex flex-wrap items-center gap-1 rounded-lg border border-white/[0.08] bg-white/[0.03] p-1",
          className
        )}
        role="group"
        aria-label={t.nav.language}
      >
        <Link
          href={enHref}
          className={cn(
            "rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors",
            lang === "en"
              ? "bg-white/10 text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
          hrefLang="en"
        >
          EN
        </Link>
        <Link
          href={viHref}
          className={cn(
            "rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors",
            lang === "vi"
              ? "bg-white/10 text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
          hrefLang="vi"
        >
          VI
        </Link>
      </div>
    );
  }

  return (
    <div
      className={cn("flex items-center gap-1.5", className)}
      role="group"
      aria-label={t.nav.language}
    >
      <Languages className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
      <Link
        href={enHref}
        className={cn(
          "rounded px-1.5 py-0.5 text-xs font-medium transition-colors",
          lang === "en"
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
        hrefLang="en"
      >
        EN
      </Link>
      <span className="text-muted-foreground/50" aria-hidden>
        |
      </span>
      <Link
        href={viHref}
        className={cn(
          "rounded px-1.5 py-0.5 text-xs font-medium transition-colors",
          lang === "vi"
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
        hrefLang="vi"
      >
        VI
      </Link>
    </div>
  );
}
