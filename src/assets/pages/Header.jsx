const Header = () => {
    return (
        <section className="header-page">
            <div className="header-top">  
            <p className="info-header"><i class="fa-solid fa-circle"></i>Cabinet d'expertise comptable - ouverture septembre 2026</p>
            <h1 className="titre_1">Ancré dans l'expertise. <br />
            </h1>
            <h1 className="titre_2">En mouvement vers votre avenir.</h1>
            <h4>Une information financière disponible en cours d'année, pas uniquement à la clôture. Pour les dirigeants de PME qui veulent piloter leur activité — pas seulement être en règle.</h4>
            <div className="info-group">
            <button className="info_rdv">Prendre rendez-vous<svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
            <button className="info_methode">Découvrir la méthode</button>
            </div>
            </div>
            <div className="header-bottom"> 
                <div className="experience">   
                    <h5>expérience</h5>
                    <p>14 ans - audit & direction financière</p>
                </div>
                <div className="experience">  
                    <h5>intervention</h5>
                    <p>Partout en France</p>                 
                </div>
                <div className="experience">
                    <h5>fonctionnement</h5>
                    <p>100% dématérialisé</p>     
                </div>
            </div>
        </section>
    );
};

export default Header;