import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";

const AproposHeader = () => {
  useReveal();
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb reveal reveal-1">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <span className="current">À propos</span>
        </div>
        <h1 className="page-hero-h1 reveal reveal-2">
          Julien Jacquesson <br />
          <span>Expert-comptable</span>
        </h1>
        <div className="page-hero-lead reveal reveal-3">
          <p>
            Quatorze années entre l’audit et la direction financière ont façonné
            une conviction : des comptes fiables sont indispensables, mais ils
            prennent toute leur valeur lorsqu’ils aident à décider.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AproposHeader;
