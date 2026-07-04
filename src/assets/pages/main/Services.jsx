import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";

const Services = () => {
  useReveal();
  return (
    <section className="services">
      <div className="container services-deroulement">
        <div className="services-header reveal reveal-1">
          <span>Nos expertises</span>
          <h2>
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
              <h5>Comptabilité et pilotage</h5>
              <p>
                Comptabilité, fiscalité, comptes annuels, suivi de trésorerie,
                marge, activité : nous sécurisons vos obligations tout en vous
                donnant des repères utiles pour piloter votre entreprise.
              </p>
              <Link to="/services-comptabilite" className="service-link">
                En savoir plus<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="pole-services">
            <div className="pole-texte">
              <span>02</span>
              <h5>Automatisation et structuration des flux</h5>
              <p>
                Nous simplifions vos processus, limitons les ressaisies et
                faisons mieux circuler l’information. Connexion de vos outils,
                automatisation de tâches ou développement d’applications :
                chaque solution répond à un besoin concret.
              </p>
              <Link to="/services-automatisation" className="service-link">
                En savoir plus<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="pole-services">
            <div className="pole-texte">
              <span>03</span>
              <h5>Social et paie</h5>
              <p>
                Bulletins de paie, déclarations sociales, collecte des variables
                et respect des échéances : votre gestion sociale s’appuie sur
                une organisation claire et un suivi régulier.
              </p>
              <Link to="/services-paie" className="service-link">
                En savoir plus<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="pole-services">
            <div className="pole-texte">
              <span>04</span>
              <h5>Juridique</h5>
              <p>
                Approbation des comptes, secrétariat juridique courant ou
                opérations ponctuelles : nous vous accompagnons dans les
                principales étapes de la vie de votre entreprise, en lien avec
                vos autres conseils lorsque cela est nécessaire.
              </p>
              <Link to="/services-juridique" className="service-link">
                En savoir plus<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
