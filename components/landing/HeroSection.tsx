"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArcadeButton } from "@/components/ui/arcade-button";
import { TripAdvisorBadge } from "@/components/ui/TripAdvisorBadge";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF7F2] dark:bg-[#12121A] transition-colors duration-1000">
      
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
          className={`object-cover transition-all duration-1000 ease-in-out ${isNight ? 'scale-110 brightness-90' : 'scale-105 brightness-[0.85]'}`}
          priority
          sizes="100vw"
        />
        
        {/* Capa de atmósfera diurna (Crema cálido con mayor presencia para aplacar las luces de la pizza) */}
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/60 via-[#FAF7F2]/80 to-[#FAF7F2]/50 mix-blend-multiply transition-opacity duration-1000 ${
            !isNight ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`} 
        />
        
        {/* Capa de atmósfera nocturna (Azul Noche profundo) */}
        <div 
          className={`absolute inset-0 bg-[#12121A]/70 mix-blend-multiply transition-opacity duration-1000 ${
            isNight ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`} 
        />
        
        {/* Textura de Palmeras del Design System */}
        <div className="absolute inset-0 palm-overlay opacity-40 dark:opacity-20" aria-hidden="true" />
      </div>

      {/* 2. Contenido Central encapsulado en un "Globito/Contenedor Glassmorphic" sofisticado */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center pt-24 pb-12 max-w-4xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center px-6 py-10 md:px-12 md:py-14 rounded-3xl 
            bg-white/85 dark:bg-[#1A1A24]/85 
            backdrop-blur-xl 
            border border-[#E07A5F]/20 dark:border-[#FFB347]/30 
            shadow-[0_8px_32px_rgba(44,36,25,0.1)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)] 
            transition-all duration-1000"
        >
          {/* Badge Bitcoin Flotante - Sincronizado v1.1 */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-[#3D5A51] text-white text-xs font-inter font-bold uppercase tracking-wider
                       dark:border dark:border-[#FFB347]/40 dark:shadow-[0_0_12px_rgba(255,179,71,0.3)]"
          >
            <span className="text-base animate-pulse">⚡</span> Bitcoin Accepted • Lightning
          </motion.div>

          {/* Título Principal - Tipografías del Sistema */}
          <motion.h1 
            className="font-playfair text-5xl md:text-7xl lg:text-8xl text-[#2C2419] dark:text-[#D4AF37] mb-3 leading-tight drop-shadow-sm transition-colors duration-500"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            La Bianca <span className="font-cormorant italic text-[#E07A5F] dark:text-[#FF6B9E] font-normal">Tropical</span>
          </motion.h1>

          {/* Subtítulo Ristorante Sociale con Anton */}
          <motion.p 
            className="font-anton text-2xl md:text-4xl text-[#E07A5F] dark:text-[#FFB347] uppercase tracking-wide mb-4 transition-colors duration-500"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Ristorante Sociale
          </motion.p>

          {/* Conceptos clave de la landing */}
          <motion.p 
            className="font-inter text-sm md:text-base font-semibold tracking-wider uppercase text-[#2C2419]/90 dark:text-white/90 mb-8 max-w-xl transition-colors duration-500"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Cucina Italiana • Salsa Nights • Bitcoin Friendly
          </motion.p>

          {/* CTAs de Conversión Interactivos */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
             <ArcadeButton 
               onClick={() => {
                 if (typeof window !== 'undefined') {
                   const menuSection = document.getElementById('menu');
                   if (menuSection) menuSection.scrollIntoView({ behavior: 'smooth' });
                 }
               }}
             >
               📖 Ver Menú
             </ArcadeButton>
            
             {/* BOTÓN SECUNDARIO OPTIMIZADO PARA CONTRASTE */}
             <button
               onClick={() => {
                 if (typeof window !== 'undefined') {
                   const carteleraSection = document.getElementById('cartelera');
                   if (carteleraSection) carteleraSection.scrollIntoView({ behavior: 'smooth' });
                 }
               }}
               className="group relative px-6 py-3 rounded-full border-2 border-[#E07A5F] text-[#E07A5F] 
                          dark:border-[#FFB347] dark:text-[#FFB347] 
                          bg-white/40 dark:bg-[#1A1A24]/50
                          hover:bg-[#E07A5F] hover:text-white dark:hover:bg-[#FFB347] dark:hover:text-[#12121A]
                          shadow-[0_4px_12px_rgba(224,122,95,0.1)] dark:shadow-[0_0_12px_rgba(255,179,71,0.2)]
                          backdrop-blur-sm transition-all duration-300 font-inter font-bold text-sm tracking-wide uppercase"
             >
               <span className="relative z-10">🎵 Ver Cartelera</span>
               {/* Efecto de brillo sutil al hover */}
               <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             </button>
          </motion.div>

          {/* NUEVO: Badge de TripAdvisor Integrado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-4"
          >
            <TripAdvisorBadge />
          </motion.div>
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

      {/* Decoración Palmeras Laterales Animadas (Subida la opacidad en modo día a 0.6 para que no mueran contra el fondo) */}
      <span className="absolute top-24 left-4 text-4xl md:text-6xl palm-decoration opacity-60 dark:opacity-30 pointer-events-none select-none z-20 drop-shadow-md" aria-hidden="true">🌴</span>
      <span className="absolute bottom-24 right-4 text-4xl md:text-6xl palm-decoration opacity-60 dark:opacity-30 pointer-events-none select-none z-20 drop-shadow-md" style={{ animationDelay: '2s' }} aria-hidden="true">🌴</span>

    </section>
  );
}