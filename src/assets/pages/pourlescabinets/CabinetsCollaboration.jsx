import useReveal from "../../components/useReveal";

const CabinetsCollaboration = () => {
  useReveal();
  return (
    <section
      className="cabinets-collaboration"
      aria-labelledby="cabinets-collaboration-title"
    >
      <div className="container">
        <div className="prose">
          <span className="eyebrow reveal reveal-1">Entre confrères</span>
          <h2 id="cabinets-collaboration-title" className="reveal reveal-2">
            Votre client reste votre client.
          </h2>
          <p className="reveal reveal-3">
            Avant de commencer, nous définissons clairement le périmètre de
            l’intervention, les livrables, les délais, les interlocuteurs et la
            façon dont les échanges seront organisés.
          </p>
          <p className="reveal reveal-3">
            Aucun contact direct avec votre client n’a lieu sans votre accord.
            Les informations, les méthodes et les travaux partagés dans le cadre
            de la mission restent confidentiels.
          </p>
          <p className="reveal reveal-3">
            Vous gardez la main sur la relation et sur les décisions. SOCRATEA
            intervient là où son regard ou ses compétences peuvent réellement
            vous être utiles.
          </p>
          <blockquote className="reveal reveal-4">
            Votre relation client ne change pas. Votre capacité à répondre au
            besoin, oui.
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default CabinetsCollaboration;
