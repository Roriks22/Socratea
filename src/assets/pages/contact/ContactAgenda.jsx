import { useState } from "react";
import { Link } from "react-router-dom";

const ContactAgenda = () => {
  const [agendaLoaded, setAgendaLoaded] = useState(false);
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
          {!agendaLoaded ? (
            <div className="cal-consent-placeholder">
              <h3>Afficher l’agenda</h3>
              <p>
                Pour vous proposer les créneaux disponibles, cette page doit
                charger le service Cal.eu. Ce service peut traiter certaines
                données techniques et utiliser des cookies nécessaires à son
                fonctionnement.
              </p>
              <button
                type="button"
                className="btn-primary"
                onClick={() => setAgendaLoaded(true)}
              >
                Afficher les créneaux disponibles
              </button>
              <p className="cal-privacy-link">
                Pour en savoir plus, consultez notre{" "}
                <Link to="/confidentialite">politique de confidentialité</Link>.
              </p>
            </div>
          ) : (
            <iframe
              src="https://www.cal.eu/socratea"
              width="100%"
              height="850"
              frameBorder="0"
              loading="lazy"
              style={{ border: "none", borderRadius: "12px" }}
              title="Prendre rendez-vous avec SOCRATEA"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactAgenda;
