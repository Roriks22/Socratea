const Pole4Formalites = () => {
  return (
    <section className="pole4-formalites">
      <div className="container">
        <div className="section-header-formalites">
          <span className="eyebrow">Les actes juridiques courants</span>
          <h2>
            Les formalités annuelles, <br />
            traitées dans les délais.
          </h2>
          <p>
            Chaque année, votre société doit remplir un certain nombre
            d'obligations juridiques. Nous les prenons en charge dans le cadre
            de la mission courante, en coordination avec le dépôt des comptes
            annuels.
          </p>
        </div>
        <ul className="feature-list">
          <li>
            <span className="feat-num">i.</span>
            <div>
              <strong>Approbation des comptes annuels</strong>
              <p>
                Rédaction du procès-verbal d'assemblée générale, du rapport de
                gestion le cas échéant, et des documents associés. Dépôt au
                greffe dans les délais légaux.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">ii.</span>
            <div>
              <strong>Décisions relatives aux résultats</strong>
              <p>
                Affectation du résultat, décision de distribution de dividendes,
                report à nouveau. Formalisées avec les implications fiscales
                associées.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">iii.</span>
            <div>
              <strong>Formalités courantes</strong>
              <p>
                Changement de siège, modification de gérance, transfert de
                capital, modifications statutaires simples. Les formalités qui
                ne nécessitent pas l'intervention d'un avocat.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Pole4Formalites;
