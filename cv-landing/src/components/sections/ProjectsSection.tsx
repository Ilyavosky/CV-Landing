"use client";

import { fonts } from "@/styles/tokens";
import { FadeSection, ThemedProjectCard, SectionLabel } from "@/components/ui";
import type { Entry } from "@/data/types";

interface ProjectsSectionProps {
  projects: Entry[];
}

function ProjectDivider({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div style={{
      position: "relative",
      height: 48,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: "50%",
        height: 1,
        background: `linear-gradient(90deg, ${fromColor}30, rgba(255,255,255,0.04) 50%, ${toColor}30)`,
      }} />
      <div style={{
        width: 6,
        height: 6,
        background: "rgba(255,255,255,0.1)",
        transform: "rotate(45deg)",
        position: "relative",
        zIndex: 1,
      }} />
    </div>
  );
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <div id="projects" style={{ marginBottom: 100 }}>
      <FadeSection>
        <SectionLabel label="Proyectos Académicos" />
        <p style={{
          fontFamily: fonts.mono,
          fontSize: 11,
          color: "rgba(255,255,255,0.25)",
          letterSpacing: "0.15em",
          marginTop: -24,
          marginBottom: 40,
        }}>
          {projects.length} PROYECTOS / MÚLTIPLES STACKS
        </p>
      </FadeSection>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {projects.map((project, i) => (
          <div key={project.name}>
            <ThemedProjectCard entry={project} index={i} flipped={i % 2 !== 0} />
            {i < projects.length - 1 && (
              <ProjectDivider
                fromColor={project.color}
                toColor={projects[i + 1].color}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
