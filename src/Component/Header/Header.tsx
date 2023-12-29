import "./Header.css";
import Logo from "../Logo/Logo";
import ImgLogo from "../../asset/Logo/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <Logo link={ImgLogo} />
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
