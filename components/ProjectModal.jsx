"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Maximize2, Layers, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-fern-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[92vh] bg-[#FAF7F2] rounded-3xl shadow-2xl border border-terracotta/30 overflow-hidden flex flex-col z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-terracotta/15 bg-creme-100/90">
            <div>
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-rust font-semibold">
                Studio Shunya Portfolio • {project.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-fern-900 leading-tight">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-fern/20 text-fern-800 hover:text-rust hover:border-rust transition-colors"
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
            {/* Gallery Viewport */}
            <div className="space-y-3">
              <div className="relative h-[320px] sm:h-[460px] w-full rounded-2xl overflow-hidden bg-fern-950/10 border border-terracotta/15 shadow-inner">
                <Image
                  src={project.images[activeImageIndex] || project.heroImage}
                  alt={`${project.title} slide ${activeImageIndex + 1}`}
                  fill
                  className="object-cover object-center"
                />

                {/* Left/Right Nav Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) =>
                          prev === 0 ? project.images.length - 1 : prev - 1
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-fern-950/70 text-creme hover:bg-rust transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) =>
                          prev === project.images.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-fern-950/70 text-creme hover:bg-rust transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full dark-earth-glass text-[11px] font-sans text-creme tracking-wider">
                  {activeImageIndex + 1} / {project.images.length}
                </div>
              </div>

              {/* Thumbnails strip */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {project.images.map((img, i) => (
                  <button
                    key={img + i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      i === activeImageIndex
                        ? "border-rust ring-2 ring-rust/30 scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`Thumb ${i}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-creme-200/70 border border-terracotta/15">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-fern-600 block">
                  Location
                </span>
                <span className="font-serif text-base text-fern-900 font-semibold flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-rust shrink-0" />
                  {project.location}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-fern-600 block">
                  Completion
                </span>
                <span className="font-serif text-base text-fern-900 font-semibold flex items-center gap-1 mt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-terracotta shrink-0" />
                  {project.year}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-fern-600 block">
                  Built-up Area
                </span>
                <span className="font-serif text-base text-fern-900 font-semibold flex items-center gap-1 mt-0.5">
                  <Maximize2 className="w-3.5 h-3.5 text-sage-700 shrink-0" />
                  {project.builtUpArea}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-fern-600 block">
                  Site Footprint
                </span>
                <span className="font-serif text-base text-fern-900 font-semibold flex items-center gap-1 mt-0.5">
                  <Layers className="w-3.5 h-3.5 text-fern-700 shrink-0" />
                  {project.siteArea}
                </span>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-4">
              <h4 className="font-serif text-2xl text-fern-900">
                Architectural Narrative
              </h4>
              <div className="space-y-3 text-fern-800 text-sm sm:text-base leading-relaxed">
                {project.description.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Key Innovations & Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-terracotta/15">
              <div>
                <h5 className="text-xs uppercase tracking-widest text-rust font-semibold mb-3">
                  Key Vernacular Highlights
                </h5>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-fern-800">
                      <CheckCircle2 className="w-4 h-4 text-fern-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-xs uppercase tracking-widest text-rust font-semibold mb-3">
                  Materials Sourced
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.materialsUsed.map((mat) => (
                    <span
                      key={mat}
                      className="px-3 py-1.5 rounded-full bg-creme-300/80 text-fern-900 text-xs font-sans tracking-wide border border-terracotta/20"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Challenge & Solution Case Box */}
            <div className="p-6 rounded-2xl bg-sage-50/70 border border-sage-300 text-xs sm:text-sm space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-fern-700 font-bold block">
                Engineering Challenge &amp; Vernacular Solution
              </span>
              <p className="text-fern-900">
                <strong className="text-rust">Challenge:</strong> {project.challengeSolution.challenge}
              </p>
              <p className="text-fern-900">
                <strong className="text-fern-700">Solution:</strong> {project.challengeSolution.solution}
              </p>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-4 border-t border-terracotta/15 bg-creme-100 flex items-center justify-between">
            <span className="text-xs text-fern-700">
              Lead Architect: <strong className="text-fern-900">Ar. Shreya Srivastava</strong>
            </span>
            <a
              href="#contact"
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-rust hover:bg-rust-600 text-creme-50 text-xs font-sans uppercase tracking-widest font-semibold transition-colors"
            >
              Discuss Similar Project
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
