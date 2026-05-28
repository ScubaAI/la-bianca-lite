"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// NOTA: Reemplaza 'tu-usuario-cal' con tu link real de Cal.com
// Ejemplo: https://cal.com/labianca/reserva-mesa
const CAL_LINK = "https://cal.com/tu-usuario-labianca/reserva-mesa"; 

export function BookingSection() {
  const calRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cargar script de Cal.com solo cuando el componente monta
    const script = document.createElement("script");
    script.src = "https://cal.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.Cal) {
        window.Cal("init", "30min", { origin: "https://cal.com" });
        window.Cal("inline", {
          elementOrSelector: "#my-cal-inline",
          config: { layout: "month_view" },
        });
      }
    };
    
    // Evitar duplicados
    if (!document.querySelector('script[src="https://cal.com/embed.js"]')) {
      document.body.appendChild(script);
    }

    return () => {
      // Limpieza opcional si fuera necesario
    };
  }, []);

  return (
    <section id="booking" className="relative py-20 px-4 bg-crema dark:bg-[#0F0F1E] transition-colors duration-500">
      
      {/* Textura de fondo sutil */}
      <div className="absolute inset-0 brick-overlay opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* Header de la Sección */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-cafe dark:text-dorado mb-4">
            Reserva tu Mesa
          </h2>
          <p className="font-cormorant text-xl text-terracota dark:text-white/80 italic">
            "La vita è bella quando si mangia insieme"
          </p>
          <p className="font-montserrat text-sm text-cafe/70 dark:text-white/60 mt-2">
            Selecciona fecha y hora. Confirmación inmediata vía WhatsApp/Email.
          </p>
        </motion.div>

        {/* Contenedor Glassmorphism para Cal.com */}
        <motion.div 
          className="glass-card-day dark:glass-card-night rounded-2xl p-2 md:p-4 shadow-xl overflow-hidden min-h-[600px]"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* El iframe de Cal.com se inyectará aquí */}
          <div id="my-cal-inline" className="w-full h-full min-h-[550px] rounded-xl overflow-hidden bg-white dark:bg-[#1A1A2E]" />
        </motion.div>

      </div>
    </section>
  );
}

// Tipado global para Cal.com
declare global {
  interface Window {
    Cal: any;
  }
}