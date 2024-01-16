import IconScore from "../IconScore/IconScore.tsx";
import Fire from "../../asset/Logo/energy.svg";
import Chicken from "../../asset/Logo/chicken.svg";
import Apple from "../../asset/Logo/apple.svg";
import Burger from "../../asset/Logo/cheeseburger.svg";
import "./IconActivityScore.css";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const IconActivityScore = () => {

    const { data, error, isLoading } = useSWR(
        "http://localhost:3000/user/12",
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";


    return (
        <div className={"block_activity"}>
            <IconScore icon={Fire} score={data.data.keyData.calorieCount} type="Calories" color="rgba(255, 0, 0, 6.61%)" />
            <IconScore icon={Chicken} score={data.data.keyData.proteinCount} type="Proteines" color="#4AB8FF1A" />
            <IconScore icon={Apple} score={data.data.keyData.carbohydrateCount} type="Glucides" color="rgba(249, 206, 35, 6.61%)" />
            <IconScore icon={Burger} score={data.data.keyData.lipidCount} type="Lipides" color="#FD51811A" />
        </div>
    )
}

export default IconActivityScore;