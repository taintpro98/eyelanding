"use client";

import { useEffect } from "react";

export function SuppressThreeWarnings() {
  useEffect(() => {
    const original = console.warn;
    console.warn = (...args: unknown[]) => {
      if (typeof args[0] === "string" && args[0].includes("THREE.Clock")) return;
      original(...args);
    };
    return () => {
      console.warn = original;
    };
  }, []);
  return null;
}
