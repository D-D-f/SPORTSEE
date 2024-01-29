import "./Home.css";
import Name from "../../Component/Name/Name.tsx";
import {UseCallApi} from "../../Api/UseCallApi.ts";
import ChartActivity from "../../Component/ChartActivty/ChartActivity.tsx";

const Home = () => {
    const data = UseCallApi();
    const name: string = data.data?.userInfos.firstName;

    return (
        <main>
            <Name name={name} />
            <div className="containerChart">
                <div className="firstChart">
                    <ChartActivity />
                </div>

            </div>
        </main>
    )
}

export default Home;