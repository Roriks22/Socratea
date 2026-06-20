import { Link } from "react-router-dom";

const Pole3Header = () => {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <Link to="/services">Nos services</Link>
          <span className="sep">/</span>
          <span className="current">Paie externalisée</span>
        </div>
        <h1 className="pole03">
          Pôle 03 <br />
          <span>paie externalisée.</span>
        </h1>
        <p className="page-hero-lead">
          L'externalisation de la paie est sensible. Elle engage la relation
          avec vos salariés et votre conformité sociale. Notre positionnement
          est clair : ce que nous produisons, nous le supervisons nous-mêmes.
        </p>
      </div>
    </section>
  );
};

export default Pole3Header;
