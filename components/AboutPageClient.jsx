"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Award,
  Users,
  Feather,
  Sun,
  Wind,
  CheckCircle2,
  Compass,
  Layers,
  HeartHandshake
} from "lucide-react";
import { FOUNDER_BIO, PHILOSOPHY_PILLARS, STUDIO_INFO, PRESS_FEATURES } from "@/data/studioData";
import BrushAccent from "@/components/BrushAccent";

export default function AboutPageClient() {
  const [activePillar, setActivePillar] = useState(0);

  const milestones = [
    {
      year: "2020",
      title: "Founding of Studio Shunya",
      desc: "Ar. Shreya Srivastava established the practice in New Delhi with a singular mission: to challenge the carbon-heavy paradigm of modern concrete architecture through living natural materials."
    },
    {
      year: "2021",
      title: "Vernacular Material R&D",
      desc: "Conducted intensive soil mapping across Rajasthan, Uttar Pradesh, and Haryana; revived ancient Araish slaked-lime recipes using marble dust, curd, and fenugreek infusions."
    },
    {
      year: "2022",
      title: "Shivaray & Zazen Farms",
      desc: "Delivered landmark projects in Chittorgarh and Beawar, proving that passive thermal mass can conquer extreme 45°C desert climates with zero mechanical air conditioning."
    },
    {
      year: "2023",
      title: "Experience Sanctuary & National Acclaim",
      desc: "Completed the Studio Shunya Experience Home-Office in Greater Noida, featuring the inverted earthen pot filler slab. Featured prominently in Architectural Digest, The Better India, and India Today."
    },
    {
      year: "2024+",
      title: "Pan-India Living Architecture",
      desc: "Expanding PMC supervision and living earth residences across Jharkhand, Rajasthan, and Delhi NCR, while training over 100+ master rural artisans."
    }
  ];

  const comparativeMatrix = [
    {
      metric: "Operational Carbon",
      conventional: "High (Non-stop AC power draw)",
      shunya: "0 kg/yr (100% Passive Cooling)",
      icon: Sun
    },
    {
      metric: "Embodied Energy",
      conventional: "Extremely High (Kiln-baked bricks, Portland cement, steel)",
      shunya: "-40% Embodied (Sun-dried earth, slaked lime, upcycled stone)",
      icon: Layers
    },
    {
      metric: "Indoor Air Quality",
      conventional: "Synthetic VOCs, trapped moisture, microplastics",
      shunya: "0% VOC, 100% Breathable, Antimicrobial Lime",
      icon: Feather
    },
    {
      metric: "Lifecycle at Demolition",
      conventional: "Non-biodegradable toxic landfill rubble",
      shunya: "100% Biodegradable — dissolves back into fertile soil",
      icon: ShieldCheck
    },
    {
      metric: "Artisanal Impact",
      conventional: "Mass mechanized factory production",
      shunya: "Dignified employment for 100+ rural heritage masons",
      icon: Users
    }
  ];

  return (
    <article className="pt-28 sm:pt-36 pb-24 relative min-h-screen text-fern-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-fern-800 hover:text-rust transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-rust" />
            <span>Return to Homepage</span>
          </Link>
        </div>

        {/* Editorial Grand Hero */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1.5px] bg-rust" />
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-rust font-semibold">
              The Studio Monograph
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-fern-950 font-normal leading-[1.08] tracking-tight">
            The Architecture of <span className="font-serif italic text-rust">Nothingness</span> &amp; Everything
          </h1>

          <div className="mt-3 max-w-sm">
            <BrushAccent className="text-rust/70" height="14" width="320px" />
          </div>

          <p className="mt-6 text-fern-800 text-lg sm:text-2xl font-serif italic text-terracotta-700 max-w-3xl leading-relaxed">
            “{STUDIO_INFO.motto}”
          </p>

          <p className="mt-4 text-fern-800 text-base sm:text-lg font-sans font-light leading-relaxed max-w-3xl">
            Studio Shunya is a Delhi NCR-based architectural and interior design practice founded in 2020 by Ar. Shreya Srivastava. 
            We design and construct living buildings crafted from raw earth, slaked lime, local stone, and bamboo — redefining sustainability from sacrifice into uncompromising tactile luxury.
          </p>
        </div>

        {/* The Meaning of Shunya (०) Feature Card */}
        <div className="p-8 sm:p-14 rounded-3xl bg-creme-100/90 border border-terracotta/25 shadow-xl mb-24 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 flex flex-col items-center text-center p-8 rounded-3xl bg-creme-200/60 border border-terracotta/20">
              {/* Official Studio Shunya Emblem */}
              <div className="relative w-32 h-32 rounded-full border-2 border-rust/40 flex items-center justify-center bg-creme-50 p-4 mb-6 shadow-md">
                <Image
                  src="/images/portfolio/logo.png"
                  alt="Studio Shunya Official Emblem"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-rust font-bold block mb-1">
                Mathematical &amp; Spiritual Zero
              </span>
              <h3 className="font-serif text-2xl text-fern-950">
                The Duality of Shunya
              </h3>
              <p className="text-xs text-fern-700 font-sans mt-2 leading-relaxed">
                Fundamental to all calculations, yet fundamentally void. Everything you desire, without leaving a trace on nature.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-bold block">
                Our Philosophical Core
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-fern-950 leading-tight">
                Why Radical Restraint Outlives Shock-and-Awe
              </h2>
              <div className="space-y-4 text-fern-800 text-base sm:text-lg font-sans font-light leading-relaxed">
                <p>
                  Contemporary architecture has become intoxicated with spectacle — glass skyscrapers that consume immense electricity to remain habitable and structures that dominate rather than converse with the landscape.
                </p>
                <p>
                  At Studio Shunya, our dominant design themes are <strong className="text-fern-950 font-normal">Balance, Harmony, and Self-Discovery</strong>. We believe spaces should slow down your heart rate. By utilizing natural clay, burnished lime, and stone, the walls breathe with the seasons, absorbing moisture during humid spells and radiating soothing thermal coolness during scorching afternoons.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-xl bg-creme-50 border border-terracotta/20 text-xs font-sans text-fern-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rust shrink-0" />
                  <span>Zero Kiln Firing Emissions</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-creme-50 border border-terracotta/20 text-xs font-sans text-fern-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-fern-700 shrink-0" />
                  <span>90% Hyper-Local Sourcing</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-creme-50 border border-terracotta/20 text-xs font-sans text-fern-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sage-700 shrink-0" />
                  <span>Carbon-Negative Lime Curing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Interactive Grid */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-rust font-bold block mb-2">
              Foundational Tenets
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-fern-950 font-normal">
              The Four Pillars of Living Earth Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHILOSOPHY_PILLARS.map((p, idx) => (
              <div
                key={p.num}
                onClick={() => setActivePillar(idx)}
                className={`p-8 rounded-3xl border transition-all duration-300 cursor-pointer ${
                  activePillar === idx
                    ? "bg-fern-900 text-creme-50 border-sage-800 shadow-xl -translate-y-1"
                    : "bg-creme-100/90 text-fern-950 border-terracotta/20 hover:border-rust hover:shadow-md"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-serif text-3xl font-bold ${activePillar === idx ? "text-rust-300" : "text-rust"}`}>
                    {p.num}
                  </span>
                  <span className={`text-[10px] font-sans uppercase tracking-widest ${activePillar === idx ? "text-creme/60" : "text-fern-500"}`}>
                    Pillar
                  </span>
                </div>

                <h3 className={`font-serif text-2xl mb-2 ${activePillar === idx ? "text-creme-50" : "text-fern-950"}`}>
                  {p.title}
                </h3>

                <span className={`text-[11px] font-sans uppercase tracking-wider block mb-3 font-semibold ${
                  activePillar === idx ? "text-terracotta-300" : "text-terracotta-700"
                }`}>
                  {p.concept}
                </span>

                <p className={`text-xs sm:text-sm font-sans leading-relaxed ${
                  activePillar === idx ? "text-creme-200" : "text-fern-800"
                }`}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder In-Depth Monograph & Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24 p-8 sm:p-14 rounded-3xl bg-creme-100/80 border border-terracotta/20 shadow-lg">
          <div className="lg:col-span-5 relative">
            <div className="relative h-[480px] sm:h-[600px] w-full rounded-3xl overflow-hidden border-2 border-terracotta/30 shadow-2xl group">
              <Image
                src={FOUNDER_BIO.image}
                alt="Ar. Shreya Srivastava, Founder of Studio Shunya"
                fill
                priority
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-creme-100">
                <span className="text-[10px] uppercase tracking-widest text-terracotta-300 block mb-0.5">
                  Principal Architect
                </span>
                <h4 className="font-serif text-2xl text-creme-50">Ar. Shreya Srivastava</h4>
                <p className="text-xs text-creme-300 font-sans mt-0.5">B.Arch — GGSIPU New Delhi</p>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-2xl bg-creme-200/70 border border-terracotta/20 text-center">
              <span className="text-[11px] text-fern-700 font-sans uppercase tracking-widest block font-semibold">
                Decorated Alumnus
              </span>
              <p className="text-xs text-fern-900 font-sans mt-1">
                Guru Gobind Singh Indraprastha University (GGSIPU) • Natural Building Fellow at Geeli Mitti
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1.5px] bg-rust" />
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-rust font-semibold">
                The Founder's Journey
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-fern-950 font-normal leading-tight">
              From Corporate Urbanism to Living Earth Architecture
            </h2>

            <div className="p-6 rounded-2xl bg-rust/5 border-l-4 border-rust space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-rust font-bold block">
                Founding Creed
              </span>
              <p className="font-serif italic text-xl sm:text-2xl text-fern-950 leading-relaxed">
                "{FOUNDER_BIO.quote}"
              </p>
            </div>

            <div className="space-y-4 text-fern-800 text-sm sm:text-base font-sans font-light leading-relaxed">
              <p>
                Prior to founding Studio Shunya in 2020, Shreya Srivastava gained deep exposure within prominent conventional architecture practices, including <strong className="text-fern-950 font-normal">CP Kukreja Architects, SEEDS, ISA Projects Pvt Ltd</strong>, and the <strong className="text-fern-950 font-normal">Greater Noida Development Authority</strong>.
              </p>
              <p>
                Working on massive master-plans and high-rise developments made her acutely aware of the devastating environmental extraction behind concrete, cement factories, and industrial finishes.
              </p>
              <p>
                Her career defining turning point occurred at <strong className="text-fern-950 font-normal">Geeli Mitti</strong>, where she immersed herself in natural building physics — mastering mud adobe block making, rammed earth, slaked lime chemical carbonation, and bamboo structural joinery.
              </p>
              <p>
                Studio Shunya was born out of her unyielding conviction that natural buildings do not have to look primitive or fragile. Through rigorous architectural engineering, she has proven to building authorities and discerning private clients that living earth architecture represents the highest echelon of luxury.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/work"
                className="px-6 py-3 rounded-full bg-rust hover:bg-rust-600 text-creme-50 text-xs font-sans uppercase tracking-widest font-semibold transition-all shadow-md"
              >
                Explore Built Portfolio
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-full border border-terracotta text-fern-950 hover:bg-creme-200 text-xs font-sans uppercase tracking-widest font-semibold transition-all"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Comparative Science: Conventional RCC vs Studio Shunya Living Architecture */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-rust font-bold block mb-2">
              Building Physics &amp; Carbon Accounting
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-fern-950 font-normal">
              Living Earth vs Conventional Concrete Construction
            </h2>
            <p className="text-fern-800 text-sm sm:text-base mt-2 font-sans font-light">
              Why building with natural mud, lime, and stone is scientifically superior for human longevity and planetary balance.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-terracotta/25 bg-creme-100/90 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-terracotta/20 bg-creme-200/60 text-xs font-sans uppercase tracking-wider text-fern-900 font-semibold">
                  <th className="p-5 sm:p-6">Performance Dimension</th>
                  <th className="p-5 sm:p-6 text-fern-600">Conventional Concrete (RCC)</th>
                  <th className="p-5 sm:p-6 text-rust">Studio Shunya Living Earth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-terracotta/15 text-xs sm:text-sm font-sans">
                {comparativeMatrix.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <tr key={idx} className="hover:bg-creme-200/40 transition-colors">
                      <td className="p-5 sm:p-6 font-medium text-fern-950 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-sage-100 text-fern-800 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span>{item.metric}</span>
                      </td>
                      <td className="p-5 sm:p-6 text-fern-700">
                        {item.conventional}
                      </td>
                      <td className="p-5 sm:p-6 font-semibold text-fern-950 bg-rust/5">
                        <span className="flex items-center gap-2 text-rust">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>{item.shunya}</span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Studio Evolution Timeline (2020 to Present) */}
        <div className="mb-24 p-8 sm:p-14 rounded-3xl bg-creme-100/70 border border-terracotta/20 shadow-md">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-rust font-bold block mb-2">
              Historical Milestones
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-fern-950 font-normal">
              Chronicle of a Living Practice
            </h2>
          </div>

          <div className="relative border-l-2 border-terracotta/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Node Stamp */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-6 h-6 rounded-full bg-creme-50 border-2 border-rust flex items-center justify-center group-hover:scale-125 group-hover:bg-rust transition-all">
                  <div className="w-2 h-2 rounded-full bg-rust group-hover:bg-creme-50" />
                </div>

                <span className="text-xs font-mono font-bold text-rust tracking-widest block mb-1">
                  {m.year}
                </span>
                <h3 className="font-serif text-2xl text-fern-950 font-medium mb-1">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-fern-800 font-sans font-light leading-relaxed max-w-2xl">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Accreditations & Press Features */}
        <div className="mb-24">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-rust font-bold block mb-2">
              National Recognition
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-fern-950">
              Published &amp; Celebrated In
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRESS_FEATURES.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-creme-100/90 border border-terracotta/20 flex flex-col justify-between shadow-sm hover:shadow-md transition-all space-y-4"
              >
                <div>
                  <span className="px-3 py-1 rounded-full bg-rust/10 text-rust text-[10px] font-sans uppercase tracking-widest font-bold inline-block mb-3">
                    {item.badge}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-fern-950 tracking-wider">
                    {item.publication}
                  </h4>
                  <p className="font-serif italic text-sm text-fern-800 mt-2 leading-relaxed">
                    “{item.quote}”
                  </p>
                </div>
                <span className="text-[11px] font-sans uppercase tracking-widest text-fern-600 block pt-3 border-t border-terracotta/15">
                  Editorial Feature
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="p-8 sm:p-14 rounded-3xl bg-fern-950 text-creme-50 border border-sage-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-terracotta-300 font-bold block">
              Experience In Person
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-creme-50">
              Visit the Greater Noida Experience Sanctuary
            </h3>
            <p className="text-creme-300 text-sm font-sans font-light leading-relaxed">
              Step inside our living zero-energy home-office. Touch the cool Araish lime finishes, inspect our inverted clay pot ceilings, and consult with Ar. Shreya Srivastava.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-rust hover:bg-rust-600 text-creme-50 text-xs font-sans uppercase tracking-widest font-semibold transition-all shadow-lg hover:scale-105 text-center flex items-center justify-center gap-2"
            >
              <span>Schedule Studio Visit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/work"
              className="w-full sm:w-auto px-6 py-4 rounded-full border border-creme/20 hover:bg-creme/10 text-creme-200 text-xs font-sans uppercase tracking-widest font-semibold transition-all text-center"
            >
              <span>View Portfolio</span>
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
}