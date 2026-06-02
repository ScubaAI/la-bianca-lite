"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeTimeWatcher() {
  const { setTheme } = useTheme();

  useEffect(() => {
    const checkTimeAndSetTheme = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      
      // Convertimos la hora actual a minutos transcurridos en el día
      const currentMinutesInDay = hours * 60 + minutes;
      
      // 18:30 hrs según tu DESIGN_SYSTEM.md (18 * 60 + 30 = 1110 minutos)
      const sunsetMinutes = 18 * 60 + 30; 
      
      // Definimos las 6:00 AM como la hora en la que amanece y vuelve el mood mediterráneo
      const sunriseMinutes = 6 * 60;       

      // Si la hora actual es igual o mayor a las 18:30 o menor a las 6:00 AM -> MODO NOCHE ("dark")
      if (currentMinutesInDay >= sunsetMinutes || currentMinutesInDay < sunriseMinutes) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };

    // Se ejecuta de inmediato cuando el usuario entra a la página
    checkTimeAndSetTheme();

    // Revisa el reloj automáticamente cada 30 segundos por si el usuario deja la página abierta en el cambio de turno
    const interval = setInterval(checkTimeAndSetTheme, 30000);
    return () => clearInterval(interval);
  }, [setTheme]);

  return null; // Este componente no renderiza nada visual, solo opera en el background
}
