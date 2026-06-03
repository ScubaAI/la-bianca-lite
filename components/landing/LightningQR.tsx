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
  Info 
} from "lucide-react";

//  CONFIGURACIÓN - REEMPLAZAR CON DATOS REALES
const CONFIG = {
  // QR estático de Blink Wallet (Lightning)
  lightningQrSrc: "/images/blink-qr-placeholder.png", 
  
  // Dirección LNURL o Lightning Address (ej: labianca@blink.sv)
  lightningAddress: "tu-lnurl-o-lightning-address@blink.sv", 
  
  // Dirección Bitcoin On-Chain proporcionada por el cliente
  onChainAddress: "bc1qg6r7xugjlr4yzrqu5nal526e757pe3hnkp2jlg",
  
  // Link de pago de Mercado Pago
  mercadoPagoLink: "https://mpago.la/tu-link-de-pago",
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
      
      // Vibración háptica en móviles
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(50);
      }
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: 'lightning', label: 'Lightning', icon: <Zap size={16} /> },
    { id: 'onchain', label: 'On-Chain', icon: <Info size={16} /> },
    { id: 'fiat', label: 'Tarjetas', icon: <CreditCard size={16} /> },
  ];

  return (
    <section className="py-20 px-4 bg-[#FAF7F2] dark:bg-[#12121A] transition-colors duration-500">
      <div className="container mx-auto max-w-3xl text-center">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-[#2C2419] dark:text-[#D4AF37] mb-4">
            Paga con <span className="text-[#E07A5F] dark:text-[#FFB347]">Libertad</span>
          </h2>
          <p className="font-inter text-[#2C2419]/80 dark:text-white/70 max-w-lg mx-auto">
            Rápido, seguro y sin fronteras. Elige tu método favorito.
          </p>
        </motion.div>

        {/* Contenedor Principal Glassmorphism */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl 
                     bg-white/80 dark:bg-[#1A1A24]/90 backdrop-blur-xl 
                     border border-[#E07A5F]/20 dark:border-[#FFB347]/30 
                     shadow-lg dark:shadow-[0_0_20px_rgba(255,179,71,0.1)]"
        >
          
          {/* Tabs de Navegación */}
          <div className="flex p-2 gap-2 bg-[#E8DDD0]/30 dark:bg-black/20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl 
                           font-inter text-sm font-semibold transition-all duration-300
                           ${activeTab === tab.id 
                             ? 'text-white dark:text-[#12121A]' 
                             : 'text-[#2C2419]/60 dark:text-white/50 hover:text-[#2C2419] dark:hover:text-white'
                           }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#E07A5F] dark:bg-[#FFB347] rounded-xl shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Contenido de las Tabs */}
          <div className="p-6 md:p-10 min-h-[400px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: LIGHTNING */}
              {activeTab === 'lightning' && (
                <motion.div
                  key="lightning"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-sm"
                >
                  {/* Efecto Steam-Rise detrás del QR */}
                  <div className="relative inline-block">
                    <div className="absolute -inset-4 opacity-30 pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full blur-[2px]"
                          initial={{ y: 0, opacity: 0 }}
                          animate={{ 
                            y: -60, 
                            opacity: [0, 0.8, 0],
                            x: Math.sin(i) * 10
                          }}
                          transition={{ 
                            duration: 2 + i * 0.5, 
                            repeat: Infinity, 
                            ease: "easeOut",
                            delay: i * 0.4
                          }}
                        />
                      ))}
                    </div>

                    <div className="group relative p-1 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#E07A5F] dark:from-[#FFB347] dark:to-[#FF6B9E] animate-gradient-rotate shadow-xl">
                      <div className="bg-white dark:bg-[#12121A] rounded-xl p-4">
                        <div className="relative w-48 h-48 mx-auto">
                          {/* TODO: Reemplazar src con el QR real de Blink */}
                           <Image 
                             src={qrSrc || CONFIG.lightningQrSrc} 
                             alt="QR Código Lightning Network" 
                             fill
                             className="object-contain"
                             priority
                           />
                        </div>
                      </div>
                      
                      <div className="absolute -top-3 -right-3 bg-[#3D5A51] text-white text-xs font-space-grotesk font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse-slow flex items-center gap-1">
                        <Zap size={12} fill="currentColor" />
                        LIGHTNING
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <p className="font-inter text-xs text-[#2C2419]/60 dark:text-white/50 uppercase tracking-widest">
                      O usa Lightning Address:
                    </p>
                     <button
                       onClick={() => handleCopy(walletAddr || CONFIG.lightningAddress)}
                       className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                                  bg-[#E8DDD0]/50 dark:bg-white/5 border border-[#E07A5F]/20 
                                  font-space-grotesk text-xs text-[#2C2419] dark:text-[#FFB347] 
                                  hover:bg-[#E07A5F]/10 dark:hover:bg-[#FFB347]/10 transition-colors"
                     >
                       {walletAddr || CONFIG.lightningAddress}
                       {copied ? <Check size={12} /> : <Copy size={12} />}
                     </button>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: ON-CHAIN */}
              {activeTab === 'onchain' && (
                <motion.div
                  key="onchain"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-md text-center"
                >
                  <div className="mb-6 p-4 rounded-2xl bg-[#E8DDD0]/30 dark:bg-white/5 border border-dashed border-[#2C2419]/20 dark:border-white/20">
                    <Info size={32} className="mx-auto mb-2 text-[#E07A5F] dark:text-[#FFB347]" />
                    <p className="font-inter text-sm text-[#2C2419]/80 dark:text-white/80">
                      Para pagos directos a la blockchain de Bitcoin.<br/>
                      <span className="text-xs opacity-70">Confirmaciones: ~10-60 min</span>
                    </p>
                  </div>

                  <p className="font-inter text-xs text-[#2C2419]/60 dark:text-white/50 uppercase tracking-widest mb-2">
                    Dirección BTC (Bech32):
                  </p>
                  
                  <button
                    onClick={() => handleCopy(CONFIG.onChainAddress)}
                    className={`group relative w-full p-4 rounded-xl border-2 transition-all duration-300
                               ${copied 
                                 ? 'border-[#2E7D64] bg-[#2E7D64]/10' 
                                 : 'border-[#E07A5F]/30 dark:border-[#FFB347]/30 bg-white/50 dark:bg-[#12121A]/50 hover:border-[#E07A5F] dark:hover:border-[#FFB347]'
                               }`}
                  >
                    <code className="font-space-grotesk text-sm md:text-base text-[#2C2419] dark:text-[#FFB347] break-all">
                      {CONFIG.onChainAddress}
                    </code>
                    
                    <div className={`absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300
                                    ${copied ? 'opacity-100 scale-100' : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'}`}>
                      {copied ? (
                        <Check size={20} className="text-[#2E7D64]" />
                      ) : (
                        <Copy size={20} className="text-[#E07A5F] dark:text-[#FFB347]" />
                      )}
                    </div>
                  </button>

                  {copied && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 text-sm font-inter text-[#2E7D64] font-medium"
                    >
                      ✓ ¡Dirección copiada al portapapeles!
                    </motion.p>
                  )}
                </motion.div>
              )}

              {/* TAB 3: FIAT / MERCADO PAGO */}
              {activeTab === 'fiat' && (
                <motion.div
                  key="fiat"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-md text-center"
                >
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#009EE3]/10 mb-4">
                      <CreditCard size={32} className="text-[#009EE3]" />
                    </div>
                    <h3 className="font-playfair text-2xl text-[#2C2419] dark:text-[#D4AF37] mb-2">
                      Pago Seguro con Tarjeta
                    </h3>
                    <p className="font-inter text-sm text-[#2C2419]/70 dark:text-white/60">
                      Aceptamos todas las tarjetas, OXXO y SPEI vía Mercado Pago.
                      Serás redirigido a su plataforma segura.
                    </p>
                  </div>

                  <a
                    href={CONFIG.mercadoPagoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-3 
                               w-full py-4 px-8 rounded-xl overflow-hidden
                               bg-[#009EE3] hover:bg-[#0088c2] text-white
                               font-inter font-bold text-lg transition-all duration-300
                               shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Pagar con Mercado Pago
                      <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Brillo sutil al hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </a>

                  <p className="mt-4 text-xs font-inter text-[#2C2419]/50 dark:text-white/40">
                    🔒 Transacción protegida por Mercado Pago
                  </p>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </motion.div>

        {/* Footer de la sección */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a 
            href="https://aceptabitcoin.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-inter text-sm text-[#E07A5F] dark:text-[#FF6B9E] hover:underline underline-offset-4 transition-all inline-flex items-center gap-1"
          >
            ¿Nuevo en Bitcoin? Aprende aquí →
          </a>
        </motion.div>

      </div>
    </section>
  );
}