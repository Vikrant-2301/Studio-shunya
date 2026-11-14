"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FOUNDER_BIO, PRESS_FEATURES } from "@/data/studioData";

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="min-h-[100dvh] py-16 sm:py-20 flex flex-col justify-center relative bg-[#FAF7F2] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none plaster-texture opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Portrait & Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden border-2 border-terracotta/30 shadow-2xl bg-fern-950/15">
              <Image
                src={FOUNDER_BIO.image}
                alt="Ar. Shreya Srivastava - Founder Studio Shunya"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fern-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-creme-100">
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-terracotta-300 font-semibold block mb-0.5">
                  Principal Architect
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-creme-50">
                  {FOUNDER_BIO.name}
                </h3>
                <p className="text-xs text-creme-300 font-sans mt-0.5">
                  {FOUNDER_BIO.credentials}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Quote & Press Accolades */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-[1.5px] bg-rust" />
                <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-rust font-semibold">
                  Founder &amp; Vision
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-fern-950 font-normal leading-tight">
                Luxury in <span className="font-serif italic text-terracotta">Sustainability</span>
              </h2>
            </div>

            <blockquote className="p-4 rounded-2xl bg-creme-200/80 border-l-4 border-rust font-serif text-lg sm:text-xl text-fern-900 italic leading-snug">
              “{FOUNDER_BIO.quote}”
            </blockquote>

            <p className="text-fern-800 text-xs sm:text-sm leading-relaxed font-sans font-light">
              Having trained at conventional practices such as CP Kukreja, SEEDS, and the Greater Noida Authority, Ar. Shreya immersed herself at Geeli Mitti in natural building physics. Today, Studio Shunya boldly reforms the perception of mud architecture across India.
            </p>

            <div className="pt-1">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest text-rust hover:text-rust-700 font-semibold transition-colors"
              >
                <span>Read Full Biography &amp; Studio Monograph</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Press Strip (Architectural Digest, Better India, India Today) */}
            <div className="pt-4 border-t border-terracotta/20">
              <span className="text-[10px] uppercase tracking-widest text-rust font-bold block mb-3">
                Featured &amp; Published Nationally
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {PRESS_FEATURES.map((item) => (
                  <div
                    key={item.publication}
                    className="p-3 rounded-xl bg-creme-100 border border-terracotta/15 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-serif uppercase tracking-wider text-fern-950 font-bold block truncate">
                        {item.publication}
                      </span>
                      <p className="text-[10px] text-terracotta-700 italic truncate mt-0.5">
                        {item.badge}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
