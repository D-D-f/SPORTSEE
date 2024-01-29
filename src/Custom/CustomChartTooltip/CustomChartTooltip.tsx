interface CustomChartTooltipProps {
    payload: {value: number}[];
    active: boolean;
}

const CustomChartTooltip = ({ payload, active }: CustomChartTooltipProps) => {
    if (active) {
        return (
            <div style={{backgroundColor: "var(--red)", color: "white", padding: "20px 10px", fontSize: "9px"}} className="custom-tooltip d_flex flexColumn">
                <p style={{marginBottom: "20px"}}>{payload[0].value}kg</p>
                <p>{payload[1].value}kCal</p>
            </div>
        );
    }
    return null;
}

export default CustomChartTooltip;