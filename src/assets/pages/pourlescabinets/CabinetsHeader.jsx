import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useReveal from "../../components/useReveal";
import heroSocialDesktop from "../../../../public/images/cabinets/cabinets-desktop.png";
import heroSocialMobile from "../../../../public/images/cabinets/cabinets-mobile.png";

const CabinetsHeader = () => {
  useReveal();
  const navigate = useNavigate();
  return (
    <section className="page-hero page-hero--social-cabinets">
      <div className="container page-hero-inner social-hero">
        <div className="social-hero__copy">
          <div className="breadcrumb reveal reveal-1">
            <Link to="/">Accueil</Link>
            <span className="sep">/</span>
            <span className="current">pour les cabinets</span>
          </div>
          <h1 className="page-hero-h1 reveal reveal-2">
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
            <button
              className="btn btn-primary"
              onClick={() => navigate("/contact")}
            >
              Prendre rendez-vous
              <svg
                className="arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
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

export default CabinetsHeader;
