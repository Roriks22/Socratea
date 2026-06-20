import { Link } from "react-router-dom";
import useReveal from "../../../components/useReveal";

const Pole1Header = () => {
  useReveal();
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb reveal reveal-1">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <Link to="/services">Nos services</Link>
          <span className="sep">/</span>
          <span className="current">Comptabilité & pilotage</span>
        </div>
        <h1 className="reveal reveal-2">
          Pôle 01
          <br />
          <span>comptabilité et pilotage</span>
        </h1>
        <p className="page-hero-lead reveal reveal-3">
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
