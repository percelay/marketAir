"use client";

import { ExternalLink } from "lucide-react";

export default function Services() {
  const openCatalogue = () => {
    window.open("/catalogue", "_blank", "width=1200,height=800,scrollbars=yes,resizable=yes");
  };

  return (
    <section id="services" className="py-20 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">
              Products
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-main)]">
              Our sole emphasis is to find and introduce new and innovative components for environmental systems into the HVACR industry.
            </h2>
          </div>

          <button
            onClick={openCatalogue}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:opacity-90 hover:-translate-y-1 transition-all duration-200 shadow-md whitespace-nowrap"
          >
            Shop Here
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
