import "./IconScore.css"

const IconScore = ({icon, score, type, color}) => {

    const styleIcon = {
        backgroundColor: "rgba(255, 0, 0, 6.61%)",
        backgroundImage: ` url(${icon})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "5px",
        width:"40px",
        height: "40px",
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