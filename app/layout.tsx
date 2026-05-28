import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Montserrat, Space_Grotesk } from 'next/font/google';
import "./globals.css";
import { Providers } from "./providers";

// Configuraci??n de Fuentes con Variables CSS
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap'
});
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  variable: '--font-cormorant',
  weight: ['400'], // Added weight to avoid missing weight error
  display: 'swap'
});
const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat',
  display: 'swap'
});
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space-grotesk',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "La Bianca Tropical | Bitcoin & Salsa",
  description: "Del horno de le??a a la pista de salsa. Aceptamos Bitcoin Lightning.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${playfair.variable} ${cormorant.variable} ${montserrat.variable} ${spaceGrotesk.variable} antialiased selection:bg-terracota selection:text-white dark:selection:bg-neon-cian dark:selection:text-[#0F0F1E]`}>
        <Providers>
          {/* Overlay de textura global sutil */}
          <div className="fixed inset-0 z-[-1] palm-overlay" aria-hidden="true" />
          
          {children}
        </Providers>
      </body>
    </html>
  );
}
