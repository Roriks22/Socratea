import { Link } from "react-router-dom";

const ConfidentialiteHeader = () => {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <span className="current">Politique de confidentialité</span>
        </div>
        <h1>
          Politique <br /> <span>de confidentialité.</span>{" "}
        </h1>
        <p className="page-hero-lead p-confidentialite">
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
