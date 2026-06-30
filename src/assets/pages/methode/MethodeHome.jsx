import useReveal from "../../components/useReveal";

const MethodeHome = () => {
  useReveal();
  return (
    <section className="methode-home">
      <div className="container">
        <div className="section-home reveal reveal-1">
          <span className="eyebrow">Le suivi en pratique</span>
          <h2>
            De vos données <br />à une information fiable et utile.
          </h2>
          <p>
            Chaque entreprise a son organisation. Selon la mission confiée,
            SOCRATEA peut produire l’information comptable, réviser les travaux
            réalisés par vos équipes ou intervenir sur un périmètre défini. La
            méthode reste la même : organiser les données, les fiabiliser et
            vous restituer ce qui compte vraiment.
          </p>
        </div>
        <div className="process-flow reveal reveal-2">
          <div className="process-step">
            <h4>Organiser les flux</h4>
            <p>
              Nous définissons avec vous comment les pièces, les données et les
              informations utiles doivent circuler. Elles peuvent provenir de
              vos outils, de ceux du cabinet ou directement de vos équipes.
              L’objectif est d’éviter les pertes d’information et de disposer
              d’une base exploitable.
            </p>
          </div>
          <div className="process-step">
            <h4>Produire ou réviser</h4>
            <p>
              Selon votre organisation, SOCRATEA prend en charge la production
              comptable ou s’appuie sur les travaux déjà réalisés dans votre
              entreprise. L’intervention s’adapte à la mission, au
              fonctionnement de vos équipes et au cadre comptable applicable.
            </p>
          </div>
          <div className="process-step">
            <h4>Contrôler et fiabiliser</h4>
            <p>
              Nous vérifions la cohérence de l’information, analysons les écarts
              et concentrons les contrôles sur les zones qui méritent une
              attention particulière. Les anomalies et les points de vigilance
              sont identifiés avant la restitution.
            </p>
          </div>
          <div className="process-step">
            <h4>Restituer et éclairer</h4>
            <p>
              Flash mensuel, situation comptable arrêtée, comptes annuels
              commentés ou analyse ponctuelle : la restitution dépend de vos
              besoins et du niveau de suivi retenu. Lorsque les conditions sont
              réunies, le Flash J+5 permet de disposer rapidement des principaux
              indicateurs. Les éléments importants sont expliqués et remis en
              perspective pour vous aider à décider.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodeHome;
