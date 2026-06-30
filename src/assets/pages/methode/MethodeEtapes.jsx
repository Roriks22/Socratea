import useReveal from "../../components/useReveal";

const MethodeEtapes = () => {
  useReveal();
  return (
    <section className="methode-etapes">
      <div className="container">
        <div className="section-header reveal reveal-1">
          <span className="eyebrow">Trois étapes</span>
          <h2>
            Du premier échange à un accompagnement qui évolue avec votre
            entreprise.
          </h2>
          <p>
            Nous prenons le temps de comprendre votre activité, puis nous
            organisons la mission pour partir sur de bonnes bases. Une fois le
            suivi lancé, il évolue avec votre entreprise, ses priorités et ses
            outils.
          </p>
        </div>
        <div className="methode-steps reveal reveal-2">
          <div className="step">
            <div className="step-number">01</div>
            <h3>Comprendre votre entreprise</h3>
            <p>
              Un premier échange pour parler de votre activité, de votre
              organisation et de ce que vous attendez réellement de votre
              cabinet. Nous vérifions ensemble que l’approche SOCRATEA
              correspond à vos besoins et à votre façon de travailler.
            </p>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <h3>Préparer le démarrage</h3>
            <p>
              Une fois la mission définie, nous organisons la reprise du
              dossier, les accès, les outils et le calendrier de transmission.
              L’objectif est simple : démarrer sans flottement, avec une
              organisation claire pour vous comme pour nous.
            </p>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <h3>Piloter et faire évoluer</h3>
            <p>
              Nous suivons votre comptabilité tout au long de l’année, avec des
              restitutions régulières et des échanges sur les points qui
              comptent. Quand votre entreprise évolue, nous faisons évoluer
              l’accompagnement : nouveaux indicateurs, processus simplifiés,
              automatisations ou applications adaptées.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodeEtapes;
