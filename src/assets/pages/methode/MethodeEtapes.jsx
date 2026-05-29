const MethodeEtapes = () => {
  return (
    <section className="methode-etapes">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Trois étapes</span>
          <h2>
            De la première prise de contact <br />
            <span>à la restitution régulière.</span>
          </h2>
          <p>
            La collaboration est structurée en trois temps. Chaque étape a son
            objectif, ses livrables et ses engagements — pour les deux parties.
          </p>
        </div>
        <div className="methode-steps">
          <div className="step">
            <div className="step-number">i.</div>
            <h3>Qualification</h3>
            <p>
              Un premier rendez-vous de 30 minutes pour comprendre votre
              activité, vos attentes et vos contraintes. Nous vérifions ensemble
              si SOCRATEA correspond à votre situation. Si ce n'est pas le bon
              moment ou le bon cabinet pour vous, nous vous le disons — et nous
              vous orientons si nous le pouvons.
            </p>
          </div>
          <div className="step">
            <div className="step-number">ii.</div>
            <h3>Cadrage</h3>
            <p>
              Une fois l'adéquation confirmée, nous formalisons la mission :
              périmètre exact, livrables attendus, calendrier de transmission,
              responsabilités de chacun. Les éventuels hors-forfait sont définis
              dès le départ, par écrit. Vous savez exactement ce qui est inclus
              — et ce qui ne l'est pas.
            </p>
          </div>
          <div className="step">
            <div className="step-number">iii.</div>
            <h3>Production & pilotage</h3>
            <p>
              La mission démarre. Collecte dématérialisée, traitement
              standardisé, livrables réguliers. Des points de restitution sont
              planifiés à l'avance — où l'on parle chiffres, mais aussi
              décisions à prendre. Le cabinet n'est pas un prestataire passif :
              c'est un interlocuteur financier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodeEtapes;
