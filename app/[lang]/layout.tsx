import { notFound } from "next/navigation";
import { RootProvider } from "fumadocs-ui/provider/next";
import { HtmlLang } from "@/components/html-lang";
import { i18n } from "@/lib/i18n";
import { i18nUI } from "@/lib/i18n-ui";

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!(i18n.languages as readonly string[]).includes(lang)) {
    notFound();
  }

  return (
    <RootProvider
      theme={{
        attribute: "class",
        defaultTheme: "system",
        enableSystem: true,
        disableTransitionOnChange: true,
      }}
      i18n={i18nUI.provider(lang)}
    >
      <HtmlLang lang={lang} />
      {children}
    </RootProvider>
  );
}
