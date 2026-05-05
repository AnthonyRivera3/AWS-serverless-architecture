import "./Navbar.css";

function Navbar({ darkMode, toggleTheme, goHome }) {
  function handleNavClick(sectionId) {
    if (goHome) {
      goHome();
    }

    setTimeout(() => {
      const section = document.querySelector(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => handleNavClick(".hero")}>
        <span className="logo-icon">☁️</span>
        <span>AWS Serverless</span>
      </div>

      <div className="nav-links">
        <button onClick={() => handleNavClick("#overview")}>Overview</button>

        <button onClick={() => handleNavClick("#architecture")}>
          Architecture
        </button>

        <button onClick={() => handleNavClick("#services")}>Services</button>

        <button onClick={() => handleNavClick("#benefits")}>Benefits</button>

        <button onClick={() => handleNavClick("#topics")}>Cons</button>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default Navbar;