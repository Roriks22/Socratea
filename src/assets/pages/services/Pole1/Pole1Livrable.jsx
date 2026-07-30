import useReveal from "../../../components/useReveal";
import flashMensuel from "../../../../../public/images/flash-mensuel.webp";
import analysePonctuelle from "../../../../../public/images/analyse-ponctuelle.webp";
import comptesAnnuels from "../../../../../public/images/comptes-annuels.webp";
import situationTrimestrielle from "../../../../../public/images/situation-trimestrielle.webp";

const Livrables = () => {
  useReveal();
  return (
    <section className="pole1-livrables">
      <div className="container livrables-deroulement">
        <div className="livrables-header reveal reveal-1">
          <span>Votre suivi</span>
          <h2>
            Des chiffres utiles,
            <br />
            au bon moment.
          </h2>
          <p>
            SOCRATEA ne se limite pas à établir vos comptes une fois par an.
            Selon les besoins de votre entreprise, vous disposez de restitutions
            régulières pour suivre votre activité, comprendre vos résultats et
            repérer les points qui méritent votre attention.
          </p>
        </div>
        <div className="livrables-footer reveal reveal-2">
          <div className="livrables-left">
            <div className="livrables-clients">
              <div className="livrables-span">
                <img src={flashMensuel} alt="Flash-mensuel" />
              </div>
              <div className="livrables-text">
                <p>
                  Trésorerie, marge, activité, principaux écarts : retrouvez
                  rapidement les indicateurs essentiels pour savoir où vous en
                  êtes. Le Flash J+5 peut être mis en place lorsque vos
                  informations sont transmises de manière complète et dans les
                  délais convenus. Il est construit avec vous, autour des
                  indicateurs qui comptent vraiment pour votre entreprise.
                </p>
              </div>
            </div>
            <div className="livrables-clients">
              <div className="livrables-span">
                <img
                  src={situationTrimestrielle}
                  alt="Situation trimestrielle"
                />
              </div>
              <div className="livrables-text">
                <p>
                  Lorsque votre entreprise a besoin d’un point d’étape plus
                  approfondi, une situation comptable trimestrielle peut être
                  arrêtée, contrôlée et commentée. Vous mesurez ainsi votre
                  progression et ajustez vos priorités sur une base plus fiable.
                </p>
              </div>
            </div>
            <div className="livrables-clients">
              <div className="livrables-span">
                <img src={comptesAnnuels} alt="Comptes annuels" />
              </div>
              <div className="livrables-text">
                <p>
                  Vos comptes annuels sont établis dans le respect de vos
                  obligations, mais aussi expliqués. Vous comprenez les
                  principaux événements de l’exercice, leurs conséquences et les
                  points à anticiper pour la suite.
                </p>
              </div>
            </div>
            <div className="livrables-clients">
              <div className="livrables-span">
                <img src={analysePonctuelle} alt="Analyse ponctuelle" />
              </div>
              <div className="livrables-text">
                <p>
                  Investissement, recrutement, évolution de la marge, besoin de
                  trésorerie, prévisionnel ou comparaison de scénarios :
                  lorsqu’une décision importante se présente, SOCRATEA vous aide
                  à en mesurer les conséquences et à choisir l’option la plus
                  adaptée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Livrables;
