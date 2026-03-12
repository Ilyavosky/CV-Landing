import { FadeSection, ThemedProjectCard, SectionLabel } from "@/components/ui";
import type { Entry } from "@/data/types";

interface ExperienceSectionProps {
  experience: Entry[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <div style={{ marginBottom: 100 }}>
      <FadeSection>
        <SectionLabel label="Experiencia Técnica" />
      </FadeSection>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {experience.map((entry, i) => (
          <ThemedProjectCard key={entry.name} entry={entry} index={i} flipped={i % 2 !== 0} />
        ))}
      </div>
    </div>
  );
}
