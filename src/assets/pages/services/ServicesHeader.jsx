import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";
import heroSocialDesktop from "../../../../public/images/Juridique/juridique.png";
import heroSocialMobile from "../../../../public/images/Juridique/juridique.png";

const ServicesHeader = () => {
  useReveal();
  return (
    <section className="page-hero page-hero--social-juridique">
      <div className="container page-hero-inner social-hero">
        <div className="social-hero__copy">
          <div className="breadcrumb reveal reveal-1">
            <Link to="/">Accueil</Link>
            <span className="sep">/</span>
            <span className="current">Nos services</span>
          </div>
          <h1 className="hero-inner-h1 reveal reveal-2">
            Quatre expertises. <br />
            <span>Une seule vision de votre entreprise.</span>
          </h1>
          <div className="page-hero-lead reveal reveal-3">
            <p>
              La comptabilité et le pilotage forment le socle de notre
              intervention. Selon vos besoins, SOCRATEA vous accompagne aussi
              dans l’organisation et l’automatisation de vos flux, la paie et le
              juridique courant. Vous bénéficiez ainsi d’un accompagnement
              cohérent, sans multiplier les interlocuteurs ni traiter chaque
              sujet séparément.
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
            alt="illustration services"
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

export default ServicesHeader;
