"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Categoria {
  id: string;
  titulo: string;
  icono: string;
}

interface MenuCategoryNavProps {
  categorias: Categoria[];
  activeId: string;
  onChange: (id: string) => void;
}

export function MenuCategoryNav({
  categorias,
  activeId,
  onChange,
}: MenuCategoryNavProps) {
  const showVerTodas = categorias.length > 8;

  return (
    <div className="relative mb-10">
      <div
        className="flex gap-2 overflow-x-auto rounded-2xl bg-white/60 dark:bg-[#1A1A24]/80 backdrop-blur-xl
                   border border-terracota/20 dark:border-amber-salsa/30 p-2
                   scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {categorias.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={cn(
              "relative snap-center whitespace-nowrap rounded-xl px-4 py-2.5 font-anton text-sm font-medium uppercase tracking-wide",
              "transition-colors duration-200",
              activeId === cat.id
                ? "text-white dark:text-azul-noche"
                : "text-cafe/70 dark:text-white/70 hover:text-cafe dark:hover:text-white"
            )}
          >
            {activeId === cat.id && (
              <motion.span
                layoutId="activeCategory"
                className="absolute inset-0 rounded-xl bg-terracota dark:bg-amber-salsa shadow-md"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <span className="text-base leading-none">{cat.icono}</span>
              {cat.titulo}
            </span>
          </button>
        ))}
      </div>

      {/* EXTENSIBLE: Implementar botón "Ver todas" cuando hay más de 8 categorías */}
      {showVerTodas && (
        <div className="mt-2 text-center">
          <span className="text-xs font-inter text-cafe/50 dark:text-white/40 italic">
            // TODO: Mostrar todas las categorías en menú expandible vertical
          </span>
        </div>
      )}
    </div>
  );
}
