'use client';

import { QRCodeSVG } from 'qrcode.react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface TropicalQRProps {
  value: string;
  size?: number;
  label?: string; // Ej: "Escanea el Menú"
}

export function TropicalQR({ value, size = 180, label }: TropicalQRProps) {
  const { theme, resolvedTheme } = useTheme();
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    // Detectar si es de noche por hora o por tema forzado
    const hour = new Date().getHours();
    const isNightByTime = hour >= 18 || hour < 6;
    setIsNight(resolvedTheme === 'dark' || isNightByTime);
  }, [resolvedTheme]);

  // Colores del Design System
  const fgColor = isNight ? '#FFB347' : '#2C2419'; // Amber Salsa vs Marrón Café
  const bgColor = isNight ? '#1A1A24' : '#FAF7F2'; // Superficie Nocturna vs Crema

  return (
    <div className="flex flex-col items-center gap-3">
      <div className={`
        relative p-4 rounded-xl transition-all duration-500
        ${isNight 
          ? 'bg-[#1A1A24]/90 border border-[#FFB347]/30 shadow-[0_0_15px_rgba(255,179,71,0.15)]' 
          : 'bg-white/90 border border-[#E07A5F]/20 shadow-[0_4px_12px_rgba(224,122,95,0.1)]'}
      `}>
        <QRCodeSVG
          value={value}
          size={size}
          level="H" // Alta corrección de errores (por si le cae salsa encima 😂)
          includeMargin={true}
          fgColor={fgColor}
          bgColor={bgColor}
          imageSettings={{
            src: isNight ? "/images/logo-night.png" : "/images/logo-day.png", // Opcional: Logo central
            x: undefined,
            y: undefined,
            height: size * 0.2,
            width: size * 0.2,
            excavate: true,
          }}
        />
        
        {/* Badge decorativo inferior */}
        <div className={`
          absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-space-grotesk font-bold uppercase tracking-wider whitespace-nowrap
          ${isNight ? 'bg-[#3D5A51] text-white' : 'bg-[#E07A5F] text-white'}
        `}>
          {label || "ESCANEA AQUÍ"}
        </div>
      </div>
    </div>
  );
}