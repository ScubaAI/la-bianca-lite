"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MenuItemCardProps {
  nombre: string;
  descripcion: string;
  precio: string;
  badges?: string[];
  recomendado?: boolean;
  iconoPlaceholder?: string;
}

const badgeStyles: Record<string, string> = {
  Vegano: "bg-verde-selva text-white",
  Vegetariano: "bg-verde-selva text-white",
  "Recomendado": "bg-dorado text-azul-noche dark:text-azul-noche",
  Clásico: "bg-dorado text-azul-noche dark:text-azul-noche",
  Picante: "bg-terracota text-white",
  Potente: "bg-terracota text-white",
  default: "bg-cafe/10 text-cafe dark:bg-white/10 dark:text-white",
};

export function MenuItemCard({
  nombre,
  descripcion,
  precio,
  badges = [],
  recomendado = false,
  iconoPlaceholder = "🍽️",
}: MenuItemCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col rounded-2xl
                 bg-white/80 dark:bg-[#1A1A24]/90 backdrop-blur-md
                 border border-terracota/20 dark:border-amber-salsa/30
                 p-5 shadow-terracota-soft dark:shadow-[0_0_20px_rgba(255,179,71,0.08)]
                 hover:shadow-xl hover:-translate-y-1
                 transition-all duration-300"
    >
      {/* Placeholder visual cuando no hay imagen */}
      {!iconoPlaceholder && (
        <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-terracota/10 to-dorado/10 dark:from-amber-salsa/10 dark:to-rosa-guayaba/10 text-5xl">
          {iconoPlaceholder}
        </div>
      )}

      <div className="flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-playfair text-lg font-semibold text-cafe dark:text-dorado leading-snug">
            {nombre}
          </h3>
          {recomendado && (
            <span className="shrink-0 rounded-full bg-dorado/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-dorado dark:text-amber-salsa salsa-shine">
              ★ Top
            </span>
          )}
        </div>

        <p className="mt-1.5 font-inter text-sm text-cafe/70 dark:text-white/60 leading-relaxed">
          {descripcion}
        </p>

        {badges.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {badges.map((badge) => (
              <span
                key={badge}
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
                  badgeStyles[badge] ?? badgeStyles.default
                )}
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 flex items-end justify-between border-t border-terracota/10 dark:border-amber-salsa/10 pt-3">
        <span className="font-space-grotesk text-base font-bold text-terracota dark:text-amber-salsa">
          {precio}
        </span>
      </div>

      {/* EXTENSIBLE: Agregar botón de agregar al pedido aquí */}
    </motion.div>
  );
}
