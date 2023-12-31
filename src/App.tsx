import "./App.css";
import Header from "./Component/Header/Header";
import HeadBand from "./Component/HeadBand/HeadBand";
import Home from "./Pages/Home/Home.tsx";


const App = () => {
  return (
    <>
      <Header />
      <main>
        <HeadBand />
          <Home />
      </main>
    </>
  );
};

export default App;
