import LivrableWireframe from "../components/LivrableWireframe";

const Livrables = () => {
  return (
    <section className="livrables">
      <div className="livrables-deroulement">
        <div className="livrables-header">
          <span>- ce que vous recevez</span>
          <h3>
            Des livrables pensés pour le dirigeant, pas pour l'administration.
          </h3>
          <p>
            La tenue comptable est un socle nécessaire. L'objectif est ailleurs
            : vous donner une lecture rapide, fiable et régulière de votre
            activité — pour que chaque décision s'appuie sur des chiffres à
            jour.
          </p>
        </div>
        <div className="livrables-footer">
          <div className="livrables-left">
            <div className="livrables-clients">
              <div className="livrables-span">
                <span>Mensuel</span>
              </div>
              <div className="livrables-text">
                <h3>Flash mensuel de pilotage</h3>
                <p>
                  Trésorerie, marge, CA cumulé, principales échéances. Un
                  document synthétique, lisible en quelques minutes.
                </p>
              </div>
            </div>
            <div className="livrables-clients">
              <div className="livrables-span">
                <span>Trimestriel</span>
              </div>
              <div className="livrables-text">
                <h3>Situation comptable arrêtée</h3>
                <p>
                  Bilan et compte de résultat intermédiaires. Une photo réelle
                  pour calibrer les décisions du trimestre suivant.
                </p>
              </div>
            </div>
            <div className="livrables-clients">
              <div className="livrables-span">
                <span>Annuel</span>
              </div>
              <div className="livrables-text">
                <h3>Clôture et bilan commenté</h3>
                <p>
                  Comptes annuels, obligations fiscales et sociales, et une
                  restitution qui explique les chiffres — pas seulement les
                  produit.
                </p>
              </div>
            </div>
            <div className="livrables-clients">
              <div className="livrables-span">
                <span>À la demande</span>
              </div>
              <div className="livrables-text">
                <h3>Analyses ponctuelles</h3>
                <p>
                  Rentabilité d'un projet, préparation d'un dossier bancaire,
                  projection de trésorerie, impact d'une décision. Sur périmètre
                  défini.
                </p>
              </div>
            </div>
          </div>
            <LivrableWireframe />
        </div>
      </div>
    </section>
  );
};

export default Livrables;
