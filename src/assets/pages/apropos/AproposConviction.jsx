import useReveal from "../../components/useReveal";

const AproposConviction = () => {
  useReveal();
  return (
    <section
      className="aprps-conviction"
      aria-labelledby="apropos-conviction-title"
    >
      <div className="container">
        <div className="prose">
          <span className="eyebrow reveal reveal-1">La conviction</span>
          <h2 id="apropos-conviction-title" className="reveal reveal-2">
            Des comptes fiables, mais pas seulement.
          </h2>
          <p className="conviction-texte reveal reveal-3">
            Une comptabilité fiable, des obligations fiscales respectées et des
            comptes annuels établis : c’est indispensable. Mais l’information
            financière prend toute sa valeur lorsqu’elle aide le dirigeant à
            comprendre son activité, à anticiper et à décider.
          </p>
          <p className="conviction-texte reveal reveal-4">
            Trésorerie, marge, activité, principaux écarts : ces repères doivent
            pouvoir être suivis suffisamment régulièrement pour identifier les
            points de vigilance, anticiper les besoins et éclairer les
            décisions.
          </p>
          <p className="conviction-texte reveal reveal-5">
            C’est la conviction à l’origine de SOCRATEA : associer la rigueur de
            l’expertise comptable à une information plus claire, plus régulière
            et réellement utile au pilotage de l’entreprise.
          </p>
          <blockquote className="reveal reveal-5">
            Une information fiable n’a de valeur que si elle arrive assez tôt
            pour éclairer une décision.
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AproposConviction;
