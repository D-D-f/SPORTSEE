import useSWR from "swr";
import "./Name.css";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Name = () => {

    const { data, error, isLoading } = useSWR(
        "http://localhost:3000/user/12",
        fetcher
    );
    if (error) throw new Error("Unable to recover data");
    if (isLoading) return "Loading";

    return (
        <header className={"header_name"}>
            <h2>Bonjour <span style={{color: "#FF0101"}}>{data.data.userInfos.firstName}</span></h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    )
}

export default Name;