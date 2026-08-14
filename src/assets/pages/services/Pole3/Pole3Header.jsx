import { Link } from "react-router-dom";
import useReveal from "../../../components/useReveal";
import heroSocialDesktop from "/images/social & paie/social-desktop.webp";
import heroSocialMobile from "/images/social & paie/social-mobile.webp";

const Pole3Header = () => {
  useReveal();

  return (
    <section
      className="page-hero page-hero--social-paie"
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

            <span className="current current-social" aria-current="page">
              Social et paie
            </span>
          </nav>

          <h1 id="page-hero-title" className="pole03 reveal reveal-2">
            Social et paie
            <span>Une gestion claire, des échéances maîtrisées.</span>
          </h1>

          <div className="page-hero-lead reveal reveal-3">
            <p>
              La paie engage votre relation avec vos salariés et ne laisse pas
              de place à l’improvisation. SOCRATEA organise la collecte des
              variables, suit les échéances et coordonne les travaux nécessaires
              à l’établissement des bulletins et des déclarations sociales. Vous
              gardez un interlocuteur identifié pour comprendre les points
              importants, anticiper les situations sensibles et prendre les
              bonnes décisions.
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

export default Pole3Header;
