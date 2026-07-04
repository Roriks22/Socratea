import useReveal from "../../components/useReveal";

const CabinetsHome = () => {
  useReveal();

  return (
    <section className="cabinets-home">
      <div className="container">
        <div className="section-cabinets reveal reveal-1">
          <span className="eyebrow">Deux façons de collaborer</span>
          <h2>
            Sur vos dossiers, <br />
            ou dans votre cabinet.
          </h2>
        </div>
        <ul className="feature-list reveal reveal-2">
          <li>
            <span className="feat-num">01</span>
            <div>
              <strong>Intervenir en appui sur un dossier client</strong>
              <p>
                Analyse de données, contrôle de gestion, construction
                d’indicateurs, fiabilisation des flux ou problématique
                particulière liée aux outils : certains dossiers demandent du
                temps ou une compétence qui n’est pas toujours disponible en
                interne.
              </p>
              <p>
                SOCRATEA peut intervenir ponctuellement aux côtés de votre
                équipe, sur le périmètre que nous aurons défini ensemble.
              </p>
              <p>
                Vous conservez la maîtrise de la mission. L’intervention peut
                rester en appui du cabinet ou inclure des échanges avec le
                client lorsque vous le jugez utile.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">02</span>
            <div>
              <strong>Accompagner l’évolution de votre cabinet</strong>
              <p>
                Ressaisies, contrôles répétitifs, informations dispersées,
                fichiers difficiles à maintenir ou outils qui communiquent mal :
                les irritants du quotidien finissent souvent par coûter beaucoup
                de temps aux équipes.
              </p>
              <p>
                SOCRATEA vous aide à revoir ces processus, à automatiser
                certaines tâches et, lorsque le besoin le justifie, à développer
                une application adaptée au fonctionnement de votre cabinet.
              </p>
              <p>
                Le point de départ n’est jamais l’outil. C’est le problème
                concret que vous souhaitez résoudre.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CabinetsHome;
