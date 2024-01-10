
const CustomAxisTick = ({ x, y, payload }) => {

    let date: string = payload.value[payload.value.length -1];

    return (
        <text x={x} y={y} textAnchor="middle" dy={+20}>{date}</text>
    );
};

export default CustomAxisTick;