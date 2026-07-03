import { useNavigate } from "react-router-dom";
import useReveal from "../../components/useReveal";

const ContactFAQ = () => {
  const navigate = useNavigate();
  useReveal();
  return (
    <section className="contact-faq">
      <div className="container">
        <div className="section-contact-faq reveal reveal-1">
          <span className="eyebrow">Vous êtes expert-comptable ?</span>
          <h2>Une question avant de nous contacter ?</h2>
          <p>
            Retrouvez les réponses les plus fréquentes sur notre page dédiée.
          </p>
        </div>
        <div className="hero-cta-group reveal reveal-2">
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/questions-frequentes")}
          >
            Consulter les questions fréquentes
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

export default ContactFAQ;
