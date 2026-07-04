import useReveal from "../../components/useReveal";

const CabinetsObjectifs = () => {
  useReveal();
  return (
    <section className="cabinets-objectifs">
      <div className="container">
        <div className="section-cabinets-objectifs reveal reveal-1">
          <span className="eyebrow">Quelques exemples concrets</span>
          <h2>
            Des besoins précis, <br />
            des réponses adaptées.
          </h2>
        </div>
        <div className="process-flow reveal reveal-2">
          <div className="process-step">
            <h4>Exploiter et fiabiliser les données</h4>
            <p>
              Rapprocher plusieurs sources, contrôler la cohérence des
              informations, traiter des volumes importants ou transformer des
              données difficiles à utiliser en une base réellement exploitable.
            </p>
          </div>
          <div className="process-step">
            <h4>Construire un pilotage adapté</h4>
            <p>
              Mettre en place des indicateurs, un tableau de bord ou une analyse
              permettant à votre client de mieux suivre son activité, ses
              marges, sa trésorerie ou sa rentabilité.
            </p>
          </div>
          <div className="process-step">
            <h4>Simplifier les processus du cabinet</h4>
            <p>
              Réduire les doubles saisies, organiser la collecte des
              informations, automatiser des contrôles ou fluidifier les circuits
              de validation et de suivi.
            </p>
          </div>
          <div className="process-step">
            <h4>Développer une application sur mesure</h4>
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
