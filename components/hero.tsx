import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 sm:pt-40 sm:pb-28 lg:px-8"
      aria-labelledby="hero-heading"
    >
      {/* Hero glow - teal orbs */}
      <div className="absolute inset-0 -z-10 overflow-visible">
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-emerald-500/30 blur-[100px]" />
        <div className="absolute right-0 top-1/3 h-[350px] w-[450px] rounded-full bg-emerald-500/20 blur-[90px]" />
        <div className="absolute left-0 bottom-1/4 h-[280px] w-[350px] rounded-full bg-emerald-500/15 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <h1
          id="hero-heading"
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          AI-Powered Trading Intelligence
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Detect alpha. Track smart money. Trade with confidence.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#cta"
            className="inline-flex h-11 min-w-[140px] items-center justify-center rounded-lg border border-transparent bg-primary px-5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start Free
          </Link>
          <Link
            href="#product"
            className="inline-flex h-11 min-w-[140px] items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 text-base font-medium transition-colors hover:bg-white/10"
          >
            View Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
