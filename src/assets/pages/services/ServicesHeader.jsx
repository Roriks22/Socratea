import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";

const ServicesHeader = () => {
  useReveal();
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb reveal reveal-1">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <span className="current">Nos services</span>
        </div>
        <h1 className="hero-inner-h1 reveal reveal-2">
          Quatre pôles, <br />
          <span>autour de vos besoins.</span>
        </h1>
        <p className="page-hero-lead p-services reveal reveal-3">
          La comptabilité et le pilotage constituent le socle ; 4 pôles
          complémentaires pour vous faire gagner du temps, fiabiliser vos
          processus et sécuriser vos obligations. Le périmètre retenu pour votre
          entreprise est défini lors du cadrage initial.
        </p>
      </div>
    </section>
  );
};

export default ServicesHeader;
