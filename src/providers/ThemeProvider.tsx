"use client";

import React, { useEffect } from "react";
import { ModusWcThemeProvider } from "@trimble-oss/moduswebcomponents-react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Fixed to modus-classic-light theme only
  const fixedTheme = {
    theme: "modus-classic" as const,
    mode: "light" as const,
  };

  // Set theme attributes on HTML element to ensure consistency
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute(
        "data-theme",
        "modus-classic-light"
      );
      document.documentElement.setAttribute("data-mode", "light");
      document.documentElement.className = "light";
    }
  }, []);

  return (
    <ModusWcThemeProvider initialTheme={fixedTheme}>
      {children}
    </ModusWcThemeProvider>
  );
}
