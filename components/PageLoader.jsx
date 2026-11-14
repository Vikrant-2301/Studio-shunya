"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth progress counter from 0 to 100
    const start = Date.now();
    const duration = 1600; // 1.6s

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const current = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          onComplete?.();
        }, 300);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.1,
              ease: [0.65, 0.05, 0, 1], // Mejuma custom navEase
            },
          }}
          className="fixed inset-0 z-[100] flex flex-col justify-between p-6 sm:p-12 pointer-events-none select-none bg-[#232B20] text-[#EFE9DB]"
        >
          {/* Subtle noise grain */}
          <div className="absolute inset-0 pointer-events-none opacity-20 plaster-texture" />

          {/* Top Bar inside Loader */}
          <div className="relative z-10 flex items-center justify-between text-xs font-sans tracking-[0.25em] uppercase text-[#EFE9DB]/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A04328] animate-ping" />
              <span>Studio Shunya • India</span>
            </div>
            <div className="font-mono text-xs text-[#EFE9DB]/80">
              {progress.toString().padStart(2, "0")}%
            </div>
          </div>

          {/* Center: Big Staggered Wordmark (Mejuma Style) */}
          <div className="relative z-10 my-auto text-center overflow-hidden py-4 flex flex-col items-center">
            {/* Studio Shunya Official Logo Emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4"
            >
              <Image
                src="/images/portfolio/logo.png"
                alt="Studio Shunya"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center items-center"
            >
              <h1 className="font-serif text-[18vw] sm:text-[16vw] md:text-[14vw] font-normal leading-none tracking-tight text-[#FAF7F2] lowercase select-none">
                {"shunya".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1 + i * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.35em] text-[#BD6B46] mt-4"
            >
              Earth • Lime • Stone • Zero Energy Architecture
            </motion.p>
          </div>

          {/* Bottom Bar: Loading Line */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-sans text-[#EFE9DB]/60">
            <span>To give you everything, without affecting anything.</span>
            <div className="w-28 sm:w-48 h-[1px] bg-[#EFE9DB]/20 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#A04328]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
