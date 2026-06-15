"use client";

import { useLayoutEffect } from "react";

/**
 * Force the document root to `class="dark"` while this component is mounted.
 *
 * The landing page is intentionally dark-only (its visual design — emerald
 * glows on near-black, glassmorphism, the wireframe globe — does not have a
 * light variant). Without this, navigating from `/docs` (where users CAN
 * toggle theme via Fumadocs/`next-themes`) back to `/` would carry over
 * `<html class="light">`, washing out parts of the landing page.
 *
 * We do not touch `localStorage` — the user's docs preference is preserved
 * and re-applied when they return to `/docs`.
 */
export function ForceDarkTheme() {
  useLayoutEffect(() => {
    const html = document.documentElement;
    const previous = html.className;

    if (!html.classList.contains("dark")) {
      html.classList.add("dark");
    }
    html.classList.remove("light");

    return () => {
      // Restore the previous class set so docs / other routes can manage
      // their own theme state cleanly on navigation away.
      html.className = previous;
    };
  }, []);

  return null;
}
