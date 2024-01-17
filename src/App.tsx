import Header from "./Component/Header/Header.tsx";
import HeadBand from "./Component/HeadBand/HeadBand.tsx";
import Home from "./Page/Home.tsx";
import "./App.css";

const App = () => {
  return (
    <div className="container">
        <Header />
            <main className="main">
                <HeadBand />
                <Home />
            </main>
    </div>
  )
}

export default App
