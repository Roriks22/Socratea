import { useNavigate } from "react-router-dom";
import useReveal from "../../components/useReveal";

const Header = () => {
  useReveal();
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-tag reveal reveal-1">
          <span className="dot"></span>
          <span>Cabinet d'expertise comptable</span>
        </div>
        <h1 className="reveal reveal-2">
          Ancré dans l'expertise. <br />
          En mouvement vers votre avenir. <br />
        </h1>
        <h2 className="reveal reveal-3">
          Vos chiffres ne doivent pas seulement être justes.
          <span>Ils doivent vous faire avancer.</span>
        </h2>
        <div className="hero-lead reveal reveal-4">
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
        <div className="hero-cta-group reveal reveal-5">
          <a href="https://www.cal.eu/socratea" target="_blank" rel="noopener">
            <button className="btn btn-primary">
              Prendre rendez-vous
              <svg
                className="arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </a>
          <button
            className="btn btn-secondary on-dark"
            onClick={() => navigate("/methode")}
          >
            Découvrir notre méthode
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
