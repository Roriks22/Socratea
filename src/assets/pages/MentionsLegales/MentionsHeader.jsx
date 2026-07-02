import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";

const MentionsHeader = () => {
  useReveal();
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb reveal reveal-1">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <span className="current">Mentions Légales</span>
        </div>
        <h1 className="reveal reveal-2">
          Mentions <br />
          <span>légales.</span>
        </h1>
        <p className="page-hero-lead reveal reveal-3">
          Retrouvez ici les informations relatives à l’éditeur, à l’hébergement
          et au fonctionnement du site SOCRATEA.
        </p>
      </div>
    </section>
  );
};

export default MentionsHeader;
