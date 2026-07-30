import { Link } from "react-router-dom";
import useReveal from "../../../components/useReveal";
import heroSocialDesktop from "../../../../../public/images/comptabilite/comptabilite-desktop.webp";
import heroSocialMobile from "../../../../../public/images/comptabilite/comptabilite-mobile.webp";

const Pole1Header = () => {
  useReveal();
  return (
    <section className="page-hero page-hero--social-comptabilite">
      <div className="container page-hero-inner social-hero">
        <div className="social-hero__copy">
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
              vos comptes annuels. Mais notre rôle ne s’arrête pas à produire
              des chiffres : nous vous aidons à les comprendre, à suivre votre
              activité plus régulièrement et à voir plus tôt ce qui mérite votre
              attention.
            </p>
          </div>
        </div>
        <picture
          className="social-hero__visual reveal reveal-3"
          aria-hidden="true"
        >
          <source media="(max-width: 900px)" srcSet={heroSocialMobile} />

          <img
            src={heroSocialDesktop}
            alt="illustration methode"
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
