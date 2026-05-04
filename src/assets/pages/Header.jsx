const Header = () => {
    return (
        <div className="header-page">
            <div className="header-top">  
            <p className="info-header"><i class="fa-solid fa-circle"></i>Cabinet d'expertise comptable - ouverture septembre 2026</p>
            <h1 className="titre_1">Ancré dans l'expertise. <br />
            </h1>
            <h1 className="titre_2">En mouvement vers votre avenir.</h1>
            <h4>Une information financière disponible en cours d'année, pas uniquement à la clôture. Pour les dirigeants de PME qui veulent piloter leur activité — pas seulement être en règle.</h4>
            <button className="info_rdv">Prendre rendez-vous<i class="fa-solid fa-arrow-right"></i></button>
            <button className="info_methode">Découvrir la méthode</button>
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
        </div>
    );
};

export default Header;