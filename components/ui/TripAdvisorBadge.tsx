import { motion } from "framer-motion";
import Link from "next/link";

export function TripAdvisorBadge() {
  return (
    <Link 
      href="https://www.tripadvisor.com/Restaurant_Review-g150811-d17816214-Reviews-La_Bianca_Tropical-Merida_Yucatan_Peninsula.html"
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 px-4 py-2 rounded-full 
          bg-white/80 dark:bg-[#1A1A24]/80 
          backdrop-blur-md 
          border border-[#E07A5F]/20 dark:border-[#FFB347]/20 
          shadow-[0_4px_12px_rgba(224,122,95,0.1)] dark:shadow-[0_0_12px_rgba(255,179,71,0.1)]
          transition-all duration-300 cursor-pointer"
      >
        <div className="relative w-8 h-8 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#E07A5F] dark:text-[#FFB347]">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/> 
            <circle cx="12" cy="12" r="3" className="opacity-50" />
          </svg>
          <div className="absolute -top-1 -right-1 flex text-[10px] text-[#D4AF37]">
            ★
          </div>
        </div>

        <div className="flex flex-col leading-none">
          <span className="text-[10px] font-space-grotesk uppercase tracking-wider text-[#2C2419]/60 dark:text-white/60">
            Calificación
          </span>
          <span className="text-xs font-inter font-bold text-[#2C2419] dark:text-white group-hover:text-[#E07A5F] dark:group-hover:text-[#FFB347] transition-colors">
            Excelente en TripAdvisor
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
