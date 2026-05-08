import { useEffect, useMemo, useState } from "react";
import "./Navbar.css";

function Navbar({ darkMode, toggleTheme }) {
  const navItems = useMemo(
    () => [
      { id: "overview", label: "Overview", selector: "#overview" },
      { id: "architecture", label: "Architecture", selector: "#architecture" },
      { id: "services", label: "Services", selector: "#services" },
      { id: "benefits", label: "Benefits", selector: "#benefits" },
      { id: "topics", label: "Cons", selector: "#topics" },
      { id: "qna", label: "Q&A", selector: "#qna" },
    ],
    [],
  );
  const [activeSection, setActiveSection] = useState("overview");
  const slideSelectors = useMemo(
    () => [
      ...navItems.map((item) => ({ id: item.id, selector: item.selector })),
      { id: "", selector: ".presentation-footer" },
    ],
    [navItems],
  );

  useEffect(() => {
    const scrollContainer = document.querySelector(".app");
    if (!scrollContainer) return;

    const updateActiveSection = () => {
      const containerTop = scrollContainer.getBoundingClientRect().top;
      let closestSection = navItems[0].id;
      let closestDistance = Number.POSITIVE_INFINITY;

      slideSelectors.forEach((slide) => {
        const section = document.querySelector(slide.selector);
        if (!section) return;

        const distance = Math.abs(
          section.getBoundingClientRect().top - containerTop,
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = slide.id;
        }
      });

      setActiveSection(closestSection);
    };

    updateActiveSection();
    scrollContainer.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);

    return () => {
      scrollContainer.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [navItems, slideSelectors]);

  function handleNavClick(sectionId) {
    const section = document.querySelector(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => handleNavClick(".hero")}>
        <span className="logo-icon">☁️</span>
        <span>AWS Serverless</span>
      </div>

      <div className="nav-links">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={activeSection === item.id ? "active" : ""}
            onClick={() => {
              setActiveSection(item.id);
              handleNavClick(item.selector);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default Navbar;