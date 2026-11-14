"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, MessageSquare, Phone } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Works", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Lime Craft", href: "/lime-finishes" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6 px-4 sm:px-8 transition-all duration-500 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Brand Logo in Floating Capsule */}
          <Link
            href="/"
            className={`pointer-events-auto group flex items-center gap-3 px-3.5 py-1.5 rounded-full transition-all duration-500 ${
              scrolled
                ? "bg-[#FAF7F2]/90 backdrop-blur-xl border border-terracotta/20 shadow-md text-fern-950"
                : "bg-black/35 backdrop-blur-md border border-white/20 text-[#FAF7F2] hover:bg-black/50"
            }`}
          >
            {/* Official Studio Shunya Logo */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image
                src="/images/portfolio/logo.png"
                alt="Studio Shunya Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-medium tracking-wider uppercase leading-none">
                Studio Shunya
              </span>
              <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.25em] text-rust uppercase mt-0.5 font-medium">
                Living Architecture
              </span>
            </div>
          </Link>

          {/* Center: Floating Modern Capsule Menu (Desktop) */}
          <nav
            onMouseLeave={() => setHoveredNav(null)}
            className={`pointer-events-auto hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-500 ${
              scrolled
                ? "bg-[#FAF7F2]/90 backdrop-blur-xl border border-terracotta/20 shadow-md text-fern-900"
                : "bg-black/35 backdrop-blur-md border border-white/20 text-[#FAF7F2]"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredNav(item.name)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-[0.18em] transition-colors duration-200 z-10 font-medium ${
                  hoveredNav === item.name
                    ? scrolled
                      ? "text-rust"
                      : "text-white"
                    : scrolled
                    ? "text-fern-800 hover:text-fern-950"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {hoveredNav === item.name && (
                  <motion.div
                    layoutId="navbar-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className={`absolute inset-0 rounded-full z-[-1] ${
                      scrolled ? "bg-terracotta/10" : "bg-white/15"
                    }`}
                  />
                )}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right Action Capsule */}
          <div className="pointer-events-auto flex items-center gap-2.5">
            {/* WhatsApp Quick Connect Pill */}
            <a
              href="https://wa.me/919211620907?text=Hello%20Studio%20Shunya,%20I%20would%20like%20to%20discuss%20an%20architecture%20project."
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-sans uppercase tracking-wider transition-all duration-300 ${
                scrolled
                  ? "bg-[#FAF7F2]/90 backdrop-blur-xl border border-terracotta/20 text-fern-900 hover:text-rust shadow-sm hover:border-rust"
                  : "bg-black/35 backdrop-blur-md border border-white/20 text-white/90 hover:text-white hover:bg-black/50"
              }`}
              title="WhatsApp Direct Connect"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="text-[11px] font-medium tracking-widest">WhatsApp</span>
            </a>

            {/* Initiate Project Button */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rust hover:bg-rust-600 text-creme-50 text-xs font-sans uppercase tracking-widest font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <span>Initiate</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Burger Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2.5 rounded-full border transition-all lg:hidden ${
                scrolled
                  ? "bg-[#FAF7F2]/90 backdrop-blur-xl border-terracotta/20 text-fern-900 hover:border-rust"
                  : "bg-black/35 backdrop-blur-md border-white/20 text-white hover:bg-black/50"
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-[#232B20]/95 text-[#FAF7F2] p-6 sm:p-12 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/15">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 shrink-0">
                  <Image
                    src="/images/portfolio/logo.png"
                    alt="Studio Shunya Logo"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl tracking-wider uppercase text-white leading-none">
                    Studio Shunya
                  </span>
                  <span className="font-sans text-[8px] tracking-[0.25em] text-rust-300 uppercase mt-0.5">
                    Living Architecture
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2.5 rounded-full border border-white/20 text-white hover:border-rust transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 my-auto py-8">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block font-serif text-3xl sm:text-4xl text-white/90 hover:text-rust transition-colors py-2 border-b border-white/10"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/15 space-y-4">
              <div className="text-xs text-white/70 leading-relaxed font-sans">
                <p className="font-semibold text-white">{STUDIO_INFO.officeAddress}</p>
                <p className="mt-1 text-rust-300">Direct: {STUDIO_INFO.phone}</p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 py-3.5 rounded-full bg-rust text-creme-50 text-center text-xs font-sans uppercase tracking-widest font-semibold"
                >
                  Initiate Project
                </Link>
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="p-3.5 rounded-full border border-rust text-rust"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
