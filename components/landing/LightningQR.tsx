"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Copy, 
  Check, 
  CreditCard, 
  ExternalLink, 
  Layers, 
  Coins,
  ShieldCheck
} from "lucide-react";

// CONFIGURACIÓN REAL INTEGRADA CON REDUNDANCIA NUCLEAR
const CONFIG = {
  // 1. Lightning Link para el POS del mesero (Blink)
  blinkPosLink: "https://pay.blink.sv/aceptabitcoin?amount=0&memo=&display=MXN",
  
  // 2. Lightning Address (Capa estática redundante)
  lightningAddress: "aceptabitcoin@blink.sv", 
  
  // 3. QR Estático de Blink guardado localmente en tus assets
  lightningQrSrc: "/images/bitcoin-qr.jpg", 
  
  // 4. Dirección Bitcoin On-Chain base (Seguridad Absoluta)
  onChainAddress: "bc1qg6r7xugjlr4yzrqu5nal526e757pe3hnkp2jlg",
  
  // 5. Opción Nuclear Fiat: Link directo al POS de Mercado Pago
  mercadoPagoLink: "https://link.mercadopago.com.mx/skinlabclothingclub",
};

type TabId = 'lightning' | 'onchain' | 'fiat';

interface LightningQRProps {
  qrSrc?: string;
  walletAddr?: string;
}

