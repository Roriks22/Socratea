import { useState } from "react";
import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";

const ContactAgenda = () => {
  useReveal();
  const [agendaLoaded, setAgendaLoaded] = useState(false);
  return (
    <section
      id="agenda"
      className="contact-agenda"
      aria-labelledby="agenda-title"
    >
      <div className="container">
        <div className="section-header-agenda reveal reveal-1">
          <span className="eyebrow">Prendre rendez-vous</span>
          <h2 id="agenda-title">Choisissez directement votre créneau.</h2>
          <p>
            Sélectionnez le jour et l’heure qui vous conviennent pour un premier
            échange de 30 minutes en visioconférence. Vous recevrez ensuite la
            confirmation du rendez-vous et le lien de connexion par e-mail.
          </p>
        </div>
        <div className="cal-inline-widget reveal reveal-2">
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
                className=" btn btn-primary"
                onClick={() => setAgendaLoaded(true)}
              >
                Afficher les créneaux disponibles
              </button>
              <p className="cal-privacy-link">
                Pour en savoir plus, consultez notre{" "}
                <Link
                  to="/confidentialite"
                  aria-label="Lire la politique de confidentialité"
                >
                  politique de confidentialité
                </Link>
                .
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
              allow="fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Prendre rendez-vous avec SOCRATEA"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactAgenda;
