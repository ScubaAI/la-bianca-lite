import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // Habilita modo oscuro manual/automático
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Día (Mediterráneo)
        crema: "#FAF7F2",
        cafe: "#2C2419",
        terracota: "#E07A5F",
        "verde-selva": "#3D5A51",
        dorado: "#D4AF37",
        
        // Paleta Noche (Neon Nights)
        "neon-fucsia": "#FF2E93",
        "neon-cian": "#00F5D4",
        purpura: "#9B5DE5",
        "azul-noche": "#0F0F1E",
        "azul-profundo": "#1A1A2E",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "monospace"],
      },
      animation: {
        // Animaciones personalizadas del Design System
        "steam-rise": "steam-rise 3s ease-out infinite",
        "palm-sway": "palm-sway 4s ease-in-out infinite",
        "lightning-pulse": "lightning-pulse 3s infinite",
        "gradient-rotate": "gradient-rotate 4s ease infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        "steam-rise": {
          "0%": { transform: "translateY(0) scaleX(1)", opacity: "0" },
          "15%": { opacity: "0.8" },
          "50%": { transform: "translateY(-40px) scaleX(1.5)", opacity: "0.5" },
          "100%": { transform: "translateY(-80px) scaleX(2)", opacity: "0" },
        },
        "palm-sway": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "lightning-pulse": {
          "0%, 95%": { opacity: "0.5" },
          "5%, 10%": { opacity: "1", filter: "brightness(2)" },
        },
        "gradient-rotate": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;