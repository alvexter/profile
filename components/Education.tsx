import { education } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-spacing">
      <SectionHeading tag="Education" title="Learning path and foundation." />

      <div className="education-grid">
        {education.map((item) => (
          <article key={item.title} className="education-card glass-card">
            <div className="education-meta">
              <span>{item.period}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="school-name">{item.school}</p>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
