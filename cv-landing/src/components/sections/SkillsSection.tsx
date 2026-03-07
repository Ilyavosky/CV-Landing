// ─────────────────────────────────────────────
//  Section — Skills
// ─────────────────────────────────────────────

import { fonts, skillAccents } from "@/styles/tokens";
import { FadeSection, Pill, SectionLabel } from "@/components/ui";

interface SkillsSectionProps {
  skills: Record<string, string[]>;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <FadeSection style={{ marginBottom: 100 }}>
      <SectionLabel label="Stack Técnico" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
        {Object.entries(skills).map(([category, items], i) => {
          const accent = skillAccents[i % skillAccents.length];
          return (
            <div key={category}>
              <p style={{ fontFamily: fonts.mono, fontSize: 11, color: accent, letterSpacing: "0.2em", marginBottom: 16 }}>
                {category.toUpperCase()}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {items.map((item) => <Pill key={item} label={item} accent={accent} />)}
              </div>
            </div>
          );
        })}
      </div>
    </FadeSection>
  );
}
