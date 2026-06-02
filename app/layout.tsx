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

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap'
});

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  variable: '--font-cormorant',
  weight: ['400'],
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space-grotesk',
  display: 'swap'
});

const anton = Anton({
  subsets: ['latin'], 
  variable: '--font-anton',
  weight: ['400'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "La Bianca Tropical | Bitcoin & Salsa",
  description: "Del horno de leña a la pista de salsa. Aceptamos Bitcoin Lightning.",
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
      <body className={`
        ${playfair.variable} 
        ${cormorant.variable} 
        ${inter.variable}
        ${spaceGrotesk.variable}
        ${anton.variable}
        antialiased
      `}>
        <Providers>
          <ThemeTimeWatcher />
          
          {/* Overlay de textura existente */}
          <div className="fixed inset-0 z-[-1] palm-overlay" aria-hidden="true" />
          
          {/* Nuevo: Brick overlay opcional (comentado, descomentar si quieres textura colonial) */}
          {/* <div className="fixed inset-0 z-[-1] brick-overlay" aria-hidden="true" /> */}
          
          {children}
        </Providers>
      </body>
    </html>
  );
}