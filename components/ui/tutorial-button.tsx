"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface TutorialButtonProps {
  title: string;
  subtitle: string;
  href: string;
  icon?: React.ReactNode;
}

export function TutorialButton({
  title,
  subtitle,
  href,
  icon = <YouTubeIcon />
}: TutorialButtonProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full md:w-auto inline-flex items-center justify-between gap-3 px-4 py-3 rounded-xl
        bg-white dark:bg-[#1A1A24]
        border border-[#E07A5F]/40 dark:border-[#FFB347]/50
        shadow-[0_4px_12px_rgba(224,122,95,0.05)] dark:shadow-[0_0_15px_rgba(255,179,71,0.15)]
        hover:border-[#E07A5F] dark:hover:border-[#FFB347]
        transition-all duration-300"
    >
      <div className="flex items-center gap-3 text-left">
        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
        <div>
          <p className="font-space-grotesk text-[10px] text-[#E07A5F] dark:text-[#FFB347] uppercase tracking-widest font-bold">
            {subtitle}
          </p>
          <p className="font-inter text-xs font-bold text-[#2C2419] dark:text-white flex items-center gap-1">
            {title}
          </p>
        </div>
      </div>
      <ExternalLink size={14} className="text-[#E07A5F] dark:text-[#FFB347] group-hover:translate-x-1 transition-transform" />
    </motion.a>
  );
}

function YouTubeIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        fill="#FF0000"
      />
    </svg>
  );
}
