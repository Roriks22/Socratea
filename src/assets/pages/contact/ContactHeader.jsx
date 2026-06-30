import { Link } from "react-router-dom";
import useReveal from "../../components/useReveal";

const ContactHeader = () => {
  useReveal();
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb reveal reveal-1">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <span className="current">Contact</span>
        </div>
        <h1 className="page-hero-h1 reveal reveal-2">
          30 minutes
          <br />
          <span>pour faire connaissance.</span>
        </h1>
        <p className="page-hero-lead p-contact reveal reveal-3">
          Ce premier échange, sans engagement, nous permet de comprendre votre
          activité, votre organisation et ce que vous attendez de votre
          expert-comptable. De votre côté, vous découvrez l’approche SOCRATEA et
          pouvez vérifier qu’elle correspond à ce que vous recherchez. Si ce
          n’est pas le cas, nous vous le dirons et nous vous orienterons si nous
          le pouvons.
        </p>
      </div>
    </section>
  );
};

export default ContactHeader;
