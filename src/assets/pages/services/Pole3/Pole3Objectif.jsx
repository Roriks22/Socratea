import useReveal from "../../../components/useReveal";

const Pole3Objectif = () => {
  useReveal();
  return (
    <section className="pole3-objectif" aria-labelledby="pole3-objectif-title">
      <div className="container">
        <div className="prose">
          <span className="eyebrow span-pole3 reveal reveal-1">
            Un accompagnement qui vous aide au quotidien
          </span>
          <h2 id="pole3-objectif-title" className="reveal reveal-2">
            Des situations variées, un suivi qui reste clair.
          </h2>
          <p className="reveal reveal-3">
            Recrutements, temps partiel, primes, absences, évolutions de contrat
            ou départs : la paie se complexifie vite dès que l’équipe grandit ou
            que les situations changent.
          </p>
          <p className="reveal reveal-4">
            SOCRATEA vous aide à organiser les informations, à respecter les
            échéances et à repérer les points qui nécessitent votre attention.
            Vous gardez une gestion claire, sans avoir à traiter seul chaque
            situation particulière.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pole3Objectif;
