import "./Header.css";
import logoHeader from "../../asset/Logo/LogoHeader.png";

const Header = () => {
    return (
        <header className="d_flex justifyContentBetween alignItemsCenter">
            <img className="logoHeader" src={logoHeader} alt="logo sportsee"/>
            <nav className="d_flex justifyContentCenter">
                <ul className="d_flex justifiyContentEvenly">
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglages</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;