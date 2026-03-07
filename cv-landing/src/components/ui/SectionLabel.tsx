// ─────────────────────────────────────────────
//  UI Atom — SectionLabel
//  Encabezado de sección con línea decorativa
// ─────────────────────────────────────────────

import { colors, fonts } from "@/styles/tokens";

interface SectionLabelProps {
  label: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
      <span style={{
        fontFamily: fonts.mono,
        fontSize: 11,
        color: colors.accent.green,
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}>
        ▸ {label}
      </span>
      <div style={{
        flex: 1,
        height: 1,
        background: `linear-gradient(90deg, ${colors.accent.green}66 0%, transparent 100%)`,
      }} />
    </div>
  );
}
