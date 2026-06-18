import { Link } from "react-router-dom";

const ConfidentialiteHome = () => {
  return (
    <section className="confidentialite-home">
      <div className="container">
        <div className="legal-content">
          <h2>Responsable du traitement</h2>
          <p>
            Le responsable des traitements effectués dans le cadre du présent
            site et de l'activité du cabinet est : <br />
            <strong>SOCRATEA EURL,</strong>représentée par Julien Jacquesson,
            gérant. <br />
            21, rue Charlemagne — 80480 Vers-sur-Selle <br />
            E-mail : <Link to="mailto:cabinet.socratea@gmail.com"></Link>
          </p>
          <h2>Données collectées</h2>
          <p>
            Nous collectons les données strictement nécessaires aux finalités
            décrites ci-dessous. Aucune donnée sensible au sens du RGPD n'est
            collectée via le site.
          </p>
          <h2>Via le formulaire de contact</h2>
          <p>
            Nom et prénom, société, adresse e-mail, numéro de téléphone
            (facultatif), contenu de votre message. Ces données sont collectées
            uniquement lorsque vous remplissez volontairement le formulaire.
          </p>
          <h2>Via la prise de rendez-vous Calendly</h2>
          <p>
            La prise de rendez-vous est opérée par l'outil Calendly (éditeur :
            Calendly LLC). Les données que vous saisissez sur cet outil (nom,
            e-mail, motif du rendez-vous) sont transmises à SOCRATEA pour
            préparer l'échange et gérées conformément à la politique de
            confidentialité de Calendly.
          </p>
          <h2>Via la navigation sur le site</h2>
          <p>
            Données techniques anonymisées : adresse IP tronquée, type de
            navigateur, pages consultées, durée de visite, site référent.
            Utilisées uniquement à des fins de mesure d'audience anonymisée,
            sans suivi individuel.
          </p>
          <h2>Finalités et bases légales</h2>
          <ul>
            <li>
              <strong>Répondre à vos demandes de contact —</strong> base légale
              : mesures précontractuelles prises à votre demande (art. 6.1.b du
              RGPD).
            </li>
            <li>
              <strong>Organiser un premier rendez-vous —</strong> base légale :
              mesures précontractuelles prises à votre demande.
            </li>
            <li>
              <strong>Mesurer l'audience du site —</strong> base légale :
              intérêt légitime du cabinet à améliorer son site, dans une logique
              respectueuse des utilisateurs (mesures anonymisées).
            </li>
            <li>
              <strong>
                Respecter nos obligations légales professionnelles —
              </strong>{" "}
              base légale : obligation légale (Code de déontologie,
              réglementation LAB-FT, etc.).
            </li>
          </ul>
          <h2>Durée de conservation</h2>
          <p>
            Les demandes de contact restées sans suite sont conservées 12 mois
            puis supprimées. Les données relatives à un dossier client sont
            conservées pendant la durée de la relation contractuelle, puis
            archivées selon les durées légales applicables à notre profession
            (notamment 10 ans pour les obligations comptables, fiscales et
            professionnelles).
          </p>
          <h2>Destinataires des données</h2>
          <p>
            Vos données sont traitées uniquement par SOCRATEA et ne sont jamais
            cédées à des tiers à des fins commerciales. Elles peuvent être
            transmises, dans le cadre strictement nécessaire, à nos
            sous-traitants (hébergeur du site, éditeur de l'outil de prise de
            rendez-vous, logiciels de production du cabinet) — tous liés par des
            engagements contractuels conformes au RGPD.
          </p>
          <h2>Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants : droit
            d'accès, de rectification, d'effacement, de limitation du
            traitement, d'opposition, et de portabilité des données. <br /> Pour
            exercer ces droits, contactez-nous à cabinet.socratea@gmail.com. Une
            réponse vous sera apportée dans un délai maximum d'un mois. <br />{" "}
            Vous disposez également du droit d'introduire une réclamation auprès
            de la Commission Nationale de l'Informatique et des Libertés (CNIL)
            : www.cnil.fr.
          </p>
          <h2>Cookies</h2>
          <p>
            Le site utilise uniquement des cookies strictement nécessaires à son
            fonctionnement et, le cas échéant, un outil de mesure d'audience
            anonymisée (sans consentement requis lorsque correctement paramétré,
            conformément aux recommandations de la CNIL). <br /> Un bandeau
            d'information est affiché lors de votre première visite. Vous pouvez
            à tout moment modifier vos préférences depuis les paramètres de
            votre navigateur.
          </p>
          <h2>Mise à jour de la politique</h2>
          <p>
            La présente politique peut être mise à jour pour refléter des
            évolutions réglementaires ou de fonctionnement du site. La date de
            dernière mise à jour figure en bas de cette page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConfidentialiteHome;
