const IconScore = ({icon, score, type, color}) => {

    const styleIcon = {
        backgroundColor: color
    }

    return (
        <div style={{...styleIcon}}>
            <img src={icon} alt="logo"/>
            <div>
                <p>{score}{type === "Calories" ? "kCal" : "g"}</p>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default IconScore;