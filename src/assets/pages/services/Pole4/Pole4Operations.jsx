import useReveal from "../../../components/useReveal";

const Pole4Operations = () => {
  useReveal();
  return (
    <section className="pole4-operations">
      <div className="container">
        <div className="section-header-operations reveal reveal-1">
          <span className="eyebrow">Les opérations ponctuelles</span>
          <h2>
            Aux étapes <br />
            qui comptent vraiment.
          </h2>
          <p>
            Certaines opérations sortent du cadre courant : elles structurent
            l'avenir de votre entreprise ou mobilisent plusieurs disciplines à
            la fois. Pour celles-ci, nous intervenons en coordination avec vos
            autres conseils.
          </p>
        </div>
        <div className="two-col-operations reveal reveal-2">
          <div>
            <h3>Où nous intervenons</h3>
            <p>
              Constitution et création de sociétés, choix de la forme juridique,
              montages intégrant plusieurs structures. Cessions et transmissions
              d'entreprise côté cédant comme côté repreneur — dimension
              financière, fiscale et organisationnelle. Restructurations :
              apports, fusions simplifiées, changements de statuts
              significatifs. Préparation des dossiers bancaires structurants.
            </p>
          </div>
          <div>
            <h3>Où nous savons passer la main</h3>
            <p>
              Les contentieux, les opérations complexes relevant du droit des
              affaires pur, les dossiers impliquant des problématiques
              patrimoniales familiales : ce ne sont pas nos métiers. Nous
              travaillons alors avec l'avocat ou le notaire adapté — le vôtre ou
              un de nos partenaires de confiance — en gardant la cohérence
              économique de l'opération.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pole4Operations;
