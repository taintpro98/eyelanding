import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import type { ReactNode } from "react";
import "./docs.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      containerProps={{ className: "alumieye-docs" }}
      sidebar={{
        banner: (
          <div className="mb-4 rounded-lg border border-[#6D4D7A]/25 bg-[#6D4D7A]/8 p-3 text-sm">
            <p className="font-medium text-[#5a4d6a]">AI-Powered Trading</p>
            <p className="mt-1 text-[#5a5460]">
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
