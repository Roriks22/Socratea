import { useNavigate } from "react-router-dom";
import useReveal from "../../components/useReveal";

const ServicesCabinets = () => {
  const navigate = useNavigate();
  useReveal();
  return (
    <section className="services-cabinets">
      <div className="container">
        <div className="section-services-cabinets reveal reveal-1">
          <span className="eyebrow">Vous êtes expert-comptable ?</span>
          <h2>
            Certaines expertises peuvent aussi être mises au service de votre
            cabinet.
          </h2>
          <p>
            Renfort sur un dossier, analyse de données, automatisation de
            processus ou développement d’une application adaptée : SOCRATEA peut
            intervenir ponctuellement aux côtés de votre équipe.
          </p>
        </div>
        <div className="hero-cta-group reveal reveal-2">
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/pour-les-cabinets")}
          >
            Découvrir l’accompagnement des cabinets
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
        </div>
      </div>
    </section>
  );
};

export default ServicesCabinets;
