const ContactAgenda = () => {
  return (
    <section className="contact-agenda">
      <div className="container">
        <div className="section-header-agenda">
          <span className="eyebrow">Agenda intégré</span>
          <h2>Ou réservez directement ci-dessous.</h2>
        </div>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/socratea"
        ></div>
        <p>
          Le widget s'affiche ci-dessus une fois l'agenda Calendly configuré.
        </p>
      </div>
    </section>
  );
};

export default ContactAgenda;
