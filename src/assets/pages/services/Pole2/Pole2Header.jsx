import { Link } from "react-router-dom";

const Pole2Header = () => {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <Link to="/services">Nos services</Link>
          <span className="sep">/</span>
          <span className="current">Automatisation des flux</span>
        </div>
        <h1>
          Pôle 02 <br />
          <span>automatisation des flux</span>
        </h1>
        <p className="page-hero-lead">
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
