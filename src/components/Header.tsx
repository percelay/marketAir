"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
          <a
            href="#"
            className="group flex h-full items-center -ml-4 sm:-ml-6 lg:-ml-8"
            aria-label="MarketAir home"
          >
            <div className="relative h-full w-[160px] sm:w-[185px] lg:w-[220px] overflow-hidden transition-all duration-300 group-hover:-translate-y-0.5">
              <Image
                src="/images/marketair logo.avif"
                alt="MarketAir logo"
                fill
                sizes="(min-width: 1024px) 220px, (min-width: 640px) 185px, 160px"
                className="object-contain object-left"
                priority
              />
            </div>
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
                background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                boxShadow: "0 8px 18px rgba(16,33,58,0.14)",
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
            background: "rgba(255,255,255,0.98)",
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
                className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-[rgba(18,148,216,0.08)]"
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
                background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)",
                boxShadow: "0 8px 18px rgba(16,33,58,0.14)",
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
