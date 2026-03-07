// ─────────────────────────────────────────────
//  Section — Experiencia Técnica
// ─────────────────────────────────────────────

import { FadeSection, EntryCard, SectionLabel } from "@/components/ui";
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
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {experience.map((entry, i) => (
          <EntryCard key={entry.name} entry={entry} index={i} />
        ))}
      </div>
    </div>
  );
}
