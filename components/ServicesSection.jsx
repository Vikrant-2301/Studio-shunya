"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/studioData";

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeId) || SERVICES[0];

  return (
    <section
      id="services"
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
                Practices &amp; Engagements
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-fern-950 font-normal leading-tight">
              Services of the <span className="font-serif italic text-rust">Studio</span>
            </h2>
          </div>

          <p className="text-fern-700 text-xs sm:text-sm max-w-md font-sans">
            End-to-end design, soil lab testing, site supervisor training, and artisanal lime execution.
          </p>
        </div>

        {/* 4 Clean Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {SERVICES.map((srv) => {
            const isSelected = srv.id === activeId;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveId(srv.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? "bg-rust text-creme-50 border-rust shadow-lg -translate-y-1"
                    : "bg-creme-100/70 border-terracotta/20 text-fern-900 hover:bg-creme-200"
                }`}
              >
                <div>
                  <span
                    className={`font-serif text-2xl font-light block mb-1 ${
                      isSelected ? "text-creme-200" : "text-rust"
                    }`}
                  >
                    {srv.number}
                  </span>
                  <h3 className="font-serif text-lg leading-snug font-normal">
                    {srv.title}
                  </h3>
                </div>

                <span
                  className={`text-[9px] font-sans uppercase tracking-widest mt-4 block font-semibold ${
                    isSelected ? "text-creme-200" : "text-fern-600"
                  }`}
                >
                  {srv.tagline}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed Viewport */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-creme-100/90 border border-terracotta/30 p-6 sm:p-8 shadow-xl space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-rust font-semibold">
                  Service 0{activeService.number} Details
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-fern-950">
                  {activeService.title}
                </h3>
                <p className="text-fern-800 text-xs sm:text-sm leading-relaxed font-sans">
                  {activeService.description}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-2">
                {activeService.features.slice(0, 3).map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-fern-900 font-sans">
                    <Check className="w-3.5 h-3.5 text-rust shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestones Strip */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4 border-t border-terracotta/15">
              {activeService.steps.slice(0, 3).map((step, idx) => (
                <div key={step.title} className="p-3.5 rounded-xl bg-creme-50 border border-terracotta/15">
                  <span className="text-[9px] uppercase tracking-wider text-rust font-semibold block">
                    Milestone 0{idx + 1}
                  </span>
                  <h4 className="font-serif text-sm text-fern-950 font-medium mt-0.5">{step.title}</h4>
                  <p className="text-[11px] text-fern-700 mt-1 line-clamp-2">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-fern-700">
                Commission Studio Shunya for <strong>{activeService.title}</strong>
              </span>
              <a
                href="#contact"
                className="px-5 py-2 rounded-full bg-rust hover:bg-rust-600 text-creme-50 text-xs font-sans uppercase tracking-widest font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>Inquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
