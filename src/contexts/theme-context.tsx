"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
  isLight: boolean;
}

const STORAGE_KEY = "portfolio-theme";
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark" || value === "system";
}

function getSystemTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "system";
  }

  const themeFromDocument = document.documentElement.dataset.themePreference;
  if (isTheme(themeFromDocument)) {
    return themeFromDocument;
  }

  const savedTheme = localStorage.getItem(STORAGE_KEY);
  return isTheme(savedTheme) ? savedTheme : "system";
}

function applyThemeToDocument(theme: Theme, resolvedTheme: "light" | "dark") {
  const root = document.documentElement;

  root.classList.remove("light", "dark");
  root.classList.add(resolvedTheme);
  root.dataset.theme = resolvedTheme;
  root.dataset.themePreference = theme;
  root.style.colorScheme = resolvedTheme;

  const themeColors = document.querySelectorAll('meta[name="theme-color"]');
  themeColors.forEach((metaThemeColor) => {
    metaThemeColor.setAttribute(
      "content",
      resolvedTheme === "dark" ? "#000000" : "#ffffff"
    );
  });
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const resolvedTheme = theme === "system" ? getSystemTheme() : theme;

  useEffect(() => {
    applyThemeToDocument(theme, resolvedTheme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [resolvedTheme, theme]);

  useEffect(() => {
    if (theme !== "system") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      applyThemeToDocument(theme, getSystemTheme());
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const currentTheme = prevTheme === "system" ? getSystemTheme() : prevTheme;
      return currentTheme === "dark" ? "light" : "dark";
    });
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDark: resolvedTheme === "dark",
    isLight: resolvedTheme === "light",
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
