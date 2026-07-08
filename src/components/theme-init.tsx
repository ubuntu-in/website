"use client";

import { useEffect } from "react";

const LOCAL_STORAGE_KEY = "theme";

function loadTheme(): string {
  if (typeof window === "undefined") return "system";
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  return saved || "system";
}

function isDarkTheme(theme: string) {
  if (theme === "system") {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }
  return theme === "dark";
}

function applyTheme(theme: string): void {
  if (isDarkTheme(theme)) {
    document.body.classList.add("is-dark");
    document.documentElement.style.colorScheme = "dark";
  } else {
    document.body.classList.remove("is-dark");
    document.documentElement.style.colorScheme = "light";
  }
}

export function ThemeInit() {
  useEffect(() => {
    const theme = loadTheme();
    applyTheme(theme);
  }, []);
  return null;
}
