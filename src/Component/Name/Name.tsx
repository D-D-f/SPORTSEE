import "./Name.css";
import NameProps from "../../Interface/NameProps.tsx";

const Name = ({name}: NameProps) => {
    return (
        <div className="div_name">
            <h1>Bonjour <span>{name}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default Name;