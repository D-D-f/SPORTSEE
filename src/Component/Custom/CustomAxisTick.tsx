
const CustomAxisTick = ({ payload }) => {
    let path = payload.value[payload.value.length -1];
    console.log(path)
    return (
        <p>{path}</p>
    );
};

export default CustomAxisTick;