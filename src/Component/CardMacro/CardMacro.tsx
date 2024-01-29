import "./CardMacro.css";
import {CardMacroProps} from "../../Interface/InterfaceProps.ts";

const CardMacro = ({picture, quantity, type, color}: CardMacroProps) => {
    const backgroundColor = {
        backgroundColor: color
    }
    return (
        <div className="d_flex alignItemsCenter cardMacro">
            <div style={{...backgroundColor}} className="containerLogoMacro">
                <img src={picture} alt="logo"/>
            </div>
            <div>
                {type === "Calories" ? <div><p>{quantity}kCal</p><p>{type}</p></div> :
                    <div><p>{quantity}g</p><p>{type}</p></div>}
            </div>
        </div>
    )
}

export default CardMacro;