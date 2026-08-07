import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";

const MentionsHeader = () => {
  useReveal();
  return (
    <section
      className="page-hero page-hero--social-mention"
      aria-label="Présentation des mentions légales du site internet du cabinet d'expertise comptable SOCRATEA"
    >
      <div className="container page-hero-inner social-hero">
        <div className="social-hero__copy">
          <nav className="breadcrumb reveal reveal-1" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <span className="sep">/</span>
            <span aria-current="page">Mentions légales</span>
          </nav>
          <h1 className="page-hero-h1 reveal reveal-2">
            Mentions <br />
            <span>légales.</span>
          </h1>
          <div className="page-hero-lead reveal reveal-3">
            <p>
              Retrouvez ici les informations relatives à l’éditeur, à
              l’hébergement et au fonctionnement du site SOCRATEA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentionsHeader;
