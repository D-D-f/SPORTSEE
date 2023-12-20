import "./Header.css";
import Logo from "../../asset/Logo/logo.svg";

const Header = () => {
  const navigation: string[] = ["Accueil", "Profil", "Réglage", "Communauté"];
  const displayNav = navigation.map((nav, index) => <li key={index}>{nav}</li>);

  return (
    <header>
      <nav className="header_nav">
        <img src={Logo} alt="logo sportsee" />
        <ul>{displayNav}</ul>
      </nav>
    </header>
  );
};

export default Header;
