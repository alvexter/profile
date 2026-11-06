import Image from "next/image";
import { profile } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="hero section-spacing">
      <div className="hero-copy">
        <p className="section-tag">{profile.title}</p>
        <h1>
          Hi, I&apos;m <span>{profile.name}</span>
        </h1>
        <p className="lead">
          I'm a Computer Science student passionate about technology, programming, 
          and exploring the world of Data Science.
        </p>

        <div className="cta-row">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>
          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

        <ul className="mini-stats">
          <li>
            <strong>2+</strong>
            <span>Years learning</span>
          </li>
          <li>
            <strong>1</strong>
            <span>Projects</span>
          </li>
          <li>
            <strong>100%</strong>
            <span>Focused on Data Analysis & Visualization</span>
          </li>
        </ul>
      </div>

      <div className="hero-visual">
        <div className="avatar-wrap">
          <Image
            src="/profile-2-vex.png"
            alt="Profile portrait"
            width={260}
            height={260}
            className="avatar-image"
            priority
          />
        </div>
      </div>
    </section>
  );
}
