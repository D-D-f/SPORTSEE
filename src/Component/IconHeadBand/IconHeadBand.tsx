import "./IconHeadBand.css";
import {IconHeadBandProps} from "../../Interface/InterfaceProps.ts";

const IconHeadBand = ({icon}:IconHeadBandProps) => {
    return (
        <div>
            <img className="iconHeadBand" src={icon} alt="logo"/>
        </div>
    )
}

export default IconHeadBand;