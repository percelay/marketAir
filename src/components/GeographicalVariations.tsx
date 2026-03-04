"use client";

import { useState } from "react";
import { US_STATE_PATHS } from "./usStatePaths";
import { CANADA_OUTLINE_PATH, CANADA_SPLIT_X } from "./canadaOutline";

type USRegionId =
  | "pacificNorthwest"
  | "westHawaii"
  | "mountainWest"
  | "southCentral"
  | "midwest"
  | "newEnglandUpstate"
  | "midAtlantic"
  | "carolinas"
  | "southeast"
  | "florida";

type CanadaRegionId = "westernCanada" | "easternCanada";
type RegionId = USRegionId | CanadaRegionId;
type StateCode = keyof typeof US_STATE_PATHS;

type MapRegion = {
  id: RegionId;
  territory: string;
  rep: string;
  stateNames: string[];
  mapPoint: { x: number; y: number };
  labelPoint: { x: number; y: number };
  labelAnchor: "start" | "middle" | "end";
  stateCodes?: string[];
};

type USMapRegion = MapRegion & {
  id: USRegionId;
  stateCodes: string[];
};

type CanadaMapRegion = MapRegion & {
  id: CanadaRegionId;
};

const MAP_SCALE = 0.52;
const MAP_OFFSET_X = 470;
const MAP_OFFSET_Y = 350;

const toCanvasX = (sourceX: number) => MAP_OFFSET_X + sourceX * MAP_SCALE;
const toCanvasY = (sourceY: number) => MAP_OFFSET_Y + sourceY * MAP_SCALE;

const CANADA_REGIONS: CanadaMapRegion[] = [
  {
    id: "westernCanada",
    territory: "Western Canada",
    rep: "Alliance Marketing",
    stateNames: [
      "British Columbia",
      "Alberta",
      "Saskatchewan",
      "Manitoba",
      "Yukon",
      "Northwest Territories",
      "Nunavut",
    ],
    mapPoint: { x: 300, y: -48 },
    labelPoint: { x: 360, y: 190 },
    labelAnchor: "end",
  },
  {
    id: "easternCanada",
    territory: "Eastern Canada",
    rep: "Fowler Sales Agency",
    stateNames: [
      "Ontario",
      "Quebec",
      "New Brunswick",
      "Nova Scotia",
      "Prince Edward Island",
      "Newfoundland and Labrador",
    ],
    mapPoint: { x: 660, y: -170 },
    labelPoint: { x: 813, y: 120 },
    labelAnchor: "middle",
  },
];

