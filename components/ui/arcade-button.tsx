"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ArcadeButtonProps {
  variant?: "day" | "night" | "auto";
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export function ArcadeButton({ children, className = "", ...props }: ArcadeButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative px-8 py-4 font-bold text-lg tracking-wider uppercase
        bg-terracota text-white dark:bg-[#0F0F1E] dark:text-neon-fucsia
        border-2 border-terracota dark:border-neon-fucsia
        rounded-lg overflow-hidden transition-all duration-300
        shadow-[0_4px_0_rgb(160,80,60)] active:shadow-none active:translate-y-[4px]
        dark:shadow-[0_0_15px_rgba(255,46,147,0.4)] dark:hover:shadow-[0_0_25px_rgba(255,46,147,0.6)]
        ${className}
      `}
      {...props}
    >
      {/* Efecto de brillo deslizante */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}