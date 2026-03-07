import { fonts } from "@/styles/tokens";
import { FadeSection, SectionLabel } from "@/components/ui";
import type { Language } from "@/data/types";

interface LanguagesSectionProps {
  languages: Language[];
}

export function LanguagesSection({ languages }: LanguagesSectionProps) {
  return (
    <FadeSection style={{ marginBottom: 100 }}>
      <SectionLabel label="Idiomas" />
      <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
        {languages.map((lang) => (
          <div key={lang.lang} style={{ minWidth: 220 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontFamily: fonts.mono, fontSize: 13, color: "#fff" }}>{lang.lang}</span>
              <span style={{ fontFamily: fonts.mono, fontSize: 11, color: lang.color }}>{lang.level}</span>
            </div>
            <div style={{ height: 2, background: "rgba(255,255,255,0.08)", borderRadius: 1 }}>
              <div style={{ height: "100%", width: `${lang.pct}%`, background: lang.color, borderRadius: 1, transition: "width 1.5s ease" }} />
            </div>
          </div>
        ))}
      </div>
    </FadeSection>
  );
}
