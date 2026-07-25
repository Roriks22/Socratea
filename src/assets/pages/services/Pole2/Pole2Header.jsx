import { Link } from "react-router-dom";
import useReveal from "../../../components/useReveal";
import heroSocialDesktop from "../../../../../public/images/automatisation/automatisation-desktop.png";
import heroSocialMobile from "../../../../../public/images/automatisation/automatisation-mobile.png";

const Pole2Header = () => {
  useReveal();
  return (
    <section className="page-hero page-hero--social-automatisation">
      <div className="container page-hero-inner social-hero">
        <div className="social-hero__copy">
          <div className="breadcrumb reveal reveal-1">
            <Link to="/">Accueil</Link>
            <span className="sep">/</span>
            <Link to="/services" className="span-services">
              Nos services
            </Link>
            <span className="sep">/</span>
            <span className="current current-auto">
              Automatisation et structuration des flux
            </span>
          </div>
          <h1 className="reveal reveal-2">
            Automatisation et structuration des flux <br />
            <span>Des outils adaptés à votre façon de travailler.</span>
          </h1>
          <div className="page-hero-lead reveal reveal-3">
            <p>
              Nous partons de votre organisation, de vos outils et de ce qui
              vous fait perdre du temps. SOCRATEA simplifie les circuits
              d’information, automatise les tâches répétitives, connecte vos
              outils lorsque cela est utile et peut développer des applications
              adaptées à vos besoins. L’objectif : des processus plus fluides,
              des données plus fiables et une organisation capable d’évoluer
              avec votre entreprise.
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

export default Pole2Header;
