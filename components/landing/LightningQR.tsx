"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeSVG } from 'qrcode.react'; // Dependencia clave para SVG nativo
import { 
  Zap, 
  Copy, 
  Check, 
  CreditCard, 
  ExternalLink, 
  Coins,
  ShieldCheck
} from "lucide-react";

// CONFIGURACIÓN CENTRALIZADA
const CONFIG = {
  // 1. Lightning Link para el POS (Blink) - Punto de entrada único
  blinkPosLink: "https://pay.blink.sv/aceptabitcoin?amount=0&memo=&display=MXN",
  
  // 2. Lightning Address (Para copiar si prefieren wallet manual)
  lightningAddress: "aceptabitcoin@blink.sv", 
  
  // 3. Dirección Bitcoin On-Chain (Seguridad)
  onChainAddress: "bc1qg6r7xugjlr4yzrqu5nal526e757pe3hnkp2jlg",
  
  // 4. Opción Fiat: Link directo al POS de Mercado Pago
  mercadoPagoLink: "https://link.mercadopago.com.mx/skinlabclothingclub",
};

type TabId = 'lightning' | 'onchain' | 'fiat';

export function LightningQR() {
  const [activeTab, setActiveTab] = useState<TabId>('lightning');
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      
      // Feedback háptico sutil (vibración corta)
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
    { id: 'fiat', label: 'Tarjeta / SPEI', icon: <CreditCard size={16} /> },
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
            Aceptamos Bitcoin y métodos tradicionales. Elige la opción que prefieras para cerrar tu cuenta.
          </p>
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
          
          {/* Tabs de Navegación */}
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
              
              {/* TAB 1: LIGHTNING NETWORK (Principal) */}
              {activeTab === 'lightning' && (
                <motion.div
                  key="lightning"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-full max-w-sm flex flex-col items-center"
                >
                  
                  {/* Botón Principal: Ir al POS */}
                  <a
                    href={CONFIG.blinkPosLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mb-6 py-3 px-6 rounded-xl bg-[#E07A5F] hover:bg-[#d66a4f] dark:bg-[#FFB347] dark:hover:bg-[#ffa31a] text-white dark:text-[#12121A] font-space-grotesk font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    <Zap size={16} fill="currentColor" />
                    Abrir Terminal de Pago (Blink)
                    <ExternalLink size={14} />
                  </a>

                  {/* QR Nativo SVG */}
                  <div className="relative p-4 rounded-xl bg-white border border-[#E8DDD0] dark:border-[#FFB347]/30 shadow-inner mb-4">
                    <QRCodeSVG
                      value={CONFIG.blinkPosLink} // Mismo destino que el botón
                      size={180}
                      level="H"
                      includeMargin={true}
                      fgColor="#2C2419" // Color oscuro para contraste
                      bgColor="#FFFFFF"
                    />
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#3D5A51] text-white text-[10px] font-space-grotesk font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                      ESCANEA PARA PAGAR
                    </div>
                  </div>

                  {/* Copiar Address como respaldo */}
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

                  <p className="font-inter text-[11px] text-[#2C2419]/50 dark:text-white/40 uppercase tracking-widest mb-2">
                    Dirección Bitcoin (Bech32):
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
                </motion.div>
              )}

              {/* TAB 3: FIAT (MERCADO PAGO) */}
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
                      Pago Tradicional
                    </h4>
                    <p className="font-inter text-xs text-[#2C2419]/70 dark:text-white/60">
                      Tarjetas de crédito/débito, transferencia SPEI o efectivo en OXXO vía Mercado Pago.
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
                      Ir a Pagar con Mercado Pago
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
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

      </div>
    </section>
  );
}