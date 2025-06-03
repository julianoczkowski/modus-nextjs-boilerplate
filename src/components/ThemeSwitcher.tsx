"use client";

import React from "react";
import { ModusWcThemeSwitcher } from "@trimble-oss/moduswebcomponents-react";
import { ClientOnly } from "./ClientOnly";

export function ThemeSwitcher() {
  return (
    <ClientOnly
      fallback={
        <div className="w-10 h-10 bg-gray-200 rounded animate-pulse"></div>
      }
    >
      <ModusWcThemeSwitcher
        aria-label="Toggle between light and dark theme"
        customClass="theme-switcher"
      />
    </ClientOnly>
  );
}
