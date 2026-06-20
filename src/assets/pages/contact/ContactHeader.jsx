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
          Un premier rendez-vous sans engagement pour échanger sur votre
          activité, vos attentes et vos contraintes. Si SOCRATEA n'est pas
          adapté à votre situation, nous vous le dirons clairement — et nous
          vous orienterons si nous le pouvons.
        </p>
      </div>
    </section>
  );
};

export default ContactHeader;
