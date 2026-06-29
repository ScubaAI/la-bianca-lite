'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

export function PagaAquiFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToPagos = () => {
    const pagosSection = document.getElementById('pagos');
    if (pagosSection) {
      pagosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToPagos}
          className="fixed bottom-28 right-6 z-40 group"
          aria-label="Ir a pagar"
        >
          <div className="relative">
            <div className="w-14 h-14 bg-[#E07A5F] dark:bg-[#FFB347] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-slow">
              <Zap size={24} className="text-white dark:text-[#12121A]" fill="currentColor" />
            </div>

            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#2C2419] dark:bg-[#1A1A24] text-white px-3 py-2 rounded-lg text-sm font-space-grotesk font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg border border-[#E07A5F]/20 dark:border-[#FFB347]/30">
              ⚡ Paga Aquí
            </span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
