const ContactFormulaire = () => {
  return (
    <section className="contact-formulaire">
      <div className="container">
        <div className="contact-layout">
          <div className="calendly-panel">
            <span className="eyebrow">Prendre rendez-vous - recommandé </span>
            <h3>Réservez directement un créneau.</h3>
            <p>
              Le plus simple et le plus rapide. Vous choisissez le créneau qui
              vous arrange. Vous recevez immédiatement la confirmation et le
              lien de visioconférence par e-mail.
            </p>
            <ul className="calendly-features">
              <li>Créneau de 30 minutes, en visioconférence</li>
              <li>Sans engagement, sans facturation</li>
              <li>Préparation : un mot sur votre activité suffit</li>
            </ul>
            <a
              href="https://calendly.com/socratea"
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Voir les créneaux disponibles
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
            <div>
              À quoi sert ce premier rendez-vous ? À vérifier, de part et
              d'autre, que nous sommes en phase — sur vos besoins, sur notre
              manière de travailler, et sur l'adéquation des deux.
            </div>
          </div>
          <div className="form-panel">
            <span className="eyebrow">Contact par écrit</span>
            <h3>Préférez écrire ?</h3>
            <p>
              Si vous préférez formuler votre demande par écrit, nous vous
              répondons sous 48h ouvrées.
            </p>
            <form action="#" method="post" noValidate>
              <div className="form-group">
                <label for="nom">Nom et prénom *</label>
                <input type="text" id="nom" name="nom" required />
              </div>
              <div className="form-group">
                <label for="societe">Société</label>
                <input type="text" id="societe" name="societe" />
              </div>
              <div className="form-group">
                <label for="email">E-mail *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label for="telephone">Téléphone</label>
                <input type="tel" id="telephone" name="telephone" />
              </div>
              <div className="form-group">
                <label for="message">Votre message *</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  placeholder="Quelques mots sur votre activité et votre besoin"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-secondary">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-info-block">
            <div className="label">Adresse</div>
            <p>
              21, rue Charlemagne <br />
              80480 Vers-sur-Selle <br />
              <span>Somme - Hauts-de-France</span>
            </p>
          </div>
          <div className="contact-info-block">
            <div className="label">E-mail</div>
            <p>
              <a href="mailto:cabinet.socratea@gmail.com">
                cabinet.socratea@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-block">
            <div className="label">Téléphone</div>
            <p>
              <a href="tel:+33686506129">06 86 50 61 29</a>
            </p>
          </div>
          <div className="contact-info-block">
            <div className="label">Zone d'intervention</div>
            <p>
              Partout en France <br />
              <span>fonctionnement 100% dématérialisé</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormulaire;
