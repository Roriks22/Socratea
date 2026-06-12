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
          <span className="eyebrow">Agenda intégré</span>
          <h2>Ou réservez directement ci-dessous.</h2>
        </div>
        <div className="calendly-inline-widget">
          <InlineWidget url="https://calendly.com/socratea" />
        </div>
        <p>
          Le widget s'affiche ci-dessus une fois l'agenda Calendly configuré.
        </p>
      </div>
    </section>
  );
};

export default ContactAgenda;
