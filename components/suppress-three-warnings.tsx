"use client";

import { useEffect } from "react";

export function SuppressThreeWarnings() {
  useEffect(() => {
    const originalWarn = console.warn;
    const originalError = console.error;

    console.warn = (...args: unknown[]) => {
      if (typeof args[0] === "string" && args[0].includes("THREE.Clock")) return;
      originalWarn(...args);
    };

    // next-themes injects a <script> for theme detection which React 19 warns
    // about in dev mode. This is a known upstream bug in next-themes 0.4.x.
    console.error = (...args: unknown[]) => {
      if (typeof args[0] === "string" && args[0].includes("Encountered a script tag")) return;
      originalError(...args);
    };

    return () => {
      console.warn = originalWarn;
      console.error = originalError;
    };
  }, []);
  return null;
}
