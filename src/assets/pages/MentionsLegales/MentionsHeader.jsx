import { Link } from "react-router-dom";

const MentionsHeader = () => {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <span className="current">Mentions Légales</span>
        </div>
        <h1>
          Mentions <br />
          <span>légales.</span>
        </h1>
        <p className="page-hero-lead">
          Les informations légales relatives au cabinet SOCRATEA EURL et au
          présent site, conformément aux obligations applicables aux
          experts-comptables inscrits à l'Ordre.
        </p>
      </div>
    </section>
  );
};

export default MentionsHeader;
