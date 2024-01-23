import "./Home.css";
import Name from "../Component/Name/Name.tsx";
import Chart from "../Component/Chart/Chart.tsx";
import {UseCallApi} from "../CustomHooks/UseCallApi/UseCallApi.ts";
/*
import CardMacronutrient from "../Component/CardMacronutrient/CardMacronutrient.tsx";
import fire from "../assets/icon/energy.svg";
import chicken from "../assets/icon/chicken.svg";
import apple from "../assets/icon/apple.svg";
import burger from "../assets/icon/cheeseburger.svg";
*/


const Home = () => {
    const [data] = UseCallApi();
    const name = data.data?.userInfos?.firstName;
    console.log(name)

    return (
        <section className="Home">
            <Name name={name} />
            <main>
                <div className="containerChart">
                    <Chart/>
                    <div style={{display:"flex", width: "100%", height:"50%"}}>
                    </div>
                </div>
                <div className="containerCard">

                </div>
            </main>
        </section>
    )
}

export default Home;