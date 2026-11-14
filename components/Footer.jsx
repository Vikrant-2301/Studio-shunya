"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, MapPin, Phone, Mail, MessageSquare, Instagram } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-fern-950 text-creme-100 pt-20 pb-12 relative overflow-hidden border-t border-terracotta/20 z-10">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rust/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Brand Banner with Official Logo & Palette Swatches */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-creme/10">
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Official Studio Shunya Logo */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl bg-creme-50/5 border border-creme/15 p-2 flex items-center justify-center shadow-inner">
              <Image
                src="/images/portfolio/logo.png"
                alt="Studio Shunya Official Logo"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="font-serif text-2xl sm:text-3xl font-medium text-creme-100 tracking-wider uppercase">
                  Studio Shunya
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-rust/30 text-terracotta-200 text-[10px] font-sans tracking-widest uppercase border border-rust/40">
                  Zero Carbon
                </span>
              </div>
              <p className="font-serif italic text-creme-300 text-xs sm:text-sm max-w-md">
                “{STUDIO_INFO.motto}”
              </p>
            </div>
          </div>

          {/* Color Palette Tribute Bar */}
          <div className="space-y-2">
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-creme/50 block">
              Vernacular Material Palette
            </span>
            <div className="flex items-center gap-2">
              <div className="group relative">
                <div className="w-8 h-8 rounded-full bg-[#A04328] border border-creme/20 shadow" />
                <span className="absolute bottom-10 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-fern-900 text-creme text-[9px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Rust
                </span>
              </div>
              <div className="group relative">
                <div className="w-8 h-8 rounded-full bg-[#CBCAC2] border border-creme/20 shadow" />
                <span className="absolute bottom-10 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-fern-900 text-creme text-[9px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Grey
                </span>
              </div>
              <div className="group relative">
                <div className="w-8 h-8 rounded-full bg-[#BD6B46] border border-creme/20 shadow" />
                <span className="absolute bottom-10 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-fern-900 text-creme text-[9px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Terracotta
                </span>
              </div>
              <div className="group relative">
                <div className="w-8 h-8 rounded-full bg-[#97B29F] border border-creme/20 shadow" />
                <span className="absolute bottom-10 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-fern-900 text-creme text-[9px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Sage Green
                </span>
              </div>
              <div className="group relative">
                <div className="w-8 h-8 rounded-full bg-[#51624B] border border-creme/20 shadow" />
                <span className="absolute bottom-10 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-fern-900 text-creme text-[9px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Fern Green
                </span>
              </div>
              <div className="group relative">
                <div className="w-8 h-8 rounded-full bg-[#EFE9DB] border border-creme/20 shadow" />
                <span className="absolute bottom-10 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-fern-900 text-creme text-[9px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Creme
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Links Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-creme/10 text-xs font-sans">
          {/* Col 1 */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-terracotta-300 font-bold block">
              Architectural Works
            </span>
            <ul className="space-y-2 text-creme-300">
              <li><Link href="/projects/studio-shunya-office" className="hover:text-creme transition-colors">Studio Shunya Office (Gr. Noida)</Link></li>
              <li><Link href="/projects/shivaray-farms" className="hover:text-creme transition-colors">Shivaray Farms (Chittorgarh)</Link></li>
              <li><Link href="/projects/zazen-farms" className="hover:text-creme transition-colors">Zazen Farms (Beawar)</Link></li>
              <li><Link href="/projects/poetry-in-stone" className="hover:text-creme transition-colors">Poetry in Stone (Gr. Noida)</Link></li>
              <li><Link href="/projects/mud-and-meadows" className="hover:text-creme transition-colors">Mud &amp; Meadows (Jamshedpur)</Link></li>
              <li><Link href="/work" className="text-rust-300 hover:text-rust-200 transition-colors pt-1 block font-medium">→ View All Built Works</Link></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-sage-400 font-bold block">
              Practice Areas
            </span>
            <ul className="space-y-2 text-creme-300">
              <li><Link href="/services" className="hover:text-creme transition-colors">Architecture &amp; Interior Design</Link></li>
              <li><Link href="/services" className="hover:text-creme transition-colors">PMC for Natural Buildings</Link></li>
              <li><Link href="/lime-finishes" className="hover:text-creme transition-colors">Lime Plaster &amp; Araish Craft</Link></li>
              <li><Link href="/services" className="hover:text-creme transition-colors">Turn-Key Earth Construction</Link></li>
              <li><Link href="/#science" className="hover:text-creme transition-colors">Passive Bioclimatic Audits</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-rust-300 font-bold block">
              Studio Philosophy
            </span>
            <ul className="space-y-2 text-creme-300">
              <li><Link href="/about" className="hover:text-creme transition-colors">The Meaning of Shunya (0)</Link></li>
              <li><Link href="/about" className="hover:text-creme transition-colors">Ar. Shreya Srivastava Monograph</Link></li>
              <li><Link href="/#materials" className="hover:text-creme transition-colors">Tactile Material Board</Link></li>
              <li><Link href="/features" className="hover:text-creme transition-colors">Architectural Digest Feature</Link></li>
              <li><Link href="/#calculator" className="hover:text-creme transition-colors">Carbon Savings Calculator</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-creme font-bold block">
              Studio Locations &amp; Connect
            </span>
            <div className="text-creme-300 space-y-2 leading-relaxed">
              <div>
                <span className="text-[10px] text-terracotta-300 uppercase tracking-wider block font-semibold">Head Office</span>
                <p>{STUDIO_INFO.officeAddress}</p>
              </div>

              <div>
                <span className="text-[10px] text-sage-300 uppercase tracking-wider block font-semibold">Experience Sanctuary</span>
                <p>D-379, Sector 3, Greater Noida, Delhi NCR</p>
              </div>

              <div className="pt-1 flex items-center gap-3">
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="text-rust-300 hover:text-rust-200 transition-colors flex items-center gap-1 font-mono"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{STUDIO_INFO.phone}</span>
                </a>
              </div>

              <div>
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="text-sage-300 hover:text-sage-200 transition-colors flex items-center gap-1 break-all"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>{STUDIO_INFO.email}</span>
                </a>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-rust hover:bg-rust-600 text-creme-50 text-[11px] font-sans uppercase tracking-widest font-semibold transition-all shadow-md"
                >
                  <span>Initiate Commission</span>
                  <span>→</span>
                </Link>
                <a
                  href="https://wa.me/919211620907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
                  title="WhatsApp Direct"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-creme/50">
          <p>
            © {new Date().getFullYear()} Studio Shunya. Crafted for regenerative ecological architecture.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-creme transition-colors py-1 px-3 rounded-full border border-creme/10 hover:border-creme/30"
          >
            <span>Ascend to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-rust" />
          </button>
        </div>
      </div>
    </footer>
  );
}