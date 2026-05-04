import "./Navbar.css";

function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">☁️</span>
        <span>AWS Serverless</span>
      </div>

      <div className="nav-links">
        <a href="#overview">Overview</a>
        <a href="#architecture">Architecture</a>
        <a href="#services">Services</a>
        <a href="#benefits">Benefits</a>
        <a href="#topics">Topics</a>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default Navbar;