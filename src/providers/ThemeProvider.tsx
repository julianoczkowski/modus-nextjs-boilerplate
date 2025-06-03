"use client";

import React from "react";
import { ModusWcThemeProvider } from "@trimble-oss/moduswebcomponents-react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const initialTheme = {
    theme: "modus-classic" as const,
    mode: "light" as const,
  };

  return (
    <ModusWcThemeProvider initialTheme={initialTheme}>
      {children}
    </ModusWcThemeProvider>
  );
}
