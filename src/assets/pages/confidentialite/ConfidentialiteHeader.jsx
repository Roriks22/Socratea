import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";

const ConfidentialiteHeader = () => {
  useReveal();
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb reveal reveal-1">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <span className="current">Politique de confidentialité</span>
        </div>
        <h1 className="reveal reveal-2">
          Politique <br /> <span>de confidentialité.</span>{" "}
        </h1>
        <p className="page-hero-lead reveal reveal-3">
          Le cabinet SOCRATEA est attaché à la protection des données
          personnelles. La présente politique décrit les traitements mis en
          œuvre, leurs finalités et les droits dont vous disposez, conformément
          au RGPD et à la loi Informatique et Libertés.
        </p>
      </div>
    </section>
  );
};

export default ConfidentialiteHeader;
