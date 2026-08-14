import julienImage from "/images/Accueil_a_propos.webp";
import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";

const Apropos = () => {
  useReveal();
  return (
    <section className="a_propos" aria-labelledby="apropos-main-title">
      <div className="container apropos">
        <div className="apropos_left reveal-left">
          <img
            src={julienImage}
            alt="Julien Jacquesson, expert-comptable fondateur de SOCRATEA"
            loading="lazy"
          />
        </div>
        <div className="apropos-right">
          <span className="reveal reveal-2">À propos</span>
          <h2 id="apropos-main-title" className="reveal reveal-3">
            Julien Jacquesson, expert-comptable
          </h2>
          <p className="texte_1 reveal reveal-4">
            « J’ai vu les chiffres des deux côtés : celui de l’auditeur qui
            vérifie, et celui du directeur financier qui décide avec. C’est ce
            double regard que j’apporte à mes clients. »
          </p>
          <p className="texte_2 reveal reveal-4">
            Quatorze années d’expérience partagées entre l’audit en cabinet et
            la direction administrative et financière d’un groupe multi-sites.
            Un parcours qui associe la rigueur du contrôle à une connaissance
            concrète des enjeux de l’entreprise : piloter l’activité, organiser
            les équipes, faire évoluer les outils et décider avec une
            information fiable. <br />
            C’est de cette double expérience qu’est né SOCRATEA.
          </p>
          <div className="btn-parcours reveal-left">
            <Link to="/apropos" className="btn-click-parcours">
              Découvrir son parcours
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
