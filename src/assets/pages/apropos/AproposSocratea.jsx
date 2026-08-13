import useReveal from "../../components/useReveal";
import socratea from "/images/Socratea.webp";

const AproposSocratea = () => {
  useReveal();
  return (
    <section
      className="apropos-socratea"
      aria-labelledby="apropos-socratea-title"
    >
      <div className="section-socratea">
        <div className="socratea-image reveal reveal-1">
          <img src={socratea} alt="Logo de SOCRATEA" />
        </div>
        <div className="socratea-texte">
          <span className="eyebrow reveal reveal-2">Derrière SOCRATEA</span>
          <h2 id="apropos-socratea-title" className="reveal reveal-3">
            Au fait, pourquoi SOCRATEA ?
          </h2>
          <p className="reveal reveal-4">
            Non, SOCRATEA ne vient pas de Socrate. Vous n’aurez pas à préparer
            une dissertation avant de me contacter.
          </p>
          <p className="reveal reveal-4">
            Le nom est né bien loin des cabinets comptables, au Costa Rica,
            pendant mon voyage de noces. C’est là que j’ai découvert le Socratea
            exorrhiza, un arbre aux étonnantes racines aériennes.
          </p>
          <p className="reveal reveal-4">
            La légende raconte qu’il peut avancer en faisant pousser de
            nouvelles racines dans la direction qu’il souhaite prendre. Cette
            image ne m’a jamais vraiment quitté.
          </p>
          <p className="reveal reveal-4">
            D’abord parce qu’elle reste liée à un moment très personnel de ma
            vie. Mais surtout parce qu’elle exprime une conviction à laquelle je
            tiens profondément : avoir des racines ne signifie pas rester
            immobile.
          </p>
          <p className="reveal reveal-4">
            Nos racines racontent ce que nous sommes, ce que nous avons
            construit et ce qui nous rend solides. Elles ne doivent pas nous
            retenir. Elles doivent nous permettre d’avancer sans nous perdre.
          </p>
          <p className="reveal reveal-4">
            C’est ainsi que j’ai envie d’exercer mon métier : comprendre ce qui
            fait la force d’une entreprise, respecter son histoire et l’aider à
            construire la suite.
          </p>
          <p className="reveal reveal-4">
            SOCRATEA est né de ce souvenir et de cette conviction.
          </p>

          <blockquote className="reveal reveal-5">
            Ancré dans l’expertise. En mouvement vers votre avenir.
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AproposSocratea;
