import { Link } from "react-router-dom";

const AproposHeader = () => {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <span className="current">À propos</span>
        </div>
        <h1 className="page-hero-h1">
          Julien Jacquesson <br />
          <span>Expert-comptable diplômé</span>
        </h1>
        <p className="page-hero-lead">
          Un parcours partagé entre l'audit et la direction financière. Une
          raison d'être simple : produire les comptes est un passage obligé,
          aider le dirigeant à piloter en est un autre.
        </p>
      </div>
    </section>
  );
};

export default AproposHeader;
