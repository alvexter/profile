import { projects } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <SectionHeading tag="Projects" title="Selected work and design thinking." />

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card glass-card">
            <div className="project-topline">
              <span className="project-dot" aria-hidden="true" />
              <span>{project.name}</span>
            </div>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
