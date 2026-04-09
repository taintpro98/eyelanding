import { source } from "@/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import type { Metadata } from "next";
import { createRelativeLink } from "fumadocs-ui/mdx";

export default async function Page(props: {
  params: Promise<{ slug?: string[]; lang: string }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      className="max-md:gap-3 max-md:px-3 max-md:py-5 md:gap-4"
    >
      <DocsTitle className="max-md:!text-[1.375rem] max-md:!leading-snug">
        {page.data.title}
      </DocsTitle>
      <DocsDescription className="max-md:mb-5 max-md:text-base">
        {page.data.description}
      </DocsDescription>
      <DocsBody className="min-w-0 max-w-full prose-headings:scroll-mt-24">
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams("slug", "lang");
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[]; lang: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) return {};

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
