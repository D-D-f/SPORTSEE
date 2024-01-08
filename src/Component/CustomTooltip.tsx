const CustomTooltip = ({kilogram, calories, active}) => {
    if(active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${kilogram}kg`}</p>
                <p className="label">{`${calories}Kcal`}</p>
            </div>
        )
    }

    return null;
}

export default CustomTooltip;