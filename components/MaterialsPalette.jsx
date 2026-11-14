"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Thermometer, Atom } from "lucide-react";
import { NATURAL_MATERIALS } from "@/data/studioData";

export default function MaterialsPalette() {
  const [selected, setSelected] = useState(NATURAL_MATERIALS[0]);

  return (
    <section
      id="materials"
      className="min-h-[100dvh] py-16 sm:py-20 flex flex-col justify-center relative bg-[#FAF7F2] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none plaster-texture opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10 pb-5 border-b border-terracotta/20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1.5px] bg-terracotta" />
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-terracotta font-semibold">
                Vernacular Materiality
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-fern-950 font-normal leading-tight">
              The Living <span className="font-serif italic text-terracotta">Palette</span> of the Earth
            </h2>
          </div>

          <p className="text-fern-700 text-xs sm:text-sm max-w-md font-sans">
            Every material is non-toxic, carbon-negative or neutral, and sourced within 30–50km.
          </p>
        </div>

        {/* 1-Page Interactive Material Atelier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Material Selectors (Horizontal or Compact Stack) */}
          <div className="lg:col-span-5 space-y-2.5">
            {NATURAL_MATERIALS.map((mat) => {
              const isSelected = selected.name === mat.name;
              return (
                <div
                  key={mat.name}
                  onClick={() => setSelected(mat)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center justify-between ${
                    isSelected
                      ? "bg-creme-200/90 border-terracotta shadow-md translate-x-2"
                      : "bg-creme-100/60 border-terracotta/15 hover:border-terracotta/40 hover:bg-creme-100"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-terracotta/30">
                      <Image src={mat.image} alt={mat.name} fill className="object-cover" />
                    </div>

                    <div>
                      <span className="text-[9px] font-sans uppercase tracking-widest text-rust font-semibold block">
                        {mat.hindiName}
                      </span>
                      <h4 className="font-serif text-base text-fern-950 leading-snug">
                        {mat.name}
                      </h4>
                    </div>
                  </div>

                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors ${
                      isSelected ? "bg-rust text-creme-50" : "bg-creme-300 text-fern-700"
                    }`}
                  >
                    {isSelected ? <Check className="w-3.5 h-3.5" /> : "→"}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Material Detailed Viewport */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl bg-creme-100/90 border border-terracotta/30 p-6 sm:p-8 shadow-xl space-y-5"
              >
                {/* Photo Header */}
                <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden border border-terracotta/20 shadow-inner">
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fern-950/80 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full dark-earth-glass text-creme text-[10px] font-sans tracking-widest uppercase">
                    {selected.hindiName}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-creme">
                    <span className="text-[10px] uppercase tracking-widest text-terracotta-300 font-sans block">
                      {selected.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-creme-50">
                      {selected.name}
                    </h3>
                  </div>
                </div>

                {/* Tactile Sensor Quote */}
                <p className="text-xs sm:text-sm text-fern-800 italic font-serif leading-relaxed">
                  "{selected.texture}"
                </p>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-sage-50/80 border border-sage-300">
                    <div className="flex items-center gap-1.5 text-fern-800 text-[11px] font-bold uppercase tracking-wider">
                      <Atom className="w-3.5 h-3.5 text-fern-700" />
                      <span>Carbon Metric</span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-fern-950 mt-0.5">
                      {selected.carbonScore}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-terracotta-50/80 border border-terracotta-300">
                    <div className="flex items-center gap-1.5 text-terracotta-800 text-[11px] font-bold uppercase tracking-wider">
                      <Thermometer className="w-3.5 h-3.5 text-terracotta" />
                      <span>Thermal Lag</span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-terracotta-950 mt-0.5">
                      {selected.thermalBenefit}
                    </p>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="pt-3 border-t border-terracotta/15 flex flex-wrap gap-2">
                  {selected.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-3 py-1 rounded-full bg-creme-200 text-fern-900 text-xs font-sans border border-terracotta/15 flex items-center gap-1.5"
                    >
                      <Check className="w-3 h-3 text-rust" />
                      {feat}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
