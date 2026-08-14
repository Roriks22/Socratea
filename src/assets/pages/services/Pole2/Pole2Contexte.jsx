import useReveal from "../../../components/useReveal";

const Pole2Contexte = () => {
  useReveal();
  return (
    <section className="pole2-contexte" aria-labelledby="pole2-contexte-title">
      <div className="container">
        <div className="pole2-texte">
          <span className="eyebrow span-pole2 reveal reveal-1">
            Facturation électronique
          </span>
          <h2 id="pole2-contexte-title" className="reveal reveal-2">
            Bien plus qu’un changement de format.
          </h2>
          <p className="reveal reveal-3">
            La facturation électronique ne consiste pas seulement à choisir une
            plateforme agréée. Elle amène aussi à revoir la façon dont les
            factures sont créées, reçues, contrôlées, validées et intégrées dans
            vos outils.
          </p>
          <p className="reveal reveal-4">
            SOCRATEA vous aide à adapter ces circuits à votre organisation, à
            limiter les doubles saisies et à fiabiliser les données. L’objectif
            n’est pas d’ajouter une complexité supplémentaire, mais de rendre le
            traitement des factures plus simple et plus fiable au quotidien.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pole2Contexte;
