import useReveal from "../../components/useReveal";
import { Link } from "react-router-dom";

const FAQFootter = () => {
  useReveal();

  return (
    <section className="faq-footer" aria-labelledby="faq-footer-title">
      <div className="container">
        <div className="section-faq-footer">
          <span className="eyebrow reveal reveal-1">Restons en contact</span>
          <h2 id="faq-footer-title" className="reveal reveal-2">
            Vous avez une autre question ?
          </h2>
          <p className="reveal reveal-3">
            Chaque entreprise a son histoire, son organisation et ses priorités.
            Le plus simple reste souvent d’en parler.
          </p>
        </div>
        <div className="hero-cta-group reveal reveal-4">
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
      </div>
    </section>
  );
};

export default FAQFootter;
