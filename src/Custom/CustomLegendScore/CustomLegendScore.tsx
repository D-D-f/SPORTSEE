const CustomLegendScore = ({payload}) => {
    console.log(payload)
    return (
        <div style={{height: "300px"}}>
            <p style={{position: "absolute", top: "20px", left: "20px", fontWeight: "bold", fontSize: "20px"}}>Score</p>
            <p style={{position: "absolute", top: "130px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                {payload[1]?.payload.todayScore}%
                <span style={{display: "block"}}>de votre
                <span style={{display: "block"}}>
                    objectif
                </span></span>
            </p>
        </div>
    )
}

export default CustomLegendScore;