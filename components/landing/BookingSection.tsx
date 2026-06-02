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

  // Función auxiliar para obtener el tema actual
  const getCurrentTheme = () => 
    document.documentElement.classList.contains("dark") ? "dark" : "light";

  useEffect(() => {
    isMounted.current = true;
    let calApi: any = null;

    const initCal = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Inicializar API
        calApi = await getCalApi({ namespace: "30min" });
        
        // Configuración UI global (solo una vez)
        calApi("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          theme: getCurrentTheme(),
          styles: {
            branding: { brandColor: "#E07A5F" }, // Terracota
          },
        });

        // Función para renderizar inline de forma segura
        const renderInline = () => {
          if (!calContainerRef.current || !calApi) return;
          
          // 🧹 LIMPIEZA CRÍTICA: Evita duplicados
          calContainerRef.current.innerHTML = ""; 
          
          calApi("inline", {
            elementOrSelector: "#my-cal-inline",
            calLink: CAL_LINK,
            config: {
              layout: "month_view",
              theme: getCurrentTheme(),
            },
          });
        };

        renderInline();
        
        if (isMounted.current) {
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

    // Cleanup al desmontar
    return () => {
      isMounted.current = false;
      if (calContainerRef.current) {
        calContainerRef.current.innerHTML = "";
      }
    };
  }, []);

  // Sincronizar tema oscuro/claro
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class" && calContainerRef.current) {
          const newTheme = getCurrentTheme();
          
          // Actualizar UI global
          window.Cal("ui", { theme: newTheme });
          
          // 🔄 Re-renderizar inline limpiando primero
          window.Cal("inline", {
            elementOrSelector: "#my-cal-inline",
            calLink: CAL_LINK,
            config: {
              layout: "month_view",
              theme: newTheme,
            },
          });
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="booking" 
      className="relative py-20 px-4 bg-[#FAF7F2] dark:bg-[#12121A] transition-colors duration-500"
      suppressHydrationWarning
    >
      {/* Textura decorativa sutil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/textures/brick-pattern.png')] mix-blend-multiply dark:mix-blend-screen" aria-hidden="true" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Encabezado de la sección */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-[#2C2419] dark:text-[#D4AF37] mb-4">
            Reserva tu Mesa
          </h2>
          <p className="font-cormorant text-xl text-[#E07A5F] dark:text-[#FFB347] italic mb-3">
            "La vita è bella quando si mangia insieme"
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-inter text-[#2C2419]/80 dark:text-white/70">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E07A5F]/10 dark:bg-[#FFB347]/10 border border-[#E07A5F]/20">
              🪑 Hasta 10 personas
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E07A5F]/10 dark:bg-[#FFB347]/10 border border-[#E07A5F]/20">
              ⚡ Confirmación inmediata
            </span>
          </div>
        </motion.div>

        {/* Contenedor del calendario */}
        <motion.div 
          className="bg-white/80 dark:bg-[#1A1A24]/90 backdrop-blur-md border border-[#E07A5F]/20 dark:border-[#FFB347]/30 rounded-2xl p-2 md:p-4 shadow-lg dark:shadow-[0_0_12px_rgba(255,179,71,0.1)] overflow-hidden min-h-[550px]"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {isLoading && (
            <div className="flex items-center justify-center h-[550px]">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-[#E07A5F] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="font-inter text-[#2C2419] dark:text-white/70">Cargando disponibilidad...</p>
              </div>
            </div>
          )}
          
          {error && (
            <div className="flex items-center justify-center h-[550px]">
              <div className="text-center max-w-md p-6">
                <p className="text-red-600 dark:text-red-400 mb-4 font-inter">⚠️ {error}</p>
                <a 
                  href="https://wa.me/529991234567?text=Hola%2C%20quisiera%20reservar%20una%20mesa"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#3D5A51] text-white rounded-full hover:opacity-90 transition font-inter"
                >
                  📱 Reservar por WhatsApp
                </a>
              </div>
            </div>
          )}

          <div 
            id="my-cal-inline" 
            ref={calContainerRef}
            className={`w-full rounded-xl overflow-hidden transition-all duration-300
              ${isLoading || error ? 'hidden' : 'block'}`}
            style={{ minHeight: '550px' }}
          />
        </motion.div>

        {/* Texto adicional con Bitcoin */}
        <motion.p 
          className="text-center mt-6 text-xs font-space-grotesk text-[#2C2419]/60 dark:text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          ⚡ Pagos con Bitcoin Lightning disponibles al llegar • 
          <span className="ml-1 inline-flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 bg-[#3D5A51] rounded-full" />
            Descuento especial pagando con sats
          </span>
        </motion.p>
      </div>
    </section>
  );
}