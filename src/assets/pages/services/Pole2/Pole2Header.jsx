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
        <h1 className="pole02">
          Pôle 02 - Automatisation <span>des flux</span>
        </h1>
        <p>
          Nous structurons et simplifions vos circuits administratifs pour faire
          gagner du temps à vos équipes et fiabiliser l'information en amont de
          la comptabilité.
        </p>
      </div>
    </section>
  );
};

export default Pole2Header;
