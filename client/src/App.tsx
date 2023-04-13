import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { useFetch } from "./hooks/useFetch";
import "./App.css";

function BallotList() {
  const [ballots, setBallots] = useState([]);
  const { data, loading, error } = useFetch("/ballot");
  console.log(data);

  return (
    <>
      <h1>ballot list!</h1>
      {data ? (
        <ul>
          {data.map((datum: any) => (
            <li key={datum.id}>{datum.id}</li>
          ))}
        </ul>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BallotList />
    </div>
  );
}

export default App;
