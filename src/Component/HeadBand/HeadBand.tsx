import "./HeadBand.css";
import IconHeadBand from "../IconHeadBand/IconHeadBand.tsx";
import zen from "../../asset/icon/zen.svg";
import natation from "../../asset/icon/natation.svg";
import velo from "../../asset/icon/velo.svg";
import haltere from "../../asset/icon/haltere.svg";

const HeadBand = () => {
    const allIcons: string[] = [zen, natation, velo, haltere];

    const displayIcons = allIcons.map((icon: string, index: number) => {
        return <IconHeadBand key={index} icon={icon} />
    })

    return (
        <div className="HeadBand d_flex flexColumn justifiyContentEvenly alignItemsCenter">
            <div className="iconsHeadBand d_flex flexColumn">
                {displayIcons}
            </div>
            <p className="HeadBand_P">Copiryght, SportSee 2020</p>
        </div>
    )
}

export default HeadBand;