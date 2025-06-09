"use client";

import React from "react";
import { ModusWcBadge } from "@trimble-oss/moduswebcomponents-react";
import { ClientOnly } from "./ClientOnly";

export function ThemeSwitcher() {
  return (
    <ClientOnly
      fallback={
        <div className="w-32 h-8 bg-gray-200 rounded animate-pulse"></div>
      }
    >
      <ModusWcBadge
        content="Classic Light"
        color="primary"
        aria-label="Current theme: Modus Classic Light"
      />
    </ClientOnly>
  );
}
