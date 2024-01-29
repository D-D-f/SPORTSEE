import './App.css';
import Header from "./Component/Header/Header.tsx";
import Home from "./Page/Home/Home.tsx";
import HeadBand from "./Component/HeadBand/HeadBand.tsx";

const App = () => {
  return (
    <>
      <Header />
        <div className="container d_flex containerMain">
            <HeadBand />
            <Home />
        </div>
    </>
  )
}

export default App;
