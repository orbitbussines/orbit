"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const getSystemTheme = (): Theme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("orbit-theme");
  return savedTheme === "light" || savedTheme === "dark" ? savedTheme : getSystemTheme();
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    if (!theme) {
      return;
    }

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("orbit-theme", theme);
  }, [theme]);

  const activeTheme = theme ?? "light";
  const nextTheme = activeTheme === "dark" ? "light" : "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Cambiar a modo ${nextTheme === "dark" ? "oscuro" : "claro"}`}
      aria-pressed={activeTheme === "dark"}
      onClick={() => setTheme(nextTheme)}
    >
      <Sun className="theme-icon theme-icon-sun" size={18} />
      <Moon className="theme-icon theme-icon-moon" size={18} />
    </button>
  );
}
