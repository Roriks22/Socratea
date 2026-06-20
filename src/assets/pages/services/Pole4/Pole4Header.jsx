import { Link } from "react-router-dom";

const Pole4Header = () => {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <Link to="/services">Nos services</Link>
          <span className="sep">/</span>
          <span className="current">Juridique & accompagnement</span>
        </div>
        <h1 className="pole4">
          Pôle 04 <br />
          <span>juridique.</span>
        </h1>
        <p className="page-hero-lead">
          Les formalités annuelles, sans lesquelles une société ne peut
          fonctionner, et les opérations ponctuelles qui marquent la vie d'une
          entreprise. Avec le sens des limites : ce qui relève du cabinet, ce
          qui relève d'un avocat ou d'un notaire.
        </p>
      </div>
    </section>
  );
};

export default Pole4Header;
