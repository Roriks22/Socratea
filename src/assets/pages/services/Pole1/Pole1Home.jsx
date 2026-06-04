const Pole1Home = () => {
  return (
    <section className="pole1-home">
      <div className="container">
        <div className="section-header-pole1">
          <span className="eyebrow">Le socle réglementaire</span>
          <h2>Les obligations, tenues sans concession.</h2>
          <p>
            La tenue comptable et les obligations fiscales et sociales sont
            produites avec la rigueur d'un commissariat : exhaustivité,
            traçabilité, respect des délais. C'est la condition de tout le
            reste.
          </p>
        </div>
        <ul className="feature-list">
          <li>
            <span className="feat-num">i.</span>
            <div>
              <strong>Tenue comptable complète</strong>
              <p>
                Saisie, comptabilisation, lettrage, rapprochements bancaires.
                Les flux sont automatisés autant que possible ; la vérification
                humaine reste celle d'un expert.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">ii.</span>
            <div>
              <strong>Déclarations fiscales</strong>
              <p>
                TVA mensuelle ou trimestrielle, IS, CFE, CVAE, DAS 2 le cas
                échéant. Préparation, contrôle, télétransmission, suivi.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">iii.</span>
            <div>
              <strong>Clôture annuelle</strong>
              <p>
                Comptes annuels, liasse fiscale, annexes. Au-delà des chiffres :
                une restitution qui explique ce qu'ils disent de votre activité
                — pas seulement un document à signer.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Pole1Home;
