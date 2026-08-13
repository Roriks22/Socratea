import useReveal from "../../components/useReveal";

const CabinetsObjectifs = () => {
  useReveal();
  return (
    <section
      className="cabinets-objectifs"
      aria-labelledby="cabinets-objectifs-title"
    >
      <div className="container">
        <div className="section-cabinets-objectifs reveal reveal-1">
          <span className="eyebrow span-cabinet">
            Quelques exemples concrets
          </span>
          <h2 id="cabinets-objectifs-title">
            Des besoins précis, <br />
            des réponses adaptées.
          </h2>
        </div>
        <div className="process-flow">
          <div className="process-step reveal reveal-2">
            <h3>Exploiter et fiabiliser les données</h3>
            <p>
              Rapprocher plusieurs sources, contrôler la cohérence des
              informations, traiter des volumes importants ou transformer des
              données difficiles à utiliser en une base réellement exploitable.
            </p>
          </div>
          <div className="process-step reveal reveal-3">
            <h3>Construire un pilotage adapté</h3>
            <p>
              Mettre en place des indicateurs, un tableau de bord ou une analyse
              permettant à votre client de mieux suivre son activité, ses
              marges, sa trésorerie ou sa rentabilité.
            </p>
          </div>
          <div className="process-step reveal reveal-4">
            <h3>Simplifier les processus du cabinet</h3>
            <p>
              Réduire les doubles saisies, organiser la collecte des
              informations, automatiser des contrôles ou fluidifier les circuits
              de validation et de suivi.
            </p>
          </div>
          <div className="process-step reveal reveal-5">
            <h3>Développer une application sur mesure</h3>
            <p>
              Créer un outil adapté à un besoin interne précis : suivi des
              dossiers, collecte auprès des clients, gestion des demandes,
              contrôles, planification ou centralisation de l’information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CabinetsObjectifs;
