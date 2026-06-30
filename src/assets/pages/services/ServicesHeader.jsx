import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";

const ServicesHeader = () => {
  useReveal();
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb reveal reveal-1">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <span className="current">Nos services</span>
        </div>
        <h1 className="hero-inner-h1 reveal reveal-2">
          Quatre expertises. <br />
          <span>Une seule vision de votre entreprise.</span>
        </h1>
        <p className="page-hero-lead p-services reveal reveal-3">
          La comptabilité et le pilotage forment le socle de notre intervention.
          Selon vos besoins, SOCRATEA vous accompagne aussi dans l’organisation
          et l’automatisation de vos flux, la paie et le juridique courant. Vous
          bénéficiez ainsi d’un accompagnement cohérent, sans multiplier les
          interlocuteurs ni traiter chaque sujet séparément.
        </p>
      </div>
    </section>
  );
};

export default ServicesHeader;
