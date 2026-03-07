"use client";

import { CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/useAnimations";

interface FadeSectionProps {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
}

export function FadeSection({ children, delay = 0, style = {} }: FadeSectionProps) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
