"use client";

import { useState, useEffect } from "react";
import { colors, fonts } from "@/styles/tokens";
import { useTypewriter } from "@/hooks/useAnimations";
import type { CVData } from "@/data/types";

interface HeroSectionProps {
  data: Pick<CVData, "name" | "title" | "subtitle" | "about" | "email">;
}

export function HeroSection({ data }: HeroSectionProps) {
  const [started, setStarted] = useState(false);
  const typed = useTypewriter(data.subtitle, 60, started);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 clamp(24px, 8vw, 120px)",
      position: "relative",
      zIndex: 2,
    }}>
      {/* Top bar */}
      <div style={{
        position: "absolute",
        top: 32,
        left: "clamp(24px, 8vw, 120px)",
        right: "clamp(24px, 8vw, 120px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        animation: "fadeInUp 0.8s ease 0.1s both",
      }}>
        <span style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.text.muted, letterSpacing: "0.2em" }}>
          PORTFOLIO.CV — 2026
        </span>
        <nav style={{ display: "flex", gap: 24 }}>
          {[
            { label: "GitHub",   href: "https://github.com/Ilyavosky" },
            { label: "LinkedIn", href: "https://linkedin.com/in/ilya-cortes-ruiz" },
            { label: "Email",    href: `mailto:${data.email}` },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.text.muted, letterSpacing: "0.1em", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = colors.accent.green)}
              onMouseLeave={e => (e.currentTarget.style.color = colors.text.muted)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 900 }}>
        <div style={{ animation: "fadeInUp 0.6s ease 0.2s both" }}>
          <span style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.accent.green, letterSpacing: "0.3em" }}>
            ▸ DISPONIBLE PARA PRÁCTICAS PROFESIONALES
          </span>
        </div>

        <h1 className="hero-name" style={{
          fontFamily: fonts.display,
          fontSize: "clamp(52px, 10vw, 120px)",
          lineHeight: 0.95,
          letterSpacing: "0.04em",
          color: colors.text.primary,
          marginTop: 20,
          textShadow: "0 0 80px rgba(255,255,255,0.05)",
        }}>
          ILYA<br />
          <span style={{ color: colors.accent.green }}>CORTÉS</span><br />
          RUIZ
        </h1>

        {/* Línea animada */}
        <div style={{
          height: 2,
          background: colors.accent.green,
          marginTop: 20,
          animation: started ? "heroLine 1.2s ease 0.8s both" : "none",
        }} />

        {/* Typewriter subtitle */}
        <div style={{ marginTop: 20, height: 28 }}>
          <span style={{ fontFamily: fonts.mono, fontSize: "clamp(13px, 2vw, 17px)", color: colors.text.secondary, letterSpacing: "0.15em" }}>
            {typed}
            <span style={{ animation: "blink 1s infinite", color: colors.accent.green }}>|</span>
          </span>
        </div>

        {/* About */}
        <p style={{
          color: colors.text.muted,
          fontSize: 15,
          maxWidth: 520,
          lineHeight: 1.7,
          marginTop: 24,
          fontFamily: fonts.body,
          fontWeight: 300,
          animation: "fadeInUp 0.8s ease 1.2s both",
        }}>
          {data.about}
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16, marginTop: 40, flexWrap: "wrap", animation: "fadeInUp 0.8s ease 1.4s both" }}>
          <a href={`mailto:${data.email}`}>
            <button
              style={{ fontFamily: fonts.mono, fontSize: 12, background: colors.accent.green, color: "#000", border: "none", padding: "14px 32px", letterSpacing: "0.15em", cursor: "pointer", fontWeight: 700, transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 30px ${colors.accent.green}59`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            >
              CONTACTAR →
            </button>
          </a>
          <button
            style={{ fontFamily: fonts.mono, fontSize: 12, background: "transparent", color: colors.text.primary, border: `1px solid ${colors.border}`, padding: "14px 32px", letterSpacing: "0.15em", cursor: "pointer", transition: "border-color 0.2s, color 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = colors.accent.green; e.currentTarget.style.color = colors.accent.green; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.color = colors.text.primary; }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            VER PROYECTOS ↓
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        animation: "fadeInUp 1s ease 2s both",
      }}>
        <span style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.text.faint, letterSpacing: "0.2em" }}>SCROLL</span>
        <div style={{ width: 1, height: 40, background: `linear-gradient(to bottom, ${colors.accent.green}80, transparent)` }} />
      </div>
    </section>
  );
}