const US_REGIONS: USMapRegion[] = [
  {
    id: "pacificNorthwest",
    territory: "Pacific Northwest",
    rep: "Pacific NW Reps",
    stateCodes: ["WA", "OR", "ID", "AK"],
    stateNames: ["Washington", "Oregon", "Idaho", "Alaska"],
    mapPoint: { x: 136, y: 88 },
    labelPoint: { x: 360, y: 330 },
    labelAnchor: "end",
  },
  {
    id: "westHawaii",
    territory: "West / Hawaii",
    rep: "Denco",
    stateCodes: ["CA", "AZ", "HI"],
    stateNames: [
      "California",
      "Arizona",
      "Hawaii",
      "Nevada (west + Las Vegas area)",
    ],
    mapPoint: { x: 138, y: 318 },
    labelPoint: { x: 360, y: 490 },
    labelAnchor: "end",
  },
  {
    id: "mountainWest",
    territory: "Mountain / Interior West",
    rep: "Open",
    stateCodes: ["CO", "UT", "WY", "MT", "NV"],
    stateNames: [
      "Colorado",
      "Utah",
      "Wyoming",
      "Montana",
      "Nevada (east, except Las Vegas)",
    ],
    mapPoint: { x: 320, y: 254 },
    labelPoint: { x: 760, y: 220 },
    labelAnchor: "middle",
  },
  {
    id: "southCentral",
    territory: "South Central",
    rep: "Hugh M. Cunningham Companies",
    stateCodes: ["TX", "NM", "OK", "AR", "LA"],
    stateNames: ["Texas", "New Mexico", "Oklahoma", "Arkansas", "Louisiana"],
    mapPoint: { x: 454, y: 424 },
    labelPoint: { x: 820, y: 800 },
    labelAnchor: "middle",
  },
  {
    id: "midwest",
    territory: "Midwest",
    rep: "Moore Sales Corp",
    stateCodes: [
      "ND",
      "SD",
      "IA",
      "NE",
      "MN",
      "WI",
      "IL",
      "KS",
      "MO",
      "KY",
      "MI",
      "OH",
      "WV",
      "IN",
    ],
    stateNames: [
      "North Dakota",
      "South Dakota",
      "Iowa",
      "Nebraska",
      "Minnesota",
      "Wisconsin",
      "Illinois",
      "Kansas",
      "Missouri",
      "Kentucky",
      "Michigan",
      "Ohio",
      "Indiana",
      "West Virginia",
    ],
    mapPoint: { x: 558, y: 242 },
    labelPoint: { x: 955, y: 280 },
    labelAnchor: "middle",
  },
  {
    id: "newEnglandUpstate",
    territory: "New England / Upstate NY",
    rep: "Pilgrim Sales",
    stateCodes: ["ME", "NH", "VT", "MA", "RI", "CT", "NY"],
    stateNames: [
      "Maine",
      "New Hampshire",
      "Vermont",
      "Massachusetts",
      "Rhode Island",
      "Connecticut",
      "New York (upstate)",
    ],
    mapPoint: { x: 868, y: 134 },
    labelPoint: { x: 1145, y: 310 },
    labelAnchor: "start",
  },
  {
    id: "midAtlantic",
    territory: "Mid-Atlantic",
    rep: "Kehoe Company",
    stateCodes: ["NJ", "PA", "MD", "DE", "VA", "DC"],
    stateNames: [
      "New Jersey",
      "Pennsylvania",
      "Maryland",
      "Delaware",
      "Virginia",
      "District of Columbia",
      "NYC Metro + Long Island",
    ],
    mapPoint: { x: 808, y: 238 },
    labelPoint: { x: 1145, y: 430 },
    labelAnchor: "start",
  },
  {
    id: "carolinas",
    territory: "Carolinas",
    rep: "Mid South Marketing",
    stateCodes: ["NC", "SC"],
    stateNames: ["North Carolina", "South Carolina"],
    mapPoint: { x: 754, y: 346 },
    labelPoint: { x: 1145, y: 550 },
    labelAnchor: "start",
  },
  {
    id: "southeast",
    territory: "Southeast",
    rep: "Phil Thomas",
    stateCodes: ["GA", "AL", "TN", "MS"],
    stateNames: [
      "Georgia",
      "Alabama",
      "Tennessee",
      "Mississippi",
      "Western Florida panhandle",
    ],
    mapPoint: { x: 692, y: 398 },
    labelPoint: { x: 1145, y: 670 },
    labelAnchor: "start",
  },
  {
    id: "florida",
    territory: "Florida",
    rep: "AHR Sales",
    stateCodes: ["FL"],
    stateNames: ["Florida (except panhandle west of GA/AL border)"],
    mapPoint: { x: 802, y: 500 },
    labelPoint: { x: 1145, y: 790 },
    labelAnchor: "start",
  },
];

const MAP_REGIONS: MapRegion[] = [...CANADA_REGIONS, ...US_REGIONS];

const CONNECTOR_HIDDEN_REGIONS: RegionId[] = ["mountainWest"];

const STATE_TRANSFORMS: Partial<Record<StateCode, string>> = {
  AK: "translate(-180 -390)",
  HI: "translate(-145 -165)",
};

type SplitOverlay = {
  id: string;
  code: StateCode;
  regionId: RegionId;
  clip: { x: number; y: number; width: number; height: number };
};

const SPLIT_STATE_OVERLAYS: SplitOverlay[] = [
  {
    id: "split-nv-west",
    code: "NV",
    regionId: "westHawaii",
    clip: { x: 77, y: 166, width: 56, height: 174 },
  },
  {
    id: "split-fl-panhandle-west",
    code: "FL",
    regionId: "southeast",
    clip: { x: 635, y: 442, width: 66, height: 36 },
  },
  {
    id: "split-ny-downstate-li",
    code: "NY",
    regionId: "midAtlantic",
    clip: { x: 818, y: 152, width: 92, height: 60 },
  },
];

