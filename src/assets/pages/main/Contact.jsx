const Contact = () => {
  return (
    <section className="contact">
      <div className="container texte-contact">
        <div className="container">
          <span className="rdv-pris">PRENDRE RENDEZ-VOUS</span>
          <h2>
            30 minutes pour vérifier{" "}
            <span>si nous sommes faits pour travailler ensemble.</span>
          </h2>
          <p>
            Un premier échange sans engagement pour comprendre votre activité et
            vous dire clairement si SOCRATEA est adapté à votre situation. Si ce
            n'est pas le cas, nous vous le dirons — et vous orienterons si nous
            le pouvons.
          </p>
          <div className="btn_creneau">
            <a
              href="https://calendly.com/socratea"
              target="_blank"
              rel="noopener"
              className="btn_reserve"
            >
              Réserver un créneau{" "}
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
            </a>
          </div>
          <div className="contact-fin">
            Ou par écrit -
            <a href="mailto:cabinet.socratea@gmail.com">
              cabinet.socratea@gmail.com
            </a>
            .<a href="tel:+33686506129">06 86 50 61 29</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
