"use client";

import { Wind, X } from "lucide-react";

type Product = {
  sku: string;
  name: string;
  category: string;
  description: string;
  unit: string;
};

const products: Product[] = [
  {
    sku: "MA-1001",
    name: "Line Set Cover Kit — 3\" Wide",
    category: "Line Set Covers",
    description: "UV-resistant PVC line set cover system for ductless mini-split installations. Includes base, cap, and connectors.",
    unit: "Kit",
  },
  {
    sku: "MA-1002",
    name: "Line Set Cover Kit — 4\" Wide",
    category: "Line Set Covers",
    description: "Heavy-duty UV-resistant PVC cover for larger line sets. Compatible with most mini-split and VRF systems.",
    unit: "Kit",
  },
  {
    sku: "MA-1003",
    name: "Line Set Cover — Flat Elbow 3\"",
    category: "Line Set Covers",
    description: "90° flat elbow connector for routing line set covers along walls and corners.",
    unit: "Each",
  },
  {
    sku: "MA-1004",
    name: "Line Set Cover — Inside Corner 4\"",
    category: "Line Set Covers",
    description: "Inside corner piece for clean transitions in line set cover installations.",
    unit: "Each",
  },
  {
    sku: "MA-2001",
    name: "Condensate Drain Pan — 18\" x 24\"",
    category: "Condensate Management",
    description: "High-impact polymer secondary drain pan for mini-split air handlers. Includes drain port and inlet screen.",
    unit: "Each",
  },
  {
    sku: "MA-2002",
    name: "Condensate Drain Pan — 24\" x 36\"",
    category: "Condensate Management",
    description: "Large-format secondary containment pan suitable for commercial-grade ceiling cassette units.",
    unit: "Each",
  },
  {
    sku: "MA-2003",
    name: "Condensate Pump — 1/30 HP",
    category: "Condensate Management",
    description: "Compact float-activated condensate pump. 3/8\" barb outlet, 6-foot power cord, suitable for mini-split applications.",
    unit: "Each",
  },
  {
    sku: "MA-3001",
    name: "Pre-Insulated Lineset — 1/4\" × 1/2\" × 15 ft",
    category: "Linesets",
    description: "Pre-charged copper lineset with factory-applied foam insulation. Ready for R-410A and R-32 systems.",
    unit: "Set",
  },
  {
    sku: "MA-3002",
    name: "Pre-Insulated Lineset — 1/4\" × 3/8\" × 25 ft",
    category: "Linesets",
    description: "Extended-length pre-insulated lineset for longer runs. Suitable for residential and light commercial applications.",
    unit: "Set",
  },
  {
    sku: "MA-4001",
    name: "Mounting Bracket — 14\" Wall Mount",
    category: "Mounting Hardware",
    description: "Heavy-gauge galvanized steel bracket for outdoor condenser mounting. Rated for units up to 175 lbs.",
    unit: "Each",
  },
  {
    sku: "MA-4002",
    name: "Mounting Bracket — 18\" Wall Mount",
    category: "Mounting Hardware",
    description: "Extra-wide wall bracket for larger condensing units. Anti-vibration pad included.",
    unit: "Each",
  },
  {
    sku: "MA-4003",
    name: "Roof Curb Adapter — Universal",
    category: "Mounting Hardware",
    description: "Adjustable roof curb adapter kit compatible with a wide range of package unit footprints. Includes flashing.",
    unit: "Kit",
  },
  {
    sku: "MA-5001",
    name: "Refrigerant Service Valve — 1/4\" Flare",
    category: "Valves & Fittings",
    description: "Ball-type access valve with Schrader core. Rated for R-410A, R-32, and R-22 refrigerants.",
    unit: "Each",
  },
  {
    sku: "MA-5002",
    name: "Bi-Flow Filter Drier — 1/2\" ODS",
    category: "Valves & Fittings",
    description: "Bi-directional filter drier for heat pump applications. Removes moisture and particulates from refrigerant circuit.",
    unit: "Each",
  },
  {
    sku: "MA-6001",
    name: "Vibration Isolation Pad — 6\" × 6\"",
    category: "Accessories",
    description: "Neoprene anti-vibration pad for compressor and condenser unit isolation. Load rating: 500 lbs per pad.",
    unit: "4-Pack",
  },
  {
    sku: "MA-6002",
    name: "Insulated Copper Stub-Out Cap — 1/4\"",
    category: "Accessories",
    description: "Foam-insulated service cap for protecting copper line terminations during installation.",
    unit: "10-Pack",
  },
  {
    sku: "MA-6003",
    name: "Electrical Whip — 60A 10/3 AWG",
    category: "Accessories",
    description: "Pre-assembled flexible electrical whip with strain relief connector. Suitable for most residential condensing units.",
    unit: "Each",
  },
  {
    sku: "MA-7001",
    name: "VRF Branch Controller — 4-Port",
    category: "VRF/VRV Components",
    description: "Refrigerant distribution header for VRF system branch circuit expansion. Compatible with major VRF platforms.",
    unit: "Each",
  },
  {
    sku: "MA-7002",
    name: "VRF Branch Controller — 8-Port",
    category: "VRF/VRV Components",
    description: "Eight-port refrigerant distribution header for large VRF installations. Includes insulation jacket.",
    unit: "Each",
  },
  {
    sku: "MA-7003",
    name: "VRF Refnet Joint — 1/2\" × 3/8\"",
    category: "VRF/VRV Components",
    description: "Y-branch fitting for VRF refrigerant piping distribution. Factory-cleaned and nitrogen-charged.",
    unit: "Each",
  },
];

