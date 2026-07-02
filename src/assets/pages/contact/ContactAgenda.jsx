const ContactAgenda = () => {
  return (
    <section id="agenda" className="contact-agenda">
      <div className="container">
        <div className="section-header-agenda">
          <span className="eyebrow">Prendre rendez-vous</span>
          <h2>Choisissez directement votre créneau.</h2>
          <p>
            Sélectionnez le jour et l’heure qui vous conviennent pour un premier
            échange de 30 minutes en visioconférence. Vous recevrez ensuite la
            confirmation du rendez-vous et le lien de connexion par e-mail.
          </p>
        </div>
        <div className="cal-inline-widget">
          <iframe
            src="https://www.cal.eu/socratea"
            width="100%"
            height="850"
            frameBorder="0"
            style={{ border: "none", borderRadius: "12px" }}
            title="Prendre rendez-vous"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactAgenda;
