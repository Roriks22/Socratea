import { Link } from "react-router-dom";

const Methode = () => {
  return (
    <section id="methode">
      <div className="container methode-inner">
        <div className="breadcrumb">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <span className="current">Notre méthode</span>
        </div>
        <h1>
          Un cadre clair.
          <span>Des engagements tenus.</span>
        </h1>
        <p className="methode-lead">
          Une organisation cadrée, partagée avec vous dès le premier échange. Ce
          n'est pas une contrainte, c'est ce qui nous permet de produire les
          livrables dans les délais — dossier après dossier.
        </p>
      </div>
    </section>
  );
};

export default Methode;
