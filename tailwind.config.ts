import type { Config } from "tailwindcss";

const config: Config = {
  // Asegura que la mutación Día/Noche use la clase inyectada por el watcher de tiempo
  darkMode: "class", 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mapeo Dinámico v1.1 (Sincronizado perfectamente con globals.css)
        // Usar formato funcional permite a Tailwind aplicar opacidades (ej: bg-terracota/20)
        crema: "rgb(var(--background-start-rgb) / <alpha-value>)",
        cafe: "rgb(var(--foreground-rgb) / <alpha-value>)",
        
        // Paleta de Marca Compartida (Centralizada a variables CSS para reactividad)
        terracota: "rgb(var(--terracota) / <alpha-value>)",
        "verde-selva": "rgb(var(--verde-selva) / <alpha-value>)",
        dorado: "rgb(var(--dorado) / <alpha-value>)",
        
        // Paleta Nocturna Explícita (Salsa Nights)
        "amber-salsa": "rgb(var(--amber-salsa) / <alpha-value>)",
        "rosa-guayaba": "rgb(var(--rosa-guayaba) / <alpha-value>)",
        "purpura-profundo": "rgb(var(--purpura-profundo) / <alpha-value>)",
        "azul-noche": "#12121A",      // Fondo base noche estático
        "azul-profundo": "#1A1A24",   // Superficies / Cards noche estáticas
        
        // Capa de Compatibilidad de Tokens (Mapeo limpio para no romper componentes heredados)
        "neon-fucsia": "rgb(var(--rosa-guayaba) / <alpha-value>)",
        "neon-cian": "rgb(var(--amber-salsa) / <alpha-value>)",
        purpura: "rgb(var(--purpura-profundo) / <alpha-value>)",
      },
      fontFamily: {
        // Mapeo exacto de las fuentes oficiales inyectadas en layout.tsx
        anton: ["var(--font-anton)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        "space-grotesk": ["var(--font-space-grotesk)", "monospace"],
        
        // Aliases semánticos para facilitar el desarrollo rápido
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-space-grotesk)", "monospace"],
      },
      boxShadow: {
        // Traslado de sombras del Design System v1.1 directo a clases útiles
        "salsa-glow": "0 0 12px rgba(255, 179, 71, 0.3)",
        "terracota-soft": "0 4px 12px rgba(224, 122, 95, 0.15)",
        "dorado-border": "inset 0 0 0 1px rgba(212, 175, 55, 0.4)",
      },
      animation: {
        // Extendemos únicamente animaciones estructurales nativas si se requieren en componentes sueltos
        "bounce-slow": "bounce 3s infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;