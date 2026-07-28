const steps = [
  {
    id: "01",
    title: "Organiser les flux",
    text: "Nous définissons avec vous comment les pièces, les données et les informations utiles doivent circuler.",
    className: "step-1",
  },
  {
    id: "02",
    title: "Produire ou réviser",
    text: "Selon votre organisation, SOCRATEA produit ou révise votre comptabilité.",
    className: "step-2",
  },
  {
    id: "03",
    title: "Contrôler et fiabiliser",
    text: "Nous analysons les écarts et contrôlons les points sensibles afin de garantir une information fiable.",
    className: "step-3",
  },
  {
    id: "04",
    title: "Restituer et éclairer",
    text: "Vous disposez d'indicateurs clairs et commentés pour piloter votre entreprise avec confiance.",
    className: "step-4",
  },
];

const ProcessSchema = () => {
  return (
    <div className="process-schema">
      {/* Partie graphique */}
      <div className="process-schema__graphic">
        <svg
          className="process-svg"
          viewBox="0 0 1200 470"
          preserveAspectRatio="none"
        >
          {/* Vagues de gauche */}
          <path
            d="M20 230
               C120 170 220 170 310 230
               C390 285 450 285 520 230"
            className="flow flow-1"
          />

          <path
            d="M20 250
               C120 210 220 210 310 250
               C390 295 450 295 520 250"
            className="flow flow-2"
          />

          <path
            d="M20 270
               C120 250 220 250 310 270
               C390 305 450 305 520 270"
            className="flow flow-3"
          />

          {/* Ligne principale */}
          <path
            d="M520 250
               C620 250 720 250 820 250
               C900 250 970 250 1030 250"
            className="main-line"
          />

          {/* Branche haute */}
          <path
            d="M1030 250
               C1080 250 1120 210 1180 180"
            className="branch"
          />

          {/* Branche basse */}
          <path
            d="M1030 250
               C1080 250 1120 290 1180 320"
            className="branch"
          />

          {/* Points */}
          <circle cx="520" cy="250" r="8" className="point-blue" />
          <circle cx="700" cy="250" r="8" className="point-blue" />
          <circle cx="900" cy="250" r="8" className="point-blue" />
          <circle cx="1030" cy="250" r="8" className="point-blue" />

          {/* Point final */}
          <circle cx="1180" cy="180" r="11" className="point-green" />
          <circle cx="1180" cy="320" r="11" className="point-green" />
        </svg>
      </div>

      {/* Cartes */}
      <div className="process-schema__steps">
        {steps.map((step) => (
          <article key={step.id} className={`process-card ${step.className}`}>
            <span className="number">{step.id}</span>

            <h4>{step.title}</h4>

            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProcessSchema;
