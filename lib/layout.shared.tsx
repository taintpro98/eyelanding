import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "ALumiEye",
    },
    links: [
      {
        text: "Home",
        url: "/",
      },
      {
        text: "Start Free",
        url: "/#cta",
      },
    ],
  };
}
