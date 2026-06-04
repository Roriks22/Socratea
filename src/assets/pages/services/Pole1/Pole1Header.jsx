import { Link } from "react-router-dom";

const Pole1Header = () => {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <Link to="/services">Nos services</Link>
          <span className="sep">/</span>
          <span className="current">Comptabilité & pilotage</span>
        </div>
        <h1>
          Pôle 01 - Comptabilité
          <br />
          <span>et pilotage</span>
        </h1>
        <p className="page-hero-lead">
          Le socle réglementaire est nécessaire ; ce qui compte, c'est ce que
          nous en faisons. Ce pôle porte notre différenciation : vous donner une
          lecture de votre activité en cours d'année, pas uniquement à la
          clôture.
        </p>
      </div>
    </section>
  );
};

export default Pole1Header;
