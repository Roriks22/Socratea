import useReveal from "../../components/useReveal";
import { Link } from "react-router-dom";

const CabinetsContact = () => {
  useReveal();

  return (
    <section
      className="cabinets-contact"
      aria-labelledby="cabinets-contact-title"
    >
      <div className="container">
        <div className="section-cabinets-contact reveal reveal-1">
          <span className="eyebrow span-cabinet">Collaborer avec SOCRATEA</span>
          <h2>
            Un dossier à renforcer ?
            <br />
            Une idée à concrétiser ?
          </h2>
          <p>
            Parlons simplement de votre besoin. En quelques échanges, nous
            pourrons déterminer si SOCRATEA peut compléter votre équipe ou vous
            aider à faire évoluer l’organisation de votre cabinet.
          </p>
        </div>
        <div className="hero-cta-group reveal reveal-2">
          <Link to="/contact#agenda" className="btn btn-primary">
            Prendre rendez-vous
            <svg
              className="arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
              focusable="false"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>

          <Link to="/contact#formulaire" className="btn btn-secondary on-dark">
            Nous écrire
          </Link>
        </div>
        <div className="contact-fin">
          Ou par écrit -
          <a href="mailto:julien.jacquesson@socratea.net">
            julien.jacquesson@socratea.net
          </a>
          <span className="sep">|</span>
          <a href="tel:+33768775524">07 68 77 55 24</a>
        </div>
      </div>
    </section>
  );
};

export default CabinetsContact;
