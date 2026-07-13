import { Link } from "react-router-dom";
import useReveal from "../../../components/useReveal";

const Pole1Header = () => {
  useReveal();
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb reveal reveal-1">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <Link to="/services" className="span-services">
            Nos services
          </Link>
          <span className="sep">/</span>
          <span className="current current-compta">
            Comptabilité et pilotage
          </span>
        </div>
        <h1 className="reveal reveal-2">
          Comptabilité et pilotage
          <br />
          <span>Des chiffres fiables, au bon moment.</span>
        </h1>
        <div className="page-hero-lead reveal reveal-3">
          <p>
            SOCRATEA sécurise votre comptabilité, vos obligations fiscales et
            vos comptes annuels. Mais notre rôle ne s’arrête pas à produire des
            chiffres : nous vous aidons à les comprendre, à suivre votre
            activité plus régulièrement et à voir plus tôt ce qui mérite votre
            attention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pole1Header;
