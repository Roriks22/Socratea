import useReveal from "../../../components/useReveal";

const Pole4Formalites = () => {
  useReveal();
  return (
    <section className="pole4-formalites">
      <div className="container">
        <div className="section-header-formalites reveal reveal-1">
          <span className="eyebrow span-pole4">Le suivi juridique courant</span>
          <h2>
            Les décisions de votre société <br />
            formalisées au bon moment.
          </h2>
          <p>
            Approbation des comptes, affectation du résultat, changement de
            siège ou de dirigeant : ces décisions doivent être préparées,
            documentées et déclarées dans les délais. SOCRATEA vous accompagne
            sur les actes qui relèvent de sa mission et coordonne les autres
            intervenants lorsque le sujet l’exige.
          </p>
        </div>
        <ul className="feature-list reveal reveal-2">
          <li>
            <span className="feat-num">01</span>
            <div>
              <strong>Approbation des comptes annuels</strong>
              <p>
                Nous préparons les décisions d’approbation, les documents
                associés et les formalités nécessaires. Le calendrier juridique
                reste ainsi cohérent avec la clôture de l’exercice et les
                obligations de votre société.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">02</span>
            <div>
              <strong>Affectation du résultat</strong>
              <p>
                Distribution de dividendes, mise en réserve ou report à nouveau
                : nous formalisons la décision retenue et vous aidons à en
                comprendre les principales conséquences comptables et fiscales.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">03</span>
            <div>
              <strong>Évolutions de la société</strong>
              <p>
                Transfert de siège, changement de dirigeant, modification du
                capital ou mise à jour des statuts : nous vous accompagnons sur
                ces opérations, dans le respect de notre champ d’intervention.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Pole4Formalites;
