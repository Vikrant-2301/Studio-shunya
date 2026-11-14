"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  Maximize2,
  Layers,
  CheckCircle2,
  Sparkles,
  Share2,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Wind,
  Droplets,
  Hammer,
  FileText,
  Building2,
  Copy,
  Check
} from "lucide-react";
import BrushAccent from "@/components/BrushAccent";

export default function ProjectDetailView({ project, prevProject, nextProject }) {
  const [activeTab, setActiveTab] = useState("narrative");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [copied, setCopied] = useState(false);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev > 0 ? prev - 1 : project.images.length - 1));
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev < project.images.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, project.images.length]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <article className="pt-28 sm:pt-36 pb-24 relative min-h-screen text-fern-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation & Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-terracotta/20">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-fern-800 hover:text-rust transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-rust" />
            <span>Return to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-terracotta/30 bg-creme-50/80 hover:bg-creme-200/80 text-fern-900 text-xs font-sans uppercase tracking-wider font-semibold transition-all shadow-sm"
              title="Share or Copy Link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-fern-700" /> : <Share2 className="w-3.5 h-3.5 text-rust" />}
              <span>{copied ? "Link Copied!" : "Share Monograph"}</span>
            </button>

            <Link
              href={`/contact?project=${project.slug}&title=${encodeURIComponent(project.title)}`}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rust hover:bg-rust-600 text-creme-50 text-xs font-sans uppercase tracking-widest font-semibold transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <span>Commission Similar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Hero Editorial Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-rust/10 text-rust text-[11px] font-sans uppercase tracking-[0.2em] font-bold border border-rust/20">
              {project.category}
            </span>
            <span className="text-fern-400">•</span>
            <span className="text-xs font-sans uppercase tracking-widest text-fern-700 font-semibold">
              Completed {project.year}
            </span>
            <span className="text-fern-400">•</span>
            <span className="text-xs font-sans uppercase tracking-widest text-fern-700 font-semibold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-terracotta" />
              {project.location}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-fern-950 leading-[1.1] font-normal tracking-tight">
            {project.title}
          </h1>

          <div className="mt-3 max-w-2xl">
            <BrushAccent className="text-rust/70" height="12" width="280px" />
          </div>

          <p className="mt-4 text-terracotta-700 text-base sm:text-xl font-serif italic max-w-3xl leading-relaxed">
            "{project.tagline}"
          </p>
        </div>

        {/* Main Hero Visual Showcase */}
        <div className="relative h-[440px] sm:h-[620px] lg:h-[700px] w-full rounded-3xl overflow-hidden mb-12 border border-terracotta/30 shadow-2xl bg-fern-950/20 group">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

          {/* Floating Hero Badge */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none">
            <div className="text-creme-100 drop-shadow-md">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-terracotta-300 font-semibold block mb-1">
                Zero-Carbon Living Architecture
              </span>
              <p className="font-serif text-xl sm:text-2xl text-creme-50 max-w-xl">
                {project.location}
              </p>
            </div>

            <button
              onClick={() => setLightboxIndex(0)}
              className="pointer-events-auto self-start sm:self-auto px-4 py-2 rounded-full bg-creme-100/90 hover:bg-white text-fern-950 text-xs font-sans uppercase tracking-widest font-semibold backdrop-blur-md transition-all shadow-lg flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-rust" />
              <span>Explore All {project.images.length} Photos</span>
            </button>
          </div>
        </div>

        {/* Architectural Specifications Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-creme-100/90 border border-terracotta/25 mb-16 shadow-lg">
          <div className="p-2 sm:p-3">
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-fern-600 block">
              Geographic Context
            </span>
            <p className="font-serif text-lg sm:text-2xl text-fern-950 font-medium flex items-center gap-2 mt-1">
              <MapPin className="w-4 h-4 text-rust shrink-0" />
              <span>{project.location}</span>
            </p>
            <span className="text-[11px] text-fern-600 font-sans mt-0.5 block">Hot-arid / Composite Microclimate</span>
          </div>

          <div className="p-2 sm:p-3 border-l sm:border-l-0 lg:border-l border-terracotta/20">
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-fern-600 block">
              Built-up &amp; Site Area
            </span>
            <p className="font-serif text-lg sm:text-2xl text-fern-950 font-medium flex items-center gap-2 mt-1">
              <Maximize2 className="w-4 h-4 text-terracotta shrink-0" />
              <span>{project.builtUpArea}</span>
            </p>
            <span className="text-[11px] text-fern-600 font-sans mt-0.5 block">Site: {project.siteArea}</span>
          </div>

          <div className="p-2 sm:p-3 border-t sm:border-t-0 lg:border-l border-terracotta/20">
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-fern-600 block">
              Passive Thermal Drop
            </span>
            <p className="font-serif text-lg sm:text-2xl text-fern-950 font-medium flex items-center gap-2 mt-1">
              <Wind className="w-4 h-4 text-sage-700 shrink-0" />
              <span>6-8°C Cooler</span>
            </p>
            <span className="text-[11px] text-fern-600 font-sans mt-0.5 block">Zero mechanical AC required</span>
          </div>

          <div className="p-2 sm:p-3 border-t border-l sm:border-t-0 border-terracotta/20">
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-fern-600 block">
              Embodied Carbon
            </span>
            <p className="font-serif text-lg sm:text-2xl text-fern-950 font-medium flex items-center gap-2 mt-1">
              <ShieldCheck className="w-4 h-4 text-fern-700 shrink-0" />
              <span>-40% Embodied</span>
            </p>
            <span className="text-[11px] text-fern-600 font-sans mt-0.5 block">Operational carbon: 0 kg/yr</span>
          </div>
        </div>

        {/* Tabbed Interactive Section */}
        <div className="mb-20">
          <div className="flex items-center gap-2 border-b border-terracotta/20 pb-2 mb-8 overflow-x-auto">
            {[
              { id: "narrative", label: "Architectural Story", icon: FileText },
              { id: "bioclimatic", label: "Passive & Bioclimatic Science", icon: Wind },
              { id: "materials", label: "Materials & Craft Matrix", icon: Hammer },
              { id: "engineering", label: "Engineering Challenge & Solution", icon: Building2 },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-sans uppercase tracking-widest font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-fern-900 text-creme-50 shadow-md"
                      : "text-fern-700 hover:text-fern-950 hover:bg-creme-200/50"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-terracotta-300" : "text-fern-500"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="bg-creme-100/70 border border-terracotta/20 rounded-3xl p-6 sm:p-10 shadow-md">
            {activeTab === "narrative" && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                <div className="lg:col-span-7 space-y-6">
                  <h3 className="font-serif text-3xl sm:text-4xl text-fern-950 leading-tight">
                    Spatial Concept &amp; Living Experience
                  </h3>

                  <div className="space-y-4 text-fern-800 text-base sm:text-lg leading-relaxed font-sans font-light">
                    {project.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  {/* Highlights Grid */}
                  <div className="pt-6 border-t border-terracotta/20">
                    <span className="text-xs uppercase tracking-widest text-rust font-bold block mb-4">
                      Key Vernacular Elements
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-creme-200/50 border border-terracotta/15">
                          <CheckCircle2 className="w-4 h-4 text-fern-700 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-fern-900 font-sans">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Architect Quote Card */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="p-8 rounded-3xl bg-fern-900 text-creme-50 border border-sage-800 shadow-xl relative overflow-hidden">
                    <span className="text-6xl font-serif text-rust/40 absolute -top-4 -left-2 select-none pointer-events-none">
                      “
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-terracotta-300 font-bold block mb-3 relative z-10">
                      Principal Architect's Monograph
                    </span>
                    <p className="font-serif italic text-lg sm:text-xl text-creme-100 leading-relaxed relative z-10">
                      "{project.architectQuote || project.tagline}"
                    </p>

                    <div className="mt-6 pt-6 border-t border-creme/15 flex items-center gap-3 relative z-10">
                      <div className="w-10 h-10 rounded-full bg-rust/30 border border-rust flex items-center justify-center font-serif text-rust-300 text-sm font-bold">
                        SS
                      </div>
                      <div>
                        <h4 className="font-serif text-base text-creme-50 font-medium">Ar. Shreya Srivastava</h4>
                        <p className="text-[11px] font-sans text-creme/70 tracking-wider">Founder, Studio Shunya</p>
                      </div>
                    </div>
                  </div>

                  {/* Impact Statistics */}
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-creme-200/70 border border-terracotta/20">
                        <span className="text-[10px] uppercase tracking-wider text-fern-600 font-sans block">{m.label}</span>
                        <p className="font-serif text-xl sm:text-2xl text-rust font-bold mt-1">{m.value}</p>
                        <span className="text-[11px] text-fern-700 font-sans mt-0.5 block">{m.subtext}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "bioclimatic" && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="max-w-3xl">
                  <span className="text-xs uppercase tracking-[0.25em] text-rust font-bold block mb-2">
                    Solar Passive &amp; Microclimatic Engineering
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-fern-950">
                    How This Architecture Breathes Without Mechanical Air Conditioning
                  </h3>
                  <p className="text-fern-800 text-sm sm:text-base mt-2 font-sans font-light leading-relaxed">
                    By tailoring the building’s orientation, thermal mass, and envelope to local solar angles and wind paths, 
                    we achieve continuous internal thermal comfort while eliminating the operational carbon footprint.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(project.passiveStrategies || [
                    "High thermal mass walls delaying daytime solar heat penetration by 8-10 hours",
                    "Stack effect natural ventilation venting warmer rising air through clerestory outlets",
                    "Breathable lime render regulating internal relative humidity at an optimal 45-55%",
                    "Deep shaded verandas cutting harsh direct sun while preserving generous natural daylight"
                  ]).map((strat, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-creme-50/80 border border-terracotta/20 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-sage-100 text-fern-800 border border-sage-400 flex items-center justify-center shrink-0 font-serif text-base font-bold">
                        0{i + 1}
                      </div>
                      <div>
                        <h4 className="font-serif text-lg text-fern-950 font-medium mb-1">
                          Bioclimatic Principle {i + 1}
                        </h4>
                        <p className="text-xs sm:text-sm text-fern-800 font-sans leading-relaxed">{strat}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "materials" && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="max-w-3xl">
                  <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-bold block mb-2">
                    Vernacular Sourcing &amp; Artisanal Craft
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-fern-950">
                    The Material Symphony of {project.title}
                  </h3>
                  <p className="text-fern-800 text-sm sm:text-base mt-2 font-sans font-light leading-relaxed">
                    Every element used in this structure is 100% natural, non-toxic, and sourced locally within a strict radius to eliminate transport emissions.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(project.detailedMaterials || [
                    { name: "Sun-Dried Mud Bricks", role: "Structural Envelope", source: "Local soil cured in open sun" },
                    { name: "Slaked Lime & Surkhi", role: "Breathable Plasters", source: "Traditional fat lime with pulverized brick dust" },
                    { name: "Inverted Clay Pots", role: "Filler Slab Ceiling", source: "Village potters within 30km" },
                    { name: "Kota Stone Scraps", role: "Ventilators & Plinths", source: "Upcycled quarry scrap" },
                    { name: "Bamboo & Reclaimed Wood", role: "Carpentry & Trusses", source: "Borax-treated natural timber" }
                  ]).map((mat, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-creme-50/80 border border-terracotta/20 space-y-2">
                      <span className="text-[10px] uppercase tracking-wider text-rust font-bold block">{mat.role}</span>
                      <h4 className="font-serif text-xl text-fern-950">{mat.name}</h4>
                      <p className="text-xs text-fern-700 font-sans leading-relaxed">{mat.source}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "engineering" && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="max-w-3xl">
                  <span className="text-xs uppercase tracking-[0.25em] text-fern-700 font-bold block mb-2">
                    Technical Ingenuity
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-fern-950">
                    Overcoming Regulatory &amp; Environmental Challenges
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="p-6 rounded-2xl bg-rust/5 border border-rust/30 space-y-3">
                    <span className="px-3 py-1 rounded-full bg-rust/10 text-rust text-[10px] font-sans uppercase tracking-widest font-bold">
                      The Architectural Challenge
                    </span>
                    <p className="text-fern-900 text-sm sm:text-base font-sans leading-relaxed">
                      {project.challengeSolution.challenge}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-fern-50 border border-fern-300 space-y-3">
                    <span className="px-3 py-1 rounded-full bg-fern-100 text-fern-900 text-[10px] font-sans uppercase tracking-widest font-bold">
                      The Studio Shunya Solution
                    </span>
                    <p className="text-fern-900 text-sm sm:text-base font-sans leading-relaxed">
                      {project.challengeSolution.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Curated Photographic Gallery */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-rust" />
                <span className="text-xs font-sans uppercase tracking-[0.25em] text-rust font-semibold">
                  Visual Archive
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-fern-950 font-normal">
                Photographic Documentation
              </h2>
            </div>

            <p className="text-xs font-sans uppercase tracking-widest text-fern-600">
              Click any photograph to view high-resolution details
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((img, idx) => (
              <div
                key={img + idx}
                onClick={() => setLightboxIndex(idx)}
                className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-terracotta/25 cursor-pointer bg-fern-950/10 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <Image
                  src={img}
                  alt={`${project.title} photographic detail ${idx + 1}`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-creme-50 text-xs font-sans uppercase tracking-widest flex items-center gap-2">
                    <Maximize2 className="w-3.5 h-3.5 text-rust-300" />
                    <span>Expand Frame {idx + 1} of {project.images.length}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Previous & Next Project Navigation Strip */}
        <div className="pt-12 pb-16 border-t border-b border-terracotta/20 mb-20">
          <span className="text-center text-[11px] font-sans uppercase tracking-[0.25em] text-fern-600 font-semibold block mb-8">
            Continue Exploring Our Living Architecture Portfolio
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevProject && (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group p-6 rounded-3xl bg-creme-100/80 border border-terracotta/20 hover:border-rust transition-all flex items-center gap-5 shadow-sm hover:shadow-md"
              >
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-terracotta/20">
                  <Image
                    src={prevProject.heroImage}
                    alt={prevProject.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-rust flex items-center gap-1 font-semibold">
                    <ChevronLeft className="w-3.5 h-3.5" /> Previous Project
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-fern-950 group-hover:text-rust transition-colors">
                    {prevProject.title}
                  </h4>
                  <p className="text-xs text-fern-700 font-sans">{prevProject.location} • {prevProject.category}</p>
                </div>
              </Link>
            )}

            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group p-6 rounded-3xl bg-creme-100/80 border border-terracotta/20 hover:border-rust transition-all flex items-center justify-between gap-5 text-right shadow-sm hover:shadow-md md:ml-auto w-full"
              >
                <div className="space-y-1 text-left md:text-right flex-1">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-rust flex items-center justify-start md:justify-end gap-1 font-semibold">
                    Next Project <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-fern-950 group-hover:text-rust transition-colors">
                    {nextProject.title}
                  </h4>
                  <p className="text-xs text-fern-700 font-sans">{nextProject.location} • {nextProject.category}</p>
                </div>
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-terracotta/20">
                  <Image
                    src={nextProject.heroImage}
                    alt={nextProject.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* Bottom Bespoke Commission Callout */}
        <div className="p-8 sm:p-14 rounded-3xl bg-fern-950 text-creme-50 relative overflow-hidden border border-sage-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-terracotta-300 font-bold block">
              Architectural Commission
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-creme-50 leading-tight">
              Ready to Craft an Earth Sanctuary Like {project.title}?
            </h3>
            <p className="text-creme-300 text-sm leading-relaxed font-sans font-light">
              Discuss your land topography, bioclimatic parameters, and natural material preferences with Principal Architect Ar. Shreya Srivastava.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              href={`/contact?project=${project.slug}&title=${encodeURIComponent(project.title)}`}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-rust hover:bg-rust-600 text-creme-50 text-xs font-sans uppercase tracking-widest font-semibold transition-all shadow-lg hover:scale-105 text-center flex items-center justify-center gap-2"
            >
              <span>Initiate Project Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-4 rounded-full border border-creme/20 hover:bg-creme/10 text-creme-200 text-xs font-sans uppercase tracking-widest font-semibold transition-all text-center"
            >
              <span>Visit Experience Center</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between text-creme-100 z-10">
              <span className="text-xs font-sans uppercase tracking-widest text-creme/70">
                {project.title} — Photo {lightboxIndex + 1} of {project.images.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Center Image */}
            <div className="relative w-full h-[70vh] sm:h-[80vh] max-w-6xl mx-auto my-auto">
              <Image
                src={project.images[lightboxIndex]}
                alt={`${project.title} enlarged photo ${lightboxIndex + 1}`}
                fill
                priority
                className="object-contain"
              />

              {/* Prev / Next controls */}
              <button
                onClick={() =>
                  setLightboxIndex((prev) => (prev > 0 ? prev - 1 : project.images.length - 1))
                }
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all border border-white/20"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setLightboxIndex((prev) => (prev < project.images.length - 1 ? prev + 1 : 0))
                }
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all border border-white/20"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Footer Thumbnail Preview Strip */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 z-10">
              {project.images.map((img, i) => (
                <button
                  key={img + i}
                  onClick={() => setLightboxIndex(i)}
                  className={`relative w-14 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    lightboxIndex === i ? "border-rust scale-110" : "border-white/20 opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}