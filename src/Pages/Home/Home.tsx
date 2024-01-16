import "./Home.css";
import Name from "../../Component/Name/Name.tsx";
import Activity from "../../Component/Activity/Activity.tsx";
import IconActivityScore from "../../Component/IconActivty/IconActivityScore.tsx";

const Home = () => {
    return (
        <div className={"Home"}>
           <Name />
            <div className="flex_container">
                <Activity />
                <IconActivityScore />
            </div>
        </div>

    )
}

export default Home;