export function LightningQR({ qrSrc, walletAddr }: LightningQRProps) {
  const [activeTab, setActiveTab] = useState<TabId>('lightning');
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      
      // Vibración háptica en móviles (Feedback de caja registradora real)
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(40);
      }
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: 'lightning', label: 'Lightning (Rápido)', icon: <Zap size={16} /> },
    { id: 'onchain', label: 'Capa Base On-Chain', icon: <Coins size={16} /> },
    { id: 'fiat', label: 'Tarjeta / SPEI', icon: <CreditCard size={16} /> },
  ];

  return (
    <section id="pagos" className="relative py-24 px-4 bg-[#FAF7F2] dark:bg-[#12121A] transition-colors duration-1000 overflow-hidden">
      {/* Textura de fondo sutil */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/textures/brick-pattern.png')] mix-blend-multiply dark:mix-blend-screen" aria-hidden="true" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        
        {/* Encabezado con Identidad de Marca */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3D5A51]/10 text-[#3D5A51] dark:bg-[#3D5A51]/20 dark:text-[#FFB347] text-xs font-space-grotesk font-bold tracking-wider uppercase mb-4 border border-[#3D5A51]/20 dark:border-[#FFB347]/20">
            <Layers size={12} /> Redundancia Total Anti-Fallos Activa
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#2C2419] dark:text-[#D4AF37] mb-4 drop-shadow-sm transition-colors duration-500">
            Del Horno a la Pista, <br className="sm:hidden"/> Paga con <span className="text-[#E07A5F] dark:text-[#FFB347] italic font-cormorant">Libertad</span>
          </h2>
          <p className="font-inter text-base text-[#2C2419]/80 dark:text-white/70 max-w-lg mx-auto transition-colors duration-500">
            ¿Un corte de pasarela tradicional? Jamás detendrá la pizza ni la salsa. Elige tu canal preferido de pago.
          </p>
        </motion.div>

        {/* Contenedor Principal con Glassmorphism del Design System */}
        <motion.div 
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl 
                     bg-white/80 dark:bg-[#1A1A24]/90 backdrop-blur-xl 
                     border border-[#E07A5F]/20 dark:border-[#FFB347]/30 
                     shadow-[0_8px_32px_rgba(44,36,25,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
        >
          
          {/* Tabs con navegación fluida */}
          <div className="flex flex-col sm:flex-row p-2 gap-2 bg-[#E8DDD0]/40 dark:bg-black/40 border-b border-[#E07A5F]/10 dark:border-white/5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl 
                           font-space-grotesk text-xs md:text-sm font-bold transition-all duration-300
                           ${activeTab === tab.id 
                             ? 'text-white dark:text-[#12121A]' 
                             : 'text-[#2C2419]/60 dark:text-white/50 hover:text-[#2C2419] dark:hover:text-white'
                           }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#E07A5F] dark:bg-[#FFB347] rounded-xl shadow-md"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Área de visualización */}
          <div className="p-6 md:p-12 min-h-[420px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: LIGHTNING NETWORK */}
              {activeTab === 'lightning' && (
                <motion.div
                  key="lightning"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-full max-w-sm flex flex-col items-center"
                >
                  {/* Link del POS Dinámico para el Mesero o Cliente */}
                  <a
                    href={CONFIG.blinkPosLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mb-6 py-3.5 px-6 rounded-xl bg-[#FFB347] hover:bg-[#ffa31a] dark:bg-[#FFB347] dark:hover:bg-[#ffa31a] text-[#12121A] font-space-grotesk font-bold text-sm flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(255,179,71,0.2)] transition-all transform hover:-translate-y-0.5"
                  >
                    <Zap size={16} fill="currentColor" />
                    Abrir Terminal de Cobro (Blink POS)
                    <ExternalLink size={14} />
                  </a>

                  {/* Efecto de vapor tropical detrás del QR */}
                  <div className="relative inline-block my-2">
                    <div className="absolute -inset-4 opacity-20 pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#E07A5F] dark:bg-[#FFB347] rounded-full blur-[2px]"
                          initial={{ y: 0, opacity: 0 }}
                          animate={{ 
                            y: -70, 
                            opacity: [0, 1, 0],
                            x: Math.sin(i) * 12
                          }}
                          transition={{ 
                            duration: 2.5 + i * 0.5, 
                            repeat: Infinity, 
                            ease: "easeOut",
                            delay: i * 0.5
                          }}
                        />
                      ))}
                    </div>

                    {/* QR Estático con Borde Degradado */}
                    <div className="relative p-1 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#E07A5F] dark:from-[#FFB347] dark:to-[#FF6B9E] shadow-lg">
                      <div className="bg-white p-3 rounded-xl">
                        <div className="relative w-44 h-44">
                          <Image 
                            src={qrSrc || CONFIG.lightningQrSrc} 
                            alt="Blink QR Estático La Bianca" 
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>
                      </div>
                      <div className="absolute -top-2.5 -right-2.5 bg-[#3D5A51] text-white text-[10px] font-space-grotesk font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                        QR ESTÁTICO
                      </div>
                    </div>
                  </div>

                  {/* Redundancia de Respaldo por Dirección */}
                  <div className="mt-6 w-full space-y-1.5">
                    <p className="font-inter text-[11px] text-[#2C2419]/60 dark:text-white/50 uppercase tracking-widest">
                      O envía directo a nuestra Lightning Address:
                    </p>
                    <button
                      onClick={() => handleCopy(walletAddr || CONFIG.lightningAddress)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl 
                                bg-[#E8DDD0]/40 dark:bg-white/5 border border-[#E07A5F]/10 dark:border-white/10
                                font-space-grotesk text-xs text-[#2C2419] dark:text-[#FFB347] 
                                hover:bg-[#E07A5F]/10 dark:hover:bg-[#FFB347]/10 transition-all w-full justify-center group"
                    >
                      <span className="truncate">{walletAddr || CONFIG.lightningAddress}</span>
                      {copied ? <Check size={14} className="text-[#3D5A51] dark:text-[#FFB347] flex-shrink-0" /> : <Copy size={14} className="opacity-60 group-hover:opacity-100 flex-shrink-0 transition-opacity" />}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: BITCOIN ON-CHAIN */}
              {activeTab === 'onchain' && (
                <motion.div
                  key="onchain"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-full max-w-md text-center"
                >
                  <div className="mb-6 p-4 rounded-xl bg-[#E8DDD0]/30 dark:bg-white/5 border border-dashed border-[#E07A5F]/30 dark:border-white/10">
                    <p className="font-space-grotesk text-xs uppercase tracking-wider text-[#E07A5F] dark:text-[#FFB347] font-bold mb-1 flex items-center justify-center gap-2">
                      <ShieldCheck size={14} /> Capa Base Inmutable
                    </p>
                    <p className="font-inter text-xs text-[#2C2419]/80 dark:text-white/70 leading-relaxed">
                      Úsala si tu wallet no soporta Lightning o requieres liquidación directa en cadena. <br/>
                      <span className="opacity-60 font-medium">Liquidación estimada: 10 a 60 minutos.</span>
                    </p>
                  </div>

                  <p className="font-inter text-[11px] text-[#2C2419]/60 dark:text-white/50 uppercase tracking-widest mb-2">
                    Dirección Bitcoin Segwit Nativo:
                  </p>
                  
                  <button
                    onClick={() => handleCopy(CONFIG.onChainAddress)}
                    className={`group relative w-full p-4 rounded-xl border-2 transition-all duration-300 text-left
                               ${copied 
                                 ? 'border-[#3D5A51] bg-[#3D5A51]/5 dark:bg-[#3D5A51]/10' 
                                 : 'border-[#E07A5F]/20 dark:border-white/10 bg-white/40 dark:bg-[#12121A]/40 hover:border-[#E07A5F] dark:hover:border-[#FFB347]'
                               }`}
                  >
                    <code className="font-space-grotesk text-xs md:text-sm text-[#2C2419] dark:text-[#FFB347] break-all block pr-8 font-medium">
                      {CONFIG.onChainAddress}
                    </code>
                    
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      {copied ? (
                        <Check size={16} className="text-[#3D5A51] dark:text-[#FFB347]" />
                      ) : (
                        <Copy size={16} className="text-[#2C2419]/40 dark:text-white/40 group-hover:text-[#E07A5F] dark:group-hover:text-[#FFB347] transition-colors" />
                      )}
                    </div>
                  </button>

                  {copied && (
                    <motion.p 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 text-xs font-space-grotesk text-[#3D5A51] dark:text-[#FFB347] font-bold"
                    >
                      ✓ ¡Dirección On-Chain copiada con éxito!
                    </motion.p>
                  )}
                </motion.div>
              )}

              {/* TAB 3: FIAT (MERCADO PAGO - LA OPCIÓN NUCLEAR) */}
              {activeTab === 'fiat' && (
                <motion.div
                  key="fiat"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-full max-w-sm text-center"
                >
                  <div className="mb-6">
                    <h4 className="font-playfair text-xl text-[#2C2419] dark:text-[#D4AF37] mb-2">
                      Terminal de Respaldo Fiduciario
                    </h4>
                    <p className="font-inter text-xs text-[#2C2419]/70 dark:text-white/60">
                      Si prefieres pagar de forma tradicional con Tarjeta de Crédito, Débito, transferencia vía SPEI o efectivo en OXXO.
                    </p>
                  </div>

                  <a
                    href={CONFIG.mercadoPagoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-3 
                               w-full py-3.5 px-6 rounded-xl overflow-hidden
                               bg-[#009EE3] hover:bg-[#008bc9] text-white
                               font-space-grotesk font-bold text-sm transition-all duration-300
                               shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <span className="relative z-10 flex items-center gap-2 tracking-wide">
                      Ir al POS de Mercado Pago
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </a>

                  <div className="mt-8 pt-6 border-t border-[#E07A5F]/10 dark:border-white/5 flex items-center justify-center gap-6 opacity-40 grayscale contrast-200 dark:invert">
                    <span className="text-[10px] font-space-grotesk tracking-widest font-bold">VISA</span>
                    <span className="text-[10px] font-space-grotesk tracking-widest font-bold">MASTERCARD</span>
                    <span className="text-[10px] font-space-grotesk tracking-widest font-bold">SPEI</span>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </motion.div>

        {/* Footer Técnico Pedagógico */}
        <motion.div 
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a 
            href="https://aceptabitcoin.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-space-grotesk text-xs font-bold text-[#E07A5F] dark:text-[#FFB347] hover:underline underline-offset-4 transition-all inline-flex items-center gap-1"
          >
            ⚡ Impulsando la soberanía financiera en Mérida. Conoce más →
          </a>
        </motion.div>

      </div>
    </section>
  );
}