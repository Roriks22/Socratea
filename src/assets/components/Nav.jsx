import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className='nav-container'>
            <div className="nav-left">
                <div className="logo">
                    <img src="/images/SOCRATEA.png" alt="Logo_SOCRATEA" />
                </div>
                <Link to="/">
                <h1>SOCRATEA</h1>
                </Link>
            </div>
            <div className="nav-right">
                <Link to="/methode">
                <h5>Méthode</h5>
                </Link>
               <Link to="/services">
                <h5>Services</h5>
               </Link>
               <Link to="/apropos">
                <h5>À propos</h5>
               </Link>
               <Link to="/contact">
                <h5>Contact</h5>
               </Link>
               <a href="https://calendly.com/socratea" target="_blank" rel="noopener">
                <h5 className="prise-rdv">Prendre rendez-vous</h5>
               </a>
            </div>
        </nav>
    );
};

export default Nav;