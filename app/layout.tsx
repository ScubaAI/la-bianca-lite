import type { Metadata } from "next";
import { 
  Playfair_Display, 
  Cormorant_Garamond,
  Inter,
  Space_Grotesk,
  Anton
} from 'next/font/google';
import "./globals.css";
import { Providers } from "./providers";
import { ThemeTimeWatcher } from "@/components/layout/ThemeTimeWatcher";
import Script from "next/script"; // ⚡ NUEVO

// ✅ CONFIGURACIÓN DE FUENTES (Next.js 13+)
const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
});

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-antonio',
});

export const metadata: Metadata = {
  title: "La Bianca Tropical | Bitcoin & Salsa",
  description: "Del horno de leña a la pista de salsa. Aceptamos Bitcoin Lightning.",
  icons: { icon: '/favicon.ico' },
};

// ✅ SCRIPT INLINE ANTI-FLASH (Se ejecuta antes de React)
const themeScript = `
(function() {
  // Solo ejecutar en el cliente para evitar errores durante SSR
  if (typeof window !== 'undefined') {
    try {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var currentMinutesInDay = hours * 60 + minutes;
      var sunsetMinutes = 18 * 60 + 30; // 18:30
      var sunriseMinutes = 6 * 60;      // 06:00
      
      var isDark = currentMinutesInDay >= sunsetMinutes || currentMinutesInDay < sunriseMinutes;
      
      // Solo aplicar si NO hay override manual guardado
      var manualOverride = localStorage.getItem('la-bianca-theme-manual-override');
      if (manualOverride !== 'true') {
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    } catch(e) {}
  }
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* ✅ Inyectar script síncrono para evitar FOUC */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`
        ${playfair.variable} 
        ${cormorant.variable} 
        ${inter.variable}
        ${spaceGrotesk.variable}
        ${anton.variable}
        antialiased
      `}>
        <Providers>
          {/* El watcher ahora solo maneja cambios EN TIEMPO REAL, no el estado inicial */}
          <ThemeTimeWatcher />
          
          <div className="fixed inset-0 z-[-1] palm-overlay" aria-hidden="true" />
          {children}
        </Providers>
        
        {/* ⚡ UMAMI ANALYTICS */}
        <Script 
          src="https://cloud.umami.is/script.js"
          data-website-id="4f9646be-c6c4-4ec2-950c-72d0b7189d7a"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}