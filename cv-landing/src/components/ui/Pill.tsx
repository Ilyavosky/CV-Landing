// ─────────────────────────────────────────────
//  UI Atom — Pill
//  Etiqueta de tecnología con hover colorido
// ─────────────────────────────────────────────

"use client";

import { useState } from "react";
import { fonts } from "@/styles/tokens";

interface PillProps {
  label: string;
  accent: string;
}

export function Pill({ label, accent }: PillProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block",
        padding: "4px 14px",
        border: `1px solid ${hovered ? accent : "rgba(255,255,255,0.15)"}`,
        borderRadius: 2,
        background: hovered ? `${accent}18` : "transparent",
        color: hovered ? accent : "rgba(255,255,255,0.7)",
        fontSize: 12,
        fontFamily: fonts.mono,
        cursor: "default",
        transition: "all 0.2s ease",
        letterSpacing: "0.05em",
      }}
    >
      {label}
    </span>
  );
}
