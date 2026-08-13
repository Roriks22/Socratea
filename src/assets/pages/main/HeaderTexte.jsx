import useReveal from "../../components/useReveal";
import julienPortrait from "../../../../public/images/Accueil_notre_approche.webp";

const HeaderTexte = () => {
  useReveal();
  return (
    <section className="header-texte" aria-labelledby="header-texte-title">
      <div className="header-grid">
        <div className="approche reveal reveal-1">
          <h2 id="header-texte-title">Notre approche</h2>
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
        <aside className="apropos-card reveal reveal-2">
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
