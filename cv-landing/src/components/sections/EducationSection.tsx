import { colors, fonts } from "@/styles/tokens";
import { FadeSection, SectionLabel } from "@/components/ui";
import type { Education, Certification } from "@/data/types";

interface EducationSectionProps {
  education: Education;
  certs: Certification[];
}

export function EducationSection({ education, certs }: EducationSectionProps) {
  return (
    <FadeSection style={{ marginBottom: 100 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60 }}>

        {/* Educación */}
        <div>
          <SectionLabel label="Educación" />
          <div style={{ borderLeft: `2px solid ${colors.accent.green}`, paddingLeft: 24 }}>
            <p style={{ fontFamily: fonts.display, fontSize: 22, letterSpacing: "0.1em", color: colors.text.primary }}>
              {education.institution}
            </p>
            <p style={{ fontFamily: fonts.body, fontSize: 13, color: colors.text.muted, marginTop: 6 }}>
              {education.degree}
            </p>
            <p style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.accent.green, marginTop: 8, letterSpacing: "0.1em" }}>
              {education.period}
            </p>
            <p style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.text.muted, marginTop: 4, letterSpacing: "0.08em" }}>
              {education.note}
            </p>
          </div>
        </div>

        {/* Certificaciones */}
        <div>
          <SectionLabel label="Certificaciones" />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {certs.map((cert) => (
              <div
                key={cert.title}
                style={{ borderLeft: `2px solid ${colors.border}`, paddingLeft: 20, transition: "border-color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = colors.accent.yellow)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = colors.border)}
              >
                <p style={{ fontFamily: fonts.body, fontSize: 14, color: colors.text.primary, fontWeight: 500 }}>
                  {cert.title}
                </p>
                <p style={{ fontFamily: fonts.mono, fontSize: 11, color: colors.text.muted, marginTop: 4 }}>
                  {cert.org} · {cert.year} ·{" "}
                  <span style={{ color: colors.accent.yellow }}>{cert.score}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </FadeSection>
  );
}
