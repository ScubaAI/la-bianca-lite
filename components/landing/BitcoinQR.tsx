"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BitcoinQRProps {
  qrSrc: string;       // Ruta local ej: "/images/bitcoin-qr.jpg"
  walletAddr: string;  // Dirección Lightning string
}

export function BitcoinQR({ qrSrc, walletAddr }: BitcoinQRProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-crema to-white dark:from-[#0F0F1E] dark:to-[#1A1A2E] transition-colors duration-500">
      <div className="container mx-auto max-w-3xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-cafe dark:text-dorado mb-4">
            Paga con <span className="text-terracota dark:text-neon-cian">Bitcoin</span>
          </h2>
          <p className="font-montserrat text-cafe/80 dark:text-white/70 max-w-lg mx-auto">
            Rápido, seguro y sin comisiones bancarias. Escanea el código con tu wallet Lightning favorita.
          </p>
        </motion.div>

        {/* Contenedor del QR con Borde Animado */}
        <motion.div 
          className="relative inline-block p-1 rounded-2xl bg-gradient-to-br from-dorado via-terracota to-dorado dark:from-neon-cian dark:via-neon-fucsia dark:to-purpura animate-gradient-rotate shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="bg-white dark:bg-[#0F0F1E] rounded-xl p-6 relative">
            
            {/* Badge Flotante */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-verde-selva dark:bg-neon-cian text-white dark:text-[#0F0F1E] px-4 py-1 rounded-full font-montserrat text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2">
              <span className="animate-pulse">⚡</span> Lightning Network
            </div>

            {/* Imagen QR Estática */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto bg-white rounded-lg overflow-hidden border-2 border-transparent">
              <Image 
                src={qrSrc} 
                alt="QR Code para pago Lightning" 
                fill 
                className="object-contain p-2"
                priority
              />
              {/* Overlay sutil de hojas dentro del QR para branding */}
              <div className="absolute inset-0 palm-overlay opacity-10 pointer-events-none" />
            </div>

          </div>
        </motion.div>

        {/* Dirección Wallet Copiable */}
        <motion.div 
          className="mt-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-montserrat text-xs text-cafe/60 dark:text-white/50 mb-2 uppercase tracking-widest">
            O copia la dirección Lightning:
          </p>
          <code className="block w-full p-4 rounded-lg bg-white/50 dark:bg-[#1A1A2E]/50 border border-terracota/20 dark:border-neon-cian/30 font-space-grotesk text-sm text-cafe dark:text-neon-cian break-all select-all cursor-text hover:bg-white dark:hover:bg-[#1A1A2E] transition-colors">
            {walletAddr}
          </code>
        </motion.div>

        {/* Link Educativo */}
        <div className="mt-6">
          <a 
            href="https://aceptabitcoin.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-montserrat text-sm text-terracota dark:text-neon-fucsia hover:underline underline-offset-4 transition-all"
          >
            ¿Qué es Lightning Network? Aprende aquí →
          </a>
        </div>

      </div>
    </section>
  );
}