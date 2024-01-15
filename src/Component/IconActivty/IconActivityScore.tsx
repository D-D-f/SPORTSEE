import IconScore from "../IconScore/IconScore.tsx";
import Fire from "../../asset/Logo/energy.svg";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const IconActivityScore = () => {

    const { data, error, isLoading } = useSWR(
        "http://localhost:3000/user/12",
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    console.log(data.data.keyData)
    // const allIcons = data.map(item => console.log(item))





    return (
        <div>
            <IconScore icon={Fire} score={data.data.keyData.calorieCount} type="Calories" color="#FF0000" />
        </div>
    )
}

export default IconActivityScore;