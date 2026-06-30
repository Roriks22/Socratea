import { Link } from "react-router-dom";
import useReveal from "../../../components/useReveal";

const Pole2Header = () => {
  useReveal();
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb reveal reveal-1">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <Link to="/services">Nos services</Link>
          <span className="sep">/</span>
          <span className="current">
            Automatisation et structuration des flux
          </span>
        </div>
        <h1 className="reveal reveal-2">
          Automatisation et structuration des flux <br />
          <span>Des outils adaptés à votre façon de travailler.</span>
        </h1>
        <p className="page-hero-lead reveal reveal-3">
          Nous partons de votre organisation, de vos outils et de ce qui vous
          fait perdre du temps. SOCRATEA simplifie les circuits d’information,
          automatise les tâches répétitives, connecte vos outils lorsque cela
          est utile et peut développer des applications adaptées à vos besoins.
          L’objectif : des processus plus fluides, des données plus fiables et
          une organisation capable d’évoluer avec votre entreprise.
        </p>
      </div>
    </section>
  );
};

export default Pole2Header;
