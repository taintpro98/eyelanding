import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { i18n } from "./i18n";

export function baseOptions(locale: string): BaseLayoutProps {
  const prefix = locale === i18n.defaultLanguage ? "" : `/${locale}`;

  return {
    i18n: true,
    themeSwitch: {
      enabled: true,
      mode: "light-dark-system",
    },
    nav: {
      title: "ALumiEye",
      url: `${prefix}/docs`,
    },
    links: [
      {
        text: "Home",
        url: prefix ? `${prefix}/` : "/",
      },
      {
        text: "Start Free",
        url: `${prefix}/#cta`,
      },
    ],
  };
}
