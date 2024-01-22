const CustomizedLegend = (props: {payload: [] }) => {
    const {payload} = props;

    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <p style={{fontWeight: "bold"}}>Activité quotidienne</p>
            <ul style={{display: "flex", justifyContent: "space-between", width: "35%", marginRight: "4%"}}>
                {payload.map((value: {payload: {name: string}}, index: number) => {
                    return <li className={`legendStyle-${index}`} key={index}><span style={{color: "var(--fontColorChart"}}>{value.payload.name}</span></li>
                })}
            </ul>
        </div>
    )
}

export default CustomizedLegend;