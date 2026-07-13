import useReveal from "../../components/useReveal";
import { useNavigate } from "react-router-dom";

const CabinetsContact = () => {
  useReveal();
  const navigate = useNavigate();
  return (
    <section className="cabinets-contact">
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
          <button
            className="btn btn-primary"
            onClick={() => navigate("/contact#agenda")}
          >
            Prendre rendez-vous
            <svg
              className="arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          <button
            className="btn btn-secondary on-dark"
            onClick={() => navigate("/contact#formulaire")}
          >
            Nous écrire
          </button>
        </div>
      </div>
    </section>
  );
};

export default CabinetsContact;
