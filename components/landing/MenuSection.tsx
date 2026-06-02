"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuData from "@/../data/menu.json";
import { MenuCategoryNav } from "@/components/ui/MenuCategoryNav";
import { MenuItemCard } from "@/components/ui/MenuItemCard";
import { cn } from "@/lib/utils";

type SubcategoriaCoctel = "clasicos" | "tropicales" | "mezcals-tequilas" | "sin-alcohol";

const subcategoriasCoctel: { id: SubcategoriaCoctel; label: string }[] = [
  { id: "clasicos", label: "Clásicos" },
  { id: "tropicales", label: "Tropicales" },
  { id: "mezcals-tequilas", label: "Mezcals / Tequilas" },
  { id: "sin-alcohol", label: "Sin Alcohol" },
];

export function MenuSection() {
  const secciones = (menuData as { secciones: any[] }).secciones;
  const [activeCategory, setActiveCategory] = useState(secciones[0]?.id ?? "");

  const categoriaActiva = secciones.find((s) => s.id === activeCategory);
  const itemsFiltrados = categoriaActiva?.items ?? [];

  const esSeccionCocteles = activeCategory === "cocteles";
  const [subcatActiva, setSubcatActiva] = useState<SubcategoriaCoctel>("clasicos");

  const itemsCoctelesRecomendados = itemsFiltrados.filter(
    (it: any) => it.recomendado && (!it.subcategoria || it.subcategoria === subcatActiva)
  );
  const itemsCoctelesResto = itemsFiltrados.filter(
    (it: any) => !it.recomendado && (!it.subcategoria || it.subcategoria === subcatActiva)
  );

  return (
    <section id="menu" className="py-20 px-4 bg-crema dark:bg-azul-noche transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-cafe dark:text-dorado">
            Nuestro Menú
          </h2>
          <p className="mt-2 font-cormorant italic text-xl text-terracota dark:text-rosa-guayaba">
            Delicias para cada momento
          </p>
        </motion.div>

        <MenuCategoryNav
          categorias={secciones.map((s) => ({ id: s.id, titulo: s.titulo, icono: s.icono }))}
          activeId={activeCategory}
          onChange={(id) => {
            setActiveCategory(id);
            setSubcatActiva("clasicos");
          }}
        />

        <AnimatePresence mode="wait">
          {itemsFiltrados.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl border border-dashed border-terracota/30 dark:border-amber-salsa/30 bg-white/40 dark:bg-white/5 p-10 text-center"
            >
              <span className="text-4xl">✨</span>
              <p className="mt-3 font-playfair text-lg text-cafe dark:text-white/80">
                Próximamente más delicias...
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {esSeccionCocteles && (
                <div className="col-span-full mb-4">
                  <div className="flex flex-wrap gap-2">
                    {subcategoriasCoctel.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setSubcatActiva(sub.id)}
                        className={cn(
                          "rounded-xl px-4 py-2 text-sm font-inter font-semibold transition-all duration-200",
                          subcatActiva === sub.id
                            ? "bg-terracota text-white dark:bg-amber-salsa dark:text-azul-noche shadow-md"
                            : "bg-white/60 dark:bg-white/10 text-cafe dark:text-white/80 hover:bg-terracota/10 dark:hover:bg-amber-salsa/10"
                        )}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {esSeccionCocteles
                ? [...itemsCoctelesRecomendados, ...itemsCoctelesResto].map((item: any, idx: number) => (
                    <MenuItemCard key={item.nombre + idx} {...item} />
                  ))
                : itemsFiltrados.map((item: any, idx: number) => (
                    <MenuItemCard key={item.nombre + idx} {...item} />
                  ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
