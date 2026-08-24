"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 transition-opacity opacity-60 hover:opacity-100"
      aria-label="Toggle theme"
    >
      <span className="block h-4 w-4" aria-hidden="true">
        <Sun className="h-4 w-4 dark:hidden" />
        <Moon className="hidden h-4 w-4 dark:block" />
      </span>
    </button>
  );
}
