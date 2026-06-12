import React from 'react';
import { Terminal, Shield } from 'lucide-react';
import { useDESStore } from '../../store/desStore.js';

export function Header() {
  const { result, mode } = useDESStore();

  return (
    <header className="sticky top-0 z-50 w-full bg-brutal-yellow border-b-4 border-black px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between select-none shadow-[0_4px_0_#000]">
      {/* Title / Logo */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="hidden sm:flex w-10 h-10 bg-black items-center justify-center border-2 border-black text-brutal-yellow shadow-brutal-sm shrink-0">
          <Terminal className="w-6 h-6 stroke-[3px]" />
        </div>
        <div>
          <h1 className="font-syne font-black text-lg sm:text-xl md:text-2xl tracking-tighter leading-none text-black">
            DES_SIMULATOR
          </h1>
          <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest font-black text-black/50 block mt-0.5">
            Digital Encryption Standard
          </span>
        </div>
      </div>

      {/* Info Status badges */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Watermark badge */}
        <div className="hidden lg:flex flex-col text-right font-mono text-[9px] uppercase tracking-tighter text-black/60 border-r-2 border-black/20 pr-4 mr-2 leading-tight">
          <span className="font-black text-black">Imam Rizki Saputra - DES 2026</span>
          <span>IF UNIBBA - Kriptografi</span>
        </div>

        {/* Mode badge */}
        <div className={`
          hidden md:flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 border-3 border-black text-[10px] sm:text-xs font-grotesk font-black uppercase shadow-brutal-sm
          ${mode === 'encrypt' ? 'bg-brutal-purple' : 'bg-brutal-coral'}
        `}>
          <Shield className="w-3.5 h-3.5 stroke-[3px]" />
          Mode: {mode === 'encrypt' ? 'ENKRIPSI' : 'DEKRIPSI'}
        </div>

        {/* Status indicator */}
        <div className={`
          flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 border-3 border-black text-[9px] sm:text-xs font-grotesk font-black uppercase shadow-brutal-sm shrink-0
          ${result ? 'bg-brutal-green text-black' : 'bg-brutal-cream text-black/40'}
        `}>
          <span className={`w-2 h-2 border-2 border-black ${result ? 'bg-black animate-pulse' : 'bg-transparent'}`}></span>
          {result ? 'AKTIF' : 'SIAP'}
        </div>
      </div>
    </header>
  );
}

export default Header;
