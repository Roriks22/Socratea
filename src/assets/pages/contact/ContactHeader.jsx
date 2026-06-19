import { Link } from "react-router-dom";

const ContactHeader = () => {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="breadcrumb">
          <Link to="/">Accueil</Link>
          <span className="sep">/</span>
          <span className="current">Contact</span>
        </div>
        <h1 className="h1-contact">
          30 minutes pour comprendre <br />
          <span>si nous sommes faits pour travailler ensemble.</span>
        </h1>
        <p className="page-hero-lead p-contact">
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
