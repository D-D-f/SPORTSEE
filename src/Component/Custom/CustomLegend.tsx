const CustomLegend = ({payload}) => {
    const li = payload.map((entry, index) => {
        return <li key={`item ${index}`}>{entry.dataKey === "kilogram" ? `Poids (kg)` : `Calories brûlées (kcal)`}</li>
    })
    return (
        <ul>
            {li}
        </ul>
    )
}

export default CustomLegend;