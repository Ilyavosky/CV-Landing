import { colors } from "@/styles/tokens";

export function Grain() {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat",
      backgroundSize: "200px 200px",
      mixBlendMode: "overlay",
    }} />
  );
}

export function GridBg() {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
      `,
      backgroundSize: "80px 80px",
    }} />
  );
}

const ORB_CONFIG = [
  { c: colors.accent.green, x: "10%", y: "20%", s: 400, blur: 150, dur: 18 },
  { c: colors.accent.purple, x: "80%", y: "60%", s: 350, blur: 120, dur: 22 },
  { c: colors.accent.red, x: "60%", y: "10%", s: 280, blur: 100, dur: 26 },
  { c: colors.accent.yellow, x: "20%", y: "80%", s: 200, blur: 80, dur: 30 },
] as const;

export function Orbs() {
  return (
    <>
      {ORB_CONFIG.map((orb, i) => (
        <div key={i} style={{
          position: "fixed",
          left: orb.x, top: orb.y,
          width: orb.s, height: orb.s,
          borderRadius: "50%",
          background: orb.c,
          opacity: 0.07,
          filter: `blur(${orb.blur}px)`,
          zIndex: 0,
          pointerEvents: "none",
          animation: `drift ${orb.dur}s ease-in-out infinite`,
          animationDelay: `${i * 2}s`,
        }} />
      ))}
    </>
  );
}

export function Scanline() {
  return (
    <div style={{
      position: "fixed", left: 0, right: 0, height: 2,
      background: `linear-gradient(90deg, transparent, ${colors.accent.green}4D, transparent)`,
      animation: "scanline 8s linear infinite",
      pointerEvents: "none",
      zIndex: 1,
    }} />
  );
}

export { Grain as default };
