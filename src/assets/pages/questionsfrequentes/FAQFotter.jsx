import useReveal from "../../components/useReveal";
import { useNavigate } from "react-router-dom";

const FAQFotter = () => {
  useReveal();
  const navigate = useNavigate();
  return (
    <section className="faq-footer">
      <div className="container">
        <div className="section-faq-footer reveal reveal-1">
          <span className="eyebrow">Restons en contact</span>
          <h2>Vous avez une autre question ?</h2>
          <p>
            Chaque entreprise a son histoire, son organisation et ses priorités.
            Le plus simple reste souvent d’en parler.
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

export default FAQFotter;
