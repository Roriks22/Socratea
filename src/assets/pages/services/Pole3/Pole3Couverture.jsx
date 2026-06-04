const Pole3Couverture = () => {
  return (
    <section className="pole3-couverture">
      <div className="container">
        <div className="section-header-couverture">
          <span className="eyebrow">Ce qui est produit</span>
          <h2>Une couverture complète du cycle de paie.</h2>
          <p>
            L'ensemble des productions relève d'un forfait défini par nombre de
            bulletins et événements de paie habituels. Les cas non prévus
            initialement sont identifiés dès qu'ils se présentent et chiffrés à
            part — pas de facturation surprise en fin d'année.
          </p>
        </div>
        <ul className="feature-list">
          <li>
            <span className="feat-num">i.</span>
            <div>
              <strong>Bulletins de salaire</strong>
              <p>
                Établissement mensuel, intégration des éléments variables,
                contrôles de cohérence, distribution sécurisée via coffre-fort
                numérique.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">ii.</span>
            <div>
              <strong>Déclarations sociales</strong>
              <p>
                DSN mensuelle, déclarations événementielles, suivi des appels de
                cotisations. Télétransmission dans les délais, vérification des
                accusés de réception.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">iii.</span>
            <div>
              <strong>Événements de paie</strong>
              <p>
                Entrées, sorties, arrêts maladie, congés, primes
                exceptionnelles, modifications de contrat. Traités au fil de
                l'eau, jamais repoussés à la fin du mois.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">iv.</span>
            <div>
              <strong>Documents légaux</strong>
              <p>
                Attestations employeur, certificats de travail, reçus pour solde
                de tout compte, documents de fin de contrat. Établis à la
                demande, dans les formes requises.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Pole3Couverture;
