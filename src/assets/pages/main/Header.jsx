import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-tag reveal reveal-1">
          <span className="dot"></span>
          <span>Cabinet d'expertise comptable - ouverture septembre 2026</span>
        </div>
        <h1 className="reveal reveal-2">
          Ancré dans l'expertise. <br />
          <span>En mouvement vers votre avenir.</span>
        </h1>
        <p className="hero-lead reveal reveal-3">
          Une information financière disponible en cours d'année, pas uniquement
          à la clôture. Pour les dirigeants de PME qui veulent piloter leur
          activité — pas seulement être en règle.
        </p>
        <div className="hero-cta-group reveal reveal-4">
          <a
            href="https://calendly.com/socratea"
            target="_blank"
            rel="noopener"
          >
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
            Découvrir la méthode
          </button>
        </div>
        <div className="hero-meta reveal reveal-5">
          <div className="experience">
            <h5>expérience</h5>
            <p>14 ans - audit & direction financière</p>
          </div>
          <div className="experience">
            <h5>intervention</h5>
            <p>Partout en France</p>
          </div>
          <div className="experience">
            <h5>fonctionnement</h5>
            <p>100% dématérialisé</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
