import "./Home.css";
import Name from "../../Component/Name/Name.tsx";
import {UseCallApi} from "../../Api/UseCallApi.ts";
import ChartActivity from "../../Component/ChartActivty/ChartActivity.tsx";
import CardMacro from "../../Component/CardMacro/CardMacro.tsx";
import fire from "../../asset/icon/energy.svg";
import chicken from "../../asset/icon/chicken.svg";
import apple from "../../asset/icon/apple.svg";
import burger from "../../asset/icon/cheeseburger.svg";
import LineChartSession from "../../Component/LineChartSession/LineChartSession.tsx";
import RadarChartPerformance from "../../Component/RadarChartPerformance/RadarChartPerformance.tsx";

const Home = () => {
    const data = UseCallApi();
    const name: string = data.data?.userInfos.firstName;
    const allLogo = [{picture: fire, quantity: data.data?.keyData.calorieCount, type: "Calories", color:"rgba(255, 1, 1, 0.1)"}, {picture: chicken, quantity: data.data?.keyData.proteinCount, type: "Proteines", color:"#4AB8FF1A"},  {picture: apple, quantity: data.data?.keyData.carbohydrateCount, type: "Glucides", color: "rgba(249,206,35,0.1)"}, {picture: burger, quantity: data.data?.keyData.lipidCount, type: "Lipides", color:"#FD51811A"}]

    const displayLogo = allLogo.map((value: {picture: string, quantity: number, type: string, color: string}, index: number) => {
        return <CardMacro key={index} picture={value.picture} quantity={value.quantity} type={value.type} color={value.color} />
    })

    return (
        <main>
            <Name name={name} />
            <div className="containerChart d_flex">
                <div className="firstChart">
                    <ChartActivity />
                    <div className="d_flex justifyContentBetween">
                        <LineChartSession />
                        <RadarChartPerformance />
                    </div>
                </div>
                <div className="allCardsMacro d_flex flexColumn justifyContentBetween">
                    {displayLogo}
                </div>
            </div>
        </main>
    )
}

export default Home;