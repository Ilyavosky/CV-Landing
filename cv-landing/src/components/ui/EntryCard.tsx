"use client";

import { useState } from "react";
import { fonts } from "@/styles/tokens";
import { Pill } from "./Pill";
import { useInView } from "@/hooks/useAnimations";
import type { Entry } from "@/data/types";

interface EntryCardProps {
  entry: Entry;
  index: number;
}

export function EntryCard({ entry, index }: EntryCardProps) {
  const [ref, visible] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  const slideDir = index % 2 === 0 ? "translateX(-60px)" : "translateX(60px)";

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : slideDir,
        transition: `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`,
        position: "relative",
        border: `1px solid ${hovered ? entry.color : "rgba(255,255,255,0.08)"}`,
        borderLeft: `3px solid ${entry.color}`,
        padding: "28px 32px",
        background: hovered ? `${entry.color}06` : "rgba(255,255,255,0.02)",
        cursor: "default",
        overflow: "hidden",
      }}
    >
      {/* Glow de esquina */}
      <div style={{
        position: "absolute", top: -40, right: -40,
        width: 120, height: 120,
        borderRadius: "50%",
        background: entry.color,
        opacity: hovered ? 0.08 : 0,
        filter: "blur(40px)",
        transition: "opacity 0.4s",
        pointerEvents: "none",
      }} />

      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 12,
      }}>
        <div>
          <h3 style={{
            fontFamily: fonts.display,
            fontSize: 26,
            letterSpacing: "0.1em",
            color: entry.color,
            margin: 0,
            lineHeight: 1,
          }}>
            {entry.name}
          </h3>
          <p style={{
            fontFamily: fonts.mono,
            fontSize: 11,
            color: "rgba(255,255,255,0.4)",
            margin: "4px 0 0",
            letterSpacing: "0.1em",
          }}>
            {entry.role}
            {entry.org && (
              <span style={{ color: "rgba(255,255,255,0.25)" }}> · {entry.org}</span>
            )}
          </p>
        </div>

        <span style={{
          fontFamily: fonts.mono,
          fontSize: 11,
          color: entry.color,
          border: `1px solid ${entry.color}40`,
          padding: "3px 10px",
          borderRadius: 2,
          letterSpacing: "0.05em",
          whiteSpace: "nowrap",
        }}>
          {entry.year}
        </span>
      </div>

      {/* Bullets */}
      <ul style={{
        listStyle: "none",
        padding: 0,
        marginBottom: 18,
      }}>
        {entry.bullets.map((bullet, i) => (
          <li key={i} style={{
            display: "flex",
            gap: 10,
            marginBottom: 6,
            color: "rgba(255,255,255,0.65)",
            fontSize: 13,
            lineHeight: 1.75,
            fontFamily: fonts.body,
          }}>
            <span style={{ color: entry.color, flexShrink: 0, marginTop: 2 }}>▸</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {entry.tags.map((tag) => (
          <Pill key={tag} label={tag} accent={entry.color} />
        ))}
      </div>
    </div>
  );
}
