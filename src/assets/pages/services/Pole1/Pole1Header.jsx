import { Link } from "react-router-dom";
import useReveal from "../../../components/useReveal";
import heroSocialDesktop from "/images/comptabilite/comptabilite-desktop.webp";
import heroSocialMobile from "/images/comptabilite/comptabilite-mobile.webp";

const Pole1Header = () => {
  useReveal();
  return (
    <section
      className="page-hero page-hero--social-comptabilite"
      aria-labelledby="page-hero-title"
    >
      <div className="container page-hero-inner social-hero">
        <div className="social-hero__copy">
          <nav className="breadcrumb reveal reveal-1" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <span className="sep">/</span>
            <Link to="/services" className="span-services">
              Nos services
            </Link>
            <span className="sep">/</span>
            <span aria-current="page" className="current current-compta">
              Comptabilité et pilotage
            </span>
          </nav>
          <h1 id="page-hero-title" className="reveal reveal-2">
            Comptabilité et pilotage
            <br />
            <span>Des chiffres fiables, au bon moment.</span>
          </h1>
          <div className="page-hero-lead reveal reveal-3">
            <p>
              SOCRATEA sécurise votre comptabilité, vos obligations fiscales et
              vos comptes annuels. Mais notre rôle ne s’arrête pas à produire
              des chiffres : nous vous aidons à les comprendre, à suivre votre
              activité plus régulièrement et à voir plus tôt ce qui mérite votre
              attention.
            </p>
          </div>
        </div>
        <picture
          className="social-hero__visual reveal-right"
          aria-hidden="true"
        >
          <source media="(max-width: 900px)" srcSet={heroSocialMobile} />

          <img
            src={heroSocialDesktop}
            alt=""
            width="540"
            height="700"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable="false"
          />
        </picture>
      </div>
    </section>
  );
};

export default Pole1Header;
