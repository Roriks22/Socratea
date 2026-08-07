import { Link } from "react-router-dom";
import useReveal from "../../../components/useReveal";
import heroSocialDesktop from "/images/automatisation/automatisation-desktop.webp";
import heroSocialMobile from "/images/automatisation/automatisation-mobile.webp";

const Pole2Header = () => {
  useReveal();
  return (
    <section
      className="page-hero page-hero--social-automatisation"
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
            <span aria-current="page" className="current current-auto">
              Automatisation et structuration des flux
            </span>
          </nav>
          <h1 id="page-hero-title" className="reveal reveal-2">
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

export default Pole2Header;
