import React from 'react';
import { motion } from 'framer-motion';

/**
 * Neubrutalist Hero Header with snappy entrance animations and hover interactive badges.
 */
export function HeroSection() {
  return (
    <section className="relative w-full py-8 md:py-12 border-b-4 border-black bg-brutal-cream overflow-hidden px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
      {/* Title */}
      <div className="flex-1">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="font-syne font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tighter uppercase text-black select-none"
        >
          DES<br />SIMULATOR
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          className="font-grotesk font-extrabold text-sm sm:text-lg text-black/70 mt-3 max-w-xl uppercase"
        >
          Simulator Interaktif Algoritma DES — Visualisasi Key Schedule, Jaringan Feistel & Substitusi S-Box.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
          className="font-mono text-[10px] text-black/50 mt-2 uppercase tracking-widest"
        >
          Imam Rizki Saputra · Teknik Informatika UNIBBA · Kriptografi 2026
        </motion.div>
      </div>

      {/* Badges Column */}
      <div className="flex flex-wrap gap-4 items-center">
        <motion.div
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: -2 }}
          whileHover={{ scale: 1.1, rotate: 0, y: -4 }}
          transition={{ type: 'spring', stiffness: 220, damping: 10 }}
          className="bg-brutal-yellow text-black border-3 border-black px-4 py-2 font-grotesk font-black text-sm uppercase shadow-brutal-sm select-none cursor-pointer"
          style={{ borderRadius: '0px' }}
        >
          16 ROUNDS
        </motion.div>
        
        <motion.div
          initial={{ scale: 0, rotate: 15 }}
          animate={{ scale: 1, rotate: 3 }}
          whileHover={{ scale: 1.1, rotate: 0, y: -4 }}
          transition={{ type: 'spring', stiffness: 220, damping: 10, delay: 0.06 }}
          className="bg-brutal-purple text-black border-3 border-black px-4 py-2 font-grotesk font-black text-sm uppercase shadow-brutal-sm select-none cursor-pointer"
          style={{ borderRadius: '0px' }}
        >
          64-BIT BLOCK
        </motion.div>

        <motion.div
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: -1 }}
          whileHover={{ scale: 1.1, rotate: 0, y: -4 }}
          transition={{ type: 'spring', stiffness: 220, damping: 10, delay: 0.12 }}
          className="bg-brutal-orange text-black border-3 border-black px-4 py-2 font-grotesk font-black text-sm uppercase shadow-brutal-sm select-none cursor-pointer"
          style={{ borderRadius: '0px' }}
        >
          56-BIT KEY
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
