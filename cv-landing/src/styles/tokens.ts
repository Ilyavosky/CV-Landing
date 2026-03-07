export const colors = {
  bg: "#000000",
  surface: "rgba(255,255,255,0.02)",
  border: "rgba(255,255,255,0.08)",
  text: {
    primary:   "#ffffff",
    secondary: "rgba(255,255,255,0.65)",
    muted:     "rgba(255,255,255,0.35)",
    faint:     "rgba(255,255,255,0.15)",
  },
  accent: {
    green:  "#00ff88",
    red:    "#ff6b6b",
    yellow: "#ffd93d",
    purple: "#a78bfa",
  },
} as const;

export const skillAccents = [
  colors.accent.green,
  colors.accent.red,
  colors.accent.yellow,
  colors.accent.purple,
] as const;

export const fonts = {
  display: "'Bebas Neue', sans-serif",
  mono:    "'Space Mono', monospace",
  body:    "'DM Sans', sans-serif",
} as const;

export const googleFontsUrl =
  "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap";
