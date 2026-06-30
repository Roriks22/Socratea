import useReveal from "../../../components/useReveal";

const Pole1Home = () => {
  useReveal();

  return (
    <section className="pole1-home">
      <div className="container">
        <div className="section-header-pole1 reveal reveal-1">
          <span className="eyebrow">Le socle comptable et fiscal</span>
          <h2>
            Une comptabilité fiable, <br />
            adaptée à votre organisation.
          </h2>
          <p>
            Que la comptabilité soit produite par SOCRATEA, tenue en partie par
            vos équipes ou organisée entre les deux, notre intervention s’adapte
            à votre fonctionnement. L’objectif reste le même : disposer d’une
            information cohérente, respecter vos échéances et sécuriser vos
            comptes.
          </p>
        </div>
        <ul className="feature-list reveal reveal-2">
          <li>
            <span className="feat-num">01</span>
            <div>
              <strong>Produire ou réviser votre comptabilité</strong>
              <p>
                Selon votre organisation, nous prenons en charge la production
                comptable, révisons les travaux réalisés par vos équipes ou
                intervenons sur un périmètre défini. Les contrôles sont adaptés
                à la mission et aux points de risque de votre entreprise.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">02</span>
            <div>
              <strong>Sécuriser vos obligations fiscales</strong>
              <p>
                TVA, impôt sur les sociétés, CFE, CVAE ou autres déclarations
                applicables : nous préparons, contrôlons et suivons vos
                échéances fiscales. Vous savez ce qui doit être transmis, ce qui
                a été réalisé et ce qui reste à anticiper.
              </p>
            </div>
          </li>
          <li>
            <span className="feat-num">03</span>
            <div>
              <strong>Établir et expliquer vos comptes annuels</strong>
              <p>
                Les comptes annuels, la liasse fiscale et les annexes sont
                établis avec précision. Toutefois, notre accompagnement ne se
                limite pas à ces documents : nous analysons avec vous les faits
                marquants de l’exercice, les points de vigilance et les éléments
                à anticiper pour la suite.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Pole1Home;
