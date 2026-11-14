"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, ChevronLeft, ChevronRight, Layers, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/studioData";

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const categories = ["All", "Experience Center", "Farmhouse", "Residential"];

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const currentProject = filteredProjects[activeProjectIndex] || filteredProjects[0];

  const handleNext = () => {
    setActiveProjectIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setActiveProjectIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="projects"
      className="min-h-[100dvh] py-16 sm:py-20 flex flex-col justify-center relative bg-[#FAF7F2] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none plaster-texture opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Header & Category Filters */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10 pb-5 border-b border-terracotta/20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1.5px] bg-rust" />
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-rust font-semibold">
                Built Architecture
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-fern-950 font-normal leading-tight">
              Works of <span className="font-serif italic text-rust">Earth</span> &amp;{" "}
              <span className="font-serif italic text-sage-700">Light</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveProjectIndex(0);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-widest font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-rust text-creme-50 shadow-sm"
                    : "bg-creme-200/70 text-fern-800 hover:bg-creme-300 border border-terracotta/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Big 1-Page Architectural Showcase Frame */}
        {currentProject && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Big Architectural Photograph Viewport */}
            <div className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-2xl border border-terracotta/25 bg-fern-950/15 group">
              <div className="relative h-[340px] sm:h-[460px] md:h-[500px] w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={currentProject.heroImage}
                      alt={currentProject.title}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-fern-950/80 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                  <span className="px-3.5 py-1 rounded-full dark-earth-glass text-creme-100 text-[11px] font-sans tracking-widest uppercase">
                    {currentProject.category}
                  </span>
                  <span className="px-3.5 py-1 rounded-full dark-earth-glass text-creme-100 text-[11px] font-sans flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-rust" />
                    {currentProject.location}
                  </span>
                </div>

                {/* Bottom Gallery Trigger & Photo Count */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-creme-100 z-20">
                  <div className="flex items-center gap-2 text-xs font-sans">
                    <Layers className="w-3.5 h-3.5 text-terracotta-300" />
                    <span>{currentProject.images.length} High-Res Photos</span>
                  </div>

                  <Link
                    href={`/projects/${currentProject.slug}`}
                    className="px-4 py-1.5 rounded-full bg-creme-100 text-fern-900 text-xs font-sans uppercase tracking-widest font-semibold hover:bg-rust hover:text-creme transition-colors flex items-center gap-1.5 shadow"
                  >
                    <span>Open Full Project</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Architectural Metadata & Project Navigator */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-rust font-semibold block mb-1">
                  Completed {currentProject.year} • {currentProject.builtUpArea}
                </span>

                <Link href={`/projects/${currentProject.slug}`}>
                  <h3 className="font-serif text-2xl sm:text-4xl text-fern-950 font-normal leading-tight hover:text-rust transition-colors cursor-pointer">
                    {currentProject.title}
                  </h3>
                </Link>

                <p className="mt-2 text-xs font-sans uppercase tracking-wider text-terracotta-700 italic font-medium">
                  {currentProject.tagline}
                </p>

                <p className="mt-4 text-fern-800 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                  {currentProject.description[0]}
                </p>
              </div>

              {/* Material Badges */}
              <div className="pt-2 border-t border-terracotta/15">
                <span className="text-[10px] font-sans uppercase tracking-widest text-fern-600 block mb-2 font-semibold">
                  Materiality
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.materialsUsed.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-1 rounded-full bg-creme-200 text-fern-900 text-[11px] font-sans border border-terracotta/15"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Slide Switcher & Indicators */}
              <div className="pt-4 border-t border-terracotta/15 flex items-center justify-between">
                <span className="text-xs font-mono text-fern-700">
                  0{activeProjectIndex + 1} / 0{filteredProjects.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-full border border-terracotta/30 text-fern-900 hover:bg-rust hover:text-creme transition-colors"
                    aria-label="Previous Project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-full border border-terracotta/30 text-fern-900 hover:bg-rust hover:text-creme transition-colors"
                    aria-label="Next Project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
