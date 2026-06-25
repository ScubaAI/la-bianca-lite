"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, MapPin, Phone } from "lucide-react";
import { TutorialButton } from "../ui/tutorial-button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeSede, setActiveSede] = useState<"centro" | "plancha" | null>(null);
  
  // URL por defecto (Android / Escritorio)
  const [downloadUrl, setDownloadUrl] = useState("https://play.google.com/store/search?q=bull%20bitcoin&c=apps&hl=en");

  useEffect(() => {
    // Detectar si el usuario está en un dispositivo Apple (iPhone, iPad, Mac)
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isApple = /iphone|ipad|ipod|macintosh/.test(userAgent);

    if (isApple) {
      setDownloadUrl("https://apps.apple.com/us/app/bull-bitcoin/id6743380972");
    }
  }, []);

  return (
    <footer className="relative bg-[#FAF7F2] dark:bg-[#12121A] border-t border-[#E07A5F]/20 dark:border-[#D4AF37]/20 pt-16 pb-8 transition-colors duration-1000 overflow-hidden">
      
      {/* Textura de fondo sutil (Vapor de horno / Estética rústica) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/textures/brick-pattern.png')] mix-blend-multiply dark:mix-blend-screen" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          
          {/* Columna 1: Branding, Alianza e Infraestructura Sponsor */}
          <div className="text-center md:text-left flex flex-col justify-between">
            <div>
              <h3 className="font-playfair text-3xl text-[#2C2419] dark:text-[#D4AF37] mb-4 drop-shadow-sm">
                La Bianca <span className="text-[#E07A5F] dark:text-[#FF6B9E] italic font-cormorant">Tropical</span>
              </h3>
              <p className="font-inter text-sm text-[#2C2419]/70 dark:text-white/60 mb-6 leading-relaxed max-w-xs mx-auto md:mx-0">
                Cucina italiana, salsa y Bitcoin Friendly. <br />
                Una experiencia única en Mérida, Yucatán.
              </p>
            </div>
            
            {/* Bloque Premium: Patrocinador Oficial & Wallet Partner */}
            <div className="flex flex-col gap-4 mt-2 items-center md:items-start">
              {/* Botón Sponsor */}
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={downloadUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-full md:w-auto inline-flex items-center justify-between gap-3 px-4 py-3 rounded-xl 
                  bg-white dark:bg-[#1A1A24] 
                  border border-[#D4AF37]/40 dark:border-[#D4AF37]/50 
                  shadow-[0_4px_12px_rgba(224,122,95,0.05)] dark:shadow-[0_0_15px_rgba(212,175,55,0.15)] 
                  hover:border-[#D4AF37] dark:hover:border-[#FFB347]
                  transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="text-2xl group-hover:animate-bounce">🐂</span>
                  <div>
                    <p className="font-space-grotesk text-[10px] text-[#E07A5F] dark:text-[#FFB347] uppercase tracking-widest font-bold">
                      ¿Sin Bitcoin? Descarga la Wallet
                    </p>
                    <p className="font-inter text-xs font-bold text-[#2C2419] dark:text-white flex items-center gap-1">
                      Bull Bitcoin <span className="font-normal text-[#2C2419]/60 dark:text-white/40 text-[10px]">⚡ Lightning</span>
                    </p>
                  </div>
                </div>
                <ExternalLink size={14} className="text-[#E07A5F] dark:text-[#FFB347] group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <TutorialButton
                title="¿Cómo pagar con Bitcoin?"
                subtitle="Mini Tutorial"
                href="https://www.youtube.com/watch?v=TdNnGQ4kZzQ"
              />

              {/* Firma de Desarrollador */}
              <div className="inline-block px-4 py-2 rounded-lg bg-white/40 dark:bg-[#12121A]/40 border border-[#E07A5F]/10 dark:border-[#D4AF37]/10 text-center md:text-left">
                <p className="font-space-grotesk text-[11px] text-[#2C2419]/60 dark:text-white/50 uppercase tracking-wider">
                  Desarrollado por{" "}
                  <a 
                    href="https://www.aceptabitcoin.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#E07A5F] dark:text-[#FFB347] hover:underline font-bold transition-colors"
                  >
                    AceptaBitcoin.org
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Columna 2: Ubicaciones Exactas en Mérida */}
          <div className="text-center flex flex-col justify-center items-center">
            <h4 className="font-playfair text-lg text-[#2C2419] dark:text-[#D4AF37] mb-6 font-semibold flex items-center gap-2">
              <MapPin size={18} className="text-[#E07A5F] dark:text-[#FFB347]" />
              Nuestras Sedes
            </h4>
            <div className="flex flex-col gap-4 w-full max-w-xs items-center">
              
              {/* Sede Centro */}
              <motion.div 
                whileHover={{ x: 5 }}
                onClick={() => setActiveSede(activeSede === 'centro' ? null : 'centro')}
                className={`w-full rounded-xl border transition-all duration-300 cursor-pointer ${
                  activeSede === 'centro' 
                    ? 'bg-white dark:bg-[#1A1A24] border-[#E07A5F] dark:border-[#FFB347] shadow-md' 
                    : 'bg-white/60 dark:bg-[#1A1A24]/60 border-[#E07A5F]/20 dark:border-white/10'
                }`}
                onMouseEnter={() => setActiveSede('centro')}
                onMouseLeave={() => setActiveSede(null)}
              >
                <Link 
                  href="https://www.google.com/maps/place/?q=place_id:ChIJ-w7O5u1xVo8RXE-Awyf86Cc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-5 py-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-left">
                      <span className="text-xl">🏛️</span>
                      <div>
                        <span className="block font-inter text-sm font-bold text-[#2C2419] dark:text-white">Sede Centro</span>
                        <span className="block font-inter text-[11px] text-[#2C2419]/60 dark:text-white/40">Parque Santa Lucía, Centro</span>
                      </div>
                    </div>
                    <ExternalLink size={14} className={`text-[#E07A5F] dark:text-[#FFB347] transition-transform duration-300 ${activeSede === 'centro' ? 'translate-x-1' : ''}`} />
                  </div>
                </Link>
              </motion.div>

              {/* Sede La Plancha */}
              <motion.div 
                whileHover={{ x: 5 }}
                onClick={() => setActiveSede(activeSede === 'plancha' ? null : 'plancha')}
                className={`w-full rounded-xl border transition-all duration-300 cursor-pointer ${
                  activeSede === 'plancha' 
                    ? 'bg-white dark:bg-[#1A1A24] border-[#E07A5F] dark:border-[#FFB347] shadow-md' 
                    : 'bg-white/60 dark:bg-[#1A1A24]/60 border-[#E07A5F]/20 dark:border-white/10'
                }`}
                onMouseEnter={() => setActiveSede('plancha')}
                onMouseLeave={() => setActiveSede(null)}
              >
                <Link 
                  href="https://www.google.com/maps/place/?q=place_id:ChIJ_3IqZQBxVo8Rjvvk2pcuBSc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-5 py-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-left">
                      <span className="text-xl">🔥</span>
                      <div>
                        <span className="block font-inter text-sm font-bold text-[#2C2419] dark:text-white">La Plancha</span>
                        <span className="block font-inter text-[11px] text-[#2C2419]/60 dark:text-white/40">C. 43, Parque de la Plancha</span>
                      </div>
                    </div>
                    <ExternalLink size={14} className={`text-[#E07A5F] dark:text-[#FFB347] transition-transform duration-300 ${activeSede === 'plancha' ? 'translate-x-1' : ''}`} />
                  </div>
                </Link>
              </motion.div>

            </div>
          </div>

          {/* Columna 3: Contacto & Redes Sociales */}
          <div className="text-center md:text-right flex flex-col justify-between items-center md:items-end">
            <div>
              <h4 className="font-playfair text-lg text-[#2C2419] dark:text-[#D4AF37] mb-6 font-semibold flex items-center gap-2 md:justify-end">
                <Phone size={18} className="text-[#E07A5F] dark:text-[#FFB347]" />
                Conecta con Nosotros
              </h4>
              
              {/* WhatsApp Corporativo */}
              <Link 
                href="https://wa.me/5219997503458"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#3D5A51]/10 dark:bg-[#3D5A51]/20 text-[#3D5A51] dark:text-[#FFB347] hover:bg-[#3D5A51] hover:text-white dark:hover:bg-[#FFB347] dark:hover:text-[#12121A] transition-all duration-300 font-inter text-sm font-bold shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                +52 1 999 750 3458
              </Link>
            </div>

            {/* Iconos Sociales */}
            <div className="flex gap-4 mb-4">
              <a 
                href="https://www.facebook.com/labiancamerida" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-[#1A1A24] text-[#2C2419] dark:text-white hover:bg-[#1877F2] hover:text-white transition-all duration-300 shadow-sm border border-[#E07A5F]/10 dark:border-white/5"
                aria-label="Facebook"
               >
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                 </svg>
               </a>
              
               <a 
                 href="https://www.instagram.com/labiancatropical/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2.5 rounded-full bg-white dark:bg-[#1A1A24] text-[#2C2419] dark:text-white hover:bg-[#E4405F] hover:text-white transition-all duration-300 shadow-sm border border-[#E07A5F]/10 dark:border-white/5"
                 aria-label="Instagram"
               >
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                 </svg>
               </a>
              <a 
                href="https://www.tiktok.com/@labiancatropical" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-[#1A1A24] text-[#2C2419] dark:text-white hover:bg-black hover:text-white transition-all duration-300 shadow-sm border border-[#E07A5F]/10 dark:border-white/5"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.1z"/>
                </svg>
              </a>
            </div>
            
            {/* Badge Unificado Bitcoin accepted */}
            <div className="mt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3D5A51]/10 dark:bg-[#3D5A51]/20 text-[#3D5A51] dark:text-[#FFB347] text-xs font-space-grotesk font-medium border border-[#3D5A51]/20 dark:border-[#FFB347]/20">
                ⚡ Bitcoin Lightning Network Accepted
              </span>
            </div>
          </div>
        </div>

        {/* Copyright Final */}
        <div className="border-t border-[#E07A5F]/10 dark:border-[#D4AF37]/10 pt-8 text-center">
          <p className="font-inter text-xs text-[#2C2419]/50 dark:text-white/40">
            © {currentYear} La Bianca Tropical. Todos los derechos reservados.
          </p>
          <p className="font-space-grotesk text-[10px] text-[#2C2419]/40 dark:text-white/30 mt-1">
            Hecho con 🌴, 🍕 y ⚡ en Mérida, Yucatán
          </p>
        </div>
      </div>
    </footer>
  );
}