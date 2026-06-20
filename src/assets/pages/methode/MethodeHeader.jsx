import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";

const Methode = () => {
  useReveal();
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb reveal reveal-1">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <span className="current">Notre méthode</span>
        </div>
        <h1 className="page-hero-h1 reveal reveal-2">
          Un cadre clair. <br />
          <span>Des engagements tenus.</span>
        </h1>
        <p className="page-hero-lead reveal reveal-3">
          Une organisation cadrée, partagée avec vous dès le premier échange. Ce
          n'est pas une contrainte, c'est ce qui nous permet de produire les
          livrables dans les délais — dossier après dossier.
        </p>
      </div>
    </section>
  );
};

export default Methode;
