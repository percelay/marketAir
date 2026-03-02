import { Building2, Globe, Package, Truck } from "lucide-react";

const highlights = [
  { icon: Building2, label: "Founded 1986"            },
  { icon: Globe,     label: "USA & Canada"             },
  { icon: Package,   label: "Commercial & Residential" },
  { icon: Truck,     label: "Central Warehouse"        },
];

export default function About() {
  return (
    <section id="about" className="py-24 section-alt relative overflow-hidden">

      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(30,111,168,0.12) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Text */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              About
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-6 leading-tight"
              style={{ color: "var(--color-text-main)" }}
            >
              MarketAir,{" "}
              <span className="gradient-text">Inc.</span>
            </h2>
            <div
              className="space-y-4 leading-relaxed text-[15px]"
              style={{ color: "var(--color-text-muted)" }}
            >
              <p>
                Originally founded as a manufacturer&apos;s representative company by
                Gerry Spanger in April 1986, MarketAir, Inc. reinvented itself in
                January 2016 as an importer, exporter, manufacturer and distributor
                specializing in installation components and accessories for the
                HVACR industry.
              </p>
              <p>
                We have developed and acquired a number of innovative new products
                for commercial and residential applications, and cover both the
                ducted and ductless sectors, as well as the fast developing VRF/VRV
                market. These include our own dedicated products which are
                manufactured to our specifications, as well as a range of imported
                items sourced from international manufacturers.
              </p>
              <p>
                In addition, we act as a national distributor for smaller
                independent USA manufacturers who do not have their own sales
                organizations. MarketAir has a national network of manufacturers&apos;
                reps who sell our products into the HVACR industry through wholesale
                distribution and operates a centrally situated warehouse from which
                its products are shipped throughout the USA and Canada.
              </p>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="glass-2 rounded-2xl p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-3)]"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(91,202,247,0.18) 0%, rgba(30,111,168,0.12) 100%)",
                    border: "1px solid rgba(91,202,247,0.20)",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "var(--color-primary)" }} />
                </div>
                <span
                  className="font-semibold text-sm leading-snug"
                  style={{ color: "var(--color-text-main)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
