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
          <span className="current">Juridique & accompagnement</span>
        </div>
        <h1 className="pole4 reveal reveal-2">
          Pôle 04 <br />
          <span>juridique.</span>
        </h1>
        <p className="page-hero-lead reveal reveal-3">
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
