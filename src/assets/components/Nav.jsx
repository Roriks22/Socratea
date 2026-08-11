import { Link, useLocation } from "react-router-dom";
import logo from "/images/socratea-logo.webp";
import { useEffect, useState } from "react";

const Nav = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTop = (path) => {
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const media = window.matchMedia("(min-width: 901px)");

    const handleChange = (e) => {
      if (e.matches) {
        setMenuOpen(false);
      }
    };
    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="socratea" onClick={() => handleScrollTop("/")}>
          <img
            src={logo}
            alt="Logo du cabinet d'expertise comptable SOCRATEA"
          />
          SOCRATEA
        </Link>
        <nav className="nav" aria-label="Navigation principale">
          <ul className="nav-links">
            <li>
              <Link to="/methode" onClick={() => handleScrollTop("/methode")}>
                Méthode
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => handleScrollTop("/services")}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/apropos" onClick={() => handleScrollTop("/apropos")}>
                À propos
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => handleScrollTop("/contact")}>
                Contact
              </Link>
            </li>
          </ul>
          <a
            href="https://www.cal.eu/socratea"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Prendre rendez-vous
          </a>
          <button
            type="button"
            aria-controls="mobile-navigation"
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "Fermer le menu de navigation"
                : "Ouvrir le menu de navigation"
            }
            aria-expanded={menuOpen}
          >
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </nav>
      </div>
      <div
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
      >
        <ul>
          <li>
            <Link to="/methode" onClick={() => setMenuOpen(false)}>
              Méthode
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/apropos" onClick={() => setMenuOpen(false)}>
              À propos
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://www.cal.eu/socratea"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              Prendre rendez-vous
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
