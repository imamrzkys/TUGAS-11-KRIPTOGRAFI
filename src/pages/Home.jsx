import React, { useEffect, useState } from 'react';
import { useDESStore } from '../store/desStore.js';
import { Header } from '../components/layout/Header.jsx';
import { FooterActions } from '../components/layout/FooterActions.jsx';
import { Sidebar } from '../components/layout/Sidebar.jsx';
import { StickyTabs } from '../components/common/StickyTabs.jsx';
import { HeroSection } from '../components/simulator/HeroSection.jsx';
import { InputPanel } from '../components/simulator/InputPanel.jsx';
import { KeySchedule } from '../components/simulator/KeySchedule.jsx';
import { InitialPermutation } from '../components/simulator/InitialPermutation.jsx';
import { FeistelRounds } from '../components/simulator/FeistelRounds.jsx';
import { InversePermutation } from '../components/simulator/InversePermutation.jsx';
import { FinalCipher } from '../components/simulator/FinalCipher.jsx';
import { ProcessingEngine } from '../components/simulator/ProcessingEngine.jsx';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Home() {
  const { runSimulation, result, isSimulating } = useDESStore();
  const [activeSection, setActiveSection] = useState('input');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Run initial simulation on mount to display initial states
  useEffect(() => {
    runSimulation();
  }, [runSimulation]);

  // Handle scroll spy to highlight active section in sidebar
  useEffect(() => {
    const handleScroll = () => {
      // Back to top button visibility
      setShowScrollTop(window.scrollY > 400);

      const sections = ['input', 'keysched', 'ip', 'rounds', 'ipinv', 'result'];
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100; // Offset for sticky headers
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-brutal-cream pb-24 md:pb-8">
      {/* Simulation engine loading animation */}
      <ProcessingEngine />

      {/* App Header */}
      <Header />

      {/* Main Container */}
      <div className="flex-1 flex relative">
        
        {/* DESKTOP FIXED SIDEBAR NAVIGATION */}
        <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick} />

        {/* MAIN VISUAL WORKPLACE CONTAINER */}
        <main className="flex-1 min-w-0">
          
          {/* Hero Section */}
          <HeroSection />

          {/* STICKY NAVIGATION TABS */}
          <StickyTabs
            tabs={[
              { id: 'input', label: 'Initialization' },
              { id: 'keysched', label: 'Key Schedule' },
              { id: 'ip', label: 'Initial IP' },
              { id: 'rounds', label: 'Feistel Rounds' },
              { id: 'ipinv', label: 'Inverse IP-1' },
              { id: 'result', label: 'Final Result' }
            ]}
            activeTab={activeSection}
            onTabClick={handleSectionClick}
          />

          {/* CONTENT PANELS */}
          <div className="p-6 md:p-12 space-y-12 max-w-7xl mx-auto">
            
            {/* Input fields */}
            <div id="input">
              <InputPanel />
            </div>

            {/* Desktop Action Buttons Row */}
            <div className="hidden md:block">
              <FooterActions />
            </div>

            {/* Key Schedule */}
            {result && (
              <div id="keysched">
                <KeySchedule />
              </div>
            )}

            {/* Initial Permutation */}
            {result && (
              <div id="ip">
                <InitialPermutation />
              </div>
            )}

            {/* Feistel Rounds */}
            {result && (
              <div id="rounds">
                <FeistelRounds />
              </div>
            )}

            {/* Inverse Permutation */}
            {result && (
              <div id="ipinv">
                <InversePermutation />
              </div>
            )}

            {/* Output results */}
            {result && (
              <div id="result">
                <FinalCipher />
              </div>
            )}

            {/* Persistent Developer Watermark Banner */}
            <div className="border-3 border-black p-4 bg-brutal-yellow shadow-brutal-sm font-mono text-center leading-relaxed text-xs uppercase text-black" style={{ border: '3px solid #000000', borderRadius: '0px' }}>
              📚 DES Simulator Watermark:<br />
              <strong className="text-black font-black">imam rizki saputra des - 2026</strong> | teknik informatika universitas bale bandung kriptografi
            </div>

          </div>
        </main>
      </div>

      {/* Mobile Sticky Footer Action controls */}
      <FooterActions />

      {/* FLOATING BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-24 md:bottom-8 right-6 z-40 bg-black text-white w-12 h-12 border-3 border-white hover:border-black hover:bg-brutal-yellow hover:text-black flex items-center justify-center shadow-brutal active:translate-y-1 active:shadow-none transition-all duration-75"
            style={{ borderRadius: '9999px' }}
            aria-label="Back to top"
          >
            <ChevronUp className="w-6 h-6 stroke-[3px]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
