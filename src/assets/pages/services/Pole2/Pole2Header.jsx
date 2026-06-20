import { Link } from "react-router-dom";
import useReveal from "../../../components/useReveal";

const Pole2Header = () => {
  useReveal();
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb reveal reveal-1">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <Link to="/services">Nos services</Link>
          <span className="sep">/</span>
          <span className="current">Automatisation des flux</span>
        </div>
        <h1 className="reveal reveal-2">
          Pôle 02 <br />
          <span>automatisation des flux</span>
        </h1>
        <p className="page-hero-lead reveal reveal-3">
          Nous analysons, structurons et automatisons les flux qui alimentent
          votre gestion quotidienne. Facturation, collecte de pièces, validation
          interne ou transmission des données : chaque étape est pensée pour
          limiter les interventions manuelles.
        </p>
      </div>
    </section>
  );
};

export default Pole2Header;
