import { Link, useLocation } from "react-router-dom";
import logo from "/images/socratea-logo.webp";
import useReveal from "../../components/useReveal";

const Footer = () => {
  useReveal();
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
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand reveal reveal-1">
            <Link to="/" onClick={() => handleScrollTop("/")}>
              <img
                src={logo}
                alt="Logo du cabinet d'expertise comptable SOCRATEA"
              />
              <span>SOCRATEA</span>
            </Link>
            <p>
              SOCRATEA est un cabinet d’expertise comptable qui sécurise vos
              obligations, vous aide à piloter votre activité et adapte ses
              outils à votre organisation.
            </p>
            <p>
              Installé près d’Amiens, le cabinet accompagne des entreprises
              partout en France grâce à une organisation dématérialisée.
            </p>
            <a
              href="https://www.linkedin.com/in/jacquesson-julien-b72870a9/"
              className="footer-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>Suivre
              sur LinkedIn
            </a>
          </div>
          <div className="footer-col-bottom reveal reveal-2">
            <div className="footer-col">
              <h2>Cabinet</h2>
              <ul>
                <li>
                  <Link
                    to="/methode"
                    onClick={() => handleScrollTop("/methode")}
                  >
                    Notre méthode
                  </Link>
                </li>
                <li>
                  <Link
                    to="/apropos"
                    onClick={() => handleScrollTop("/apropos")}
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => handleScrollTop("/contact")}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/questions-frequentes"
                    onClick={() => handleScrollTop("/questions-frequentes")}
                  >
                    Questions fréquentes
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h2>Services</h2>
              <ul>
                <li>
                  <Link
                    to="/services-comptabilite"
                    onClick={() => handleScrollTop("/services-comptabilite")}
                  >
                    Comptabilité et pilotage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services-automatisation"
                    onClick={() => handleScrollTop("/services-automatisation")}
                  >
                    Automatisation <br />
                    et structuration des flux
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services-paie"
                    onClick={() => handleScrollTop("/services-paie")}
                  >
                    Social et paie
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services-juridique"
                    onClick={() => handleScrollTop("/services-juridique")}
                  >
                    Juridique
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pour-les-cabinets"
                    onClick={() => handleScrollTop("/pour-les-cabinets")}
                  >
                    Pour les cabinets
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h2>Contact</h2>
              <ul>
                <li>
                  <address>
                    21, rue Charlemagne <br />
                    80480 Vers-sur-Selle
                  </address>
                </li>
                <li>
                  <a href="mailto:julien.jacquesson@socratea.net">
                    julien.jacquesson@socratea.net
                  </a>
                </li>
                <li className="telephone">
                  <a href="tel:+33768775524">07 68 77 55 24</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer_credit">
            <span className="ordre-mention">
              © 2026 SOCRATEA. Tous droits réservés.
            </span>
            {/* <span className="ordre-mention">
              SOCRATEA EURL . Expert-comptable inscrit à l'ordre - Région
              Hauts-de-France
            </span> */}
          </div>
          <div className="footer-legal">
            <Link
              to="/mentions-legales"
              onClick={() => handleScrollTop("/mentions-legales")}
            >
              Mentions légales
            </Link>
            <Link
              to="/confidentialite"
              onClick={() => handleScrollTop("/confidentialite")}
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
