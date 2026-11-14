import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PRESS_FEATURES } from "@/data/studioData";

export const metadata = {
  title: "Media Features & Press | Studio Shunya Architecture",
  description: "Featured in Architectural Digest, The Better India, India Today, and Buildofy. Read press coverage of Studio Shunya's earth and lime architecture.",
};

export default function FeaturesPage() {
  return (
    <div className="pt-32 pb-24 relative bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-fern-700 hover:text-rust transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>

        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1.5px] bg-rust" />
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-rust font-semibold">
              Media &amp; Press
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-fern-900 leading-tight">
            Featured at <span className="font-serif italic text-rust">National</span> Media
          </h1>

          <p className="mt-4 text-fern-800 text-lg leading-relaxed font-sans">
            How architectural critics and design editors describe Studio Shunya’s zero-energy mud and lime buildings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {PRESS_FEATURES.map((item) => (
            <div
              key={item.publication}
              className="p-8 sm:p-10 rounded-3xl bg-creme-100 border border-terracotta/25 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-terracotta/15 bg-fern-950/10">
                  <Image src={item.image} alt={item.publication} fill className="object-cover" />
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-rust text-creme-50 text-xs font-sans uppercase tracking-widest font-semibold">
                    {item.badge}
                  </span>
                </div>

                <span className="text-xs font-serif uppercase tracking-[0.2em] text-rust font-bold block">
                  {item.logoText}
                </span>

                <h3 className="font-serif text-2xl text-fern-900 leading-snug">
                  {item.title}
                </h3>

                <blockquote className="text-fern-800 text-sm italic font-serif leading-relaxed">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-terracotta/15 text-xs text-fern-600 font-sans flex items-center justify-between">
                <span>Published Architectural Editorial</span>
                <span className="text-rust font-semibold uppercase tracking-wider">Archived Press</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
