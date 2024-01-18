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
                {type === "Calories" ? <p style={{fontSize: "20px"}}>{quantity}kCal<span style={{display: "block", color: "#74798C", fontSize: "14px"}}>{type}</span></p> : <p style={{fontSize: "20px"}}>{quantity}g <span style={{display: "block", color: "#74798C", fontSize: "14px"}}>{type}</span></p>}
            </div>
        </article>
    )
}

export default CardMacronutrient;