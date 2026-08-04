const Contact = () => {
  return (
    <section
      className="contact"
      aria-label="Prendre rendez-vous avec le cabinet d'expertise comptable SOCRATEA"
    >
      <div className="container texte-contact">
        <span className="rdv-pris">PRENDRE RENDEZ-VOUS</span>
        <h2>Échangeons sur votre entreprise. </h2>
        <p>
          Ce premier échange nous permet de comprendre votre organisation, vos
          besoins et vos attentes. De votre côté, vous découvrez l’approche de
          SOCRATEA et pouvez vérifier qu’elle correspond à ce que vous
          recherchez. Si ce n’est pas le cas, nous vous le dirons et nous vous
          orienterons si nous le pouvons.
        </p>
        <div className="btn_creneau">
          <a
            href="https://www.cal.eu/socratea"
            target="_blank"
            rel="noopener noreferrer"
            className="btn_reserve"
            aria-label="Prendre rendez-vous avec le cabinet d'expertise comptable SOCRATEA"
          >
            Prendre rendez-vous{" "}
            <svg
              aria-hidden="true"
              className="arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
        <div className="contact-fin">
          Ou par écrit -
          <a href="mailto:julien.jacquesson@socratea.net">
            julien.jacquesson@socratea.net
          </a>
          <span className="sep">|</span>
          <a href="tel:+33686506129">06 86 50 61 29</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
