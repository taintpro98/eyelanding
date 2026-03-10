"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is ALumiEye?",
    answer:
      "ALumiEye is an AI-powered trading intelligence platform that helps traders detect alpha opportunities, track institutional money flow, and analyze markets with advanced machine learning. We combine real-time market data with proprietary AI models to surface high-probability trading signals.",
  },
  {
    question: "How does the AI generate signals?",
    answer:
      "Our AI models analyze multiple data dimensions including order flow, price action, volume profiles, and alternative data sources. We use ensemble machine learning techniques trained on historical market data to identify patterns that precede significant price movements. Each signal includes a confidence score and risk metrics.",
  },
  {
    question: "Which markets are supported?",
    answer:
      "ALumiEye currently supports US equities, major forex pairs, and popular cryptocurrencies. We're continuously expanding coverage based on user demand. Institutional plans can request custom asset coverage.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes! Our Starter plan is free forever and includes basic AI signals, a 5-asset watchlist, daily market briefs, and email support. It's a great way to explore the platform before upgrading to Pro for advanced features.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know about ALumiEye.
          </p>
        </div>

        <Accordion
          className="mt-12"
          defaultValue={["faq-0"]}
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline [&[data-state=open]]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
