import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";

const ConfidentialiteHeader = () => {
  useReveal();
  return (
    <section
      className="page-hero page-hero--social-confidentialite"
      aria-labelledby="politique-confidentialite-title"
    >
      <div className="container page-hero-inner social-hero">
        <div className="social-hero__copy">
          <nav className="breadcrumb reveal reveal-1" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <span className="sep">/</span>
            <span aria-current="page">Politique de confidentialité</span>
          </nav>
          <h1
            id="politique-confidentialite-title"
            className="page-hero-h1 reveal reveal-2"
          >
            Politique <br /> <span>de confidentialité.</span>{" "}
          </h1>
          <div className="page-hero-lead reveal reveal-3">
            <p>
              Le cabinet SOCRATEA veille à la protection de vos données
              personnelles. Cette page vous explique quelles informations
              peuvent être recueillies sur le site, pourquoi elles sont
              utilisées, combien de temps elles sont conservées et quels sont
              vos droits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfidentialiteHeader;
