"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function CarbonCalculator() {
  const [area, setArea] = useState(3500);
  const [typology, setTypology] = useState("Farmhouse");

  const carbonSavedTonnes = Math.round((area * 28.5) / 1000);
  const treesEquivalent = Math.round(carbonSavedTonnes * 45);
  const artisanHours = Math.round(area * 1.8);

  return (
    <section
      id="calculator"
      className="min-h-[100dvh] py-16 sm:py-20 flex flex-col justify-center relative bg-[#FAF7F2] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none plaster-texture opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10 pb-5 border-b border-terracotta/20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1.5px] bg-rust" />
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-rust font-semibold">
                Environmental Metrics
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-fern-950 font-normal leading-tight">
              Calculate Your <span className="font-serif italic text-fern-700">Ecological</span> Impact
            </h2>
          </div>

          <p className="text-fern-700 text-xs sm:text-sm max-w-md font-sans">
            Estimate embodied CO2 eliminated and rural artisan hours created by choosing earth over concrete.
          </p>
        </div>

        {/* 1-Page Calculator Box */}
        <div className="rounded-3xl bg-creme-100/90 border border-terracotta/30 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-fern-800 font-bold mb-2">
                  1. Typology
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {["Farmhouse", "Urban Home", "Retreat"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setTypology(type)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-sans uppercase tracking-wider font-semibold transition-all border ${
                        typology === type
                          ? "bg-rust text-creme-50 border-rust shadow-sm"
                          : "bg-creme-200/70 border-terracotta/20 text-fern-800 hover:bg-creme-300"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Slider */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <label className="text-[11px] uppercase tracking-widest text-fern-800 font-bold">
                    2. Planned Built Footprint
                  </label>
                  <span className="font-serif text-2xl font-bold text-rust">
                    {area.toLocaleString()} <span className="text-xs font-sans font-normal text-fern-700">sq.ft</span>
                  </span>
                </div>

                <input
                  type="range"
                  min="600"
                  max="15000"
                  step="100"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-creme-300 rounded-lg appearance-none cursor-pointer accent-rust"
                />

                <div className="flex justify-between text-[10px] font-sans text-fern-600">
                  <span>600 sq.ft</span>
                  <span>15,000 sq.ft</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-creme-200/70 border border-terracotta/15 text-xs text-fern-800 font-sans">
                <span className="font-semibold text-rust block uppercase tracking-wider text-[10px] mb-0.5">
                  Natural Formula:
                </span>
                <p className="text-[11px] leading-relaxed">
                  Sun-dried mud walls, Araish slaked lime plaster, and inverted earthen pot filler slabs.
                </p>
              </div>
            </div>

            {/* Right: Calculated Metrics Box */}
            <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-fern-900 to-fern-950 text-creme-100 p-6 sm:p-7 space-y-5 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-creme/15">
                <span className="text-xs uppercase tracking-widest text-terracotta-300 font-bold">
                  Projected Environmental Dividend
                </span>
                <span className="px-2.5 py-0.5 rounded bg-rust text-creme-50 text-[10px] uppercase font-mono">
                  {typology}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-xl bg-fern-950/60 border border-creme/10">
                  <span className="text-[10px] uppercase tracking-wider text-sage-400 block mb-0.5">
                    CO2 Cut vs Concrete
                  </span>
                  <p className="font-serif text-2xl font-bold text-creme-50">
                    {carbonSavedTonnes} <span className="text-xs font-sans font-normal text-creme-300">tonnes</span>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-fern-950/60 border border-creme/10">
                  <span className="text-[10px] uppercase tracking-wider text-sage-400 block mb-0.5">
                    Trees Equivalent
                  </span>
                  <p className="font-serif text-2xl font-bold text-creme-50">
                    {treesEquivalent.toLocaleString()} <span className="text-xs font-sans font-normal text-creme-300">trees</span>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-fern-950/60 border border-creme/10">
                  <span className="text-[10px] uppercase tracking-wider text-terracotta-300 block mb-0.5">
                    AC Load Cut
                  </span>
                  <p className="font-serif text-2xl font-bold text-creme-50">
                    65%
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-fern-950/60 border border-creme/10">
                  <span className="text-[10px] uppercase tracking-wider text-terracotta-300 block mb-0.5">
                    Artisan Hours
                  </span>
                  <p className="font-serif text-2xl font-bold text-creme-50">
                    {artisanHours.toLocaleString()} <span className="text-xs font-sans font-normal text-creme-300">hrs</span>
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full py-3 px-5 rounded-full bg-rust hover:bg-rust-600 text-creme-50 text-xs font-sans uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2 shadow"
              >
                <span>Commission This Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
