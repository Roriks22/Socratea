import { Link } from "react-router-dom";

const MentionsHome = () => {
  return (
    <section className="mentions-home">
      <div className="container">
        <div className="legal-content">
          <h2>Éditeur du site</h2>
          <p>
            <strong>SOCRATEA EURL</strong>- Société d'expertise comptable <br />
            Société unipersonnelle à responsabilité limitée au capital de{" "}
            <em>[montant à préciser]</em>€ <br />
            Siège social : 21, rue Charlemagne — 80480 Vers-sur-Selle (France){" "}
            <br />
            SIREN : <em>[numéro à préciser]</em> - RSC d'Amiens <br />
            N° de TVA intracommunautaire : <em>[à précider]</em> <br />
            Représentant légal : Julien Jacquesson, gérant
          </p>
          <h2>Directeur de la publication</h2>
          <p>Julien Jacquesson, en qualité de gérant de SOCRATEA EURL.</p>
          <h2>Contact</h2>
          <p>
            E-mail :{" "}
            <Link to="mailto:cabinet.socratea@gmail.com">
              cabinet.socratea@gmail.com
            </Link>{" "}
            <br />
            Téléphone : <Link to="tel:+33686506129">06 86 50 61 29</Link>
          </p>
          <h2>Inscription à l'Ordre</h2>
          <p>
            Membre de l'Ordre des Experts-Comptables de la région{" "}
            <strong>Hauts-de-France</strong>. <br />
            Inscription au Tableau de l'Ordre —{" "}
            <em>[numéro d'inscription à préciser]</em>. <br />
          </p>
          <h2>Assurance responsabilité civile professionnelle</h2>
          <p>
            Le cabinet est assuré au titre de sa responsabilité civile
            professionnelle conformément aux exigences de la profession, auprès
            de <em>[compagnie à préciser]</em>. <br />
            Couverture géographique : France et Union européenne.
          </p>
          <h2>Hébergement du site</h2>
          <p>
            Le présent site est hébergé par : <br />{" "}
            <em>[nom de l'hébergeur — à compléter par le prestataire]</em>{" "}
            <br /> <em>[adresse, téléphone]</em>
          </p>
          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur le site (textes, images, charte
            graphique, logo, structure, code) est la propriété exclusive de
            SOCRATEA EURL ou de ses ayants droit. Toute reproduction,
            représentation, modification ou diffusion, totale ou partielle, sans
            autorisation préalable écrite est interdite.
          </p>
          <h2>Crédits</h2>
          <p>
            Conception et développement : <em>[prestataire à préciser]</em>.{" "}
            <br /> Typographies : Fraunces et Manrope, distribuées via Google
            Fonts (SIL Open Font License).
          </p>
          <h2>Loi applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. Tout
            litige relatif à leur interprétation ou à leur exécution relève de
            la compétence exclusive des tribunaux français, sous réserve de
            l'application impérative d'une autre loi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MentionsHome;
