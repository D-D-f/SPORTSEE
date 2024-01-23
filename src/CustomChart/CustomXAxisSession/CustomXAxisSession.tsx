const CustomXAxisSession = ({x, y, payload}) => {
    let path: string = "";

    console.log(x, y)

    switch(payload.value) {
        case 1:
            path = "L";
            break;
        case 2:
            path = "M";
            break;
        case 3:
            path = "M";
            break;
        case 4:
            path = "J";
            break;
        case 5:
            path = "V";
            break;
        case 6:
            path = "S";
            break;
        case 7:
            path = "D";
            break;

        default:
            path = "";
    }


    return (
      <div y={y + 10} style={{border: "1px solid red"}}>
          <p style={{border: "1px solid red"}}>{payload.value}</p>
      </div>
    )
}

export default CustomXAxisSession