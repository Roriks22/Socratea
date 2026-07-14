import useReveal from "../../../components/useReveal";

const Pole3Couverture = () => {
  useReveal();
  return (
    <section className="pole3-couverture">
      <div className="container">
        <div className="section-header-couverture reveal reveal-1">
          <span className="eyebrow span-pole3">
            Votre gestion sociale au quotidien
          </span>
          <h2>
            Une paie suivie, <br />
            mois après mois.
          </h2>
          <p>
            La qualité de la paie dépend autant des informations transmises que
            du traitement qui en est fait. Nous organisons le calendrier,
            suivons les bulletins et les déclarations, et vous accompagnons
            lorsque la situation d’un salarié évolue.
          </p>
        </div>
        <ul className="feature-list reveal reveal-2">
          <li>
            <span className="feat-num">01</span>
            <div>
              <strong>Collecter les variables de paie</strong>
              <p>
                Salaires, primes, absences, congés ou avantages : nous vous
                indiquons les éléments à transmettre et le calendrier à
                respecter. Les informations sont centralisées et vérifiées avant
                leur prise en compte dans la paie.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">02</span>
            <div>
              <strong>Établir les bulletins et les déclarations</strong>
              <p>
                Les bulletins sont établis chaque mois et les déclarations
                sociales sont suivies dans les délais. Les accusés de réception
                et les éventuelles anomalies font l’objet d’un contrôle.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">03</span>
            <div>
              <strong>Prendre en compte les événements des salariés</strong>
              <p>
                Embauche, arrêt de travail, évolution de rémunération, congé ou
                départ : nous vous aidons à traiter les événements qui ont un
                impact sur la paie et les formalités associées.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">04</span>
            <div>
              <strong>Préparer les documents nécessaires</strong>
              <p>
                Attestations, contrats de travail, certificats de travail et
                documents de fin de contrat sont préparés lorsqu’ils sont
                nécessaires. Vous savez ce qui doit être transmis, à quel moment
                et quelles démarches restent à effectuer.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Pole3Couverture;
