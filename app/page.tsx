import Navbar from "@/components/layout/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { MenuSection } from "@/components/landing/MenuSection"; // ✅ IMPORTANTE: Agregar esto
import { BookingSection } from "@/components/landing/BookingSection";
import { Cartelera } from "@/components/sections/Cartelera";
import { LightningQR } from "@/components/landing/LightningQR";
import { TrustBadge } from "@/components/landing/TrustBadge";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { PagaAquiFloat } from "@/components/ui/paga-aqui-float";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAF7F2] dark:bg-[#12121A] transition-colors duration-500">
      <Navbar />
      
      {/* 1. Hero: La primera impresión */}
      <HeroSection />
      
      {/* 2. Menú: Donde aterriza el comensal al hacer scroll */}
      <MenuSection /> 
      
      {/* 3. Booking: Conversión inmediata después de ver el menú */}
      <BookingSection />
      
      {/* 4. Cartelera: Entretenimiento nocturno */}
      <Cartelera />
      
      {/* 5. Lightning QR: Pago crypto nativo */}
      <LightningQR />
      
      {/* 6. Trust & Footer: Cierre de confianza */}
      <TrustBadge />
      <Footer />
      
      {/* Botones Flotantes */}
      <PagaAquiFloat />
      <WhatsAppFloat />
    </main>
  );
}