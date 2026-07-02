import { Link, useLocation } from "react-router-dom";
import logo from "../../../public/images/socratea-logo.png";

const Nav = () => {
  const location = useLocation();

  const handleScrollTop = (path) => {
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="socratea" onClick={() => handleScrollTop("/")}>
          <img src={logo} alt="Logo_SOCRATEA" />
          SOCRATEA
        </Link>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <Link to="/methode" onClick={() => handleScrollTop("/methode")}>
                <h5>Méthode</h5>
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => handleScrollTop("/services")}>
                <h5>Services</h5>
              </Link>
            </li>
            <li>
              <Link to="/apropos" onClick={() => handleScrollTop("/apropos")}>
                <h5>À propos</h5>
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => handleScrollTop("/contact")}>
                <h5>Contact</h5>
              </Link>
            </li>
          </ul>
          <a
            href="https://www.cal.eu/socratea"
            target="_blank"
            rel="noopener"
            className="nav-cta"
          >
            Prendre rendez-vous
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
