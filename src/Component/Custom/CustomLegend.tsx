const CustomLegend = ({payload}) => {
    const li = payload.map((entry, index) => {
        return entry.dataKey === "kilogram" ? <li key={index} className={"round"}>Poids (kg)</li> : <li key={index} className={"square"} style={{listStyle: "square"}}>Calories brûlées (kcal)</li>
    })
    return (
        <ul className={"ul_legend"}>
            {li}
        </ul>
    )
}

export default CustomLegend;