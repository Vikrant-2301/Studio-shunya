"use client";

import { motion } from "framer-motion";

/**
 * BrushAccent: An authentic hand-painted brush stroke SVG accent.
 * Can be used as an underline, divider, or decorative wash behind text.
 */
export default function BrushAccent({ 
  className = "text-rust", 
  width = "100%", 
  height = "16", 
  variant = "stroke", 
  animate = true 
}) {
  if (variant === "stroke") {
    return (
      <svg
        viewBox="0 0 320 24"
        fill="currentColor"
        className={`overflow-visible pointer-events-none ${className}`}
        style={{ width, height: `${height}px` }}
        aria-hidden="true"
      >
        <motion.path
          initial={animate ? { pathLength: 0, opacity: 0 } : false}
          whileInView={animate ? { pathLength: 1, opacity: 0.9 } : false}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          d="M 4,14 C 45,9 95,16 142,12 C 188,8 240,15 285,11 C 300,9.5 316,13 318,14 C 295,17 240,19 180,18 C 120,17 60,19 4,14 Z"
        />
      </svg>
    );
  }

  if (variant === "wide") {
    return (
      <svg
        viewBox="0 0 450 36"
        fill="currentColor"
        className={`overflow-visible pointer-events-none ${className}`}
        style={{ width, height: `${height}px` }}
        aria-hidden="true"
      >
        <motion.path
          initial={animate ? { scaleX: 0, opacity: 0 } : false}
          whileInView={animate ? { scaleX: 1, opacity: 0.85 } : false}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          style={{ originX: 0 }}
          d="M 6,20 C 70,8 160,26 240,15 C 320,5 380,24 444,18 C 420,28 350,30 260,28 C 170,26 90,32 6,20 Z"
        />
      </svg>
    );
  }

  // Soft wash splash variant
  return (
    <svg
      viewBox="0 0 200 60"
      fill="currentColor"
      className={`overflow-visible pointer-events-none opacity-20 ${className}`}
      style={{ width, height: `${height}px` }}
      aria-hidden="true"
    >
      <path d="M 12,32 C 30,12 80,18 120,14 C 160,10 185,28 190,36 C 180,50 140,54 90,48 C 40,42 20,48 12,32 Z" />
    </svg>
  );
}