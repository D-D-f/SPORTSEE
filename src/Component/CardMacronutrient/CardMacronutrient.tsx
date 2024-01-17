import "./CardMacronutrient.css";
import CardMacronutrientProps from "../../Interface/CardMacronutrientProps.tsx";
const CardMacronutrient = ({link, type, quantity}: CardMacronutrientProps) => {
    return (
        <article className="cardMacro">
            <div>
                <img src={link} alt="logo"/>
            </div>
            <div className="cardMacroType">
                {type === "Calories" ? <p>{quantity}kCal<span style={{display: "block"}}>{type}</span></p> : <p>{quantity}g <span style={{display: "block"}}>{type}</span></p>}
            </div>
        </article>
    )
}

export default CardMacronutrient;