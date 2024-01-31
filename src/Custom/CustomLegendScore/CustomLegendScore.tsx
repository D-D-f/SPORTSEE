const CustomLegendScore = ({payload}) => {
    return (
        <div style={{height: "300px"}}>
            <p style={{position: "absolute", top: "20px", left: "20px", fontWeight: "bold", fontSize: "20px"}}>Score</p>
            <p style={{fontWeight: "bold", fontSize: "25px", position: "absolute", top: "130px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                {payload[1]?.payload.todayScore}%
                <span style={{fontWeight: "normal", fontSize: "15px", display: "block", marginTop: "5px", color: "var(--fontColorChart"}}>de votre
                <span style={{fontWeight: "normal", fontSize: "15px", display: "block", marginTop: "5px", color: "var(--fontColorChart"}}>
                    objectif
                </span></span>
            </p>
        </div>
    )
}

export default CustomLegendScore;