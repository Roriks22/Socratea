const Nav = () => {
    return (
        <div className='nav-container'>
            <div className="nav-left">
                <div className="logo">
                    <img src="../../../public/images/SOCRATEA.png" alt="Logo_SOCRATEA" />
                </div>
                <h1>SOCRATEA</h1>
            </div>
            <div className="nav-right">
                <h5>Méthode</h5>
                <h5>Services</h5>
                <h5>À propos</h5>
                <h5>Contact</h5>
                <h5 className="prise-rdv">Prendre rendez-vous</h5>
            </div>
        </div>
    );
};

export default Nav;