const SPLIT_OVERLAYS_BY_CODE = SPLIT_STATE_OVERLAYS.reduce((acc, overlay) => {
  if (!acc[overlay.code]) acc[overlay.code] = [];
  acc[overlay.code].push(overlay);
  return acc;
}, {} as Record<StateCode, SplitOverlay[]>);

const REGION_FILL: Record<RegionId, string> = {
  westernCanada: "#d8ecff",
  easternCanada: "#c7e3ff",
  pacificNorthwest: "#e3f4ff",
  westHawaii: "#d5f2e7",
  mountainWest: "#e9f6ff",
  southCentral: "#d9f6ec",
  midwest: "#deefff",
  newEnglandUpstate: "#e5f3ff",
  midAtlantic: "#d4e9ff",
  carolinas: "#dcf5ea",
  southeast: "#cdeedc",
  florida: "#d8eefb",
};

const REGION_FILL_ACTIVE: Record<RegionId, string> = {
  westernCanada: "#9fcbf7",
  easternCanada: "#7fb7ef",
  pacificNorthwest: "#abd7fb",
  westHawaii: "#95d8bc",
  mountainWest: "#9ecdf7",
  southCentral: "#87d1ac",
  midwest: "#9fc7ee",
  newEnglandUpstate: "#a7d4fb",
  midAtlantic: "#88bef2",
  carolinas: "#94dabc",
  southeast: "#7fcaac",
  florida: "#9dc8e6",
};

const STATE_TO_REGION = US_REGIONS.reduce((acc, region) => {
  region.stateCodes.forEach((code) => {
    acc[code] = region.id;
  });
  return acc;
}, {} as Record<string, RegionId>);

function wrapStates(states: string[], maxLineLength = 40) {
  const lines: string[] = [];
  let currentLine = "";

  states.forEach((state) => {
    if (!currentLine) {
      currentLine = state;
      return;
    }

    const withComma = `${currentLine}, ${state}`;
    if (withComma.length <= maxLineLength) {
      currentLine = withComma;
      return;
    }

    lines.push(currentLine);
    currentLine = state;
  });

  if (currentLine) lines.push(currentLine);

  return lines;
}

