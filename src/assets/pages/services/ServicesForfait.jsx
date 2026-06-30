import useReveal from "../../components/useReveal";

const ServicesForfait = () => {
  useReveal();
  return (
    <section className="services-forfait">
      <div className="container">
        <div className="section-forfait reveal reveal-1">
          <span className="eyebrow">Votre accompagnement</span>
          <h2>
            Une mission définie pour vous,
            <br />
            pas une formule toute faite.
          </h2>
          <p>
            Nous partons de votre organisation, de vos outils et de vos
            priorités pour construire une mission réellement adaptée. Ce qui est
            pris en charge, le rythme des échanges et les honoraires sont posés
            clairement dès le départ. Et si votre entreprise change,
            l’accompagnement peut changer avec elle.
          </p>
        </div>
        <div className="two-col reveal reveal-2">
          <div className="col">
            <h3>Un cadre clair dès le départ</h3>
            <p>
              Comptabilité, pilotage, paie, juridique, automatisation : nous
              définissons ensemble les sujets sur lesquels vous avez besoin de
              nous et le niveau d’accompagnement attendu. Vous savez ce qui est
              prévu et comment les honoraires sont construits.
            </p>
          </div>
          <div className="col">
            <h3>Quand vos besoins évoluent</h3>
            <p>
              Un recrutement, un financement, une nouvelle entité, de nouveaux
              indicateurs ou une application à mettre en place : nous adaptons
              la mission lorsque cela devient utile. Nous en parlons avec vous
              et chiffrons l’intervention avant de commencer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesForfait;
