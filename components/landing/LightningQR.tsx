"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Copy, 
  Check, 
  Coins,
  ShieldCheck
} from "lucide-react";
import { TropicalQR } from "@/components/ui/TropicalQR";

// CONFIGURACIÓN CENTRALIZADA - ACTUALIZADA CON BTCPAY
const CONFIG = {
  // 1. BTCPay POS Link
  btcpayPosLink: "https://btcpay-c092a-u74190.vm.elestio.app/apps/4WjfKdWs7Ss37HKntGvRYF8TuH9c/pos",
  
  // 2. Lightning Address ACTUALIZADA (BTCPay nativa)
  lightningAddress: "la-bianca@btcpay-c092a-u74190.vm.elestio.app", 
  
  // 3. Dirección Bitcoin On-Chain
  onChainAddress: "bc1qrqcmlp7sxjk5gvs7umpfudr4gn393xcmj4xtac",
};

type TabId = 'lightning' | 'onchain';

export function LightningQR() {
  const [activeTab, setActiveTab] = useState<TabId>('lightning');
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(30);
      }
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: 'lightning', label: 'Bitcoin Lightning', icon: <Zap size={16} /> },
    { id: 'onchain', label: 'Bitcoin On-Chain', icon: <Coins size={16} /> },
  ];

  return (
    <section id="pagos" className="relative py-20 px-4 bg-[#FAF7F2] dark:bg-[#12121A] transition-colors duration-1000">
      
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        
        {/* Encabezado Comercial y Directo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-[#2C2419] dark:text-[#D4AF37] mb-3 drop-shadow-sm transition-colors duration-500">
            Paga con Libertad ⚡
          </h2>
          <p className="font-inter text-base text-[#2C2419]/70 dark:text-white/60 max-w-md mx-auto">
            Aceptamos Bitcoin Lightning y On-Chain. Elige la opción que prefieras para cerrar tu cuenta.
          </p>
        </motion.div>

        {/* Badge de descuento BTC */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="
            relative inline-flex items-center gap-3 
            px-6 py-3 rounded-full
            bg-gradient-to-r from-[#FFF8DC] via-[#FAF0E6] to-[#FFF8DC] 
            dark:from-[#FFF8DC]/10 dark:via-[#FFB347]/20 dark:to-[#FFF8DC]/10
            border-2 border-[#FFF8DC]/60 dark:border-[#FFB347]/40
            shadow-[0_0_30px_rgba(255,248,220,0.4),inset_0_0_20px_rgba(255,250,240,0.3)]
            dark:shadow-[0_0_30px_rgba(255,179,71,0.2),inset_0_0_20px_rgba(255,179,71,0.1)]
            animate-pulse-slow
          ">
            <div className="absolute inset-0 rounded-full bg-[#FFF8DC] opacity-20 blur-xl animate-pulse" />
            
            <div className="
              relative flex items-center justify-center 
              w-8 h-8 rounded-full 
              bg-gradient-to-br from-[#E07A5F] to-[#D4AF37]
              dark:from-[#FFB347] dark:to-[#FF6B9E]
              shadow-lg
            ">
              <span className="text-white text-xs font-bold">%</span>
            </div>
            
            <div className="relative">
              <p className="
                font-playfair text-lg md:text-xl 
                text-[#2C2419] dark:text-[#FFF8DC]
                font-bold tracking-wide
              ">
                15% de Descuento
              </p>
              <p className="
                font-inter text-[10px] md:text-xs
                text-[#2C2419]/70 dark:text-[#FFB347]/80
                uppercase tracking-widest font-semibold
              ">
                Pagando con Bitcoin ⚡
              </p>
            </div>
            
            <div className="relative flex flex-col gap-1">
              <svg className="w-3 h-3 text-[#D4AF37] animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <svg className="w-2 h-2 text-[#E07A5F] animate-pulse delay-75" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Contenedor Principal: Estilo "Caja Registradora Digital" */}
        <motion.div 
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl 
                     bg-white/90 dark:bg-[#1A1A24]/95 backdrop-blur-xl 
                     border border-[#E07A5F]/20 dark:border-[#FFB347]/20 
                     shadow-[0_8px_32px_rgba(44,36,25,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
        >
          
          {/* Tabs de Navegación - SIN FIAT */}
          <div className="flex p-1.5 gap-1 bg-[#E8DDD0]/30 dark:bg-black/20 border-b border-[#E07A5F]/10 dark:border-white/5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 flex items-center justify-center gap-2 py-2.5 px-2 rounded-lg 
                           font-space-grotesk text-xs md:text-sm font-bold transition-all duration-300
                           ${activeTab === tab.id 
                             ? 'text-white dark:text-[#12121A]' 
                             : 'text-[#2C2419]/60 dark:text-white/50 hover:text-[#2C2419] dark:hover:text-white'
                           }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#E07A5F] dark:bg-[#FFB347] rounded-lg shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </span>
              </button>
            ))}
          </div>

          {/* Área de Contenido Dinámico */}
          <div className="p-8 md:p-10 min-h-[380px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: LIGHTNING NETWORK (BTCPay POS) */}
              {activeTab === 'lightning' && (
                <motion.div
                  key="lightning"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-full max-w-sm flex flex-col items-center"
                >
                  
                  {/* Botón Principal: Ir al POS de BTCPay */}
                  <a
                    href={CONFIG.btcpayPosLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mb-6 py-3 px-6 rounded-xl bg-[#E07A5F] hover:bg-[#d66a4f] dark:bg-[#FFB347] dark:hover:bg-[#ffa31a] text-white dark:text-[#12121A] font-space-grotesk font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    <Zap size={16} fill="currentColor" />
                    Abrir Terminal de Pago
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  {/* ✅ TropicalQR para el POS de BTCPay */}
                  <TropicalQR 
                    value={CONFIG.btcpayPosLink}
                    label="ESCANEA PARA PAGAR"
                    size={180}
                  />

                  {/* Copiar Lightning Address como respaldo */}
                  <div className="mt-4 w-full">
                    <p className="font-inter text-[11px] text-[#2C2419]/50 dark:text-white/40 uppercase tracking-widest mb-2 text-center">
                      O copia nuestra Lightning Address:
                    </p>
                    <button
                      onClick={() => handleCopy(CONFIG.lightningAddress)}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg 
                                bg-[#E8DDD0]/30 dark:bg-white/5 border border-[#E07A5F]/10 dark:border-white/10
                                font-space-grotesk text-xs text-[#2C2419] dark:text-[#FFB347] 
                                hover:bg-[#E07A5F]/5 dark:hover:bg-[#FFB347]/5 transition-all group"
                    >
                      <span className="truncate mr-2">{CONFIG.lightningAddress}</span>
                      {copied ? <Check size={14} className="text-[#3D5A51] dark:text-[#FFB347]" /> : <Copy size={14} className="opacity-50 group-hover:opacity-100" />}
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
                  <div className="mb-6 p-4 rounded-xl bg-[#E8DDD0]/20 dark:bg-white/5 border border-dashed border-[#E07A5F]/20 dark:border-white/10">
                    <p className="font-space-grotesk text-xs uppercase tracking-wider text-[#E07A5F] dark:text-[#FFB347] font-bold mb-1 flex items-center justify-center gap-2">
                      <ShieldCheck size={14} /> Transacción Segura
                    </p>
                    <p className="font-inter text-xs text-[#2C2419]/70 dark:text-white/60 leading-relaxed">
                      Ideal para montos mayores o si tu wallet no soporta Lightning.
                      <br/>
                      <span className="opacity-60 font-medium">Confirmación: ~10-60 min.</span>
                    </p>
                  </div>

                  {/* TropicalQR para On-Chain */}
                  <TropicalQR 
                    value={CONFIG.onChainAddress}
                    label="ESCANEAR PARA PAGAR"
                    size={180}
                  />

                  {/* Botón de copia */}
                  <div className="mt-4">
                    <p className="font-inter text-[11px] text-[#2C2419]/50 dark:text-white/40 uppercase tracking-widest mb-2">
                      O copia manualmente:
                    </p>
                    <button
                      onClick={() => handleCopy(CONFIG.onChainAddress)}
                      className={`group relative w-full p-3 rounded-lg border-2 transition-all duration-300 text-left
                                 ${copied 
                                   ? 'border-[#3D5A51] bg-[#3D5A51]/5 dark:bg-[#3D5A51]/10' 
                                   : 'border-[#E07A5F]/20 dark:border-white/10 bg-white/40 dark:bg-[#12121A]/40 hover:border-[#E07A5F] dark:hover:border-[#FFB347]'
                                 }`}
                    >
                      <code className="font-space-grotesk text-xs text-[#2C2419] dark:text-[#FFB347] break-all block pr-8 font-medium">
                        {CONFIG.onChainAddress}
                      </code>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        {copied ? (
                          <Check size={16} className="text-[#3D5A51] dark:text-[#FFB347]" />
                        ) : (
                          <Copy size={16} className="text-[#2C2419]/40 dark:text-white/40 group-hover:text-[#E07A5F] dark:group-hover:text-[#FFB347]" />
                        )}
                      </div>
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}