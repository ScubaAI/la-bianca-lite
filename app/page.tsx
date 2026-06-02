import Navbar from "@/components/layout/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { BookingSection } from "@/components/landing/BookingSection";
import { Cartelera } from "@/components/sections/Cartelera";
import { LightningQR } from "@/components/landing/LightningQR";
import { TrustBadge } from "@/components/landing/TrustBadge";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const BITCOIN_QR_SRC = "/images/bitcoin-qr.jpg";
  const WALLET_ADDRESS = "lnbc1... (tu dirección real de Blink) ...xyz";

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <BookingSection />
      <Cartelera />
      <LightningQR qrSrc={BITCOIN_QR_SRC} walletAddr={WALLET_ADDRESS} />
      <TrustBadge />
      <Footer />
    </main>
  );
}