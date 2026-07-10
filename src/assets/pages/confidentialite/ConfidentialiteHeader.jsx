import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";

const ConfidentialiteHeader = () => {
  useReveal();
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb reveal reveal-1">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <span className="current">Politique de confidentialité</span>
        </div>
        <h1 className="reveal reveal-2">
          Politique <br /> <span>de confidentialité.</span>{" "}
        </h1>
        <div className="page-hero-lead reveal reveal-3">
          <p>
            Le cabinet SOCRATEA veille à la protection de vos données
            personnelles. Cette page vous explique quelles informations peuvent
            être recueillies sur le site, pourquoi elles sont utilisées, combien
            de temps elles sont conservées et quels sont vos droits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConfidentialiteHeader;
