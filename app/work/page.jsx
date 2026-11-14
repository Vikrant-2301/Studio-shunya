"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Layers, Wind, ShieldCheck, Sparkles } from "lucide-react";
import { PROJECTS, STUDIO_INFO } from "@/data/studioData";
import BrushAccent from "@/components/BrushAccent";

export default function WorkPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Experience Center", "Farmhouse", "Residential"];

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="pt-28 sm:pt-36 pb-24 relative min-h-screen text-fern-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Back */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-fern-800 hover:text-rust transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-rust" />
            <span>Return to Homepage</span>
          </Link>
        </div>

        {/* Title Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 pb-8 border-b border-terracotta/20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1.5px] bg-rust" />
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-rust font-semibold">
                Built Monograph Portfolio
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-fern-950 font-normal leading-[1.1] tracking-tight">
              Living <span className="font-serif italic text-rust">Architecture</span> Works
            </h1>

            <div className="mt-3 max-w-xs">
              <BrushAccent className="text-rust/70" height="12" width="260px" />
            </div>

            <p className="mt-4 text-fern-800 text-base sm:text-lg font-sans font-light leading-relaxed">
              Explore our zero-energy mud and lime buildings across Delhi NCR, Rajasthan, and Jharkhand. 
              Click any project to view its full monograph, architectural story, specifications, and photography.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const count = c === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length;
              const isActive = filter === c;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-5 py-2.5 rounded-full text-xs font-sans uppercase tracking-widest font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-rust text-creme-50 shadow-md scale-105"
                      : "bg-creme-100/90 text-fern-800 hover:bg-creme-200 border border-terracotta/25 hover:border-rust"
                  }`}
                >
                  <span>{c}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-terracotta/15 text-rust"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Architectural Impact Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-creme-100/80 border border-terracotta/20 mb-14 shadow-sm text-xs font-sans">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rust/10 text-rust flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="font-serif text-lg text-fern-950 font-bold">5 Built Sanctuaries</p>
              <span className="text-fern-600 text-[11px]">Delhi NCR • RJ • JH</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-fern-100 text-fern-900 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-serif text-lg text-fern-950 font-bold">0 kg/yr Carbon</p>
              <span className="text-fern-600 text-[11px]">100% Passive Cooling</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sage-100 text-fern-800 flex items-center justify-center shrink-0">
              <Wind className="w-4 h-4" />
            </div>
            <div>
              <p className="font-serif text-lg text-fern-950 font-bold">6-8°C Cooler</p>
              <span className="text-fern-600 text-[11px]">Natural Thermal Drop</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-terracotta/15 text-terracotta flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <p className="font-serif text-lg text-fern-950 font-bold">90% Hyper-Local</p>
              <span className="text-fern-600 text-[11px]">Within 30km radius</span>
            </div>
          </div>
        </div>

        {/* Projects Cards Grid — Clicking opens FULL PROJECT PAGE directly */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {filtered.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group block rounded-3xl overflow-hidden bg-creme-100/90 border border-terracotta/25 hover:border-rust shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-fern-950/20">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fern-950/85 via-transparent to-black/20" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-creme-50 z-10">
                  <span className="px-3.5 py-1 rounded-full dark-earth-glass text-[11px] font-sans tracking-widest uppercase font-semibold">
                    {project.category}
                  </span>
                  <span className="px-3.5 py-1 rounded-full dark-earth-glass text-[11px] font-sans flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-rust" />
                    <span>{project.location}</span>
                  </span>
                </div>

                {/* Bottom Trigger Bar */}
                <div className="absolute bottom-4 left-4 right-4 text-creme-100 flex items-center justify-between text-xs z-10">
                  <div className="flex items-center gap-2 font-sans">
                    <Layers className="w-3.5 h-3.5 text-terracotta-300" />
                    <span>{project.images.length} Archival Photos</span>
                  </div>

                  <span className="px-4 py-2 rounded-full bg-creme-100 text-fern-950 text-xs font-sans uppercase tracking-widest font-semibold group-hover:bg-rust group-hover:text-creme-50 transition-colors flex items-center gap-1.5 shadow-lg">
                    <span>Open Full Monograph</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Information Content */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between text-xs text-rust font-semibold uppercase tracking-wider mb-1">
                    <span>Completed {project.year}</span>
                    <span>{project.builtUpArea}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-fern-950 group-hover:text-rust transition-colors font-medium leading-tight">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs font-sans uppercase tracking-wider text-terracotta-700 italic font-medium">
                    "{project.tagline}"
                  </p>

                  <p className="mt-3 text-fern-800 text-sm leading-relaxed font-sans line-clamp-3 font-light">
                    {project.description[0]}
                  </p>
                </div>

                {/* Material Badges */}
                <div className="pt-4 border-t border-terracotta/15 flex flex-wrap gap-1.5">
                  {project.materialsUsed.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-1 rounded-full bg-creme-200/80 text-fern-900 text-[11px] font-sans border border-terracotta/15"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Commission Callout */}
        <div className="p-8 sm:p-14 rounded-3xl bg-fern-950 text-creme-50 border border-sage-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-terracotta-300 font-bold block">
              Architectural Commission
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-creme-50 leading-tight">
              Have an Upcoming Project or Acreage?
            </h3>
            <p className="text-creme-300 text-sm leading-relaxed font-sans font-light">
              We design and construct eco-farmhouses, residences, and retreats across India. Consult directly with Principal Architect Ar. Shreya Srivastava.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-rust hover:bg-rust-600 text-creme-50 text-xs font-sans uppercase tracking-widest font-semibold transition-all shadow-lg hover:scale-105 text-center flex items-center justify-center gap-2"
            >
              <span>Initiate Project Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact#experience-studio"
              className="w-full sm:w-auto px-6 py-4 rounded-full border border-creme/20 hover:bg-creme/10 text-creme-200 text-xs font-sans uppercase tracking-widest font-semibold transition-all text-center"
            >
              <span>Visit Greater Noida Studio</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}