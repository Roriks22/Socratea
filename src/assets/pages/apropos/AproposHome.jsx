import julienimage from "../../../../public/images/julien-complet.png";

const AproposHome = () => {
  return (
    <section className="aprps-home">
      <div className="container">
        <div className="about-inner">
          <div className="about-portrait">
            <img src={julienimage} alt="Julien_JACQUESSON" />
          </div>
          <div className="about-content">
            <span className="eyebrow">Le fondateur</span>
            <h3>Un parcours, une conviction.</h3>
            <p className="aprps1">
              « J’ai vu les chiffres des deux côtés : celui de l’auditeur qui
              vérifie, et celui du directeur financier qui décide avec. C’est ce
              double regard que j’apporte à mes clients. »
            </p>
            <p className="aprps2">
              J’ai d’abord exercé pendant sept ans en cabinet d’audit,
              principalement sur des missions de commissariat aux comptes et
              d’accompagnement de PME. J’ai ensuite rejoint un groupe de onze
              établissements comme directeur administratif et financier, avec
              pour mission de structurer la fonction financière, d’accompagner
              les équipes et d’éclairer les décisions de la direction générale.
            </p>
            <p className="aprps3">
              Ce double parcours m'a appris à concilier deux exigences : la
              fiabilité de l'information financière et son utilité réelle pour
              le dirigeant. C'est de cette double expérience qu'est né SOCRATEA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AproposHome;
