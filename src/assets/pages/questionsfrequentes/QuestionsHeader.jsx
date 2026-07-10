import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";

const QuestionsHeader = () => {
  useReveal();

  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb reveal reveal-1">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <span className="current">Questions fréquentes</span>
        </div>
        <h1 className="page-hero-h1 reveal reveal-2">
          Quelques réponses <br />
          <span>avant notre premier échange.</span>
        </h1>
        <div className="page-hero-lead reveal reveal-3">
          <p>
            Changer de cabinet, revoir son organisation ou confier de nouveaux
            sujets soulève forcément des questions. Voici les réponses aux plus
            fréquentes. Et si la vôtre n’y figure pas, nous en parlerons
            simplement ensemble.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuestionsHeader;
