import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";
import serviceComptabilite from "/images/service-comptabilite.webp";
import serviceAutomatisation from "/images/service-automatisation.webp";
import serviceSocial from "/images/service-social.webp";
import serviceJuridique from "/images/service-juridique.webp";

const Services = () => {
  useReveal();
  return (
    <section className="services-poles" aria-labelledby="services-pole-title">
      <div className="container services-deroulement">
        <div className="services-header reveal reveal-1">
          <span className="eyebrow">Nos expertises</span>
          <h2 id="services-pole-title">
            Un accompagnement construit
            <br />
            autour de votre entreprise.
          </h2>
          <p>
            La comptabilité constitue le socle de notre intervention. Autour
            d’elle, SOCRATEA adapte ses interventions à vos besoins : pilotage,
            organisation des flux, paie ou juridique. Vous bénéficiez ainsi d’un
            accompagnement cohérent, sans multiplier les interlocuteurs.
          </p>
        </div>
        <div className="services-footer reveal reveal-2">
          <div className="pole-services">
            <div className="pole-texte">
              <span>01</span>
              <h3>Comptabilité et pilotage</h3>
              <img src={serviceComptabilite} alt="Comptabilité et pilotage" />
              <p>
                Comptabilité, fiscalité, comptes annuels, suivi de trésorerie,
                marge, activité : nous sécurisons vos obligations tout en vous
                donnant des repères utiles pour piloter votre entreprise.
              </p>
              <Link to="/services-comptabilite" className="service-link">
                En savoir plus
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="pole-services">
            <div className="pole-texte">
              <span>02</span>
              <h3>Automatisation et structuration des flux</h3>
              <img src={serviceAutomatisation} alt="Automatisation des flux" />
              <p>
                Nous simplifions vos processus, limitons les ressaisies et
                faisons mieux circuler l’information. Connexion de vos outils,
                automatisation de tâches ou développement d’applications :
                chaque solution répond à un besoin concret.
              </p>
              <Link to="/services-automatisation" className="service-link">
                En savoir plus
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="pole-services">
            <div className="pole-texte">
              <span>03</span>
              <h3>Social et paie</h3>
              <img src={serviceSocial} alt="Social et paie" />
              <p>
                Bulletins de paie, déclarations sociales, collecte des variables
                et respect des échéances : votre gestion sociale s’appuie sur
                une organisation claire et un suivi régulier.
              </p>
              <Link to="/services-paie" className="service-link">
                En savoir plus
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="pole-services">
            <div className="pole-texte">
              <span>04</span>
              <h3>Juridique</h3>
              <img src={serviceJuridique} alt="Juridique" />
              <p>
                Approbation des comptes, secrétariat juridique courant ou
                opérations ponctuelles : nous vous accompagnons dans les
                principales étapes de la vie de votre entreprise, en lien avec
                vos autres conseils lorsque cela est nécessaire.
              </p>
              <Link to="/services-juridique" className="service-link">
                En savoir plus
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
