import useReveal from "../../../components/useReveal";

const Pole2Home = () => {
  useReveal();
  return (
    <section className="pole2-home" aria-labelledby="pole2-home-title">
      <div className="container">
        <div className="prose">
          <span className="eyebrow reveal reveal-1">Notre approche</span>
          <h2 id="pole2-home-title" className="reveal reveal-2">
            Simplifier ce qui vous ralentit.
          </h2>
          <p className="reveal reveal-3">
            Nous ne partons pas d’un outil, mais de votre façon de travailler.
            Nous regardons où l’information se perd, où les équipes
            ressaisissent, où les validations prennent trop de temps. Puis nous
            définissons avec vous la réponse la plus adaptée : faire évoluer un
            processus, connecter des outils, automatiser une tâche ou développer
            une application.
          </p>
          <p className="reveal reveal-4">
            Chaque solution doit apporter un bénéfice concret : gagner du temps,
            fiabiliser les données ou rendre le travail plus fluide. Si elle ne
            simplifie pas réellement votre quotidien, nous ne la mettons pas en
            place.
          </p>
          <blockquote className="reveal reveal-5">
            La bonne solution n’est pas la plus complexe. C’est celle qui vous
            simplifie vraiment la vie.
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Pole2Home;
