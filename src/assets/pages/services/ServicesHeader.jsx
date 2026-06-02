import { Link } from "react-router-dom";

const ServicesHeader = () => {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <span className="current">Nos services</span>
        </div>
        <h1>
          Quatre pôles, <br />
          <span>structurés autour de vos besoins.</span>
        </h1>
        <p className="page-hero-lead">
          La comptabilité et le pilotage constituent le socle ; trois pôles
          complémentaires s'y articulent pour vous faire gagner du temps,
          fiabiliser vos processus et sécuriser vos obligations. Le périmètre
          retenu pour votre entreprise est défini lors du cadrage initial.
        </p>
      </div>
    </section>
  );
};

export default ServicesHeader;
