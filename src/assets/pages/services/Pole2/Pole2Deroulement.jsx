const Pole2Deroulement = () => {
  return (
    <section className="pole2-deroulement">
      <div className="container">
        <div className="section-header-pole2">
          <span className="eyebrow">Les chantiers que nous traitons</span>
          <h2>Quatre circuits qui gagnent à être structurés.</h2>
          <p>
            Ces chantiers peuvent être menés séparément ou conjointement, selon
            votre situation de départ et vos priorités. Ils sont cadrés avec
            vous avant toute intervention.
          </p>
        </div>
        <ul className="feature-list">
          <li>
            <span className="feat-num">i.</span>
            <div>
              <strong>Factures fournisseurs</strong>
              <p>
                Réception centralisée, extraction automatique des données,
                routage de validation, pré-comptabilisation. L'objectif : passer
                moins de temps à saisir, plus de temps à contrôler.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">ii.</span>
            <div>
              <strong>Rapprochements bancaires</strong>
              <p>
                Connexions bancaires automatisées, règles de lettrage,
                traitement en masse des opérations récurrentes. Les cas
                complexes remontent, les cas simples se règlent seuls.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">iii.</span>
            <div>
              <strong>Notes de frais</strong>
              <p>
                Collecte via application mobile, dématérialisation des
                justificatifs, circuits de validation paramétrables. Fin du
                carton en fin de mois.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">iv.</span>
            <div>
              <strong>Interfaces avec vos outils métier</strong>
              <p>
                Caisse, facturation, gestion commerciale, CRM, e-commerce : nous
                connectons vos outils à la comptabilité pour éviter les doubles
                saisies et les écarts.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Pole2Deroulement;
