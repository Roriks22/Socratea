import useReveal from "../../components/useReveal";
import schemaMethodeHome from "/images/schema-methodeHome.webp";
import imageFlux from "/images/methode/Organiser les flux.webp";
import imageControler from "/images/methode/Contrôler et fiabiliser.webp";
import imageProduire from "/images/methode/Produire ou réviser.webp";
import imageRestituer from "/images/methode/Restituer et éclairer.webp";

const MethodeHome = () => {
  useReveal();
  return (
    <section
      className="methode-home"
      aria-label="Présentation de la méthode de suivi comptable proposée par le cabinet d'expertise comptable SOCRATEA"
    >
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
        <div className="methode-bottom">
          <div className="process-photo">
            <img src={schemaMethodeHome} alt="Présentation de la méthode" />
          </div>
          <ul className="process-flow reveal reveal-2">
            <li className="process-step">
              <div className="step-marker">
                <span>01</span>
              </div>
              <div className="step-content">
                <div className="step-title">
                  <div className="title-line"></div>
                  <h3>Organiser les flux</h3>
                </div>
                <img
                  src={imageFlux}
                  alt="Présentation de l'organisation des flux"
                />
                <p>
                  Nous définissons avec vous comment les pièces, les données et
                  les informations utiles doivent circuler. Elles peuvent
                  provenir de vos outils, de ceux du cabinet ou directement de
                  vos équipes. L’objectif est d’éviter les pertes d’information
                  et de disposer d’une base exploitable.
                </p>
              </div>
            </li>
            <li className="process-step">
              <div className="step-marker">
                <span>02</span>
              </div>
              <div className="step-content">
                <div className="step-title">
                  <div className="title-line"></div>
                  <h3>Produire ou réviser</h3>
                </div>
                <img
                  src={imageProduire}
                  alt="Présentation de la production ou révision"
                />
                <p>
                  Selon votre organisation, SOCRATEA prend en charge la
                  production comptable ou s’appuie sur les travaux déjà réalisés
                  dans votre entreprise. L’intervention s’adapte à la mission,
                  au fonctionnement de vos équipes et au cadre comptable
                  applicable.
                </p>
              </div>
            </li>
            <li className="process-step">
              <div className="step-marker">
                <span>03</span>
              </div>
              <div className="step-content">
                <div className="step-title">
                  <div className="title-line"></div>
                  <h3>Contrôler et fiabiliser</h3>
                </div>
                <img
                  src={imageControler}
                  alt="Présentation du contrôle et de la fiabilisation"
                />
                <p>
                  Nous vérifions la cohérence de l’information, analysons les
                  écarts et concentrons les contrôles sur les zones qui méritent
                  une attention particulière. Les anomalies et les points de
                  vigilance sont identifiés avant la restitution.
                </p>
              </div>
            </li>
            <li className="process-step">
              <div className="step-marker">
                <span>04</span>
              </div>
              <div className="step-content">
                <div className="step-title">
                  <div className="title-line"></div>
                  <h3>Restituer et éclairer</h3>
                </div>
                <img
                  src={imageRestituer}
                  alt="Présentation de la restitution et de l'éclairage"
                />
                <p>
                  Flash mensuel, situation comptable arrêtée, comptes annuels
                  commentés ou analyse ponctuelle : la restitution dépend de vos
                  besoins et du niveau de suivi retenu. Lorsque les conditions
                  sont réunies, le Flash J+5 permet de disposer rapidement des
                  principaux indicateurs. Les éléments importants sont expliqués
                  et remis en perspective pour vous aider à décider.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MethodeHome;
