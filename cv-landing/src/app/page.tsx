"use client";

import { cvData } from "../data/cvData";
import { Grain, GridBg, Orbs, Scanline } from "@/components/background";
import {
  HeroSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  EducationSection,
  LanguagesSection,
  ContactSection,
} from "@/components/sections";

export default function CVPage() {
  return (
    <div style={{ background: "#000", minHeight: "100vh", position: "relative" }}>
      <Grain />
      <GridBg />
      <Orbs />
      <Scanline />

      <HeroSection data={cvData} />

      <main style={{
        position: "relative",
        zIndex: 2,
        padding: "0 clamp(24px, 8vw, 120px)",
        paddingBottom: 100,
      }}>
        <SkillsSection skills={cvData.skills} />
        <ExperienceSection experience={cvData.experience} />
        <ProjectsSection projects={cvData.projects} />
        <EducationSection education={cvData.education} certs={cvData.certs} />
        <LanguagesSection languages={cvData.languages} />
        <ContactSection
          email={cvData.email}
          phone={cvData.phone}
          linkedin={cvData.linkedin}
          github={cvData.github}
        />
      </main>
    </div>
  );
}
