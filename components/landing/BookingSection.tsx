"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const CAL_LINK = "https://cal.com/tu-usuario-labianca/reserva-mesa"; 

export function BookingSection() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const initCal = () => {
      if (typeof window.Cal !== "undefined") {
        window.Cal("init", "30min", { origin: "https://cal.com" });
        window.Cal("inline", {
          elementOrSelector: "#my-cal-inline",
          config: { layout: "month_view" },
        });
      }
    };

    const existingScript = document.querySelector('script[src="https://cal.com/embed.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://cal.com/embed.js";
      script.async = true;
      script.onload = initCal;
      script.onerror = () => console.warn("Cal.com embed script failed to load");
      document.body.appendChild(script);
    } else {
      initCal();
    }

    return () => {};
  }, []);

  return (
    <section id="booking" className="relative py-20 px-4 bg-crema dark:bg-[#0F0F1E] transition-colors duration-500" suppressHydrationWarning>
      <div className="absolute inset-0 brick-overlay opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto max-w-4xl relative z-10">
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

        <motion.div 
          className="glass-card-day dark:glass-card-night rounded-2xl p-2 md:p-4 shadow-xl overflow-hidden min-h-[600px]"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div id="my-cal-inline" className="w-full h-full min-h-[550px] rounded-xl overflow-hidden bg-white dark:bg-[#1A1A2E]" />
        </motion.div>
      </div>
    </section>
  );
}

declare global {
  interface Window {
    Cal: any;
  }
}