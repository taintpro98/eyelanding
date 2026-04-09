"use client";

import { getLandingCopy } from "@/lib/landing-i18n";
import { useLocaleLang } from "@/hooks/use-locale-lang";

export function useLandingCopy() {
  const lang = useLocaleLang();
  return getLandingCopy(lang);
}
