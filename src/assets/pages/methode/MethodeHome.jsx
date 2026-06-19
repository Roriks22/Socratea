const MethodeHome = () => {
  return (
    <section className="methode-home">
      <div className="container">
        <div className="section-home">
          <span className="eyebrow">La chaîne de production</span>
          <h3>
            Comment vos chiffres <br />
            <em className="em-blue">sont produits chaque mois.</em>
          </h3>
          <p>
            Un processus standardisé, reproductible, qui garantit à la fois la
            régularité des livrables et la fiabilité de l'information. Voici ce
            qui se passe concrètement entre chaque mois et le flash que vous
            recevez.
          </p>
        </div>
        <div className="process-flow">
          <div className="process-step">
            <h4>Collecte</h4>
            <p>
              Vos pièces et flux arrivent par les canaux définis : plateforme de
              dépôt, connecteurs bancaires, intégrations métier. Aucune saisie
              manuelle redondante.
            </p>
          </div>
          <div className="process-step">
            <h4>Traitement</h4>
            <p>
              Comptabilisation, lettrage, rapprochements bancaires. Les
              contrôles automatisés identifient les anomalies ; les points à
              clarifier vous sont remontés sans délai.
            </p>
          </div>
          <div className="process-step">
            <h4>Revue</h4>
            <p>
              Revue analytique des postes sensibles, cohérence des marges,
              contrôle des principaux comptes. C'est ici que l'œil de
              l'expert-comptable fait la différence.
            </p>
          </div>
          <div className="process-step">
            <h4>Restitution</h4>
            <p>
              Publication du flash mensuel dans les cinq jours ouvrés suivant la
              clôture du mois. Points d'attention signalés. Restitution orale si
              l'actualité le justifie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodeHome;
