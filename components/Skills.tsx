import { skills } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-spacing">
      <SectionHeading tag="Skills & Expertise" title="Tools and strengths I work with." />

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
