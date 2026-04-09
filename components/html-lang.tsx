"use client";

import { useEffect } from "react";

export function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang === "vi" ? "vi" : "en";
  }, [lang]);
  return null;
}
