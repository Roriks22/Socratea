import useReveal from "../../components/useReveal";
import julienimage from "/images/Page_a_propos_fondateur.webp";

const AproposHome = () => {
  useReveal();
  return (
    <section className="aprps-home" aria-labelledby="apropos-home-title">
      <div className="container">
        <div className="about-inner">
          <div className="about-portrait reveal reveal-1">
            <img
              src={julienimage}
              alt="Julien Jacquesson, expert-comptable fondateur de SOCRATEA"
            />
          </div>
          <div className="about-content">
            <span className="eyebrow reveal reveal-2">Le fondateur</span>
            <h2 id="apropos-home-title" className="reveal reveal-3">
              Un parcours, une conviction.
            </h2>
            <p className="aprps1 reveal reveal-4">
              « J’ai vu les chiffres des deux côtés : celui de l’auditeur qui
              vérifie, et celui du directeur financier qui décide avec. C’est ce
              double regard que j’apporte à mes clients. »
            </p>
            <p className="aprps2 reveal reveal-5">
              J’ai d’abord exercé pendant sept ans en cabinet d’audit,
              principalement sur des missions de commissariat aux comptes et
              d’accompagnement de PME. J’ai ensuite rejoint un groupe de onze
              établissements comme directeur administratif et financier, avec
              pour mission de structurer la fonction financière, d’accompagner
              les équipes et d’éclairer les décisions de la direction générale.
            </p>
            <p className="aprps3 reveal reveal-5">
              Ce double parcours m’a appris à concilier deux exigences : la
              fiabilité de l’information financière et son utilité réelle pour
              le dirigeant. C’est de cette double expérience qu’est né SOCRATEA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AproposHome;
