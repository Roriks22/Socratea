import useReveal from "../../../components/useReveal";

const Pole4Sens = () => {
  useReveal();
  return (
    <section className="pole4-sens" aria-labelledby="pole4-sens-title">
      <div className="container">
        <div className="prose">
          <span className="eyebrow reveal reveal-1">Un suivi coordonné</span>
          <h2 id="pole4-sens-title" className="reveal reveal-2">
            Un même point de repère, même lorsque plusieurs experts
            interviennent.
          </h2>
          <p className="reveal reveal-3">
            Les décisions importantes dépassent souvent un seul cadre. Une
            réorganisation, une entrée d’associé ou une transmission peut avoir
            des conséquences juridiques, fiscales, financières et
            opérationnelles.
          </p>
          <p className="reveal reveal-4">
            SOCRATEA vous aide à relier ces dimensions, à préparer les
            informations utiles et à coordonner les échanges avec vos autres
            conseils. Vous évitez les redites, les ruptures d’information et les
            décisions prises sans vision d’ensemble.
          </p>
          <blockquote className="reveal reveal-5">
            Vous gardez un interlocuteur qui connaît votre entreprise et veille
            à la cohérence de l’ensemble.
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Pole4Sens;
