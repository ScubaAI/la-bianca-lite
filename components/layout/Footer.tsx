import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-crema dark:bg-[#0F0F1E] border-t border-terracota/20 dark:border-neon-cian/20 pt-16 pb-8 transition-colors duration-500">
      
      {/* Textura de fondo sutil */}
      <div className="absolute inset-0 brick-overlay opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Branding & Diseño */}
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-2xl text-cafe dark:text-dorado mb-4">
              La Bianca <span className="text-terracota dark:text-neon-fucsia italic">Tropical</span>
            </h3>
            <p className="font-montserrat text-sm text-cafe/70 dark:text-white/60 mb-6 leading-relaxed">
              Del horno de leña a la pista de salsa. <br />
              Una experiencia gastronómica única en Mérida.
            </p>
            
            <div className="inline-block px-4 py-2 rounded-lg bg-white/50 dark:bg-[#1A1A2E]/50 border border-terracota/20 dark:border-neon-cian/20">
              <p className="font-space-grotesk text-xs text-cafe/60 dark:text-white/50 uppercase tracking-wider">
                Diseñado por{" "}
                <a 
                  href="https://www.aceptabitcoin.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-terracota dark:text-neon-cian hover:underline font-bold transition-colors"
                >
                  AceptaBitcoin.org
                </a>
              </p>
            </div>
          </div>

          {/* Columna 2: Ubicaciones (Links de Maps ocultos en botones) */}
          <div className="text-center">
            <h4 className="font-playfair text-lg text-cafe dark:text-dorado mb-6">Nuestras Sedes</h4>
            <div className="flex flex-col gap-4 items-center">
              
              {/* Botón Centro */}
              <Link 
                href="https://www.google.com/maps/place/LA+BIANCA+MERIDA/@20.9708264,-89.6240734,17z/data=!3m1!4b1!4m6!3m5!1s0x8f5671ede6ce0efb:0x27e8fc27c3804f5c!8m2!3d20.9708264!4d-89.6214985!16s%2Fg%2F11fn2p345v?coh=245189&entry=tts&g_ep=EgoyMDI1MDUxMS4wIPu8ASoJLDEwMjExNDU1SAFQAw%3D%3D&skid=94287666-4ba7-4da0-bde8-82350c2816bc"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full max-w-xs"
              >
                <div className="glass-card-day dark:glass-card-night px-6 py-3 rounded-xl flex items-center justify-between transition-all duration-300 group-hover:scale-105">
                  <span className="font-montserrat text-sm font-medium text-cafe dark:text-white">📍 Sede Centro</span>
                  <span className="text-terracota dark:text-neon-cian opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </Link>

              {/* Botón La Plancha */}
              <Link 
                href="https://www.google.com/maps/place/Mercado+Gastron%C3%B3mico+Gran+Parque+la+Plancha/@20.978598,-89.6146463,17z/data=!3m1!4b1!4m6!3m5!1s0x8f5671c334509d8d:0xb30905b2d27def69!8m2!3d20.978598!4d-89.6120714!16s%2Fg%2F11l6zx3dxt?coh=245189&entry=tts&g_ep=EgoyMDI1MDUxNS4wIPu8ASoJLDEwMjExNDU1SAFQAw%3D%3D&skid=3dcca878-0eb0-4d1c-9076-e20b8626ef6a"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full max-w-xs"
              >
                <div className="glass-card-day dark:glass-card-night px-6 py-3 rounded-xl flex items-center justify-between transition-all duration-300 group-hover:scale-105">
                  <span className="font-montserrat text-sm font-medium text-cafe dark:text-white">🔥 La Plancha</span>
                  <span className="text-terracota dark:text-neon-cian opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </Link>

            </div>
          </div>

          {/* Columna 3: Contacto & Redes */}
          <div className="text-center md:text-right">
            <h4 className="font-playfair text-lg text-cafe dark:text-dorado mb-6">Conecta con Nosotros</h4>
            
            {/* WhatsApp Directo */}
            <Link 
              href="https://wa.me/5219997503458"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-verde-selva/10 dark:bg-neon-cian/10 text-verde-selva dark:text-neon-cian hover:bg-verde-selva hover:text-white dark:hover:bg-neon-cian dark:hover:text-[#0F0F1E] transition-all duration-300 font-montserrat text-sm font-bold"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              +52 1 999 750 3458
            </Link>

            {/* Iconos Sociales */}
            <div className="flex justify-center md:justify-end gap-4">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/labiancamerida" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/50 dark:bg-[#1A1A2E]/50 text-cafe dark:text-white hover:bg-[#1877F2] hover:text-white dark:hover:bg-[#1877F2] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/labiancatropical/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/50 dark:bg-[#1A1A2E]/50 text-cafe dark:text-white hover:bg-[#E4405F] hover:text-white dark:hover:bg-[#E4405F] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Final */}
        <div className="border-t border-terracota/10 dark:border-neon-cian/10 pt-8 text-center">
          <p className="font-montserrat text-xs text-cafe/50 dark:text-white/40">
            © {currentYear} La Bianca Tropical. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}