import "./App.css";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const App = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/user/12/performance",
    fetcher
  );
  if (error) throw new Error("Unable to recover data");
  if (isLoading) return "Loading";

  console.log(data);

  return (
    <>
      <main></main>
    </>
  );
};

export default App;
