import { profile } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="section-spacing contact-section">
      <SectionHeading tag="Contact" title="Let&apos;s build something thoughtful together." />

      <div className="contact-card glass-card">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedIn} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
