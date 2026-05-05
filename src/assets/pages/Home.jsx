const Home = () => {
    return (
        <section className="entreprise-recherche">
            <div className="home">
            <div className="home-top">
                <span>- pour qui nous travaillons</span>
                <h3>Trois situations dans lesquelles vous vous reconnaîtrez.</h3>
                <p>Nous accompagnons des entreprises qui partagent une exigence commune : avoir des chiffres fiables, à jour, et compris. Au-delà de l'effectif ou du chiffre d'affaires, c'est la maturité d'organisation qui qualifie une collaboration.</p>
            </div>
            <div className="home-bottom">  
            <div className="entreprise-concerne">   
                <h6><span>01</span>TPE digitalisé</h6>
                <h5>Votre entreprise est de taille modeste, mais vous avez choisi dès le départ des outils modernes.</h5>
                <p>Vous attendez d'un cabinet qu'il fonctionne à votre rythme : sans papier, sans déplacement inutile, avec un périmètre de mission clair et des échanges efficaces.</p>
            </div>
          
            <div className="entreprise-concerne">
                <h6><span>02</span>PME en développement</h6>
                <h5>Votre entreprise grandit. Vos décisions ne peuvent plus attendre la clôture annuelle.</h5>
                <p>Vous avez besoin d'une lecture régulière de votre trésorerie et de votre marge. Vous devez préparer des financements, arbitrer des investissements, ajuster votre modèle. Vous attendez un interlocuteur qui comprenne ce qui est en jeu.</p>
            </div>
            <div className="entreprise-concerne">
                <h6><span>03</span>PME structurée & multi-entités</h6>
                <h5>Votre activité est complexe, avec plusieurs structures et des flux volumineux.</h5>
                <p>Vous cherchez un cabinet capable de fiabiliser, de superviser et de produire une information consolidée cohérente — pas seulement de tenir les comptes.</p>
            </div>
            </div>
            </div>
        </section>
    );
};

export default Home;