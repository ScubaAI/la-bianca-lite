export function LightningQR({ qrSrc, walletAddr }: { qrSrc: string; walletAddr: string }) {
  return (
    <div className="group relative inline-block p-1 rounded-2xl bg-gradient-to-br from-dorado to-terracota dark:from-neon-cian dark:to-purpura animate-gradient-rotate">
      
      {/* Contenedor interno con glassmorphism */}
      <div className="relative bg-white dark:bg-[#0F0F1E] rounded-xl p-6 backdrop-blur-sm border border-white/20">
        
        {/* QR Image */}
        <img 
          src={qrSrc} 
          alt="Lightning QR" 
          className="w-48 h-48 md:w-64 md:h-64 mx-auto transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badge flotante */}
        <div className="absolute -top-3 -right-3 bg-verde-selva dark:bg-neon-cian text-white dark:text-[#0F0F1E] text-xs font-mono font-bold px-3 py-1 rounded-full shadow-lg animate-bounce-slow">
          ⚡ LIGHTNING
        </div>
      </div>

      {/* Dirección wallet debajo */}
      <p className="mt-4 font-mono text-xs text-center text-cafe/70 dark:text-neon-cian/80 break-all max-w-[280px] mx-auto select-all cursor-pointer hover:text-terracota dark:hover:text-white transition-colors">
        {walletAddr}
      </p>
    </div>
  );
}
