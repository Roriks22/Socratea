import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";
import heroSocialDesktop from "/images/socratea-logo.webp";
import heroSocialMobile from "/images/socratea-logo.webp";

const AproposHeader = () => {
  useReveal();
  return (
    <section
      className="page-hero page-hero--social-apropos"
      aria-label="Présentation de l'expert-comptable Julien Jacquesson et du cabinet d'expertise comptable SOCRATEA"
    >
      <div className="container page-hero-inner social-hero">
        <div className="social-hero__copy">
          <nav className="breadcrumb reveal reveal-1" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <span className="sep">/</span>
            <span aria-current="page">À propos</span>
          </nav>
          <h1 className="page-hero-h1 reveal reveal-2">
            Julien Jacquesson <br />
            <span>Expert-comptable</span>
          </h1>
          <div className="page-hero-lead reveal reveal-3">
            <p>
              Quatorze années entre l’audit et la direction financière ont
              façonné une conviction : des comptes fiables sont indispensables,
              mais ils prennent toute leur valeur lorsqu’ils aident à décider.
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
            alt="Logo du cabinet d'expertise comptable SOCRATEA"
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

export default AproposHeader;
