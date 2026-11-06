export function Navbar() {
  return (
    <header className="topbar">
      <div className="brand-wrap">
        <span className="brand-mark">AJ</span>
        <span className="brand-name">Alvexter Jay</span>
      </div>

      <nav className="nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
