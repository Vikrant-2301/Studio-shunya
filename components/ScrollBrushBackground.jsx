"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollBrushBackground() {
  const containerRef = useRef(null);

  // Track global page scroll progress (0 to 1)
  const { scrollYProgress } = useScroll();

  // Smooth out scroll value with physics spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001
  });

  // Brush 1: Terracotta Upper-Right Wash
  const brush1X = useTransform(smoothProgress, [0, 0.3], [120, 0]);
  const brush1Opacity = useTransform(smoothProgress, [0, 0.15, 0.4], [0.35, 0.7, 0.4]);
  const brush1Scale = useTransform(smoothProgress, [0, 0.3], [0.85, 1.15]);
  const brush1Rotate = useTransform(smoothProgress, [0, 0.3], [-4, 6]);

  // Brush 2: Sage Green Mid-Left Wash
  const brush2X = useTransform(smoothProgress, [0.15, 0.55], [-140, 20]);
  const brush2Opacity = useTransform(smoothProgress, [0.15, 0.35, 0.6], [0, 0.65, 0.3]);
  const brush2Scale = useTransform(smoothProgress, [0.15, 0.55], [0.8, 1.2]);
  const brush2Rotate = useTransform(smoothProgress, [0.15, 0.55], [6, -5]);

  // Brush 3: Clay Ochre / Sand Center Sweeping Stroke
  const brush3X = useTransform(smoothProgress, [0.35, 0.75], [100, -40]);
  const brush3Opacity = useTransform(smoothProgress, [0.35, 0.55, 0.8], [0, 0.55, 0.2]);
  const brush3Scale = useTransform(smoothProgress, [0.35, 0.75], [0.75, 1.25]);

  // Brush 4: Deep Fern Lower Wash
  const brush4Y = useTransform(smoothProgress, [0.55, 0.95], [100, -20]);
  const brush4Opacity = useTransform(smoothProgress, [0.55, 0.8, 1], [0, 0.6, 0.35]);
  const brush4Scale = useTransform(smoothProgress, [0.55, 0.95], [0.85, 1.15]);

  // Brush 5: Araish Rust Footer Arc
  const brush5Opacity = useTransform(smoothProgress, [0.75, 1], [0, 0.65]);
  const brush5Scale = useTransform(smoothProgress, [0.75, 1], [0.9, 1.1]);

  return (
    <>
      {/* 1. Filmic & Earthen Plaster Subtle Noise Overlay across the entire website */}
      <div 
        className="fixed inset-0 pointer-events-none z-30 select-none overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          opacity: 0.05,
          mixBlendMode: "multiply"
        }}
        aria-hidden="true"
      />

      {/* 2. Scroll-Driven Organic Earthen Brush-In Background Canvases */}
      <div 
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* SVG Filter for Distressed Rough Brush / Plaster Edges */}
        <svg className="hidden">
          <defs>
            <filter id="brushRoughEdge" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="28" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="brushSoftBleed" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="40" xChannelSelector="R" yChannelSelector="G" />
              <feGaussianBlur stdDeviation="12" />
            </filter>
          </defs>
        </svg>

        {/* Brush Stroke 1: Terracotta Wash (Top Right to Center) */}
        <motion.div
          style={{
            x: brush1X,
            opacity: brush1Opacity,
            scale: brush1Scale,
            rotate: brush1Rotate,
          }}
          className="absolute -top-24 -right-28 w-[550px] sm:w-[750px] h-[400px] sm:h-[500px]"
        >
          <svg viewBox="0 0 700 450" className="w-full h-full fill-terracotta/25 filter blur-2xl sm:blur-3xl" style={{ filter: "url(#brushRoughEdge) blur(36px)" }}>
            <path d="M 50,180 Q 220,60 480,120 T 680,240 Q 560,380 320,360 T 50,180 Z" />
          </svg>
        </motion.div>

        {/* Brush Stroke 2: Sage Green Earth Wash (Mid-Left) */}
        <motion.div
          style={{
            x: brush2X,
            opacity: brush2Opacity,
            scale: brush2Scale,
            rotate: brush2Rotate,
          }}
          className="absolute top-[32%] -left-36 w-[500px] sm:w-[700px] h-[380px] sm:h-[480px]"
        >
          <svg viewBox="0 0 650 420" className="w-full h-full fill-sage-500/20 filter blur-2xl sm:blur-3xl" style={{ filter: "url(#brushRoughEdge) blur(32px)" }}>
            <path d="M 60,160 Q 250,40 520,110 T 630,280 Q 480,390 260,350 T 60,160 Z" />
          </svg>
        </motion.div>

        {/* Brush Stroke 3: Clay Ochre / Sand Sweeping Stroke (Mid-Right) */}
        <motion.div
          style={{
            x: brush3X,
            opacity: brush3Opacity,
            scale: brush3Scale,
          }}
          className="absolute top-[58%] -right-40 w-[600px] sm:w-[800px] h-[400px] sm:h-[520px]"
        >
          <svg viewBox="0 0 750 450" className="w-full h-full fill-[#D4C7AA]/35 filter blur-2xl sm:blur-3xl" style={{ filter: "url(#brushRoughEdge) blur(40px)" }}>
            <path d="M 80,220 Q 300,90 580,140 T 730,290 Q 560,420 300,380 T 80,220 Z" />
          </svg>
        </motion.div>

        {/* Brush Stroke 4: Deep Fern Plaster Wash (Lower Section) */}
        <motion.div
          style={{
            y: brush4Y,
            opacity: brush4Opacity,
            scale: brush4Scale,
          }}
          className="absolute top-[75%] left-[8%] w-[600px] sm:w-[850px] h-[420px] sm:h-[550px]"
        >
          <svg viewBox="0 0 800 480" className="w-full h-full fill-fern-600/15 filter blur-3xl" style={{ filter: "url(#brushSoftBleed)" }}>
            <path d="M 70,210 Q 340,70 640,150 T 780,310 Q 580,440 280,390 T 70,210 Z" />
          </svg>
        </motion.div>

        {/* Brush Stroke 5: Araish Rust Bloom (Bottom / Footer Boundary) */}
        <motion.div
          style={{
            opacity: brush5Opacity,
            scale: brush5Scale,
          }}
          className="absolute -bottom-36 right-0 w-[650px] sm:w-[900px] h-[450px]"
        >
          <svg viewBox="0 0 850 400" className="w-full h-full fill-rust/20 filter blur-3xl" style={{ filter: "url(#brushRoughEdge) blur(45px)" }}>
            <path d="M 40,240 Q 380,80 720,180 T 840,320 Q 620,400 350,380 T 40,240 Z" />
          </svg>
        </motion.div>
      </div>
    </>
  );
}