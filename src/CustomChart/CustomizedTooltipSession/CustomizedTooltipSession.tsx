import React from 'react';
interface CustomizedTooltipSessionProps {
    active: boolean;
    label: string;
    payload?: Array<{ payload: { sessionLength: number } }>;
}

const CustomizedTooltipSession: React.FC<CustomizedTooltipSessionProps> = (props) => {
    const styleFont = {
        color: "black",
        fontSize: "10px"
    }
    if (props.active && props.payload && props.payload.length) {
        return (
            <div className="custom-tooltip" style={{backgroundColor: "white", padding: "10px"}}>
                <p style={{...styleFont}}>{props.payload[0]?.payload.sessionLength}min</p>
            </div>
        );
    }
    return null;
}

export default CustomizedTooltipSession;