const categories = [...new Set(products.map((p) => p.category))];

export default function CataloguePage() {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-40 glass-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg glass-chip flex items-center justify-center">
              <Wind className="w-4 h-4 text-[var(--color-primary)]" />
            </div>
            <span className="font-bold text-sm text-[var(--color-text-main)]">MarketAir Product Catalogue</span>
          </div>
          <button
            onClick={() => window.close()}
            className="btn-glass px-3 py-1.5 text-xs"
          >
            <X className="w-4 h-4" />
            Close
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="glass-card-strong rounded-3xl p-6 sm:p-8 mb-12 animate-rise">
          <p className="eyebrow mb-2">Product Catalogue</p>
          <h1 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-main)] mb-3">
            HVACR Installation Components
          </h1>
          <p className="text-[var(--color-text-muted)] text-sm sm:text-base max-w-3xl leading-relaxed">
            Contact your local manufacturer representative or call us at{" "}
            <a href="tel:7329858226" className="text-[var(--color-primary-2)] font-semibold hover:underline">
              (732) 985-8226
            </a>{" "}
            to place a wholesale order. Items ship from our centrally located warehouse throughout the USA and Canada.
          </p>
        </div>

        {categories.map((cat) => (
          <div key={cat} className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-lg font-bold text-[var(--color-text-main)]">{cat}</h2>
              <div className="flex-1 h-px bg-[var(--color-border-soft)]" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products
                .filter((p) => p.category === cat)
                .map((product) => (
                  <div
                    key={product.sku}
                    className="glass-card rounded-2xl p-6 hover:-translate-y-1 hover:border-[var(--color-border-strong)] transition-all duration-300 flex flex-col gap-3"
                  >
                    <span className="glass-chip inline-block self-start px-2 py-0.5 rounded-md text-[var(--color-primary-2)] text-[10px] font-bold tracking-widest">
                      {product.sku}
                    </span>

                    <h3 className="font-bold text-[var(--color-text-main)] text-sm leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed flex-1">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-[var(--color-border-soft)]">
                      <span className="text-xs text-[var(--color-text-muted)]">
                        Sold per: <span className="font-semibold text-[var(--color-text-main)]">{product.unit}</span>
                      </span>
                      <a
                        href="mailto:info@marketair.com"
                        className="text-xs font-semibold text-[var(--color-primary-2)] hover:underline"
                      >
                        Inquire →
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div className="glass-card rounded-2xl p-6 sm:p-8 text-center border-[var(--color-border-soft)]">
          <p className="text-xs text-[var(--color-text-muted)]">
            This catalogue is for trade and wholesale customers only. All orders placed through your regional manufacturer representative.
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">
            FOR SHIPMENTS TO CANADA, PLEASE CALL{" "}
            <a href="tel:7329858226" className="text-[var(--color-primary-2)] font-semibold hover:underline">
              (732) 985-8226
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
