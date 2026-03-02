import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background image */}
      <Image
        src="/images/hvac3.jpg"
        alt="HVACR installation"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white/80 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
            HVACR Industry Specialists
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Components for{" "}
            <span className="text-[var(--color-primary)]">Environmental</span>{" "}
            Systems
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-2xl">
            Importer, exporter, manufacturer, and distributor specializing in
            installation components and accessories for the HVACR industry.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:opacity-90 hover:-translate-y-1 transition-all duration-200 shadow-md"
            >
              Buy Products
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#reps"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 bg-white/10 text-white font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all duration-200 backdrop-blur-sm"
            >
              <MapPin className="w-4 h-4" />
              Search Reps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
