"use client";

import { useState } from "react";
import { MapPin, ChevronDown, Phone, Users } from "lucide-react";

type Rep = {
  territory: string;
  states: string;
  rep: string;
};

const reps: Rep[] = [
  {
    territory: "Western Canada",
    states: "BC, AB, SK, MB, YT, NT, NU",
    rep: "Alliance Marketing",
  },
  {
    territory: "Eastern Canada",
    states: "ON, QE, NB, NS, PEI, NF",
    rep: "Fowler Sales Agency",
  },
  {
    territory: "Pacific Northwest",
    states: "WA, OR, ID, AK",
    rep: "Pacific NW Reps",
  },
  {
    territory: "West / Hawaii",
    states: "CA, AZ, HI, Western NV & Clark County (Las Vegas)",
    rep: "Denco",
  },
  {
    territory: "South Central",
    states: "TX, NM, OK, AR, LA",
    rep: "Hugh M. Cunningham Companies",
  },
  {
    territory: "Midwest",
    states: "ND, SD, IA, NB, MN, WI, IL, KS, MO, KY, MI, OH, WV, IN",
    rep: "Moore Sales Corp",
  },
  {
    territory: "New England / Upstate NY",
    states: "ME, NH, VT, MA, RI, CT, Upstate NY",
    rep: "Pilgrim Sales",
  },
  {
    territory: "Mid-Atlantic",
    states: "NYC Metro & Long Island, NJ, PA, VI, MD, DE",
    rep: "Kehoe Company",
  },
  {
    territory: "Carolinas",
    states: "NC, SC",
    rep: "Mid South Marketing",
  },
  {
    territory: "Southeast",
    states: "GA, AL, TN, MS, Western FL Panhandle",
    rep: "Phil Thomas",
  },
  {
    territory: "Florida",
    states: "FL (except panhandle west of GA, AB border)",
    rep: "AHR Sales",
  },
  {
    territory: "Mountain / Interior West",
    states: "CO, UT, WY, MT, Eastern NV (except Las Vegas)",
    rep: "Open",
  },
];

