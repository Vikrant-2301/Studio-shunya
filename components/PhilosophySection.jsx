"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { PHILOSOPHY_PILLARS } from "@/data/studioData";

export default function PhilosophySection() {
  const [viewMode, setViewMode] = useState("pillars");

  return (
    <section
      id="philosophy"
      className="min-h-[100dvh] py-16 sm:py-20 flex flex-col justify-center relative bg-[#FAF7F2] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none plaster-texture opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Section Header with Mode Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-terracotta/20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1.5px] bg-rust" />
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-rust font-semibold">
                Philosophy of Shunya
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-fern-950 font-normal leading-tight">
              To give you <span className="font-serif italic text-terracotta">everything</span>, without affecting{" "}
              <span className="font-serif italic text-fern-700">anything</span>.
            </h2>
          </div>

          {/* Toggle Button Group */}
          <div className="inline-flex p-1 rounded-full bg-creme-200/80 border border-terracotta/20 shrink-0">
            <button
              onClick={() => setViewMode("pillars")}
              className={`px-5 py-1.5 rounded-full text-xs font-sans uppercase tracking-widest font-medium transition-all ${
                viewMode === "pillars"
                  ? "bg-rust text-creme-50 shadow-sm"
                  : "text-fern-800 hover:text-rust"
              }`}
            >
              The 4 Pillars
            </button>
            <button
              onClick={() => setViewMode("earth-vs-concrete")}
              className={`px-5 py-1.5 rounded-full text-xs font-sans uppercase tracking-widest font-medium transition-all ${
                viewMode === "earth-vs-concrete"
                  ? "bg-fern-800 text-creme-50 shadow-sm"
                  : "text-fern-800 hover:text-fern-950"
              }`}
            >
              Earth vs Concrete
            </button>
          </div>
        </div>

        {/* View 1: 4 Pillars of Shunya */}
        {viewMode === "pillars" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHILOSOPHY_PILLARS.map((pillar, idx) => {
              const borderStyles = [
                "border-rust/30 hover:border-rust",
                "border-fern/30 hover:border-fern",
                "border-terracotta/30 hover:border-terracotta",
                "border-sage-500/30 hover:border-sage-600",
              ][idx % 4];

              const numColors = ["text-rust", "text-fern-700", "text-terracotta", "text-sage-700"][idx % 4];

              return (
                <motion.div
                  key={pillar.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`p-6 sm:p-7 rounded-2xl bg-creme-100/80 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg ${borderStyles}`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`font-serif text-3xl font-light ${numColors}`}>
                        {pillar.num}
                      </span>
                      <span className="text-[10px] font-sans uppercase tracking-widest text-fern-500 font-semibold">
                        Pillar
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-fern-950 font-normal leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-fern-700 text-xs sm:text-sm leading-relaxed font-sans">
                      {pillar.text}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-terracotta/10 flex items-center justify-between text-[11px] text-fern-600 font-sans">
                    <span className="uppercase tracking-widest text-[9px] text-rust font-semibold">
                      Zero Ecological Debt
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-rust" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* View 2: Earth vs Concrete Matrix */}
        {viewMode === "earth-vs-concrete" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Conventional Concrete Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-grey-200/60 border border-grey-400/40 text-fern-900 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-grey-400/30">
                <span className="text-xs font-sans uppercase tracking-widest text-grey-800 font-bold">
                  Conventional Concrete &amp; RCC
                </span>
                <span className="px-2.5 py-0.5 rounded bg-grey-300 text-grey-900 text-[10px] uppercase font-mono">
                  High Carbon
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <strong className="block text-grey-900 uppercase text-[10px] tracking-wider mb-0.5">Embodied Carbon</strong>
                  <p className="text-grey-700">Cement kilns fire at 1,450°C, generating ~1.2 tonnes of CO2 per ton produced.</p>
                </div>
                <div>
                  <strong className="block text-grey-900 uppercase text-[10px] tracking-wider mb-0.5">Heat Retention</strong>
                  <p className="text-grey-700">RCC traps solar heat like an oven, requiring constant mechanical AC electricity.</p>
                </div>
                <div>
                  <strong className="block text-grey-900 uppercase text-[10px] tracking-wider mb-0.5">End of Life</strong>
                  <p className="text-grey-700">Generates non-biodegradable debris that pollutes landfills for centuries.</p>
                </div>
              </div>
            </div>

            {/* Studio Shunya Earth Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-fern-950 text-creme-100 shadow-xl space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-creme/15">
                <span className="text-xs font-sans uppercase tracking-widest text-terracotta-300 font-bold">
                  Studio Shunya Earth Architecture
                </span>
                <span className="px-2.5 py-0.5 rounded bg-rust text-creme-50 text-[10px] uppercase font-mono font-semibold">
                  Net Zero Living
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <strong className="block text-sage-300 uppercase text-[10px] tracking-wider mb-0.5">Embodied Carbon</strong>
                  <p className="text-creme-200">Sun-dried earth blocks and slaked lime absorb CO2 from the air as they cure into limestone.</p>
                </div>
                <div>
                  <strong className="block text-sage-300 uppercase text-[10px] tracking-wider mb-0.5">Natural Cooling</strong>
                  <p className="text-creme-200">450mm mud walls delay heat penetration by 8–10 hours, naturally cooling rooms by 6–8°C.</p>
                </div>
                <div>
                  <strong className="block text-sage-300 uppercase text-[10px] tracking-wider mb-0.5">End of Life</strong>
                  <p className="text-creme-200">100% biodegradable: if dismantled, every gram dissolves back into fertile soil.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
