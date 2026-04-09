"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLandingCopy } from "@/hooks/use-landing-copy";

export function FAQ() {
  const t = useLandingCopy();
  const faqs = t.faq.items;

  return (
    <section
      id="faq"
      className="relative border-t border-white/[0.06] px-3 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="faq-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="section-eyebrow mb-5">{t.faq.eyebrow}</p>
          <h2
            id="faq-heading"
            className="font-sans text-[1.65rem] font-semibold tracking-tight text-foreground min-[400px]:text-3xl sm:text-4xl md:text-[2.5rem]"
          >
            {t.faq.heading}
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            {t.faq.subheading}
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-1 shadow-[0_24px_64px_-48px_rgba(0,0,0,0.8)] ring-1 ring-white/[0.04] backdrop-blur-sm sm:mt-14 sm:rounded-2xl">
          <Accordion
            className="rounded-[0.875rem] bg-black/20 px-2 py-1 sm:px-4"
            defaultValue={["faq-0"]}
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-[15px] font-medium leading-snug text-foreground hover:no-underline sm:text-base [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="break-words text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
