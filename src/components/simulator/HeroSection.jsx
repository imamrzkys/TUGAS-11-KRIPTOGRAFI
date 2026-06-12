import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Neubrutalist Hero Header with rotating typewriter animation and interactive badges.
 */
export function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Array judul yang akan berganti-ganti (lebih pendek untuk mobile)
  const phrases = [
    'SIMULATOR',
    'ALGORITHM',
    'ENCRYPTION',
    'CRYPTOGRAPHY',
    'FEISTEL NET',
    'S-BOX SYSTEM'
  ];
  
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const typingSpeed = isDeleting ? 50 : 100; // Lebih cepat saat hapus
    const pauseBeforeDelete = 2000; // Pause 2 detik sebelum hapus
    const pauseBeforeType = 500; // Pause 0.5 detik sebelum ketik baru
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Mode TYPING
        if (displayedText.length < currentPhrase.length) {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        } else {
          // Selesai ngetik, pause dulu baru mulai hapus
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        }
      } else {
        // Mode DELETING
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Selesai hapus, pindah ke judul berikutnya
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? typingSpeed : (displayedText.length === currentPhrase.length ? pauseBeforeDelete : typingSpeed));
    
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentPhraseIndex]);

  return (
    <section className="relative w-full py-8 md:py-12 border-b-4 border-black bg-brutal-cream overflow-hidden px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12">
      {/* Title */}
      <div className="flex-1 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="font-syne font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tighter uppercase text-black select-none"
        >
          DES<br />
          <span className="inline-block min-h-[1.1em]">
            {displayedText}
            <span className="inline-block w-1 h-[0.9em] bg-black ml-1 animate-pulse align-middle"></span>
          </span>
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
      <div className="flex flex-wrap gap-4 items-center md:flex-col md:items-end flex-shrink-0">
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
