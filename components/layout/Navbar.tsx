"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Language = "ES" | "IT" | "EN";

export default function Navbar() {
  const [currentLang, setCurrentLang] = useState<Language>("ES");
  const [isOpen, setIsOpen] = useState(false);

  const languages: Language[] = ["ES", "IT", "EN"];

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between pointer-events-none">
      <div className="flex items-center pointer-events-auto">
        <a href="#" className="text-cafe dark:text-white transition-colors duration-300" aria-label="La Bianca Tropical Home">
          <svg
            width="140"
            height="40"
            viewBox="0 0 140 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[110px] h-[32px] sm:w-[140px] sm:h-[40px]"
          >
            <text
              x="0"
              y="28"
              fill="currentColor"
              className="font-anton text-2xl tracking-wider uppercase"
            >
              La Bianca
            </text>
            <circle cx="125" cy="20" r="4" fill="currentColor" className="text-terracota dark:text-amber-salsa" />
          </svg>
        </a>
      </div>

      <div className="relative pointer-events-auto font-inter text-sm font-medium">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/40 dark:bg-[#1A1A24]/40 backdrop-blur-md border border-cafe/10 dark:border-white/10 text-cafe dark:text-white transition-all duration-300 hover:border-terracota/40 dark:hover:border-amber-salsa/40"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <span>{currentLang}</span>
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-20 bg-white/90 dark:bg-[#1A1A24]/95 backdrop-blur-md border border-cafe/10 dark:border-white/10 rounded-xl shadow-lg overflow-hidden z-50 py-1"
            >
              {languages.map((lang) => (
                <li key={lang}>
                  <button
                    onClick={() => {
                      setCurrentLang(lang);
                      setIsOpen(false);
                    }}
                    className={`w-full text-center px-3 py-2 transition-colors duration-200 ${
                      currentLang === lang
                        ? "text-terracota dark:text-amber-salsa font-semibold bg-terracota/5 dark:bg-amber-salsa/5"
                        : "text-cafe/70 dark:text-white/70 hover:text-cafe dark:hover:text-white hover:bg-cafe/5 dark:hover:bg-white/5"
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