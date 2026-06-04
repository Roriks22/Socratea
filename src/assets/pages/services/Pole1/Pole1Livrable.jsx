import LivrableWireframe from "../../../components/LivrableWireframe";

const Pole1Livrable = () => {
  return (
    <section className="pole1-livrable">
      <div className="container">
        <div className="section-header-livrable1">
          <span className="eyebrow">Les livrables de pilotage</span>
          <h2>
            Vos information financière,
            <span>tout au long de l'année.</span>
          </h2>
          <p>
            C'est ici que SOCRATEA se distingue. Vous ne recevez pas seulement
            des comptes annuels : vous recevez, selon la fréquence retenue dans
            votre contrat, des restitutions construites pour vous aider à
            décider.
          </p>
        </div>
        <div className="livrables-wrap">
          <ul className="livrables-list">
            <li>
              <span className="freq">Mensuel</span>
              <div>
                <strong>Flash mensuel de pilotage</strong>
                <p>
                  Publié dans les cinq jours ouvrés suivant la clôture du mois.
                  Trésorerie, marge brute, CA cumulé, principales échéances à
                  venir, points d'attention. Lisible en quelques minutes —
                  l'essentiel tient sur une page.
                </p>
              </div>
            </li>
            <li>
              <span className="freq">Trimestriel</span>
              <div>
                <strong>Situation comptable arrêtée</strong>
                <p>
                  Bilan et compte de résultat intermédiaires, arrêtés avec la
                  rigueur d'une clôture. Une base fiable pour préparer un
                  financement, négocier avec un partenaire, ou simplement
                  calibrer vos décisions du trimestre suivant.
                </p>
              </div>
            </li>
            <li>
              <span className="freq">Annuel</span>
              <div>
                <strong>Bilan commenté</strong>
                <p>
                  Au-delà de la liasse réglementaire : une note de synthèse qui
                  analyse l'exercice, met en perspective les évolutions, et
                  pointe les zones à surveiller pour l'année suivante.
                </p>
              </div>
            </li>
            <li>
              <span className="freq">À la demande</span>
              <div>
                <strong>Analyses ponctuelles</strong>
                <p>
                  Projection de trésorerie à 6 ou 12 mois, rentabilité d'un
                  projet, préparation de dossier bancaire, simulation d'impact
                  d'une décision structurante. Sur périmètre défini et chiffré à
                  l'avance.
                </p>
              </div>
            </li>
          </ul>
          <LivrableWireframe />
        </div>
      </div>
    </section>
  );
};

export default Pole1Livrable;
