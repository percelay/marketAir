"use client";

import { ExternalLink } from "lucide-react";

export default function Services() {
  const openCatalogue = () => {
    window.open("/catalogue", "_blank", "width=1200,height=800,scrollbars=yes,resizable=yes");
  };

  return (
    <section id="services" className="site-section section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card-strong p-6 sm:p-8 lg:p-10 animate-rise">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-4xl">
              <p className="eyebrow mb-3">Products</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-main)] leading-tight">
                Our sole emphasis is to find and introduce new and innovative components for environmental systems into the HVACR industry.
              </h2>
              <p className="text-[var(--color-text-muted)] mt-4 text-sm sm:text-base leading-relaxed max-w-2xl">
                Browse our full wholesale catalogue for line set covers, condensate management, valves, fittings, mounting hardware, and VRF/VRV components.
              </p>
            </div>

            <button
              onClick={openCatalogue}
              className="btn-primary shrink-0 px-5 py-3 text-sm whitespace-nowrap"
            >
              Shop Here
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          <hr className="ice-divider my-7" />

          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="glass-chip rounded-xl px-4 py-3 text-[var(--color-text-main)] font-medium">
              Commercial + residential
            </div>
            <div className="glass-chip rounded-xl px-4 py-3 text-[var(--color-text-main)] font-medium">
              USA + Canada coverage
            </div>
            <div className="glass-chip rounded-xl px-4 py-3 text-[var(--color-text-main)] font-medium">
              Centrally located distribution
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
