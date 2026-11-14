"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, ThermometerSnowflake, Wind, Waves, Sun } from "lucide-react";

export default function PassiveDesignExplainer() {
  const [activeIdx, setActiveIdx] = useState(0);

  const mechanisms = [
    {
      title: "450mm Mud Wall Thermal Mass",
      tagline: "8 to 10 Hour Heat Lag",
      icon: Flame,
      summary: "Massive earth walls absorb scorching daytime heat, delaying indoor transmission until late evening when windows open to the cool night breeze.",
      metric: "6–8°C Naturally Cooler",
      badge: "Thermal Sponge"
    },
    {
      title: "Inverted Clay Pot Filler Slabs",
      tagline: "Air Cavity Roof Insulation",
      icon: ThermometerSnowflake,
      summary: "Inverted terracotta pots cast into ceilings replace 40% of concrete volume, trapping insulating air pockets that block solar roof radiation.",
      metric: "-40% Concrete Cut",
      badge: "Matka Ceiling"
    },
    {
      title: "Courtyard Stack Effect",
      tagline: "Convective Natural AC",
      icon: Wind,
      summary: "Rising warm air vents out of upper clerestories, creating a suction draft that pulls cool, oxygen-rich garden air across shaded verandas.",
      metric: "Zero Electricity Draft",
      badge: "Microclimate Flow"
    },
    {
      title: "Kota Stone Louvered Vents",
      tagline: "Upcycled Quarry Waste",
      icon: Waves,
      summary: "Discarded stone scraps are hand-cut and stacked into aerodynamic louvers for continuous cross-ventilation without direct solar glare.",
      metric: "100% Upcycled Scrap",
      badge: "Zero-Waste Vents"
    },
    {
      title: "China Mosaic Reflective Roof",
      tagline: "High Albedo Heat Rejection",
      icon: Sun,
      summary: "Recycled white ceramic broken tiles reflect over 80% of incoming solar infrared heat rays away from the structure.",
      metric: "80% Heat Deflected",
      badge: "Solar Shield"
    }
  ];

  return (
    <section
      id="science"
      className="min-h-[100dvh] py-16 sm:py-20 flex flex-col justify-center relative bg-[#F4EFE6] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none plaster-texture opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10 pb-5 border-b border-terracotta/20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1.5px] bg-fern-700" />
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-fern-800 font-semibold">
                Bioclimatic Engineering
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-fern-950 font-normal leading-tight">
              Passive <span className="font-serif italic text-fern-700">Cooling</span> Science
            </h2>
          </div>

          <p className="text-fern-700 text-xs sm:text-sm max-w-md font-sans">
            How our structures remain 6–8°C cooler in 45°C Indian summers without running air conditioning.
          </p>
        </div>

        {/* 1-Page Layout: Mechanism Pills + Interactive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Mechanism Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            {mechanisms.map((m, idx) => {
              const isSelected = activeIdx === idx;
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center justify-between ${
                    isSelected
                      ? "bg-creme-50 border-fern shadow-md translate-x-2"
                      : "bg-creme-100/70 border-terracotta/15 hover:border-fern/40 hover:bg-creme-100"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center border ${
                        isSelected ? "bg-fern-800 text-creme-50" : "bg-creme-200 text-fern-700"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <span className="text-[9px] font-sans uppercase tracking-widest text-rust font-semibold block">
                        Move 0{idx + 1}
                      </span>
                      <h4 className="font-serif text-base text-fern-950 leading-snug">
                        {m.title}
                      </h4>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-fern-800">
                    {m.metric}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Detail Display */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl bg-gradient-to-br from-fern-900 to-fern-950 text-creme-100 p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-6"
            >
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-creme/15">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-terracotta-300 font-sans font-semibold">
                    Passive Strategy 0{activeIdx + 1}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-creme-50 mt-0.5">
                    {mechanisms[activeIdx].title}
                  </h3>
                </div>

                <div className="px-3.5 py-1 rounded-full bg-rust text-creme-50 text-xs font-mono font-bold">
                  {mechanisms[activeIdx].metric}
                </div>
              </div>

              <span className="inline-block px-3 py-1 rounded-full bg-creme-100/10 text-terracotta-200 text-xs font-sans uppercase tracking-wider border border-creme/20">
                {mechanisms[activeIdx].tagline}
              </span>

              <p className="text-creme-200 text-xs sm:text-sm leading-relaxed font-sans">
                {mechanisms[activeIdx].summary}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-fern-950/70 border border-creme/10">
                  <span className="text-[10px] uppercase tracking-widest text-sage-400 block mb-0.5">
                    Operational Energy
                  </span>
                  <p className="font-serif text-lg font-bold text-creme-100">Zero Mechanical AC</p>
                  <p className="text-[11px] text-creme/60">Passive convective ventilation</p>
                </div>

                <div className="p-4 rounded-xl bg-fern-950/70 border border-creme/10">
                  <span className="text-[10px] uppercase tracking-widest text-terracotta-300 block mb-0.5">
                    Indoor Air Purity
                  </span>
                  <p className="font-serif text-lg font-bold text-creme-100">100% Breathable</p>
                  <p className="text-[11px] text-creme/60">Natural humidity regulation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
