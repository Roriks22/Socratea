import julienimage from "../../../../public/images/julien-complet.png";
import { useNavigate } from "react-router-dom";

const Apropos = () => {
  const navigate = useNavigate();
  return (
    <section className="a_propos">
      <div className="container apropos">
        <div className="apropos_left">
          <img src={julienimage} alt="Julien_JACQUESSON" />
        </div>
        <div className="apropos-right">
          <span>à propos</span>
          <h3>Julien Jacquesson, expert-comptable diplômé</h3>
          <p className="texte_1">
            « J’ai vu les chiffres des deux côtés : celui de l’auditeur qui
            vérifie, et celui du directeur financier qui décide avec. C’est ce
            double regard que j’apporte à mes clients. »
          </p>
          <p className="texte_2">
            Quatorze années d’expérience partagées entre l’audit en cabinet et
            la direction administrative et financière d’un groupe multi-sites.
            Un parcours qui associe la rigueur du contrôle à une connaissance
            concrète des enjeux de l’entreprise : piloter l’activité, organiser
            les équipes, faire évoluer les outils et décider avec une
            information fiable. <br />
            C’est de cette double expérience qu’est né SOCRATEA.
          </p>
          <div className="btn-parcours">
            <button
              href="apropos"
              className="btn-click-parcours"
              onClick={() => navigate("/apropos")}
            >
              Découvrir son parcours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
