import useReveal from "../../../components/useReveal";

const Pole4Operations = () => {
  useReveal();
  return (
    <section className="pole4-operations">
      <div className="container">
        <div className="section-header-operations reveal reveal-1">
          <span className="eyebrow">
            Les opérations qui font évoluer votre société
          </span>
          <h2>
            Préparer chaque étape, <br />
            avec les bons interlocuteurs.
          </h2>
          <p>
            Création, entrée d’un associé, financement, réorganisation, cession
            ou transmission : certaines décisions engagent durablement votre
            entreprise. SOCRATEA vous aide à en mesurer les conséquences, à
            préparer l’opération et à coordonner les intervenants nécessaires.
          </p>
        </div>
        <div className="two-col-operations reveal reveal-2">
          <div>
            <h3>Structurer la décision</h3>
            <p>
              Nous intervenons sur les dimensions comptables, fiscales et
              financières, ainsi que sur les actes juridiques qui relèvent de
              notre champ d’intervention. Simulations, choix du schéma,
              préparation des documents ou dossier de financement : vous
              disposez d’une vision plus claire avant de vous engager.
            </p>
          </div>
          <div>
            <h3>Réunir les bonnes expertises</h3>
            <p>
              Lorsque l’opération nécessite l’intervention d’un avocat, d’un
              notaire ou d’un autre spécialiste, nous travaillons avec le
              professionnel de votre choix. Nous veillons à la cohérence des
              informations, des décisions et du calendrier pour que chacun
              intervienne au bon moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pole4Operations;
