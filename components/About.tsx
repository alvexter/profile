import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-spacing">
      <SectionHeading tag="About Me" title="Thoughtful design meets practical code." />

      <div className="about-grid">
        <div className="glass-card">
          <p>
           I am a Computer Science student with a strong interest in Data Science, 
           passionate about exploring data, uncovering meaningful insights, and solving real-world problems 
           through technology.

          </p>
          <p>
            I enjoy working with data, learning programming, and exploring areas such as data analysis,
             machine learning, and data visualization. I am continuously developing my technical skills 
             and expanding my knowledge to turn complex data into meaningful insights and practical solutions.

          </p>
        </div>

        <div className="glass-card values-card">
          <div>
            <span className="label">Approach</span>
            <strong>Simple, clear, human</strong>
          </div>
          <div>
            <span className="label">Style</span>
            <strong>Modern and useful</strong>
          </div>
          <div>
            <span className="label">Goal</span>
            <strong>Strong experiences</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