function VersionStatic() {
  return (
    <div>
      <div className="mb-6">
        <span className="glass-chip inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[var(--color-primary-2)] text-xs font-semibold uppercase tracking-widest">
          Version 1 - Static Reference
        </span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reps.map((r) => (
          <div
            key={r.territory}
            className="glass-card rounded-2xl p-5 flex gap-4 items-start transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-strong)]"
          >
            <div className="flex flex-col items-center pt-1 shrink-0">
              <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
              <div className="w-px flex-1 mt-1 min-h-[2rem] bg-[var(--color-border-strong)]" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary-2)] mb-0.5">
                {r.territory}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mb-2 leading-relaxed">
                {r.states}
              </p>
              <p className="text-sm font-bold text-[var(--color-text-main)]">{r.rep}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VersionInteractive() {
  const [active, setActive] = useState<number | null>(null);
  const activeRep = active !== null ? reps[active] : null;
  const activeCountry =
    activeRep?.territory.includes("Canada") ? "canada" : activeRep ? "usa" : null;

  const hotspots = [
    { repIndex: 0, pinX: 255, pinY: 188, labelX: 140, labelY: 122, align: "right" as const },
    { repIndex: 1, pinX: 625, pinY: 198, labelX: 850, labelY: 126, align: "left" as const },
    { repIndex: 2, pinX: 230, pinY: 286, labelX: 112, labelY: 264, align: "right" as const },
    { repIndex: 3, pinX: 250, pinY: 378, labelX: 112, labelY: 392, align: "right" as const },
    { repIndex: 4, pinX: 454, pinY: 422, labelX: 468, labelY: 554, align: "center" as const },
    { repIndex: 5, pinX: 550, pinY: 350, labelX: 548, labelY: 264, align: "center" as const },
    { repIndex: 6, pinX: 715, pinY: 320, labelX: 870, labelY: 272, align: "left" as const },
    { repIndex: 7, pinX: 700, pinY: 360, labelX: 890, labelY: 350, align: "left" as const },
    { repIndex: 8, pinX: 698, pinY: 418, labelX: 870, labelY: 426, align: "left" as const },
    { repIndex: 9, pinX: 618, pinY: 448, labelX: 610, labelY: 568, align: "center" as const },
    { repIndex: 10, pinX: 714, pinY: 505, labelX: 822, labelY: 570, align: "left" as const },
    { repIndex: 11, pinX: 368, pinY: 346, labelX: 302, labelY: 256, align: "right" as const },
  ];

  return (
    <div>
      <div className="mb-6">
        <span className="glass-chip inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[var(--color-primary-2)] text-xs font-semibold uppercase tracking-widest">
          Version 2 - Interactive Region Select
        </span>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2">
          <div
            onMouseLeave={() => setActive(null)}
            className="glass-card-strong relative overflow-hidden rounded-2xl p-3"
          >
            <svg viewBox="0 0 1000 620" className="w-full h-auto">
              <path
                d="M130 165 L170 145 L230 136 L300 120 L360 128 L425 112 L500 118 L575 103 L650 112 L724 125 L782 147 L828 185 L790 214 L742 222 L680 210 L622 220 L560 212 L495 225 L430 212 L362 224 L300 210 L244 216 L188 201 L148 183 Z"
                style={{
                  fill: activeCountry === "canada" ? "rgba(144, 220, 255, 0.32)" : "rgba(174, 223, 255, 0.14)",
                  stroke: activeCountry === "canada" ? "rgba(146, 214, 255, 0.85)" : "rgba(146, 214, 255, 0.52)",
                  transition: "fill 200ms ease, stroke 200ms ease",
                }}
                strokeWidth={2}
              />

              <path
                d="M170 256 L210 238 L270 242 L320 252 L370 246 L430 256 L490 250 L560 258 L620 246 L676 258 L730 282 L764 318 L748 346 L766 392 L744 432 L705 465 L650 472 L612 456 L575 470 L532 465 L502 452 L460 462 L410 458 L368 447 L332 422 L292 423 L254 405 L228 377 L200 345 L172 309 Z"
                style={{
                  fill: activeCountry === "usa" ? "rgba(113, 205, 252, 0.28)" : "rgba(194, 235, 255, 0.16)",
                  stroke: activeCountry === "usa" ? "rgba(146, 214, 255, 0.85)" : "rgba(146, 214, 255, 0.52)",
                  transition: "fill 200ms ease, stroke 200ms ease",
                }}
                strokeWidth={2}
              />

              <path
                d="M120 460 L150 450 L186 465 L172 492 L138 500 L108 482 Z"
                fill="rgba(174, 223, 255, 0.14)"
                stroke="rgba(146, 214, 255, 0.45)"
                strokeWidth={1.5}
              />

              <circle cx={265} cy={525} r={5} fill="rgba(146, 214, 255, 0.52)" />
              <circle cx={282} cy={536} r={4} fill="rgba(146, 214, 255, 0.52)" />
              <circle cx={301} cy={542} r={3.5} fill="rgba(146, 214, 255, 0.52)" />

              <text x={490} y={174} textAnchor="middle" fill="rgba(208, 239, 255, 0.8)" className="text-[20px] font-semibold">
                Canada
              </text>
              <text x={500} y={352} textAnchor="middle" fill="rgba(208, 239, 255, 0.8)" className="text-[20px] font-semibold">
                United States
              </text>

              {hotspots.map((spot) => {
                const rep = reps[spot.repIndex];
                const isActive = active === spot.repIndex;

                return (
                  <g
                    key={rep.territory}
                    onMouseEnter={() => setActive(spot.repIndex)}
                    onClick={() => setActive(spot.repIndex)}
                    className="cursor-pointer"
                  >
                    <line
                      x1={spot.pinX}
                      y1={spot.pinY}
                      x2={spot.labelX}
                      y2={spot.labelY}
                      stroke={isActive ? "rgba(146, 214, 255, 0.95)" : "rgba(146, 214, 255, 0.5)"}
                      strokeWidth={2}
                    />
                    <circle
                      cx={spot.pinX}
                      cy={spot.pinY}
                      r={7}
                      fill={isActive ? "rgba(95, 201, 255, 1)" : "rgba(123, 187, 224, 0.8)"}
                    />
                    <circle
                      cx={spot.pinX}
                      cy={spot.pinY}
                      r={11}
                      stroke={isActive ? "rgba(146, 214, 255, 0.92)" : "transparent"}
                      opacity={isActive ? 0.86 : 0}
                      strokeWidth={2}
                      fill="none"
                    />
                  </g>
                );
              })}
            </svg>

            {hotspots.map((spot) => {
              const rep = reps[spot.repIndex];
              const isActive = active === spot.repIndex;
              const left = `${(spot.labelX / 1000) * 100}%`;
              const top = `${(spot.labelY / 620) * 100}%`;
              const transform =
                spot.align === "left"
                  ? "translate(-100%, -50%)"
                  : spot.align === "center"
                    ? "translate(-50%, -50%)"
                    : "translate(0, -50%)";

              return (
                <button
                  key={`${rep.territory}-label`}
                  onMouseEnter={() => setActive(spot.repIndex)}
                  onFocus={() => setActive(spot.repIndex)}
                  onClick={() => setActive(spot.repIndex)}
                  className={`absolute z-10 px-3 py-1.5 rounded-lg border text-[11px] md:text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-[rgba(95,201,255,0.24)] border-[var(--color-border-strong)] text-[var(--color-text-main)] shadow-[var(--shadow-soft)]"
                      : "bg-[rgba(171,224,249,0.12)] border-[var(--color-border-soft)] text-[var(--color-text-main)] hover:border-[var(--color-border)]"
                  }`}
                  style={{ left, top, transform }}
                >
                  {rep.territory}
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-1 flex items-start">
          {activeRep ? (
            <div className="w-full glass-card-strong rounded-2xl p-6 sm:p-7 transition-all duration-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl glass-chip flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-primary-2)]">
                    Territory
                  </p>
                  <p className="font-bold text-[var(--color-text-main)] text-lg">{activeRep.territory}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="glass-card rounded-xl p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-dim)] mb-1">
                    States / Provinces
                  </p>
                  <p className="text-[var(--color-text-main)] font-medium text-sm leading-relaxed">{activeRep.states}</p>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-dim)] mb-1">
                    Representative
                  </p>
                  <p className="text-[var(--color-primary-2)] font-bold text-xl">{activeRep.rep}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[240px] gap-3">
              <div className="w-12 h-12 rounded-2xl glass-chip flex items-center justify-center float-soft">
                <Users className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <p className="text-[var(--color-text-muted)] text-sm">
                Hover or click a region to see the assigned representative.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type Region = "USA" | "Canada";

const usaRegions = [
  "Pacific Northwest",
  "West / Hawaii",
  "South Central",
  "Midwest",
  "New England / Upstate NY",
  "Mid-Atlantic",
  "Carolinas",
  "Southeast",
  "Florida",
  "Mountain / Interior West",
] as const;

const canadaRegions = ["Western Canada", "Eastern Canada"] as const;

function VersionWizard() {
  const [country, setCountry] = useState<Region | "">("");
  const [territory, setTerritory] = useState<string>("");

  const regionOptions =
    country === "USA"
      ? usaRegions
      : country === "Canada"
        ? canadaRegions
        : [];

  const result = territory
    ? reps.find((r) => r.territory === territory)
    : null;

  const reset = () => {
    setCountry("");
    setTerritory("");
  };

  return (
    <div>
      <div className="mb-6">
        <span className="glass-chip inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[var(--color-primary-2)] text-xs font-semibold uppercase tracking-widest">
          Version 3 - Step-by-Step Finder
        </span>
      </div>

      <div className="max-w-xl">
        <div className="glass-card-strong rounded-2xl p-6 sm:p-8 space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-dim)] mb-2">
              Step 1 - Select Country
            </p>
            <div className="relative">
              <select
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value as Region | "");
                  setTerritory("");
                }}
                className="w-full appearance-none glass-card rounded-xl px-4 py-3 pr-10 text-sm font-medium text-[var(--color-text-main)] bg-[rgba(8,21,45,0.75)] focus:outline-none focus:border-[var(--color-border-strong)]"
              >
                <option value="">Choose country</option>
                <option value="USA">United States</option>
                <option value="Canada">Canada</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
            </div>
          </div>

          {country && (
            <div className="transition-all duration-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-dim)] mb-2">
                Step 2 - Select Territory
              </p>
              <div className="relative">
                <select
                  value={territory}
                  onChange={(e) => setTerritory(e.target.value)}
                  className="w-full appearance-none glass-card rounded-xl px-4 py-3 pr-10 text-sm font-medium text-[var(--color-text-main)] bg-[rgba(8,21,45,0.75)] focus:outline-none focus:border-[var(--color-border-strong)]"
                >
                  <option value="">Choose territory</option>
                  {regionOptions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
              </div>
            </div>
          )}

          {result && (
            <div className="glass-card rounded-xl p-5 border border-[var(--color-border)] transition-all duration-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary-2)] mb-3">
                Your Representative
              </p>
              <p className="text-2xl font-bold text-[var(--color-text-main)] mb-2">{result.rep}</p>
              <p className="text-sm text-[var(--color-text-muted)] mb-4">{result.states}</p>
              <div className="flex gap-2 flex-wrap">
                <a href="#contact" className="btn-primary px-4 py-2 text-sm">
                  <Phone className="w-3.5 h-3.5" />
                  Contact MarketAir
                </a>
                <button
                  onClick={reset}
                  className="btn-glass px-4 py-2 text-sm"
                >
                  Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type TabId = "static" | "interactive" | "wizard";

const tabs: { id: TabId; label: string }[] = [
  { id: "static", label: "Static" },
  { id: "interactive", label: "Interactive" },
  { id: "wizard", label: "Finder" },
];

export default function GeographicalVariations() {
  const [tab, setTab] = useState<TabId>("static");

  return (
    <section id="reps" className="site-section section-alt section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-4 animate-rise">
          <p className="eyebrow mb-3">Manufacturer Reps</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-main)] mb-4">
            Find Your Representative
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl leading-relaxed mb-2">
            In the trade or want to buy wholesale? You can search for manufacturer
            representatives by zipcode.
          </p>
          <p className="text-sm font-semibold text-[var(--color-primary-2)]">
            FOR SHIPMENTS TO CANADA, PLEASE CALL (732) 985-8226 to place your
            credit card order.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 mt-8" role="tablist" aria-label="Representative finder modes">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              role="tab"
              aria-selected={tab === t.id}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                tab === t.id
                  ? "btn-primary"
                  : "btn-glass text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div>
          {tab === "static" && <VersionStatic />}
          {tab === "interactive" && <VersionInteractive />}
          {tab === "wizard" && <VersionWizard />}
        </div>
      </div>
    </section>
  );
}
