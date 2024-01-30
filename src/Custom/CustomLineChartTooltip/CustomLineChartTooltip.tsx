interface CustomLineChartTooltipProps {
    payload: {value: number}[];
    active: boolean;
}

const CustomLineChartTooltip = ({ payload, active }: CustomLineChartTooltipProps) => {
    if (active) {
        return (
            <div style={{backgroundColor: "white", padding: "10px", fontSize: "9px"}}>
                <p>{payload[0].value}min</p>
            </div>
        );
    }
    return null;
}

export default CustomLineChartTooltip;