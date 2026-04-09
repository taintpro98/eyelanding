import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import "./docs.css";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <DocsLayout
      tree={source.getPageTree(lang)}
      {...baseOptions(lang)}
      containerProps={{
        className: cn("alumieye-docs min-w-0 font-sans"),
      }}
      sidebar={{
        banner: (
          <div className="mb-3 rounded-lg border border-fd-border bg-fd-card/90 p-2.5 text-[13px] leading-snug text-fd-foreground shadow-sm backdrop-blur-sm sm:mb-4 sm:p-3 sm:text-sm">
            <p className="font-medium">AI-Powered Trading</p>
            <p className="mt-1 text-fd-muted-foreground">
              Detect alpha. Track smart money.
            </p>
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
