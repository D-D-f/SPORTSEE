import "./Icon.css";
import LogoProps from "../../Interface/LogoProps";

const Icon = ({ link }: LogoProps) => {
  return (
    <div>
      <img src={link} alt="logo" />
    </div>
  );
};

export default Icon;
