import { i18n } from "./i18n";

/** URL prefix for the current locale (`""` for default English, `"/vi"` for Vietnamese). */
export function localePrefix(lang: string): string {
  return lang === i18n.defaultLanguage ? "" : `/${lang}`;
}

/** Docs base path: `/docs` or `/vi/docs`. */
export function docsPath(lang: string): string {
  const p = localePrefix(lang);
  return p ? `${p}/docs` : "/docs";
}

/** Landing page path with hash: `/#cta` or `/vi#cta`. */
export function landingHashHref(lang: string, hash: string): string {
  const h = hash.startsWith("#") ? hash : `#${hash}`;
  const p = localePrefix(lang);
  const base = p ? `${p}/` : "/";
  return `${base}${h}`;
}

/**
 * Path without locale prefix (`/` and `/docs/...` for default language;
 * `/vi` → `/`, `/vi/docs` → `/docs`).
 */
export function stripLocaleFromPathname(pathname: string): string {
  if (pathname === "/vi") return "/";
  if (pathname.startsWith("/vi/")) {
    const rest = pathname.slice("/vi".length);
    return rest.startsWith("/") ? rest : `/${rest}`;
  }
  /* If `/en` appears in the URL (e.g. before redirect), normalize like `/` */
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const rest = pathname.slice(3);
    if (rest === "" || rest === "/") return "/";
    return rest.startsWith("/") ? rest : `/${rest}`;
  }
  return pathname || "/";
}

/** Build pathname for `lang`, preserving the route after the locale segment. */
export function withLocalePath(pathname: string, lang: string): string {
  const base = stripLocaleFromPathname(pathname);
  if (lang === i18n.defaultLanguage) {
    return base === "/" ? "/" : base;
  }
  if (base === "/") return "/vi";
  return `/vi${base}`;
}
