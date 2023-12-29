import LogoProps from "../../Interface/LogoProps";

const Logo = ({ link }: LogoProps) => {
  return (
    <img style={{ width: "178px", height: "60px" }} src={link} alt="logo" />
  );
};

export default Logo;
