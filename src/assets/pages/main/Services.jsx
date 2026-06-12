import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="services">
      <div className="container services-deroulement">
        <div className="services-header">
          <span>Nos services</span>
          <h3>Quatre pôles, structurés autour de vos besoins.</h3>
          <p>
            Chaque pôle est traité avec la même exigence. Le périmètre retenu
            pour votre entreprise est défini en toute transparence lors du
            cadrage initial.
          </p>
        </div>
        <div className="services-footer">
          <div className="pole-services">
            <div className="pole-texte">
              <span>pôle 01</span>
              <h5>Comptabilité & pilotage</h5>
              <p>
                La tenue des comptes, les déclarations, les bilans. Et surtout :
                les restitutions en cours d'année qui vous donnent une vraie
                visibilité sur votre activité.
              </p>
              <Link to="/services-comptabilite" className="service-link">
                En savoir plus<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="pole-services">
            <div className="pole-texte">
              <span>pôle 02</span>
              <h5>Automatisation des flux</h5>
              <p>
                Structuration et simplification de vos circuits administratifs :
                factures, banques, outils métier. L'automatisation est un moyen
                — jamais une fin.
              </p>
              <Link to="/services-automatisation" className="service-link">
                En savoir plus<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="pole-services">
            <div className="pole-texte">
              <span>pôle 03</span>
              <h5>Paie externalisée</h5>
              <p>
                La gestion de votre paie avec une supervision directe du cabinet
                — pas une délégation à un tiers. Un seul interlocuteur, une
                seule responsabilité.
              </p>
              <Link to="/services-paie" className="service-link">
                En savoir plus<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="pole-services">
            <div className="pole-texte">
              <span>pôle 04</span>
              <h5>Juridique & accompagnement</h5>
              <p>
                Les actes courants annuels et les opérations ponctuelles. En
                coordination avec vos conseils lorsque l'opération le justifie.
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
