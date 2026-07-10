import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailJs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const SUBMISSION_COOLDOWN_MS = 60_000;
const LAST_SUBMISSION_KEY = "socratea-contact-last-submission";

const normalizeSingleLine = (value) => value.trim().replace(/\s+/g, " ");

const normalizeMessage = (value) => value.trim().replace(/\r\n/g, "\n");

const getLastSubmissionTime = () => {
  try {
    return Number(window.localStorage.getItem(LAST_SUBMISSION_KEY) || 0);
  } catch {
    return 0;
  }
};

const saveLastSubmissionTime = () => {
  try {
    window.localStorage.setItem(LAST_SUBMISSION_KEY, String(Date.now()));
  } catch {
    // Le formulaire reste fonctionnel même si le stockage local est indisponible.
  }
};

const ContactFormulaire = () => {
  const form = useRef(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const displayStatus = (type, message) => {
    setStatus({ type, message });

    window.setTimeout(() => {
      setStatus(null);
    }, 7000);
  };

  const validateFormData = (formData) => {
    const nom = normalizeSingleLine(String(formData.get("nom") || ""));
    const entreprise = normalizeSingleLine(
      String(formData.get("entreprise") || "")
    );
    const email = String(formData.get("email") || "")
      .trim()
      .toLowerCase();
    const telephone = normalizeSingleLine(
      String(formData.get("telephone") || "")
    );
    const message = normalizeMessage(String(formData.get("message") || ""));
    const website = String(formData.get("website") || "").trim();

    if (website) {
      return { isBot: true };
    }

    if (nom.length < 2 || nom.length > 100) {
      return {
        error:
          "Merci d’indiquer un nom et prénom compris entre 2 et 100 caractères.",
      };
    }

    if (entreprise.length < 2 || entreprise.length > 120) {
      return {
        error:
          "Merci d’indiquer un nom d’entreprise compris entre 2 et 120 caractères.",
      };
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u;
    if (email.length > 254 || !emailPattern.test(email)) {
      return {
        error: "Merci d’indiquer une adresse e-mail valide.",
      };
    }

    const phonePattern = /^[+()0-9.\s-]{6,25}$/u;
    if (telephone && (telephone.length > 25 || !phonePattern.test(telephone))) {
      return {
        error: "Merci d’indiquer un numéro de téléphone valide.",
      };
    }

    if (message.length < 10 || message.length > 3000) {
      return {
        error: "Votre message doit contenir entre 10 et 3 000 caractères.",
      };
    }

    return {
      templateParams: {
        nom,
        entreprise,
        email,
        telephone,
        message,
      },
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.current) {
      return;
    }

    setStatus(null);

    if (!form.current.checkValidity()) {
      displayStatus(
        "error",
        "Merci de compléter correctement tous les champs obligatoires avant l’envoi."
      );
      form.current.reportValidity();
      return;
    }

    const validation = validateFormData(new FormData(form.current));

    if (validation.isBot) {
      form.current.reset();
      displayStatus(
        "success",
        "Votre message a bien été envoyé. Nous vous répondrons sous deux jours ouvrés."
      );
      return;
    }

    if (validation.error) {
      displayStatus("error", validation.error);
      return;
    }

    const lastSubmissionTime = getLastSubmissionTime();
    const elapsedTime = Date.now() - lastSubmissionTime;

    if (lastSubmissionTime > 0 && elapsedTime < SUBMISSION_COOLDOWN_MS) {
      const remainingSeconds = Math.ceil(
        (SUBMISSION_COOLDOWN_MS - elapsedTime) / 1000
      );

      displayStatus(
        "error",
        `Merci d’attendre ${remainingSeconds} seconde${
          remainingSeconds > 1 ? "s" : ""
        } avant un nouvel envoi.`
      );
      return;
    }

    setLoading(true);

    try {
      await emailJs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        validation.templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
          blockHeadless: true,
          limitRate: {
            id: "socratea-contact-form",
            throttle: SUBMISSION_COOLDOWN_MS,
          },
        }
      );

      saveLastSubmissionTime();
      form.current.reset();

      displayStatus(
        "success",
        "Votre message a bien été envoyé. Nous vous répondrons sous deux jours ouvrés."
      );
    } catch (error) {
      const errorStatus =
        typeof error === "object" && error !== null && "status" in error
          ? error.status
          : null;

      if (import.meta.env.DEV) {
        console.error("Échec EmailJS — statut :", errorStatus);
      }

      if (errorStatus === 429) {
        displayStatus(
          "error",
          "Le formulaire a été envoyé trop récemment. Merci de patienter une minute avant de réessayer."
        );
      } else {
        displayStatus(
          "error",
          "Une erreur est survenue lors de l’envoi. Merci de réessayer ultérieurement ou de nous écrire directement par e-mail."
        );
      }
    } finally {
      setLoading(false);
    }
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
            <div className="button-layout">
              <a
                href="https://www.cal.eu/socratea"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Choisir un créneau
                <svg
                  className="arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                  focusable="false"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>

          <div className="form-panel">
            <span className="eyebrow">Nous écrire</span>

            <h3>Vous préférez nous écrire ?</h3>

            <p>
              Présentez-nous brièvement votre activité et vos besoins. Nous vous
              répondrons sous deux jours ouvrés.
            </p>

            <form
              action="#"
              method="post"
              noValidate
              ref={form}
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="nom">Nom et prénom *</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  autoComplete="name"
                  minLength="2"
                  maxLength="100"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="entreprise">Entreprise *</label>
                <input
                  type="text"
                  id="entreprise"
                  name="entreprise"
                  autoComplete="organization"
                  minLength="2"
                  maxLength="120"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Adresse e-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  maxLength="254"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="telephone">Téléphone</label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength="25"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Votre message *</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  minLength="10"
                  maxLength="3000"
                  required
                  placeholder="Parlez-nous de votre activité et de votre besoin."
                />

                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-10000px",
                    top: "auto",
                    width: "1px",
                    height: "1px",
                    overflow: "hidden",
                  }}
                >
                  <label htmlFor="website">Laissez ce champ vide</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                <div className="checkbox-group">
                  <label htmlFor="rgpd">
                    Les informations transmises sont utilisées par SOCRATEA pour
                    répondre à votre demande. Pour en savoir plus sur leur
                    utilisation et sur vos droits, consultez notre {""}
                    <Link to="/confidentialite">
                      politique de confidentialité.
                    </Link>
                  </label>
                </div>
              </div>

              {status && (
                <div
                  className={`form-message ${status.type}`}
                  role={status.type === "error" ? "alert" : "status"}
                  aria-live={status.type === "error" ? "assertive" : "polite"}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-secondary"
                disabled={loading}
                aria-busy={loading}
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
