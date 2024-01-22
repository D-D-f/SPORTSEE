import "./Home.css";
import Name from "../Component/Name/Name.tsx";
import Chart from "../Component/Chart/Chart.tsx";
import CardMacronutrient from "../Component/CardMacronutrient/CardMacronutrient.tsx";
import {UseCallApi} from "../CustomHooks/UseCallApi/UseCallApi.tsx";
import fire from "../assets/icon/energy.svg";
import chicken from "../assets/icon/chicken.svg";
import apple from "../assets/icon/apple.svg";
import burger from "../assets/icon/cheeseburger.svg";
import RadarChartActivity from "../Component/RadarChartActivity/RadarChartActivity.tsx";

const Home = () => {
    const [data] = UseCallApi();
    const name = data.data?.userInfos?.firstName;

    return (
        <section className="Home">
            <Name name={name} />
            <main>
                <div className="containerChart">
                    <Chart/>
                    <div style={{width: "100%", height:"50%"}}>
                        <RadarChartActivity/>
                    </div>
                </div>
                <div className="containerCard">
                    <CardMacronutrient link={fire} type={"Calories"} quantity={data.data?.keyData?.calorieCount} color="rgba(255, 0, 0, 6.61%)" />
                    <CardMacronutrient link={chicken} type={"Proteines"} quantity={data.data?.keyData?.proteinCount} color="#4AB8FF1A" />
                    <CardMacronutrient link={apple} type={"Glucides"} quantity={data.data?.keyData?.carbohydrateCount} color="rgba(249, 206, 35, 6.61%)" />
                    <CardMacronutrient link={burger} type={"Lipides"} quantity={data.data?.keyData?.lipidCount} color="#FD51811A" />
                </div>
            </main>
        </section>
    )
}

export default Home;