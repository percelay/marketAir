import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[620px] flex items-center">
      {/* Background image */}
      <Image
        src="/images/hvac3.jpg"
        alt="HVACR installation"
        fill
        className="object-cover"
        priority
      />

      {/* Layered icy blue gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,14,30,0.88) 0%, rgba(9,35,70,0.80) 40%, rgba(6,14,30,0.75) 100%)",
        }}
      />
      {/* Subtle radial glow at top-left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 0% 40%, rgba(30,111,168,0.30) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-7"
            style={{
              background: "rgba(91,202,247,0.10)",
              border: "1px solid rgba(91,202,247,0.25)",
              backdropFilter: "blur(8px)",
              color: "var(--color-primary-2)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full glow-dot"
              style={{ background: "var(--color-primary)" }}
            />
            HVACR Industry Specialists
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] mb-6" style={{ color: "var(--color-text-main)" }}>
            Components for{" "}
            <span className="gradient-text">Environmental</span>{" "}
            Systems
          </h1>

          {/* Subheadline */}
          <p className="text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: "rgba(186,230,253,0.70)" }}>
            Importer, exporter, manufacturer, and distributor specializing in
            installation components and accessories for the HVACR industry.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #5bcaf7 0%, #1e6fa8 100%)",
                boxShadow: "0 0 20px rgba(91,202,247,0.30), 0 4px 16px rgba(6,14,30,0.50)",
              }}
            >
              Buy Products
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#reps"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(91,202,247,0.25)",
                backdropFilter: "blur(12px)",
                color: "var(--color-text-main)",
                boxShadow: "0 4px 16px rgba(6,14,30,0.40)",
              }}
            >
              <MapPin className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
              Search Reps
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade into site bg */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, var(--color-bg) 100%)",
        }}
      />
    </section>
  );
}
