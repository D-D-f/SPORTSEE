import "./Home.css";
import Name from "../Component/Name/Name.tsx";
import Chart from "../Component/Chart/Chart.tsx";
import CardMacronutrient from "../Component/CardMacronutrient/CardMacronutrient.tsx";
import UseCallApi from "../CustomHooks/UseCallApi/UseCallApi.tsx";
import fire from "../assets/icon/energy.svg";
import chicken from "../assets/icon/chicken.svg";
import apple from "../assets/icon/apple.svg";
import burger from "../assets/icon/cheeseburger.svg";

const Home = () => {
    const [data] = UseCallApi("12");
    const name = data.data?.userInfos?.firstName;
    console.log(data)
    return (
        <section className="Home">
            <Name name={name} />
            <main>
                <div className="containerChart">
                    <Chart />
                </div>
                <div className="containerCard">
                    <CardMacronutrient link={fire} type={"Calories"} quantity={data.data?.keyData?.calorieCount} />
                    <CardMacronutrient link={chicken} type={"Proteines"} quantity={data.data?.keyData?.proteinCount} />
                    <CardMacronutrient link={apple} type={"Glucides"} quantity={data.data?.keyData?.carbohydrateCount} />
                    <CardMacronutrient link={burger} type={"Lipides"} quantity={data.data?.keyData?.lipidCount} />
                </div>
            </main>
        </section>
    )
}

export default Home;