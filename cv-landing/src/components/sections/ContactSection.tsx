import { colors, fonts } from "@/styles/tokens";
import { FadeSection, SectionLabel } from "@/components/ui";
import type { CVData } from "@/data/types";

type ContactProps = Pick<CVData, "email" | "phone" | "linkedin" | "github">;

export function ContactSection({ email, phone, linkedin, github }: ContactProps) {
  const items = [
    { label: "Email", value: email },
    { label: "Teléfono", value: phone },
    { label: "LinkedIn", value: linkedin },
    { label: "GitHub", value: github },
  ];

  return (
    <FadeSection>
      <SectionLabel label="Contacto" />
      <div style={{
        border: `1px solid ${colors.border}`,
        padding: "48px clamp(24px, 5vw, 80px)",
        background: colors.surface,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 32,
      }}>
        {items.map(({ label, value }) => (
          <div key={label}>
            <p style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.accent.green, letterSpacing: "0.2em", marginBottom: 8 }}>
              {label}
            </p>
            <p style={{ fontFamily: fonts.body, fontSize: 13, color: colors.text.secondary, wordBreak: "break-all" }}>
              {value}
            </p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 60 }}>
        <p style={{ fontFamily: fonts.mono, fontSize: 10, color: colors.text.faint, letterSpacing: "0.2em" }}>
          ILYA CORTÉS RUIZ -- 2026 -- TUXTLA GUTIÉRREZ, CHIAPAS
        </p>
      </div>
    </FadeSection>
  );
}
