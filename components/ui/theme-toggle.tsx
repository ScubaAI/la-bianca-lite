// Toggle manual día/noche (magnanimidad ✨)
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    // Any effect if needed
  }, [setTheme, theme]);

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}