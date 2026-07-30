import useReveal from "../../../components/useReveal";
import automatiser from "../../../../../public/images/Automatiser.webp";
import centraliser from "../../../../../public/images/Centraliser.webp";
import developper from "../../../../../public/images/Developper.webp";
import connecter from "../../../../../public/images/Connecter.webp";

const Pole2Deroulement = () => {
  useReveal();
  return (
    <section className="pole2-deroulement">
      <div className="container">
        <div className="section-header-pole2 reveal reveal-1">
          <span className="eyebrow span-pole2">Quelques exemples concrets</span>
          <h2>
            Des solutions concrètes, <br />à partir de vos irritants.
          </h2>
          <p>
            Chaque entreprise a ses propres outils, ses habitudes et ses points
            de friction. Les exemples ci-dessous donnent un aperçu des solutions
            que nous pouvons mettre en place. La réponse dépend toujours de
            votre organisation, du besoin rencontré et du gain réellement
            attendu.
          </p>
        </div>
        <ul className="feature-list reveal reveal-2">
          <li>
            <div className="left-feat">
              <span className="feat-num">01</span>
              <img src={centraliser} alt="image_centraliser" />
            </div>
            <div>
              <strong>Centraliser les documents et les demandes</strong>
              <p>
                Factures, notes de frais, demandes d’achat ou pièces
                administratives : nous pouvons organiser leur collecte, extraire
                les informations utiles et mettre en place des circuits de
                validation plus simples.
              </p>
            </div>
          </li>
          <li>
            <div className="left-feat">
              <span className="feat-num">02</span>
              <img src={connecter} alt="image_connecter" />
            </div>
            <div>
              <strong>Faire circuler les données entre vos outils</strong>
              <p>
                Logiciel métier, facturation, caisse, CRM, e-commerce ou
                comptabilité : nous connectons les outils lorsque cela est
                pertinent, afin de limiter les doubles saisies, les fichiers
                intermédiaires et les écarts entre les systèmes.
              </p>
            </div>
          </li>
          <li>
            <div className="left-feat">
              <span className="feat-num">03</span>
              <img src={automatiser} alt="image_automatiser" />
            </div>
            <div>
              <strong>Automatiser les tâches répétitives</strong>
              <p>
                Contrôles, rapprochements, relances, préparation de fichiers ou
                mises à jour récurrentes : les traitements simples peuvent être
                automatisés pour laisser davantage de temps aux vérifications,
                aux exceptions et à l’analyse.
              </p>
            </div>
          </li>
          <li>
            <div className="left-feat">
              <span className="feat-num">04</span>
              <img src={developper} alt="image_développer" />
            </div>
            <div>
              <strong>Développer une application adaptée</strong>
              <p>
                Lorsque les outils existants ne répondent pas correctement à un
                besoin précis, SOCRATEA peut développer une application adaptée
                à votre fonctionnement : collecte d’informations, validation,
                suivi d’un processus, contrôle ou restitution.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Pole2Deroulement;
