"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArcadeButton } from "@/components/ui/arcade-button";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Esperar a que el componente se monte para evitar parpadeos de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determinar el mood basándonos en el tema resuelto por next-themes
  const isNight = mounted && resolvedTheme === "dark";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-crema dark:bg-azul-noche transition-colors duration-1000">
      
      {/* 1. Capas de Imagen y Overlays */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={
            isNight 
              ? "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1600" // Cóctel refinado, lujoso y con colores vivos
              : "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1600" // Pizza tradicional italiana recién salida del horno
          } 
          alt="Ambiente gastronómico La Bianca Tropical" 
          fill 
          className="object-cover transition-all duration-1000 ease-in-out scale-105"
          priority
          sizes="100vw"
        />
        
        {/* Capa de atmósfera diurna (Crema cálido multiplicada) */}
        <div 
          className={`absolute inset-0 bg-crema/40 mix-blend-multiply transition-opacity duration-1000 ${
            !isNight ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`} 
        />
        
        {/* Capa de atmósfera nocturna (Azul Noche profundo) */}
        <div 
          className={`absolute inset-0 bg-azul-noche/70 mix-blend-multiply transition-opacity duration-1000 ${
            isNight ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`} 
        />
        
        {/* Textura de Palmeras del Design System */}
        <div className="absolute inset-0 palm-overlay" aria-hidden="true" />
      </div>

      {/* 2. Contenido Central */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center pt-20">
        
        {/* Badge Bitcoin Flotante - Sincronizado v1.1 */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-verde-selva text-white text-xs font-inter font-bold uppercase tracking-wider
                     dark:border dark:border-amber-salsa/40 dark:shadow-salsa-glow backdrop-blur-md"
        >
          <span className="text-base animate-pulse">⚡</span> Bitcoin Accepted • Lightning
        </motion.div>

        {/* Título Principal - Tipografías del Sistema */}
        <motion.h1 
          className="font-playfair text-5xl md:text-7xl lg:text-8xl text-cafe dark:text-dorado mb-2 leading-tight drop-shadow-md transition-colors duration-500"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          La Bianca <span className="font-cormorant italic text-terracota dark:text-rosa-guayaba font-normal">Tropical</span>
        </motion.h1>

        {/* Subtítulo Ristorante Sociale con Anton */}
        <motion.p 
          className="font-anton text-2xl md:text-4xl text-terracota dark:text-amber-salsa uppercase tracking-wide mb-3 transition-colors duration-500"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Ristorante Sociale
        </motion.p>

        {/* Conceptos clave de la landing */}
        <motion.p 
          className="font-inter text-sm md:text-base font-medium tracking-wider uppercase text-cafe/70 dark:text-white/60 mb-8 max-w-xl transition-colors duration-500"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Cucina Italiana • Salsa Nights • Bitcoin Friendly
        </motion.p>

        {/* CTAs de Conversión Interactivos */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <ArcadeButton 
            onClick={() => {
              const menuSection = document.getElementById('menu');
              if (menuSection) menuSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            📖 Ver Menú
          </ArcadeButton>
          
          <button
            onClick={() => {
              const carteleraSection = document.getElementById('cartelera');
              if (carteleraSection) carteleraSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-full border-2 border-terracota text-terracota 
                       dark:border-amber-salsa dark:text-amber-salsa bg-white/20 dark:bg-transparent
                       hover:bg-terracota hover:text-white dark:hover:bg-amber-salsa dark:hover:text-azul-noche
                       shadow-terracota-soft dark:shadow-none backdrop-blur-sm
                       transition-all duration-300 font-inter font-bold text-sm tracking-wide uppercase"
          >
            🎵 Ver Cartelera
          </button>
        </motion.div>

      </div>

      {/* 3. Efecto de Vapor (Solo activo de día) */}
      {mounted && !isNight && (
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none overflow-hidden z-10" aria-hidden="true">
          <div className="steam-particle steam-delay-1 left-[15%] bottom-5" />
          <div className="steam-particle steam-delay-2 left-[45%] bottom-10 w-12 h-12" />
          <div className="steam-particle steam-delay-3 left-[75%] bottom-6" />
        </div>
      )}

      {/* Decoración Palmeras Laterales Animadas (Sway) */}
      <span className="absolute top-24 left-4 text-4xl md:text-6xl palm-decoration opacity-40 dark:opacity-20 pointer-events-none select-none" aria-hidden="true">🌴</span>
      <span className="absolute bottom-24 right-4 text-4xl md:text-6xl palm-decoration opacity-40 dark:opacity-20 pointer-events-none select-none" style={{ animationDelay: '2s' }} aria-hidden="true">🌴</span>

    </section>
  );
}