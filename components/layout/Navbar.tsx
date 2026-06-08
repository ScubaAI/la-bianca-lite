"use client";

import React, { useState } from "react";
import Image from "next/image"; // Importamos el componente nativo de Next.js
import { motion, AnimatePresence } from "framer-motion";

type Language = "ES" | "IT" | "EN";

export default function Navbar() {
  const [currentLang, setCurrentLang] = useState<Language>("ES");
  const [isOpen, setIsOpen] = useState(false);

  const languages: Language[] = ["ES", "IT", "EN"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between pointer-events-none
      bg-gradient-to-b from-white/90 via-white/40 to-transparent dark:from-[#12121A]/90 dark:via-[#12121A]/40 dark:to-transparent transition-all duration-1000 backdrop-blur-[2px]">
      
      {/* Contenedor del Logo con preeminencia mejorada */}
      <div className="flex items-center pointer-events-auto drop-shadow-lg">
        <a href="#" className="group relative transition-transform duration-300 hover:scale-105 active:scale-95" aria-label="La Bianca Tropical Home">
          <Image
            src="/images/bianca-logo.svg"
            alt="La Bianca Tropical Social Club Logo"
            width={160}
            height={45}
            priority // Carga prioritaria porque está en el viewport inicial
            className="w-[130px] h-auto sm:w-[160px] object-contain 
              /* Truco Geek: Fusiona el fondo blanco del SVG con el modo oscuro */
              mix-blend-multiply dark:mix-blend-screen dark:invert 
              transition-all duration-300"
          />
        </a>
      </div>

      {/* Selector de Idiomas con Glassmorphism del Design System */}
      <div className="relative pointer-events-auto font-inter text-sm font-bold tracking-wide">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 rounded-full 
            bg-white/80 dark:bg-[#1A1A24]/80 
            backdrop-blur-md 
            border border-[#E07A5F]/30 dark:border-[#FFB347]/30 
            text-[#2C2419] dark:text-white 
            shadow-[0_4px_12px_rgba(224,122,95,0.15)] dark:shadow-[0_0_15px_rgba(255,179,71,0.15)]
            transition-all duration-300 hover:border-[#E07A5F] dark:hover:border-[#FFB347] hover:scale-105 active:scale-95"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <span className="uppercase">{currentLang}</span>
          <svg
            className={`w-4 h-4 text-[#E07A5F] dark:text-[#FFB347] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown del menú de idiomas */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 mt-3 w-24 
                bg-white/95 dark:bg-[#1A1A24]/95 
                backdrop-blur-xl 
                border border-[#E07A5F]/20 dark:border-[#FFB347]/20 
                rounded-2xl shadow-xl overflow-hidden z-50 py-1.5"
            >
              {languages.map((lang) => (
                <li key={lang}>
                  <button
                    onClick={() => {
                      setCurrentLang(lang);
                      setIsOpen(false);
                    }}
                    className={`w-full text-center px-4 py-2.5 transition-all duration-200 text-xs font-bold uppercase tracking-wider ${
                      currentLang === lang
                        ? "text-[#E07A5F] dark:text-[#FFB347] bg-[#E07A5F]/10 dark:bg-[#FFB347]/10"
                        : "text-[#2C2419]/70 dark:text-white/70 hover:text-[#E07A5F] dark:hover:text-[#FFB347] hover:bg-[#2C2419]/5 dark:hover:bg-white/5"
                    }`}
                  >
                    {lang}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}