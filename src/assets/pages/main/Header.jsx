import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";
import heroSocialDesktop from "/images/main-desktop.webp";
import heroSocialMobile from "/images/main-mobile.webp";

const Header = () => {
  useReveal();

  return (
    <section className="hero hero--social-main" aria-labelledby="header-title">
      <div className="container hero-inner social-hero">
        <div className="hero-content">
          <div className="hero-tag reveal reveal-1">
            <span className="dot"></span>
            <span>Ouverture le 14 septembre 2026</span>
          </div>
          <h1 id="header-title" className="reveal reveal-2">
            Ancré dans l'expertise.
            <span>En mouvement vers votre avenir.</span>
          </h1>
          <h2 className="reveal reveal-3">
            Vos chiffres ne doivent pas seulement être justes.
            <span>Ils doivent vous faire avancer.</span>
          </h2>
          <div className="hero-cta-group reveal reveal-3">
            <a
              href="https://www.cal.eu/socratea"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Prendre rendez-vous
              <svg
                aria-hidden="true"
                className="arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <Link to="/methode" className="btn btn-secondary on-dark">
              Découvrir notre méthode
            </Link>
          </div>
        </div>
        <picture
          className="social-hero__visual reveal reveal-2"
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

export default Header;
