import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/">
              <img src="/images/SOCRATEA.png" alt="Logo" />
              SOCRATEA
            </Link>
            <p>
              Cabinet d'expertise comptable orienté PME. Comptabilité, pilotage,
              automatisation des flux, paie, juridique. 100 % dématérialisé —
              partout en France.
            </p>
            <a
              href="#"
              className="footer-linkedin"
              target="_blank"
              rel="noopener"
            >
              <i class="fa-brands fa-linkedin"></i>Suivre sur Linkedin
            </a>
          </div>
          <div className="footer-col">
            <h4>Cabinet</h4>
            <ul>
              <li>
                <Link to="/methode">Méthode</Link>
              </li>
              <li>
                <Link to="/apropos">A propos</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <Link to="/services-comptabilite">Comptabilité & pilotage</Link>
              </li>
              <li>
                <Link to="/services-automatisation">
                  Automatisation des flux
                </Link>
              </li>
              <li>
                <Link to="/services-paie">Paie externalisée</Link>
              </li>
              <li>
                <Link to="/services-juridique">Juridique</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                21, rue Charlemagne <br />
                88480 Vers-sur-Selle
              </li>
              <li>
                <a href="mailto:cabinet.socratea@gmail.com">
                  cabinet.socratea@gmail.com
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
              SOCRATEA EURL . Expert-comptable inscrit à l'ordre - Région
              Hauts-de-Frabce
            </span>
          </div>
          <div className="footer-legal">
            <a href="mentions-legales">Mentions légales</a>
            <a href="confidentialite">Politique de confidentialité</a>
            <span>© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
