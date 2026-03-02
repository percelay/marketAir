import { Wind, Phone, Mail, MapPin } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#services" },
  { label: "Reps", href: "#reps" },
  { label: "Downloads", href: "#downloads" },
  { label: "Warranty", href: "#warranty" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-shell pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="glass-card-strong rounded-3xl p-7 sm:p-10 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg glass-chip flex items-center justify-center">
                <Wind className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <span className="font-bold text-lg text-[var(--color-text-main)]">MarketAir, Inc.</span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xs">
              Importer, exporter, manufacturer, and distributor specializing in
              installation components and accessories for the HVACR industry.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-dim)] mb-4">Navigation</p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary-2)] transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-dim)] mb-4">Contact</p>
            <div className="space-y-3">
              <a
                href="tel:7329858226"
                className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary-2)] transition-colors duration-200"
              >
                <Phone className="w-4 h-4 shrink-0" />
                732-985-8226
              </a>
              <a
                href="mailto:info@marketair.com"
                className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary-2)] transition-colors duration-200"
              >
                <Mail className="w-4 h-4 shrink-0" />
                info@marketair.com
              </a>
              <div className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>402 Merrywood Drive, Edison, NJ 08817</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--color-border-soft)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-text-dim)]">
          <p>
            &copy; {year} MarketAir, Inc. All rights reserved.
          </p>
          <p>
            FOR SHIPMENTS TO CANADA, PLEASE CALL (732) 985-8226
          </p>
        </div>
      </div>
    </footer>
  );
}
