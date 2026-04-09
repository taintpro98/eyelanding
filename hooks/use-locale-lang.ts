"use client";

import { useParams } from "next/navigation";

const SUPPORTED = new Set(["en", "vi"]);

/** Locale segment from `/[lang]/...` (defaults to `en`). */
export function useLocaleLang(): string {
  const params = useParams();
  const raw = params?.lang;
  const lang = typeof raw === "string" ? raw : "en";
  return SUPPORTED.has(lang) ? lang : "en";
}
