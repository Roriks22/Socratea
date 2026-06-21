import julienimage from "../../../../public/images/Julien - 2026 02 08 - complet.jpg";

const Apropos = () => {
  return (
    <section className="a_propos">
      <div className="container apropos">
        <div className="apropos_left">
          <img src={julienimage} alt="Julien_JACQUESSON" />
        </div>
        <div className="apropos-right">
          <span>à propos</span>
          <h3>Julien JACQUESSON, expert-comptable diplômé.</h3>
          <p className="texte_1">
            "J'ai vu les chiffres des deux côtés : celui de l'auditeur qui
            vérifie, et celui du dirigeant financier qui décide avec. C'est ce
            double regard que j'apporte à mes clients."
          </p>
          <p className="texte_2">
            14 ans de pratique partagés entre l'audit en cabinet et la direction
            administrative et financière d'un groupe multi-sites. Un parcours
            qui n'est pas un cumul de postes, mais la raison même pour laquelle
            SOCRATEA existe : produire des comptes est un socle ; donner au
            dirigeant de quoi piloter est un autre métier.
          </p>
          <div className="btn-parcours">
            <a href="apropos" className="btn-click-parcours">
              Lire le parcours complet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
