import useReveal from "../../../components/useReveal";

const Pole1Objectif = () => {
  useReveal();
  return (
    <section className="pole1-objectif" aria-labelledby="pole1-objectif-title">
      <div className="container">
        <div className="prose">
          <span className="eyebrow span-pole1 reveal reveal-1">
            Quand cet accompagnement prend tout son sens
          </span>
          <h2 id="pole1-objectif-title" className="reveal reveal-2">
            Quand attendre la clôture ne suffit plus.
          </h2>
          <p className="reveal reveal-3">
            Un recrutement à décider, un investissement à financer, une marge
            qui se tend ou une nouvelle activité à lancer : dans ces moments,
            vous avez besoin de comprendre rapidement ce qui se passe dans votre
            entreprise.
          </p>
          <p className="reveal reveal-4">
            SOCRATEA vous aide à suivre les bons indicateurs, à repérer les
            écarts et à mesurer les conséquences de vos décisions. Le niveau de
            suivi s’adapte à votre activité : pas de tableau de bord pour le
            principe, seulement des informations qui vous sont réellement
            utiles.
          </p>
          <blockquote className="reveal reveal-5">
            Vos chiffres doivent vous aider à agir, pas seulement à constater.
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Pole1Objectif;
