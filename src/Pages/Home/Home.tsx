import "./Home.css";
import Name from "../../Component/Name/Name.tsx";
import Activity from "../../Component/Activity/Activity.tsx";

const Home = () => {
    return (
        <div className={"Home"}>
           <Name />
            <Activity />
        </div>
    )
}

export default Home;