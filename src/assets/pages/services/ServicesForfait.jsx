import useReveal from "../../components/useReveal";

const ServicesForfait = () => {
  useReveal();
  return (
    <section className="services-forfait">
      <div className="container">
        <div className="section-forfait reveal reveal-1">
          <span className="eyebrow">Construction de l'offre</span>
          <h2>
            Un forfait construit avec vous,
            <br />
            pour vous.
          </h2>
          <p>
            L'offre n'est pas standardisée : elle se construit en fonction du
            profil de votre entreprise, des pôles retenus et du périmètre précis
            de chaque mission. Les éventuels hors-forfait sont identifiés et
            chiffrés dès le cadrage — pour éviter les surprises en cours
            d'année.
          </p>
        </div>
        <div className="two-col reveal reveal-2">
          <div className="col">
            <h3>Ce qui est toujours inclus</h3>
            <p>
              La tenue des comptes à périmètre défini, les déclarations fiscales
              et sociales courantes, les livrables de pilotage selon la
              fréquence convenue, les points de restitution planifiés, les
              contacts usuels avec l'administration.
            </p>
          </div>
          <div className="col">
            <h3>Ce qui relève du hors-forfait</h3>
            <p>
              Les missions ponctuelles identifiées au cadrage — opérations de
              restructuration, dossiers de financement structurants,
              accompagnement sur des événements exceptionnels. Chiffré à
              l'avance, jamais facturé au fil de l'eau sans votre accord.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesForfait;
