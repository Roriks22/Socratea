import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";

const Methode = () => {
  useReveal();
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb reveal reveal-1">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <span className="current">Notre méthode</span>
        </div>
        <h1 className="page-hero-h1 reveal reveal-2">
          Une organisation claire, <br />
          <span>dès le départ.</span>
        </h1>
        <p className="page-hero-lead reveal reveal-3">
          Dès les premiers échanges, nous mettons en place avec vous une façon
          de travailler adaptée à votre entreprise : quoi transmettre, quand et
          par quel canal. Moins d’allers-retours, moins d’informations perdues,
          et des chiffres fiables quand vous en avez besoin.
        </p>
      </div>
    </section>
  );
};

export default Methode;
