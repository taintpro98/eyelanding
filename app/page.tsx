import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { ProductPreview } from "@/components/product-preview";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Fancy background - base + effects (no solid layer on top) */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#050508]">
        {/* Teal/emerald gradient orbs */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full bg-[radial-gradient(ellipse,rgba(34,197,94,0.25)_0%,rgba(34,197,94,0.08)_40%,transparent_70%)]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(34,197,94,0.12)_0%,transparent_60%)]" />
        <div className="absolute bottom-1/4 left-0 h-[350px] w-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(34,197,94,0.1)_0%,transparent_60%)]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-black/30" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProductPreview />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
