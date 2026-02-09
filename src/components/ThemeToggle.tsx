"use client"

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/theme-context';

export default function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 transition-opacity opacity-60 hover:opacity-100"
      aria-label="Toggle theme"
    >
      {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  );
}
