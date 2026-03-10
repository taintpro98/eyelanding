import Link from "next/link";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-white/5 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/15 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="cta-heading"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Start Detecting Alpha Today
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Join thousands of traders who use ALumiEye to find opportunities before the market moves.
        </p>
        <Link
          href="#cta"
          className="mt-10 inline-flex h-11 min-w-[180px] items-center justify-center rounded-lg border border-transparent bg-primary px-5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Create Account
        </Link>
      </div>
    </section>
  );
}
