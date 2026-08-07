import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";
import heroSocialDesktop from "/images/cabinets/cabinets-desktop.webp";
import heroSocialMobile from "/images/cabinets/cabinets-mobile.webp";

const CabinetsHeader = () => {
  useReveal();

  return (
    <section
      className="page-hero page-hero--social-cabinets"
      aria-labelledby="page-hero-title"
    >
      <div className="container page-hero-inner social-hero">
        <div className="social-hero__copy">
          <nav className="breadcrumb reveal reveal-1" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <span className="sep">/</span>
            <span aria-current="page">Pour les cabinets</span>
          </nav>
          <h1 id="page-hero-title" className="page-hero-h1 reveal reveal-2">
            Une expertise complémentaire, <br />
            <span>quand vous en avez besoin.</span>
          </h1>
          <div className="page-hero-lead reveal reveal-3">
            <p>
              Un dossier demande un regard particulier ? Votre organisation vous
              fait perdre du temps ? SOCRATEA peut intervenir à vos côtés sur
              une mission définie ou concevoir une solution adaptée au
              fonctionnement de votre cabinet. <br />
              Vous restez maître de la mission et de la relation avec votre
              client. Nous apportons la compétence complémentaire.
            </p>
          </div>
          <div className="hero-cta-group reveal reveal-4">
            <Link to="/contact" className="btn btn-primary">
              Prendre rendez-vous
              <svg
                className="arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
                focusable="false"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
        <picture
          className="social-hero__visual reveal reveal-3"
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

export default CabinetsHeader;
