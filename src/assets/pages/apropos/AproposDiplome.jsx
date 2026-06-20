import useReveal from "../../components/useReveal";

const AproposDiplome = () => {
  useReveal();
  return (
    <section className="aprps-diplome">
      <div className="container">
        <div className="section-diplome reveal reveal-1">
          <span className="eyebrow">Pour rappel</span>
          <h3>Les éléments qui engagent.</h3>
        </div>
        <div className="credentials-grid reveal reveal-2">
          <div className="credential">
            <div className="label">Diplôme</div>
            <div className="value">
              Diplôme d'expertise comptable <br />
              (DEC)
            </div>
          </div>
          <div className="credential">
            <div className="label">Inscription</div>
            <div className="value">
              Conseil régional de l'Ordre des Experts-Comptables Hauts-de-France
            </div>
          </div>
          <div className="credential">
            <div className="label">Responsabilité civile</div>
            <div className="value">
              Assurance RCP conforme aux exigences de la profession
            </div>
          </div>
          <div className="credential">
            <div className="label">Siège social</div>
            <div className="value">
              21, rue Charlemagne 80480 Vers-sur-SElle (Somme)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AproposDiplome;
