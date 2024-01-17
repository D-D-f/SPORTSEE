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
                {type === "Calories" ? <p>{quantity}kCal<span style={{display: "block"}}>{type}</span></p> : <p>{quantity}g <span style={{display: "block"}}>{type}</span></p>}
            </div>
        </article>
    )
}

export default CardMacronutrient;