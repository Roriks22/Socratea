import julienPortrait from "/images/julien-complet-transparent.webp";

const HeaderTexte = () => {
  return (
    <section
      className="header-texte"
      aria-label="Présentation du cabinet SOCRATEA et de son fondateur Julien Jacquesson, expert-comptable"
    >
      <div className="header-grid">
        <div className="approche">
          <h2>Notre approche</h2>
          <p>
            SOCRATEA est un cabinet d'expertise comptable qui sécurise votre
            comptabilité, vos obligations fiscales et vos comptes annuels.
          </p>
          <p>
            Mais notre rôle ne s'arrête pas à produire des chiffres : nous les
            rendons plus clairs, plus réguliers et réellement utiles pour
            piloter votre entreprise. Trésorerie, marge, activité, points de
            vigilance : vous disposez de repères concrets pour comprendre votre
            situation, anticiper vos besoins et décider au bon moment.
          </p>
          <p>
            Quand votre organisation vous ralentit, nous vous aidons à lever les
            freins : simplification des processus, automatisation des tâches
            répétitives, connexion de vos outils et développement d'applications
            adaptées à votre fonctionnement.
          </p>
        </div>
        <aside className="apropos-card">
          <div className="apropos-text">
            <h3>À propos</h3>
            <p>
              Je suis Julien Jacquesson, <br />
              Expert-comptable et fondateur de SOCRATEA. <br />
              Mon ambition : transformer la rigueur comptable en décisions
              claires et en leviers de croissance durables pour les dirigeants.{" "}
              <br />
              Une approche alliant expertise, technologie et proximité pour vous
              faire gagner du temps et avancer avec confiance.
            </p>
          </div>
          <div className="apropos-photo">
            <img
              src={julienPortrait}
              alt="Julien Jacquesson, expert-comptable fondateur de SOCRATEA"
              loading="lazy"
            />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HeaderTexte;
