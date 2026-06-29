"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Calendar, Clock, Users, Sparkles } from "lucide-react";
import { TropicalQR } from "@/components/ui/TropicalQR";

// Link del Bot de Telegram
const TELEGRAM_BOT_LINK = "https://t.me/transaccioneslabianca_bot";

export function BookingSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyUsername = async () => {
    try {
      await navigator.clipboard.writeText("@transaccioneslabianca_bot");
      setCopied(true);
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(30);
      }
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

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
                Reserva Tu <br className="hidden lg:block"/>
                <span className="text-[#E07A5F] dark:text-[#FF6B9E] font-cormorant italic font-normal">Experiencia</span>
              </h2>
            </div>

            <div className="space-y-4">
              <p className="font-cormorant text-xl md:text-2xl text-[#2C2419]/90 dark:text-white/90 leading-relaxed font-medium">
                Reserva tu mesa en segundos a través de nuestro 
                <span className="italic text-[#E07A5F] dark:text-[#FFB347]"> asistente inteligente </span> 
                de Telegram.
              </p>

              <p className="font-inter text-sm md:text-base text-[#2C2419]/70 dark:text-white/60 leading-relaxed">
                Nuestro bot te guiará paso a paso para elegir fecha, hora y número de comensales. 
                Sin esperas, sin llamadas, sin complicaciones. 
                <span className="block mt-2 font-semibold text-[#3D5A51] dark:text-[#FFB347]">
                  Confirmación instantánea 24/7 ⚡
                </span>
              </p>
            </div>

            {/* Badges de Confianza Rápidos */}
            <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-4">
              <span className="inline-flex items-center gap-2 text-xs font-space-grotesk px-4 py-2 rounded-xl bg-white dark:bg-[#1A1A24] shadow-sm border border-[#E8DDD0] dark:border-white/10 text-[#2C2419] dark:text-white font-bold uppercase tracking-wide">
                <Calendar size={14} className="text-[#E07A5F] dark:text-[#FFB347]" />
                Reserva Inmediata
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-space-grotesk px-4 py-2 rounded-xl bg-white dark:bg-[#1A1A24] shadow-sm border border-[#E8DDD0] dark:border-white/10 text-[#2C2419] dark:text-white font-bold uppercase tracking-wide">
                <Clock size={14} className="text-[#3D5A51] dark:text-[#FFB347]" />
                Confirmación 24/7
              </span>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: Tarjeta de Invitación Telegram (7 columnas) */}
          <motion.div 
            className="lg:col-span-7 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Contenedor Glassmorphism "Tropical Salsa" */}
            <div className="bg-white/80 dark:bg-[#1A1A24]/90 backdrop-blur-xl border border-[#E07A5F]/20 dark:border-[#FFB347]/30 rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_rgba(44,36,25,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] overflow-hidden relative transition-all duration-500">
              
              {/* Header de la Tarjeta */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0088cc] to-[#005f8c] flex items-center justify-center shadow-lg">
                    <Send size={24} className="text-white" fill="currentColor" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-playfair text-2xl text-[#2C2419] dark:text-[#D4AF37] font-bold">
                      Asistente de Reservas
                    </h3>
                    <p className="font-space-grotesk text-xs text-[#2C2419]/60 dark:text-white/50 uppercase tracking-wider">
                      Powered by Telegram
                    </p>
                  </div>
                </div>
              </div>

              {/* Mockup de Chat de Telegram */}
              <div className="mb-8 p-4 rounded-2xl bg-[#E8DDD0]/20 dark:bg-black/30 border border-[#E07A5F]/10 dark:border-white/5">
                <div className="space-y-3">
                  {/* Mensaje del Bot */}
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0088cc] to-[#005f8c] flex items-center justify-center flex-shrink-0">
                      <Send size={14} className="text-white" fill="currentColor" />
                    </div>
                    <div className="bg-white dark:bg-[#1A1A24] rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[80%] shadow-sm border border-[#E8DDD0] dark:border-white/10">
                      <p className="font-inter text-sm text-[#2C2419] dark:text-white">
                        ¡Ciao! 🍕 Soy tu asistente de La Bianca Tropical. ¿Para cuándo quieres reservar?
                      </p>
                      <p className="font-space-grotesk text-[10px] text-[#2C2419]/40 dark:text-white/30 mt-1">
                        18:30 ✓✓
                      </p>
                    </div>
                  </div>

                  {/* Mensaje del Usuario */}
                  <div className="flex items-start gap-2 flex-row-reverse">
                    <div className="bg-[#E07A5F] dark:bg-[#FFB347] rounded-2xl rounded-tr-none px-4 py-2.5 max-w-[80%] shadow-sm">
                      <p className="font-inter text-sm text-white dark:text-[#12121A]">
                        Para mañana a las 20:00, somos 4 personas 🎉
                      </p>
                      <p className="font-space-grotesk text-[10px] text-white/70 dark:text-[#12121A]/60 mt-1 text-right">
                        18:31 ✓✓
                      </p>
                    </div>
                  </div>

                  {/* Respuesta del Bot */}
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0088cc] to-[#005f8c] flex items-center justify-center flex-shrink-0">
                      <Send size={14} className="text-white" fill="currentColor" />
                    </div>
                    <div className="bg-white dark:bg-[#1A1A24] rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[80%] shadow-sm border border-[#E8DDD0] dark:border-white/10">
                      <p className="font-inter text-sm text-[#2C2419] dark:text-white">
                        ¡Perfecto! 🎊 Mesa para 4 personas mañana a las 20:00. 
                        <span className="block mt-1 font-semibold text-[#3D5A51] dark:text-[#FFB347]">
                          Confirmada ✓
                        </span>
                      </p>
                      <p className="font-space-grotesk text-[10px] text-[#2C2419]/40 dark:text-white/30 mt-1">
                        18:31 ✓✓
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR de Telegram */}
              <div className="flex flex-col items-center mb-6">
                <TropicalQR 
                  value={TELEGRAM_BOT_LINK}
                  label="ESCANEA PARA RESERVAR"
                  size={200}
                />
              </div>

              {/* Botón CTA Gigante */}
              <a
                href={TELEGRAM_BOT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full py-4 px-6 rounded-2xl overflow-hidden mb-4
                           bg-gradient-to-r from-[#0088cc] to-[#005f8c] 
                           hover:from-[#0077b3] hover:to-[#004d73]
                           text-white font-space-grotesk font-bold text-base
                           flex items-center justify-center gap-3
                           shadow-lg hover:shadow-xl transition-all duration-300
                           hover:-translate-y-0.5"
              >
                <Send size={20} fill="currentColor" className="group-hover:translate-x-1 transition-transform" />
                <span>Abrir Asistente de Reservas</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              {/* O copiar username */}
              <button
                onClick={handleCopyUsername}
                className="w-full py-3 px-4 rounded-xl bg-[#E8DDD0]/30 dark:bg-white/5 border border-[#E07A5F]/10 dark:border-white/10
                           font-space-grotesk text-sm text-[#2C2419] dark:text-white/70 
                           hover:bg-[#E07A5F]/5 dark:hover:bg-[#FFB347]/5 transition-all group
                           flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} className="text-[#0088cc]" />
                <span className="font-medium">@transaccioneslabianca_bot</span>
                {copied ? (
                  <span className="text-[#3D5A51] dark:text-[#FFB347] text-xs font-bold">✓ COPIADO</span>
                ) : (
                  <span className="text-[#2C2419]/40 dark:text-white/40 text-xs">COPIAR</span>
                )}
              </button>

              {/* Footer informativo */}
              <div className="mt-6 pt-6 border-t border-[#E07A5F]/10 dark:border-white/5 flex items-center justify-center gap-4 text-xs font-space-grotesk text-[#2C2419]/50 dark:text-white/40">
                <span className="flex items-center gap-1">
                  <Users size={12} />
                  Sin registro
                </span>
                <span className="w-1 h-1 rounded-full bg-[#E07A5F]/30 dark:bg-[#FFB347]/30" />
                <span className="flex items-center gap-1">
                  <Sparkles size={12} />
                  Respuesta inmediata
                </span>
                <span className="w-1 h-1 rounded-full bg-[#E07A5F]/30 dark:bg-[#FFB347]/30" />
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  24/7
                </span>
              </div>
            </div>

            {/* Footer de la sección: Info de Bitcoin */}
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