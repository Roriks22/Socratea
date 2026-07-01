import socratea from "../../../../public/images/Socratea.webp";

const AproposSocratea = () => {
  return (
    <section className="apropos-socratea">
      <div className="section-socratea">
        <div className="socratea-texte">
          <span className="eyebrow">Derrière SOCRATEA</span>
          <h2>Au fait, pourquoi SOCRATEA</h2>
          <p>
            Non, SOCRATEA ne vient pas de Socrate. Vous n’aurez pas à préparer
            une dissertation avant de me contacter.
          </p>
          <p>
            Le nom est né bien loin des cabinets comptables, au Costa Rica,
            pendant mon voyage de noces. C’est là que j’ai découvert le Socratea
            exorrhiza, un arbre aux étonnantes racines aériennes.
          </p>
          <p>
            La légende raconte qu’il peut avancer en faisant pousser de
            nouvelles racines dans la direction qu’il souhaite prendre. Cette
            image ne m’a jamais vraiment quitté.
          </p>
          <p>
            D’abord parce qu’elle reste liée à un moment très personnel de ma
            vie. Mais surtout parce qu’elle exprime une conviction à laquelle je
            tiens profondément : avoir des racines ne signifie pas rester
            immobile.
          </p>
          <p>
            Nos racines racontent ce que nous sommes, ce que nous avons
            construit et ce qui nous rend solides. Elles ne doivent pas nous
            retenir. Elles doivent nous permettre d’avancer sans nous perdre.
          </p>
          <p>
            C’est ainsi que j’ai envie d’exercer mon métier : comprendre ce qui
            fait la force d’une entreprise, respecter son histoire et l’aider à
            construire la suite.
          </p>
          <p>SOCRATEA est né de ce souvenir et de cette conviction.</p>

          <blockquote>
            Ancré dans l’expertise. En mouvement vers votre avenir.
          </blockquote>
        </div>
        <img src={socratea} alt="Socratea" />
      </div>
    </section>
  );
};

export default AproposSocratea;
