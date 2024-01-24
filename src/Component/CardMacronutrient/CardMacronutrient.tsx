import "./CardMacronutrient.css";
import CardMacronutrientProps from "../../Interface/CardMacronutrientProps.tsx";
const CardMacronutrient = ({link, type, quantity, color}: CardMacronutrientProps) => {

    const styleMycro = {
        backgroundColor: color,
    }

    return (
        <article className="cardMacro">
            <div style={{...styleMycro}} className="containerImgMacro">
                <img src={link} alt="logo"/>
            </div>
            <div className="cardMacroType">
                {type === "Calories" ? <p className="cardMacroP">{quantity}kCal<span className="cardMacroSpan">{type}</span></p> : <p className="cardMacroP">{quantity}g <span className="cardMacroSpan">{type}</span></p>}
            </div>
        </article>
    )
}

export default CardMacronutrient;