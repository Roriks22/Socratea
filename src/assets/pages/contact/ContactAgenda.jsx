import { useEffect } from "react";
import { InlineWidget } from "react-calendly";

const ContactAgenda = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <section className="contact-agenda">
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
        <div className="calendly-inline-widget">
          <InlineWidget url="https://calendly.com/socratea" />
        </div>
      </div>
    </section>
  );
};

export default ContactAgenda;
