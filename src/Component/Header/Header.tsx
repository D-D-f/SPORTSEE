import "./Header.css";
import Logo from "../Logo/Logo.tsx";

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <ul>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </header>
    );
};

export default Header;