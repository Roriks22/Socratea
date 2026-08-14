import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";
import heroSocialDesktop from "/images/services.webp";

const ServicesHeader = () => {
  useReveal();
  return (
    <section
      className="page-hero page-hero--social-services"
      aria-labelledby="page-hero-title"
    >
      <div className="container page-hero-inner social-hero">
        <div className="social-hero__copy">
          <nav className="breadcrumb reveal reveal-1" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <span className="sep">/</span>
            <span aria-current="page">Nos services</span>
          </nav>
          <h1 id="page-hero-title" className="hero-inner-h1 reveal reveal-2">
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
          className="social-hero__visual reveal-right"
          aria-hidden="true"
        >
          <source media="(max-width: 900px)" srcSet={heroSocialDesktop} />

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

export default ServicesHeader;
