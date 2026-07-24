import { Link } from "react-router-dom";
import useReveal from "../../../components/useReveal";

import heroSocialDesktop from "../../../../../public/images/Social et paie/01-Images spécifiques ordinateur/Ordinateur - Abstraction fond uni.png";
import heroSocialMobile from "../../../../../public/images/Social et paie/02-Images spécifiques mobile/Mobile - Abstraction fond uni.png";

const Pole3Header = () => {
  useReveal();

  return (
    <section className="page-hero page-hero--social">
      <div className="container page-hero-inner social-hero">
        <div className="social-hero__copy">
          <div className="breadcrumb reveal reveal-1">
            <Link to="/">Accueil</Link>

            <span className="sep">/</span>

            <Link to="/services" className="span-services">
              Nos services
            </Link>

            <span className="sep">/</span>

            <span className="current current-social">Social et paie</span>
          </div>

          <h1 className="pole03 reveal reveal-2">
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
          className="social-hero__visual reveal reveal-3"
          aria-hidden="true"
        >
          <source media="(max-width: 900px)" srcSet={heroSocialMobile} />

          <img
            src={heroSocialDesktop}
            alt="illustration social&paie"
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
