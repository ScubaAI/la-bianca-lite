"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { getCalApi } from "@calcom/embed-react";

// 🔧 REEMPLAZAR POR EL LINK REAL DEL NEGOCIO CUANDO ESTÉ LISTO
const CAL_LINK = "https://cal.com/pablo-cortes-7cwjtu/reserva-mesa";

export function BookingSection() {
  const calContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMounted = useRef(false);
  const calApiInstance = useRef<any>(null);

  // Función auxiliar para obtener el tema actual compatible con el Design System
  const getCurrentTheme = () =>
    document.documentElement.classList.contains("dark") ? "dark" : "light";

  // Función unificada de renderizado para evitar duplicaciones fantasmas
  const renderCalInline = (api: any) => {
    if (!calContainerRef.current || !api) return;

    // 🧹 LIMPIEZA TOTAL CRÍTICA: Elimina iframes previos antes de reinyectar
    calContainerRef.current.innerHTML = "";

    api("inline", {
      elementOrSelector: calContainerRef.current,
      calLink: CAL_LINK,
      config: {
        layout: "month_view",
        theme: getCurrentTheme(),
      },
    });
  };

  useEffect(() => {
    isMounted.current = true;

    const initCal = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Inicializar la API de Cal.com
        const calApi = await getCalApi({ namespace: "30min" });
        calApiInstance.current = calApi;

        // Configuración de UI Global
        calApi("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          theme: getCurrentTheme(),
          styles: {
            branding: { brandColor: "#E07A5F" }, // Terracota oficial
          },
        });

        if (isMounted.current) {
          renderCalInline(calApi);
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Error initializing Cal.com:", err);
        if (isMounted.current) {
          setError("No pudimos cargar el calendario. Por favor, intenta más tarde.");
          setIsLoading(false);
        }
      }
    };

    initCal();

    return () => {
      isMounted.current = false;
      if (calContainerRef.current) {
        calContainerRef.current.innerHTML = "";
      }
    };
  }, []);

  // Escucha cambios en el tema Día/Noche para actualizar el widget limpiamente
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class" && calContainerRef.current && calApiInstance.current) {
          const newTheme = getCurrentTheme();
          
          // Actualizar tema global
          calApiInstance.current("ui", { theme: newTheme });
          
          // Re-renderizado controlado libre de duplicados gigantes
          renderCalInline(calApiInstance.current);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="booking"
      className="relative py-24 px-4 bg-[#FAF7F2] dark:bg-[#12121A] transition-colors duration-1000 overflow-hidden"
      suppressHydrationWarning
    >
      {/* Patrón de fondo sutil del Design System */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/textures/brick-pattern.png')] mix-blend-multiply dark:mix-blend-screen" 
        aria-hidden="true" 
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Diseño de Grid Principal de 2 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: Marca y Filosofía (5 columnas) */}
          <motion.div 
            className="lg:col-span-5 space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <span className="font-space-grotesk tracking-widest text-xs uppercase bg-[#E07A5F]/10 dark:bg-[#FFB347]/10 text-[#E07A5F] dark:text-[#FFB347] px-3 py-1.5 rounded-full font-bold border border-[#E07A5F]/20 dark:border-[#FFB347]/20">
                Salsa & Wood Fired Oven
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#2C2419] dark:text-[#D4AF37] mt-6 leading-[1.1] drop-shadow-sm transition-colors duration-500">
                Conoce <br className="hidden lg:block"/>
                <span className="text-[#E07A5F] dark:text-[#FF6B9E] font-cormorant italic font-normal">La Bianca Tropical</span>
              </h2>
            </div>

            <div className="space-y-4">
              <p className="font-cormorant text-xl md:text-2xl text-[#2C2419]/90 dark:text-white/90 leading-relaxed font-medium">
                Un vibrante restaurante bar en Mérida que fusiona el 
                <span className="italic text-[#E07A5F] dark:text-[#FFB347]"> baile de salsa </span> 
                con cocina italiana y mediterránea de alta calidad.
              </p>

              <p className="font-inter text-sm md:text-base text-[#2C2419]/70 dark:text-white/60 leading-relaxed">
                Destaca por su masa de lenta fermentación, pasta hecha a mano y especialidades italianas únicas. 
                Ofrece seis eventos semanales con música en vivo, coctelería de nivel y mezcales artesanales en 
                un ambiente informal con jardín, atrayendo a turistas y locales para una experiencia gastronómica 
                y cultural memorable.
              </p>
            </div>

            {/* Badges de Confianza Rápidos */}
            <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-4">
              <span className="inline-flex items-center gap-2 text-xs font-space-grotesk px-4 py-2 rounded-xl bg-white dark:bg-[#1A1A24] shadow-sm border border-[#E8DDD0] dark:border-white/10 text-[#2C2419] dark:text-white font-bold uppercase tracking-wide">
                🪑 Reserva Inmediata
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-space-grotesk px-4 py-2 rounded-xl bg-white dark:bg-[#1A1A24] shadow-sm border border-[#E8DDD0] dark:border-white/10 text-[#2C2419] dark:text-white font-bold uppercase tracking-wide">
                🎵 6 Eventos en Vivo / Sem
              </span>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: Widget de Reservas Cal.com (7 columnas) */}
          <motion.div 
            className="lg:col-span-7 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Contenedor Glassmorphism "Tropical Salsa" */}
            <div className="bg-white/80 dark:bg-[#1A1A24]/90 backdrop-blur-xl border border-[#E07A5F]/20 dark:border-[#FFB347]/30 rounded-3xl p-2 md:p-4 shadow-[0_8px_32px_rgba(44,36,25,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden min-h-[600px] flex flex-col justify-center relative transition-all duration-500">
              
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#FAF7F2]/80 dark:bg-[#12121A]/80 backdrop-blur-sm z-20 rounded-2xl">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-[#E07A5F] dark:border-[#FFB347] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="font-space-grotesk text-xs tracking-widest text-[#2C2419]/60 dark:text-white/60 uppercase">
                      Buscando mesas disponibles...
                    </p>
                  </div>
                </div>
              )}
              
              {error && (
                <div className="flex items-center justify-center min-h-[500px] z-20 px-4">
                  <div className="text-center max-w-sm p-8 bg-red-50/50 dark:bg-red-950/20 rounded-2xl border border-red-200 dark:border-red-900/50 backdrop-blur-md">
                    <p className="text-red-700 dark:text-red-400 text-sm mb-6 font-inter font-medium">⚠️ {error}</p>
                    <a 
                      href="https://wa.me/529991234567?text=Hola%2C%20quisiera%20reservar%20una%20mesa"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#3D5A51] hover:bg-[#3D5A51]/90 text-white text-sm rounded-full transition-all duration-300 font-space-grotesk font-bold uppercase tracking-wide shadow-lg hover:scale-105"
                    >
                      📱 Reservar por WhatsApp
                    </a>
                  </div>
                </div>
              )}

              {/* El contenedor mágico de Cal.com libre de duplicaciones */}
              <div 
                ref={calContainerRef}
                className={`w-full rounded-2xl overflow-hidden transition-all duration-500 min-h-[580px]
                  ${isLoading || error ? 'opacity-0 h-0 pointer-events-none' : 'opacity-100 h-auto'}`}
              />
            </div>

            {/* Footer de la sección: Info de Bitcoin de acuerdo al README */}
            <p className="text-center lg:text-right mt-6 text-xs font-space-grotesk text-[#2C2419]/50 dark:text-white/40 uppercase tracking-wider">
              ⚡ Aceptamos Bitcoin Lightning • 
              <span className="ml-1 text-[#3D5A51] dark:text-[#FFB347] font-bold">
                Shot de mezcal gratis pagando con sats 🪵
              </span>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}