import "./App.css";
import Header from "./Component/Header/Header";
import HeadBand from "./Component/HeadBand/HeadBand";
import Home from "./Pages/Home/Home.tsx";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const App = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/user/12/activity",
    fetcher
  );
  if (error) throw new Error("Unable to recover data");
  if (isLoading) return "Loading";

  console.log(data);

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
