import { Link } from "react-router-dom";

const ServicesPoles = () => {
  return (
    <section className="services-poles">
      <div className="container">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-number">Pôle 01</div>
            <h3>Comptabilité & pilotage</h3>
            <p>
              Le cœur de la mission. Tenue comptable, déclarations fiscales et
              sociales, clôture annuelle. Et la différence SOCRATEA : des
              restitutions en cours d'année qui vous donnent une vraie
              visibilité — flash mensuel, situation trimestrielle, analyses sur
              mesure.
            </p>
            <Link to="/" className="service-link">
              Voir le pôle en détail<i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="service-card">
            <div className="service-number">Pôle 02</div>
            <h3>Automatisation des flux</h3>
            <p>
              Nous structurons et simplifions les circuits administratifs qui
              font perdre du temps : factures fournisseurs, rapprochements
              bancaires, notes de frais, interfaces avec vos outils métier.
              L'automatisation est un moyen — jamais une fin.
            </p>
            <Link to="/" className="service-link">
              Voir le pôle en détail<i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="service-card">
            <div className="service-number">Pôle 03</div>
            <h3>Paie externalisée</h3>
            <p>
              La production de votre paie avec une supervision directe du
              cabinet. Bulletins, déclarations sociales, gestion des événements
              de paie. Un seul interlocuteur, une seule responsabilité — pas de
              délégation à un tiers.
            </p>
            <Link to="/" className="service-link">
              Voir le pôle en détail<i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="service-card">
            <div className="service-number">Pôle 04</div>
            <h3>Juridique & accompagnement</h3>
            <p>
              Les actes juridiques courants annuels — approbation des comptes,
              formalités — ainsi que les opérations ponctuelles plus
              structurantes : constitution, cession, restructuration. En
              coordination avec vos conseils lorsque l'opération le justifie.
            </p>
            <Link to="/" className="service-link">
              Voir le pôle en détail<i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPoles;
