import { Link } from "react-router-dom";
import useReveal from "../../../components/useReveal";

const Pole3Header = () => {
  useReveal();
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb reveal reveal-1">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <Link to="/services">Nos services</Link>
          <span className="sep">/</span>
          <span className="current">Social et paie</span>
        </div>
        <h1 className="pole03 reveal reveal-2">
          Social et paie <br />
          <span>Une gestion claire, des échéances maîtrisées.</span>
        </h1>
        <p className="page-hero-lead reveal reveal-3">
          La paie engage votre relation avec vos salariés et ne laisse pas de
          place à l’improvisation. SOCRATEA organise la collecte des variables,
          suit les échéances et coordonne les travaux nécessaires à
          l’établissement des bulletins et des déclarations sociales. Vous
          gardez un interlocuteur identifié pour comprendre les points
          importants, anticiper les situations sensibles et prendre les bonnes
          décisions.
        </p>
      </div>
    </section>
  );
};

export default Pole3Header;
