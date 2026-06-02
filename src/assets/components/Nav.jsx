import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="socratea">
          <img src="/images/SOCRATEA.png" alt="Logo_SOCRATEA" />
          SOCRATEA
        </Link>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <Link to="/methode">
                <h5>Méthode</h5>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <h5>Services</h5>
              </Link>
            </li>
            <li>
              <Link to="/apropos">
                <h5>À propos</h5>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <h5>Contact</h5>
              </Link>
            </li>
          </ul>
          <a
            href="https://calendly.com/socratea"
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
