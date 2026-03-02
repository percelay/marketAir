import { FileDown } from "lucide-react";

export default function Downloads() {
  return (
    <section id="downloads" className="site-section section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 animate-rise">
          <p className="eyebrow mb-3">Downloads</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-main)]">Product Resources</h2>
        </div>

        <div className="glass-card-strong rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center gap-5">
          <div className="w-14 h-14 rounded-2xl glass-chip flex items-center justify-center float-soft">
            <FileDown className="w-7 h-7 text-[var(--color-primary-2)]" />
          </div>
          <p className="text-[var(--color-text-muted)] max-w-xl text-sm sm:text-base leading-relaxed">
            Product brochures, installation references, and sales sheets are available on request for trade and wholesale partners.
          </p>
          <a
            href="#contact"
            className="btn-primary px-5 py-2.5 text-sm"
          >
            <FileDown className="w-4 h-4" />
            Contact Us for Files
          </a>
        </div>
      </div>
    </section>
  );
}
