"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      // Quitamos 'system' para controlar nosotros el flujo horario
      defaultTheme="light" 
      enableSystem={false} 
      disableTransitionOnChange={false} // Mantener para transiciones suaves animadas
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}