"use client";

import { useState } from "react";
import { Menu, X, Wind } from "lucide-react";

const navLinks = [
  { label: "About",     href: "#about"     },
  { label: "Products",  href: "#services"  },
  { label: "Reps",      href: "#reps"      },
  { label: "Downloads", href: "#downloads" },
  { label: "Warranty",  href: "#warranty"  },
  { label: "Contact",   href: "#contact"   },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="glass-header sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="MarketAir home">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #5bcaf7 0%, #1e6fa8 100%)",
                boxShadow: "0 0 16px rgba(91,202,247,0.35)",
              }}
            >
              <Wind className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight" style={{ color: "var(--color-text-main)" }}>
              MarketAir
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-px"
                style={{ color: "var(--color-text-muted)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#services"
              className="ml-3 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #5bcaf7 0%, #1e6fa8 100%)",
                boxShadow: "0 0 16px rgba(91,202,247,0.25)",
              }}
            >
              Buy Products
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-xl transition-all duration-200 hover:bg-white/5"
            style={{ color: "var(--color-text-muted)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            borderColor: "var(--color-border)",
            background: "rgba(6,14,30,0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/5"
                style={{ color: "var(--color-text-muted)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#services"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-3 rounded-xl text-sm font-semibold text-white text-center transition-all duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #5bcaf7 0%, #1e6fa8 100%)",
                boxShadow: "0 0 16px rgba(91,202,247,0.20)",
              }}
            >
              Buy Products
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
