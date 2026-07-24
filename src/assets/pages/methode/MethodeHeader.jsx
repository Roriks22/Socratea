import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";
import heroSocialDesktop from "../../../../public/images/Methode/methode-desktop.png";
import heroSocialMobile from "../../../../public/images/Methode/methode-mobile.png";

const Methode = () => {
  useReveal();
  return (
    <section className="page-hero page-hero--social-methode">
      <div className="container page-hero-inner social-hero">
        <div className="social-hero__copy">
          <div className="breadcrumb reveal reveal-1">
            <Link to="/">Accueil</Link>
            <span className="sep">/</span>
            <span className="current">Notre méthode</span>
          </div>
          <h1 className="page-hero-h1 reveal reveal-2">
            Une organisation claire, <br />
            <span>dès le départ.</span>
          </h1>
          <div className="page-hero-lead reveal reveal-3">
            <p>
              Dès les premiers échanges, nous mettons en place avec vous une
              façon de travailler adaptée à votre entreprise : quoi transmettre,
              quand et par quel canal. Moins d’allers-retours, moins
              d’informations perdues, et des chiffres fiables quand vous en avez
              besoin.
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

export default Methode;
