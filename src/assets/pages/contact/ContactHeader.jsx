import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";
import heroSocialDesktop from "../../../../public/images/julien-complet-transparent.png";
import heroSocialMobile from "../../../../public/images/julien-complet-transparent.png";

const ContactHeader = () => {
  useReveal();
  return (
    <section className="page-hero page-hero--social-contact">
      <div className="container page-hero-inner social-hero">
        <div className="social-hero__copy">
          <div className="breadcrumb reveal reveal-1">
            <Link to="/">Accueil</Link>
            <span className="sep">/</span>
            <span className="current">Contact</span>
          </div>
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
        <picture
          className="social-hero__visual reveal reveal-3"
          aria-hidden="true"
        >
          <source media="(max-width: 900px)" srcSet={heroSocialMobile} />

          <img
            src={heroSocialDesktop}
            alt="illustration contact"
            width="540"
            height="700"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable="false"
          />
          <div className="texte-contact-julien">
            <h1>Julien Jacquesson</h1>
            <h3>Expert-comptable</h3>
            <div className="hero-tag">
              <span className="dot"></span>
              <span>Echange sans engagement</span>
            </div>
          </div>
        </picture>
      </div>
    </section>
  );
};

export default ContactHeader;
