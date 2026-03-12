"use client";

import { useState } from "react";
import { fonts } from "@/styles/tokens";
import { Pill } from "./Pill";
import { useInView } from "@/hooks/useAnimations";
import type { Entry } from "@/data/types";

interface ThemedProjectCardProps {
  entry: Entry;
  index: number;
  flipped?: boolean;
}

export function ThemedProjectCard({ entry, index, flipped = false }: ThemedProjectCardProps) {
  const [ref, visible] = useInView(0.08);
  const [hovered, setHovered] = useState(false);

  const { theme, color } = entry;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : `translateY(60px)`,
        transition: `opacity 0.9s ease ${index * 0.12}s, transform 0.9s ease ${index * 0.12}s`,
        position: "relative",
        overflow: "hidden",
        borderRadius: 0,
      }}
    >
      <div style={{
        position: "absolute",
        inset: 0,
        background: theme.gradient,
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: theme.pattern,
        backgroundRepeat: "repeat",
        opacity: hovered ? 0.8 : 0.4,
        transition: "opacity 0.6s ease",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div style={{
        position: "absolute",
        top: -60,
        right: flipped ? "auto" : -60,
        left: flipped ? -60 : "auto",
        width: 260,
        height: 260,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color}${hovered ? "14" : "08"} 0%, transparent 70%)`,
        transition: "all 0.6s ease",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div style={{
        position: "absolute",
        bottom: -40,
        left: flipped ? "auto" : -40,
        right: flipped ? -40 : "auto",
        width: 180,
        height: 180,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color}0a 0%, transparent 70%)`,
        animation: "pulseGlow 4s ease-in-out infinite",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div style={{
        position: "relative",
        zIndex: 1,
        display: "grid",
        gridTemplateColumns: flipped ? "1fr auto" : "auto 1fr",
        gap: 0,
      }}>
        <div style={{
          width: 4,
          background: `linear-gradient(to bottom, ${color}, ${color}40, transparent)`,
          order: flipped ? 2 : 0,
          transition: "width 0.3s ease",
          ...(hovered ? { width: 6 } : {}),
        }} />

        <div style={{
          padding: "36px 40px",
          order: flipped ? 0 : 1,
          background: `rgba(0,0,0,${hovered ? 0.3 : 0.5})`,
          backdropFilter: "blur(8px)",
          borderTop: `1px solid ${hovered ? `${color}30` : "rgba(255,255,255,0.04)"}`,
          borderBottom: `1px solid ${hovered ? `${color}30` : "rgba(255,255,255,0.04)"}`,
          borderLeft: flipped ? `1px solid ${hovered ? `${color}30` : "rgba(255,255,255,0.04)"}` : "none",
          borderRight: flipped ? "none" : `1px solid ${hovered ? `${color}30` : "rgba(255,255,255,0.04)"}`,
          transition: "all 0.4s ease",
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 20,
          }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    opacity: hovered ? 0.9 : 0.4,
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                    transform: hovered ? "scale(1.1)" : "scale(1)",
                    animation: hovered ? "floatIcon 3s ease-in-out infinite" : "none",
                    flexShrink: 0,
                  }}
                >
                  <path d={theme.iconPath} fill={color} />
                </svg>
                <h3 style={{
                  fontFamily: fonts.display,
                  fontSize: "clamp(28px, 4vw, 38px)",
                  letterSpacing: "0.12em",
                  color: color,
                  margin: 0,
                  lineHeight: 1,
                  textShadow: hovered ? `0 0 40px ${color}30` : "none",
                  transition: "text-shadow 0.4s ease",
                }}>
                  {entry.name}
                </h3>
              </div>
              <p style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                color: "rgba(255,255,255,0.4)",
                margin: 0,
                letterSpacing: "0.1em",
              }}>
                {entry.role}
                {entry.org && (
                  <span style={{ color: color, opacity: 0.6 }}> / {entry.org}</span>
                )}
              </p>
            </div>

            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 6,
            }}>
              <span style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                color,
                border: `1px solid ${color}30`,
                padding: "5px 14px",
                letterSpacing: "0.08em",
                whiteSpace: "nowrap",
                background: `${color}08`,
              }}>
                {entry.year}
              </span>
            </div>
          </div>

          <div style={{
            width: "100%",
            height: 1,
            background: `linear-gradient(90deg, ${color}30, transparent)`,
            marginBottom: 20,
            transformOrigin: "left",
            animation: visible ? "revealLine 0.8s ease 0.5s both" : "none",
          }} />

          <ul style={{
            listStyle: "none",
            padding: 0,
            marginBottom: 24,
            display: "grid",
            gap: 10,
          }}>
            {entry.bullets.map((bullet, i) => (
              <li key={i} style={{
                display: "flex",
                gap: 12,
                color: "rgba(255,255,255,0.65)",
                fontSize: 13,
                lineHeight: 1.75,
                fontFamily: fonts.body,
              }}>
                <span style={{
                  color,
                  flexShrink: 0,
                  marginTop: 2,
                  opacity: 0.7,
                  fontSize: 8,
                  lineHeight: "24px",
                }}>
                  {"///".slice(0, (i % 3) + 1)}
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            paddingTop: 4,
          }}>
            {entry.tags.map((tag) => (
              <Pill key={tag} label={tag} accent={color} />
            ))}
          </div>
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 1,
        background: `linear-gradient(90deg, transparent, ${color}20, transparent)`,
        pointerEvents: "none",
      }} />
    </div>
  );
}
