"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Music, Mic2, CalendarDays, ArrowRight } from "lucide-react";

interface Evento {
  id: number;
  dia: string;
  grupo: string;
  tipo: "Grupo en Vivo" | "DJ Set" | "Brunch Musical";
  horaInicio: string;
  horaFin: string;
  imagenUrl: string;
  imagenAlt: string;
}

const eventos: Evento[] = [
  {
    id: 1,
    dia: "MARTES",
    grupo: "Grupo Son Cache",
    tipo: "Grupo en Vivo",
    horaInicio: "18:30",
    horaFin: "03:00",
    imagenUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    imagenAlt: "Banda de salsa en vivo tocando instrumentos tradicionales"
  },
  {
    id: 2,
    dia: "MIÉRCOLES",
    grupo: "Grupo Los Juglares",
    tipo: "Grupo en Vivo",
    horaInicio: "18:30",
    horaFin: "03:00",
    imagenUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
    imagenAlt: "Músicos latinos interpretando en escenario con luces cálidas"
  },
  {
    id: 3,
    dia: "JUEVES",
    grupo: "Grupo La Bruja",
    tipo: "Grupo en Vivo",
    horaInicio: "18:30",
    horaFin: "03:00",
    imagenUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
    imagenAlt: "Concierto de música tropical con público bailando"
  },
  {
    id: 4,
    dia: "VIERNES",
    grupo: "Grupo Latín Power",
    tipo: "Grupo en Vivo",
    horaInicio: "18:30",
    horaFin: "03:00",
    imagenUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
    imagenAlt: "Noche de fiesta latina con luces neón y ambiente festivo"
  },
  {
    id: 5,
    dia: "SÁBADO",
    grupo: "Grupo Gitanos",
    tipo: "Grupo en Vivo",
    horaInicio: "18:30",
    horaFin: "03:00",
    imagenUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    imagenAlt: "Escenario iluminado con banda de salsa y ambiente nocturno"
  },
  {
    id: 6,
    dia: "DOMINGO",
    grupo: "DJ Salsa & Brunch",
    tipo: "Brunch Musical",
    horaInicio: "13:00",
    horaFin: "22:00",
    imagenUrl: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80",
    imagenAlt: "Brunch dominical con música latina al aire libre"
  }
];

function EventCard({ evento, index }: { evento: Evento; index: number }) {
  const handleReservaClick = () => {
    const bookingSection = document.getElementById("booking") || document.getElementById("reservas");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
        bg-white dark:bg-[#1A1A24] 
        border border-[#E8DDD0]/50 dark:border-white/10 
        hover:-translate-y-1"
    >
      {/* Imagen de fondo con altura optimizada */}
      <div className="relative h-48 md:h-52 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
        <Image
          src={evento.imagenUrl}
          alt={evento.imagenAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={index < 3}
        />
        {/* Gradiente reforzado para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        
        {/* Badge En Vivo / Tipo de Evento */}
        <div className="absolute top-3 left-3 z-10">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full 
                           text-[10px] font-inter font-bold uppercase tracking-widest shadow-sm
                           ${evento.tipo === 'Brunch Musical' 
                             ? 'bg-[#3D5A51] text-white' 
                             : 'bg-[#E07A5F] dark:bg-[#FFB347] text-white dark:text-[#12121A] animate-pulse'}`}>
            {evento.tipo === 'Brunch Musical' ? <Music size={10} /> : <Mic2 size={10} />}
            {evento.tipo.toUpperCase()}
          </span>
        </div>

        {/* Día de la semana */}
        <div className="absolute bottom-3 left-4 z-10">
          <h3 className="font-anton text-3xl md:text-4xl text-white tracking-wide uppercase drop-shadow-md">
            {evento.dia}
          </h3>
        </div>
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="p-5 bg-white/95 dark:bg-[#1A1A24]/95 backdrop-blur-md">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <p className="font-inter text-[11px] text-[#2C2419]/60 dark:text-white/40 font-semibold uppercase tracking-wider mb-1">
              {evento.grupo}
            </p>
            <h4 className="font-playfair font-bold text-lg text-[#2C2419] dark:text-[#D4AF37] leading-snug">
              {evento.tipo === 'Brunch Musical' ? 'Ritmo & Sabor' : 'Noche de Salsa'}
            </h4>
          </div>
          <div className="flex-shrink-0 bg-[#E07A5F]/10 dark:bg-[#FFB347]/10 p-2 rounded-xl">
            <CalendarDays size={18} className="text-[#E07A5F] dark:text-[#FFB347]" />
          </div>
        </div>

        <div className="flex items-center justify-between pt-3.5 border-t border-[#E8DDD0] dark:border-white/10">
          <div className="flex items-center gap-1.5 text-xs font-inter text-[#2C2419]/80 dark:text-white/70">
            <span className="font-bold">{evento.horaInicio}</span>
            <span className="text-[#E07A5F] dark:text-[#FFB347]">-</span>
            <span>{evento.horaFin}</span>
          </div>
          
          <button 
            onClick={handleReservaClick}
            className="flex items-center gap-1 text-xs font-inter font-bold 
                       text-[#E07A5F] dark:text-[#FFB347] hover:gap-2 transition-all group/btn cursor-pointer"
          >
            RESERVAR
            <ArrowRight size={12} className="transition-transform group-hover/btn:translate-x-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function Cartelera() {
  return (
    <section 
      id="cartelera" 
      className="relative py-24 px-4 bg-[#FAF7F2] dark:bg-[#12121A] transition-colors duration-1000 overflow-hidden"
    >
      {/* Textura decorativa sutil */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/textures/palm-pattern.png')] bg-repeat" 
        aria-hidden="true" 
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Encabezado */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-anton text-5xl md:text-6xl lg:text-7xl text-[#2C2419] dark:text-[#D4AF37] mb-4 tracking-wide uppercase drop-shadow-sm">
            CARTELERA SEMANAL
          </h2>
          <p className="font-cormorant text-xl md:text-2xl text-[#E07A5F] dark:text-[#FFB347] italic mb-6">
            "La noche empieza con ritmo y buena mesa"
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                          bg-[#E07A5F]/10 dark:bg-[#FFB347]/10 border border-[#E07A5F]/20 dark:border-[#FFB347]/30">
            <CalendarDays size={14} className="text-[#E07A5F] dark:text-[#FFB347]" />
            <span className="text-xs font-inter font-medium text-[#2C2419]/80 dark:text-white/80">
              Martes a Domingo • Música en vivo hasta las 3 AM
            </span>
          </div>
        </motion.div>

        {/* Grid de Eventos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {eventos.map((evento, idx) => (
            <EventCard key={evento.id} evento={evento} index={idx} />
          ))}
        </div>

        {/* CTA Footer */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="font-inter text-xs text-[#2C2419]/60 dark:text-white/50 mb-4 uppercase tracking-wider">
            ¿Quieres anunciar tu evento en La Bianca Tropical?
          </p>
          <a 
            href="https://wa.me/5219997503458?text=Hola%2C%20me%20interesa%20anunciar%20un%20evento%20en%20La%20Bianca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
                       border-2 border-[#E07A5F] dark:border-[#FFB347] 
                       text-[#E07A5F] dark:text-[#FFB347] 
                       hover:bg-[#E07A5F] hover:text-white 
                       dark:hover:bg-[#FFB347] dark:hover:text-[#12121A] 
                       transition-all duration-300 font-inter text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-[#E07A5F]/20"
          >
            <Mic2 size={14} />
            Contacta a nuestro organizador
          </a>
        </motion.div>

      </div>
    </section>
  );
}