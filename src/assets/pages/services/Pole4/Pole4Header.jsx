import { Link } from "react-router-dom";
import useReveal from "../../../components/useReveal";

const Pole4Header = () => {
  useReveal();
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb reveal reveal-1">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <Link to="/services">Nos services</Link>
          <span className="sep">/</span>
          <span className="current">Juridique</span>
        </div>
        <h1 className="pole4 reveal reveal-2">
          Juridique <br />
          <span>Sécuriser les étapes importantes de votre entreprise.</span>
        </h1>
        <p className="page-hero-lead reveal reveal-3">
          Approbation des comptes, modifications statutaires ou opérations
          ponctuelles : SOCRATEA vous accompagne dans les démarches juridiques
          liées à la vie de votre entreprise. Lorsque la situation nécessite une
          expertise particulière, nous travaillons avec votre avocat, votre
          notaire ou vos autres conseils pour que chacun intervienne au bon
          moment.
        </p>
      </div>
    </section>
  );
};

export default Pole4Header;
