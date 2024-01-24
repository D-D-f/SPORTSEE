interface TickChartProps {
    x: number;
    y: number;
    payload: {value: "string"}
}

const CustomizedTickChart = ({ x, y, payload }: TickChartProps) => {
    const day = payload.value.split("-").splice(1, 2).join('/');

    return (
        <text x={x} y={y} dy={16} fill="#666" textAnchor="middle">
            {day}
        </text>
    )
}

export default CustomizedTickChart;