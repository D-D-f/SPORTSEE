interface CustomTooltipProps {
    active: boolean;
    payload: []
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].payload.kilogram} kg`}</p>
                <p className="label">{`${payload[0].payload.calories} Kcal`}</p>
            </div>
        );
    }

    return null;
};

export default CustomTooltip;