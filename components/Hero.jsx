"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/studioData";

const SLIDES = [
  {
    project: PROJECTS[1], // Shivaray Farms
    image: "/images/portfolio/f5e53e_8199b963011b46338c3fd28a91e34a5d.jpg",
    title: "Shivaray Farms",
    location: "Chittorgarh, Rajasthan",
    category: "Sustainable Farmhouse",
    metric: "90% Local Materials",
    tagline: "Homage to Rajasthani Fort Craftsmanship"
  },
  {
    project: PROJECTS[0], // Studio Shunya Office
    image: "/images/portfolio/f5e53e_7682d7f216694284b25c127ae6b104b3.jpg",
    title: "Studio Shunya Home-Office",
    location: "Greater Noida, Delhi NCR",
    category: "Experience Center",
    metric: "Zero Operational AC Need",
    tagline: "Urban Zero-Energy Mud & Araish Lime Architecture"
  },
  {
    project: PROJECTS[2], // Zazen Farms
    image: "/images/portfolio/f5e53e_72a0ceda49fb497ea1e26fa55a90e6a6.jpg",
    title: "Zazen Farms",
    location: "Beawar, Rajasthan",
    category: "Biophilic Cottages",
    metric: "100% Topography Retained",
    tagline: "Contemplative Natural Eco-Retreat"
  },
  {
    project: PROJECTS[3], // Poetry in Stone
    image: "/images/portfolio/f5e53e_6019b79debae49b982914c6ee93e5448.jpg",
    title: "Poetry in Stone",
    location: "Greater Noida, Delhi NCR",
    category: "Residential Sanctuary",
    metric: "0% VOC Breathable Walls",
    tagline: "Hand-Dressed Natural Stone & Earth Plasters"
  },
  {
    project: PROJECTS[4], // Mud and Meadows
    image: "/images/portfolio/f5e53e_13d3b569888e43318956292383bd5542.jpg",
    title: "Mud and Meadows",
    location: "Jamshedpur, Jharkhand",
    category: "Riverine Villa",
    metric: "100% Excavated Earth Reused",
    tagline: "Rammed Earth Living on the River's Edge"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  // Auto-advance slideshow with 6.5s interval
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, current]);

  const slide = SLIDES[current];

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] w-full overflow-hidden bg-[#1B2219] text-[#FAF7F2] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. FULL-BLEED CINEMATIC PHOTOGRAPHIC SLIDESHOW CANVAS */}
      <motion.div style={{ scale: heroScale }} className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slide.title}
            custom={direction}
            initial={{
              x: direction > 0 ? "100%" : "-100%",
              opacity: 0.95,
              scale: 1.08,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
              transition: {
                x: { duration: 1.1, ease: [0.65, 0.05, 0, 1] }, // Mejuma signature navEase
                opacity: { duration: 0.7 },
                scale: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            exit={{
              x: direction > 0 ? "-100%" : "100%",
              opacity: 0.7,
              scale: 0.95,
              transition: {
                x: { duration: 1.1, ease: [0.65, 0.05, 0, 1] },
                opacity: { duration: 0.6 },
              },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover object-center"
            />
            {/* Cinematic architectural gradient for editorial depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/45" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* 2. FOREGROUND EDITORIAL CONTENT (NO TOP LINE!) */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-20 h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-10"
      >
        {/* Subtle breathing room at top (Clean, completely uncluttered) */}
        <div className="w-full flex justify-end items-center">
          <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-[11px] font-sans tracking-widest uppercase text-white/80">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Zero Energy Architectural Practice</span>
          </div>
        </div>

        {/* 3. CENTERPIECE: GIGANTIC "SHUNYA" EDITORIAL WORDMARK */}
        <motion.div
          style={{ y: textY }}
          className="my-auto text-center w-full overflow-hidden py-4"
        >
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-[19vw] sm:text-[17vw] md:text-[15vw] lg:text-[14vw] font-normal leading-[0.8] tracking-tight text-[#FAF7F2] lowercase transition-transform hover:scale-[1.01] duration-700">
              shunya
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex items-center justify-center gap-3 mt-4 text-xs sm:text-sm font-sans uppercase tracking-[0.35em] text-[#BD6B46] font-medium"
          >
            <span>Mud • Lime • Stone • Silence</span>
          </motion.div>
        </motion.div>

        {/* 4. MODERN ARCHITECTURAL CAROUSEL DOCK & CONTROLS */}
        <div className="space-y-4">
          {/* Main 2-Column Split: Active Slide Details + Mejuma Pill Button */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            {/* Left: Active Project Glass Badge & Tagline */}
            <div className="md:col-span-7 lg:col-span-8">
              <motion.div
                key={slide.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex flex-col sm:flex-row sm:items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#A04328] text-white text-[10px] font-sans font-semibold uppercase tracking-wider">
                    {slide.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-white/90 font-sans">
                    <MapPin className="w-3.5 h-3.5 text-[#BD6B46]" />
                    <span>{slide.location}</span>
                  </div>
                </div>

                <div className="hidden sm:block w-[1px] h-4 bg-white/20" />

                <div className="flex items-center justify-between sm:justify-start gap-4">
                  <span className="font-serif text-lg text-white font-medium">
                    {slide.title}
                  </span>
                  <span className="text-[11px] font-sans text-[#97B29F] tracking-wide font-medium">
                    {slide.metric}
                  </span>
                </div>

                <Link
                  href={`/projects/${slide.project.slug}`}
                  className="hidden lg:inline-flex items-center gap-1.5 ml-2 px-3 py-1 rounded-full bg-white/15 hover:bg-[#A04328] text-white text-[11px] font-sans uppercase tracking-wider font-semibold transition-colors"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </motion.div>
            </div>

            {/* Right: Mejuma Button & Slide Arrows */}
            <div className="md:col-span-5 lg:col-span-4 flex items-center justify-between md:justify-end gap-4">
              {/* Slide Counter */}
              <div className="flex items-center gap-2 text-xs font-mono text-white/80 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                <span className="font-bold text-white">0{current + 1}</span>
                <span className="text-white/40">/</span>
                <span>0{SLIDES.length}</span>

                <div className="flex items-center gap-1 ml-1">
                  <button
                    onClick={handlePrev}
                    className="p-1 rounded-full hover:bg-white/20 text-white transition-colors"
                    aria-label="Previous Project"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-1 rounded-full hover:bg-white/20 text-white transition-colors"
                    aria-label="Next Project"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Iconic Mejuma Style Button */}
              <Link
                href="/work"
                className="group relative inline-flex items-center gap-3 pl-2 pr-5 py-2 rounded-full bg-[#FAF7F2] text-[#232B20] hover:bg-[#A04328] hover:text-[#FAF7F2] transition-all duration-300 shadow-xl"
              >
                <span className="w-8 h-8 rounded-full bg-[#232B20] text-[#FAF7F2] group-hover:bg-[#FAF7F2] group-hover:text-[#A04328] flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
                <span className="font-sans text-xs uppercase tracking-[0.18em] font-semibold">
                  Explore works
                </span>
              </Link>
            </div>
          </div>

          {/* Interactive Project Thumbnails Strip (Professional Architecture Carousel) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {SLIDES.map((s, idx) => {
              const isActive = idx === current;
              return (
                <button
                  key={s.title}
                  onClick={() => {
                    setDirection(idx > current ? 1 : -1);
                    setCurrent(idx);
                  }}
                  className={`group relative flex items-center gap-3 p-1.5 sm:p-2 rounded-xl transition-all duration-300 text-left shrink-0 ${
                    isActive
                      ? "bg-black/60 backdrop-blur-xl border border-[#BD6B46] ring-1 ring-[#BD6B46]/40 scale-100"
                      : "bg-black/30 backdrop-blur-md border border-white/10 opacity-60 hover:opacity-100 hover:bg-black/50"
                  }`}
                >
                  <div className="relative w-12 h-9 sm:w-14 sm:h-10 rounded-lg overflow-hidden shrink-0">
                    <Image src={s.image} alt={s.title} fill className="object-cover" />
                  </div>

                  <div className="pr-2 hidden sm:block">
                    <span className="text-[9px] uppercase tracking-wider text-[#BD6B46] font-semibold block">
                      0{idx + 1}
                    </span>
                    <span className="font-serif text-xs text-white block truncate max-w-[120px]">
                      {s.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
