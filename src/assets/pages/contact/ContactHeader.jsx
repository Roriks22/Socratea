import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";
import heroSocialDesktop from "/images/julien-complet-transparent.webp";
import heroSocialMobile from "/images/julien-complet-transparent.webp";

const ContactHeader = () => {
  useReveal();
  return (
    <section
      className="page-hero page-hero--social-contact"
      aria-label="Présentation de la page de contact du cabinet d'expertise comptable SOCRATEA"
    >
      <div className="container page-hero-inner social-hero">
        <div className="social-hero__copy">
          <nav className="breadcrumb reveal reveal-1" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <span className="sep">/</span>
            <span aria-current="page">Contact</span>
          </nav>
          <h1 className="page-hero-h1 reveal reveal-2">
            30 minutes
            <br />
            <span>pour faire connaissance.</span>
          </h1>
          <div className="page-hero-lead reveal reveal-3">
            <p>
              Ce premier échange, sans engagement, nous permet de comprendre
              votre activité, votre organisation et ce que vous attendez de
              votre expert-comptable. De votre côté, vous découvrez l’approche
              SOCRATEA et pouvez vérifier qu’elle correspond à ce que vous
              recherchez. Si ce n’est pas le cas, nous vous le dirons et nous
              vous orienterons si nous le pouvons.
            </p>
          </div>
        </div>
        <div className="photo-hero-visual reveal reveal-3">
          <div className="contact-card">
            <picture className="social-hero__visual">
              <source media="(max-width: 900px)" srcSet={heroSocialMobile} />

              <img
                src={heroSocialDesktop}
                alt="Julien Jacquesson, expert-comptable fondateur de SOCRATEA"
                width="540"
                height="700"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                draggable="false"
              />
            </picture>
            <div className="texte-contact-julien">
              <h2>Julien Jacquesson</h2>
              <h3>Expert-comptable</h3>
              <div className="hero-tag">
                <span className="dot"></span>
                <span>échange sans engagement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
