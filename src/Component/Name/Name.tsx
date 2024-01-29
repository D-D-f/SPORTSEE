import "./Name.css";
import {NameProps} from "../../Interface/InterfaceProps.ts";

const Name = ({name}: NameProps) => {
    return (
        <div className="containerName">
            <h1>Bonjour <span className="spanName">{name}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default Name;