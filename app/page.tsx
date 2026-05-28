import { HeroSection } from "@/components/landing/HeroSection";
import { BookingSection } from "@/components/landing/BookingSection";
import { BitcoinQR } from "@/components/landing/BitcoinQR";
import { TrustBadge } from "@/components/landing/TrustBadge";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  // Datos hardcodeados para la versión Lite
  const BITCOIN_QR_SRC = "/images/bitcoin-qr.jpg"; // Asegúrate de tener esta imagen en public/images
  const WALLET_ADDRESS = "lnbc1... (tu dirección real de Blink) ...xyz";

  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Hero Inmersivo */}
      <HeroSection />

      {/* 2. Reservas Cal.com */}
      <BookingSection />

      {/* 3. Pagos Bitcoin */}
      <BitcoinQR qrSrc={BITCOIN_QR_SRC} walletAddr={WALLET_ADDRESS} />

      {/* 4. Trust Badge */}
      <TrustBadge />

      {/* 5. Footer */}
      <Footer />
    </main>
  );
}