export default function GeographicalVariations() {
  const [hoveredRegion, setHoveredRegion] = useState<RegionId | null>(null);
  const activeRegionId = hoveredRegion;
  const connectorRegions = MAP_REGIONS.filter(
    (region) => !CONNECTOR_HIDDEN_REGIONS.includes(region.id)
  );

  const activate = (id: RegionId) => setHoveredRegion(id);

  return (
    <section id="reps" className="site-section section-alt section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-6 animate-rise">
          <p className="eyebrow mb-3">Manufacturer Reps</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-main)] mb-4">
            Find Your Representative
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl leading-relaxed mb-2">
            Hover any mapped territory or partner label to reveal the covered states
            and provinces.
          </p>
          <p className="text-sm font-semibold text-[var(--color-primary-2)]">
            FOR SHIPMENTS TO CANADA, PLEASE CALL (732) 985-8226 to place your credit
            card order.
          </p>
        </div>

        <div className="glass-card-strong rounded-2xl p-3 md:p-4" onMouseLeave={() => setHoveredRegion(null)}>
          <svg
            viewBox="0 0 1500 940"
            className="w-full h-auto"
            role="img"
            aria-label="United States and Canada manufacturer representative territory map"
          >
            <g transform={`translate(${MAP_OFFSET_X} ${MAP_OFFSET_Y}) scale(${MAP_SCALE})`}>
              <defs>
                {/* Morphology filter: outlines the merged territory shape, hiding internal state borders */}
                <filter id="territory-border" x="-5%" y="-5%" width="110%" height="110%" colorInterpolationFilters="sRGB">
                  <feMorphology in="SourceAlpha" operator="dilate" radius="3" result="dilated"/>
                  <feComposite in="dilated" in2="SourceAlpha" operator="out" result="ring"/>
                  <feFlood floodColor="#111111" result="black"/>
                  <feComposite in="black" in2="ring" operator="in"/>
                </filter>
                <clipPath id="canada-west-half" clipPathUnits="objectBoundingBox">
                  <rect x="0" y="0" width="0.5" height="1" />
                </clipPath>
                <clipPath id="canada-east-half" clipPathUnits="objectBoundingBox">
                  <rect x="0.5" y="0" width="0.5" height="1" />
                </clipPath>
                {SPLIT_STATE_OVERLAYS.map((overlay) => (
                  <clipPath
                    key={overlay.id}
                    id={overlay.id}
                    clipPathUnits="userSpaceOnUse"
                  >
                    <rect
                      x={overlay.clip.x}
                      y={overlay.clip.y}
                      width={overlay.clip.width}
                      height={overlay.clip.height}
                    />
                  </clipPath>
                ))}
              </defs>

              <path
                d={CANADA_OUTLINE_PATH}
                fill={
                  activeRegionId === "westernCanada"
                    ? REGION_FILL_ACTIVE.westernCanada
                    : REGION_FILL.westernCanada
                }
                clipPath="url(#canada-west-half)"
                className="cursor-pointer transition-colors duration-150"
                onMouseEnter={() => activate("westernCanada")}
              />
              <path
                d={CANADA_OUTLINE_PATH}
                fill={
                  activeRegionId === "easternCanada"
                    ? REGION_FILL_ACTIVE.easternCanada
                    : REGION_FILL.easternCanada
                }
                clipPath="url(#canada-east-half)"
                className="cursor-pointer transition-colors duration-150"
                onMouseEnter={() => activate("easternCanada")}
              />
              <line
                x1={CANADA_SPLIT_X}
                y1={-170}
                x2={CANADA_SPLIT_X}
                y2={70}
                stroke="#111111"
                strokeWidth={3}
              />
              <path
                d={CANADA_OUTLINE_PATH}
                fill="none"
                stroke="#111111"
                strokeWidth={3}
                pointerEvents="none"
              />

              {Object.entries(US_STATE_PATHS).map(([code, state]) => {
                const regionId = STATE_TO_REGION[code];
                const isActive = regionId ? regionId === activeRegionId : false;
                const fillColor = regionId
                  ? isActive
                    ? REGION_FILL_ACTIVE[regionId]
                    : REGION_FILL[regionId]
                  : "#e8f1fb";
                const splitOverlays = SPLIT_OVERLAYS_BY_CODE[code as StateCode] ?? [];
                const stateTransform = STATE_TRANSFORMS[code as StateCode];

                return (
                  <g key={code}>
                    <path
                      d={state.d}
                      fill={fillColor}
                      stroke="none"
                      transform={stateTransform}
                      className={
                        regionId
                          ? "cursor-pointer transition-colors duration-150"
                          : "transition-colors duration-150"
                      }
                      onMouseEnter={() => regionId && activate(regionId)}
                    />
                    {splitOverlays.map((overlay) => {
                      const isSplitActive = overlay.regionId === activeRegionId;
                      const splitFill = isSplitActive
                        ? REGION_FILL_ACTIVE[overlay.regionId]
                        : REGION_FILL[overlay.regionId];

                      return (
                        <path
                          key={overlay.id}
                          d={state.d}
                          fill={splitFill}
                          stroke="none"
                          clipPath={`url(#${overlay.id})`}
                          transform={stateTransform}
                          className="cursor-pointer transition-colors duration-150"
                          onMouseEnter={() => activate(overlay.regionId)}
                        />
                      );
                    })}
                  </g>
                );
              })}

              {/* Territory boundary overlays — always-on black outlines using morphology filter */}
              {US_REGIONS.map((region) => {
                const splitOverlaysForRegion = SPLIT_STATE_OVERLAYS.filter(
                  (o) => o.regionId === region.id
                );
                return (
                  <g
                    key={`tborder-${region.id}`}
                    filter="url(#territory-border)"
                    pointerEvents="none"
                  >
                    {region.stateCodes.map((code) => {
                      const state = US_STATE_PATHS[code as StateCode];
                      if (!state) return null;
                      const stateTransform = STATE_TRANSFORMS[code as StateCode];
                      return (
                        <path
                          key={code}
                          d={state.d}
                          fill="black"
                          transform={stateTransform}
                        />
                      );
                    })}
                    {splitOverlaysForRegion.map((overlay) => {
                      const state = US_STATE_PATHS[overlay.code];
                      if (!state) return null;
                      const stateTransform = STATE_TRANSFORMS[overlay.code];
                      return (
                        <path
                          key={overlay.id}
                          d={state.d}
                          fill="black"
                          clipPath={`url(#${overlay.id})`}
                          transform={stateTransform}
                        />
                      );
                    })}
                  </g>
                );
              })}
            </g>

            {connectorRegions.map((region, index) => {
              const isActive = region.id === activeRegionId;
              const mapX = toCanvasX(region.mapPoint.x);
              const mapY = toCanvasY(region.mapPoint.y);
              const longLength = 20;
              const shortLength = 10;
              const alternatingLength = index % 2 === 0 ? longLength : shortLength;
              const lineEndX =
                region.id === "easternCanada"
                  ? region.labelPoint.x
                  : region.labelAnchor === "start"
                  ? region.labelPoint.x - alternatingLength
                  : region.labelAnchor === "end"
                  ? region.labelPoint.x + alternatingLength
                  : region.labelPoint.x + (index % 2 === 0 ? 14 : -14);
              const lineLimit =
                region.id === "midwest"
                  ? 32
                  : region.labelAnchor === "middle"
                  ? 44
                  : 36;
              const stateLines = wrapStates(
                region.stateNames,
                lineLimit
              );

              return (
                <g
                  key={region.id}
                  className="cursor-pointer"
                  onMouseEnter={() => activate(region.id)}
                >
                  <line
                    x1={mapX}
                    y1={mapY}
                    x2={lineEndX}
                    y2={region.labelPoint.y}
                    stroke="#111111"
                    strokeWidth={isActive ? 2.4 : 1.8}
                  />
                  <circle
                    cx={mapX}
                    cy={mapY}
                    r={isActive ? 5.6 : 4.6}
                    fill="rgba(0, 0, 0, 0.9)"
                  />
                  <circle
                    cx={lineEndX}
                    cy={region.labelPoint.y}
                    r={isActive ? 4.8 : 3.8}
                    fill="rgba(0, 0, 0, 0.88)"
                  />
                  <text
                    x={region.labelPoint.x}
                    y={region.labelPoint.y - 16}
                    textAnchor={region.labelAnchor}
                    fill={isActive ? "var(--color-primary-3)" : "var(--color-text-dim)"}
                    fontSize="12"
                    fontWeight="700"
                    style={{ letterSpacing: "0.08em" }}
                  >
                    {region.territory}
                  </text>
                  <text
                    x={region.labelPoint.x}
                    y={region.labelPoint.y}
                    textAnchor={region.labelAnchor}
                    fill="var(--color-text-main)"
                    fontSize="16"
                    fontWeight="800"
                  >
                    {region.rep}
                  </text>
                  {isActive &&
                    stateLines.map((line, index) => (
                      <text
                        key={`${region.id}-states-${index}`}
                        x={region.labelPoint.x}
                        y={region.labelPoint.y + 24 + index * 17}
                        textAnchor={region.labelAnchor}
                        fill="var(--color-text-muted)"
                        fontSize="12.5"
                        fontWeight="500"
                      >
                        {line}
                      </text>
                    ))}
                </g>
              );
            })}
          </svg>
          <p className="mt-4 text-xs text-[var(--color-text-muted)]">
            Sub-state split handling is applied for Western Nevada (Denco),
            Western Florida panhandle (Phil Thomas), and Long Island / NYC Metro
            (Kehoe).
          </p>
          <p
            className={`mt-1 text-xs transition-colors ${
              activeRegionId === "mountainWest"
                ? "text-[var(--color-primary-3)] font-semibold"
                : "text-[var(--color-text-muted)]"
            }`}
          >
            Mountain / Interior West is currently open. Hover that region on the
            map to highlight it.
          </p>
        </div>
      </div>
    </section>
  );
}
