import React from 'react';
interface CustomizedTooltipProps {
    active: boolean;
    label: string;
    payload?: Array<{ payload: { kilogram: number; calories: number } }>;
}

const CustomizedTooltip: React.FC<CustomizedTooltipProps> = (props) => {
    const styleFont = {
        color: "white",
        fontSize: "10px"
    }
    if (props.active && props.payload && props.payload.length) {
        return (
            <div className="custom-tooltip" style={{backgroundColor: "var(--red)", padding: "10px"}}>
                <p style={{...styleFont}}>{props.payload[0]?.payload.kilogram}kg</p>
                <p style={{...styleFont}}>{props.payload[0]?.payload.calories}Kcal</p>
            </div>
        );
    }
    return null;
}

export default CustomizedTooltip;