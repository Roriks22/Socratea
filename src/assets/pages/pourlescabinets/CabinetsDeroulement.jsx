import useReveal from "../../components/useReveal";

const CabinetsDeroulement = () => {
  useReveal();

  return (
    <section className="cabinets-deroulement">
      <div className="container">
        <div className="section-cabinets-deroulement reveal reveal-1">
          <span className="eyebrow">Une collaboration simple</span>
          <h2>
            Un besoin défini. Un cadre clair. <br />
            Une intervention ciblée.
          </h2>
        </div>
        <ul className="feature-list reveal reveal-2">
          <li>
            <span className="feat-num">01</span>
            <div>
              <strong>Comprendre le sujet</strong>
              <p>
                Nous échangeons sur le dossier, l’organisation actuelle et le
                résultat recherché. Cet échange permet de vérifier rapidement si
                SOCRATEA est en mesure d’apporter une réelle valeur.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">02</span>
            <div>
              <strong>Définir l’intervention</strong>
              <p>
                Le périmètre, les livrables, les délais, les modalités d’échange
                et les honoraires sont posés avant le démarrage.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">03</span>
            <div>
              <strong>Intervenir et vous transmettre</strong>
              <p>
                SOCRATEA réalise les travaux convenus, vous tient informé de
                leur avancement et vous remet les éléments nécessaires pour que
                vous puissiez reprendre pleinement la main.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CabinetsDeroulement;
