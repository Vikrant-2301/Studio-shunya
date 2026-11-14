"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PRESS_FEATURES } from "@/data/studioData";

export default function PressAndAwards() {
  return (
    <section id="press" className="py-24 sm:py-32 relative bg-[#F4EFE6] overflow-hidden">
      {/* Plaster Texture */}
      <div className="absolute inset-0 pointer-events-none plaster-texture opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1.5px] bg-terracotta" />
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-terracotta font-semibold">
              Media Publications &amp; Acclaim
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-fern-900 font-normal">
            Featured In <span className="font-serif italic text-rust">National</span> Press
          </h2>

          <p className="mt-4 text-fern-800 text-base sm:text-lg leading-relaxed font-sans">
            Leading architectural and sustainability publications have chronicled Studio Shunya’s pioneering work in load-bearing earth, inverted pot slabs, and lime plaster renaissance.
          </p>
        </div>

        {/* Press Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRESS_FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.publication}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group rounded-3xl bg-creme-100/90 border border-terracotta/20 hover:border-rust/40 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Magazine Photo Thumbnail */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 border border-terracotta/15 bg-fern-950/10">
                  <Image
                    src={feature.image}
                    alt={feature.publication}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fern-950/60 to-transparent" />

                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-rust text-creme-50 text-[10px] font-sans uppercase tracking-widest font-semibold shadow">
                    {feature.badge}
                  </span>
                </div>

                <span className="font-serif text-xs uppercase tracking-[0.2em] text-rust font-bold block mb-1">
                  {feature.logoText}
                </span>

                <h3 className="font-serif text-lg text-fern-900 leading-snug group-hover:text-rust transition-colors mb-3">
                  {feature.title}
                </h3>

                <p className="text-xs text-fern-700 italic font-serif leading-relaxed">
                  "{feature.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-terracotta/15 flex items-center justify-between text-xs text-fern-800 font-sans">
                <span className="uppercase tracking-wider text-[10px]">Read Full Story</span>
                <ExternalLink className="w-3.5 h-3.5 text-rust group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
