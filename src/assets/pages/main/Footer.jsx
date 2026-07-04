import { Link, useLocation } from "react-router-dom";
import logo from "../../../../public/images/socratea-logo.png";
const Footer = () => {
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
          <div className="footer-brand">
            <Link to="/" onClick={() => handleScrollTop("/")}>
              <img src={logo} alt="Logo" />
              SOCRATEA
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
            <Link
              to="https://www.linkedin.com/in/jacquesson-julien-b72870a9/"
              className="footer-linkedin"
              target="_blank"
              rel="noopener"
            >
              <i className="fa-brands fa-linkedin"></i>Suivre sur Linkedin
            </Link>
          </div>
          <div className="footer-col">
            <h4>Cabinet</h4>
            <ul>
              <li>
                <Link to="/methode" onClick={() => handleScrollTop("/methode")}>
                  Notre méthode
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
            <h4>Services</h4>
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
            <h4>Contact</h4>
            <ul>
              <li>
                21, rue Charlemagne <br />
                80480 Vers-sur-Selle
              </li>
              <li>
                <a href="mailto:julien.jacquesson@socratea-expertise.fr">
                  julien.jacquesson@socratea-expertise.fr
                </a>
              </li>
              <li className="telephone">
                <a href="tel:+33686506129"></a>06 86 50 61 29
              </li>
            </ul>
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
            <span>© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
