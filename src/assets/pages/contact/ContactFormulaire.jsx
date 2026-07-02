import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailJs from "@emailjs/browser";

const ContactFormulaire = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.current.checkValidity()) {
      setStatus({
        type: "error",
        message:
          "Merci de compléter tous les champs obligatoires avant l'envoi.",
      });
      form.current.reportValidity();
      return;
    }
    setLoading(true);

    try {
      await emailJs.sendForm(
        "service_31cqayr",
        "template_bugiqjl",
        form.current,
        "OQwCs9qYrJTZ853m1"
      );
      setStatus({
        type: "success",
        message:
          "Votre message a bien été envoyé. Nous vous répondrons sous 48h ouvrées.",
      });
      setTimeout(() => {
        setStatus(null);
      }, 5000);
      form.current.reset();
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message:
          "Une erreur est survenue lors de l'envoi. Merci de réessayer ultérieurement.",
      });
    }
    setLoading(false);
  };
  return (
    <section id="formulaire" className="contact-formulaire">
      <div className="container">
        <div className="contact-layout">
          <div className="calendly-panel">
            <span className="eyebrow">Prendre rendez-vous</span>
            <h3>Choisissez le créneau qui vous convient.</h3>
            <p>
              Réservez directement un échange de 30 minutes. Vous recevrez
              immédiatement la confirmation du rendez-vous et le lien de
              visioconférence par e-mail.
            </p>
            <ul className="calendly-features">
              <li>30 minutes en visioconférence</li>
              <li>Un échange sans engagement</li>
              <li>Quelques mots sur votre activité suffisent</li>
            </ul>
            <a
              href="https://www.cal.eu/socratea"
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Choisir un créneau
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
          <div className="form-panel">
            <span className="eyebrow">Nous écrire</span>
            <h3>Vous préférez nous écrire ?</h3>
            <p>
              Présentez-nous brièvement votre activité et vos besoins. Nous vous
              répondrons sous deux jours.
            </p>
            <form
              action="#"
              method="post"
              noValidate
              ref={form}
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="nom">Nom et prénom*</label>
                <input type="text" id="nom" name="nom" required />
              </div>
              <div className="form-group">
                <label htmlFor="entreprise">Entreprise *</label>
                <input type="text" id="enreprise" name="entreprise" required />
              </div>
              <div className="form-group">
                <label htmlFor="adresse e-mail">Adresse e-mail *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="telephone">Téléphone</label>
                <input type="tel" id="telephone" name="telephone" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Votre message *</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  placeholder="Parlez-nous de votre activité et de votre besoin."
                ></textarea>
                <div className="checkbox-group">
                  <input type="checkbox" required id="rgpd" />
                  <label htmlFor="rgpd">
                    J’accepte que les informations transmises soient utilisées
                    pour répondre à ma demande. En savoir plus dans notre{" "}
                    <Link to="/confidentialite">
                      politique de confidentialité.
                    </Link>
                    *
                  </label>
                </div>
              </div>
              {status && (
                <div className={`form-message ${status.type}`}>
                  {status.message}
                </div>
              )}
              <button
                type="submit"
                className="btn btn-secondary"
                disabled={loading}
              >
                {loading ? "Envoi en cours..." : "Envoyer ma demande"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormulaire;
