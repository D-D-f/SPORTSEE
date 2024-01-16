import "./IconScore.css"

const IconScore = ({icon, score, type, color}) => {

    const styleIcon = {
        backgroundColor: color,
        backgroundImage: ` url(${icon})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "5px",
        width:"60px",
        height: "60px",
    }

    return (
        <div className="iconCount" >
            <div style={{...styleIcon}} className="containerIcon">
            </div>
            <div>
                <p className="scoreCount">{score}{type === "Calories" ? "kCal" : "g"}</p>
                <p className="typeCount">{type}</p>
            </div>
        </div>
    )
}

export default IconScore;