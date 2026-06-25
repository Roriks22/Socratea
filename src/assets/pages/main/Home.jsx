import useReveal from "../../components/useReveal";

const Home = () => {
  useReveal();

  return (
    <section className="entreprise-recherche">
      <div className="container home">
        <div className="home-top reveal">
          <span>Vos enjeux</span>
          <h2>
            Votre entreprise évolue. <br />
            Vos besoins aussi.
          </h2>
          <p>
            Tenir une comptabilité fiable et respecter ses obligations reste
            essentiel. Mais lorsque l’activité se développe, d’autres besoins
            apparaissent : comprendre plus rapidement ses résultats, maîtriser
            des flux plus complexes et faire évoluer une organisation qui montre
            ses limites.
          </p>
        </div>
        <div className="home-bottom">
          <div className="entreprise-concerne reveal reveal-1">
            <h5>Vos chiffres arrivent trop tard</h5>
            <p>
              Vous découvrez parfois vos résultats trop tard pour ajuster vos
              décisions. Trésorerie, marge, activité : vous avez besoin de
              repères plus réguliers pour comprendre votre situation et réagir
              au bon moment.
            </p>
          </div>

          <div className="entreprise-concerne reveal reveal-2">
            <h5>
              Votre entreprise grandit. Vos décisions ne peuvent plus attendre
              la clôture annuelle.
            </h5>
            <p>
              Vous avez besoin d'une lecture régulière de votre trésorerie et de
              votre marge. Vous devez préparer des financements, arbitrer des
              investissements, ajuster votre modèle. Vous attendez un
              interlocuteur qui comprenne ce qui est en jeu.
            </p>
          </div>
          <div className="entreprise-concerne reveal reveal-3">
            <h5>Votre activité se complexifie</h5>
            <p>
              Plusieurs entités, des flux croisés, des interlocuteurs qui se
              multiplient : ce qui fonctionnait bien à une certaine taille
              devient difficile à tenir. Vous avez besoin d’une organisation
              comptable et financière qui suive votre rythme sans perdre en
              fiabilité.
            </p>
          </div>
          <div className="entreprise-concerne reveal reveal-4">
            <h5>Votre organisation vous fait perdre du temps</h5>
            <p>
              Documents transmis par plusieurs canaux, ressaisies, fichiers
              dispersés, tâches répétitives : vos équipes passent trop de temps
              à faire circuler l’information, alors qu’elle devrait être plus
              simple à collecter, à contrôler et à exploiter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
