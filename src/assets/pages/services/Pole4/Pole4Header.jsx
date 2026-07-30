import { Link } from "react-router-dom";
import useReveal from "../../../components/useReveal";
import heroSocialDesktop from "../../../../../public/images/juridique/juridique-desktop.webp";
import heroSocialMobile from "../../../../../public/images/juridique/juridique-mobile.webp";

const Pole4Header = () => {
  useReveal();
  return (
    <section className="page-hero page-hero--social-juridique">
      <div className="container page-hero-inner social-hero">
        <div className="social-hero__copy">
          <div className="breadcrumb reveal reveal-1">
            <Link to="/">Accueil</Link>
            <span className="sep">/</span>
            <Link to="/services" className="span-services">
              Nos services
            </Link>
            <span className="sep">/</span>
            <span className="current current-juridique">Juridique</span>
          </div>
          <h1 className="pole4 reveal reveal-2">
            Juridique <br />
            <span>Sécuriser les étapes importantes de votre entreprise.</span>
          </h1>
          <div className="page-hero-lead reveal reveal-3">
            <p>
              Approbation des comptes, modifications statutaires ou opérations
              ponctuelles : SOCRATEA vous accompagne dans les démarches
              juridiques liées à la vie de votre entreprise. Lorsque la
              situation nécessite une expertise particulière, nous travaillons
              avec votre avocat, votre notaire ou vos autres conseils pour que
              chacun intervienne au bon moment.
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

export default Pole4Header;
