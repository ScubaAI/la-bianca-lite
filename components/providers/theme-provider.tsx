// next-themes wrapper (auto day/night)
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    // Set theme based on system preference if no theme is set
    if (!theme) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      setTheme(systemTheme);
    }
  }, [setTheme, theme]);

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}