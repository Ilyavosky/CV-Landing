import { FadeSection, EntryCard, SectionLabel } from "@/components/ui";
import type { Entry } from "@/data/types";

interface ProjectsSectionProps {
  projects: Entry[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <div id="projects" style={{ marginBottom: 100 }}>
      <FadeSection>
        <SectionLabel label="Proyectos Académicos" />
      </FadeSection>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {projects.map((project, i) => (
          <EntryCard key={project.name} entry={project} index={i} />
        ))}
      </div>
    </div>
  );
}
