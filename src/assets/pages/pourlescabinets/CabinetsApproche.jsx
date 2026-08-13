import useReveal from "../../components/useReveal";

const CabinetsApproche = () => {
  useReveal();
  return (
    <section
      className="cabinets-approche"
      aria-labelledby="cabinets-approche-title"
    >
      <div className="container">
        <div className="section-cabinets-approche">
          <span className="eyebrow span-cabinet reveal reveal-1">
            À la croisée du chiffre, du terrain et des outils
          </span>
          <h2 id="cabinets-approche-title" className="reveal reveal-2">
            Comprendre le besoin
            <br />
            avant de construire la solution.
          </h2>
          <p className="reveal reveal-3">
            Mon expérience de l’audit m’a appris à contrôler, documenter et
            fiabiliser. Mon expérience de directeur financier m’a appris à
            utiliser les chiffres pour décider, à organiser les flux et à
            construire des outils réellement utilisables par les équipes.
          </p>
          <p className="reveal reveal-3">
            C’est ce double regard que je mets à la disposition des confrères :
            une approche rigoureuse, mais toujours ancrée dans la réalité du
            dossier ou du cabinet.
          </p>
          <p className="reveal reveal-3">
            Pas de solution technique pour le principe. Pas de tableau de bord
            qui ne sera jamais consulté. Chaque intervention doit répondre à un
            besoin concret et produire un résultat réellement utile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CabinetsApproche;
