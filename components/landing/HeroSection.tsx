"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArcadeButton } from "@/components/ui/arcade-button";
import { useState, useEffect } from "react";

export function HeroSection() {
  // Simulación de estado día/noche para demo (en prod usar useAutoTheme)
  const [isNight, setIsNight] = useState(false);

  // Efecto simple para demo visual (puedes quitarlo si usas next-themes global)
  useEffect(() => {
    const hour = new Date().getHours();
    setIsNight(hour >= 18 || hour < 6);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* 1. Background Image con Overlay Dinámico */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={isNight ? "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000" : "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000"} 
          alt="Ambiente La Bianca Tropical" 
          fill 
          className="object-cover transition-opacity duration-1000"
          priority
        />
        {/* Overlay Día: Crema cálido */}
        <div className={`absolute inset-0 bg-crema/70 dark:bg-[#0F0F1E]/80 transition-colors duration-1000 ${!isNight ? 'opacity-100' : 'opacity-0'} mix-blend-multiply`} />
        {/* Overlay Noche: Azul profundo */}
        <div className={`absolute inset-0 bg-[#0F0F1E]/60 dark:bg-[#0F0F1E]/40 transition-colors duration-1000 ${isNight ? 'opacity-100' : 'opacity-0'} mix-blend-multiply`} />
        
        {/* Textura de Hojas (Palm Overlay) */}
        <div className="absolute inset-0 palm-overlay opacity-20" aria-hidden="true" />
      </div>

      {/* 2. Contenido Central */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Badge Bitcoin Flotante */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-verde-selva/90 text-white text-xs font-montserrat font-bold uppercase tracking-wider
                     dark:bg-neon-cian/90 dark:text-[#0F0F1E] backdrop-blur-sm shadow-lg"
        >
          <span className="text-lg">⚡</span> Aceptamos Bitcoin Lightning
        </motion.div>

        {/* Título Principal */}
        <motion.h1 
          className="font-playfair text-5xl md:text-7xl lg:text-8xl text-cafe dark:text-dorado mb-4 leading-tight drop-shadow-sm"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          La Bianca <span className="italic text-terracota dark:text-neon-fucsia">Tropical</span>
        </motion.h1>

        {/* Subtítulo Italiano */}
        <motion.p 
          className="font-cormorant text-2xl md:text-3xl text-terracota dark:text-white/90 italic mb-8 max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          "Dal forno a legna alla pista da ballo"
          <br />
          <span className="text-base md:text-lg font-montserrat not-italic text-cafe/80 dark:text-white/70 mt-2 block">
            Del horno de leña a la pista de salsa
          </span>
        </motion.p>

        {/* CTA Principal */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <ArcadeButton onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
            Reservar Mesa
          </ArcadeButton>
        </motion.div>

      </div>

      {/* 3. Efecto de Vapor (Solo visible si la imagen es el horno/día) */}
      {!isNight && (
        <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="steam-particle steam-delay-1 left-[20%] bottom-10" />
          <div className="steam-particle steam-delay-2 left-[50%] bottom-20 w-12 h-12" />
          <div className="steam-particle steam-delay-3 left-[80%] bottom-12" />
        </div>
      )}

      {/* Decoración Palmeras Laterales */}
      <span className="absolute top-10 left-4 text-4xl md:text-6xl palm-decoration opacity-80" aria-hidden="true">🌴</span>
      <span className="absolute bottom-10 right-4 text-4xl md:text-6xl palm-decoration opacity-80" style={{ animationDelay: '2s' }} aria-hidden="true">🌴</span>

    </section>
  );
}
