import useReveal from "../../../components/useReveal";

const Pole3Positionnement = () => {
  useReveal();
  return (
    <section
      className="pole3-positionnement"
      aria-labelledby="pole3-positionnement-title"
    >
      <div className="container">
        <div className="prose">
          <span className="eyebrow reveal reveal-1">Notre rôle</span>
          <h2 id="pole3-positionnement-title" className="reveal reveal-2">
            Un interlocuteur identifié pour vos sujets sociaux.
          </h2>
          <p className="reveal reveal-3">
            La paie ne se résume pas à l’établissement d’un bulletin. Elle
            repose sur des informations fiables, des échéances bien suivies et
            des réponses claires lorsqu’une situation évolue.
          </p>
          <p className="reveal reveal-4">
            SOCRATEA centralise vos demandes, organise la transmission des
            variables et coordonne le suivi des bulletins et des déclarations
            sociales. Vous savez à qui vous adresser, ce qui est attendu et
            quels sujets nécessitent votre attention.
          </p>
          <blockquote className="reveal reveal-5">
            Sur la paie, l’essentiel est de disposer des bonnes informations au
            bon moment et de savoir vers qui se tourner lorsqu’une question se
            pose.
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Pole3Positionnement;
